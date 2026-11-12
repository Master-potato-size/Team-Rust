import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Eye } from 'lucide-react';
import { RelicData, MasterRelicRecord } from '../types';
import { RelicImage } from './RelicImage';
import { useExploration } from '../context/ExplorationContext';

interface RelicCardProps {
  relic: RelicData | MasterRelicRecord;
  featured?: boolean;
}

// Verified local authentic NASA photographs, historical alt descriptions, and credits
export const LOCAL_RELIC_CONFIG: Record<
  string,
  {
    src: string;
    alt: string;
    credit: string;
    objectPosition?: string;
    fallbackSrc?: string;
  }
> = {
  // Mars Relics
  'spirit-rover': {
    src: '/assets/relics/spirit-rover-thumbnail.jpg',
    alt: 'NASA photograph of the Spirit Mars Exploration Rover',
    credit: 'NASA/JPL/Cornell',
    objectPosition: 'center center',
    fallbackSrc: 'https://images-assets.nasa.gov/image/PIA04449/PIA04449~medium.jpg'
  },
  'opportunity-rover': {
    src: '/assets/relics/opportunity-rover-thumbnail.jpg',
    alt: 'NASA photograph of the Opportunity Mars Exploration Rover',
    credit: 'NASA/JPL-Caltech/Cornell',
    objectPosition: 'center center',
    fallbackSrc: 'https://images-assets.nasa.gov/image/PIA05208/PIA05208~medium.jpg'
  },
  'ingenuity-helicopter': {
    src: '/assets/relics/ingenuity-helicopter-thumbnail.jpg',
    alt: 'NASA photograph of the Ingenuity Mars Helicopter on Mars',
    credit: 'NASA/JPL-Caltech/ASU/MSSS',
    objectPosition: 'center center',
    fallbackSrc: 'https://images-assets.nasa.gov/image/PIA24647/PIA24647~medium.jpg'
  },
  // Lunar Relics (Authentic NASA Archival Photography)
  'apollo-11-descent-stage': {
    src: '/assets/relics/apollo-11-descent-stage.jpg',
    alt: 'NASA archival photograph of the Apollo 11 Eagle lunar module descent stage on the Moon.',
    credit: 'NASA / Neil Armstrong (AS11-40-5927)',
    objectPosition: 'center 60%',
    fallbackSrc: 'https://images-assets.nasa.gov/image/as11-40-5927/as11-40-5927~medium.jpg'
  },
  'surveyor-3': {
    src: '/assets/relics/surveyor-3.jpg',
    alt: 'NASA archival photograph of the Surveyor 3 lunar spacecraft.',
    credit: 'NASA / Apollo 12 Crew (AS12-48-7133)',
    objectPosition: 'center 65%',
    fallbackSrc: 'https://images-assets.nasa.gov/image/AS12-48-7133/AS12-48-7133~medium.jpg'
  },
  'lunar-roving-vehicle': {
    src: '/assets/relics/apollo-lunar-roving-vehicle.jpg',
    alt: 'NASA archival photograph of the Apollo Lunar Roving Vehicle on the lunar surface.',
    credit: 'NASA / Apollo 15 Crew (AS15-88-11901)',
    objectPosition: 'center 45%',
    fallbackSrc: 'https://images-assets.nasa.gov/image/as15-88-11901/as15-88-11901~medium.jpg'
  },
  // Common aliases
  'apollo-11': {
    src: '/assets/relics/apollo-11-descent-stage.jpg',
    alt: 'NASA archival photograph of the Apollo 11 Eagle lunar module descent stage on the Moon.',
    credit: 'NASA / Neil Armstrong (AS11-40-5927)',
    objectPosition: 'center 60%',
    fallbackSrc: 'https://images-assets.nasa.gov/image/as11-40-5927/as11-40-5927~medium.jpg'
  },
  'apollo-15-lunar-roving-vehicle': {
    src: '/assets/relics/apollo-lunar-roving-vehicle.jpg',
    alt: 'NASA archival photograph of the Apollo Lunar Roving Vehicle on the lunar surface.',
    credit: 'NASA / Apollo 15 Crew (AS15-88-11901)',
    objectPosition: 'center 45%',
    fallbackSrc: 'https://images-assets.nasa.gov/image/as15-88-11901/as15-88-11901~medium.jpg'
  },
  'lrv': {
    src: '/assets/relics/apollo-lunar-roving-vehicle.jpg',
    alt: 'NASA archival photograph of the Apollo Lunar Roving Vehicle on the lunar surface.',
    credit: 'NASA / Apollo 15 Crew (AS15-88-11901)',
    objectPosition: 'center 45%',
    fallbackSrc: 'https://images-assets.nasa.gov/image/as15-88-11901/as15-88-11901~medium.jpg'
  }
};

