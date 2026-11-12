import { ALL_MASTER_RELICS, getMasterRelicBySlug } from '../src/data/allRelicsData';
import { RELICS_DATA } from '../src/data/relicsData';

interface AuditStats {
  totalRelics: number;
  marsRelics: number;
  lunarRelics: number;
  byBody: Record<string, number>;
  byAgency: Record<string, number>;
  byEra: Record<string, number>;
  byStatus: Record<string, number>;
  withHistoricalNarrative: number;
  withDetailedTechnicalSpecs: number;
  withScientificPayload: number;
  withTimeline: number;
  withPhysicalFate: number;
  withStructuredSources: number;
  totalSourcesCount: number;
  totalInstrumentsCount: number;
  totalTimelineEventsCount: number;
}

function runComprehensiveAudit() {
  console.log('\n================================================================');
  console.log('   GHOSTS OF THE VOID — 7-RELIC CURATED ARCHIVE VALIDATION AUDIT');
  console.log('================================================================\n');

  const errors: string[] = [];

  const stats: AuditStats = {
    totalRelics: ALL_MASTER_RELICS.length,
    marsRelics: ALL_MASTER_RELICS.filter((r) => r.celestialBody === 'Mars').length,
    lunarRelics: ALL_MASTER_RELICS.filter((r) => r.celestialBody === 'Moon').length,
    byBody: {},
    byAgency: {},
    byEra: {},
    byStatus: {},
    withHistoricalNarrative: 0,
    withDetailedTechnicalSpecs: 0,
    withScientificPayload: 0,
    withTimeline: 0,
    withPhysicalFate: 0,
    withStructuredSources: 0,
    totalSourcesCount: 0,
    totalInstrumentsCount: 0,
    totalTimelineEventsCount: 0
  };

  // Required Team Invariants Validation
  if (ALL_MASTER_RELICS.length !== 7) {
    errors.push(`Total relics count is ${ALL_MASTER_RELICS.length}, expected exactly 7.`);
  }

  if (stats.marsRelics !== 4) {
    errors.push(`Mars relics count is ${stats.marsRelics}, expected exactly 4.`);
  }

  if (stats.lunarRelics !== 3) {
    errors.push(`Lunar relics count is ${stats.lunarRelics}, expected exactly 3.`);
  }

  const expectedStatuses: Record<string, string> = {
    'spirit-rover': 'Connection Lost',
    'opportunity-rover': 'Connection Lost',
    'insight-lander': 'Mission Completed',
    'ingenuity-helicopter': 'Mission Completed',
    'apollo-11-descent-stage': 'Mission Completed',
    'surveyor-3': 'Mission Completed',
    'lunar-roving-vehicle': 'Mission Completed'
  };

  const seenIds = new Set<string>();
  const seenSlugs = new Set<string>();

  for (const relic of ALL_MASTER_RELICS) {
    // Uniqueness
    if (seenIds.has(relic.id)) {
      errors.push(`Duplicate relic ID detected: "${relic.id}"`);
    }
    seenIds.add(relic.id);

    if (seenSlugs.has(relic.slug)) {
      errors.push(`Duplicate relic slug detected: "${relic.slug}"`);
    }
    seenSlugs.add(relic.slug);

    // Operational Status check
    const expectedStatus = expectedStatuses[relic.slug];
    if (relic.operationalStatus !== expectedStatus) {
      errors.push(
        `Relic "${relic.slug}" operationalStatus is "${relic.operationalStatus}", expected "${expectedStatus}"`
      );
    }

    // Agency check
    if (relic.missionAgency !== 'NASA') {
      errors.push(`Relic "${relic.slug}" missionAgency is "${relic.missionAgency}", expected "NASA"`);
    }

    // Slug resolution
    const resolved = getMasterRelicBySlug(relic.slug);
    if (!resolved || resolved.id !== relic.id) {
      errors.push(`Slug "${relic.slug}" failed to resolve to relic "${relic.id}"`);
    }

    // Categorization counts
    stats.byBody[relic.celestialBody] = (stats.byBody[relic.celestialBody] || 0) + 1;
    stats.byAgency[relic.missionAgency] = (stats.byAgency[relic.missionAgency] || 0) + 1;
    stats.byEra[relic.historicalEra] = (stats.byEra[relic.historicalEra] || 0) + 1;
    stats.byStatus[relic.operationalStatus] = (stats.byStatus[relic.operationalStatus] || 0) + 1;

    // Historical Narrative
    if (relic.historicalNarrative && relic.historicalNarrative.trim().length >= 100) {
      stats.withHistoricalNarrative++;
    } else {
      errors.push(`Relic "${relic.id}" lacks comprehensive historical narrative.`);
    }

    // Technical Specs
    if (
      relic.technicalSpecs &&
      relic.technicalSpecs.launchMass &&
      relic.technicalSpecs.landedMass &&
      relic.technicalSpecs.dimensions &&
      relic.technicalSpecs.powerSource &&
      relic.technicalSpecs.propulsion &&
      relic.technicalSpecs.communications &&
      relic.technicalSpecs.primaryMaterials
    ) {
      stats.withDetailedTechnicalSpecs++;
    } else {
      errors.push(`Relic "${relic.id}" has incomplete technical specs.`);
    }

    // Scientific Payload
    if (relic.technicalSpecs?.scientificPayload && relic.technicalSpecs.scientificPayload.length > 0) {
      stats.withScientificPayload++;
      stats.totalInstrumentsCount += relic.technicalSpecs.scientificPayload.length;
    }

    // Timeline Milestones
    if (relic.timeline && relic.timeline.length >= 2) {
      stats.withTimeline++;
      stats.totalTimelineEventsCount += relic.timeline.length;
    } else {
      errors.push(`Relic "${relic.id}" has fewer than 2 timeline events.`);
    }

    // Physical Fate
    if (
      relic.physicalFate &&
      relic.physicalFate.currentCondition &&
      relic.physicalFate.confirmationMethod &&
      relic.physicalFate.environmentalFactors &&
      relic.physicalFate.heritageStatus
    ) {
      stats.withPhysicalFate++;
    } else {
      errors.push(`Relic "${relic.id}" has incomplete physical fate documentation.`);
    }

    // Sources
    if (relic.sources && relic.sources.length >= 2) {
      stats.withStructuredSources++;
      stats.totalSourcesCount += relic.sources.length;
      for (const src of relic.sources) {
        if (!src.url.startsWith('http')) {
          errors.push(`Invalid source URL on "${relic.id}": ${src.url}`);
        }
      }
    } else {
      errors.push(`Relic "${relic.id}" has fewer than 2 structured source citations.`);
    }
  }

  const celestialBodiesCount = Object.keys(stats.byBody).length;
  if (celestialBodiesCount !== 2) {
    errors.push(`Celestial bodies count is ${celestialBodiesCount}, expected exactly 2 ('Mars', 'Moon').`);
  }

  const contributingAgenciesCount = Object.keys(stats.byAgency).length;
  if (contributingAgenciesCount !== 1) {
    errors.push(`Contributing agencies count is ${contributingAgenciesCount}, expected exactly 1 ('NASA').`);
  }

  const operationalStatusesCount = Object.keys(stats.byStatus).length;
  if (operationalStatusesCount !== 2) {
    errors.push(
      `Operational statuses count is ${operationalStatusesCount}, expected exactly 2 ('Mission Completed', 'Connection Lost').`
    );
  }

  // Print Summary Table
  console.log(`• Total Individually Cataloged Relics: ${stats.totalRelics} (Requirement: Exactly 7)`);
  console.log(`• Mars Archive Relics: ${stats.marsRelics} (Requirement: Exactly 4)`);
  console.log(`• Moon Archive Relics: ${stats.lunarRelics} (Requirement: Exactly 3)`);
  console.log(`• Celestial Bodies: ${celestialBodiesCount} (Requirement: Exactly 2 — Mars & Moon)`);
  console.log(`• Contributing Agencies: ${contributingAgenciesCount} (Requirement: Exactly 1 — NASA)`);
  console.log(`• Operational Statuses: ${operationalStatusesCount} (Requirement: Exactly 2 — Mission Completed, Connection Lost)`);
  console.log(`• Relics with Detailed Historical Narratives: ${stats.withHistoricalNarrative} / ${stats.totalRelics}`);
  console.log(`• Relics with Calibrated Technical Specifications: ${stats.withDetailedTechnicalSpecs} / ${stats.totalRelics}`);
  console.log(`• Relics with Documented Scientific Payloads: ${stats.withScientificPayload} / ${stats.totalRelics} (${stats.totalInstrumentsCount} scientific instruments total)`);
  console.log(`• Relics with Chronological Milestones: ${stats.withTimeline} / ${stats.totalRelics} (${stats.totalTimelineEventsCount} verified events total)`);
  console.log(`• Relics with Space Archaeology Physical Fate: ${stats.withPhysicalFate} / ${stats.totalRelics}`);
  console.log(`• Relics with Structured Source Citations: ${stats.withStructuredSources} / ${stats.totalRelics} (${stats.totalSourcesCount} official primary citations total)`);

  console.log('\n--- VERIFIED STATUS CLASSIFICATION ---');
  for (const [slug, status] of Object.entries(expectedStatuses)) {
    console.log(`  ✓ ${slug.padEnd(28)}: ${status}`);
  }

  console.log('\n--- RELICS_DATA CONSISTENCY CHECK ---');
  for (const r of RELICS_DATA) {
    const expected = expectedStatuses[r.slug];
    if (r.status !== expected) {
      errors.push(`relicsData.ts "${r.slug}" status is "${r.status}", expected "${expected}"`);
    } else {
      console.log(`  ✓ relicsData.ts "${r.slug}" matched status "${r.status}"`);
    }
  }

  if (errors.length > 0) {
    console.error('\n❌ AUDIT FAILED WITH ERRORS:');
    for (const err of errors) {
      console.error(`  - ${err}`);
    }
    process.exit(1);
  }

  console.log('\n================================================================');
  console.log('✅ AUDIT PASSED: 100% INVARIANT COMPLIANCE FOR 7-RELIC ARCHIVE');
  console.log('================================================================\n');
}

runComprehensiveAudit();
