export type WorldId = 'mars' | 'lunar';

export interface Milestone {
  year: string;
  date: string;
  title: string;
  description: string;
  significance: string;
}

export interface QuickStat {
  label: string;
  value: string;
  subtext?: string;
}

export interface RelicData {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  world: WorldId;
  worldName: string;
  status: string;
  category: string;
  shortDescription: string;
  fullIntroduction: string;
  heroImage: string;
  fallbackGradient: string;
  blueprintType: 'rover' | 'lander' | 'helicopter' | 'stage' | 'buggy';
  quickStats: QuickStat[];
  milestones: [Milestone, Milestone, Milestone, Milestone];
  engineeringImpact: {
    title: string;
    description: string;
    technicalHighlights: string[];
  };
  discoveryPanel: {
    question: string;
    answer: string;
    bulletPoints: string[];
  };
  officialNasaUrl: string;
  nasaSourceLabel: string;
  coordinates: string;
  operationalLife: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  iconName: string;
  accentColor: string;
  isUnlocked: boolean;
  unlockedAt?: string;
  requirement: string;
}

export interface ExplorationState {
  exploredSlugs: string[];
  completedSlugs: string[];
  quizCompleted: boolean;
  waterDetectiveUnlocked: boolean;
  recipientName: string;
}

export type CelestialBodyFilter = 'All' | 'Mars' | 'Moon';
export type AgencyFilter = 'All' | 'NASA';
export type EraFilter = 'All' | 'Early Space Age: 1959–1976' | 'Robotic Revival: 1977–2015' | 'Modern Exploration: 2016–Present';
export type StatusFilter = 'All' | 'Mission Completed' | 'Connection Lost';

export type ArtifactType = 
  | 'Rover'
  | 'Lander'
  | 'Descent Stage'
  | 'Helicopter / Rotorcraft';

export type OperationalStatus = 
  | 'Mission Completed'
  | 'Connection Lost';

export type HistoricalEra = 
  | 'Early Space Age: 1959–1976'
  | 'Robotic Revival: 1977–2015'
  | 'Modern Exploration: 2016–Present';

export interface ScientificInstrument {
  name: string;
  description: string;
  leadInstitution?: string;
}

export interface DetailedTechnicalSpecs {
  launchMass: string;
  landedMass: string;
  roverOrPayloadMass?: string;
  dimensions: string;
  height?: string;
  width?: string;
  lengthOrDiameter?: string;
  wheelBase?: string;
  powerSource: string;
  powerCapacity: string;
  propulsion: string;
  scientificPayload: ScientificInstrument[];
  communications: string;
  primaryMaterials: string;
}

export interface RelicTimelineEvent {
  date: string;
  title: string;
  description: string;
  source?: string;
}

export interface StructuredSourceCitation {
  title: string;
  publisher: string;
  url: string;
  accessedAt: string;
  supports: string[];
  sourceType: 'Primary Agency Archive' | 'Peer-Reviewed Science Report' | 'Technical Mission Specification' | 'Orbiter Imaging Registry' | 'Government Space Agency Data';
}

export interface PhysicalFate {
  currentCondition: string;
  confirmationMethod: string;
  environmentalFactors: string;
  heritageStatus?: string;
}

export interface MasterRelicRecord {
  id: string;
  slug: string;
  name: string;
  alternateName: string | null;
  missionName: string;
  missionId: string;
  landingSiteId: string;
  cosparId: string;
  catalogNssdcId?: string;
  celestialBody: 'Mars' | 'Moon';
  region: string;
  landingSite: string;
  latitude: number | null;
  longitude: number | null;
  coordinateSystem: string;
  coordinateAccuracy: string | null;
  coordinateSource: string | null;
  missionAgency: 'NASA';
  collaboratingAgencies: string[];
  launchDate: string;
  launchSite: string;
  landingOrImpactDate: string;
  lastOperationalDate: string | null;
  landingMethod: string;
  landingOutcome: string;
  artifactType: ArtifactType;
  operationalStatus: OperationalStatus;
  physicalCondition: string;
  historicalEra: HistoricalEra;
  spacecraftMass: string | null;
  massMeasurementBasis: string | null;
  shortDescription: string;
  historicalSignificance: string;
  scientificContribution: string | null;
  missionObjectives: string[];
  technicalSpecs: DetailedTechnicalSpecs;
  historicalNarrative: string;
  scientificDiscoveries: string[];
  timeline: RelicTimelineEvent[];
  physicalFate: PhysicalFate;
  sources: StructuredSourceCitation[];
  relatedRelicSlugs: string[];
  primaryImage: string;
  imageAttribution: string;
  officialSourceUrl: string;
  additionalSourceUrls: string[];
  sourceVerificationDate: string;
  featured: boolean;
  detailedStoryAvailable: boolean;
}


