import React from 'react';
import { useApp, StudentTab } from '../../context/AppContext';
import { Home, Award, HardDrive, RefreshCw } from 'lucide-react';

export const StudentBottomNav: React.FC = () => {
  const { studentTab, setStudentTab, setCurrentView } = useApp();

  const navItems = [
    { id: 'home' as StudentTab, label: 'Home', icon: Home },
    { id: 'progress' as StudentTab, label: 'Group Progress', icon: Award },
    { id: 'saved' as StudentTab, label: 'Saved Lessons', icon: HardDrive },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t-2 border-[#E5EFE7] shadow-lg py-2 px-4 sm:px-8">
      <div className="max-w-xl mx-auto flex items-center justify-between gap-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = studentTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setStudentTab(item.id)}
              className={`flex-1 flex flex-col items-center justify-center py-2 px-3 rounded-2xl transition-all ${
                isActive
                  ? 'bg-[#245B45] text-white shadow-md scale-105'
                  : 'text-slate-600 hover:bg-[#F8F7F2] hover:text-[#245B45]'
              }`}
            >
              <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-[11px] sm:text-xs font-extrabold mt-1">
                {item.label}
              </span>
            </button>
          );
        })}

        {/* Switch Group Button */}
        <button
          onClick={() => setCurrentView('student-group-select')}
          className="flex-1 flex flex-col items-center justify-center py-2 px-3 rounded-2xl text-slate-600 hover:bg-[#F8F7F2] hover:text-[#C87552] transition-all"
        >
          <RefreshCw className="w-5 h-5 sm:w-6 sm:h-6 text-[#C87552]" />
          <span className="text-[11px] sm:text-xs font-extrabold mt-1 text-[#C87552]">
            Switch Group
          </span>
        </button>
      </div>
    </nav>
  );
};
