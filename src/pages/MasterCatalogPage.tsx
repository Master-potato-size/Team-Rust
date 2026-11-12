import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  Filter,
  Grid,
  Table as TableIcon,
  RotateCcw,
  ExternalLink,
  MapPin,
  Calendar,
  Building2,
  ChevronDown,
  ArrowUpDown,
  Compass,
  ArrowRight,
  Database,
  Layers,
  Sparkles
} from 'lucide-react';
import {
  ALL_MASTER_RELICS,
  ALL_CELESTIAL_BODIES,
  ALL_AGENCIES,
  ALL_ERAS,
  ALL_STATUSES
} from '../data/allRelicsData';
import { MasterRelicRecord } from '../types';
import { Breadcrumb } from '../components/Breadcrumb';
import { MasterRelicModal } from '../components/MasterRelicModal';
import { soundManager } from '../utils/audio';

type ViewMode = 'grid' | 'table';
type SortField = 'date-desc' | 'date-asc' | 'name-asc' | 'body' | 'agency';

export const MasterCatalogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBody, setSelectedBody] = useState<string>('All');
  const [selectedAgency, setSelectedAgency] = useState<string>('All');
  const [selectedEra, setSelectedEra] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [sortField, setSortField] = useState<SortField>('date-desc');
  const [selectedRelic, setSelectedRelic] = useState<MasterRelicRecord | null>(null);

  // Statistics
  const totalRelics = ALL_MASTER_RELICS.length;
  const uniqueBodiesCount = useMemo(() => new Set(ALL_MASTER_RELICS.map((r) => r.celestialBody)).size, []);
  const uniqueAgenciesCount = useMemo(() => new Set(ALL_MASTER_RELICS.map((r) => r.missionAgency)).size, []);
  const uniqueErasCount = useMemo(() => new Set(ALL_MASTER_RELICS.map((r) => r.historicalEra)).size, []);

  // Multi-axis filtering logic
  const filteredRelics = useMemo(() => {
    return ALL_MASTER_RELICS.filter((relic) => {
      // 1. Celestial body filter
      if (selectedBody !== 'All' && relic.celestialBody !== selectedBody) {
        return false;
      }

      // 2. Mission agency filter
      if (selectedAgency !== 'All' && relic.missionAgency !== selectedAgency) {
        // Also check collaborating agencies
        const inCollab = relic.collaboratingAgencies.some((a) => a.toLowerCase().includes(selectedAgency.toLowerCase()));
        if (!inCollab) return false;
      }

      // 3. Historical era filter
      if (selectedEra !== 'All' && relic.historicalEra !== selectedEra) {
        return false;
      }

      // 4. Operational status filter
      if (selectedStatus !== 'All' && relic.operationalStatus !== selectedStatus) {
        return false;
      }

      // 5. Full text search
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const latStr = relic.latitude !== null ? relic.latitude.toString() : '';
        const lonStr = relic.longitude !== null ? relic.longitude.toString() : '';

        const matches =
          relic.name.toLowerCase().includes(query) ||
          (relic.alternateName && relic.alternateName.toLowerCase().includes(query)) ||
          relic.missionName.toLowerCase().includes(query) ||
          relic.missionId.toLowerCase().includes(query) ||
          relic.landingSite.toLowerCase().includes(query) ||
          relic.region.toLowerCase().includes(query) ||
          relic.celestialBody.toLowerCase().includes(query) ||
          relic.missionAgency.toLowerCase().includes(query) ||
          relic.artifactType.toLowerCase().includes(query) ||
          relic.shortDescription.toLowerCase().includes(query) ||
          relic.historicalSignificance.toLowerCase().includes(query) ||
          latStr.includes(query) ||
          lonStr.includes(query);

        if (!matches) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortField === 'date-desc') {
        return b.landingOrImpactDate.localeCompare(a.landingOrImpactDate);
      }
      if (sortField === 'date-asc') {
        return a.landingOrImpactDate.localeCompare(b.landingOrImpactDate);
      }
      if (sortField === 'name-asc') {
        return a.name.localeCompare(b.name);
      }
      if (sortField === 'body') {
        return a.celestialBody.localeCompare(b.celestialBody);
      }
      if (sortField === 'agency') {
        return a.missionAgency.localeCompare(b.missionAgency);
      }
      return 0;
    });
  }, [selectedBody, selectedAgency, selectedEra, selectedStatus, searchQuery, sortField]);

  const handleClearFilters = () => {
    setSelectedBody('All');
    setSelectedAgency('All');
    setSelectedEra('All');
    setSelectedStatus('All');
    setSearchQuery('');
    setSortField('date-desc');
    soundManager.playClick();
  };

  const hasActiveFilters =
    selectedBody !== 'All' ||
    selectedAgency !== 'All' ||
    selectedEra !== 'All' ||
    selectedStatus !== 'All' ||
    searchQuery.trim().length > 0;

  return (
    <div className="min-h-screen bg-[#060814] text-[#F4F6FA] py-10 px-4 sm:px-6 lg:px-8 bg-starfield">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Navigation Breadcrumb */}
        <Breadcrumb
          items={[
            { label: 'GHOSTS OF THE VOID', path: '/' },
            { label: 'MASTER RELIC REGISTRY' }
          ]}
        />

        {/* Master Catalog Header */}
        <div className="space-y-4 border-b border-[#26344A] pb-8">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#69D9FF] uppercase">
            <Database className="h-4 w-4" />
            <span>GLOBAL SPACE ARCHAEOLOGY REGISTRY</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F4F6FA] font-display text-balance">
            THE MASTER EXTRATERRESTRIAL RELIC REGISTRY
          </h1>

          <p className="text-base sm:text-lg text-[#A7B2C5] max-w-3xl leading-relaxed">
            A growing digital archive of humanity's machines, experiments and technological remains beyond Earth. Cataloging verified intact hardware, descent stages, rovers, and impact monuments.
          </p>
        </div>

        {/* Dynamic Statistics Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-5 rounded-sm bg-[#101827] border border-[#26344A]">
          <div className="space-y-1">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#A7B2C5]">
              TOTAL CATALOGED RELICS
            </span>
            <div className="text-2xl sm:text-3xl font-mono font-bold text-[#FF5722] tabular-nums">
              {totalRelics}
            </div>
            <div className="text-[11px] text-[#A7B2C5]/70">
              Individually cataloged objects
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#A7B2C5]">
              CELESTIAL BODIES
            </span>
            <div className="text-2xl sm:text-3xl font-mono font-bold text-[#69D9FF] tabular-nums">
              0{uniqueBodiesCount}
            </div>
            <div className="text-[11px] text-[#A7B2C5]/70">
              Mars & Moon Sectors
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#A7B2C5]">
              CONTRIBUTING AGENCIES
            </span>
            <div className="text-2xl sm:text-3xl font-mono font-bold text-[#FFC857] tabular-nums">
              0{uniqueAgenciesCount}
            </div>
            <div className="text-[11px] text-[#A7B2C5]/70">
              NASA Official Missions
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#A7B2C5]">
              HISTORICAL ERAS
            </span>
            <div className="text-2xl sm:text-3xl font-mono font-bold text-[#45D483] tabular-nums">
              0{uniqueErasCount}
            </div>
            <div className="text-[11px] text-[#A7B2C5]/70">
              1959 to present day
            </div>
          </div>
        </div>

        {/* Search, Filter Toolbar & View Controls */}
        <div className="space-y-4 p-6 rounded-sm bg-[#101827]/70 border border-[#26344A]">
          {/* Top Search Input & View Toggles */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Bar */}
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#A7B2C5]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search spacecraft, landing site, crater, coordinate..."
                className="w-full pl-10 pr-4 py-2.5 bg-[#060814] border border-[#26344A] text-sm text-[#F4F6FA] rounded-xs focus:outline-none focus:border-[#69D9FF] placeholder:text-[#A7B2C5]/50 font-sans"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-[#A7B2C5] hover:text-[#F4F6FA]"
                >
                  CLEAR
                </button>
              )}
            </div>

            {/* View Mode & Sort Dropdown */}
            <div className="flex items-center gap-3 w-full md:w-auto justify-end">
              <div className="flex items-center gap-2 border border-[#26344A] rounded-xs p-1 bg-[#060814]">
                <button
                  type="button"
                  onClick={() => {
                    setViewMode('grid');
                    soundManager.playClick();
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-xs transition-colors ${
                    viewMode === 'grid'
                      ? 'bg-[#101827] text-[#69D9FF] font-semibold border border-[#26344A]'
                      : 'text-[#A7B2C5] hover:text-[#F4F6FA]'
                  }`}
                  aria-label="Archival Grid View"
                >
                  <Grid className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">ARCHIVAL GRID</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setViewMode('table');
                    soundManager.playClick();
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-xs transition-colors ${
                    viewMode === 'table'
                      ? 'bg-[#101827] text-[#69D9FF] font-semibold border border-[#26344A]'
                      : 'text-[#A7B2C5] hover:text-[#F4F6FA]'
                  }`}
                  aria-label="Technical Telemetry View"
                >
                  <TableIcon className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">TELEMETRY MATRIX</span>
                </button>
              </div>

              {/* Sort selector */}
              <div className="flex items-center gap-1 border border-[#26344A] bg-[#060814] px-3 py-1.5 rounded-xs text-xs font-mono text-[#A7B2C5]">
                <ArrowUpDown className="h-3.5 w-3.5 text-[#A7B2C5]" />
                <select
                  value={sortField}
                  onChange={(e) => setSortField(e.target.value as SortField)}
                  className="bg-transparent text-[#F4F6FA] focus:outline-none cursor-pointer"
                >
                  <option value="date-desc" className="bg-[#101827]">Newest First</option>
                  <option value="date-asc" className="bg-[#101827]">Oldest First</option>
                  <option value="name-asc" className="bg-[#101827]">Name (A-Z)</option>
                  <option value="body" className="bg-[#101827]">Celestial Body</option>
                  <option value="agency" className="bg-[#101827]">Agency</option>
                </select>
              </div>
            </div>
          </div>

          {/* Filter Dropdowns Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-3 border-t border-[#26344A]/60">
            {/* 1. Celestial Body Filter */}
            <div className="space-y-1">
              <label className="text-[11px] font-mono text-[#A7B2C5] uppercase">
                CELESTIAL BODY
              </label>
              <select
                value={selectedBody}
                onChange={(e) => setSelectedBody(e.target.value)}
                className="w-full px-3 py-2 bg-[#060814] border border-[#26344A] text-xs text-[#F4F6FA] rounded-xs focus:outline-none focus:border-[#69D9FF]"
              >
                {ALL_CELESTIAL_BODIES.map((body) => (
                  <option key={body} value={body} className="bg-[#101827]">
                    {body === 'All' ? 'All Celestial Bodies' : body}
                  </option>
                ))}
              </select>
            </div>

            {/* 2. Mission Agency Filter */}
            <div className="space-y-1">
              <label className="text-[11px] font-mono text-[#A7B2C5] uppercase">
                MISSION AGENCY
              </label>
              <select
                value={selectedAgency}
                onChange={(e) => setSelectedAgency(e.target.value)}
                className="w-full px-3 py-2 bg-[#060814] border border-[#26344A] text-xs text-[#F4F6FA] rounded-xs focus:outline-none focus:border-[#69D9FF]"
              >
                {ALL_AGENCIES.map((agency) => (
                  <option key={agency} value={agency} className="bg-[#101827]">
                    {agency === 'All' ? 'All Space Agencies' : agency}
                  </option>
                ))}
              </select>
            </div>

            {/* 3. Historical Era Filter */}
            <div className="space-y-1">
              <label className="text-[11px] font-mono text-[#A7B2C5] uppercase">
                HISTORICAL ERA
              </label>
              <select
                value={selectedEra}
                onChange={(e) => setSelectedEra(e.target.value)}
                className="w-full px-3 py-2 bg-[#060814] border border-[#26344A] text-xs text-[#F4F6FA] rounded-xs focus:outline-none focus:border-[#69D9FF]"
              >
                {ALL_ERAS.map((era) => (
                  <option key={era} value={era} className="bg-[#101827]">
                    {era === 'All' ? 'All Historical Eras' : era}
                  </option>
                ))}
              </select>
            </div>

            {/* 4. Operational Status Filter */}
            <div className="space-y-1">
              <label className="text-[11px] font-mono text-[#A7B2C5] uppercase">
                OPERATIONAL STATUS
              </label>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full px-3 py-2 bg-[#060814] border border-[#26344A] text-xs text-[#F4F6FA] rounded-xs focus:outline-none focus:border-[#69D9FF]"
              >
                {ALL_STATUSES.map((status) => (
                  <option key={status} value={status} className="bg-[#101827]">
                    {status === 'All' ? 'All Operational Statuses' : status}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Active Filter Indicators & Reset Action */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs font-mono text-[#A7B2C5]">
            <div className="flex items-center gap-2">
              <span>SHOWING:</span>
              <span className="text-[#69D9FF] font-bold tabular-nums">
                {filteredRelics.length} OF {totalRelics} RELICS
              </span>
            </div>

            {hasActiveFilters && (
              <button
                onClick={handleClearFilters}
                className="flex items-center gap-1.5 text-xs font-mono text-[#FF5722] hover:text-[#FF5722]/80 transition-colors"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>RESET ALL FILTERS</span>
              </button>
            )}
          </div>
        </div>

        {/* Results Container: Grid vs Matrix View */}
        {filteredRelics.length === 0 ? (
          /* Empty State */
          <div className="p-12 text-center rounded-sm border border-[#26344A] bg-[#101827]/40 space-y-4">
            <div className="inline-flex p-3 rounded-full bg-[#101827] text-[#FF5722] border border-[#26344A]">
              <Search className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold font-display text-[#F4F6FA]">
              NO MATCHING EXTRATERRESTRIAL RELICS FOUND
            </h3>
            <p className="text-sm text-[#A7B2C5] max-w-md mx-auto">
              No relics match the current combination of filters and search keywords. Try clearing filters or expanding your search scope.
            </p>
            <button
              onClick={handleClearFilters}
              className="px-6 py-2.5 bg-[#FF5722] text-white text-xs font-mono uppercase tracking-wider rounded-xs"
            >
              CLEAR ALL FILTERS
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          /* ARCHIVAL GRID VIEW */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRelics.map((relic) => {
              const isMars = relic.celestialBody === 'Mars';
              const isMoon = relic.celestialBody === 'Moon';
              const accentColor = isMars ? 'text-[#FF5722]' : isMoon ? 'text-[#69D9FF]' : 'text-[#FFC857]';
              const badgeBorder = isMars ? 'border-[#FF5722]/40 text-[#FF5722]' : isMoon ? 'border-[#69D9FF]/40 text-[#69D9FF]' : 'border-[#FFC857]/40 text-[#FFC857]';

              return (
                <div
                  key={relic.id}
                  className="group flex flex-col justify-between overflow-hidden rounded-sm border border-[#26344A] bg-[#101827]/80 hover:border-[#69D9FF] hover:shadow-xl transition-all duration-300 p-5 space-y-4 cursor-pointer"
                  onClick={() => {
                    setSelectedRelic(relic);
                    soundManager.playClick();
                  }}
                >
                  <div className="space-y-3">
                    {/* Top Body & Agency Banner */}
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className={`px-2 py-0.5 border rounded-xs uppercase text-[10px] ${badgeBorder}`}>
                        {relic.celestialBody}
                      </span>
                      <span className="text-[#A7B2C5] text-[11px] truncate max-w-[150px]">
                        {relic.missionAgency.split('/')[0].trim()}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold font-display text-[#F4F6FA] group-hover:text-[#69D9FF] transition-colors">
                        {relic.name}
                      </h3>
                      <p className="text-xs font-mono text-[#A7B2C5] mt-0.5">
                        {relic.missionName} · {relic.artifactType}
                      </p>
                    </div>

                    <p className="text-xs text-[#A7B2C5] line-clamp-3 leading-relaxed">
                      {relic.shortDescription}
                    </p>

                    <div className="pt-3 border-t border-[#26344A]/60 space-y-1.5 text-[11px] font-mono text-[#A7B2C5]">
                      <div className="flex items-center justify-between">
                        <span>LANDING / IMPACT:</span>
                        <span className="text-[#F4F6FA] tabular-nums font-semibold">
                          {relic.landingOrImpactDate}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>COORDINATES:</span>
                        <span className="text-[#F4F6FA] tabular-nums truncate max-w-[170px]">
                          {relic.latitude !== null && relic.longitude !== null
                            ? `${relic.latitude.toFixed(2)}°, ${relic.longitude.toFixed(2)}°`
                            : 'Unconfirmed'}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>STATUS:</span>
                        <span className="text-[#45D483] font-medium">
                          {relic.operationalStatus}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[#26344A]/40 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-[#A7B2C5] flex items-center gap-1">
                      QUICK TELEMETRY
                    </span>

                    <Link
                      to={`/relic/${relic.slug}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        soundManager.playClick();
                      }}
                      className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-[#69D9FF] hover:text-white px-2.5 py-1 bg-[#060814] border border-[#26344A] hover:border-[#69D9FF] rounded-xs transition-colors"
                    >
                      <span>EXPLORE RELIC</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* TECHNICAL TELEMETRY VIEW (Sortable Table) */
          <div className="overflow-x-auto rounded-sm border border-[#26344A] bg-[#101827]">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-[#060814] border-b border-[#26344A] text-[#A7B2C5] uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="p-3.5 whitespace-nowrap">Relic Name</th>
                  <th className="p-3.5 whitespace-nowrap">Body</th>
                  <th className="p-3.5 whitespace-nowrap">Mission</th>
                  <th className="p-3.5 whitespace-nowrap">Agency</th>
                  <th className="p-3.5 whitespace-nowrap">Landing / Impact</th>
                  <th className="p-3.5 whitespace-nowrap">Landing Site</th>
                  <th className="p-3.5 whitespace-nowrap">Coordinates</th>
                  <th className="p-3.5 whitespace-nowrap">Type</th>
                  <th className="p-3.5 whitespace-nowrap">Status</th>
                  <th className="p-3.5 whitespace-nowrap text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#26344A]/60">
                {filteredRelics.map((relic) => (
                  <tr
                    key={relic.id}
                    onClick={() => {
                      setSelectedRelic(relic);
                      soundManager.playClick();
                    }}
                    className="hover:bg-[#060814]/80 cursor-pointer transition-colors"
                  >
                    <td className="p-3.5 font-semibold text-[#F4F6FA] whitespace-nowrap font-sans">
                      {relic.name}
                    </td>
                    <td className="p-3.5 whitespace-nowrap text-[#69D9FF]">
                      {relic.celestialBody}
                    </td>
                    <td className="p-3.5 whitespace-nowrap text-[#A7B2C5]">
                      {relic.missionName}
                    </td>
                    <td className="p-3.5 whitespace-nowrap text-[#A7B2C5]">
                      {relic.missionAgency.split('/')[0].trim()}
                    </td>
                    <td className="p-3.5 whitespace-nowrap text-[#F4F6FA] tabular-nums">
                      {relic.landingOrImpactDate}
                    </td>
                    <td className="p-3.5 whitespace-nowrap text-[#A7B2C5] max-w-[180px] truncate">
                      {relic.landingSite}
                    </td>
                    <td className="p-3.5 whitespace-nowrap text-[#F4F6FA] tabular-nums">
                      {relic.latitude !== null && relic.longitude !== null
                        ? `${relic.latitude.toFixed(2)}°, ${relic.longitude.toFixed(2)}°`
                        : 'Unconfirmed'}
                    </td>
                    <td className="p-3.5 whitespace-nowrap text-[#A7B2C5]">
                      {relic.artifactType}
                    </td>
                    <td className="p-3.5 whitespace-nowrap text-[#45D483]">
                      {relic.operationalStatus}
                    </td>
                    <td className="p-3.5 whitespace-nowrap text-right space-x-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedRelic(relic);
                          soundManager.playClick();
                        }}
                        className="text-[11px] text-[#A7B2C5] hover:text-white font-mono px-2 py-0.5 border border-[#26344A] bg-[#060814] rounded-xs"
                      >
                        TELEMETRY
                      </button>
                      <Link
                        to={`/relic/${relic.slug}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          soundManager.playClick();
                        }}
                        className="text-[11px] text-[#69D9FF] hover:underline font-mono px-2 py-0.5 border border-[#69D9FF]/40 bg-[#69D9FF]/10 rounded-xs inline-block"
                      >
                        EXPLORE →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Modal Inspector */}
        <MasterRelicModal
          relic={selectedRelic}
          onClose={() => setSelectedRelic(null)}
        />

      </div>
    </div>
  );
};
