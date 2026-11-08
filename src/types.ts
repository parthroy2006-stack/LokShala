export type SubjectType = 'Mathematics' | 'Science' | 'English' | 'Our Community';

export type KnowledgeCategory =
  | 'Traditional Mountain Farming'
  | 'Seasonal Crops'
  | 'Local Medicinal Plants'
  | 'Folk Stories'
  | 'Traditional Crafts'
  | 'Local Environmental Knowledge';

export type StudentRole = 'Reader' | 'Solver' | 'Checker';

export interface StudentMember {
  id: string;
  name: string;
  initials: string;
  avatarBg: string;
  assignedRole: StudentRole;
}

export interface StudentGroup {
  id: string;
  name: string;
  grade: string;
  leadVillage: string;
  members: StudentMember[];
  activeLessonId?: string;
  completedLessonsCount: number;
  totalActivitiesCount: number;
  starsEarned: number;
  streakDays: number;
  currentRoleCycle: number;
}

export interface CommunityKnowledgeItem {
  id: string;
  title: string;
  category: KnowledgeCategory;
  shortDescription: string;
  contributor: string;
  contributorRole: string; // e.g. "Elder / Terrace Farmer, Khonoma"
  relatedSubject: SubjectType;
  fullStory: string;
  seasonalContext: string;
  keyWisdom: string[];
  isDownloadedOffline: boolean;
  convertedToLesson: boolean;
  lessonId?: string;
  audioLanguageNote?: string;
}

export interface LessonStep {
  stepNumber: number;
  stepTitle: string;
  readingSnippet: string;
  roleInstructions: {
    reader: string;
    solver: string;
    checker: string;
  };
  groupQuestion: string;
  aiHints: {
    hint1: string;
    guidingQuestion: string;
    localConnection: string;
    discussionPrompt: string;
  };
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  villageInsight: string;
}

export interface Lesson {
  id: string;
  title: string;
  subject: SubjectType;
  grade: string;
  durationMinutes: number;
  summary: string;
  isVillageKnowledge: boolean;
  villageSource?: string;
  contributorName?: string;
  isDownloadedOffline: boolean;
  downloadSize: string;
  iconName: string;
  badgeText?: string;
  steps: LessonStep[];
  quiz: QuizQuestion[];
}

export interface StudentSupportAlert {
  id: string;
  studentName: string;
  groupName: string;
  grade: string;
  concern: string;
  observation: string;
  suggestedAction: string;
  severity: 'low' | 'medium' | 'high';
}

export interface ActivityMetric {
  day: string;
  activitiesCount: number;
  activeGroups: number;
}
