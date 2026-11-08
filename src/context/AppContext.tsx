import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  StudentGroup,
  CommunityKnowledgeItem,
  Lesson,
  StudentSupportAlert,
  StudentRole,
} from '../types';
import {
  INITIAL_GROUPS,
  COMMUNITY_KNOWLEDGE_ENTRIES,
  LESSONS,
  STUDENT_SUPPORT_ALERTS,
} from '../data/sampleData';

export type AppView = 'landing' | 'teacher' | 'student-group-select' | 'student-learning';
export type TeacherTab =
  | 'overview'
  | 'students'
  | 'resources'
  | 'community'
  | 'creator'
  | 'assessments'
  | 'settings';
export type StudentTab = 'home' | 'progress' | 'saved' | 'switch-group';

interface AppContextType {
  // Navigation
  currentView: AppView;
  setCurrentView: (view: AppView) => void;
  teacherTab: TeacherTab;
  setTeacherTab: (tab: TeacherTab) => void;
  studentTab: StudentTab;
  setStudentTab: (tab: StudentTab) => void;

  // Offline Simulation
  isOffline: boolean;
  toggleOfflineMode: () => void;
  setOfflineExplicit: (val: boolean) => void;
  offlineNotification: string | null;
  clearOfflineNotification: () => void;

  // Groups
  groups: StudentGroup[];
  selectedGroupId: string | null;
  selectedGroup: StudentGroup | undefined;
  selectGroup: (groupId: string) => void;
  rotateRolesForGroup: (groupId: string) => void;

  // Lessons
  lessons: Lesson[];
  activeLessonId: string | null;
  activeLesson: Lesson | undefined;
  startLesson: (lessonId: string) => void;
  closeActiveLesson: () => void;
  toggleLessonDownload: (lessonId: string) => void;
  createCustomLesson: (newLesson: Partial<Lesson>) => Lesson;

  // Community Knowledge
  communityKnowledge: CommunityKnowledgeItem[];
  addCommunityKnowledge: (item: Omit<CommunityKnowledgeItem, 'id' | 'isDownloadedOffline' | 'convertedToLesson'>) => void;
  convertCommunityToLesson: (knowledgeId: string) => Lesson | null;

  // Alerts & Support
  supportAlerts: StudentSupportAlert[];
  resolveAlert: (alertId: string) => void;

  // Group Progress Actions
  awardGroupStars: (groupId: string, stars: number) => void;
  markLessonComplete: (groupId: string, lessonId: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY_OFFLINE = 'lokshala_offline_sim';
const LOCAL_STORAGE_KEY_GROUPS = 'lokshala_groups';
const LOCAL_STORAGE_KEY_LESSONS = 'lokshala_lessons';
const LOCAL_STORAGE_KEY_COMMUNITY = 'lokshala_community';

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentView, setCurrentView] = useState<AppView>('landing');
  const [teacherTab, setTeacherTab] = useState<TeacherTab>('overview');
  const [studentTab, setStudentTab] = useState<StudentTab>('home');

