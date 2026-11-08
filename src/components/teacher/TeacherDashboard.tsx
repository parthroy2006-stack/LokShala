import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { TeacherSidebar } from './TeacherSidebar';
import { TeacherOverviewTab } from './TeacherOverviewTab';
import { TeacherStudentsTab } from './TeacherStudentsTab';
import { TeacherResourcesTab } from './TeacherResourcesTab';
import { TeacherCommunityTab } from './TeacherCommunityTab';
import { TeacherAILessonCreatorTab } from './TeacherAILessonCreatorTab';
import { TeacherAssessmentsTab } from './TeacherAssessmentsTab';
import { TeacherSettingsTab } from './TeacherSettingsTab';
import { AddCommunityKnowledgeModal } from './AddCommunityKnowledgeModal';
import { GenerateQuizModal } from './GenerateQuizModal';

export const TeacherDashboard: React.FC = () => {
  const { teacherTab, setTeacherTab } = useApp();
  const [isAddCommunityOpen, setIsAddCommunityOpen] = useState(false);
  const [isGenerateQuizOpen, setIsGenerateQuizOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row min-h-[calc(100vh-4.5rem)] bg-[#F8F7F2]">
      {/* Teacher Navigation Sidebar */}
      <TeacherSidebar />

      {/* Main Content Area */}
      <main className="flex-1 p-4 sm:p-8 max-w-7xl mx-auto w-full overflow-y-auto">
        {teacherTab === 'overview' && (
          <TeacherOverviewTab
            onOpenCreateLesson={() => setTeacherTab('creator')}
            onOpenGenerateQuiz={() => setIsGenerateQuizOpen(true)}
            onOpenAddCommunity={() => setIsAddCommunityOpen(true)}
          />
        )}

        {teacherTab === 'students' && <TeacherStudentsTab />}

        {teacherTab === 'resources' && <TeacherResourcesTab />}

        {teacherTab === 'community' && (
          <TeacherCommunityTab onOpenAddModal={() => setIsAddCommunityOpen(true)} />
        )}

        {teacherTab === 'creator' && <TeacherAILessonCreatorTab />}

        {teacherTab === 'assessments' && <TeacherAssessmentsTab />}

        {teacherTab === 'settings' && <TeacherSettingsTab />}
      </main>

      {/* Modals */}
      <AddCommunityKnowledgeModal
        isOpen={isAddCommunityOpen}
        onClose={() => setIsAddCommunityOpen(false)}
      />

      <GenerateQuizModal
        isOpen={isGenerateQuizOpen}
        onClose={() => setIsGenerateQuizOpen(false)}
      />
    </div>
  );
};
