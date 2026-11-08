import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  Wifi,
  WifiOff,
  GraduationCap,
  Users,
  Compass,
  Home,
  CheckCircle2,
  X,
  Sparkles,
  Layers,
} from 'lucide-react';

export const Header: React.FC = () => {
  const {
    currentView,
    setCurrentView,
    isOffline,
    toggleOfflineMode,
    offlineNotification,
    clearOfflineNotification,
    selectedGroup,
  } = useApp();

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E5EFE7] shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 py-3">
            {/* Logo and Brand */}
            <div
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => setCurrentView('landing')}
            >
              <div className="w-11 h-11 rounded-2xl bg-[#245B45] text-white flex items-center justify-center shadow-md shadow-[#245B45]/20 group-hover:scale-105 transition-transform">
                <svg
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 3L2 9l10 6 10-6-10-6zM3.5 13.5L12 18.5l8.5-5M3.5 17.5L12 22.5l8.5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  <circle cx="12" cy="9" r="2.5" fill="#E5EFE7" />
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold tracking-tight text-[#245B45]">
                    LokShala
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#E5EFE7] text-[#245B45] border border-[#245B45]/20">
                    Northeast India
                  </span>
                </div>
                <p className="text-xs text-slate-500 font-medium">
                  Where the community becomes the classroom
                </p>
              </div>
            </div>

            {/* Middle Mode Switchers */}
            <div className="hidden md:flex items-center bg-[#F8F7F2] p-1.5 rounded-xl border border-[#E5EFE7] text-sm font-medium">
              <button
                onClick={() => setCurrentView('landing')}
                className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
                  currentView === 'landing'
                    ? 'bg-white text-[#245B45] shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Home className="w-4 h-4" />
                <span>Overview</span>
              </button>

              <button
                onClick={() => setCurrentView('teacher')}
                className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
                  currentView === 'teacher'
                    ? 'bg-[#245B45] text-white shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-[#245B45]'
                }`}
              >
                <GraduationCap className="w-4 h-4" />
                <span>Teacher Dashboard</span>
              </button>

              <button
                onClick={() => {
                  if (selectedGroup) {
                    setCurrentView('student-learning');
                  } else {
                    setCurrentView('student-group-select');
                  }
                }}
                className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
                  currentView === 'student-group-select' || currentView === 'student-learning'
                    ? 'bg-[#C87552] text-white shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-[#C87552]'
                }`}
              >
                <Users className="w-4 h-4" />
                <span>
                  {selectedGroup ? `Student (${selectedGroup.name})` : 'Student Learning'}
                </span>
              </button>
            </div>

            {/* Offline Simulator Switch */}
            <div className="flex items-center gap-3">
              <div
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all ${
                  isOffline
                    ? 'bg-amber-50 border-amber-300 text-amber-900'
                    : 'bg-[#E5EFE7] border-[#245B45]/20 text-[#245B45]'
                }`}
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span
                    className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                      isOffline ? 'bg-amber-400' : 'bg-emerald-500'
                    }`}
                  ></span>
                  <span
                    className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
                      isOffline ? 'bg-amber-500' : 'bg-[#245B45]'
                    }`}
                  ></span>
                </span>

                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold leading-none flex items-center gap-1">
                    {isOffline ? (
                      <>
                        <WifiOff className="w-3.5 h-3.5 text-amber-600" />
                        <span>Simulated Offline</span>
                      </>
                    ) : (
                      <>
                        <Wifi className="w-3.5 h-3.5 text-[#245B45]" />
                        <span>Village Mesh Online</span>
                      </>
                    )}
                  </span>
                  <span className="text-[10px] text-slate-500 leading-tight">
                    {isOffline ? 'Local storage active' : 'Connected to server'}
                  </span>
                </div>

                <button
                  onClick={toggleOfflineMode}
                  title="Toggle between Simulated Offline and Online modes"
                  className={`ml-1 text-xs px-2 py-0.5 rounded-md font-semibold transition-all border ${
                    isOffline
                      ? 'bg-amber-200 hover:bg-amber-300 text-amber-900 border-amber-400'
                      : 'bg-white hover:bg-slate-100 text-[#245B45] border-[#245B45]/30'
                  }`}
                >
                  {isOffline ? 'Go Online' : 'Simulate Offline'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Floating Offline Notification Toast */}
      {offlineNotification && (
        <div className="max-w-xl mx-auto px-4 mt-3">
          <div className="bg-[#245B45] text-white px-4 py-2.5 rounded-xl shadow-lg flex items-center justify-between text-xs sm:text-sm animate-fade-in border border-[#E5EFE7]/20">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#E5EFE7] shrink-0" />
              <span>{offlineNotification}</span>
            </div>
            <button
              onClick={clearOfflineNotification}
              className="p-1 hover:bg-white/20 rounded-md transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
