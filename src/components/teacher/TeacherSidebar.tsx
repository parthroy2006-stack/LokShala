import React from 'react';
import { useApp, TeacherTab } from '../../context/AppContext';
import {
  LayoutDashboard,
  Users,
  BookOpen,
  HeartHandshake,
  Sparkles,
  Award,
  Settings,
  HardDrive,
  Wifi,
  WifiOff,
  LogOut,
  ChevronRight,
} from 'lucide-react';

interface SidebarItem {
  id: TeacherTab;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
}

export const TeacherSidebar: React.FC = () => {
  const { teacherTab, setTeacherTab, isOffline, setCurrentView, supportAlerts, communityKnowledge } =
    useApp();

  const navItems: SidebarItem[] = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    {
      id: 'students',
      label: 'My Students',
      icon: Users,
      badge: supportAlerts.length > 0 ? `${supportAlerts.length}` : undefined,
    },
    { id: 'resources', label: 'Learning Resources', icon: BookOpen },
    {
      id: 'community',
      label: 'Community Knowledge',
      icon: HeartHandshake,
      badge: `${communityKnowledge.length}`,
    },
    { id: 'creator', label: 'AI Lesson Creator', icon: Sparkles },
    { id: 'assessments', label: 'Assessments', icon: Award },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <aside className="w-64 bg-white border-r border-[#E5EFE7] flex flex-col justify-between shrink-0 min-h-[calc(100vh-4.5rem)]">
      {/* Teacher Profile Card */}
      <div className="p-5 border-b border-[#E5EFE7]">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-[#245B45] text-white flex items-center justify-center font-bold text-lg shadow-md shadow-[#245B45]/20">
            MD
          </div>
          <div className="overflow-hidden">
            <h3 className="font-bold text-slate-900 text-sm truncate">Maya Devi</h3>
            <p className="text-xs text-slate-500 truncate">Lead Village Educator</p>
            <div className="flex items-center gap-1.5 mt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className="text-[10px] text-slate-600 font-medium">Khonoma Govt Primary</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation List */}
      <nav className="p-3 space-y-1 flex-1 overflow-y-auto">
        <div className="px-3 py-2 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
          Classroom Hub
        </div>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = teacherTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setTeacherTab(item.id)}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                isActive
                  ? 'bg-[#245B45] text-white shadow-sm'
                  : 'text-slate-600 hover:bg-[#F8F7F2] hover:text-[#245B45]'
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon
                  className={`w-4 h-4 ${
                    isActive ? 'text-[#E5EFE7]' : 'text-slate-400 group-hover:text-[#245B45]'
                  }`}
                />
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    isActive
                      ? 'bg-[#E5EFE7] text-[#245B45]'
                      : 'bg-amber-100 text-amber-900'
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Device & Sync Status Footer */}
      <div className="p-4 border-t border-[#E5EFE7] bg-[#F8F7F2]/60">
        <div className="p-3 rounded-xl bg-white border border-[#E5EFE7] text-xs space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-slate-500 font-medium flex items-center gap-1.5">
              <HardDrive className="w-3.5 h-3.5 text-[#245B45]" />
              Laptop Storage
            </span>
            <span className="font-bold text-[#245B45]">14.2 MB / 32 GB</span>
          </div>

          <div className="flex items-center justify-between pt-1 border-t border-slate-100">
            <span className="text-slate-500 font-medium flex items-center gap-1.5">
              {isOffline ? (
                <WifiOff className="w-3.5 h-3.5 text-amber-600" />
              ) : (
                <Wifi className="w-3.5 h-3.5 text-emerald-600" />
              )}
              Mesh Status
            </span>
            <span
              className={`font-semibold ${
                isOffline ? 'text-amber-700' : 'text-emerald-700'
              }`}
            >
              {isOffline ? 'Offline Cache' : 'Local Wi-Fi Hub'}
            </span>
          </div>
        </div>

        <button
          onClick={() => setCurrentView('landing')}
          className="mt-3 w-full py-2 px-3 rounded-lg border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-white text-xs font-medium flex items-center justify-center gap-1.5 transition-colors"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span>Exit to Main Hub</span>
        </button>
      </div>
    </aside>
  );
};
