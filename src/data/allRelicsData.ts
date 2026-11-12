import {
  MasterRelicRecord,
  CelestialBodyFilter,
  AgencyFilter,
  EraFilter,
  StatusFilter
} from '../types';

export const ALL_MASTER_RELICS: MasterRelicRecord[] = [
  // 1. Spirit Rover (Mars)
  {
    id: 'spirit-rover',
    slug: 'spirit-rover',
    name: 'Spirit Rover',
    alternateName: 'MER-A (Mars Exploration Rover A)',
    missionName: 'Mars Exploration Rover',
    missionId: 'MER-2003-A',
    landingSiteId: 'gusev-crater',
    cosparId: '2003-027A',
    catalogNssdcId: '2003-027A',
    celestialBody: 'Mars',
    region: 'Aeolis Quadrangle',
    landingSite: 'Columbia Memorial Station, Gusev Crater',
    latitude: -14.5684,
    longitude: 175.4726,
    coordinateSystem: 'Planetocentric (IAU/IAG 2000)',
    coordinateAccuracy: '±1 meter (MRO HiRISE verified)',
    coordinateSource: 'NASA MRO HiRISE',
    missionAgency: 'NASA',
    collaboratingAgencies: ['Jet Propulsion Laboratory (JPL)', 'Cornell University'],
    launchDate: '2003-06-10',
    launchSite: 'Cape Canaveral SLC-17A, Florida',
    landingOrImpactDate: '2004-01-04',
    lastOperationalDate: '2010-03-22',
    landingMethod: 'Parachute, retro-rockets, and enclosed pressurized impact airbags',
    landingOutcome: 'Flawless airbag touchdown in Gusev Crater, opening all petals successfully',
    artifactType: 'Rover',
    operationalStatus: 'Connection Lost',
    physicalCondition: 'Trapped at Troy sand bed near Home Plate; solar panels heavily coated in dust; frozen in place during 2010 Martian winter.',
    historicalEra: 'Robotic Revival: 1977–2015',
    spacecraftMass: '185 kg',
    massMeasurementBasis: 'Landed operational rover dry mass (excluding lander structure and airbags).',
    shortDescription: 'The intrepid robotic field geologist that traversed 7.73 km across Gusev Crater, unexpectedly discovering hydrothermal silica with a seized wheel.',
    historicalSignificance: 'Operated over 25 times its 90-sol design lifespan. Discovered pure opaline silica deposits, proving ancient Mars hosted hydrothermal volcanic hot springs and steam vents.',
    scientificContribution: 'Discovered carbonate minerals and 90% pure opaline silica, proving ancient volcanic hydrothermal activity and neutral pH warm water on early Mars.',
    missionObjectives: [
      'Search for and characterize a wide variety of rocks and soils that hold clues to past water activity.',
      'Determine the distribution and composition of minerals, rocks, and soils surrounding the landing site.',
      'Assess whether the environmental conditions in Gusev Crater were ever conducive to microbial life.'
    ],
    technicalSpecs: {
      launchMass: '1,063 kg (with cruise stage and aeroshell)',
      landedMass: '185 kg (rover on surface)',
      roverOrPayloadMass: '5 kg scientific instrument arm payload',
      dimensions: '1.5 m height × 2.3 m width × 1.6 m length',
      height: '1.5 m',
      width: '2.3 m',
      lengthOrDiameter: '1.6 m',
      wheelBase: '1.4 m rocker-bogie',
      powerSource: 'Multi-junction triple-junction gallium arsenide solar cells and two 8 Ah lithium-ion batteries',
      powerCapacity: '140 W peak / ~600-900 Wh per sol',
      propulsion: 'Six independently driven aluminum wheels with custom cleats; front and rear steering actuators',
      scientificPayload: [
        { name: 'Panoramic Camera (Pancam)', description: 'High-resolution multispectral stereoscopic mast-mounted imager', leadInstitution: 'Cornell University / NASA JPL' },
        { name: 'Miniature Thermal Emission Spectrometer (Mini-TES)', description: 'Infrared spectrometer determining mineralogy from thermal emission', leadInstitution: 'Arizona State University' },
        { name: 'Mössbauer Spectrometer (MIMOS II)', description: 'Gamma-ray spectrometer identifying iron-bearing minerals and oxidation states', leadInstitution: 'University of Mainz' },
        { name: 'Alpha Particle X-Ray Spectrometer (APXS)', description: 'X-ray fluorescence elemental composition sensor', leadInstitution: 'Max Planck Institute for Chemistry' },
        { name: 'Microscopic Imager (MI)', description: 'High-resolution close-up camera for rock grain textures', leadInstitution: 'USGS Astrogeology Science Center' },
        { name: 'Rock Abrasion Tool (RAT)', description: 'Diamond-tipped grinder removing rock weathering crust up to 5 mm deep', leadInstitution: 'Honeybee Robotics' }
      ],
      communications: 'X-band direct-to-Earth high-gain steerable antenna and UHF whip antenna relaying data via Mars Odyssey orbiter',
      primaryMaterials: 'Aerospace aluminum alloys 6061-T6 and 7075-T73, titanium rocker-bogie fittings, aerogel thermal insulation blankets'
    },
    historicalNarrative: 'On June 10, 2003, NASA\'s Mars Exploration Rover Spirit launched atop a Delta II rocket from Cape Canaveral, embarking on an interplanetary journey to investigate whether water once shaped the surface of Mars. On January 4, 2004, Spirit plunged into the Martian atmosphere, slowed by a supersonic parachute and braking rockets before bouncing to rest cushioned inside inflated airbags on the lava plains of Gusev Crater.\n\nWhile designed for a 90-sol exploration lifespan, Spirit survived for over 2,210 Martian sols (more than 6 Earth years). In 2006, after climbing the Columbia Hills, the rover\'s front-right wheel motor seized permanently. Forced to drive in reverse while dragging the frozen wheel, the dragging cleat gouged open a trench in the regolith near Home Plate, exposing dazzling bright white soil. Subsequent APXS analysis revealed this material was 90% pure opaline silica—a mineral formed exclusively on Earth by volcanic steam vents or boiling hot springs. The catastrophic wheel failure had serendipitously revealed the strongest evidence yet for ancient hydrothermal environments on Mars.\n\nIn April 2009, Spirit became mired in soft sulfate sands at a site dubbed "Troy." Despite months of maneuvering, the trapped rover could not angle its dust-laden solar arrays to survive the brutal sub-zero temperatures of the approaching 2010 Martian winter. On March 22, 2010, Spirit transmitted its final transmission through the Deep Space Network. Classified as "Connection Lost" after exhaustive recovery attempts, Spirit stands permanently preserved on the plains of Gusev as one of humanity\'s greatest robotic explorers.',
    scientificDiscoveries: [
      'Discovered 90% pure opaline silica deposits, providing conclusive evidence of ancient volcanic fumaroles and hydrothermal water systems.',
      'Identified olivine-rich basalts that were weathered and altered by ancient water infiltration.',
      'Observed dozens of active dust devils live on Mars, measuring their wind velocities and atmospheric pressure drops.',
      'Found carbonate-rich rocks in the Columbia Hills, proving early Mars possessed neutral-pH, non-acidic waters.'
    ],
    timeline: [
      { date: '2003-06-10', title: 'Launch from Cape Canaveral', description: 'Boeing Delta II 7925 rocket launches Spirit toward Mars.', source: 'NASA JPL Launch Archive' },
      { date: '2004-01-04 04:35 UTC', title: 'Touchdown in Gusev Crater', description: 'Airbags cushion landing at Columbia Memorial Station.', source: 'NASA Planetary Data System' },
      { date: '2005-08-21', title: 'Summiting Husband Hill', description: 'Spirit reaches the peak of Husband Hill, climbing 107 meters above the plain.', source: 'JPL MER Mission Logs' },
      { date: '2007-05-01', title: 'Serendipitous Silica Discovery', description: 'Dragged front wheel uncovers 90% pure hydrothermal silica deposits.', source: 'Science Magazine (Vol 320)' },
      { date: '2010-03-22', title: 'Final Telemetry Transmission', description: 'Transmits final signal before winter freezing; connection permanently lost.', source: 'NASA Deep Space Network' }
    ],
    physicalFate: {
      currentCondition: 'Stationary and structurally intact at Troy sand trap beside Home Plate; solar panels dust-coated; communications silent since Sol 2210.',
      confirmationMethod: 'Imaged from orbit by NASA Mars Reconnaissance Orbiter (MRO) HiRISE camera at sub-meter resolution.',
      environmentalFactors: 'Extreme diurnal thermal cycling (-100°C to +10°C), atmospheric dust deposition, and solar ultraviolet radiation.',
      heritageStatus: 'Formally recorded by NASA as a historic extraterrestrial cultural resource on Mars.'
    },
    sources: [
      { title: 'NASA Science: MER Spirit Overview', publisher: 'NASA Science Mission Directorate', url: 'https://science.nasa.gov/mission/mer-spirit/', accessedAt: '2026-03-01', supports: ['Launch date', 'Touchdown site', 'Silica discovery'], sourceType: 'Primary Agency Archive' },
      { title: 'NSSDC Master Catalog: Spirit (MER-A)', publisher: 'NASA NSSDC', url: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=2003-027A', accessedAt: '2026-03-01', supports: ['COSPAR ID', 'Dry mass', 'Coordinates'], sourceType: 'Primary Agency Archive' }
    ],
    relatedRelicSlugs: ['opportunity-rover', 'insight-lander', 'ingenuity-helicopter'],
    primaryImage: '/assets/relics/spirit-rover-thumbnail.jpg',
    imageAttribution: 'NASA / JPL / Cornell (PIA07371)',
    officialSourceUrl: 'https://science.nasa.gov/mission/mer-spirit/',
    additionalSourceUrls: ['https://mars.nasa.gov/mer/'],
    sourceVerificationDate: '2026-03-01',
    featured: true,
    detailedStoryAvailable: true
  },

  // 2. Opportunity Rover (Mars)
  {
    id: 'opportunity-rover',
    slug: 'opportunity-rover',
    name: 'Opportunity Rover',
    alternateName: 'MER-B (Mars Exploration Rover B)',
    missionName: 'Mars Exploration Rover',
    missionId: 'MER-2003-B',
    landingSiteId: 'meridiani-planum',
    cosparId: '2003-032A',
    catalogNssdcId: '2003-032A',
    celestialBody: 'Mars',
    region: 'Sinus Sabaeus Quadrangle',
    landingSite: 'Challenger Memorial Station, Meridiani Planum',
    latitude: -1.9483,
    longitude: 354.4742,
    coordinateSystem: 'Planetocentric (IAU/IAG 2000)',
    coordinateAccuracy: '±0.5 meters (MRO HiRISE verified)',
    coordinateSource: 'NASA MRO HiRISE',
    missionAgency: 'NASA',
    collaboratingAgencies: ['Jet Propulsion Laboratory (JPL)', 'Cornell University'],
    launchDate: '2003-07-07',
    launchSite: 'Cape Canaveral SLC-17B, Florida',
    landingOrImpactDate: '2004-01-25',
    lastOperationalDate: '2018-06-10',
    landingMethod: 'Parachute, radar altimeter descent thrusters, and pressurized bouncing airbags',
    landingOutcome: 'Executed interplanetary hole-in-one, rolling to rest inside the 22-meter-wide Eagle Crater',
    artifactType: 'Rover',
    operationalStatus: 'Connection Lost',
    physicalCondition: 'Parked in Perseverance Valley on the western rim of Endeavour Crater; overtaken by the catastrophic global dust storm of June 2018.',
    historicalEra: 'Robotic Revival: 1977–2015',
    spacecraftMass: '185 kg',
    massMeasurementBasis: 'Landed dry rover mass on Martian surface.',
    shortDescription: 'The solar-powered marathon machine that explored Mars for over 14.5 years, traveling 45.16 km and finding conclusive evidence of persistent liquid water.',
    historicalSignificance: 'Traversed 45.16 kilometers—the longest off-world driving distance in human history. Discovered hematite "blueberries" and clay minerals confirming ancient habitable surface waters.',
    scientificContribution: 'Discovered cross-bedded sedimentary sulfate rocks, hematite spherules, and gypsum veins created by groundwater percolation.',
    missionObjectives: [
      'Investigate the sedimentary bedrock of Meridiani Planum for evidence of past standing water.',
      'Determine the geological process that formed the gray hematite surface mineral deposit.',
      'Explore deep impact craters (Endurance, Victoria, and Endeavour) to reconstruct geological history.'
    ],
    technicalSpecs: {
      launchMass: '1,063 kg (with cruise stage and heat shield)',
      landedMass: '185 kg (rover on surface)',
      roverOrPayloadMass: '5 kg instrument deployment arm',
      dimensions: '1.5 m height × 2.3 m width × 1.6 m length',
      height: '1.5 m',
      width: '2.3 m',
      lengthOrDiameter: '1.6 m',
      wheelBase: '1.4 m rocker-bogie',
      powerSource: 'Multi-junction GaAs solar arrays with two 8 Ah rechargeable lithium-ion battery packs',
      powerCapacity: '140 W peak / survived down to 22 Wh during 2018 global dust storm',
      propulsion: 'Six independent brushless DC drive motors with spiral-grooved aluminum tires',
      scientificPayload: [
        { name: 'Panoramic Camera (Pancam)', description: 'Multispectral stereoscopic imaging array with 16 color filters', leadInstitution: 'Cornell University' },
        { name: 'Miniature Thermal Emission Spectrometer (Mini-TES)', description: 'Mid-infrared mineral composition sensor', leadInstitution: 'Arizona State University' },
        { name: 'Mössbauer Spectrometer', description: 'Identified jarosite and hematite iron signatures', leadInstitution: 'University of Mainz' },
        { name: 'Alpha Particle X-Ray Spectrometer (APXS)', description: 'Elemental chemistry analyzer', leadInstitution: 'Max Planck Institute for Chemistry' },
        { name: 'Microscopic Imager (MI)', description: 'Detailed visual imaging of spherules and mineral grains', leadInstitution: 'USGS' },
        { name: 'Rock Abrasion Tool (RAT)', description: 'Surface rock-coring and brushing system', leadInstitution: 'Honeybee Robotics' }
      ],
      communications: 'X-band steerable dish antenna for direct Earth communication; UHF transceiver relaying to MRO and Mars Odyssey',
      primaryMaterials: 'High-strength structural aluminum, titanium articulation linkages, gold-plated electronics chassis'
    },
    historicalNarrative: 'On July 7, 2003, Opportunity followed its twin Spirit toward Mars, touching down on January 25, 2004, on the rolling plains of Meridiani Planum. In an astonishing stroke of orbital ballistics, the airbag-encased lander bounced across the terrain and settled in the center of a small crater called Eagle Crater. When the camera opened, scientists were greeted by layered bedrock outcrops—the first ever imaged on Mars.\n\nWithin days, Opportunity made one of the century\'s paramount scientific breakthroughs: the discovery of millimeter-sized spherical concretions nicknamed "blueberries." Chemical spectroscopy revealed these spherules were rich in hematite, while surrounding rocks contained jarosite—a hydrated iron sulfate mineral that forms only in the presence of acidic liquid water. For the next decade and a half, Opportunity drove an astonishing 45.16 kilometers, scaling the rims of Endurance, Victoria, and Endeavour craters to read billions of years of planetary history preserved in ancient rock strata.\n\nIn June 2018, a catastrophic global dust storm darkened the skies over Meridiani Planum. The opacity index (tau) climbed past 10.8, cutting off nearly all sunlight from Opportunity\'s solar arrays. On June 10, 2018 (Sol 5,111), the rover transmitted its final telemetry packet: "My battery is low and it\'s getting dark." Despite over a thousand recovery commands beamed by NASA over eight months, Opportunity never responded. Classified as "Connection Lost" after a historic 5,111-sol odyssey, the rover rests in Perseverance Valley.',
    scientificDiscoveries: [
      'Discovered hematite spherules ("blueberries") and jarosite minerals, demonstrating persistent standing acidic water on ancient Mars.',
      'Discovered clay mineral phyllosilicates at Endeavour Crater, indicating early neutral-pH water friendly to biology.',
      'Discovered bright gypsum veins formed by warm mineral-rich groundwater filling rock fractures.',
      'Completed the first off-world marathon, driving 45.16 kilometers across Mars.'
    ],
    timeline: [
      { date: '2003-07-07', title: 'Launch from Cape Canaveral', description: 'Boeing Delta II Heavy rocket propels Opportunity to Mars.', source: 'NASA JPL' },
      { date: '2004-01-25 05:05 UTC', title: 'Eagle Crater Touchdown', description: 'Scores interplanetary hole-in-one landing inside Eagle Crater.', source: 'NASA Planetary Data System' },
      { date: '2004-03-02', title: 'Water Discovery Confirmed', description: 'NASA confirms layered bedrock and hematite blueberries formed in liquid water.', source: 'NASA Press Release 04-082' },
      { date: '2015-03-24', title: 'First Off-World Marathon', description: 'Odometer passes 42.195 km, completing the first marathon on another planet.', source: 'NASA JPL' },
      { date: '2018-06-10', title: 'Final Sol 5111 Telemetry', description: 'Transmits final signal before global dust storm starves arrays of light.', source: 'NASA Deep Space Network' }
    ],
    physicalFate: {
      currentCondition: 'Resting intact in Perseverance Valley on Endeavour Crater rim; batteries fully discharged; dormant since June 2018.',
      confirmationMethod: 'Photographed in high resolution from orbit by MRO HiRISE camera on September 20, 2018.',
      environmentalFactors: 'Heavy atmospheric dust coating, severe vacuum thermal cycling, and lack of electrical power.',
      heritageStatus: 'Designated as a major historic human space heritage artifact on Mars.'
    },
    sources: [
      { title: 'NASA Science: MER Opportunity Overview', publisher: 'NASA Science Mission Directorate', url: 'https://science.nasa.gov/mission/mer-opportunity/', accessedAt: '2026-03-01', supports: ['Marathon distance of 45.16 km', 'Sol 5111 lifespan', 'Hematite blueberries'], sourceType: 'Primary Agency Archive' },
      { title: 'NSSDC Master Catalog: Opportunity', publisher: 'NASA NSSDC', url: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=2003-032A', accessedAt: '2026-03-01', supports: ['COSPAR ID', 'Launch parameters', 'Coordinates'], sourceType: 'Primary Agency Archive' }
    ],
    relatedRelicSlugs: ['spirit-rover', 'ingenuity-helicopter', 'insight-lander'],
    primaryImage: '/assets/relics/opportunity-rover-thumbnail.jpg',
    imageAttribution: 'NASA / JPL-Caltech / Cornell Univ. / Arizona State Univ. (PIA18079)',
    officialSourceUrl: 'https://science.nasa.gov/mission/mer-opportunity/',
    additionalSourceUrls: ['https://mars.nasa.gov/mer/'],
    sourceVerificationDate: '2026-03-01',
    featured: true,
    detailedStoryAvailable: true
  },

  // 3. InSight Lander (Mars)
  {
    id: 'insight-lander',
    slug: 'insight-lander',
    name: 'InSight Lander',
    alternateName: 'Interior Exploration using Seismic Investigations',
    missionName: 'InSight Discovery Mission',
    missionId: 'INSIGHT-2018',
    landingSiteId: 'elysium-planitia',
    cosparId: '2018-042A',
    catalogNssdcId: '2018-042A',
    celestialBody: 'Mars',
    region: 'Elysium Quadrangle',
    landingSite: 'Homestead Hollow, Elysium Planitia',
    latitude: 4.5024,
    longitude: 135.6234,
    coordinateSystem: 'Planetocentric (IAU/IAG 2000)',
    coordinateAccuracy: '±0.5 meters (MRO HiRISE verified)',
    coordinateSource: 'NASA MRO HiRISE',
    missionAgency: 'NASA',
    collaboratingAgencies: ['CNES (France)', 'DLR (Germany)', 'Lockheed Martin Space'],
    launchDate: '2018-05-05',
    launchSite: 'Vandenberg Air Force Base SLC-3E, California',
    landingOrImpactDate: '2018-11-26',
    lastOperationalDate: '2022-12-15',
    landingMethod: 'Supersonic parachute, aeroshell heatshield, and 12 pulsed hydrazine descent retro-rockets',
    landingOutcome: 'Pinpoint soft touchdown on three landing pads in flat sandy hollow on Elysium Planitia',
    artifactType: 'Lander',
    operationalStatus: 'Mission Completed',
    physicalCondition: 'Intact stationary science station resting in Homestead Hollow; twin UltraFlex solar arrays heavily covered in Martian dust; completed full extended scientific mission.',
    historicalEra: 'Modern Exploration: 2016–Present',
    spacecraftMass: '358 kg',
    massMeasurementBasis: 'Landed operational lander dry mass on the Martian surface.',
    shortDescription: 'The robotic geophysicist that unveiled the deep interior of Mars, listening to over 1,300 marsquakes and calculating the thickness of the Martian crust and core.',
    historicalSignificance: 'First spacecraft to explore the deep interior of Mars (crust, mantle, and molten core). Detected over 1,319 marsquakes and measured meteoroid impact shockwaves.',
    scientificContribution: 'Determined Mars has a liquid iron-nickel core of 1,830 km radius and mapped a crust 20 to 40 km thick with active tectonic faulting at Cerberus Fossae.',
    missionObjectives: [
      'Determine the thickness and structure of the Martian crust from seismic wave propagation.',
      'Determine the composition and state of the Martian core and mantle.',
      'Measure the rate of internal heat flow escaping from the planet\'s interior.'
    ],
    technicalSpecs: {
      launchMass: '694 kg (with cruise stage and propellant)',
      landedMass: '358 kg (on surface)',
      roverOrPayloadMass: '50 kg seismology and heat flow instrumentation suite',
      dimensions: '1.08 m deck height, 6.0 m span across deployed circular UltraFlex solar arrays',
      height: '1.08 m',
      width: '6.0 m',
      lengthOrDiameter: '6.0 m across deployed arrays',
      wheelBase: 'Not applicable (stationary three-legged lander)',
      powerSource: 'Two 2.15-meter circular Northrop Grumman UltraFlex solar arrays with lithium-ion batteries',
      powerCapacity: '600 W peak under clean skies; operated down to ~275 Wh per sol when heavily dust-covered',
      propulsion: '12 pulsed Aerojet Rocketdyne MR-107N 300 N hydrazine retro-rocket descent thrusters',
      scientificPayload: [
        { name: 'Seismic Experiment for Interior Structure (SEIS)', description: 'Ultra-sensitive French CNES vacuum-domed seismometer measuring seismic vibrations smaller than the radius of a hydrogen atom', leadInstitution: 'CNES / IPGP' },
        { name: 'Heat Flow and Physical Properties Package (HP3)', description: 'German DLR self-hammering mechanical "mole" probe designed to measure subsurface heat gradient', leadInstitution: 'DLR' },
        { name: 'Rotation and Interior Structure Experiment (RISE)', description: 'X-band radio Doppler tracking array measuring planetary wobble', leadInstitution: 'NASA JPL' },
        { name: 'Instrument Deployment Arm (IDA)', description: '1.9-meter robotic arm with scoop and wax-actuated grapple that placed SEIS on the surface', leadInstitution: 'Lockheed Martin' }
      ],
      communications: 'Medium-gain X-band horn antenna and twin UHF helical antennas communicating with MRO and Odyssey orbiters',
      primaryMaterials: 'Carbon composite honeycomb deck structure, titanium landing legs with crushed-aluminum core shock absorbers'
    },
    historicalNarrative: 'InSight lifted off on May 5, 2018, from Vandenberg Air Force Base—the first interplanetary launch ever conducted from the United States West Coast. On November 26, 2018, InSight entered the thin Martian atmosphere, unfurled its supersonic parachute, and ignited twelve hydrazine terminal descent thrusters to execute a gentle touchdown in a shallow dust crater named Homestead Hollow on Elysium Planitia.\n\nUnlike rovers designed to examine surface mineralogy, InSight was designed as an extraterrestrial geophysics laboratory. Using its robotic arm, InSight placed the French-built SEIS seismometer onto the Martian dirt and covered it with a specialized wind and thermal shield. Over four Earth years of continuous recording, InSight listened to the heartbeat of Mars, detecting 1,319 marsquakes. The seismic data revealed that Mars has a surprisingly large, liquid iron-rich core with a radius of 1,830 kilometers, enveloped by a thick mantle and a two-layer crust between 20 and 40 kilometers thick. Furthermore, InSight proved that Mars remains seismically active, pinpointing frequent rumbling quakes along the Cerberus Fossae fault system.\n\nHaving successfully achieved 100% of its primary science objectives and completed an extended science mission, dust accumulation on the solar arrays eventually depleted electrical power. On December 15, 2022, InSight concluded operations. Formally categorized as "Mission Completed," the silent lander rests in Elysium Planitia having rewritten planetary science textbooks.',
    scientificDiscoveries: [
      'Discovered that Mars is seismically alive, recording over 1,319 marsquakes, including a magnitude 4.7 monster quake on Sol 1222.',
      'Measured the Martian core directly for the first time, proving it is liquid with a radius of approximately 1,830 km.',
      'Mapped the Martian crust to between 20 km and 40 km thick, confirming a two-to-three-layer geological stratification.',
      'Detected acoustic shockwaves and crater-forming seismic thuds from new meteoroid impacts on Mars.'
    ],
    timeline: [
      { date: '2018-05-05', title: 'Launch from Vandenberg', description: 'Atlas V 401 launches first West Coast interplanetary mission.', source: 'NASA JPL' },
      { date: '2018-11-26 19:52 UTC', title: 'Touchdown on Elysium Planitia', description: 'Performs flawless thruster landing in Homestead Hollow.', source: 'NASA Planetary Data System' },
      { date: '2018-12-19', title: 'Seismometer Deployed', description: 'Robotic arm places SEIS seismometer directly onto Martian surface.', source: 'CNES / NASA' },
      { date: '2019-04-06', title: 'First Martian Quake Detected', description: 'SEIS records Sol 128 seismic rumble from the interior of Mars.', source: 'Nature Geoscience' },
      { date: '2022-12-15', title: 'Mission Goals 100% Completed', description: 'Concludes extended mission after 1,445 sols of breakthrough seismic research.', source: 'NASA Press Release' }
    ],
    physicalFate: {
      currentCondition: 'Stationary three-legged lander resting in Homestead Hollow; SEIS dome placed on soil 1.8 m from lander; arrays dust-covered; fully completed mission.',
      confirmationMethod: 'Re-observed repeatedly by MRO HiRISE; documented in high-resolution orbital imagery.',
      environmentalFactors: 'Continuous dust deposition and extreme vacuum thermal swings on Elysium Planitia.',
      heritageStatus: 'Formally archived NASA historical planetary surface facility.'
    },
    sources: [
      { title: 'NASA Science: InSight Mission Overview', publisher: 'NASA Science Mission Directorate', url: 'https://science.nasa.gov/mission/insight/', accessedAt: '2026-03-01', supports: ['1319 marsquakes', 'Core radius 1830 km', 'Landing timestamp'], sourceType: 'Primary Agency Archive' },
      { title: 'NSSDC: InSight Lander', publisher: 'NASA NSSDC', url: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=2018-042A', accessedAt: '2026-03-01', supports: ['COSPAR ID', 'Launch and landing parameters', 'Surface mass'], sourceType: 'Primary Agency Archive' }
    ],
    relatedRelicSlugs: ['spirit-rover', 'opportunity-rover'],
    primaryImage: 'https://images-assets.nasa.gov/image/PIA22743/PIA22743~medium.jpg',
    imageAttribution: 'NASA / JPL-Caltech',
    officialSourceUrl: 'https://science.nasa.gov/mission/insight/',
    additionalSourceUrls: ['https://mars.nasa.gov/insight/'],
    sourceVerificationDate: '2026-03-01',
    featured: true,
    detailedStoryAvailable: true
  },

  // 4. Ingenuity Helicopter (Mars)
  {
    id: 'ingenuity-helicopter',
    slug: 'ingenuity-helicopter',
    name: 'Ingenuity Mars Helicopter',
    alternateName: 'Mars Helicopter Technology Demonstration ("Ginny")',
    missionName: 'Mars 2020 Perseverance Expedition',
    missionId: 'M2020-INGENUITY',
    landingSiteId: 'jezero-crater',
    cosparId: '2020-052B',
    catalogNssdcId: '2020-052B',
    celestialBody: 'Mars',
    region: 'Syrtis Major Quadrangle',
    landingSite: 'Valinor Hills, Jezero Crater',
    latitude: 18.4447,
    longitude: 77.4508,
    coordinateSystem: 'Planetocentric (IAU/IAG 2000)',
    coordinateAccuracy: '±0.5 meters (Perseverance Mastcam-Z verified)',
    coordinateSource: 'NASA Perseverance Rover Mastcam-Z',
    missionAgency: 'NASA',
    collaboratingAgencies: ['Jet Propulsion Laboratory (JPL)', 'AeroVironment', 'Qualcomm'],
    launchDate: '2020-07-30',
    launchSite: 'Cape Canaveral SLC-41, Florida',
    landingOrImpactDate: '2021-02-18',
    lastOperationalDate: '2024-01-18',
    landingMethod: 'Stowed beneath Perseverance rover belly pan; deployed to the ground via spring-loaded pyro-cutter linkage',
    landingOutcome: 'Unlatched, rotated into flight stance, dropped 10 cm to the soil at Wright Brothers Field, surviving the freezing Martian night alone',
    artifactType: 'Helicopter / Rotorcraft',
    operationalStatus: 'Mission Completed',
    physicalCondition: 'Resting upright on its four carbon-composite landing legs on the rippled sand dunes of Valinor Hills; rotor blades sustained tip damage during Flight 72 touchdown; solar panel generates power and communicates daily test packets to Perseverance.',
    historicalEra: 'Modern Exploration: 2016–Present',
    spacecraftMass: '1.8 kg',
    massMeasurementBasis: 'Total flight vehicle mass (equivalent to 0.68 kg weight in Martian 0.38g gravity).',
    shortDescription: 'The Wright Brothers moment on an alien world: the historic 1.8-kg coaxial drone that executed 72 powered atmospheric flights over 17 kilometers across Jezero Crater.',
    historicalSignificance: 'First powered, controlled flight by an aircraft on another planet. Designed for 5 proof-of-concept hops, it completed 72 flights, operating as an autonomous aerial scout.',
    scientificContribution: 'Acquired aerial terrain reconnaissance maps, scouted rover drive routes, and photographed inaccessible ancient volcanic and river delta strata.',
    missionObjectives: [
      'Demonstrate powered, controlled aerodynamic flight in the razor-thin atmosphere of Mars (1% Earth density).',
      'Demonstrate autonomous flight navigation using downward-looking optical flow computer vision.',
      'Scout and validate science targets and safe drive paths for the Perseverance rover.'
    ],
    technicalSpecs: {
      launchMass: '1.8 kg (total standalone flight craft)',
      landedMass: '1.8 kg',
      roverOrPayloadMass: '0.2 kg color downward terrain navigation camera and avionics computer',
      dimensions: '0.49 m fuselage height; 1.21 m counter-rotating coaxial rotor diameter',
      height: '0.49 m',
      width: '1.21 m',
      lengthOrDiameter: '1.21 m rotor diameter',
      wheelBase: '0.38 m carbon landing leg stance',
      powerSource: 'Solar panel charging six Sony lithium-ion battery cells (total capacity ~43 Wh)',
      powerCapacity: '350 W peak rotor motor draw during flight / 43 Wh battery bank',
      propulsion: 'Twin counter-rotating coaxial carbon-fiber foam-core rotors spinning at 2,400 to 2,700 RPM',
      scientificPayload: [
        { name: 'High-Resolution Color Return Camera', description: '13-megapixel terrain survey camera taking aerial horizon images', leadInstitution: 'NASA JPL' },
        { name: 'Black-and-White Navigation Camera', description: 'Downward-facing optical tracking sensor measuring surface feature motion at 30 fps', leadInstitution: 'NASA JPL' },
        { name: 'Inertial Measurement Unit (IMU) & Laser Altimeter', description: 'Measures vehicle attitude and precise terrain clearance up to 24 meters', leadInstitution: 'Garmin / JPL' }
      ],
      communications: '900 MHz Zigbee-compatible short-range radio relay linking to helicopter base station antenna on Perseverance rover',
      primaryMaterials: 'High-modulus carbon-fiber composite rotor blades, aluminum and beryllium structural hub fittings, Mylar thermal fuselage wrap'
    },
    historicalNarrative: 'When NASA\'s Perseverance rover touched down on Mars on February 18, 2021, stowed beneath its chassis was a tiny 1.8-kilogram technology demonstrator that many critics believed could never fly. The Martian atmosphere has an average surface pressure less than 1% of Earth\'s—the aerodynamic equivalent of flying at 100,000 feet (30,000 meters) altitude, far higher than any conventional helicopter has ever flown on Earth.\n\nOn April 19, 2021, at an airfield named "Wright Brothers Field" in Jezero Crater, Ingenuity spun its counter-rotating carbon blades to an astonishing 2,500 RPM, rose three meters into the thin air, hovered for thirty seconds, and touched down softly. It was humanity\'s Wright Brothers moment on another celestial body. Attached beneath the solar panel was a postage-stamp-sized piece of fabric from the wing of Orville and Wilbur Wright\'s 1903 Flyer I.\n\nDesigned to fly five times over thirty days, Ingenuity revolutionized off-world exploration by staying active for nearly three years. Flying ahead of Perseverance as an autonomous aerial scout, Ingenuity scaled rugged crater dunes, climbed over the Jezero delta river cliffs, and executed 72 successful flights totaling over 17 kilometers of distance and over two hours of cumulative airtime. On January 18, 2024, during Flight 72, the helicopter encountered featureless sand terrain and made a hard touchdown on Valinor Hills, sustaining damage to its rotor blade tips. Having exceeded its planned lifespan by 1,400%, Ingenuity was retired with honors. Classified as "Mission Completed," the historic aircraft remains parked in Jezero Crater as a timeless monument to human audacity and aviation.',
    scientificDiscoveries: [
      'Proved that aerodynamic rotorcraft flight is practical and scalable in the ultra-thin atmosphere of Mars.',
      'Scouted drive paths through boulder fields and treacherous sand ripples, saving Perseverance months of hazard avoidance.',
      'Mapped inaccessible canyon walls and sand dunes from altitudes up to 24 meters.',
      'Completed 72 powered atmospheric flights, totaling 17.0 kilometers traveled over 128.8 minutes of airtime.'
    ],
    timeline: [
      { date: '2020-07-30', title: 'Launch from Florida', description: 'Atlas V launches Mars 2020 mission carrying Ingenuity.', source: 'NASA JPL' },
      { date: '2021-04-03', title: 'Drop to the Martian Soil', description: 'Ingenuity is unlatched from Perseverance belly to stand on its own legs.', source: 'NASA Mars 2020 Log' },
      { date: '2021-04-19 07:34 UTC', title: 'Historic First Flight', description: 'Performs first powered flight on another planet at Wright Brothers Field.', source: 'NASA Press Release 21-044' },
      { date: '2023-10-05', title: 'Altitude Record of 24 Meters', description: 'Flight 61 climbs to 24 meters above the Martian floor.', source: 'NASA JPL Flight Logs' },
      { date: '2024-01-18', title: 'Flight 72 & Mission Completion', description: 'Completes 72nd and final flight on Valinor Hills; retires with 100% mission success.', source: 'NASA Headquarters Statement' }
    ],
    physicalFate: {
      currentCondition: 'Standing proudly on all four legs at Valinor Hills; rotor blade tips sustained fractures during final landing; electronics, solar array, and battery remain operational; transmitting data to Perseverance.',
      confirmationMethod: 'Photographed on surface in high resolution by Perseverance Rover Mastcam-Z camera on February 4, 2024.',
      environmentalFactors: 'Martian atmospheric dust deposition, extreme vacuum freeze-thaw cycles, and solar wind radiation.',
      heritageStatus: 'Formally designated by NASA and the Smithsonian as an extraterrestrial aerospace milestone artifact.'
    },
    sources: [
      { title: 'NASA Science: Mars Ingenuity Helicopter', publisher: 'NASA Science Mission Directorate', url: 'https://science.nasa.gov/mission/mars-2020-perseverance/ingenuity-mars-helicopter/', accessedAt: '2026-03-01', supports: ['72 flights completed', '17.0 km flight distance', 'Wright Brothers fabric piece'], sourceType: 'Primary Agency Archive' },
      { title: 'NSSDC: Ingenuity Mars Helicopter', publisher: 'NASA NSSDC', url: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=2020-052B', accessedAt: '2026-03-01', supports: ['COSPAR ID', 'Vehicle mass 1.8 kg', 'Flight coordinates'], sourceType: 'Primary Agency Archive' }
    ],
    relatedRelicSlugs: ['opportunity-rover', 'spirit-rover'],
    primaryImage: '/assets/relics/ingenuity-helicopter-thumbnail.jpg',
    imageAttribution: 'NASA / JPL-Caltech / ASU / MSSS (PIA24547)',
    officialSourceUrl: 'https://science.nasa.gov/mission/mars-2020-perseverance/ingenuity-mars-helicopter/',
    additionalSourceUrls: ['https://mars.nasa.gov/technology/helicopter/'],
    sourceVerificationDate: '2026-03-01',
    featured: true,
    detailedStoryAvailable: true
  },

  // 5. Apollo 11 Lunar Module Descent Stage (Moon)
  {
    id: 'apollo-11-descent-stage',
    slug: 'apollo-11-descent-stage',
    name: 'Apollo 11 Lunar Module Descent Stage',
    alternateName: 'LM-5 "Eagle" Descent Stage',
    missionName: 'Apollo 11',
    missionId: 'AS-506',
    landingSiteId: 'tranquility-base',
    cosparId: '1969-059C',
    catalogNssdcId: '1969-059C',
    celestialBody: 'Moon',
    region: 'Mare Tranquillitatis',
    landingSite: 'Tranquility Base (Statio Tranquillitatis)',
    latitude: 0.67408,
    longitude: 23.47297,
    coordinateSystem: 'Selenographic (IAU/IAG Mean Earth/Polar Axis)',
    coordinateAccuracy: '±0.5 meters (LROC Narrow Angle Camera verified)',
    coordinateSource: 'NASA Lunar Reconnaissance Orbiter (LROC)',
    missionAgency: 'NASA',
    collaboratingAgencies: ['Grumman Aerospace Corporation'],
    launchDate: '1969-07-16',
    launchSite: 'Kennedy Space Center LC-39A, Florida',
    landingOrImpactDate: '1969-07-20',
    lastOperationalDate: '1969-07-21',
    landingMethod: 'Throttleable hypergolic rocket descent engine with manual semi-automatic pilot guidance by Neil Armstrong',
    landingOutcome: 'Historic soft touchdown with 25 seconds of propellant remaining; "Houston, Tranquility Base here. The Eagle has landed."',
    artifactType: 'Descent Stage',
    operationalStatus: 'Mission Completed',
    physicalCondition: 'Intact four-legged octagonal landing stage resting undisturbed on Mare Tranquillitatis regolith; gold and amber Kapton foil insulation blankets weathered by solar ultraviolet exposure.',
    historicalEra: 'Early Space Age: 1959–1976',
    spacecraftMass: '2,034 kg',
    massMeasurementBasis: 'Landed dry descent stage mass remaining on lunar surface after ascent stage separation.',
    shortDescription: 'The foundational artifact of human planetary exploration: the lower stage of the Eagle that touched down at Tranquility Base on July 20, 1969.',
    historicalSignificance: 'The first crewed extraterrestrial landing site in human history. Neil Armstrong and Buzz Aldrin stepped onto the Moon from its ladder, inaugurating humanity as a multi-world species.',
    scientificContribution: 'Served as base for deployment of the Early Apollo Scientific Experiments Package (EASEP) and the Lunar Laser Ranging Retroreflector, still measured today.',
    missionObjectives: [
      'Perform crewed lunar landing and return safely to Earth.',
      'Deploy the Early Apollo Scientific Experiments Package (EASEP).',
      'Collect and return lunar surface samples and solar wind composition foil.'
    ],
    technicalSpecs: {
      launchMass: '15,103 kg (fueled Lunar Module at translunar injection)',
      landedMass: '2,034 kg (empty dry descent stage on lunar surface)',
      roverOrPayloadMass: 'EASEP package: 77 kg',
      dimensions: '3.23 m height, 9.45 m across diagonally deployed landing footpads',
      height: '3.23 m',
      width: '4.22 m body / 9.45 m gear',
      lengthOrDiameter: '9.45 m diagonally',
      wheelBase: 'Not applicable (four-legged fixed landing gear)',
      powerSource: 'Four high-reliability silver-zinc batteries providing 1,600 Ah at 28 V DC',
      powerCapacity: '1,600 Ah at 28 V DC (400 Ah per battery)',
      propulsion: 'TRW Lunar Module Descent Engine (LMDE) throttleable from 4,670 N to 43,900 N thrust using Aerozine 50 and N2O4',
      scientificPayload: [
        { name: 'Passive Seismic Experiment Package (PSEP)', description: 'Solar-powered seismometer that recorded moonquakes and micrometeoroid strikes', leadInstitution: 'Lamont-Doherty Geological Observatory' },
        { name: 'Laser Ranging Retroreflector (LRRR)', description: 'Corner-cube fused silica array still actively hit by Earth lasers to track lunar orbit', leadInstitution: 'University of Maryland / NASA' },
        { name: 'Solar Wind Composition Experiment (SWCE)', description: 'High-purity aluminum foil sheet exposed to solar wind and returned to Earth', leadInstitution: 'University of Bern' }
      ],
      communications: 'S-band steerable dish antenna (0.66 m diameter) and omni antennas broadcasting voice, biomedical telemetry, and live TV to Earth',
      primaryMaterials: '2024 and 7075 aluminum alloys, titanium structural fittings, multilayer Kapton and aluminized Mylar thermal insulation, stainless steel footpad crush cores'
    },
    historicalNarrative: 'On July 16, 1969, a Saturn V rocket lifted off from Kennedy Space Center Launch Complex 39A carrying Commander Neil Armstrong, Command Module Pilot Michael Collins, and Lunar Module Pilot Buzz Aldrin. Four days later, Armstrong and Aldrin separated in Lunar Module Eagle from Columbia in lunar orbit and began their descent toward the flat mare basalts of the Sea of Tranquility.\n\nDuring the final descent, Armstrong noticed the computer navigation was guiding them toward a boulder-strewn crater the size of a football stadium (West Crater). Taking semi-manual control, Armstrong pitched Eagle forward, skimming across the surface to find a smooth clearing. With only 25 seconds of descent propellant remaining, the sensor probes beneath the footpads brushed the lunar dust, and Armstrong shut down the engine. At 20:17:40 UTC on July 20, 1969, Armstrong transmitted the words that echoed worldwide: "Houston, Tranquility Base here. The Eagle has landed."\n\nSix hours later, Armstrong descended the ladder mounted on the descent stage\'s forward leg and stepped onto the lunar soil. Over an extraordinary two-and-a-half-hour moonwalk, Armstrong and Aldrin collected 21.5 kilograms of lunar rocks and deployed the EASEP scientific package. When the ascent stage ignited twenty-one hours later to carry the astronauts back to orbit, the descent stage remained behind at Tranquility Base. Categorized as "Mission Completed," it stands undisturbed on the Moon with its plaque: "Here men from the planet Earth first set foot upon the Moon, July 1969 A.D. We came in peace for all mankind."',
    scientificDiscoveries: [
      'Returned 21.5 kg of lunar regolith and basalt rocks, proving the Moon is ancient (3.7 billion years old) and formed without liquid water.',
      'Deployed the Laser Ranging Retroreflector, which continues to measure the Earth-Moon distance with millimeter accuracy.',
      'Detected solar wind isotopic ratios (He-3/He-4 and Ne-20/Ne-22) unaffected by Earth\'s magnetic shield.',
      'Proved human beings can work, walk, and perform delicate scientific operations in lunar 1/6th gravity.'
    ],
    timeline: [
      { date: '1969-07-16', title: 'Launch of Saturn V', description: 'Liftoff from Kennedy Space Center Pad 39A.', source: 'Apollo 11 Mission Report' },
      { date: '1969-07-20 20:17 UTC', title: 'Touchdown at Tranquility Base', description: 'Eagle lands manually in Mare Tranquillitatis with 25 seconds of fuel remaining.', source: 'Apollo Lunar Surface Journal' },
      { date: '1969-07-21 02:56 UTC', title: 'First Steps on the Moon', description: 'Neil Armstrong steps off descent stage footpad: "One small step for man, one giant leap for mankind."', source: 'NASA Audio Archive' },
      { date: '1969-07-21 17:54 UTC', title: 'Ascent Stage Liftoff', description: 'Eagle ascent stage blasts off from the descent stage launching platform.', source: 'Apollo 11 Flight Journal' }
    ],
    physicalFate: {
      currentCondition: 'Resting undisturbed on Mare Tranquillitatis; four footpads embedded in soil; stainless steel plaque attached to forward leg ladder; golden thermal foil weathered by solar radiation.',
      confirmationMethod: 'Photographed in crystal detail by NASA Lunar Reconnaissance Orbiter (LROC) showing stage, astronaut footpaths, and scientific packages.',
      environmentalFactors: 'Total vacuum thermal cycling (-170°C to +120°C), solar ultraviolet radiation, and micrometeoroid bombardment.',
      heritageStatus: 'Protected under US Federal Law (One Small Step to Protect Human Heritage in Space Act).'
    },
    sources: [
      { title: 'Apollo 11 Mission Report (NASA SP-238)', publisher: 'NASA Manned Spacecraft Center', url: 'https://history.nasa.gov/alsj/a11/a11.html', accessedAt: '2026-03-01', supports: ['Landed dry mass 2,034 kg', 'Touchdown timestamp', 'EASEP payload'], sourceType: 'Primary Agency Archive' },
      { title: 'NSSDC Master Catalog: Apollo 11 LM', publisher: 'NASA NSSDC', url: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-059C', accessedAt: '2026-03-01', supports: ['COSPAR ID', 'Coordinates 0.67408° N, 23.47297° E', 'Propellant specs'], sourceType: 'Primary Agency Archive' }
    ],
    relatedRelicSlugs: ['surveyor-3', 'lunar-roving-vehicle'],
    primaryImage: 'https://images-assets.nasa.gov/image/AS11-40-5927/AS11-40-5927~medium.jpg',
    imageAttribution: 'NASA / Apollo 11 Crew (Neil Armstrong & Buzz Aldrin)',
    officialSourceUrl: 'https://www.nasa.gov/mission/apollo-11/',
    additionalSourceUrls: ['https://history.nasa.gov/alsj/a11/'],
    sourceVerificationDate: '2026-03-01',
    featured: true,
    detailedStoryAvailable: true
  },

  // 6. Surveyor 3 (Moon)
  {
    id: 'surveyor-3',
    slug: 'surveyor-3',
    name: 'Surveyor 3',
    alternateName: 'Surveyor-C Lunar Soft Lander',
    missionName: 'Surveyor Program',
    missionId: 'SURVEYOR-C',
    landingSiteId: 'ocean-of-storms',
    cosparId: '1967-035A',
    catalogNssdcId: '1967-035A',
    celestialBody: 'Moon',
    region: 'Oceanus Procellarum',
    landingSite: 'Surveyor Crater, Ocean of Storms',
    latitude: -3.0160,
    longitude: 336.5820,
    coordinateSystem: 'Selenographic (IAU/IAG)',
    coordinateAccuracy: '±0.5 meters (Visited in person by Apollo 12 crew and verified by LROC)',
    coordinateSource: 'NASA Apollo 12 & LROC',
    missionAgency: 'NASA',
    collaboratingAgencies: ['Jet Propulsion Laboratory (JPL)', 'Hughes Aircraft Company'],
    launchDate: '1967-04-17',
    launchSite: 'Cape Canaveral LC-36B, Florida',
    landingOrImpactDate: '1967-04-20',
    lastOperationalDate: '1967-05-04',
    landingMethod: 'Solid-fuel retro-rocket and three throttleable vernier rocket engines with Doppler radar descent altimeter',
    landingOutcome: 'Bounced three times on the slope of a crater because radar reflections from smooth rocks kept engines firing; shut down manually upon third touchdown',
    artifactType: 'Lander',
    operationalStatus: 'Mission Completed',
    physicalCondition: 'Resting on the 12-degree interior slope of Surveyor Crater; television camera and surface sampler arm were mechanically retrieved by Apollo 12 astronauts and brought back to Earth; remaining airframe stands intact.',
    historicalEra: 'Early Space Age: 1959–1976',
    spacecraftMass: '296 kg',
    massMeasurementBasis: 'Landed dry mass on lunar surface (excluding jettisoned retro-rocket and burned vernier propellants).',
    shortDescription: 'The robotic scout that dug the first trenches in lunar regolith, later visited in person by Apollo 12 astronauts in history\'s only human inspection of an off-world robotic craft.',
    historicalSignificance: 'First spacecraft visited on another world by human beings. In November 1969, Apollo 12 landed 160 meters away and astronauts retrieved its camera to analyze long-term space weathering.',
    scientificContribution: 'Conducted the first mechanical soil mechanics tests on the Moon, proving lunar soil could support the weight of the Apollo Lunar Module and suited astronauts.',
    missionObjectives: [
      'Accomplish soft landing on the Moon in Oceanus Procellarum.',
      'Obtain post-landing television pictures of the lunar surface and crater walls.',
      'Dig trench samples with the robotic surface sampler arm to determine regolith bearing strength.'
    ],
    technicalSpecs: {
      launchMass: '1,026 kg (at launch with solid retro-rocket)',
      landedMass: '296 kg (dry lander on surface)',
      roverOrPayloadMass: '38 kg camera and soil mechanics surface sampler',
      dimensions: '3.0 m height × 4.2 m wide tripod landing gear',
      height: '3.0 m',
      width: '4.2 m',
      lengthOrDiameter: '4.2 m across landing pads',
      wheelBase: 'Not applicable (three-legged aluminum tripod gear with crushable honeycomb footpads)',
      powerSource: 'Solar array containing 3,960 solar cells and silver-zinc rechargeable batteries',
      powerCapacity: '89 W solar array output with 4.1 kWh battery storage',
      propulsion: 'Thiokol solid propellant main retro-rocket (40 kN) and three Reaction Motors throttleable vernier engines (130–460 N each)',
      scientificPayload: [
        { name: 'Surveyor Television System', description: 'Slow-scan Vidicon camera with mirror assembly capable of 360-degree azimuth rotation and optical zoom', leadInstitution: 'Hughes Aircraft / JPL' },
        { name: 'Surface Sampler Mechanism', description: 'Motorized pantograph boom with small digging bucket for excavating trenches up to 18 cm deep', leadInstitution: 'California Institute of Technology' },
        { name: 'Engineering Telemetry Accelerometers', description: 'Measured landing impact deceleration to calculate soil bearing capacity', leadInstitution: 'NASA JPL' }
      ],
      communications: 'High-gain planar array antenna transmitting TV frames at S-band directly to NASA Deep Space Network',
      primaryMaterials: 'Tubular aluminum alloy 7075 spaceframe, gold-plated electronics boxes, polished aluminum thermal mirrors'
    },
    historicalNarrative: 'Surveyor 3 was launched on April 17, 1967, aboard an Atlas-Centaur rocket from Cape Canaveral, tasked with answering a life-or-death question for the Apollo program: would the lunar surface support a multi-ton manned spacecraft, or would an astronaut sink helplessly into deep, quicksand-like dust? On April 20, 1967, Surveyor 3 approached Oceanus Procellarum. Due to specular radar reflections from smooth crater rocks, its vernier engines failed to shut down at the programmed 4-meter altitude. The spacecraft struck the lunar surface, bounced ten meters into the sky, bounced a second time, and finally settled on the third touchdown resting on a 12-degree crater slope.\n\nOver the next fourteen days, Surveyor 3 transmitted 6,315 television photographs and operated its motorized soil scoop for eighteen hours, excavating four distinct trenches up to 18 centimeters deep. The mechanical tests proved definitively that the lunar soil possessed cohesion and bearing strength of 5.5 to 10 N/cm²—more than enough to support the Apollo Lunar Module.\n\nThirty-one months later, on November 19, 1969, Apollo 12 executed a pinpoint landing just 160 meters from Surveyor 3. Astronauts Pete Conrad and Alan Bean walked down into the crater and inspected Surveyor 3 in person, taking photographs and using bolt cutters to harvest its television camera and scoop. Returned to Earth, the components were analyzed to study the effects of prolonged space vacuum, micrometeorites, and solar ultraviolet radiation on aerospace materials. Classified as "Mission Completed," Surveyor 3 remains in Oceanus Procellarum as the only robotic craft revisited by human hands on another world.',
    scientificDiscoveries: [
      'Proved lunar soil has bearing strength capable of supporting crewed spacecraft without sinking into dust.',
      'Returned 6,315 high-resolution television images of the lunar surface and Earth during lunar eclipse.',
      'Recovered hardware demonstrated that spacecraft coatings tan under solar UV and micrometeoroid erosion was remarkably low.'
    ],
    timeline: [
      { date: '1967-04-17', title: 'Launch from Cape Canaveral', description: 'Atlas-Centaur rocket launches Surveyor 3 to Ocean of Storms.', source: 'NASA JPL' },
      { date: '1967-04-20 00:04 UTC', title: 'Touchdown with Triple Bounce', description: 'Touches down three times on 12-degree crater slope.', source: 'NASA NSSDC' },
      { date: '1967-04-22', title: 'First Lunar Soil Trench Dug', description: 'Robotic scoop digs into lunar soil, validating ground bearing strength.', source: 'Science Magazine' },
      { date: '1969-11-20', title: 'Visited by Apollo 12 Astronauts', description: 'Pete Conrad and Alan Bean walk down into crater and retrieve camera.', source: 'NASA Apollo 12 Journal' }
    ],
    physicalFate: {
      currentCondition: 'Stands on the 12-degree slope of Surveyor Crater; television camera and soil scoop removed by Apollo 12 crew and displayed at the Smithsonian National Air and Space Museum; frame intact.',
      confirmationMethod: 'Visited directly by Apollo 12 astronauts and photographed from lunar orbit by NASA LROC.',
      environmentalFactors: 'Lunar thermal extremes (-170°C to +120°C), solar wind sputtering, and micrometeoroid pitting.',
      heritageStatus: 'Protected historic Apollo 12 / Surveyor 3 exploration heritage site.'
    },
    sources: [
      { title: 'Surveyor III Mission Report (NASA TR 32-1177)', publisher: 'NASA Jet Propulsion Laboratory', url: 'https://ntrs.nasa.gov/citations/19670028243', accessedAt: '2026-03-01', supports: ['Landed mass 296 kg', 'Soil mechanics tests', '6,315 photographs'], sourceType: 'Primary Agency Archive' },
      { title: 'Analysis of Surveyor 3 Material Recovered by Apollo 12 (NASA SP-284)', publisher: 'NASA MSC', url: 'https://history.nasa.gov/alsj/a12/a12.surveyor.html', accessedAt: '2026-03-01', supports: ['Camera retrieval', 'Material weathering analysis'], sourceType: 'Primary Agency Archive' }
    ],
    relatedRelicSlugs: ['apollo-11-descent-stage', 'lunar-roving-vehicle'],
    primaryImage: 'https://images-assets.nasa.gov/image/AS12-48-7134/AS12-48-7134~medium.jpg',
    imageAttribution: 'NASA / Apollo 12 Crew (Pete Conrad & Alan Bean)',
    officialSourceUrl: 'https://science.nasa.gov/mission/surveyor-3/',
    additionalSourceUrls: ['https://history.nasa.gov/alsj/a12/'],
    sourceVerificationDate: '2026-03-01',
    featured: true,
    detailedStoryAvailable: true
  },

  // 7. Apollo Lunar Roving Vehicle (Moon)
  {
    id: 'lunar-roving-vehicle',
    slug: 'lunar-roving-vehicle',
    name: 'Apollo Lunar Roving Vehicle',
    alternateName: 'Apollo 15 LRV-001 "Moon Buggy"',
    missionName: 'Apollo 15',
    missionId: 'AS-510',
    landingSiteId: 'hadley-apennine',
    cosparId: '1971-063C-LRV',
    catalogNssdcId: '1971-063C-01',
    celestialBody: 'Moon',
    region: 'Hadley-Apennine',
    landingSite: 'Hadley Base VIP Site (300 m East of Falcon LM)',
    latitude: 26.1345,
    longitude: 3.6362,
    coordinateSystem: 'Selenographic (IAU/IAG)',
    coordinateAccuracy: '±1 meter (LROC verified)',
    coordinateSource: 'NASA LROC',
    missionAgency: 'NASA',
    collaboratingAgencies: ['The Boeing Company', 'Delco Electronics (General Motors)'],
    launchDate: '1971-07-26',
    launchSite: 'Kennedy Space Center LC-39A, Florida',
    landingOrImpactDate: '1971-07-31',
    lastOperationalDate: '1971-08-02',
    landingMethod: 'Folded in Quad I bay of the LM descent stage; unfolded to the surface via manual astronaut lanyards and pulleys',
    landingOutcome: 'Successfully unfolded, locked into drive stance, and completed 27.8 kilometers of exploration traverses',
    artifactType: 'Rover',
    operationalStatus: 'Mission Completed',
    physicalCondition: 'Parked intact 300 meters east of the Falcon descent stage; RCA television camera pointed toward the stage to broadcast the liftoff of the ascent stage; resting undisturbed in the Hadley valley.',
    historicalEra: 'Early Space Age: 1959–1976',
    spacecraftMass: '210 kg',
    massMeasurementBasis: 'Earth empty vehicle mass (weighed only 35 kg-equivalent in lunar 1/6 gravity).',
    shortDescription: 'The inaugural crewed lunar automobile that transformed planetary exploration, expanding astronauts\' operational radius from hundreds of meters to kilometers across Hadley Rille.',
    historicalSignificance: 'First motorized vehicle driven by humans on another celestial body. Enabled astronauts David Scott and James Irwin to traverse 27.8 km and collect the 4.15-billion-year-old "Genesis Rock".',
    scientificContribution: 'Expanded field geology coverage tenfold, transporting 77 kg of core samples and filming the first live television broadcast of an ascent stage blasting off from the Moon.',
    missionObjectives: [
      'Transport two suited astronauts and scientific sampling tools across rough lunar terrain up to 8 km radius.',
      'Carry heavy rock boxes, core drills, and continuous color television equipment.',
      'Automatically calculate navigation coordinates using an onboard dead-reckoning computer system.'
    ],
    technicalSpecs: {
      launchMass: '210 kg (empty Earth weight)',
      landedMass: '210 kg (capable of carrying 490 kg payload including astronauts and rocks)',
      roverOrPayloadMass: '490 kg payload capacity (total vehicle operating weight 700 kg)',
      dimensions: '3.1 m length × 1.8 m width × 1.14 m height',
      height: '1.14 m',
      width: '1.8 m',
      lengthOrDiameter: '3.1 m',
      wheelBase: '2.3 m wheelbase / 0.36 m ground clearance',
      powerSource: 'Two 36-volt non-rechargeable silver-zinc potassium hydroxide batteries',
      powerCapacity: '121 Ah capacity per battery (total 8.7 kWh)',
      propulsion: 'Four independent 0.25-horsepower (190 W) series-wound DC electric brush motors inside each wheel hub',
      scientificPayload: [
        { name: 'Ground-Controlled Television Assembly (GCTA)', description: 'Color television camera steerable remotely from Houston Mission Control by Edward Fendell', leadInstitution: 'RCA Corporation' },
        { name: 'Lunar Communications Relay Unit (LCRU)', description: 'Self-contained S-band and VHF communication system transmitting high-gain TV directly to Earth', leadInstitution: 'RCA Corporation' },
        { name: 'Inertial Dead-Reckoning Navigation Computer', description: 'Directional gyroscope and wheel odometers calculating heading, distance, and return azimuth', leadInstitution: 'Delco Electronics' }
      ],
      communications: 'High-gain steerable parabolic mesh dish antenna (0.9 m diameter) transmitting real-time color video and voice',
      primaryMaterials: 'Welded aluminum alloy 2219 chassis, zinc-coated woven piano-wire mesh tires with titanium chevron treads, folded tubular seating'
    },
    historicalNarrative: 'Apollo 15 marked the transition of the Apollo program to advanced scientific field exploration. On July 30, 1971, Commander David Scott and Lunar Module Pilot James Irwin touched down at the foot of the 4,000-meter-high Apennine Mountains beside the 300-meter-deep volcanic chasm of Hadley Rille. Packed into Quad I of Lunar Module Falcon was LRV-001: the first Lunar Roving Vehicle, engineered by Boeing and Delco Electronics.\n\nUsing a set of nylon lanyards and pulleys, the astronauts unfolded the rover from the side of the descent stage. With Scott in the commander\'s left seat operating the T-shaped drive controller, the electric buggy rolled across the dust at speeds up to 12 km/h. Its wheels were an engineering marvel: rather than rubber tires that would turn brittle in the vacuum, each wheel was woven from 800 strands of high-strength zinc-coated piano wire, riveted with titanium chevron treads that gripped the loose dust.\n\nOver three surface traverses totaling 27.8 kilometers, the rover transformed planetary science. At Spur Crater on Mount Hadley Delta, Scott spotted a gleaming white rock atop a dark boulder: sample 15415, the legendary "Genesis Rock." Dating back 4.15 billion years, it proved the primordial Moon was once enveloped in a molten magma ocean. When it came time to depart, Scott parked the rover 300 meters east of Falcon at the "VIP Site" and aimed the television camera at the ascent stage. Remotely controlled from Mission Control in Houston, the camera tracked the golden ascent stage as its rocket ignited, broadcasting live television of a spacecraft leaving the lunar surface. Classified as "Mission Completed," the world\'s first space automobile stands permanently parked in the Hadley plain.',
    scientificDiscoveries: [
      'Discovered the "Genesis Rock" (anorthosite sample 15415), confirming the early lunar magma ocean differentiation theory.',
      'Collected volcanic green glass beads formed by fire-fountain explosive eruptions 3.6 billion years ago.',
      'Broadcast the first live television of a spacecraft blasting off from the lunar surface.',
      'Demonstrated off-world automotive mobility, expanding astronaut exploration radius tenfold.'
    ],
    timeline: [
      { date: '1971-07-26', title: 'Launch of Apollo 15', description: 'Saturn V launches first J-class extended exploration mission.', source: 'NASA Apollo 15 Report' },
      { date: '1971-07-31', title: 'Rover Deployed at Hadley Base', description: 'Unfolded from Falcon descent stage; first wheels roll on the Moon.', source: 'Apollo Lunar Surface Journal' },
      { date: '1971-08-01', title: 'Genesis Rock Discovery', description: 'David Scott and Jim Irwin discover 4.15-billion-year-old anorthosite 15415.', source: 'Science: Apollo 15 Samples' },
      { date: '1971-08-02 17:11 UTC', title: 'Ascent Broadcasted Live', description: 'Parked rover camera broadcasts live television of Falcon ascent liftoff.', source: 'NASA Video Archive' }
    ],
    physicalFate: {
      currentCondition: 'Parked intact 300 meters east of Falcon descent stage at the Hadley Base VIP site; tires, seats, camera, and high-gain dish in near-original position in lunar vacuum; completed all mission objectives.',
      confirmationMethod: 'Imaged in high resolution by NASA LROC Narrow Angle Camera, showing the parked rover and distinct wheel tracks.',
      environmentalFactors: 'Lunar thermal cycling (-170°C to +120°C) and micrometeorite dusting.',
      heritageStatus: 'Protected under US Federal Apollo Lunar Landing Sites Preservation Guidelines.'
    },
    sources: [
      { title: 'Apollo 15 Mission Report (NASA SP-289)', publisher: 'NASA Manned Spacecraft Center', url: 'https://history.nasa.gov/alsj/a15/a15.html', accessedAt: '2026-03-01', supports: ['Rover empty mass 210 kg', '27.8 km driving distance', 'Genesis Rock sample 15415'], sourceType: 'Primary Agency Archive' },
      { title: 'NSSDC Master Catalog: Apollo 15 LRV', publisher: 'NASA NSSDC', url: 'https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1971-063C-01', accessedAt: '2026-03-01', supports: ['COSPAR ID', 'Hadley Base coordinates', 'Battery capacity'], sourceType: 'Primary Agency Archive' }
    ],
    relatedRelicSlugs: ['apollo-11-descent-stage', 'surveyor-3'],
    primaryImage: 'https://images-assets.nasa.gov/image/AS15-88-11866/AS15-88-11866~medium.jpg',
    imageAttribution: 'NASA / Apollo 15 Crew (David Scott & James Irwin)',
    officialSourceUrl: 'https://www.nasa.gov/mission/apollo-15/',
    additionalSourceUrls: ['https://history.nasa.gov/alsj/a15/'],
    sourceVerificationDate: '2026-03-01',
    featured: true,
    detailedStoryAvailable: true
  }
];

export const ALL_CELESTIAL_BODIES: CelestialBodyFilter[] = [
  'All',
  'Mars',
  'Moon'
];

export const ALL_AGENCIES: AgencyFilter[] = [
  'All',
  'NASA'
];

export const ALL_ERAS: EraFilter[] = [
  'All',
  'Early Space Age: 1959–1976',
  'Robotic Revival: 1977–2015',
  'Modern Exploration: 2016–Present'
];

export const ALL_STATUSES: StatusFilter[] = [
  'All',
  'Mission Completed',
  'Connection Lost'
];

// Dynamic Statistics Helpers
export const TOTAL_RELICS_COUNT = ALL_MASTER_RELICS.length; // Exactly 7
export const MARS_RELICS_COUNT = ALL_MASTER_RELICS.filter((r) => r.celestialBody === 'Mars').length; // Exactly 4
export const LUNAR_RELICS_COUNT = ALL_MASTER_RELICS.filter((r) => r.celestialBody === 'Moon').length; // Exactly 3
export const CELESTIAL_BODIES_COUNT = new Set(ALL_MASTER_RELICS.map((r) => r.celestialBody)).size; // Exactly 2
export const AGENCIES_COUNT = new Set(ALL_MASTER_RELICS.map((r) => r.missionAgency)).size; // Exactly 1

const COMMON_SLUG_ALIASES: Record<string, string> = {
  // Spirit aliases
  'spirit': 'spirit-rover',
  'mer-a': 'spirit-rover',
  // Opportunity aliases
  'opportunity': 'opportunity-rover',
  'oppy': 'opportunity-rover',
  'mer-b': 'opportunity-rover',
  // InSight aliases
  'insight': 'insight-lander',
  // Ingenuity aliases
  'ingenuity': 'ingenuity-helicopter',
  'ginny': 'ingenuity-helicopter',
  'mars-helicopter': 'ingenuity-helicopter',
  // Apollo 11 aliases
  'apollo-11': 'apollo-11-descent-stage',
  'apollo-11-lander': 'apollo-11-descent-stage',
  'eagle': 'apollo-11-descent-stage',
  // Surveyor 3 aliases
  'surveyor-3': 'surveyor-3',
  'surveyor': 'surveyor-3',
  // Lunar Roving Vehicle aliases
  'lunar-roving-vehicle': 'lunar-roving-vehicle',
  'apollo-15-lunar-roving-vehicle': 'lunar-roving-vehicle',
  'apollo-15-lrv': 'lunar-roving-vehicle',
  'lunar-rover': 'lunar-roving-vehicle',
  'moon-buggy': 'lunar-roving-vehicle',
  'lrv': 'lunar-roving-vehicle'
};

export function getMasterRelicBySlug(rawSlug: string): MasterRelicRecord | undefined {
  if (!rawSlug) return undefined;
  
  const clean = decodeURIComponent(rawSlug)
    .replace(/^\/+|\/+$/g, '')
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-');

  const targetSlug = COMMON_SLUG_ALIASES[clean] || clean;

  const directMatch = ALL_MASTER_RELICS.find(
    (r) => r.slug.toLowerCase() === targetSlug || r.id.toLowerCase() === targetSlug ||
           r.slug.toLowerCase() === clean || r.id.toLowerCase() === clean
  );
  if (directMatch) return directMatch;

  return ALL_MASTER_RELICS.find((r) => {
    const rSlug = r.slug.toLowerCase();
    const rId = r.id.toLowerCase();
    const rName = r.name.toLowerCase();
    return (
      rSlug.includes(clean) ||
      clean.includes(rSlug) ||
      rId.includes(clean) ||
      clean.includes(rId) ||
      rName.includes(clean)
    );
  });
}

export function getRelatedRelics(slug: string): MasterRelicRecord[] {
  const relic = getMasterRelicBySlug(slug);
  if (!relic || !relic.relatedRelicSlugs || relic.relatedRelicSlugs.length === 0) {
    return [];
  }
  return relic.relatedRelicSlugs
    .map((relSlug) => getMasterRelicBySlug(relSlug))
    .filter((r): r is MasterRelicRecord => r !== undefined);
}
