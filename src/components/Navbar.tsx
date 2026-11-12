import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Compass, Database, BookmarkCheck, Volume2, VolumeX, Sliders } from 'lucide-react';
import { useExploration } from '../context/ExplorationContext';
import { soundManager } from '../utils/audio';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const location = useLocation();
  const { totalExploredCount, totalRelicsCount } = useExploration();

  const [audioState, setAudioState] = useState<{ isMuted: boolean; volume: number }>({
    isMuted: soundManager.getIsMuted(),
    volume: soundManager.getVolume()
  });

  const volumeMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const unsubscribe = soundManager.subscribe((state) => {
      setAudioState(state);
    });
    return unsubscribe;
  }, []);

  // Close volume popover when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (volumeMenuRef.current && !volumeMenuRef.current.contains(e.target as Node)) {
        setShowVolumeSlider(false);
      }
    };
    if (showVolumeSlider) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showVolumeSlider]);

  const handleToggleSound = () => {
    soundManager.toggleMute();
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const vol = parseFloat(e.target.value);
    soundManager.setVolume(vol);
    if (audioState.isMuted && vol > 0) {
      soundManager.setMuted(false);
    }
  };

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const navLinks = [
    { name: 'EXPLORE', path: '/destinations', icon: Compass },
    { name: 'CATALOG', path: '/catalog', icon: Database },
    { name: 'ARCHIVES', path: '/archive/mars', icon: Database },
    { name: 'MISSION LOG', path: '/mission-log', icon: BookmarkCheck }
  ];

  return (
    <header className="sticky top-0 z-50 h-[76px] w-full border-b border-[#26344A] bg-[#060814]/90 backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Brand Wordmark */}
        <Link
          to="/"
          onClick={() => soundManager.playClick()}
          className="group flex items-center gap-3 text-lg font-bold tracking-widest text-[#F4F6FA] hover:text-[#69D9FF] transition-colors whitespace-nowrap shrink-0 font-display"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded border border-[#26344A] bg-[#101827] text-[#FF5722] group-hover:border-[#FF5722] transition-colors">
            ✦
          </span>
          <span>GHOSTS OF THE VOID</span>
        </Link>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wider">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => soundManager.playNav()}
                className={`relative py-1 whitespace-nowrap shrink-0 transition-colors ${
                  active ? 'text-[#69D9FF]' : 'text-[#A7B2C5] hover:text-[#F4F6FA]'
                }`}
              >
                {link.name}
                {active && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#69D9FF]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action / Telemetry Status & Sound Controller */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          {/* Sound Controller with Toggle and Volume Slider */}
          <div className="relative" ref={volumeMenuRef}>
            <div className="flex items-center rounded-xs border border-[#26344A] bg-[#101827] p-0.5 shadow-sm">
              <button
                type="button"
                onClick={handleToggleSound}
                className={`flex items-center gap-2 px-2.5 py-1.5 text-xs font-mono transition-colors rounded-xs ${
                  audioState.isMuted
                    ? 'text-[#A7B2C5]/60 hover:text-[#A7B2C5]'
                    : 'bg-[#69D9FF]/10 text-[#69D9FF] font-semibold'
                }`}
                title={
                  audioState.isMuted
                    ? 'Sound muted. Click to turn sound on'
                    : 'Sound active with ambient drone. Click to turn sound off'
                }
                aria-label={audioState.isMuted ? 'Turn Sound On' : 'Turn Sound Off'}
              >
                {audioState.isMuted ? (
                  <VolumeX className="h-4 w-4 shrink-0 text-[#A7B2C5]/50" />
                ) : (
                  <div className="flex items-center gap-1.5">
                    <Volume2 className="h-4 w-4 shrink-0 text-[#69D9FF]" />
                    {/* Animated sound wave bars */}
                    <span className="flex items-end gap-0.5 h-3">
                      <span className="w-0.5 h-1.5 bg-[#69D9FF] animate-pulse" />
                      <span className="w-0.5 h-3 bg-[#69D9FF] animate-pulse delay-75" />
                      <span className="w-0.5 h-2 bg-[#69D9FF] animate-pulse delay-150" />
                    </span>
                  </div>
                )}
                <span className="text-[11px] tracking-wider uppercase font-semibold">
                  {audioState.isMuted ? 'SOUND OFF' : 'SOUND ON'}
                </span>
              </button>

              {/* Volume Slider Trigger */}
              <button
                type="button"
                onClick={() => setShowVolumeSlider(!showVolumeSlider)}
                className={`p-1.5 border-l border-[#26344A] hover:bg-[#1E293B] transition-colors ${
                  showVolumeSlider ? 'text-[#69D9FF]' : 'text-[#A7B2C5]'
                }`}
                title="Adjust sound volume"
                aria-label="Adjust sound volume"
              >
                <Sliders className="h-3.5 w-3.5" />
              </button>
            </div>

            {/* Volume Slider Popover */}
            {showVolumeSlider && (
              <div className="absolute right-0 top-full mt-2 w-48 rounded-sm border border-[#26344A] bg-[#0B1120] p-3 shadow-xl backdrop-blur-md z-50 animate-in fade-in slide-in-from-top-1">
                <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-[#A7B2C5] mb-2">
                  <span>MASTER VOLUME</span>
                  <span className="text-[#69D9FF] font-bold">
                    {Math.round(audioState.volume * 100)}%
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={audioState.volume}
                  onChange={handleVolumeChange}
                  className="w-full h-1.5 bg-[#1E293B] rounded-lg appearance-none cursor-pointer accent-[#69D9FF]"
                />
                <div className="mt-2 text-[9px] text-[#A7B2C5]/70 font-mono flex justify-between">
                  <span>0%</span>
                  <span>50%</span>
                  <span>100%</span>
                </div>
              </div>
            )}
          </div>

          <Link
            to="/mission-log"
            onClick={() => soundManager.playClick()}
            className="flex items-center gap-2.5 px-3.5 py-1.5 text-xs font-mono tracking-wider border border-[#26344A] bg-[#101827] text-[#A7B2C5] hover:border-[#69D9FF] hover:text-[#F4F6FA] transition-all rounded-sm whitespace-nowrap shrink-0"
          >
            <span>PROGRESS:</span>
            <span className="text-[#69D9FF] font-semibold tabular-nums">
              0{totalExploredCount} / 0{totalRelicsCount}
            </span>
          </Link>

          <Link
            to="/destinations"
            onClick={() => soundManager.playClick()}
            className="px-4 py-2 text-xs font-semibold tracking-wider text-white bg-[#FF5722] hover:bg-[#FF5722]/90 transition-colors rounded-sm whitespace-nowrap shrink-0"
          >
            ENTER ARCHIVES
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={handleToggleSound}
            className={`px-2 py-1 rounded-xs border text-[10px] font-mono font-semibold transition-colors flex items-center gap-1 ${
              audioState.isMuted
                ? 'border-[#26344A] bg-[#101827] text-[#A7B2C5]/60'
                : 'border-[#69D9FF]/50 bg-[#101827] text-[#69D9FF]'
            }`}
            aria-label={audioState.isMuted ? 'Turn Sound On' : 'Turn Sound Off'}
          >
            {audioState.isMuted ? <VolumeX className="h-3.5 w-3.5" /> : <Volume2 className="h-3.5 w-3.5" />}
            <span>{audioState.isMuted ? 'SOUND OFF' : 'SOUND ON'}</span>
          </button>
          <Link
            to="/mission-log"
            onClick={() => soundManager.playClick()}
            className="px-2.5 py-1 text-[11px] font-mono border border-[#26344A] bg-[#101827] text-[#69D9FF] rounded-sm tabular-nums"
          >
            {totalExploredCount}/{totalRelicsCount}
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#A7B2C5] hover:text-[#F4F6FA] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#26344A] bg-[#060814] px-4 pt-3 pb-6 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => {
                soundManager.playNav();
                setMobileMenuOpen(false);
              }}
              className={`flex items-center gap-3 px-3 py-2.5 text-sm tracking-wider font-medium rounded-sm ${
                isActive(link.path)
                  ? 'bg-[#101827] text-[#69D9FF] border border-[#26344A]'
                  : 'text-[#A7B2C5] hover:bg-[#101827] hover:text-[#F4F6FA]'
              }`}
            >
              <link.icon className="h-4 w-4" />
              {link.name}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              to="/destinations"
              onClick={() => {
                soundManager.playClick();
                setMobileMenuOpen(false);
              }}
              className="block w-full py-2.5 text-center text-xs font-semibold tracking-wider text-white bg-[#FF5722] hover:bg-[#FF5722]/90 rounded-sm"
            >
              ENTER ARCHIVES →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
