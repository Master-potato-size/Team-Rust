import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Database, ChevronRight } from 'lucide-react';
import { ALL_MASTER_RELICS } from '../data/allRelicsData';
import { useExploration } from '../context/ExplorationContext';
import { Breadcrumb } from '../components/Breadcrumb';

export const CommandHubPage: React.FC = () => {
  const { exploredSlugs } = useExploration();

  const marsRelics = ALL_MASTER_RELICS.filter((r) => r.celestialBody === 'Mars');
  const lunarRelics = ALL_MASTER_RELICS.filter((r) => r.celestialBody === 'Moon');

  const marsCount = marsRelics.filter((r) => exploredSlugs.includes(r.slug)).length;
  const lunarCount = lunarRelics.filter((r) => exploredSlugs.includes(r.slug)).length;

  return (
    <div className="min-h-screen bg-[#060814] text-[#F4F6FA] py-12 px-4 sm:px-6 lg:px-8 bg-starfield">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Navigation Breadcrumb */}
        <Breadcrumb
          items={[
            { label: 'GHOSTS OF THE VOID', path: '/' },
            { label: 'COMMAND HUB' }
          ]}
        />

        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#26344A] pb-8">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#69D9FF] uppercase">
              <Compass className="h-3.5 w-3.5" />
              <span>PRIMARY TELEMETRY CONSOLE</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F4F6FA] font-display">
              SELECT YOUR DESTINATION.
            </h1>
            <p className="text-base sm:text-lg text-[#A7B2C5] leading-relaxed">
              Choose a planetary sector to inspect historical relics, analyze geological discoveries, and review recovered NASA and international mission data across Mars and the Moon.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              to="/catalog"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#FF5722] hover:bg-[#FF5722]/90 text-white font-semibold text-xs tracking-wider uppercase rounded-xs transition-colors shadow-lg shadow-[#FF5722]/20"
            >
              <Database className="h-4 w-4" />
              <span>EXPLORE MASTER CATALOG →</span>
            </Link>
          </div>
        </div>

        {/* 2 Destination Cards: Mars and Moon Only */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: MARS SECTOR */}
          <div className="relative overflow-hidden rounded-sm border border-[#26344A] bg-[#101827] p-8 sm:p-10 flex flex-col justify-between group hover:border-[#FF5722] hover:shadow-2xl hover:shadow-[#FF5722]/10 transition-all duration-300">
            <div className="absolute inset-0 bg-nebula-mars pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-mono tracking-widest text-[#FF5722] uppercase font-bold">
                  SECTOR 01 · MARS
                </span>
                <span className="text-xs font-mono px-3 py-1 bg-[#FF5722]/15 text-[#FF5722] border border-[#FF5722]/30 rounded-xs">
                  {marsRelics.length} HISTORICAL MACHINES
                </span>
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#F4F6FA] mb-4 group-hover:text-white transition-colors">
                  THE RED PLANET
                </h2>
                <p className="text-sm sm:text-base text-[#A7B2C5] leading-relaxed">
                  A world of dust, ancient river deltas, robotic pioneers, and machines that transformed our understanding of planetary habitability.
                </p>
              </div>

              {/* Progress and Relics Checklist */}
              <div className="p-4 bg-[#060814]/70 border border-[#26344A] rounded-xs space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#A7B2C5]">EXPLORATION PROGRESS:</span>
                  <span className="text-[#FF5722] font-bold tabular-nums">
                    {marsCount < 10 ? `0${marsCount}` : marsCount} / {marsRelics.length} CATALOGED
                  </span>
                </div>
                <div className="w-full bg-[#101827] h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-[#FF5722] h-full transition-all duration-500"
                    style={{ width: `${(marsCount / (marsRelics.length || 1)) * 100}%` }}
                  />
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs font-mono text-[#F4F6FA] pt-1">
                  {['Curiosity Rover', 'Perseverance Rover', 'Spirit Rover', 'Opportunity Rover', 'InSight Lander', 'Ingenuity Helicopter'].map((name, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[11px]">
                      <span className="text-[#FF5722]">▸</span>
                      <span className="truncate">{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-8">
              <Link
                to="/archive/mars"
                className="flex items-center justify-between w-full py-4 px-6 bg-[#FF5722] hover:bg-[#FF5722]/90 text-white font-semibold text-xs sm:text-sm tracking-wider uppercase rounded-xs transition-all shadow-md group-hover:shadow-lg"
              >
                <span>ENTER MARS ARCHIVE ({marsRelics.length}) →</span>
                <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Card 2: LUNAR SECTOR */}
          <div className="relative overflow-hidden rounded-sm border border-[#26344A] bg-[#101827] p-8 sm:p-10 flex flex-col justify-between group hover:border-[#69D9FF] hover:shadow-2xl hover:shadow-[#69D9FF]/10 transition-all duration-300">
            <div className="absolute inset-0 bg-nebula-lunar pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-mono tracking-widest text-[#69D9FF] uppercase font-bold">
                  SECTOR 02 · THE MOON
                </span>
                <span className="text-xs font-mono px-3 py-1 bg-[#69D9FF]/15 text-[#69D9FF] border border-[#69D9FF]/30 rounded-xs">
                  {lunarRelics.length} HISTORICAL ARTIFACTS
                </span>
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#F4F6FA] mb-4 group-hover:text-white transition-colors">
                  THE SILENT MOON
                </h2>
                <p className="text-sm sm:text-base text-[#A7B2C5] leading-relaxed">
                  Apollo descent stages, lunar roving vehicles, robotic Surveyors, Soviet Luna platforms, and international modern landers preserved in the lunar vacuum.
                </p>
              </div>

              {/* Progress and Relics Checklist */}
              <div className="p-4 bg-[#060814]/70 border border-[#26344A] rounded-xs space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#A7B2C5]">EXPLORATION PROGRESS:</span>
                  <span className="text-[#69D9FF] font-bold tabular-nums">
                    {lunarCount < 10 ? `0${lunarCount}` : lunarCount} / {lunarRelics.length} CATALOGED
                  </span>
                </div>
                <div className="w-full bg-[#101827] h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-[#69D9FF] h-full transition-all duration-500"
                    style={{ width: `${(lunarCount / (lunarRelics.length || 1)) * 100}%` }}
                  />
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs font-mono text-[#F4F6FA] pt-1">
                  {['Apollo 11 Descent Stage', 'Apollo 15 Rover (LRV)', 'Surveyor 3', 'Chandrayaan-3 Vikram', "Chang'e 4 Lander", 'Luna 9 Lander'].map((name, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[11px]">
                      <span className="text-[#69D9FF]">▸</span>
                      <span className="truncate">{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-8">
              <Link
                to="/archive/lunar"
                className="flex items-center justify-between w-full py-4 px-6 bg-[#69D9FF] hover:bg-[#69D9FF]/90 text-[#060814] font-semibold text-xs sm:text-sm tracking-wider uppercase rounded-xs transition-all shadow-md group-hover:shadow-lg"
              >
                <span>ENTER LUNAR ARCHIVE ({lunarRelics.length}) →</span>
                <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
