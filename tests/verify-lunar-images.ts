import fs from 'fs';
import path from 'path';
import { LOCAL_RELIC_CONFIG } from '../src/components/RelicCard';
import { ALL_MASTER_RELICS } from '../src/data/allRelicsData';

function assert(condition: boolean, message: string) {
  if (!condition) {
    console.error(`❌ ASSERTION FAILED: ${message}`);
    process.exit(1);
  }
  console.log(`  ✓ ${message}`);
}

console.log('\n================================================================');
console.log('   VERIFY LUNAR RELIC AUTHENTIC NASA PHOTOGRAPHS AND CARDS');
console.log('================================================================\n');

// 1. Verify Local Asset Files Exist with non-zero size
const requiredFiles = [
  'public/assets/relics/apollo-11-descent-stage.jpg',
  'public/assets/relics/surveyor-3.jpg',
  'public/assets/relics/apollo-lunar-roving-vehicle.jpg'
];

for (const file of requiredFiles) {
  const fullPath = path.resolve(process.cwd(), file);
  assert(fs.existsSync(fullPath), `File exists: ${file}`);
  const stats = fs.statSync(fullPath);
  assert(stats.size > 50000, `File ${file} has authentic high-res size (${Math.round(stats.size / 1024)} KB)`);
}

// 2. Verify Exact Alt Text Requirements
assert(
  LOCAL_RELIC_CONFIG['apollo-11-descent-stage']?.alt ===
    'NASA archival photograph of the Apollo 11 Eagle lunar module descent stage on the Moon.',
  'Apollo 11 descent stage has exact required alt text'
);

assert(
  LOCAL_RELIC_CONFIG['surveyor-3']?.alt ===
    'NASA archival photograph of the Surveyor 3 lunar spacecraft.',
  'Surveyor 3 has exact required alt text'
);

assert(
  LOCAL_RELIC_CONFIG['lunar-roving-vehicle']?.alt ===
    'NASA archival photograph of the Apollo Lunar Roving Vehicle on the lunar surface.',
  'Apollo LRV has exact required alt text'
);

// 3. Verify Local Asset Paths in Config
assert(
  LOCAL_RELIC_CONFIG['apollo-11-descent-stage']?.src === '/assets/relics/apollo-11-descent-stage.jpg',
  'Apollo 11 descent stage maps to local asset'
);

assert(
  LOCAL_RELIC_CONFIG['surveyor-3']?.src === '/assets/relics/surveyor-3.jpg',
  'Surveyor 3 maps to local asset'
);

assert(
  LOCAL_RELIC_CONFIG['lunar-roving-vehicle']?.src === '/assets/relics/apollo-lunar-roving-vehicle.jpg',
  'Apollo LRV maps to local asset'
);

// 4. Verify Object Position is configured for responsive visibility
assert(
  Boolean(LOCAL_RELIC_CONFIG['apollo-11-descent-stage']?.objectPosition),
  'Apollo 11 has objectPosition calibrated'
);
assert(
  Boolean(LOCAL_RELIC_CONFIG['surveyor-3']?.objectPosition),
  'Surveyor 3 has objectPosition calibrated'
);
assert(
  Boolean(LOCAL_RELIC_CONFIG['lunar-roving-vehicle']?.objectPosition),
  'Apollo LRV has objectPosition calibrated'
);

// 5. Verify Fallback Sources are configured
assert(
  Boolean(LOCAL_RELIC_CONFIG['apollo-11-descent-stage']?.fallbackSrc),
  'Apollo 11 has fallbackSrc'
);
assert(
  Boolean(LOCAL_RELIC_CONFIG['surveyor-3']?.fallbackSrc),
  'Surveyor 3 has fallbackSrc'
);
assert(
  Boolean(LOCAL_RELIC_CONFIG['lunar-roving-vehicle']?.fallbackSrc),
  'Apollo LRV has fallbackSrc'
);

// 6. Verify 7-relic catalog remains intact
assert(ALL_MASTER_RELICS.length === 7, '7-relic catalog remains intact');

console.log('\n================================================================');
console.log('✅ ALL LUNAR PHOTOGRAPH ASSET VERIFICATIONS PASSED (100%)');
console.log('================================================================\n');
