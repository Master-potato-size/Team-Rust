import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  X,
  ExternalLink,
  MapPin,
  Calendar,
  Compass,
  Scale,
  Award,
  BookOpen,
  Building2,
  Orbit,
  ArrowRight
} from 'lucide-react';
import { MasterRelicRecord } from '../types';

interface MasterRelicModalProps {
  relic: MasterRelicRecord | null;
  onClose: () => void;
}

export const MasterRelicModal: React.FC<MasterRelicModalProps> = ({ relic, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (relic) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [relic, onClose]);

  if (!relic) return null;

  const isMars = relic.celestialBody === 'Mars';
  const isMoon = relic.celestialBody === 'Moon';
  const accentColor = isMars ? 'text-[#FF5722]' : isMoon ? 'text-[#69D9FF]' : 'text-[#FFC857]';
  const borderColor = isMars ? 'border-[#FF5722]/50' : isMoon ? 'border-[#69D9FF]/50' : 'border-[#FFC857]/50';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#060814]/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#101827] border ${borderColor} rounded-sm shadow-2xl p-6 sm:p-8 space-y-6 text-[#F4F6FA]`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 border-b border-[#26344A] pb-4">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono uppercase tracking-wider">
              <span className={`font-bold ${accentColor}`}>
                {relic.celestialBody.toUpperCase()}
              </span>
              <span className="text-[#A7B2C5]">·</span>
              <span className="text-[#A7B2C5]">{relic.artifactType}</span>
              <span className="text-[#A7B2C5]">·</span>
              <span className="text-[#45D483]">{relic.operationalStatus}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-[#F4F6FA]">
              {relic.name}
            </h2>
            {relic.alternateName && (
              <p className="text-xs sm:text-sm font-mono text-[#A7B2C5]">
                {relic.alternateName}
              </p>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xs border border-[#26344A] bg-[#060814] text-[#A7B2C5] hover:text-[#F4F6FA] hover:border-[#FF5722] transition-colors"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Short Description */}
        <p className="text-sm sm:text-base text-[#F4F6FA] leading-relaxed">
          {relic.shortDescription}
        </p>

        {/* Telemetry Matrix Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xs bg-[#060814]/80 border border-[#26344A] text-xs font-mono">
          <div className="space-y-1">
            <span className="text-[#A7B2C5] flex items-center gap-1.5 uppercase text-[11px]">
              <MapPin className="h-3.5 w-3.5 text-[#69D9FF]" />
              LANDING SITE & REGION
            </span>
            <div className="text-[#F4F6FA] font-medium font-sans text-sm">
              {relic.landingSite}
            </div>
            <div className="text-[#A7B2C5]/70">
              {relic.region}
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-[#A7B2C5] flex items-center gap-1.5 uppercase text-[11px]">
              <Compass className="h-3.5 w-3.5 text-[#FF5722]" />
              COORDINATES ({relic.coordinateSystem})
            </span>
            <div className="text-[#F4F6FA] font-semibold tabular-nums text-sm">
              {relic.latitude !== null && relic.longitude !== null
                ? `${relic.latitude.toFixed(4)}°, ${relic.longitude.toFixed(4)}°`
                : 'Unconfirmed Impact Coordinates'}
            </div>
            {relic.coordinateAccuracy && (
              <div className="text-[#A7B2C5]/70">
                Accuracy: {relic.coordinateAccuracy}
              </div>
            )}
          </div>

          <div className="space-y-1">
            <span className="text-[#A7B2C5] flex items-center gap-1.5 uppercase text-[11px]">
              <Building2 className="h-3.5 w-3.5 text-[#FFC857]" />
              MISSION AGENCY & ERA
            </span>
            <div className="text-[#F4F6FA] font-semibold">
              {relic.missionAgency}
            </div>
            <div className="text-[#A7B2C5]/70">
              {relic.historicalEra}
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-[#A7B2C5] flex items-center gap-1.5 uppercase text-[11px]">
              <Calendar className="h-3.5 w-3.5 text-[#45D483]" />
              CHRONOLOGY
            </span>
            <div className="text-[#F4F6FA]">
              Landed: <span className="tabular-nums font-semibold">{relic.landingOrImpactDate}</span>
            </div>
            <div className="text-[#A7B2C5]/70">
              Launch: <span className="tabular-nums">{relic.launchDate}</span>
            </div>
          </div>

          {relic.spacecraftMass && (
            <div className="sm:col-span-2 space-y-1 pt-2 border-t border-[#26344A]/60">
              <span className="text-[#A7B2C5] flex items-center gap-1.5 uppercase text-[11px]">
                <Scale className="h-3.5 w-3.5 text-[#C9D3E0]" />
                SPACECRAFT SURFACE MASS
              </span>
              <div className="text-[#F4F6FA] font-bold text-sm">
                {relic.spacecraftMass}
              </div>
              {relic.massMeasurementBasis && (
                <div className="text-[#A7B2C5]/70">
                  {relic.massMeasurementBasis}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Historical Significance */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#A7B2C5]">
            <Award className="h-3.5 w-3.5 text-[#FF5722]" />
            <span>HISTORICAL SIGNIFICANCE</span>
          </div>
          <p className="text-sm text-[#A7B2C5] leading-relaxed">
            {relic.historicalSignificance}
          </p>
        </div>

        {/* Scientific Contribution */}
        {relic.scientificContribution && (
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#A7B2C5]">
              <BookOpen className="h-3.5 w-3.5 text-[#69D9FF]" />
              <span>SCIENTIFIC CONTRIBUTION</span>
            </div>
            <p className="text-sm text-[#A7B2C5] leading-relaxed">
              {relic.scientificContribution}
            </p>
          </div>
        )}

        {/* Physical Condition */}
        <div className="p-3 bg-[#060814]/60 border border-[#26344A] rounded-xs text-xs">
          <span className="font-mono text-[#A7B2C5] block mb-1">CURRENT PHYSICAL CONDITION:</span>
          <span className="text-[#F4F6FA]">{relic.physicalCondition}</span>
        </div>

        {/* Actions & Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#26344A]">
          <div className="flex items-center gap-2 text-[11px] font-mono text-[#A7B2C5]/70">
            <span>MISSION ID: {relic.missionId}</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {relic.detailedStoryAvailable && (
              <Link
                to={`/relic/${relic.slug}`}
                onClick={onClose}
                className="flex items-center justify-center gap-2 px-4 py-2.5 bg-[#FF5722] hover:bg-[#FF5722]/90 text-white font-semibold text-xs tracking-wider uppercase rounded-xs transition-colors w-full sm:w-auto"
              >
                <span>OPEN FULL STORY DOSSIER</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            )}

            <a
              href={relic.officialSourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2.5 border border-[#26344A] bg-[#060814] text-[#A7B2C5] hover:text-[#F4F6FA] hover:border-[#69D9FF] text-xs font-mono tracking-wider uppercase rounded-xs transition-colors w-full sm:w-auto"
            >
              <span>OFFICIAL ARCHIVE</span>
              <ExternalLink className="h-3.5 w-3.5 text-[#69D9FF]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
