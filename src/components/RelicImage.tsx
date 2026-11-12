import React, { useState, useEffect } from 'react';

interface RelicImageProps {
  src: string;
  alt: string;
  blueprintType: 'rover' | 'lander' | 'helicopter' | 'stage' | 'buggy';
  className?: string;
  aspectRatio?: string;
  credit?: string;
  fallbackSrc?: string;
  objectPosition?: string;
}

export const RelicImage: React.FC<RelicImageProps> = ({
  src,
  alt,
  blueprintType,
  className = 'w-full h-full object-cover',
  aspectRatio = 'aspect-video',
  credit,
  fallbackSrc,
  objectPosition = 'center center'
}) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [triedFallback, setTriedFallback] = useState(false);

  useEffect(() => {
    setCurrentSrc(src);
    setHasError(false);
    setIsLoaded(false);
    setTriedFallback(false);
  }, [src]);

  const handleImageError = () => {
    if (fallbackSrc && !triedFallback && fallbackSrc !== currentSrc) {
      setTriedFallback(true);
      setCurrentSrc(fallbackSrc);
    } else {
      setHasError(true);
    }
  };

  const renderBlueprintSvg = () => {
    switch (blueprintType) {
      case 'rover':
        return (
          <svg className="w-28 h-28 text-[#FF5722]/50 stroke-current fill-none stroke-[1.5]" viewBox="0 0 100 100">
            {/* Rocker-bogie chassis */}
            <path d="M 20 70 L 35 55 L 60 55 L 80 70" />
            <path d="M 35 55 L 35 70" />
            <path d="M 60 55 L 60 40 L 75 35" />
            {/* Mast and Pancam head */}
            <path d="M 45 55 L 45 25 L 55 25 L 55 30" />
            <circle cx="50" cy="22" r="4" />
            {/* Wheels */}
            <circle cx="20" cy="72" r="8" />
            <circle cx="35" cy="72" r="8" />
            <circle cx="80" cy="72" r="8" />
            {/* Solar panel deck */}
            <polygon points="30,45 65,45 60,52 25,52" />
            <line x1="30" y1="45" x2="65" y2="45" strokeDasharray="2 2" />
          </svg>
        );
      case 'helicopter':
        return (
          <svg className="w-28 h-28 text-[#FF5722]/60 stroke-current fill-none stroke-[1.5]" viewBox="0 0 100 100">
            {/* Mast and solar panel */}
            <line x1="50" y1="20" x2="50" y2="65" />
            <rect x="42" y="15" width="16" height="5" />
            {/* Upper counter-rotating rotor */}
            <ellipse cx="50" cy="30" rx="42" ry="4" />
            {/* Lower counter-rotating rotor */}
            <ellipse cx="50" cy="40" rx="42" ry="4" />
            {/* Fuselage box */}
            <rect x="44" y="48" width="12" height="14" rx="2" />
            {/* 4 Carbon fiber landing legs */}
            <line x1="44" y1="60" x2="22" y2="82" />
            <line x1="56" y1="60" x2="78" y2="82" />
            <line x1="46" y1="62" x2="30" y2="82" />
            <line x1="54" y1="62" x2="70" y2="82" />
            <circle cx="22" cy="82" r="2" />
            <circle cx="78" cy="82" r="2" />
          </svg>
        );
      case 'lander':
        return (
          <svg className="w-28 h-28 text-[#69D9FF]/50 stroke-current fill-none stroke-[1.5]" viewBox="0 0 100 100">
            {/* Central deck */}
            <polygon points="30,55 70,55 65,45 35,45" />
            {/* Solar panels */}
            <ellipse cx="18" cy="50" rx="14" ry="7" />
            <ellipse cx="82" cy="50" rx="14" ry="7" />
            {/* SEIS dome instrument */}
            <path d="M 45 45 A 5 5 0 0 1 55 45" />
            {/* 3 Landing legs and footpads */}
            <line x1="35" y1="55" x2="15" y2="78" />
            <line x1="65" y1="55" x2="85" y2="78" />
            <line x1="50" y1="55" x2="50" y2="78" />
            <ellipse cx="15" cy="78" rx="6" ry="2" />
            <ellipse cx="85" cy="78" rx="6" ry="2" />
            <ellipse cx="50" cy="78" rx="6" ry="2" />
          </svg>
        );
      case 'stage':
        return (
          <svg className="w-28 h-28 text-[#C9D3E0]/60 stroke-current fill-none stroke-[1.5]" viewBox="0 0 100 100">
            {/* Octagonal base */}
            <polygon points="32,45 68,45 76,62 68,70 32,70 24,62" />
            {/* Descent engine bell */}
            <path d="M 44 70 L 40 85 L 60 85 L 56 70 Z" />
            {/* 4 landing struts and footpads */}
            <line x1="24" y1="62" x2="8" y2="84" />
            <line x1="76" y1="62" x2="92" y2="84" />
            <line x1="32" y1="70" x2="22" y2="86" />
            <line x1="68" y1="70" x2="78" y2="86" />
            <ellipse cx="8" cy="85" rx="7" ry="2" />
            <ellipse cx="92" cy="85" rx="7" ry="2" />
            <ellipse cx="22" cy="86" rx="6" ry="2" />
            <ellipse cx="78" cy="86" rx="6" ry="2" />
            {/* Ladder on front leg */}
            <line x1="24" y1="62" x2="24" y2="84" strokeDasharray="2 2" />
          </svg>
        );
      case 'buggy':
      default:
        return (
          <svg className="w-28 h-28 text-[#69D9FF]/50 stroke-current fill-none stroke-[1.5]" viewBox="0 0 100 100">
            {/* Chassis and seats */}
            <path d="M 22 60 L 78 60" />
            <rect x="36" y="44" width="12" height="16" rx="2" />
            <rect x="52" y="44" width="12" height="16" rx="2" />
            {/* High gain umbrella antenna */}
            <line x1="72" y1="60" x2="76" y2="34" />
            <path d="M 70 34 Q 76 28 82 34 Z" />
            {/* Wheels */}
            <circle cx="24" cy="68" r="10" />
            <circle cx="76" cy="68" r="10" />
            <circle cx="24" cy="68" r="4" />
            <circle cx="76" cy="68" r="4" />
          </svg>
        );
    }
  };

  return (
    <div className={`relative overflow-hidden bg-[#101827] ${aspectRatio} group`}>
      {/* Fallback schematic backdrop always present */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center p-6 bg-gradient-to-b from-[#101827] to-[#060814] ${
          isLoaded && !hasError ? 'opacity-0' : 'opacity-100'
        } transition-opacity duration-500`}
      >
        <div className="absolute inset-0 bg-starfield opacity-40 pointer-events-none" />
        <div className="relative z-10 flex flex-col items-center text-center">
          {renderBlueprintSvg()}
          <span className="mt-3 text-xs font-mono tracking-wider text-[#A7B2C5] uppercase">
            ARCHIVAL BLUEPRINT · {blueprintType.toUpperCase()}
          </span>
          <span className="text-[11px] font-mono text-[#A7B2C5]/70 mt-1">
            NASA DEEP SPACE REPOSITORY
          </span>
        </div>
      </div>

      {/* Main Authentic Photography */}
      {!hasError && (
        <img
          src={currentSrc}
          alt={alt}
          referrerPolicy="no-referrer"
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          onError={handleImageError}
          style={{ objectPosition }}
          className={`${className} transition-transform duration-700 ease-out group-hover:scale-105 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}

      {/* High-contrast gradient scrim to ensure legible typography on top */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#060814] via-[#060814]/30 to-transparent pointer-events-none" />

      {/* Credit tag if present */}
      {credit && isLoaded && !hasError && (
        <div className="absolute bottom-2 right-2 text-[10px] font-mono text-[#A7B2C5]/75 bg-[#060814]/80 px-2 py-0.5 rounded-sm pointer-events-none backdrop-blur-xs">
          {credit}
        </div>
      )}
    </div>
  );
};