  // Offline Simulation State
  const [isOffline, setIsOffline] = useState<boolean>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY_OFFLINE);
    return saved ? JSON.parse(saved) : false;
  });

  const [offlineNotification, setOfflineNotification] = useState<string | null>(null);

  // Groups
  const [groups, setGroups] = useState<StudentGroup[]>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY_GROUPS);
    return saved ? JSON.parse(saved) : INITIAL_GROUPS;
  });

  const [selectedGroupId, setSelectedGroupId] = useState<string | null>(null);

  // Lessons
  const [lessons, setLessons] = useState<Lesson[]>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY_LESSONS);
    return saved ? JSON.parse(saved) : LESSONS;
  });

  const [activeLessonId, setActiveLessonId] = useState<string | null>(null);

  // Community Knowledge
  const [communityKnowledge, setCommunityKnowledge] = useState<CommunityKnowledgeItem[]>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY_COMMUNITY);
    return saved ? JSON.parse(saved) : COMMUNITY_KNOWLEDGE_ENTRIES;
  });

  // Support Alerts
  const [supportAlerts, setSupportAlerts] = useState<StudentSupportAlert[]>(STUDENT_SUPPORT_ALERTS);

  // Sync to local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_OFFLINE, JSON.stringify(isOffline));
  }, [isOffline]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_GROUPS, JSON.stringify(groups));
  }, [groups]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_LESSONS, JSON.stringify(lessons));
  }, [lessons]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_COMMUNITY, JSON.stringify(communityKnowledge));
  }, [communityKnowledge]);

  const toggleOfflineMode = () => {
    setIsOffline((prev) => {
      const next = !prev;
      setOfflineNotification(
        next
          ? 'Switched to Simulated Offline Mode: Using local edge cache on this shared device.'
          : 'Back Online: Syncing village progress with central hub mesh.'
      );
      return next;
    });
  };

  const setOfflineExplicit = (val: boolean) => {
    setIsOffline(val);
    setOfflineNotification(
      val
        ? 'Switched to Simulated Offline Mode: Using local edge cache.'
        : 'Back Online: Cloud & village hub connected.'
    );
  };

  const clearOfflineNotification = () => setOfflineNotification(null);

  const selectedGroup = groups.find((g) => g.id === selectedGroupId);
  const activeLesson = lessons.find((l) => l.id === activeLessonId);

  const selectGroup = (groupId: string) => {
    setSelectedGroupId(groupId);
    setStudentTab('home');
    setCurrentView('student-learning');
  };

  const rotateRolesForGroup = (groupId: string) => {
    const roleCycleOrder: StudentRole[] = ['Reader', 'Solver', 'Checker'];
    setGroups((prev) =>
      prev.map((g) => {
        if (g.id !== groupId) return g;
        const newCycle = (g.currentRoleCycle + 1) % 3;
        const updatedMembers = g.members.map((member, idx) => {
          const newRoleIndex = (idx + newCycle) % roleCycleOrder.length;
          return {
            ...member,
            assignedRole: roleCycleOrder[newRoleIndex],
          };
        });
        return {
          ...g,
          currentRoleCycle: newCycle,
          members: updatedMembers,
        };
      })
    );
  };

  const startLesson = (lessonId: string) => {
    const target = lessons.find((l) => l.id === lessonId);
    if (!target) return;

    if (isOffline && !target.isDownloadedOffline) {
      setOfflineNotification(
        `Cannot load "${target.title}" in Offline Mode. It has not been cached to this device yet.`
      );
      return;
    }
    setActiveLessonId(lessonId);
  };

  const closeActiveLesson = () => {
    setActiveLessonId(null);
  };

  const toggleLessonDownload = (lessonId: string) => {
    setLessons((prev) =>
      prev.map((l) => {
        if (l.id !== lessonId) return l;
        const nextStatus = !l.isDownloadedOffline;
        setOfflineNotification(
          nextStatus
            ? `Downloaded "${l.title}" for offline village learning.`
            : `Removed "${l.title}" from local device cache.`
        );
        return {
          ...l,
          isDownloadedOffline: nextStatus,
          downloadSize: nextStatus ? l.downloadSize : 'Needs Download',
        };
      })
    );
  };

  const createCustomLesson = (newLessonData: Partial<Lesson>): Lesson => {
    const id = `lesson-${Date.now()}`;
    const newLesson: Lesson = {
      id,
      title: newLessonData.title || 'Untitled Village Lesson',
      subject: newLessonData.subject || 'Our Community',
      grade: newLessonData.grade || 'Class 5–7',
      durationMinutes: newLessonData.durationMinutes || 20,
      summary: newLessonData.summary || 'Created using LokShala AI Lesson Creator.',
      isVillageKnowledge: newLessonData.isVillageKnowledge ?? true,
      villageSource: newLessonData.villageSource || 'Community Oral Archive',
      contributorName: newLessonData.contributorName || 'Village Elder',
      isDownloadedOffline: true, // immediately available offline
      downloadSize: '1.2 MB (Offline Ready)',
      iconName: newLessonData.iconName || 'Lightbulb',
      badgeText: newLessonData.badgeText || 'AI & Elder Crafted',
      steps: newLessonData.steps || [
        {
          stepNumber: 1,
          stepTitle: 'Community Observation & Question',
          readingSnippet: 'Every mountain morning brings natural clues about our environment. Together as a group, observe your surroundings and discuss what you see.',
          roleInstructions: {
            reader: 'Read the prompt clearly so everyone can hear.',
            solver: 'Share an observation from your own home or family fields.',
            checker: 'Summarize what everyone shared and agree on one key insight.',
          },
          groupQuestion: 'What local pattern does your group notice in this season?',
          aiHints: {
            hint1: 'Look at the color of the tree leaves and the morning mist on the hillside.',
            guidingQuestion: 'Why does this pattern happen at this specific time of year?',
            localConnection: 'Our village elders say changes in the wind tell us what crops to prepare.',
            discussionPrompt: 'Take turns: each member shares one thing they learned from their grandparents about this topic.',
          },
        },
      ],
      quiz: newLessonData.quiz || [
        {
          id: `q-${Date.now()}-1`,
          question: `What makes learning from our village special?`,
          options: [
            'It connects school subjects to real life in our hills.',
            'It can only be learned on the internet.',
            'It replaces all math and science.',
            'It is forgotten quickly.'
          ],
          correctIndex: 0,
          explanation: 'Village wisdom makes formal education deeply relevant and practical for mountain youth.',
          villageInsight: 'When the community becomes the classroom, every elder becomes a teacher.'
        }
      ],
    };

    setLessons((prev) => [newLesson, ...prev]);
    return newLesson;
  };

  const addCommunityKnowledge = (
    item: Omit<CommunityKnowledgeItem, 'id' | 'isDownloadedOffline' | 'convertedToLesson'>
  ) => {
    const newItem: CommunityKnowledgeItem = {
      ...item,
      id: `ck-${Date.now()}`,
      isDownloadedOffline: true,
      convertedToLesson: false,
    };
    setCommunityKnowledge((prev) => [newItem, ...prev]);
    setOfflineNotification(`Added community contribution from "${newItem.contributor}" to local village archive.`);
  };

  const convertCommunityToLesson = (knowledgeId: string): Lesson | null => {
    const item = communityKnowledge.find((k) => k.id === knowledgeId);
    if (!item) return null;

    // Create lesson from item
    const created = createCustomLesson({
      title: `${item.title}`,
      subject: item.relatedSubject,
      grade: 'Class 5–7',
      durationMinutes: 20,
      summary: item.shortDescription,
      isVillageKnowledge: true,
      villageSource: `${item.category} • Contributed by ${item.contributor}`,
      contributorName: item.contributor,
      badgeText: `Derived from Community Knowledge`,
      steps: [
        {
          stepNumber: 1,
          stepTitle: 'The Village Knowledge Story',
          readingSnippet: item.fullStory,
          roleInstructions: {
            reader: `Read the story shared by ${item.contributor} aloud to your group.`,
            solver: 'Identify the main wisdom or scientific principle behind this story.',
            checker: 'Confirm if all group members can repeat the main moral or practical takeaway.',
          },
          groupQuestion: `How does ${item.contributor}'s wisdom help our village community?`,
          aiHints: {
            hint1: `Notice how ${item.keyWisdom[0] || 'our elders observe nature closely'}.`,
            guidingQuestion: `Why is this oral wisdom valuable even today?`,
            localConnection: `Seasonal context: ${item.seasonalContext}.`,
            discussionPrompt: 'Take turns: Reader explains the problem; Solver connects it to science/math; Checker asks how to apply it at home.',
          },
        },
      ],
      quiz: [
        {
          id: `q-ck-${Date.now()}`,
          question: `According to ${item.contributor}, what is the main lesson?`,
          options: [
            item.keyWisdom[0] || 'Protecting community resources sustainably.',
            'Ignoring traditional practices.',
            'Only buying things from distant cities.',
            'Working alone instead of cooperating.'
          ],
          correctIndex: 0,
          explanation: item.keyWisdom[0] || 'Community knowledge holds ecological and mathematical truths.',
          villageInsight: `Shared by ${item.contributorRole}.`
        }
      ]
    });

    // Mark as converted
    setCommunityKnowledge((prev) =>
      prev.map((k) =>
        k.id === knowledgeId ? { ...k, convertedToLesson: true, lessonId: created.id } : k
      )
    );

    setOfflineNotification(
      `Successfully converted "${item.title}" into a structured LokShala classroom lesson!`
    );

    return created;
  };

  const resolveAlert = (alertId: string) => {
    setSupportAlerts((prev) => prev.filter((a) => a.id !== alertId));
  };

  const awardGroupStars = (groupId: string, stars: number) => {
    setGroups((prev) =>
      prev.map((g) => (g.id === groupId ? { ...g, starsEarned: g.starsEarned + stars } : g))
    );
  };

  const markLessonComplete = (groupId: string, lessonId: string) => {
    setGroups((prev) =>
      prev.map((g) => {
        if (g.id !== groupId) return g;
        return {
          ...g,
          completedLessonsCount: g.completedLessonsCount + 1,
          totalActivitiesCount: g.totalActivitiesCount + 1,
          starsEarned: g.starsEarned + 10,
        };
      })
    );
  };

  return (
    <AppContext.Provider
      value={{
        currentView,
        setCurrentView,
        teacherTab,
        setTeacherTab,
        studentTab,
        setStudentTab,
        isOffline,
        toggleOfflineMode,
        setOfflineExplicit,
        offlineNotification,
        clearOfflineNotification,
        groups,
        selectedGroupId,
        selectedGroup,
        selectGroup,
        rotateRolesForGroup,
        lessons,
        activeLessonId,
        activeLesson,
        startLesson,
        closeActiveLesson,
        toggleLessonDownload,
        createCustomLesson,
        communityKnowledge,
        addCommunityKnowledge,
        convertCommunityToLesson,
        supportAlerts,
        resolveAlert,
        awardGroupStars,
        markLessonComplete,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
