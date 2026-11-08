import React from 'react';
import { useApp } from '../../context/AppContext';
import { StudentHomeTab } from './StudentHomeTab';
import { GroupProgressTab } from './GroupProgressTab';
import { SavedLessonsTab } from './SavedLessonsTab';
import { LessonViewer } from './LessonViewer';
import { StudentBottomNav } from './StudentBottomNav';
import { GroupSelectionScreen } from './GroupSelectionScreen';

export const StudentLearningDashboard: React.FC = () => {
  const { studentTab, activeLesson, selectedGroup } = useApp();

  if (!selectedGroup) {
    return <GroupSelectionScreen />;
  }

  // If a lesson is actively open, render the step-by-step LessonViewer
  if (activeLesson) {
    return (
      <div className="p-4 sm:p-6 min-h-[calc(100vh-4.5rem)] bg-[#F8F7F2]">
        <LessonViewer />
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-4.5rem)] bg-[#F8F7F2] pb-24 p-4 sm:p-6 max-w-5xl mx-auto">
      {studentTab === 'home' && <StudentHomeTab />}
      {studentTab === 'progress' && <GroupProgressTab />}
      {studentTab === 'saved' && <SavedLessonsTab />}

      {/* Persistent Bottom Navigation for Shared Device */}
      <StudentBottomNav />
    </div>
  );
};
