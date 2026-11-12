import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Moon, Info } from 'lucide-react';
import { ALL_MASTER_RELICS } from '../data/allRelicsData';
import { RelicCard } from '../components/RelicCard';
import { Breadcrumb } from '../components/Breadcrumb';
import { useExploration } from '../context/ExplorationContext';

export const LunarArchivePage: React.FC = () => {
  const lunarRelics = ALL_MASTER_RELICS.filter((r) => r.celestialBody === 'Moon');
  const { exploredSlugs } = useExploration();

  const lunarExploredCount = lunarRelics.filter((r) => exploredSlugs.includes(r.slug)).length;

  return (
    <div className="min-h-screen bg-[#060814] text-[#F4F6FA] py-12 px-4 sm:px-6 lg:px-8 bg-starfield">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Breadcrumb Navigation */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <Breadcrumb
            items={[
              { label: 'GHOSTS OF THE VOID', path: '/' },
              { label: 'DESTINATIONS', path: '/destinations' },
              { label: 'LUNAR ARCHIVE' }
            ]}
          />

          <div className="flex items-center gap-3">
            <Link
              to="/catalog"
              className="inline-flex items-center gap-2 text-xs font-mono text-[#69D9FF] hover:underline"
            >
              <span>VIEW MASTER RELIC CATALOG →</span>
            </Link>
            <Link
              to="/destinations"
              className="inline-flex items-center gap-2 text-xs font-mono text-[#A7B2C5] hover:text-[#69D9FF] transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>RETURN TO COMMAND HUB</span>
            </Link>
          </div>
        </div>

        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#26344A] pb-8">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#69D9FF] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#69D9FF]" />
              <span>SECTOR 02 · GHOSTS OF THE MOON</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F4F6FA] font-display">
              THE SILENT LUNAR ARCHIVE.
            </h1>
            <p className="text-base sm:text-lg text-[#A7B2C5] leading-relaxed">
              0{lunarRelics.length} documented human artifacts resting in the vacuum of space across the lunar surface.
            </p>
          </div>

          {/* Sector progress badge */}
          <div className="flex items-center gap-4 p-4 rounded-xs bg-[#101827] border border-[#26344A] shrink-0">
            <div>
              <div className="text-[11px] font-mono text-[#A7B2C5] uppercase">
                LUNAR EXPLORATION STATUS
              </div>
              <div className="text-xl font-bold font-mono text-[#69D9FF] tabular-nums">
                0{lunarExploredCount} / 0{lunarRelics.length} CATALOGED
              </div>
            </div>
            <div className="w-12 h-12 rounded-full border-2 border-[#26344A] flex items-center justify-center font-mono text-xs font-bold text-[#F4F6FA]">
              {Math.round((lunarExploredCount / (lunarRelics.length || 1)) * 100)}%
            </div>
          </div>
        </div>

        {/* Relic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lunarRelics.map((relic) => (
            <RelicCard
              key={relic.slug}
              relic={relic}
            />
          ))}
        </div>

        {/* Lunar Archaeology Historical Note */}
        <div className="p-6 bg-[#101827]/40 border border-[#26344A] rounded-sm flex items-start gap-4">
          <Info className="h-5 w-5 text-[#69D9FF] shrink-0 mt-0.5" />
          <div className="space-y-1 text-xs text-[#A7B2C5] leading-relaxed">
            <span className="text-[#F4F6FA] font-bold font-mono uppercase block">
              ARCHAEOLOGICAL CONTEXT · VACUUM & MICROMETEORITE ENVIRONMENT
            </span>
            <span>
              With no atmosphere, weather, or running water on the Moon, the descent stages, unmanned probes, and lunar rovers remain in near-perfect mechanical condition. Footprints made by the Apollo astronauts in 1969 will endure undisturbed for millions of years.
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};
