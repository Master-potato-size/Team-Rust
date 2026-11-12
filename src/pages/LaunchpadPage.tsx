import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Sparkles, ChevronDown, Rocket, ShieldCheck, Database, Award } from 'lucide-react';
import { WORLDS_DATA } from '../data/relicsData';
import { ALL_MASTER_RELICS } from '../data/allRelicsData';
import { useExploration } from '../context/ExplorationContext';

export const LaunchpadPage: React.FC = () => {
  const { totalExploredCount, totalRelicsCount } = useExploration();
  const totalMasterCount = ALL_MASTER_RELICS.length;
  const [counts, setCounts] = useState({ worlds: 0, relics: 0, legacy: 0 });

  useEffect(() => {
    // Subtle count up animation on load
    const duration = 1200;
    const steps = 30;
    const interval = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      setCounts({
        worlds: Math.min(2, Math.round(2 * progress)),
        relics: Math.min(totalMasterCount, Math.round(totalMasterCount * progress)),
        legacy: Math.min(1, Math.round(1 * progress))
      });

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [totalMasterCount]);

  return (
    <div className="relative min-h-screen bg-[#060814] text-[#F4F6FA] overflow-hidden bg-starfield">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-[#69D9FF]/5 via-transparent to-transparent pointer-events-none" />

      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-76px)] flex flex-col justify-between items-center px-4 sm:px-6 lg:px-8 py-16 max-w-7xl mx-auto">
        <div className="w-full flex-1 flex flex-col justify-center items-center text-center max-w-4xl mx-auto my-auto pt-8">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 rounded-xs border border-[#26344A] bg-[#101827]/80 text-[#69D9FF] text-xs font-mono tracking-widest uppercase">
            <Sparkles className="h-3.5 w-3.5 text-[#FF5722]" />
            <span>AN INTERACTIVE SPACE ARCHAEOLOGY EXPERIENCE</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F4F6FA] font-display mb-6 leading-[1.1] text-balance">
            THE MACHINES WE LEFT BEHIND.
          </h1>

          {/* Supporting Text */}
          <p className="text-lg sm:text-xl text-[#A7B2C5] max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
            Explore the forgotten machines, technological achievements, and scientific discoveries that continue to tell humanity's story across Mars and the Moon.
          </p>

          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link
              to="/destinations"
              className="flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-[#FF5722] hover:bg-[#FF5722]/90 text-white font-semibold text-sm tracking-wider uppercase rounded-xs transition-all duration-200 shadow-lg shadow-[#FF5722]/20 hover:shadow-[#FF5722]/40 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>🚀 BOARD THE RUST & EXPLORE</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              to="/mission-log"
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-4 border border-[#26344A] bg-[#101827]/80 hover:bg-[#101827] text-[#A7B2C5] hover:text-[#F4F6FA] hover:border-[#69D9FF]/50 font-semibold text-sm tracking-wider uppercase rounded-xs transition-all duration-200"
            >
              <span>VIEW MISSION LOG</span>
              <span className="font-mono text-xs text-[#69D9FF]">({totalExploredCount}/07)</span>
            </Link>
          </div>
        </div>

        {/* Statistics Row with animated count-ups */}
        <div className="w-full max-w-4xl mx-auto pt-12 pb-6 border-t border-[#26344A]/60">
          <div className="grid grid-cols-3 gap-4 sm:gap-8 text-center">
            <div className="p-4 rounded-xs bg-[#101827]/40 border border-[#26344A]/60">
              <div className="text-3xl sm:text-5xl font-mono font-bold text-[#FF5722] tabular-nums tracking-tight">
                0{counts.worlds}
              </div>
              <div className="text-xs sm:text-sm font-mono tracking-widest text-[#A7B2C5] mt-1 uppercase">
                WORLDS
              </div>
            </div>

            <div className="p-4 rounded-xs bg-[#101827]/40 border border-[#26344A]/60">
              <div className="text-3xl sm:text-5xl font-mono font-bold text-[#69D9FF] tabular-nums tracking-tight">
                0{counts.relics}
              </div>
              <div className="text-xs sm:text-sm font-mono tracking-widest text-[#A7B2C5] mt-1 uppercase">
                SPACE RELICS
              </div>
            </div>

            <div className="p-4 rounded-xs bg-[#101827]/40 border border-[#26344A]/60">
              <div className="text-3xl sm:text-5xl font-mono font-bold text-[#C9D3E0] tabular-nums tracking-tight">
                0{counts.legacy}
              </div>
              <div className="text-xs sm:text-sm font-mono tracking-widest text-[#A7B2C5] mt-1 uppercase">
                SHARED LEGACY
              </div>
            </div>
          </div>

          {/* Visually attractive scroll indicator */}
          <div className="flex flex-col items-center justify-center pt-8 text-[#A7B2C5]/70 hover:text-[#F4F6FA] transition-colors cursor-pointer">
            <a href="#sectors-preview" className="flex flex-col items-center gap-1.5 group">
              <span className="text-[11px] font-mono tracking-widest uppercase">DISCOVER THE ARCHIVES</span>
              <ChevronDown className="h-4 w-4 animate-bounce text-[#FF5722] group-hover:text-white" />
            </a>
          </div>
        </div>
      </section>

      {/* Sectors Preview Section */}
      <section id="sectors-preview" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#26344A]">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-mono text-[#FF5722] uppercase tracking-widest mb-2">
            DESTINATION PREVIEW
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#F4F6FA] mb-4">
            TWO EXTRATERRESTRIAL WORLDS
          </h2>
          <p className="text-base text-[#A7B2C5]">
            Choose a sector to inspect authentic NASA mission photography, recovered engineering telemetry, and scientific breakthroughs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {WORLDS_DATA.map((world) => (
            <div
              key={world.id}
              className={`relative overflow-hidden rounded-sm border border-[#26344A] bg-[#101827]/90 p-8 flex flex-col justify-between group transition-all duration-300 hover:border-[${world.accentColor}] hover:shadow-xl hover:shadow-black/60`}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 ${world.bgClass} pointer-events-none`} />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono tracking-widest text-[#A7B2C5] uppercase">
                    {world.tag}
                  </span>
                  <span
                    className={`text-xs font-mono px-2.5 py-0.5 rounded-xs border ${
                      world.id === 'mars'
                        ? 'border-[#FF5722]/40 text-[#FF5722] bg-[#FF5722]/10'
                        : 'border-[#69D9FF]/40 text-[#69D9FF] bg-[#69D9FF]/10'
                    }`}
                  >
                    {world.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-3xl font-bold font-display text-[#F4F6FA] mb-3 group-hover:text-white transition-colors">
                    {world.name}
                  </h3>
                  <p className="text-sm sm:text-base text-[#A7B2C5] leading-relaxed">
                    {world.description}
                  </p>
                </div>

                {/* Relics list preview */}
                <div className="space-y-2 pt-2 border-t border-[#26344A]/60">
                  <span className="text-[11px] font-mono uppercase text-[#A7B2C5]/70">
                    CATALOGED RELICS:
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-xs font-mono text-[#F4F6FA]">
                    {world.relicsList.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-1.5">
                        <span className={world.id === 'mars' ? 'text-[#FF5722]' : 'text-[#69D9FF]'}>
                          ✦
                        </span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative z-10 pt-8">
                <Link
                  to={world.route}
                  className={`inline-flex items-center justify-between w-full py-3.5 px-5 font-semibold text-xs tracking-wider uppercase rounded-xs transition-all border ${
                    world.id === 'mars'
                      ? 'border-[#FF5722] bg-[#FF5722]/10 text-white hover:bg-[#FF5722]'
                      : 'border-[#69D9FF] bg-[#69D9FF]/10 text-white hover:bg-[#69D9FF] hover:text-[#060814]'
                  }`}
                >
                  <span>{world.cta}</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPLORE THE MASTER RELIC REGISTRY (Curated Selection & Real Count) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#26344A]">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#69D9FF] uppercase">
              <Database className="h-3.5 w-3.5" />
              <span>OFF-WORLD HARDWARE REPOSITORY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#F4F6FA]">
              EXPLORE THE MASTER RELIC REGISTRY
            </h2>
            <p className="text-sm sm:text-base text-[#A7B2C5] leading-relaxed">
              Humanity has left hundreds of tons of technological equipment across the solar system. Discover {totalMasterCount} officially cataloged machines, rovers, descent stages, and instruments.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              to="/catalog"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#FF5722] hover:bg-[#FF5722]/90 text-white font-semibold text-xs sm:text-sm tracking-wider uppercase rounded-xs transition-all shadow-lg shadow-[#FF5722]/20"
            >
              <span>EXPLORE ALL {totalMasterCount} RELICS →</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Curated 7 Canonical Relics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ALL_MASTER_RELICS.filter((r) => r.featured).map((relic) => {
            const isMars = relic.celestialBody === 'Mars';
            const isMoon = relic.celestialBody === 'Moon';
            const badgeColor = isMars
              ? 'border-[#FF5722]/40 text-[#FF5722]'
              : isMoon
              ? 'border-[#69D9FF]/40 text-[#69D9FF]'
              : 'border-[#FFC857]/40 text-[#FFC857]';

            return (
              <div
                key={relic.id}
                className="group flex flex-col justify-between p-6 bg-[#101827]/80 border border-[#26344A] rounded-sm hover:border-[#69D9FF] hover:shadow-xl transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className={`px-2 py-0.5 border rounded-xs uppercase text-[10px] ${badgeColor}`}>
                      {relic.celestialBody}
                    </span>
                    <span className="text-[#A7B2C5] text-[11px]">
                      {relic.missionAgency.split('/')[0].trim()}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-display text-[#F4F6FA] group-hover:text-[#69D9FF] transition-colors">
                    {relic.name}
                  </h3>

                  <p className="text-xs text-[#A7B2C5] line-clamp-3 leading-relaxed">
                    {relic.shortDescription}
                  </p>

                  <div className="pt-3 border-t border-[#26344A]/60 flex items-center justify-between text-[11px] font-mono text-[#A7B2C5]">
                    <span>TOUCHDOWN:</span>
                    <span className="text-[#F4F6FA] tabular-nums font-semibold">
                      {relic.landingOrImpactDate}
                    </span>
                  </div>
                </div>

                <div className="pt-4 mt-2">
                  <Link
                    to={relic.detailedStoryAvailable ? `/relic/${relic.slug}` : '/catalog'}
                    className="flex items-center justify-between text-xs font-mono text-[#69D9FF] hover:underline"
                  >
                    <span>{relic.detailedStoryAvailable ? 'EXPLORE DEEP STORY →' : 'VIEW IN CATALOG →'}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Archaeology Mission Concept Banner */}
      <section className="py-16 bg-[#101827]/40 border-t border-[#26344A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4 p-5 bg-[#060814]/60 border border-[#26344A] rounded-sm">
              <div className="p-2.5 rounded-xs bg-[#101827] text-[#FF5722] border border-[#26344A] shrink-0">
                <Database className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold font-display text-[#F4F6FA]">
                  Authentic NASA Archives
                </h4>
                <p className="text-xs text-[#A7B2C5] leading-relaxed">
                  Real mission facts, exact coordinates, verified operational dates, and primary source links.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-[#060814]/60 border border-[#26344A] rounded-sm">
              <div className="p-2.5 rounded-xs bg-[#101827] text-[#69D9FF] border border-[#26344A] shrink-0">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold font-display text-[#F4F6FA]">
                  Exploration Progress
                </h4>
                <p className="text-xs text-[#A7B2C5] leading-relaxed">
                  Track your discoveries across both worlds with persistent local mission logs and achievements.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-[#060814]/60 border border-[#26344A] rounded-sm">
              <div className="p-2.5 rounded-xs bg-[#101827] text-[#45D483] border border-[#26344A] shrink-0">
                <Award className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold font-display text-[#F4F6FA]">
                  Official Certificate
                </h4>
                <p className="text-xs text-[#A7B2C5] leading-relaxed">
                  Earn your Chief Space Archaeologist credentials, personalize your name, and print your certificate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
