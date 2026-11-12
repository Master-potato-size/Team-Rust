import React, { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import {
  ExternalLink,
  ArrowLeft,
  CheckCircle2,
  HelpCircle,
  MapPin,
  Clock,
  Share2,
  Check,
  Compass,
  Scale,
  Building2,
  Calendar,
  Cpu,
  Wrench,
  ShieldCheck,
  Layers,
  Radio,
  FileText,
  Award,
  ArrowRight,
  BookOpen,
  Sparkles,
  Maximize2
} from 'lucide-react';
import { RELICS_DATA } from '../data/relicsData';
import { getMasterRelicBySlug, getRelatedRelics, ALL_MASTER_RELICS } from '../data/allRelicsData';
import { MasterRelicRecord } from '../types';
import { useExploration } from '../context/ExplorationContext';
import { Breadcrumb } from '../components/Breadcrumb';
import { RelicImage } from '../components/RelicImage';
import { LOCAL_RELIC_CONFIG } from '../components/RelicCard';
import { soundManager } from '../utils/audio';

export const RelicStoryPage: React.FC = () => {
  const params = useParams<{ slug: string }>();
  const location = useLocation();
  const { markRelicExplored, markRelicCompleted, getRelicStatus } = useExploration();
  const [copiedNotification, setCopiedNotification] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Robust slug extraction: from route param or directly from location pathname
  const pathnameSlug = location.pathname.startsWith('/relic/')
    ? location.pathname.replace(/^\/relic\/?/, '').replace(/\/+$/, '').split('/')[0]
    : '';
  const rawSlug = params.slug || pathnameSlug || '';

  // 1. Resolve relic from master registry or legacy stories
  const masterRelic: MasterRelicRecord | undefined = rawSlug ? getMasterRelicBySlug(rawSlug) : undefined;
  const legacyStory = rawSlug ? RELICS_DATA.find((r) => r.slug === rawSlug) : undefined;

  // Active slug identifier
  const activeSlug = masterRelic?.slug || legacyStory?.slug || rawSlug || '';

  // Track exploration on visit
  useEffect(() => {
    if (activeSlug) {
      markRelicExplored(activeSlug);
    }
    // Scroll to top on navigation
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setImageError(false);
  }, [activeSlug, markRelicExplored]);

  // If no record exists at all
  if (!masterRelic && !legacyStory) {
    return (
      <div className="min-h-screen bg-[#060814] text-[#F4F6FA] py-16 px-4 sm:px-6 lg:px-8 bg-starfield flex flex-col items-center justify-center">
        <div className="max-w-2xl w-full p-8 bg-[#101827] border border-[#26344A] rounded-sm space-y-6 text-center">
          <div className="inline-flex p-3 rounded-full bg-[#060814] text-[#FF5722] border border-[#26344A]">
            <FileText className="h-8 w-8" />
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-display font-bold text-[#F4F6FA]">
              ARCHAEOLOGY RECORD NOT FOUND
            </h1>
            <p className="text-sm text-[#A7B2C5]">
              No exact record matched <span className="font-mono text-[#69D9FF]">"{rawSlug}"</span>.
              Explore our master planetary registry of {ALL_MASTER_RELICS.length} officially cataloged relics.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              to="/catalog"
              className="w-full sm:w-auto px-6 py-3 bg-[#FF5722] hover:bg-[#FF5722]/90 text-white text-xs font-semibold tracking-wider uppercase rounded-xs transition-colors"
            >
              BROWSE ALL {ALL_MASTER_RELICS.length} CATALOGED RELICS
            </Link>
            <Link
              to="/destinations"
              className="w-full sm:w-auto px-6 py-3 border border-[#26344A] bg-[#060814] text-xs font-mono text-[#A7B2C5] hover:text-[#F4F6FA] hover:border-[#69D9FF] rounded-xs transition-colors"
            >
              DESTINATION COMMAND HUB
            </Link>
          </div>

          {/* Quick jump to featured relics */}
          <div className="pt-6 border-t border-[#26344A] text-left space-y-3">
            <span className="text-[11px] font-mono uppercase text-[#A7B2C5] tracking-wider block">
              QUICK ACCESS · FEATURED EXTRATERRESTRIAL RELICS
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[
                { name: 'Apollo 11 Descent Stage', slug: 'apollo-11-descent-stage', body: 'Moon' },
                { name: 'Curiosity Rover', slug: 'curiosity-rover', body: 'Mars' },
                { name: 'Perseverance Rover', slug: 'perseverance-rover', body: 'Mars' },
                { name: 'Chandrayaan-3 Vikram', slug: 'chandrayaan-3-vikram', body: 'Moon' },
                { name: 'Venera 7 Lander', slug: 'venera-7-lander', body: 'Venus' },
                { name: 'Huygens Probe', slug: 'huygens-probe', body: 'Titan' }
              ].map((r) => (
                <Link
                  key={r.slug}
                  to={`/relic/${r.slug}`}
                  className="p-2.5 rounded-xs bg-[#060814] border border-[#26344A] hover:border-[#69D9FF] text-xs font-mono transition-colors block"
                >
                  <div className="text-[10px] text-[#69D9FF] uppercase">{r.body}</div>
                  <div className="text-[#F4F6FA] truncate font-medium">{r.name}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Derive display values from master record (or fall back to legacy story)
  const name = masterRelic?.name || legacyStory?.name || '';
  const alternateName = masterRelic?.alternateName || legacyStory?.subtitle || '';
  const celestialBody = masterRelic?.celestialBody || (legacyStory?.world === 'mars' ? 'Mars' : 'Moon');
  const isMars = celestialBody === 'Mars';
  const isMoon = celestialBody === 'Moon';
  const accentColor = isMars ? 'text-[#FF5722]' : isMoon ? 'text-[#69D9FF]' : 'text-[#FFC857]';
  const accentBg = isMars ? 'bg-[#FF5722]' : isMoon ? 'bg-[#69D9FF]' : 'bg-[#FFC857]';
  const accentBorder = isMars ? 'border-[#FF5722]' : isMoon ? 'border-[#69D9FF]' : 'border-[#FFC857]';

  const parentArchiveRoute = isMars ? '/archive/mars' : isMoon ? '/archive/lunar' : '/catalog';
  const parentArchiveName = isMars ? 'MARS ARCHIVE' : isMoon ? 'LUNAR ARCHIVE' : 'MASTER CATALOG';

  const status = getRelicStatus(activeSlug);
  const isCompleted = status === 'completed';

  const relatedRelics = masterRelic ? getRelatedRelics(masterRelic.slug) : [];

  const handleCompleteMission = () => {
    markRelicCompleted(activeSlug);
    soundManager.playConfirm();
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedNotification(true);
      soundManager.playClick();
      setTimeout(() => setCopiedNotification(false), 2000);
    }
  };

  // Blueprint fallbacks based on artifact type
  const blueprintType = legacyStory?.blueprintType ||
    (masterRelic?.artifactType.toLowerCase().includes('rover') ? 'rover' :
     masterRelic?.artifactType.toLowerCase().includes('helicopter') ? 'lander' : 'lander');

  const localConfig = LOCAL_RELIC_CONFIG[activeSlug];
  const heroImageSrc = localConfig?.src || masterRelic?.primaryImage || legacyStory?.heroImage || '';
  const heroImageAlt = localConfig?.alt || name;
  const imageAttribution = localConfig?.credit || masterRelic?.imageAttribution || legacyStory?.nasaSourceLabel || 'NASA Planetary Archive';

  return (
    <div className="min-h-screen bg-[#060814] text-[#F4F6FA] py-10 px-4 sm:px-6 lg:px-8 bg-starfield">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* 1. Breadcrumb Navigation & Top Action Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-[#26344A] pb-6">
          <Breadcrumb
            items={[
              { label: 'GHOSTS OF THE VOID', path: '/' },
              { label: 'MASTER CATALOG', path: '/catalog' },
              ...(celestialBody === 'Moon' || celestialBody === 'Mars'
                ? [{ label: parentArchiveName, path: parentArchiveRoute }]
                : []),
              { label: name }
            ]}
          />

          <div className="flex items-center gap-3">
            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono border border-[#26344A] bg-[#101827] text-[#A7B2C5] hover:text-[#F4F6FA] hover:border-[#69D9FF] rounded-xs transition-colors"
              title="Copy relic URL"
            >
              {copiedNotification ? <Check className="h-3.5 w-3.5 text-[#45D483]" /> : <Share2 className="h-3.5 w-3.5" />}
              <span>{copiedNotification ? 'COPIED' : 'SHARE'}</span>
            </button>

            <Link
              to="/catalog"
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono border border-[#26344A] bg-[#101827] text-[#A7B2C5] hover:text-[#F4F6FA] hover:border-[#69D9FF] rounded-xs transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>CATALOG</span>
            </Link>
          </div>
        </div>

        {/* 2. Relic Identification & Hero Title Header */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono">
            <span className={`px-2.5 py-0.5 border rounded-xs uppercase tracking-wider font-bold ${accentBorder} ${accentColor} bg-[#101827]`}>
              {celestialBody}
            </span>
            <span className="text-[#A7B2C5]">·</span>
            <span className="px-2 py-0.5 border border-[#26344A] rounded-xs uppercase text-[#A7B2C5] bg-[#101827]">
              {masterRelic?.artifactType || legacyStory?.category || 'Surface Artifact'}
            </span>
            <span className="text-[#A7B2C5]">·</span>
            <span className="px-2 py-0.5 border border-[#45D483]/40 rounded-xs uppercase text-[#45D483] bg-[#45D483]/10 font-semibold">
              {masterRelic?.operationalStatus || legacyStory?.status || 'Archived'}
            </span>
            {masterRelic?.cosparId && (
              <>
                <span className="text-[#A7B2C5]">·</span>
                <span className="text-[#A7B2C5]/70">COSPAR: {masterRelic.cosparId}</span>
              </>
            )}
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F4F6FA] font-display text-balance">
            {name}
          </h1>

          {alternateName && (
            <p className="text-base sm:text-xl font-medium text-[#A7B2C5] font-display">
              {alternateName}
            </p>
          )}

          {/* Location & Mission Agency Badges */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-2 text-xs font-mono text-[#A7B2C5]">
            <div className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-[#69D9FF]" />
              <span className="text-[#F4F6FA]">
                {masterRelic?.landingSite || legacyStory?.coordinates}
              </span>
              {masterRelic?.region && (
                <span className="text-[#A7B2C5]">({masterRelic.region})</span>
              )}
            </div>

            <div className="flex items-center gap-1.5">
              <Compass className="h-3.5 w-3.5 text-[#FF5722]" />
              <span className="text-[#F4F6FA] tabular-nums">
                {masterRelic?.latitude !== null && masterRelic?.latitude !== undefined && masterRelic?.longitude !== null && masterRelic?.longitude !== undefined
                  ? `${masterRelic.latitude.toFixed(4)}°, ${masterRelic.longitude.toFixed(4)}°`
                  : legacyStory?.coordinates || 'Unconfirmed'}
              </span>
              {masterRelic?.coordinateSystem && (
                <span className="text-[#A7B2C5]/70">[{masterRelic.coordinateSystem}]</span>
              )}
            </div>

            <div className="flex items-center gap-1.5">
              <Building2 className="h-3.5 w-3.5 text-[#FFC857]" />
              <span className="text-[#F4F6FA]">
                {masterRelic?.missionAgency || 'NASA / United States'}
              </span>
            </div>
          </div>
        </div>

        {/* 3. Large Cinematic Hero Visual */}
        <div className="relative rounded-sm overflow-hidden border border-[#26344A] bg-[#060814] shadow-2xl">
          {!imageError && heroImageSrc ? (
            <div className="relative aspect-21/9 w-full overflow-hidden bg-[#060814]">
              <img
                src={heroImageSrc}
                alt={heroImageAlt}
                style={{ objectPosition: localConfig?.objectPosition || 'center center' }}
                referrerPolicy="no-referrer"
                onError={() => setImageError(true)}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060814] via-transparent to-transparent opacity-80" />
            </div>
          ) : (
            <RelicImage
              src=""
              alt={name}
              blueprintType={blueprintType}
              aspectRatio="aspect-21/9"
              credit={imageAttribution}
            />
          )}

          <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
            <span className="text-[11px] font-mono tracking-wider px-3 py-1 bg-[#060814]/85 border border-[#26344A] text-[#F4F6FA] rounded-xs backdrop-blur-sm">
              SECTOR: {celestialBody.toUpperCase()}
            </span>
          </div>

          <div className="absolute bottom-3 left-4 right-4 z-20 flex flex-col sm:flex-row sm:items-center justify-between text-[11px] font-mono text-[#A7B2C5] bg-[#060814]/70 p-2 rounded-xs backdrop-blur-sm border border-[#26344A]/50 gap-2">
            <span>VERIFIED SOURCE: {imageAttribution}</span>
            {masterRelic?.officialSourceUrl && (
              <a
                href={masterRelic.officialSourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#69D9FF] hover:underline"
              >
                <span>OFFICIAL AGENCY ARCHIVE</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            )}
          </div>
        </div>

        {/* 4. Archival Historical Narrative */}
        <div className="bg-[#101827]/80 border border-[#26344A] p-6 sm:p-8 rounded-sm space-y-4">
          <div className="flex items-center justify-between border-b border-[#26344A] pb-3">
            <div className="flex items-center gap-2 text-xs font-mono text-[#A7B2C5] uppercase tracking-wider">
              <Clock className={`h-4 w-4 ${accentColor}`} />
              <span>PRIMARY MISSION NARRATIVE & HISTORICAL RECORD</span>
            </div>
            <span className="text-xs font-mono text-[#A7B2C5]">
              {masterRelic?.historicalEra || 'Space Age Archival Record'}
            </span>
          </div>

          <div className="space-y-4 text-base sm:text-lg text-[#F4F6FA] leading-relaxed">
            {masterRelic?.historicalNarrative ? (
              masterRelic.historicalNarrative.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="leading-relaxed">
                  {paragraph}
                </p>
              ))
            ) : (
              <p className="leading-relaxed">
                {legacyStory?.fullIntroduction || masterRelic?.shortDescription}
              </p>
            )}
          </div>
        </div>

        {/* 5. Primary Mission Objectives */}
        {masterRelic?.missionObjectives && masterRelic.missionObjectives.length > 0 && (
          <div className="bg-[#101827]/60 border border-[#26344A] p-6 sm:p-8 rounded-sm space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#A7B2C5] uppercase tracking-wider border-b border-[#26344A] pb-3">
              <Award className="h-4 w-4 text-[#FFC857]" />
              <span>PRIMARY MISSION OBJECTIVES</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {masterRelic.missionObjectives.map((obj, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 bg-[#060814]/70 border border-[#26344A] rounded-xs"
                >
                  <span className={`font-mono text-xs ${accentColor} font-bold shrink-0 mt-0.5`}>
                    0{idx + 1}.
                  </span>
                  <p className="text-sm text-[#F4F6FA] leading-relaxed">
                    {obj}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 6. Calibrated Technical Specifications & Engineering Matrix */}
        {masterRelic?.technicalSpecs && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-[#26344A] pb-3">
              <div>
                <span className="text-[11px] font-mono tracking-wider uppercase text-[#A7B2C5]">
                  FLIGHT TELEMETRY & HARDWARE CALIBRATION
                </span>
                <h3 className="text-xl font-bold font-display text-[#F4F6FA]">
                  DETAILED TECHNICAL SPECIFICATIONS
                </h3>
              </div>
              <span className="text-xs font-mono text-[#69D9FF] hidden sm:inline">
                PRIMARY ENGINEERING BLUEPRINT
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Mass Specifications */}
              <div className="bg-[#101827]/70 border border-[#26344A] p-4 rounded-sm space-y-2">
                <span className="text-[11px] font-mono uppercase text-[#A7B2C5] flex items-center gap-1.5">
                  <Scale className="h-3.5 w-3.5 text-[#69D9FF]" />
                  MASS & CARGO SPECS
                </span>
                <div className="space-y-1 text-xs font-mono">
                  <div className="flex justify-between py-1 border-b border-[#26344A]/40">
                    <span className="text-[#A7B2C5]">Landed Surface Mass:</span>
                    <span className="text-[#F4F6FA] font-bold">{masterRelic.technicalSpecs.landedMass}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#26344A]/40">
                    <span className="text-[#A7B2C5]">Launch Mass:</span>
                    <span className="text-[#F4F6FA]">{masterRelic.technicalSpecs.launchMass}</span>
                  </div>
                  {masterRelic.technicalSpecs.roverOrPayloadMass && (
                    <div className="flex justify-between py-1">
                      <span className="text-[#A7B2C5]">Payload / Rover:</span>
                      <span className="text-[#69D9FF]">{masterRelic.technicalSpecs.roverOrPayloadMass}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Power Systems */}
              <div className="bg-[#101827]/70 border border-[#26344A] p-4 rounded-sm space-y-2">
                <span className="text-[11px] font-mono uppercase text-[#A7B2C5] flex items-center gap-1.5">
                  <Cpu className="h-3.5 w-3.5 text-[#FF5722]" />
                  POWER ARCHITECTURE
                </span>
                <div className="space-y-1 text-xs">
                  <div className="text-[#F4F6FA] font-semibold">
                    {masterRelic.technicalSpecs.powerSource}
                  </div>
                  <div className="text-[#A7B2C5] text-xs font-mono">
                    Capacity: <span className="text-[#F4F6FA]">{masterRelic.technicalSpecs.powerCapacity}</span>
                  </div>
                </div>
              </div>

              {/* Physical Dimensions */}
              <div className="bg-[#101827]/70 border border-[#26344A] p-4 rounded-sm space-y-2">
                <span className="text-[11px] font-mono uppercase text-[#A7B2C5] flex items-center gap-1.5">
                  <Layers className="h-3.5 w-3.5 text-[#FFC857]" />
                  PHYSICAL DIMENSIONS
                </span>
                <div className="text-xs space-y-1">
                  <div className="text-[#F4F6FA] font-medium">
                    {masterRelic.technicalSpecs.dimensions}
                  </div>
                  {masterRelic.technicalSpecs.wheelBase && masterRelic.technicalSpecs.wheelBase !== 'Not applicable' && (
                    <div className="text-[#A7B2C5] font-mono text-[11px]">
                      Wheelbase: {masterRelic.technicalSpecs.wheelBase}
                    </div>
                  )}
                </div>
              </div>

              {/* Propulsion & Descent */}
              <div className="bg-[#101827]/70 border border-[#26344A] p-4 rounded-sm space-y-2">
                <span className="text-[11px] font-mono uppercase text-[#A7B2C5] flex items-center gap-1.5">
                  <Wrench className="h-3.5 w-3.5 text-[#45D483]" />
                  PROPULSION & TOUCHDOWN
                </span>
                <p className="text-xs text-[#F4F6FA] leading-relaxed">
                  {masterRelic.technicalSpecs.propulsion}
                </p>
                {masterRelic.landingMethod && (
                  <p className="text-[11px] text-[#A7B2C5] font-mono">
                    Method: {masterRelic.landingMethod}
                  </p>
                )}
              </div>

              {/* Communications Suite */}
              <div className="bg-[#101827]/70 border border-[#26344A] p-4 rounded-sm space-y-2">
                <span className="text-[11px] font-mono uppercase text-[#A7B2C5] flex items-center gap-1.5">
                  <Radio className="h-3.5 w-3.5 text-[#69D9FF]" />
                  COMMUNICATIONS SUITE
                </span>
                <p className="text-xs text-[#F4F6FA] leading-relaxed">
                  {masterRelic.technicalSpecs.communications}
                </p>
              </div>

              {/* Aerospace Materials */}
              <div className="bg-[#101827]/70 border border-[#26344A] p-4 rounded-sm space-y-2">
                <span className="text-[11px] font-mono uppercase text-[#A7B2C5] flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#C9D3E0]" />
                  AEROSPACE MATERIALS
                </span>
                <p className="text-xs text-[#A7B2C5] leading-relaxed font-mono text-[11px]">
                  {masterRelic.technicalSpecs.primaryMaterials}
                </p>
              </div>
            </div>

            {/* Scientific Payload Instrumentation Table */}
            {masterRelic.technicalSpecs.scientificPayload && masterRelic.technicalSpecs.scientificPayload.length > 0 && (
              <div className="bg-[#101827] border border-[#26344A] rounded-sm p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-[#26344A] pb-3">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#A7B2C5]">
                    <Sparkles className="h-4 w-4 text-[#69D9FF]" />
                    <span>SCIENTIFIC PAYLOAD & INSTRUMENTATION SUITE</span>
                  </div>
                  <span className="text-xs font-mono text-[#A7B2C5]">
                    {masterRelic.technicalSpecs.scientificPayload.length} INSTRUMENTS
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {masterRelic.technicalSpecs.scientificPayload.map((inst, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-[#060814]/80 border border-[#26344A] rounded-xs space-y-1.5"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-sm font-bold text-[#F4F6FA] font-display">
                          {inst.name}
                        </h4>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-xs bg-[#101827] text-[#69D9FF] border border-[#26344A] shrink-0">
                          {inst.leadInstitution}
                        </span>
                      </div>
                      <p className="text-xs text-[#A7B2C5] leading-relaxed">
                        {inst.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* 7. Historical Chronology & Mission Milestones */}
        {masterRelic?.timeline && masterRelic.timeline.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-[#26344A] pb-3">
              <div>
                <span className="text-[11px] font-mono tracking-wider uppercase text-[#A7B2C5]">
                  TIME SERIES TELEMETRY LOG
                </span>
                <h3 className="text-xl font-bold font-display text-[#F4F6FA]">
                  MISSION CHRONOLOGY & CRITICAL MILESTONES
                </h3>
              </div>
              <span className="text-xs font-mono text-[#A7B2C5]">
                {masterRelic.timeline.length} VERIFIED EVENTS
              </span>
            </div>

            <div className="relative pl-6 sm:pl-8 space-y-6 before:absolute before:left-2 sm:before:left-3 before:top-3 before:bottom-3 before:w-[2px] before:bg-[#26344A]">
              {masterRelic.timeline.map((event, idx) => (
                <div key={idx} className="relative group">
                  <div
                    className={`absolute -left-6 sm:-left-8 top-1.5 h-4 w-4 rounded-full border-2 border-[#060814] ${accentBg} ring-4 ring-[#101827] group-hover:scale-125 transition-transform`}
                  />
                  <div className="bg-[#101827]/80 border border-[#26344A] p-5 rounded-sm hover:border-[#69D9FF]/40 transition-colors space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className={`text-xs font-mono font-bold tracking-wider uppercase ${accentColor}`}>
                        {event.date}
                      </span>
                      {event.source && (
                        <span className="text-[11px] font-mono text-[#A7B2C5]/70">
                          SOURCE: {event.source}
                        </span>
                      )}
                    </div>
                    <h4 className="text-base font-bold text-[#F4F6FA] font-display">
                      {event.title}
                    </h4>
                    <p className="text-sm text-[#A7B2C5] leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 8. Scientific Discoveries & Extraterrestrial Legacy */}
        {masterRelic?.scientificDiscoveries && masterRelic.scientificDiscoveries.length > 0 && (
          <div className="bg-[#101827]/70 border border-[#26344A] p-6 sm:p-8 rounded-sm space-y-6">
            <div className="flex items-center gap-3 border-b border-[#26344A] pb-4">
              <div className={`p-2 rounded-xs bg-[#060814] border border-[#26344A] ${accentColor}`}>
                <BookOpen className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono tracking-wider uppercase text-[#A7B2C5]">
                  PLANETARY SCIENCE BREAKTHROUGHS
                </span>
                <h3 className="text-xl font-bold font-display text-[#F4F6FA]">
                  SCIENTIFIC DISCOVERIES & EXTRATERRESTRIAL LEGACY
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {masterRelic.scientificDiscoveries.map((discovery, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 bg-[#060814]/80 border border-[#26344A] rounded-xs"
                >
                  <CheckCircle2 className={`h-4 w-4 mt-1 shrink-0 ${accentColor}`} />
                  <p className="text-sm text-[#F4F6FA] leading-relaxed">
                    {discovery}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 9. Space Archaeology Condition & Post-Mission Fate */}
        {masterRelic?.physicalFate && (
          <div className="bg-[#101827] border border-[#26344A] p-6 sm:p-8 rounded-sm space-y-6">
            <div className="flex items-center gap-3 border-b border-[#26344A] pb-4">
              <div className="p-2 rounded-xs bg-[#060814] border border-[#26344A] text-[#45D483]">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono tracking-wider uppercase text-[#A7B2C5]">
                  SPACE ARCHAEOLOGY STATUS & PRESERVATION
                </span>
                <h3 className="text-xl font-bold font-display text-[#F4F6FA]">
                  SURFACE INTEGRITY & HERITAGE STATUS
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
              <div className="p-4 bg-[#060814]/70 border border-[#26344A] rounded-xs space-y-1.5">
                <span className="text-[#A7B2C5] uppercase text-[11px] block">CURRENT PHYSICAL CONDITION</span>
                <p className="text-sm text-[#F4F6FA] font-sans leading-relaxed">
                  {masterRelic.physicalFate.currentCondition}
                </p>
              </div>

              <div className="p-4 bg-[#060814]/70 border border-[#26344A] rounded-xs space-y-1.5">
                <span className="text-[#A7B2C5] uppercase text-[11px] block">CONFIRMATION & RE-OBSERVATION</span>
                <p className="text-sm text-[#F4F6FA] font-sans leading-relaxed">
                  {masterRelic.physicalFate.confirmationMethod}
                </p>
              </div>

              <div className="p-4 bg-[#060814]/70 border border-[#26344A] rounded-xs space-y-1.5">
                <span className="text-[#A7B2C5] uppercase text-[11px] block">ENVIRONMENTAL DEGRADATION FACTORS</span>
                <p className="text-sm text-[#A7B2C5] font-sans leading-relaxed">
                  {masterRelic.physicalFate.environmentalFactors}
                </p>
              </div>

              <div className="p-4 bg-[#060814]/70 border border-[#26344A] rounded-xs space-y-1.5">
                <span className="text-[#A7B2C5] uppercase text-[11px] block">HERITAGE PRESERVATION STATUS</span>
                <p className="text-sm text-[#45D483] font-sans font-medium leading-relaxed">
                  {masterRelic.physicalFate.heritageStatus}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* 10. Structured Source Citations */}
        {masterRelic?.sources && masterRelic.sources.length > 0 && (
          <div className="bg-[#101827]/70 border border-[#26344A] p-6 sm:p-8 rounded-sm space-y-4">
            <div className="flex items-center justify-between border-b border-[#26344A] pb-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#A7B2C5]">
                <FileText className="h-4 w-4 text-[#69D9FF]" />
                <span>STRUCTURED VERIFIED SOURCE CITATIONS</span>
              </div>
              <span className="text-xs font-mono text-[#A7B2C5]">
                VERIFIED AGAINST OFFICIAL ARCHIVES
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {masterRelic.sources.map((src, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-[#060814]/80 border border-[#26344A] rounded-xs space-y-2 flex flex-col justify-between"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-xs bg-[#101827] text-[#69D9FF] border border-[#26344A]">
                        {src.sourceType}
                      </span>
                      <span className="text-[10px] font-mono text-[#A7B2C5]">
                        Accessed: {src.accessedAt}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-[#F4F6FA] font-display">
                      {src.title}
                    </h4>

                    <div className="text-xs font-mono text-[#A7B2C5]">
                      Publisher: {src.publisher}
                    </div>

                    {src.supports && src.supports.length > 0 && (
                      <div className="text-[11px] text-[#A7B2C5]/80 pt-1">
                        <span className="font-mono text-[#69D9FF]">Verifies: </span>
                        {src.supports.join(', ')}
                      </div>
                    )}
                  </div>

                  <a
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#69D9FF] hover:underline pt-2 border-t border-[#26344A]/40"
                  >
                    <span>OPEN PRIMARY DOCUMENT</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 11. Companion Hardware & Related Relics */}
        {relatedRelics.length > 0 && (
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-[#26344A] pb-3">
              <div>
                <span className="text-[11px] font-mono tracking-wider uppercase text-[#A7B2C5]">
                  MISSION COMPANIONS & CO-LOCATED ARTIFACTS
                </span>
                <h3 className="text-xl font-bold font-display text-[#F4F6FA]">
                  RELATED EXTRATERRESTRIAL RELICS
                </h3>
              </div>
              <span className="text-xs font-mono text-[#A7B2C5]">
                {relatedRelics.length} LINKED OBJECTS
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {relatedRelics.map((rel) => (
                <Link
                  key={rel.id}
                  to={`/relic/${rel.slug}`}
                  className="group p-4 bg-[#101827] border border-[#26344A] hover:border-[#69D9FF] rounded-sm transition-all duration-200 flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-[10px] font-mono text-[#A7B2C5]">
                      <span className="text-[#69D9FF]">{rel.celestialBody}</span>
                      <span>{rel.artifactType}</span>
                    </div>
                    <h4 className="text-sm font-bold text-[#F4F6FA] group-hover:text-[#69D9FF] transition-colors font-display">
                      {rel.name}
                    </h4>
                    <p className="text-xs text-[#A7B2C5] line-clamp-2">
                      {rel.shortDescription}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#26344A]/40 flex items-center justify-between text-xs font-mono text-[#69D9FF]">
                    <span>INSPECT COMPANION</span>
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* 12. Explorer Protocol Actions & Toolbar */}
        <div className="bg-[#101827] border border-[#26344A] p-6 sm:p-8 rounded-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#26344A] pb-4">
            <div>
              <span className="text-xs font-mono tracking-wider uppercase text-[#A7B2C5]">
                EXPLORER PROTOCOL ACTIONS
              </span>
              <h4 className="text-lg font-bold font-display text-[#F4F6FA]">
                CONTINUE SPACE ARCHAEOLOGY JOURNEY
              </h4>
            </div>

            {/* Mission Completion Control */}
            <button
              onClick={handleCompleteMission}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xs font-semibold text-xs tracking-wider uppercase transition-all border ${
                isCompleted
                  ? 'border-[#45D483] bg-[#45D483]/15 text-[#45D483]'
                  : 'border-[#26344A] bg-[#060814] text-[#F4F6FA] hover:border-[#45D483] hover:text-[#45D483]'
              }`}
            >
              <CheckCircle2 className="h-4 w-4" />
              <span>{isCompleted ? 'MISSION COMPLETED ✓' : 'MARK MISSION COMPLETE'}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Official Agency Archive Button */}
            <a
              href={masterRelic?.officialSourceUrl || legacyStory?.officialNasaUrl || 'https://nssdc.gsfc.nasa.gov/'}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3.5 px-4 text-xs font-mono font-semibold tracking-wider uppercase rounded-xs border border-[#26344A] bg-[#060814] text-[#A7B2C5] hover:text-[#F4F6FA] hover:border-[#69D9FF] transition-all text-center"
            >
              <span>EXPLORE OFFICIAL ARCHIVE</span>
              <ExternalLink className="h-3.5 w-3.5 text-[#69D9FF] shrink-0" />
            </a>

            {/* Knowledge Quiz CTA */}
            <Link
              to="/quiz"
              className="flex items-center justify-center gap-2 py-3.5 px-4 text-xs font-semibold tracking-wider uppercase rounded-xs bg-[#FF5722] hover:bg-[#FF5722]/90 text-white transition-all text-center shadow-md shadow-[#FF5722]/20"
            >
              <HelpCircle className="h-4 w-4" />
              <span>TEST YOUR SPACE KNOWLEDGE</span>
            </Link>

            {/* Return to Master Catalog Button */}
            <Link
              to="/catalog"
              className="flex items-center justify-center gap-2 py-3.5 px-4 text-xs font-mono font-semibold tracking-wider uppercase rounded-xs border border-[#26344A] bg-[#060814] text-[#A7B2C5] hover:text-[#F4F6FA] hover:border-[#A7B2C5] transition-all text-center"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>RETURN TO MASTER CATALOG</span>
            </Link>
          </div>

          <div className="text-[11px] font-mono text-[#A7B2C5]/70 pt-2 border-t border-[#26344A]/40 flex flex-col sm:flex-row items-center justify-between gap-2">
            <span>OFFICIAL SOURCE: {masterRelic?.missionAgency || 'NASA Planetary Data System'}</span>
            <span className="hidden sm:inline">DATA VERIFIED VIA NASA NSSDC & INTERNATIONAL ARCHIVES</span>
          </div>
        </div>

      </div>
    </div>
  );
};
