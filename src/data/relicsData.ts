import { RelicData } from '../types';

export const RELICS_DATA: RelicData[] = [
  // ==========================================
  // MARS WORLD
  // ==========================================
  {
    id: 'spirit-rover',
    slug: 'spirit-rover',
    name: 'Spirit Rover',
    subtitle: 'MER-A (Mars Exploration Rover A)',
    world: 'mars',
    worldName: 'The Red Planet',
    status: 'Connection Lost',
    category: 'Robotic Geologist',
    shortDescription: 'The robotic geologist that helped reveal evidence of ancient water and transformed our understanding of the Martian environment.',
    fullIntroduction: 'NASA\'s Spirit Rover landed in Mars\' Gusev Crater in January 2004 for a planned 90-sol mission. Over the next six years, Spirit defied every operational expectation, surviving freezing Martian winters, dust-covered solar arrays, and mechanical wheel failures to uncover unambiguous geological evidence that Mars was once a hydrothermal, water-rich world.',
    heroImage: '/assets/relics/spirit-rover-thumbnail.jpg',
    fallbackGradient: 'from-[#FF5722]/30 via-[#101827] to-[#060814]',
    blueprintType: 'rover',
    coordinates: '14.5684° S, 175.4726° E (Gusev Crater, Mars)',
    operationalLife: '2,210 Sols (6 Years, 2 Months, 18 Days)',
    quickStats: [
      { label: 'LAUNCH DATE', value: 'JUNE 10, 2003', subtext: 'Cape Canaveral SLC-17A' },
      { label: 'MARS LANDING', value: 'JANUARY 4, 2004', subtext: 'Touchdown in Gusev Crater' },
      { label: 'LAST TRANSMISSION', value: 'MARCH 22, 2010', subtext: 'Sol 2210 via Deep Space Network' },
      { label: 'DISTANCE TRAVERSED', value: '7.73 KM', subtext: '4.8 Miles across rocky terrain' }
    ],
    milestones: [
      {
        year: '2003',
        date: 'June 10, 2003',
        title: 'Launch from Earth & Trans-Mars Injection',
        description: 'Spirit lifted off atop a Boeing Delta II 7925 rocket from Cape Canaveral Air Force Station, embarking on a seven-month interplanetary cruise through the solar void toward Mars.',
        significance: 'Initiated the Mars Exploration Rover project to determine whether life could ever have been supported on Mars.'
      },
      {
        year: '2004',
        date: 'January 4, 2004',
        title: 'Airbag Landing & First Surface Images',
        description: 'Spirit successfully performed supersonic parachute descent and bounced inside its reinforced pressurized airbag shell before coming to rest on the volcanic floor of Gusev Crater.',
        significance: 'Completed the first flawless robotic touchdown on Mars since the Mars Pathfinder mission in 1997.'
      },
      {
        year: '2007',
        date: 'May 2007',
        title: 'The Serendipitous Silica Discovery at Home Plate',
        description: 'After Spirit\'s front-right drive wheel seized up in 2006, the rover was forced to drive backwards, dragging the dead wheel like a trenching plow. In May 2007, the trench churned up bright white soil containing over 90% pure silica.',
        significance: 'Provided ironclad proof that acidic hydrothermal hot springs or steam fumaroles existed in the area—an ideal habitat for microbial life.'
      },
      {
        year: '2010',
        date: 'March 22, 2010',
        title: 'Final Communication from the Troy Sand Trap',
        description: 'In April 2009, Spirit broke through a crusty surface into soft iron sulfate sands at a site named "Troy". As Martian winter approached, the trapped rover could not angle its solar panels toward the low sun. Its final signal reached Earth on March 22, 2010.',
        significance: 'Completed more than 25 times its original design lifespan, establishing the gold standard for robotic field geology.'
      }
    ],
    engineeringImpact: {
      title: 'Pioneering Extreme Autonomy & Rocker-Bogie Mobility',
      description: 'Spirit proved that the rocker-bogie suspension system could withstand severe extraterrestrial boulder fields without springs or complex joints. The team developed novel remote navigational techniques, driving backwards on five wheels for years.',
      technicalHighlights: [
        'Rocker-bogie mechanical design capable of climbing obstacles twice the wheel diameter (25 cm).',
        'Rock Abrasion Tool (RAT) ground away weathering rinds to expose unweathered planetary crust.',
        'Alpha Particle X-Ray Spectrometer (APXS) and Miniature Thermal Emission Spectrometer (Mini-TES).',
        'Deep solar management strategies surviving dozens of Martian dust devil cleaning events.'
      ]
    },
    discoveryPanel: {
      question: 'WHAT DID THIS MACHINE TEACH US?',
      answer: 'Spirit conclusively proved that ancient Mars was once dynamic, volcanic, and permeated with hydrothermal hot springs and liquid water.',
      bulletPoints: [
        'Uncovered silica deposits formed by volcanic steam vents or acidic hot springs, prime environments for micro-fossil preservation.',
        'Proved that Gusev Crater volcanic basalt had been altered by groundwater infiltration millions of years ago.',
        'Tracked real-time Martian atmospheric dynamics, photographing dozens of dust devils traversing the plains.',
        'Demonstrated that robotic rovers can operate as long-term autonomous field scientists on alien worlds.'
      ]
    },
    officialNasaUrl: 'https://science.nasa.gov/mission/mer-spirit/',
    nasaSourceLabel: 'NASA Science: Mars Exploration Rover - Spirit Mission Archive'
  },
  {
    id: 'opportunity-rover',
    slug: 'opportunity-rover',
    name: 'Opportunity Rover',
    subtitle: 'MER-B (Mars Exploration Rover B)',
    world: 'mars',
    worldName: 'The Red Planet',
    status: 'Connection Lost',
    category: 'Marathon Robotic Pioneer',
    shortDescription: 'The long-lived Mars exploration rover that dramatically exceeded its planned mission and discovered compelling evidence of past water activity.',
    fullIntroduction: 'Spirit\'s twin sister, Opportunity, touched down on Meridiani Planum in January 2004. Designed for 90 Martian days, "Oppy" explored the Red Planet for over 14.5 Earth years, traveling an extraterrestrial marathon distance of 45.16 kilometers (28.06 miles) before a cataclysmic planet-wide dust storm enveloped Mars in 2018.',
    heroImage: '/assets/relics/opportunity-rover-thumbnail.jpg',
    fallbackGradient: 'from-[#FF5722]/30 via-[#101827] to-[#060814]',
    blueprintType: 'rover',
    coordinates: '1.9483° S, 354.4742° E (Meridiani Planum, Mars)',
    operationalLife: '5,111 Sols (14 Years, 4 Months, 16 Days)',
    quickStats: [
      { label: 'LAUNCH DATE', value: 'JULY 7, 2003', subtext: 'Cape Canaveral Air Force Station' },
      { label: 'MARS LANDING', value: 'JANUARY 25, 2004', subtext: 'Interplanetary hole-in-one in Eagle Crater' },
      { label: 'LAST TRANSMISSION', value: 'JUNE 10, 2018', subtext: 'Perseverance Valley during dust storm' },
      { label: 'OFF-WORLD MARATHON', value: '45.16 KM', subtext: 'All-time off-world driving record' }
    ],
    milestones: [
      {
        year: '2003',
        date: 'July 7, 2003',
        title: 'Launch Aboard Delta II Heavy',
        description: 'Opportunity roared into space aboard a Delta II Heavy booster from Cape Canaveral, beginning its 283-million-mile journey to Mars.',
        significance: 'Completed NASA\'s twin rover deployment to simultaneously explore two opposite hemispheres of Mars.'
      },
      {
        year: '2004',
        date: 'January 25, 2004',
        title: 'The Interplanetary Hole-in-One at Eagle Crater',
        description: 'Bouncing inside its protective airbags, Opportunity came to rest directly inside the small 22-meter-wide Eagle Crater, facing exposed sedimentary bedrock layered like an open geological textbook.',
        significance: 'First direct in-situ sighting of layered sedimentary bedrock on another planet.'
      },
      {
        year: '2004',
        date: 'March 2004',
        title: 'Discovery of Hematite "Blueberries"',
        description: 'Opportunity deployed its microscopic imager to discover millions of tiny, millimeter-sized spherical mineral concretions dubbed "blueberries", rich in gray crystalline hematite.',
        significance: 'Provided the first unequivocal proof that liquid acidic groundwater soaked and percolated through Martian sandstones.'
      },
      {
        year: '2018',
        date: 'June 10, 2018',
        title: 'The Great Planet-Encircling Dust Storm',
        description: 'In June 2018, a massive global dust storm enveloped Mars, blocking 99% of sunlight from reaching Opportunity\'s solar panels in Perseverance Valley. Its final communication was logged on June 10, 2018; NASA declared the mission complete on February 13, 2019.',
        significance: 'Concluded humanity\'s longest continuously operating interplanetary roving mission.'
      }
    ],
    engineeringImpact: {
      title: 'Extreme Longevity & Solar Dust Management',
      description: 'Opportunity was engineered with conservative electronic margins, durable brushless DC wheel motors, and autonomous visual odometry. The rover learned to sleep deeply during cold seasons to preserve its radioisotope heater units.',
      technicalHighlights: [
        'Overcame an early heater switch malfunction by modifying daily battery charging protocols.',
        'Explored four increasingly massive impact craters: Eagle (22m), Endurance (130m), Victoria (750m), and Endeavour (22km).',
        'Autonomous hazard detection navigation software uploaded mid-mission from Earth.',
        'Surpassed the Soviet Union\'s Lunokhod 2 to hold the all-time distance record on an extraterrestrial surface.'
      ]
    },
    discoveryPanel: {
      question: 'WHAT DID THIS MACHINE TEACH US?',
      answer: 'Opportunity proved that ancient Mars possessed prolonged, standing liquid surface water and neutral pH groundwater systems.',
      bulletPoints: [
        'Found sedimentary ripple marks indicating ancient water flowed across Martian dunes.',
        'Discovered gypsum mineral veins at Endeavour Crater precipitated by water with a neutral, drinkable pH.',
        'Confirmed ancient Mars had all the prerequisites—energy, mineral building blocks, and liquid water—for microbial habitability.',
        'Provided continuous 14-year meteorological baseline data for future human Mars missions.'
      ]
    },
    officialNasaUrl: 'https://science.nasa.gov/mission/mer-opportunity/',
    nasaSourceLabel: 'NASA Science: Mars Exploration Rover - Opportunity Mission Archive'
  },
  {
    id: 'insight-lander',
    slug: 'insight-lander',
    name: 'InSight Lander',
    subtitle: 'Interior Exploration using Seismic Investigations',
    world: 'mars',
    worldName: 'The Red Planet',
    status: 'Mission Completed',
    category: 'Geophysical Observatory',
    shortDescription: 'The stationary geophysical lander designed to investigate Mars\' interior, seismic activity, and internal structure.',
    fullIntroduction: 'Unlike roving geologists that study surface rocks, NASA\'s InSight lander acted as a planetary physician, taking Mars\' pulse, measuring its internal temperature, and analyzing its deep crust, mantle, and molten core through more than 1,300 detected marsquakes.',
    heroImage: 'https://images-assets.nasa.gov/image/PIA22232/PIA22232~medium.jpg',
    fallbackGradient: 'from-[#FF5722]/30 via-[#101827] to-[#060814]',
    blueprintType: 'lander',
    coordinates: '4.5024° N, 135.6234° E (Elysium Planitia, Mars)',
    operationalLife: '1,445 Sols (4 Years, 0 Months, 19 Days)',
    quickStats: [
      { label: 'LAUNCH DATE', value: 'MAY 5, 2018', subtext: 'Vandenberg Space Force Base' },
      { label: 'MARS TOUCHDOWN', value: 'NOVEMBER 26, 2018', subtext: 'Retro-rocket landing on Elysium Planitia' },
      { label: 'LAST TRANSMISSION', value: 'DECEMBER 15, 2022', subtext: 'Final telemetry from Elysium Planitia' },
      { label: 'MARSQUAKES LOGGED', value: '1,319 EVENTS', subtext: 'Magnitude up to 4.7 recorded by SEIS' }
    ],
    milestones: [
      {
        year: '2018',
        date: 'May 5, 2018',
        title: 'Historic West Coast Interplanetary Launch',
        description: 'InSight launched from Vandenberg Air Force Base in California aboard an Atlas V rocket—the very first interplanetary mission to launch from the United States West Coast.',
        significance: 'Accompanied by the twin MarCO CubeSats, proving miniature deep-space relay spacecraft.'
      },
      {
        year: '2018',
        date: 'November 26, 2018',
        title: 'Touchdown on the Smooth Plains of Elysium',
        description: 'InSight executed an atmospheric entry at 12,300 mph (19,800 km/h), firing its terminal descent thrusters to gently touch down in the featureless sand-filled crater of Elysium Planitia.',
        significance: 'Provided the ultra-stable, rock-free platform needed for robotic deployment of delicate instruments.'
      },
      {
        year: '2019',
        date: 'April 6, 2019',
        title: 'First Seismic Tremor Recorded on Mars',
        description: 'InSight\'s ultra-sensitive French-built SEIS seismometer detected a faint rumbling sound originating from inside the planet—the first seismic signal ever directly recorded on another planet.',
        significance: 'Proved Mars is seismically active, ruling out the hypothesis that it is a geologically dead rock.'
      },
      {
        year: '2022',
        date: 'December 15, 2022',
        title: 'Dust Smothers Solar Arrays & Farewell',
        description: 'Over four years, Martian dust accumulated in a thick blanket across InSight\'s twin 2.2-meter solar panels. On December 15, 2022, InSight beamed its final photograph and telemetry before battery voltage dropped below critical levels.',
        significance: 'Provided humanity with the first complete 3D tomography of the internal layers of a terrestrial planet beyond Earth.'
      }
    ],
    engineeringImpact: {
      title: 'Precision Robotic Deployment in an Alien Vacuum',
      description: 'InSight was the first spacecraft to use a robotic arm to lift scientific instruments off its deck and place them directly onto the surface of another planet, placing a thermal and wind shield over the seismometer to isolate vibrations as small as a single hydrogen atom diameter.',
      technicalHighlights: [
        'SEIS seismometer capable of detecting ground motions one-millionth the thickness of human hair.',
        'Robotic Instrument Deployment Arm (IDA) with five degrees of freedom.',
        'RISE radio science experiment measuring Martian planetary wobble with centimeter accuracy.',
        'Novel robotic scoop techniques used to press soil into the recalcitrant Heat Flow and Physical Properties Package.'
      ]
    },
    discoveryPanel: {
      question: 'WHAT DID THIS MACHINE TEACH US?',
      answer: 'InSight revealed that Mars possesses a thin, fractured crust, a sluggish molten mantle, and a surprisingly large liquid iron-nickel core.',
      bulletPoints: [
        'Measured Mars\' crust thickness between 24 and 72 km, divided into two or three distinct layers.',
        'Determined Mars has a large, low-density liquid metallic core with a radius of approximately 1,830 km.',
        'Correlated seismic waves directly with newly formed meteorite impact craters photographed by Mars Reconnaissance Orbiter.',
        'Recorded a monster magnitude 4.7 quake in May 2022 that reverberated through the crust for over six hours.'
      ]
    },
    officialNasaUrl: 'https://science.nasa.gov/mission/insight/',
    nasaSourceLabel: 'NASA Science: InSight Lander Mission Archive'
  },
  {
    id: 'ingenuity-helicopter',
    slug: 'ingenuity-helicopter',
    name: 'Ingenuity Helicopter',
    subtitle: 'The Mars Helicopter Scout (Ginny)',
    world: 'mars',
    worldName: 'The Red Planet',
    status: 'Mission Completed',
    category: 'Autonomous Aerial Rotorcraft',
    shortDescription: 'The experimental rotorcraft that demonstrated powered, controlled flight on another planet.',
    fullIntroduction: 'Weighing just 1.8 kilograms (4 pounds), Ingenuity arrived on Mars tucked beneath the Perseverance rover. Built as a high-risk 30-day technology demonstration to see if flight was even possible in Mars\' ultra-thin atmosphere (less than 1% of Earth\'s sea-level density), Ingenuity flew 72 times across Jezero Crater, pioneering the aerial dimension of planetary exploration.',
    heroImage: '/assets/relics/ingenuity-helicopter-thumbnail.jpg',
    fallbackGradient: 'from-[#FF5722]/30 via-[#101827] to-[#060814]',
    blueprintType: 'helicopter',
    coordinates: '18.4447° N, 77.4508° E (Neretva Vallis, Jezero Crater)',
    operationalLife: '1,004 Sols (2 Years, 11 Months, 7 Days)',
    quickStats: [
      { label: 'LAUNCH DATE', value: 'JULY 30, 2020', subtext: 'Cape Canaveral SLC-41' },
      { label: 'MARS LANDING', value: 'FEBRUARY 18, 2021', subtext: 'Stowed beneath Perseverance Rover' },
      { label: 'FIRST FLIGHT', value: 'APRIL 19, 2021', subtext: 'Historical 3-meter hover test' },
      { label: 'TOTAL FLIGHTS', value: '72 FLIGHTS', subtext: '17.0 km total flight distance logged' }
    ],
    milestones: [
      {
        year: '2020',
        date: 'July 30, 2020',
        title: 'Launch Stowed Beneath Perseverance',
        description: 'Ingenuity launched cocooned inside a protective composite debris shield attached to the belly of the two-ton Perseverance rover aboard an Atlas V-541 booster.',
        significance: 'Carried a tiny piece of unbleached muslin fabric from the wing of the 1903 Wright Brothers Flyer attached beneath its solar panel.'
      },
      {
        year: '2021',
        date: 'April 19, 2021',
        title: 'Humanity\'s First Powered Flight on Another World',
        description: 'At 07:34 UTC, Ingenuity spun its counter-rotating carbon-fiber blades at 2,400 RPM, ascended 3 meters into the crisp Martian air, hovered for 30 seconds, rotated, and touched back down smoothly.',
        significance: 'Achieved the iconic "Wright Brothers moment" of aviation in the solar system.'
      },
      {
        year: '2021',
        date: 'May 2021 - 2023',
        title: 'Promotion to Perseverance Aerial Scout',
        description: 'Having passed its 5-flight demonstration with flying colors, NASA transitioned Ingenuity into an active mission scout, flying ahead of Perseverance to photograph boulder fields, river deltas, and sand dunes impossible for the rover to cross.',
        significance: 'Proved the military and scientific value of collaborative rover-rotorcraft planetary exploration teams.'
      },
      {
        year: '2024',
        date: 'January 18, 2024',
        title: 'Flight 72 & Final Rest at "Valinor Hills"',
        description: 'During a quick emergency landing on Flight 72 over featureless sandy ripples, one or more rotor blades clipped the terrain. Shadow imaging confirmed damage to the tip of a blade. Ingenuity was formally retired on January 25, 2024, leaving it as an eternal monument and telemetry station.',
        significance: 'Completed 14 times more distance and flew 33 times longer than originally planned.'
      }
    ],
    engineeringImpact: {
      title: 'Aeronautical Breakthrough in 1% Atmospheric Pressure',
      description: 'Flying in the Martian atmosphere is equivalent to flying at 100,000 feet (30,000 meters) on Earth—higher than any helicopter has ever flown. Ingenuity used ultralight carbon-composite blades spinning at 2,400-2,700 RPM, paired with smartphone-grade processors running autonomous visual-inertial odometry.',
      technicalHighlights: [
        'Coaxial counter-rotating carbon fiber rotor blades with customized aerodynamic twist.',
        'Qualcomm Snapdragon 801 processor running Linux, 100x more computing power than standard rad-hard space computers.',
        'Custom solar array and Sony lithium-ion cells engineered to survive -90°C Martian nights.',
        'Fully autonomous flight control system updating attitude and trajectory 500 times per second.'
      ]
    },
    discoveryPanel: {
      question: 'WHAT DID THIS MACHINE TEACH US?',
      answer: 'Ingenuity proved that powered flight is practical on Mars, opening the skies of the solar system for future drones and crewed expeditions.',
      bulletPoints: [
        'Demonstrated that standard commercial off-the-shelf (COTS) electronics and Linux can endure planetary space environments.',
        'Showed aerial scouting speeds up rover science planning by up to 300% by previewing obstacles.',
        'Paved the way for future aerial missions such as the Dragonfly mission to Saturn\'s moon Titan.',
        'Captured aerial photographs of Perseverance\'s discarded supersonic parachute and backshell.'
      ]
    },
    officialNasaUrl: 'https://science.nasa.gov/mission/mars-2020-perseverance/ingenuity-mars-helicopter/',
    nasaSourceLabel: 'NASA Science: Ingenuity Mars Helicopter Mission Archive'
  },

  // ==========================================
  // THE MOON (LUNAR WORLD)
  // ==========================================
  {
    id: 'apollo-11-descent-stage',
    slug: 'apollo-11-descent-stage',
    name: 'Apollo 11 Descent Stage',
    subtitle: 'Lunar Module "Eagle" LM-5 Descent Component',
    world: 'lunar',
    worldName: 'The Silent Moon',
    status: 'Mission Completed',
    category: 'Crewed Lunar Landing Platform',
    shortDescription: 'The lunar module\'s descent stage remained on the Moon after the ascent stage carried astronauts back into lunar orbit.',
    fullIntroduction: 'On July 20, 1969, humanity completed its most audacious journey when the Lunar Module Eagle touched down in the Sea of Tranquility. When Neil Armstrong and Buzz Aldrin ignited their ascent engine 21 hours later to return to orbit, Eagle\'s octagonal descent stage stayed behind—serving as their launch pad and standing today as the immortal foundation of humankind\'s first footsteps on another celestial world.',
    heroImage: 'https://images-assets.nasa.gov/image/AS11-40-5927/AS11-40-5927~medium.jpg',
    fallbackGradient: 'from-[#69D9FF]/20 via-[#101827] to-[#060814]',
    blueprintType: 'stage',
    coordinates: '0.67408° N, 23.47297° E (Mare Tranquillitatis / Sea of Tranquility)',
    operationalLife: 'Mission Active: July 20-21, 1969; Resting Forever',
    quickStats: [
      { label: 'MISSION LAUNCH', value: 'JULY 16, 1969', subtext: 'Saturn V from Kennedy Space Center' },
      { label: 'HISTORIC TOUCHDOWN', value: 'JULY 20, 1969', subtext: '20:17:40 UTC in Sea of Tranquility' },
      { label: 'HUMAN SURFACE TIME', value: '21 HOURS, 36 MIN', subtext: 'Armstrong & Aldrin extravehicular activity' },
      { label: 'COMMEMORATIVE PLAQUE', value: '"WE CAME IN PEACE"', subtext: 'Mounted on Descent Stage forward leg' }
    ],
    milestones: [
      {
        year: '1969',
        date: 'July 16, 1969',
        title: 'Launch from Pad 39A Aboard Saturn V',
        description: 'The monumental 363-foot Saturn V rocket generated 7.5 million pounds of thrust to launch astronauts Neil Armstrong, Buzz Aldrin, and Michael Collins on humanity\'s first lunar landing voyage.',
        significance: 'Executed the trans-lunar injection burn sending Apollo 11 out of Earth orbit toward the Moon.'
      },
      {
        year: '1969',
        date: 'July 20, 1969',
        title: 'The Manual Touchdown at Tranquility Base',
        description: 'With descent engine throttled and computer alarms (1202 & 1201) sounding, Neil Armstrong took semi-manual control to fly past a crater strewn with automobile-sized boulders, landing with less than 30 seconds of fuel remaining.',
        significance: 'Broadcast the historic words: "Houston, Tranquility Base here. The Eagle has landed."'
      },
      {
        year: '1969',
        date: 'July 21, 1969',
        title: 'First Human Steps & Scientific Experiment Deployment',
        description: 'Neil Armstrong descended the ladder mounted on the descent stage leg, stepping onto the lunar regolith. The astronauts deployed the Early Apollo Scientific Experiments Package (EASEP), including a laser retroreflector and passive seismometer.',
        significance: 'Humanity walked on another world for the first time in history and unveiled the commemorative peace plaque.'
      },
      {
        year: '1969',
        date: 'July 21, 1969',
        title: 'Ascent Stage Separation & Immortal Monument',
        description: 'At 17:54 UTC, explosive pyrotechnic guillotines severed all umbilical cables and structural interstage connections. The Ascent Stage engine ignited directly on top of the descent stage, launching the crew back to the Command Module Columbia.',
        significance: 'The descent stage remained on the lunar plain in pristine condition, untouched by wind, water, or atmospheric decay.'
      }
    ],
    engineeringImpact: {
      title: 'The Throttling Rocket Engine & Honeycomb Shock Absorption',
      description: 'The Descent Stage contained the revolutionary Descent Propulsion System (DPS)—the first throttleable hypergolic rocket engine ever flown, able to throttle continuously between 10% and 60% thrust. Its four landing legs used crushable aluminum honeycomb cartridges to absorb the shock of touchdown.',
      technicalHighlights: [
        'Throttleable rocket engine fueled by aerozine 50 and nitrogen tetroxide.',
        'Mylar and Kapton gold foil thermal thermal insulation shielding against 250°F to -250°F lunar temperature swings.',
        'Integral Modular Equipment Stowage Assembly (MESA) containing the Apollo lunar TV camera and sample collection tools.',
        'Crushable aluminum honeycomb shock struts that compressed permanently upon contact.'
      ]
    },
    discoveryPanel: {
      question: 'WHAT DID THIS MACHINE TEACH US?',
      answer: 'The Apollo 11 descent confirmed that the Moon was accessible to human beings and provided humanity with our first samples of pristine extraterrestrial bedrock.',
      bulletPoints: [
        'Proved lunar dust could safely support the structural weight of heavy spacecraft and humans without sinking.',
        'Laser retroreflector left beside the stage is still pulsed by Earth-based lasers today, measuring the Moon\'s distance with millimeter accuracy.',
        'Collected 21.55 kilograms (47.5 lbs) of lunar rock and soil, dating lunar mare basalt to 3.7 billion years old.',
        'Demonstrated that human-machine teams can safely navigate, troubleshoot, and succeed in deep space.'
      ]
    },
    officialNasaUrl: 'https://www.nasa.gov/mission/apollo-11/',
    nasaSourceLabel: 'NASA Mission History: Apollo 11 Lunar Landing'
  },
  {
    id: 'surveyor-3',
    slug: 'surveyor-3',
    name: 'Surveyor 3',
    subtitle: 'Uncrewed Robotic Lunar Soft-Lander',
    world: 'lunar',
    worldName: 'The Silent Moon',
    status: 'Mission Completed',
    category: 'Pre-Apollo Robotic Scout',
    shortDescription: 'An uncrewed lunar lander that helped investigate the Moon\'s surface and contributed to preparations for human exploration.',
    fullIntroduction: 'Launched in April 1967, Surveyor 3 was humanity\'s scout, sent to determine whether the lunar surface was firm enough for an Apollo astronaut to stand on without sinking into deep dust. In a moment unique in human spaceflight history, Apollo 12 astronauts Pete Conrad and Alan Bean pinpoint-landed their lunar module just 160 meters away in 1969 and walked over to inspect Surveyor 3.',
    heroImage: 'https://images-assets.nasa.gov/image/AS12-48-7133/AS12-48-7133~medium.jpg',
    fallbackGradient: 'from-[#69D9FF]/20 via-[#101827] to-[#060814]',
    blueprintType: 'lander',
    coordinates: '3.015° S, 23.418° W (Oceanus Procellarum / Ocean of Storms)',
    operationalLife: 'Mission: April 20 - May 4, 1967; Inspected Nov 19, 1969',
    quickStats: [
      { label: 'MISSION LAUNCH', value: 'APRIL 17, 1967', subtext: 'Atlas-Centaur rocket from Cape Canaveral' },
      { label: 'LUNAR LANDING', value: 'APRIL 20, 1967', subtext: 'Soft landing in Ocean of Storms crater' },
      { label: 'TV IMAGES RETURNED', value: '6,315 FRAMES', subtext: 'Panned 360° across crater rim' },
      { label: 'HUMAN VISIT', value: 'NOVEMBER 19, 1969', subtext: 'Apollo 12 crew inspected spacecraft' }
    ],
    milestones: [
      {
        year: '1967',
        date: 'April 17, 1967',
        title: 'Launch on Direct Lunar Trajectory',
        description: 'Surveyor 3 blasted off from Launch Complex 36B atop a General Dynamics Atlas-Centaur rocket on a direct 65-hour translunar trajectory toward Oceanus Procellarum.',
        significance: 'Tested the Centaur cryogenic upper stage on a direct-ascent lunar trajectory.'
      },
      {
        year: '1967',
        date: 'April 20, 1967',
        title: 'The Double-Bounce Touchdown in Surveyor Crater',
        description: 'Due to lunar rock reflectivity confusing the radar altimeter, Surveyor 3 bounced twice on the lunar surface before ground controllers commanded its vernier engines to shut down, settling on the 12-degree crater slope.',
        significance: 'Proved the landing gear could withstand uneven, sloping extraterrestrial terrain without tipping over.'
      },
      {
        year: '1967',
        date: 'April-May 1967',
        title: 'Surface Sampler Trenching & Soil Mechanics',
        description: 'Surveyor 3 deployed an electric scissor-arm surface sampler claw, digging four trenches up to 18 cm (7 inches) deep and demonstrating that the lunar regolith had a bearing strength similar to terrestrial damp beach sand.',
        significance: 'Cleared the path for Apollo astronauts by proving the lunar surface would easily support the weight of the Lunar Module.'
      },
      {
        year: '1969',
        date: 'November 19, 1969',
        title: 'The Apollo 12 Astronaut Rendezvous',
        description: 'Apollo 12 made a precision touchdown within walking distance. Astronauts Pete Conrad and Alan Bean hiked down the crater slope to inspect Surveyor 3, taking photos and removing its television camera to bring back to Earth.',
        significance: 'The first and only time human beings have visited and salvaged parts from an uncrewed robotic probe on another world.'
      }
    ],
    engineeringImpact: {
      title: 'Automated Radar Terminal Descent & Extraterrestrial Excavation',
      description: 'Surveyor 3 proved closed-loop Doppler velocity and altimeter radar guidance during terminal retro-burns. Its television camera with variable focal length and mirror assembly pioneered robotic teleoperation from Earth.',
      technicalHighlights: [
        'Solid-propellant retro-rocket motor slowed spacecraft from 6,000 mph to 250 mph.',
        'Three throttleable liquid-propellant vernier engines adjusted attitude and executed final touchdown.',
        'Electromechanical surface sampler arm with miniature scoop claw and strain gauges.',
        'Analysis of retrieved camera parts at NASA Houston revealed how spacecraft materials withstand solar radiation and micrometeorites over years.'
      ]
    },
    discoveryPanel: {
      question: 'WHAT DID THIS MACHINE TEACH US?',
      answer: 'Surveyor 3 proved the physical bearing strength of lunar soil, ensuring the safety of Apollo astronauts, and provided humanity\'s first experimental data on long-term space material degradation.',
      bulletPoints: [
        'Disproved the terrifying pre-Apollo hypothesis that the Moon was covered in quicksand-like dust that would swallow landers.',
        'Demonstrated that mechanical lunar soil properties allow trenching, core-drilling, and driving.',
        'Returned 6,315 high-resolution television photographs of the lunar surface and Earth solar eclipses.',
        'Retrieved parts tested at NASA labs proved ordinary paint, glass, and electrical connectors could endure vacuum and extreme temperatures for years.'
      ]
    },
    officialNasaUrl: 'https://science.nasa.gov/mission/surveyor-3/',
    nasaSourceLabel: 'NASA Science: Surveyor Program Mission Archive'
  },
  {
    id: 'lunar-roving-vehicle',
    slug: 'lunar-roving-vehicle',
    name: 'Apollo Lunar Roving Vehicle',
    subtitle: 'The Lunar Rover (LRV-001, LRV-002, LRV-003)',
    world: 'lunar',
    worldName: 'The Silent Moon',
    status: 'Mission Completed',
    category: 'Electric Off-World Automobile',
    shortDescription: 'The battery-powered lunar rover that extended astronauts\' mobility across the lunar landscape during the Apollo missions.',
    fullIntroduction: 'Built by Boeing and Delco in just 17 months under relentless Apollo deadlines, the Lunar Roving Vehicle (LRV) was an electric four-wheel-drive buggy folded like origami into the side of the Apollo Lunar Module. Deployed on Apollo 15, 16, and 17, the rover transformed lunar exploration from short walking hops to grand cross-country scientific expeditions across mountains, canyons, and vast craters.',
    heroImage: 'https://images-assets.nasa.gov/image/AS15-88-11901/AS15-88-11901~medium.jpg',
    fallbackGradient: 'from-[#69D9FF]/20 via-[#101827] to-[#060814]',
    blueprintType: 'buggy',
    coordinates: 'Hadley-Apennine, Descartes Highlands, & Taurus-Littrow (Apollo 15, 16, 17)',
    operationalLife: 'Deployed: Apollo 15 (1971), 16 (1972), 17 (1972); All 3 parked on the Moon',
    quickStats: [
      { label: 'FIRST DEPLOYED', value: 'JULY 31, 1971', subtext: 'Apollo 15 Commander Dave Scott' },
      { label: 'TOP SPEED LOGGED', value: '18.0 KM/H (11.2 MPH)', subtext: 'Downhill traverse by Gene Cernan' },
      { label: 'LONGEST MISSION DRIVE', value: '35.7 KM (22.2 MI)', subtext: 'Apollo 17 at Taurus-Littrow' },
      { label: 'POWER SOURCE', value: 'TWO 36V AG-ZN BATTERIES', subtext: 'Non-rechargeable silver-zinc cells' }
    ],
    milestones: [
      {
        year: '1971',
        date: 'July 31, 1971',
        title: 'Origami Deployment at Hadley Rille',
        description: 'Astronauts Dave Scott and Jim Irwin pulled two fabric deployment lanyards. The 460-pound rover swung out from the Lunar Module Descent Stage quadrant, automatically unfolding its wheels, suspension, and seats onto the lunar dirt.',
        significance: 'Humanity drove a motor vehicle on another celestial body for the first time in history.'
      },
      {
        year: '1971',
        date: 'August 1, 1971',
        title: 'Ascending Mount Hadley & Discovery of the Genesis Rock',
        description: 'The LRV carried the Apollo 15 astronauts miles across boulder-strewn terrain to the slopes of Mount Hadley Delta, where they discovered the "Genesis Rock"—an anorthosite sample 4.1 billion years old from the Moon\'s primordial crust.',
        significance: 'Proved the rover expanded scientific sample collection range by more than tenfold.'
      },
      {
        year: '1972',
        date: 'April 1972',
        title: 'Apollo 16 "Grand Prix" & Fenders Repaired with Duct Tape',
        description: 'During Apollo 16, John Young conducted the famous high-speed "Grand Prix" driving test. On Apollo 17, when a hammer knocked off a fender flare, astronauts repaired it using lunar maps, clamps, and gray duct tape to prevent blinding rooster-tails of dust.',
        significance: 'Demonstrated human ingenuity and off-world field improvisation under extreme conditions.'
      },
      {
        year: '1972',
        date: 'December 14, 1972',
        title: 'Broadcasting Apollo 17 Liftoff & Silent Vigil',
        description: 'Before boarding the Lunar Module Challenger for the last time, Commander Gene Cernan drove LRV-003 approximately 100 meters away, parking it and pointing its ground-controlled color TV camera toward the ascent stage to broadcast humanity\'s final Apollo lunar liftoff.',
        significance: 'All three Lunar Rovers remain parked at Hadley-Apennine, Descartes, and Taurus-Littrow as permanent testaments to human exploration.'
      }
    ],
    engineeringImpact: {
      title: 'Four Independent Electric Motors & Wire-Mesh Wheels',
      description: 'The LRV weighed only 462 lbs (210 kg) on Earth but only 77 lbs (35 kg) on the Moon. Each wheel had its own 1/4-horsepower electric motor and harmonic drive gear. The wheels were constructed from spun zinc-coated steel piano wire mesh with titanium chevron treads for grip.',
      technicalHighlights: [
        'Four independent direct-current electric motors with 80:1 harmonic drive transmissions.',
        'T-handle joystick control system replacing traditional steering wheel and pedals, operable with pressurized gloves.',
        'Gyro-stabilized inertial navigation system calculating heading, range, and bearing back to the Lunar Module.',
        'High-gain directional umbrella antenna communicating color video and biomedical telemetry directly to Earth.'
      ]
    },
    discoveryPanel: {
      question: 'WHAT DID THIS MACHINE TEACH US?',
      answer: 'The Lunar Rover demonstrated that off-world mobility is the critical multiplier for scientific discovery on planetary bodies.',
      bulletPoints: [
        'Allowed Apollo 15, 16, and 17 to collect over 280 kilograms of lunar samples, compared to 98 kg for Apollo 11, 12, and 14 combined.',
        'Allowed exploration of deep geological features such as Hadley Rille (a collapsed lava tube 1.5 km wide) and the massifs of Taurus-Littrow.',
        'Established engineering standards for all subsequent Martian rovers (Sojourner, Spirit, Opportunity, Curiosity, Perseverance).',
        'Demonstrated that electric battery-powered drivetrains are ideal for operation in extreme vacuum conditions without air-breathing combustion.'
      ]
    },
    officialNasaUrl: 'https://history.nasa.gov/alsj/lrv.html',
    nasaSourceLabel: 'NASA History Division: Apollo Lunar Roving Vehicle Documentation'
  }
];

