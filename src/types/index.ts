export type ThemeMode = 'dark' | 'light';

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  type?: string;
  description: string[];
  techStack: string[];
  isCurrent?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  period: string;
  description: string;
  highlights: string[];
  techStack: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  featured: boolean;
  badge?: string;
  imageBgColor: string;
  mockData?: {
    type: 'map' | 'ai' | 'dashboard';
    title: string;
    metrics?: { label: string; value: string }[];
  };
}

export interface SkillCategory {
  category: string;
  skills: { name: string; icon?: string; level?: string; badge?: string }[];
}

export interface AchievementItem {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  description: string[];
  badge: string;
  iconName: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field: string;
  location: string;
  period: string;
  scoreLabel: string;
  scoreValue: string;
  highlights?: string[];
}
