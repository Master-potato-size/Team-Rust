import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BookmarkCheck,
  CheckCircle2,
  Lock,
  Award,
  ArrowRight,
  Eye,
  RotateCcw,
  Sparkles,
  Droplets,
  Moon,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { RELICS_DATA } from '../data/relicsData';
import { useExploration } from '../context/ExplorationContext';
import { Breadcrumb } from '../components/Breadcrumb';

export const MissionLogPage: React.FC = () => {
  const {
    exploredSlugs,
    completedSlugs,
    waterDetectiveUnlocked,
    isLunarPioneerUnlocked,
    isCertificateAvailable,
    totalExploredCount,
    totalRelicsCount,
    progressPercentage,
    getRelicStatus,
    resetProgress
  } = useExploration();

  const [confirmReset, setConfirmReset] = useState(false);

  const formatCount = (count: number) => {
    return count < 10 ? `0${count}` : `${count}`;
  };

  const handleReset = () => {
    resetProgress();
    setConfirmReset(false);
  };

  return (
    <div className="min-h-screen bg-[#060814] text-[#F4F6FA] py-12 px-4 sm:px-6 lg:px-8 bg-starfield">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Navigation Breadcrumb */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <Breadcrumb
            items={[
              { label: 'GHOSTS OF THE VOID', path: '/' },
              { label: 'MISSION LOG' }
            ]}
          />

          {/* Reset progress control for testing/auditing */}
          <div className="flex items-center gap-2">
            {confirmReset ? (
              <div className="flex items-center gap-2 bg-[#101827] border border-[#FF5722] p-1.5 rounded-xs">
                <span className="text-[11px] font-mono text-[#FF5722]">RESET ALL PROGRESS?</span>
                <button
                  onClick={handleReset}
                  className="px-2 py-0.5 text-[10px] font-mono font-bold bg-[#FF5722] text-white rounded-xs"
                >
                  YES, RESET
                </button>
                <button
                  onClick={() => setConfirmReset(false)}
                  className="px-2 py-0.5 text-[10px] font-mono text-[#A7B2C5]"
                >
                  CANCEL
                </button>
              </div>
            ) : (
              <button
                onClick={() => setConfirmReset(true)}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono border border-[#26344A] bg-[#101827] text-[#A7B2C5] hover:text-[#FF5722] rounded-xs transition-colors"
                title="Reset local storage exploration records"
              >
                <RotateCcw className="h-3 w-3" />
                <span>RESET EXPEDITION DATA</span>
              </button>
            )}
          </div>
        </div>

        {/* Header Section */}
        <div className="space-y-4 border-b border-[#26344A] pb-8">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#69D9FF] uppercase">
            <BookmarkCheck className="h-4 w-4" />
            <span>EXPEDITION DASHBOARD</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F4F6FA] font-display">
            YOUR MISSION LOG.
          </h1>

          <p className="text-base sm:text-lg text-[#A7B2C5] max-w-2xl leading-relaxed">
            Live catalog of your extraterrestrial archaeology operations. Inspect uncovered relics, review telemetry validations, and monitor achievement milestones.
          </p>
        </div>

        {/* 1. Dynamic Exploration Progress Card */}
        <div className="p-6 sm:p-8 rounded-sm border border-[#26344A] bg-[#101827] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono tracking-wider uppercase text-[#A7B2C5]">
                AGGREGATE EXPLORATION STATUS
              </span>
              <div className="text-3xl sm:text-4xl font-bold font-mono tracking-tight text-[#F4F6FA] mt-1 tabular-nums">
                {formatCount(totalExploredCount)} / {formatCount(totalRelicsCount)} RELICS EXPLORED
              </div>
            </div>

            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold font-mono text-[#69D9FF] tabular-nums">
                {progressPercentage}%
              </span>
              <span className="text-xs font-mono text-[#A7B2C5] uppercase">
                DISCOVERY RATIO
              </span>
            </div>
          </div>

          {/* Animated dynamic progress bar */}
          <div className="w-full bg-[#060814] h-3 rounded-full overflow-hidden border border-[#26344A]">
            <div
              className="bg-gradient-to-r from-[#FF5722] via-[#69D9FF] to-[#45D483] h-full transition-all duration-700 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2 text-xs font-mono text-[#A7B2C5]">
            <div>
              <span className="block text-[11px] text-[#A7B2C5]/70">MARS SECTOR</span>
              <span className="text-[#FF5722] font-bold">
                {formatCount(exploredSlugs.filter((s) => ['spirit-rover', 'opportunity-rover', 'insight-lander', 'ingenuity-helicopter'].includes(s)).length)} / 04
              </span>
            </div>
            <div>
              <span className="block text-[11px] text-[#A7B2C5]/70">LUNAR SECTOR</span>
              <span className="text-[#69D9FF] font-bold">
                {formatCount(exploredSlugs.filter((s) => ['apollo-11-descent-stage', 'surveyor-3', 'lunar-roving-vehicle'].includes(s)).length)} / 03
              </span>
            </div>
            <div>
              <span className="block text-[11px] text-[#A7B2C5]/70">MISSIONS COMPLETED</span>
              <span className="text-[#45D483] font-bold">
                {formatCount(completedSlugs.length)} / {formatCount(totalRelicsCount)}
              </span>
            </div>
            <div>
              <span className="block text-[11px] text-[#A7B2C5]/70">HONORS UNLOCKED</span>
              <span className="text-[#FFC857] font-bold">
                {(waterDetectiveUnlocked ? 1 : 0) + (isLunarPioneerUnlocked ? 1 : 0) + (isCertificateAvailable ? 1 : 0)} / 03
              </span>
            </div>
          </div>
        </div>

        {/* 2. Relic Tracking Checklist */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-[#26344A] pb-3">
            <h2 className="text-xl font-bold font-display text-[#F4F6FA]">
              RELIC CATALOG DOSSIER
            </h2>
            <span className="text-xs font-mono text-[#A7B2C5]">
              7 PLANETARY MONUMENTS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {RELICS_DATA.map((relic) => {
              const status = getRelicStatus(relic.slug);
              const isMars = relic.world === 'mars';

              return (
                <div
                  key={relic.slug}
                  className="flex items-center justify-between p-4 bg-[#101827]/70 border border-[#26344A] rounded-sm hover:border-[#A7B2C5]/50 transition-colors"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${isMars ? 'bg-[#FF5722]' : 'bg-[#69D9FF]'}`} />
                      <span className="text-xs font-mono uppercase text-[#A7B2C5]">
                        {relic.worldName}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-[#F4F6FA] font-display">
                      {relic.name}
                    </h3>
                    <div className="text-xs font-mono">
                      {status === 'completed' && (
                        <span className="text-[#45D483] font-bold flex items-center gap-1">
                          <CheckCircle2 className="h-3 w-3" /> MISSION COMPLETED
                        </span>
                      )}
                      {status === 'explored' && (
                        <span className="text-[#69D9FF] flex items-center gap-1">
                          <Eye className="h-3 w-3" /> EXPLORED
                        </span>
                      )}
                      {status === 'not_explored' && (
                        <span className="text-[#A7B2C5]/60 flex items-center gap-1">
                          <Lock className="h-3 w-3" /> NOT EXPLORED
                        </span>
                      )}
                    </div>
                  </div>

                  <Link
                    to={`/relic/${relic.slug}`}
                    className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-semibold uppercase rounded-xs border transition-colors ${
                      status !== 'not_explored'
                        ? 'border-[#26344A] bg-[#060814] text-[#F4F6FA] hover:border-[#69D9FF]'
                        : 'border-[#26344A] bg-[#101827] text-[#A7B2C5] hover:text-[#F4F6FA] hover:border-[#FF5722]'
                    }`}
                  >
                    <span>{status === 'not_explored' ? 'EXPLORE' : 'REVIEW'}</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. Achievement Locker */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-[#26344A] pb-3">
            <h2 className="text-xl font-bold font-display text-[#F4F6FA]">
              ACHIEVEMENT LOCKER
            </h2>
            <span className="text-xs font-mono text-[#A7B2C5]">
              RESEARCH HONORS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Water Detective */}
            <div
              className={`p-6 rounded-sm border transition-all ${
                waterDetectiveUnlocked
                  ? 'border-[#45D483] bg-[#101827] shadow-lg shadow-[#45D483]/5'
                  : 'border-[#26344A] bg-[#101827]/40 opacity-70'
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`p-3 rounded-xs border shrink-0 ${
                    waterDetectiveUnlocked
                      ? 'border-[#45D483] bg-[#45D483]/15 text-[#45D483]'
                      : 'border-[#26344A] bg-[#060814] text-[#A7B2C5]'
                  }`}
                >
                  <Droplets className="h-6 w-6" />
                </div>

                <div className="space-y-2 flex-1">
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs font-mono font-bold tracking-wider uppercase ${
                        waterDetectiveUnlocked ? 'text-[#45D483]' : 'text-[#A7B2C5]'
                      }`}
                    >
                      {waterDetectiveUnlocked ? 'ACHIEVEMENT UNLOCKED' : 'LOCKED'}
                    </span>
                    {waterDetectiveUnlocked ? (
                      <CheckCircle2 className="h-4 w-4 text-[#45D483]" />
                    ) : (
                      <Lock className="h-4 w-4 text-[#A7B2C5]" />
                    )}
                  </div>

                  <h3 className="text-lg font-bold font-display text-[#F4F6FA]">
                    WATER DETECTIVE
                  </h3>

                  <p className="text-xs text-[#A7B2C5] leading-relaxed">
                    Successfully decipher the geochemical evidence gathered by Spirit Rover indicating ancient Martian hydrothermal activity.
                  </p>

                  {!waterDetectiveUnlocked && (
                    <div className="pt-2">
                      <Link
                        to="/quiz"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-[#FFC857] hover:underline"
                      >
                        <span>TAKE TERMINAL 01 QUIZ →</span>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Lunar Pioneer */}
            <div
              className={`p-6 rounded-sm border transition-all ${
                isLunarPioneerUnlocked
                  ? 'border-[#69D9FF] bg-[#101827] shadow-lg shadow-[#69D9FF]/5'
                  : 'border-[#26344A] bg-[#101827]/40 opacity-70'
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`p-3 rounded-xs border shrink-0 ${
                    isLunarPioneerUnlocked
                      ? 'border-[#69D9FF] bg-[#69D9FF]/15 text-[#69D9FF]'
                      : 'border-[#26344A] bg-[#060814] text-[#A7B2C5]'
                  }`}
                >
                  <Moon className="h-6 w-6" />
                </div>

                <div className="space-y-2 flex-1">
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs font-mono font-bold tracking-wider uppercase ${
                        isLunarPioneerUnlocked ? 'text-[#69D9FF]' : 'text-[#A7B2C5]'
                      }`}
                    >
                      {isLunarPioneerUnlocked ? 'ACHIEVEMENT UNLOCKED' : 'LOCKED'}
                    </span>
                    {isLunarPioneerUnlocked ? (
                      <CheckCircle2 className="h-4 w-4 text-[#69D9FF]" />
                    ) : (
                      <Lock className="h-4 w-4 text-[#A7B2C5]" />
                    )}
                  </div>

                  <h3 className="text-lg font-bold font-display text-[#F4F6FA]">
                    LUNAR PIONEER
                  </h3>

                  <p className="text-xs text-[#A7B2C5] leading-relaxed">
                    Explore all three historical artifacts resting upon the surface of the Moon: Apollo 11 Descent Stage, Surveyor 3, and Apollo Lunar Roving Vehicle.
                  </p>

                  {!isLunarPioneerUnlocked && (
                    <div className="pt-2">
                      <Link
                        to="/archive/lunar"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-[#69D9FF] hover:underline"
                      >
                        <span>ENTER LUNAR ARCHIVE →</span>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 4. Certificate Notification Card */}
        <div className="p-8 rounded-sm border-2 border-[#FFC857]/60 bg-[#101827] space-y-6 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex items-start gap-5">
              <div className="p-4 rounded-xs bg-[#FFC857]/15 border border-[#FFC857] text-[#FFC857] shrink-0">
                <Award className="h-8 w-8" />
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold tracking-widest text-[#FFC857] uppercase">
                    CREDENTIAL EVALUATION
                  </span>
                  <span className="text-xs font-mono text-[#A7B2C5]">·</span>
                  <span className="text-xs font-mono text-[#F4F6FA]">
                    {isCertificateAvailable ? 'QUALIFIED FOR CONFERRAL' : 'REQUIREMENT INCOMPLETE'}
                  </span>
                </div>

                <h3 className="text-2xl font-bold font-display text-[#F4F6FA]">
                  CHIEF SPACE ARCHAEOLOGIST CERTIFICATE
                </h3>

                <p className="text-sm text-[#A7B2C5] max-w-xl leading-relaxed">
                  Conferred for successfully completing the exploration of Spirit Rover and uncovering the scientific legacy of humanity's robotic exploration of Mars.
                </p>

                {!isCertificateAvailable && (
                  <div className="text-xs font-mono text-[#FF5722] pt-1">
                    REQUIREMENT: Visit and explore Spirit Rover (/relic/spirit-rover) to unlock this certificate.
                  </div>
                )}
              </div>
            </div>

            {/* Functional Button */}
            <div className="shrink-0">
              {isCertificateAvailable ? (
                <Link
                  to="/certificate"
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-[#FFC857] hover:bg-[#FFC857]/90 text-[#060814] font-bold text-xs sm:text-sm tracking-wider uppercase rounded-xs transition-all shadow-lg shadow-[#FFC857]/20"
                >
                  <span>VIEW MY CERTIFICATE</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              ) : (
                <Link
                  to="/relic/spirit-rover"
                  className="flex items-center justify-center gap-2 px-6 py-3.5 border border-[#26344A] bg-[#060814] text-[#A7B2C5] hover:text-[#F4F6FA] text-xs font-mono uppercase tracking-wider rounded-xs"
                >
                  <Lock className="h-3.5 w-3.5 mr-1" />
                  <span>EXPLORE SPIRIT ROVER TO UNLOCK</span>
                </Link>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