export const WORLDS_DATA = [
  {
    id: 'mars' as const,
    name: 'The Red Planet',
    route: '/archive/mars',
    tag: 'WORLD 01',
    badge: '04 HISTORICAL MACHINES',
    accentColor: '#FF5722',
    accentClass: 'border-[#FF5722] text-[#FF5722]',
    bgClass: 'bg-nebula-mars',
    image: 'https://images-assets.nasa.gov/image/PIA04449/PIA04449~medium.jpg',
    description: 'A world of dust, ancient geological mysteries, robotic pioneers, and machines that transformed our understanding of Mars.',
    cta: 'ENTER MARS ARCHIVE →',
    relicsCount: 4,
    relicsList: ['Spirit Rover', 'Opportunity Rover', 'InSight Lander', 'Ingenuity Helicopter']
  },
  {
    id: 'lunar' as const,
    name: 'The Silent Moon',
    route: '/archive/lunar',
    tag: 'WORLD 02',
    badge: '03 HISTORICAL ARTIFACTS',
    accentColor: '#C9D3E0',
    accentClass: 'border-[#69D9FF] text-[#69D9FF]',
    bgClass: 'bg-nebula-lunar',
    image: 'https://images-assets.nasa.gov/image/AS11-40-5927/AS11-40-5927~medium.jpg',
    description: 'Explore the hardware, landing systems, and engineering achievements that made humanity\'s lunar exploration possible.',
    cta: 'ENTER LUNAR ARCHIVE →',
    relicsCount: 3,
    relicsList: ['Apollo 11 Descent Stage', 'Surveyor 3', 'Apollo Lunar Roving Vehicle']
  }
];

export const ACHIEVEMENTS_DATA = [
  {
    id: 'water-detective',
    title: 'WATER DETECTIVE',
    description: 'Successfully uncovered Spirit Rover\'s evidence of ancient Martian water and hydrothermal activity in the Terminal Quiz.',
    iconName: 'Droplets',
    accentColor: '#45D483',
    requirement: 'Answer the Spirit Rover Knowledge Quiz correctly.'
  },
  {
    id: 'lunar-pioneer',
    title: 'LUNAR PIONEER',
    description: 'Explored all three historical artifacts resting upon the surface of the Moon.',
    iconName: 'Moon',
    accentColor: '#69D9FF',
    requirement: 'Explore Apollo 11 Descent Stage, Surveyor 3, and Apollo Lunar Roving Vehicle.'
  },
  {
    id: 'chief-archaeologist',
    title: 'CHIEF SPACE ARCHAEOLOGIST',
    description: 'Certified master of humanity\'s robotic and crewed exploration legacies across Mars and the Moon.',
    iconName: 'Award',
    accentColor: '#FFC857',
    requirement: 'Complete the Spirit Rover exploration mission.'
  }
];