export const RelicCard: React.FC<RelicCardProps> = ({ relic, featured = false }) => {
  const { getRelicStatus } = useExploration();
  const status = getRelicStatus(relic.slug);

  const isMaster = 'celestialBody' in relic;
  const isMars = isMaster ? relic.celestialBody === 'Mars' : relic.world === 'mars';
  const accentColor = isMars ? 'text-[#FF5722]' : 'text-[#69D9FF]';
  const hoverBorder = isMars ? 'hover:border-[#FF5722]' : 'hover:border-[#69D9FF]';

  const name = relic.name;
  const subtitle = isMaster ? (relic.alternateName || `${relic.missionName} · ${relic.artifactType}`) : relic.subtitle;
  const shortDescription = relic.shortDescription;
  const originalMediaSrc = isMaster ? relic.primaryImage : relic.heroImage;
  const category = isMaster ? relic.artifactType : relic.category;
  const relicStatusText = isMaster ? relic.operationalStatus : relic.status;
  const blueprintType = isMaster
    ? (relic.artifactType.toLowerCase().includes('rover') ? 'rover' : 'lander')
    : relic.blueprintType;
  const dateOrLife = isMaster ? relic.landingOrImpactDate : relic.operationalLife.split('(')[0];

  // Specific authentic NASA photographic asset configuration
  const relicSlug = relic.slug || relic.id;
  const localConfig = LOCAL_RELIC_CONFIG[relicSlug];

  const imageSrc = localConfig ? localConfig.src : originalMediaSrc;
  const imageAlt = localConfig ? localConfig.alt : name;
  const imageCredit = localConfig ? localConfig.credit : undefined;
  const objectPosition = localConfig ? localConfig.objectPosition : 'center center';
  const fallbackSrc = localConfig?.fallbackSrc || originalMediaSrc;

  return (
    <div
      className={`group flex flex-col justify-between overflow-hidden rounded-sm border border-[#26344A] bg-[#101827]/70 transition-all duration-300 ${hoverBorder} hover:shadow-lg hover:shadow-black/50 ${
        featured ? 'ring-1 ring-[#FF5722]/40' : ''
      }`}
    >
      <div>
        {/* Card Header Media */}
        <div className="relative">
          <RelicImage
            src={imageSrc}
            alt={imageAlt}
            credit={imageCredit}
            fallbackSrc={fallbackSrc}
            objectPosition={objectPosition}
            blueprintType={blueprintType}
            aspectRatio="aspect-16/10"
          />

          {/* Featured or Explore status badge */}
          <div className="absolute top-3 left-3 flex items-center gap-2">
            {featured && (
              <span className="bg-[#FF5722] text-white text-[10px] font-mono font-bold tracking-wider px-2 py-0.5 uppercase rounded-xs shadow-md">
                FEATURED EXPLORATION
              </span>
            )}
            {status === 'completed' && (
              <span className="flex items-center gap-1 bg-[#45D483]/90 text-[#060814] text-[10px] font-mono font-bold px-2 py-0.5 rounded-xs shadow-md">
                <CheckCircle2 className="h-3 w-3" />
                MISSION COMPLETED
              </span>
            )}
            {status === 'explored' && (
              <span className="flex items-center gap-1 bg-[#69D9FF]/90 text-[#060814] text-[10px] font-mono font-bold px-2 py-0.5 rounded-xs shadow-md">
                <Eye className="h-3 w-3" />
                EXPLORED
              </span>
            )}
          </div>

          <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-[#A7B2C5]">
            <span>{category}</span>
            <span className={accentColor}>{relicStatusText}</span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 space-y-3">
          <div className="space-y-1">
            <h3 className="text-xl font-bold tracking-tight text-[#F4F6FA] font-display group-hover:text-white transition-colors">
              {name}
            </h3>
            <p className="text-xs font-mono text-[#A7B2C5]">
              {subtitle}
            </p>
          </div>

          <p className="text-sm text-[#A7B2C5] line-clamp-3 leading-relaxed">
            {shortDescription}
          </p>

          <div className="pt-3 border-t border-[#26344A]/60 flex items-center justify-between text-xs font-mono text-[#A7B2C5]">
            <span>{isMaster ? 'LANDED / IMPACT' : 'LIFESPAN'}</span>
            <span className="text-[#F4F6FA] tabular-nums">{dateOrLife}</span>
          </div>
        </div>
      </div>

      {/* Card Action Link */}
      <div className="p-5 pt-0">
        <Link
          to={`/relic/${relic.slug}`}
          className={`flex items-center justify-between w-full py-2.5 px-4 text-xs font-semibold tracking-wider rounded-xs transition-all border ${
            isMars
              ? 'border-[#FF5722]/50 text-white bg-[#FF5722]/10 hover:bg-[#FF5722] hover:text-white'
              : 'border-[#69D9FF]/50 text-white bg-[#69D9FF]/10 hover:bg-[#69D9FF] hover:text-[#060814]'
          }`}
        >
          <span>EXPLORE RELIC</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};
