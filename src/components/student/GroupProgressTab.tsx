import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  Award,
  Star,
  Users,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Flame,
  Sparkles,
} from 'lucide-react';

export const GroupProgressTab: React.FC = () => {
  const { selectedGroup } = useApp();

  if (!selectedGroup) return null;

  const badges = [
    {
      title: 'Turn Taking Champions',
      description: 'Rotated Reader, Solver, and Checker roles fairly 20 times.',
      icon: '🤝',
      isUnlocked: true,
      color: 'bg-emerald-50 border-emerald-300 text-emerald-900',
    },
    {
      title: 'Terrace Soil Guardians',
      description: 'Mastered Himalayan Alder trees and nitrogen soil science.',
      icon: '🌱',
      isUnlocked: true,
      color: 'bg-[#E5EFE7] border-[#245B45]/30 text-[#245B45]',
    },
    {
      title: 'Spring Water Engineers',
      description: 'Solved gravity pressure calculations for village stream pipes.',
      icon: '💧',
      isUnlocked: true,
      color: 'bg-blue-50 border-blue-300 text-blue-900',
    },
    {
      title: 'Ethnomath Weavers',
      description: 'Calculated 60-degree angles in traditional bamboo basketry.',
      icon: '📐',
      isUnlocked: selectedGroup.completedLessonsCount >= 10,
      color: 'bg-amber-50 border-amber-300 text-amber-900',
    },
  ];

  return (
    <div className="space-y-8 animate-fade-in max-w-4xl mx-auto">
      {/* Overview Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5EFE7] shadow-soft flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5EFE7] text-[#245B45] text-xs font-bold mb-2">
            <Award className="w-3.5 h-3.5" />
            <span>Cooperative Group Achievements</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            {selectedGroup.name}'s Learning Journey
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            {selectedGroup.leadVillage} • {selectedGroup.grade} Pod
          </p>
        </div>

        {/* Big Star Badge */}
        <div className="bg-amber-50 border-2 border-amber-300 p-4 rounded-3xl flex items-center gap-3 shrink-0">
          <Star className="w-8 h-8 fill-[#C87552] text-[#C87552]" />
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 block">
              Total Village Stars
            </span>
            <span className="text-2xl font-black text-[#C87552]">
              {selectedGroup.starsEarned} Stars
            </span>
          </div>
        </div>
      </div>

      {/* 3 Metric Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-[#E5EFE7] shadow-soft">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase text-slate-400">Lessons Completed</span>
            <CheckCircle2 className="w-4 h-4 text-[#245B45]" />
          </div>
          <div className="text-2xl font-black text-slate-900">
            {selectedGroup.completedLessonsCount}
          </div>
          <span className="text-[11px] text-[#245B45] font-semibold mt-1 block">
            Covers Science, Math, & Community
          </span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-[#E5EFE7] shadow-soft">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase text-slate-400">Daily Learning Streak</span>
            <Flame className="w-4 h-4 text-[#C87552]" />
          </div>
          <div className="text-2xl font-black text-[#C87552]">
            {selectedGroup.streakDays} Days
          </div>
          <span className="text-[11px] text-slate-500 font-semibold mt-1 block">
            Consistent shared tablet practice
          </span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-[#E5EFE7] shadow-soft">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold uppercase text-slate-400">Total Group Tasks</span>
            <Users className="w-4 h-4 text-emerald-700" />
          </div>
          <div className="text-2xl font-black text-slate-900">
            {selectedGroup.totalActivitiesCount}
          </div>
          <span className="text-[11px] text-emerald-700 font-semibold mt-1 block">
            100% peer turn rotation
          </span>
        </div>
      </div>

      {/* Group Badges Grid */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5EFE7] shadow-soft space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Village Mastery Badges</h3>
            <p className="text-xs text-slate-500">
              Unlocked by working together on local community challenges
            </p>
          </div>
          <span className="text-xs font-bold text-[#245B45] bg-[#E5EFE7] px-3 py-1 rounded-full">
            {badges.filter((b) => b.isUnlocked).length} of {badges.length} Unlocked
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {badges.map((badge) => (
            <div
              key={badge.title}
              className={`p-5 rounded-2xl border-2 flex items-start gap-4 transition-all ${
                badge.isUnlocked
                  ? badge.color
                  : 'bg-slate-50 border-slate-200 text-slate-400 opacity-60'
              }`}
            >
              <div className="text-3xl shrink-0">{badge.icon}</div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-extrabold text-sm text-slate-900">{badge.title}</h4>
                  {badge.isUnlocked && (
                    <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-white/80 border border-current">
                      Unlocked
                    </span>
                  )}
                </div>
                <p className="text-xs mt-1 text-slate-600 leading-snug">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Member Roster Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5EFE7] shadow-soft">
        <h3 className="text-lg font-bold text-slate-900 mb-4">Pod Team Members</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {selectedGroup.members.map((member) => (
            <div
              key={member.id}
              className="p-3.5 rounded-2xl bg-[#F8F7F2] border border-slate-200 flex items-center justify-between text-xs"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-9 h-9 rounded-xl ${member.avatarBg} text-white font-black flex items-center justify-center text-xs shadow-xs`}
                >
                  {member.initials}
                </div>
                <div>
                  <span className="font-bold text-slate-900 block">{member.name}</span>
                  <span className="text-slate-500">Current Turn: {member.assignedRole}</span>
                </div>
              </div>

              <span className="text-emerald-700 font-bold bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                Active
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
