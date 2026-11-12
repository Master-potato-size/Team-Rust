import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Compass, Info } from 'lucide-react';
import { ALL_MASTER_RELICS } from '../data/allRelicsData';
import { RelicCard } from '../components/RelicCard';
import { Breadcrumb } from '../components/Breadcrumb';
import { useExploration } from '../context/ExplorationContext';

export const MarsArchivePage: React.FC = () => {
  const marsRelics = ALL_MASTER_RELICS.filter((r) => r.celestialBody === 'Mars');
  const { exploredSlugs } = useExploration();

  const marsExploredCount = marsRelics.filter((r) => exploredSlugs.includes(r.slug)).length;

  return (
    <div className="min-h-screen bg-[#060814] text-[#F4F6FA] py-12 px-4 sm:px-6 lg:px-8 bg-starfield">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Breadcrumb Navigation */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <Breadcrumb
            items={[
              { label: 'GHOSTS OF THE VOID', path: '/' },
              { label: 'DESTINATIONS', path: '/destinations' },
              { label: 'MARS ARCHIVE' }
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
              className="inline-flex items-center gap-2 text-xs font-mono text-[#A7B2C5] hover:text-[#FF5722] transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>RETURN TO COMMAND HUB</span>
            </Link>
          </div>
        </div>

        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-[#26344A] pb-8">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#FF5722] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#FF5722]" />
              <span>SECTOR 01 · GHOSTS OF MARS</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F4F6FA] font-display">
              THE RED PLANET ARCHIVE.
            </h1>
            <p className="text-base sm:text-lg text-[#A7B2C5] leading-relaxed">
              0{marsRelics.length} robotic landers, rovers, and aerial probes across five decades of Martian surface exploration.
            </p>
          </div>

          {/* Sector progress badge */}
          <div className="flex items-center gap-4 p-4 rounded-xs bg-[#101827] border border-[#26344A] shrink-0">
            <div>
              <div className="text-[11px] font-mono text-[#A7B2C5] uppercase">
                MARS EXPLORATION STATUS
              </div>
              <div className="text-xl font-bold font-mono text-[#FF5722] tabular-nums">
                0{marsExploredCount} / 0{marsRelics.length} CATALOGED
              </div>
            </div>
            <div className="w-12 h-12 rounded-full border-2 border-[#26344A] flex items-center justify-center font-mono text-xs font-bold text-[#F4F6FA]">
              {Math.round((marsExploredCount / (marsRelics.length || 1)) * 100)}%
            </div>
          </div>
        </div>

        {/* Relic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {marsRelics.map((relic) => (
            <RelicCard
              key={relic.slug}
              relic={relic}
              featured={relic.slug === 'spirit-rover'}
            />
          ))}
        </div>

        {/* Mars Archaeology Historical Note */}
        <div className="p-6 bg-[#101827]/40 border border-[#26344A] rounded-sm flex items-start gap-4">
          <Info className="h-5 w-5 text-[#FF5722] shrink-0 mt-0.5" />
          <div className="space-y-1 text-xs text-[#A7B2C5] leading-relaxed">
            <span className="text-[#F4F6FA] font-bold font-mono uppercase block">
              ARCHAEOLOGICAL CONTEXT · MARTIAN ATMOSPHERIC PRESERVATION
            </span>
            <span>
              Unlike Earth, Mars lacks active plate tectonics, rain, and thick vegetation. Aside from slow abrasion by wind-blown dust and oxidation, human robotic artifacts resting on the Martian regolith are preserved in extraordinary physical detail for hundreds of thousands of years.
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};
