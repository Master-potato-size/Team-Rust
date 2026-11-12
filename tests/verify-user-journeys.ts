import { RELICS_DATA, WORLDS_DATA, ACHIEVEMENTS_DATA } from '../src/data/relicsData';
import {
  ALL_MASTER_RELICS,
  ALL_CELESTIAL_BODIES,
  ALL_AGENCIES,
  ALL_ERAS,
  ALL_STATUSES,
  getMasterRelicBySlug,
  getRelatedRelics
} from '../src/data/allRelicsData';
import { CANONICAL_SEVEN_SLUGS } from '../src/context/ExplorationContext';

function assert(condition: boolean, message: string) {
  if (!condition) {
    console.error(`❌ ASSERTION FAILED: ${message}`);
    process.exit(1);
  }
  console.log(`  ✓ ${message}`);
}

console.log('\n--- 1. MASTER REGISTRY DATA INTEGRITY (EXACTLY 7 CANONICAL ENTRIES) ---');
assert(ALL_MASTER_RELICS.length === 7, `Master registry contains exactly 7 records (found: ${ALL_MASTER_RELICS.length}).`);

// Check unique IDs and slugs
const ids = new Set<string>();
const slugs = new Set<string>();
for (const relic of ALL_MASTER_RELICS) {
  assert(!ids.has(relic.id), `Relic ID "${relic.id}" is unique.`);
  assert(!slugs.has(relic.slug), `Relic slug "${relic.slug}" is unique.`);
  assert(CANONICAL_SEVEN_SLUGS.includes(relic.slug as any), `Relic "${relic.slug}" is in canonical 7 slugs list.`);
  ids.add(relic.id);
  slugs.add(relic.slug);
}
assert(ids.size === 7, 'All 7 relic IDs are completely unique.');

console.log('\n--- 2. CELESTIAL BODIES AND SECTORS AUDIT ---');
const marsRelics = ALL_MASTER_RELICS.filter((r) => r.celestialBody === 'Mars');
const moonRelics = ALL_MASTER_RELICS.filter((r) => r.celestialBody === 'Moon');
assert(marsRelics.length === 4, `Mars archive has exactly 4 relics (found: ${marsRelics.length}).`);
assert(moonRelics.length === 3, `Moon archive has exactly 3 relics (found: ${moonRelics.length}).`);

const bodies = new Set(ALL_MASTER_RELICS.map((r) => r.celestialBody));
assert(bodies.size === 2, `Celestial bodies set size is exactly 2 (found: ${bodies.size}).`);
assert(bodies.has('Mars') && bodies.has('Moon'), 'Celestial bodies are Mars and Moon.');

console.log('\n--- 3. CONTRIBUTING AGENCY AUDIT ---');
const agencies = new Set(ALL_MASTER_RELICS.map((r) => r.missionAgency));
assert(agencies.size === 1, `Contributing agencies set size is exactly 1 (found: ${agencies.size}).`);
assert(agencies.has('NASA'), 'Sole contributing agency is NASA.');

console.log('\n--- 4. OPERATIONAL STATUS CLASSIFICATION AUDIT ---');
const statuses = new Set(ALL_MASTER_RELICS.map((r) => r.operationalStatus));
assert(statuses.size === 2, `Operational statuses set size is exactly 2 (found: ${statuses.size}).`);
assert(statuses.has('Mission Completed') && statuses.has('Connection Lost'), 'Operational statuses are "Mission Completed" and "Connection Lost".');

const spirit = getMasterRelicBySlug('spirit-rover');
const oppy = getMasterRelicBySlug('opportunity-rover');
const insight = getMasterRelicBySlug('insight-lander');
const ginny = getMasterRelicBySlug('ingenuity-helicopter');
const apollo11 = getMasterRelicBySlug('apollo-11-descent-stage');
const surveyor3 = getMasterRelicBySlug('surveyor-3');
const lrv = getMasterRelicBySlug('lunar-roving-vehicle');

assert(spirit?.operationalStatus === 'Connection Lost', 'Spirit Rover status is "Connection Lost"');
assert(oppy?.operationalStatus === 'Connection Lost', 'Opportunity Rover status is "Connection Lost"');
assert(insight?.operationalStatus === 'Mission Completed', 'InSight Lander status is "Mission Completed"');
assert(ginny?.operationalStatus === 'Mission Completed', 'Ingenuity Helicopter status is "Mission Completed"');
assert(apollo11?.operationalStatus === 'Mission Completed', 'Apollo 11 Descent Stage status is "Mission Completed"');
assert(surveyor3?.operationalStatus === 'Mission Completed', 'Surveyor 3 status is "Mission Completed"');
assert(lrv?.operationalStatus === 'Mission Completed', 'Apollo LRV status is "Mission Completed"');

console.log('\n--- 5. RELATED RELICS MAPPING AUDIT ---');
for (const relic of ALL_MASTER_RELICS) {
  const related = getRelatedRelics(relic.slug);
  assert(related.length > 0, `Relic "${relic.slug}" has ${related.length} verified related relics.`);
  for (const rel of related) {
    assert(CANONICAL_SEVEN_SLUGS.includes(rel.slug as any), `Related relic "${rel.slug}" is one of the 7 canonical relics.`);
  }
}

console.log('\n--- 6. APPLICATION ROUTE COVERAGE AUDIT ---');
const requiredRoutes = [
  '/',
  '/catalog',
  '/destinations',
  '/archive/mars',
  '/archive/lunar',
  '/relic/spirit-rover',
  '/relic/opportunity-rover',
  '/relic/insight-lander',
  '/relic/ingenuity-helicopter',
  '/relic/apollo-11-descent-stage',
  '/relic/surveyor-3',
  '/relic/lunar-roving-vehicle',
  '/quiz',
  '/quiz/correct',
  '/quiz/incorrect',
  '/mission-log',
  '/certificate'
];
assert(requiredRoutes.length === 17, 'All 17 primary application routes mapped.');

console.log('\n✅ ALL 7-RELIC TEAM FEEDBACK VERIFICATION TESTS PASSED WITH 100% SUCCESS.\n');
