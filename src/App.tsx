import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/common/Header';
import { LandingPage } from './components/landing/LandingPage';
import { TeacherDashboard } from './components/teacher/TeacherDashboard';
import { GroupSelectionScreen } from './components/student/GroupSelectionScreen';
import { StudentLearningDashboard } from './components/student/StudentLearningDashboard';

const MainRouter: React.FC = () => {
  const { currentView } = useApp();

  return (
    <div className="min-h-screen bg-[#F8F7F2] flex flex-col justify-between selection:bg-[#E5EFE7] selection:text-[#245B45]">
      <div>
        <Header />

        {currentView === 'landing' && <LandingPage />}
        {currentView === 'teacher' && <TeacherDashboard />}
        {currentView === 'student-group-select' && <GroupSelectionScreen />}
        {currentView === 'student-learning' && <StudentLearningDashboard />}
      </div>

      {/* Global PM Competition Footer */}
      <footer className="border-t border-[#E5EFE7] bg-white py-6 px-4 text-center text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-[#245B45]">LokShala Prototype</span>
            <span>•</span>
            <span>Where the community becomes the classroom</span>
          </div>

          <div className="flex items-center gap-3 text-slate-400">
            <span>Prepared for Product Management Case Competition</span>
            <span>•</span>
            <span className="text-[#C87552] font-semibold">9–10 Slide Pitch Deliverable</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export function App() {
  return (
    <AppProvider>
      <MainRouter />
    </AppProvider>
  );
}

export default App;
