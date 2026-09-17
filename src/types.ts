export type Language = 'uz' | 'ru' | 'en';
export type ThemeMode = 'dark' | 'light';

export type ActivePage = 
  | 'home' 
  | 'tech' 
  | 'devices' 
  | 'programming' 
  | 'robotics' 
  | 'scratch'
  | 'ai' 
  | 'internet' 
  | 'security' 
  | 'news' 
  | 'test' 
  | 'about_tech' 
  | 'favorites' 
  | 'settings';

export interface LocalizedString {
  uz: string;
  ru: string;
  en: string;
}

export interface TechnologyItem {
  id: string;
  name: string;
  title?: string;
  image?: string;
  localizedName?: LocalizedString;
  category: 'hardware' | 'network' | 'future' | 'digital' | 'smart' | string;
  icon: string;
  shortDesc: LocalizedString;
  history: LocalizedString;
  howItWorks: LocalizedString;
  advantages: LocalizedString[];
  disadvantages: LocalizedString[];
  whereUsed: LocalizedString[];
  useCases?: LocalizedString[];
  pros?: LocalizedString[];
  cons?: LocalizedString[];
  funFacts: LocalizedString[];
  funFact?: LocalizedString;
  tags: string[];
}

export interface ComputerPart {
  id: string;
  name: string;
  icon: string;
  what: LocalizedString;
  definition?: LocalizedString;
  role: LocalizedString;
  howItWorks: LocalizedString;
  funFact: LocalizedString;
  specs: LocalizedString[];
  types?: LocalizedString[];
  category?: string;
  image?: string;
}

export type HardwareItem = ComputerPart;

export interface ProgrammingLanguage {
  id: string;
  name: string;
  icon: string;
  color: string;
  badge: string;
  purpose: LocalizedString;
  description?: LocalizedString;
  whereUsed: LocalizedString[];
  useCases?: LocalizedString[];
  codeSample: string;
  codeSnippet?: string;
  codeExplanation: LocalizedString;
  keyFeatures: LocalizedString[];
  pros?: LocalizedString[];
  cons?: LocalizedString[];
  year?: number | string;
  creator?: string;
}

export interface RoboticsComponent {
  id: string;
  name: string;
  icon: string;
  desc: LocalizedString;
  role: LocalizedString;
  exampleUse: LocalizedString;
}

export interface ArduinoProject {
  id: string;
  title: LocalizedString;
  difficulty: 'Oson' | 'O‘rtacha' | 'Murakkab';
  componentsNeeded: LocalizedString[];
  wiringDiagramDesc: LocalizedString;
  code: string;
  workingPrinciple: LocalizedString;
  stepByStep: LocalizedString[];
}

export interface AITopic {
  id: string;
  title: LocalizedString;
  icon: string;
  badge: string;
  shortDesc: LocalizedString;
  simpleExplanation: LocalizedString;
  examples: LocalizedString[];
  realWorldImpact: LocalizedString;
}

export interface InternetTopic {
  id: string;
  title: string;
  icon: string;
  desc: LocalizedString;
  howItWorks: LocalizedString;
  keyRole: LocalizedString;
  funFact: LocalizedString;
}

export interface SecurityTopic {
  id: string;
  title: LocalizedString;
  icon: string;
  dangerLevel: 'low' | 'medium' | 'high' | 'critical';
  desc: LocalizedString;
  educationalInfo: LocalizedString;
  tips: LocalizedString[];
}

export interface NewsItem {
  id: string;
  title: LocalizedString;
  image: string;
  date: string;
  summary: LocalizedString;
  content: LocalizedString;
  source: string;
  category: string;
  readTime: string;
}

export interface TestQuestion {
  id: string;
  category: string;
  question: LocalizedString;
  options: LocalizedString[];
  correctIndex: number;
  explanation: LocalizedString;
}

export interface UserProgress {
  studiedTopics: string[]; // item ids
  testsTaken: number;
  totalCorrectAnswers: number;
  totalAnsweredQuestions: number;
  favorites: string[];
}

export interface AppSettings {
  language: Language;
  theme: ThemeMode;
  notifications: boolean;
  animations: boolean;
  soundEnabled: boolean;
}

export type ScratchCategory = 
  | 'motion' 
  | 'looks' 
  | 'sound' 
  | 'events' 
  | 'control' 
  | 'sensing' 
  | 'pen' 
  | 'robotics';

export interface ScratchBlock {
  id: string;
  type: string;
  category: ScratchCategory;
  name: LocalizedString;
  color: string;
  args?: Record<string, any>;
  comment?: LocalizedString;
}

export interface ScratchTemplate {
  id: string;
  title: LocalizedString;
  mode: 'scratch' | 'arduino';
  desc: LocalizedString;
  icon: string;
  blocks: ScratchBlock[];
  arduinoCode?: string;
}

