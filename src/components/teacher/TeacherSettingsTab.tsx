import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  Settings,
  HardDrive,
  Wifi,
  WifiOff,
  Tablet,
  Laptop,
  RefreshCw,
  Database,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
} from 'lucide-react';

export const TeacherSettingsTab: React.FC = () => {
  const { isOffline, toggleOfflineMode, lessons, communityKnowledge } = useApp();

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E5EFE7] shadow-soft">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5EFE7] text-[#245B45] text-xs font-bold mb-2">
          <Settings className="w-3.5 h-3.5" />
          <span>Village Hub Administration</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          System Settings & Village Device Sync
        </h2>
        <p className="text-sm text-slate-600 mt-1 max-w-2xl">
          Manage local edge storage on Maya Devi's laptop and coordinate peer-to-peer Wi-Fi
          syncing with the 3 shared classroom tablets.
        </p>
      </div>

      {/* Device Hardware Topology */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5EFE7] shadow-soft">
        <h3 className="text-lg font-bold text-slate-900 mb-2">Classroom Hardware Deployment</h3>
        <p className="text-xs text-slate-500 mb-6">
          Village Cluster: 1 Primary Laptop (Teacher) + 3 Shared Tablets (Students)
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Laptop */}
          <div className="p-4 rounded-2xl bg-[#E5EFE7]/50 border-2 border-[#245B45] text-xs space-y-2">
            <div className="flex items-center justify-between">
              <Laptop className="w-5 h-5 text-[#245B45]" />
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#245B45] text-white">
                Master Hub
              </span>
            </div>
            <h4 className="font-bold text-slate-900 text-sm">Teacher Laptop</h4>
            <p className="text-slate-600">Standard Lenovo IdeaPad (School Headmaster)</p>
            <div className="pt-2 border-t border-[#245B45]/20 text-[11px] font-semibold text-[#245B45]">
              Hosts SQLite Database & Local Server
            </div>
          </div>

          {/* Tablet 1 */}
          <div className="p-4 rounded-2xl bg-[#F8F7F2] border border-slate-200 text-xs space-y-2">
            <div className="flex items-center justify-between">
              <Tablet className="w-5 h-5 text-[#C87552]" />
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                Synced
              </span>
            </div>
            <h4 className="font-bold text-slate-900 text-sm">Tablet 1 (Group A)</h4>
            <p className="text-slate-600">Class 5 • Shared by 4 students</p>
            <div className="pt-2 border-t border-slate-200 text-[11px] text-slate-500">
              Battery: 88% • Battery Saver On
            </div>
          </div>

          {/* Tablet 2 */}
          <div className="p-4 rounded-2xl bg-[#F8F7F2] border border-slate-200 text-xs space-y-2">
            <div className="flex items-center justify-between">
              <Tablet className="w-5 h-5 text-[#C87552]" />
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                Synced
              </span>
            </div>
            <h4 className="font-bold text-slate-900 text-sm">Tablet 2 (Group B)</h4>
            <p className="text-slate-600">Class 6 • Shared by 4 students</p>
            <div className="pt-2 border-t border-slate-200 text-[11px] text-slate-500">
              Battery: 74% • Battery Saver On
            </div>
          </div>

          {/* Tablet 3 */}
          <div className="p-4 rounded-2xl bg-[#F8F7F2] border border-slate-200 text-xs space-y-2">
            <div className="flex items-center justify-between">
              <Tablet className="w-5 h-5 text-[#C87552]" />
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                Synced
              </span>
            </div>
            <h4 className="font-bold text-slate-900 text-sm">Tablet 3 (Group C)</h4>
            <p className="text-slate-600">Class 7 • Shared by 4 students</p>
            <div className="pt-2 border-t border-slate-200 text-[11px] text-slate-500">
              Battery: 92% • Battery Saver On
            </div>
          </div>
        </div>
      </div>

      {/* Offline Mode Simulation Controls */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5EFE7] shadow-soft">
        <h3 className="text-lg font-bold text-slate-900 mb-2">Network Simulation Environment</h3>
        <p className="text-xs text-slate-500 mb-6">
          Toggle the offline state to test how LokShala behaves when hill weather cuts off external cell towers.
        </p>

        <div className="p-5 rounded-2xl bg-[#F8F7F2] border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                isOffline ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'
              }`}
            >
              {isOffline ? <WifiOff className="w-6 h-6" /> : <Wifi className="w-6 h-6" />}
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">
                Current State: {isOffline ? 'Simulated Offline Mode' : 'Online / Village Mesh Active'}
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                {isOffline
                  ? 'Lessons flagged as "Needs Download" cannot be launched; cached lessons run 100% locally.'
                  : 'All lessons, curriculum assets, and community knowledge can be downloaded and synced.'}
              </p>
            </div>
          </div>

          <button
            onClick={toggleOfflineMode}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm border transition-all ${
              isOffline
                ? 'bg-amber-500 hover:bg-amber-600 text-white border-amber-600'
                : 'bg-[#245B45] hover:bg-[#1A4333] text-white border-[#245B45]'
            }`}
          >
            {isOffline ? 'Reconnect Village Mesh (Go Online)' : 'Simulate Mountain Weather Offline'}
          </button>
        </div>
      </div>

      {/* Storage and Database Details */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5EFE7] shadow-soft">
        <div className="flex items-center gap-3 mb-4">
          <Database className="w-5 h-5 text-[#245B45]" />
          <h3 className="text-lg font-bold text-slate-900">Local Edge Storage Diagnostics</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-2xl bg-[#F8F7F2] border border-slate-200">
            <span className="text-slate-400 font-bold uppercase text-[10px] block">
              IndexedDB / LocalStorage
            </span>
            <span className="text-base font-bold text-slate-800 mt-1 block">
              14.2 MB used
            </span>
            <span className="text-[11px] text-slate-500">
              {lessons.length} lessons + {communityKnowledge.length} elder archives
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-[#F8F7F2] border border-slate-200">
            <span className="text-slate-400 font-bold uppercase text-[10px] block">
              Speech Synthesis Engine
            </span>
            <span className="text-base font-bold text-emerald-700 mt-1 block">
              Browser WebSpeech Active
            </span>
            <span className="text-[11px] text-slate-500">
              Generates audio hints without internet
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-[#F8F7F2] border border-slate-200">
            <span className="text-slate-400 font-bold uppercase text-[10px] block">
              Case Competition Deliverable
            </span>
            <span className="text-base font-bold text-[#C87552] mt-1 block">
              9–10 Slide PM Pitch
            </span>
            <span className="text-[11px] text-slate-500">
              Interactive Feasibility Demonstration
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
