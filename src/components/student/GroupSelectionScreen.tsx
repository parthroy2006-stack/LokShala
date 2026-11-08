import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Users,
  Sparkles,
  ArrowRight,
  ShieldAlert,
  Star,
  CheckCircle2,
  Heart,
  Tablet,
} from 'lucide-react';

export const GroupSelectionScreen: React.FC = () => {
  const { groups, selectGroup, setCurrentView } = useApp();
  const [highlightedGroupId, setHighlightedGroupId] = useState<string>(groups[0]?.id || 'group-a');

  const handleStartSession = () => {
    if (highlightedGroupId) {
      selectGroup(highlightedGroupId);
    }
  };

  return (
    <div className="min-h-[calc(100vh-4.5rem)] bg-[#F8F7F2] py-8 sm:py-12 px-4 flex flex-col justify-between max-w-5xl mx-auto">
      <div>
        {/* Core Guiding Principle Banner */}
        <div className="bg-[#245B45] text-white p-4 sm:p-5 rounded-3xl shadow-lg border border-[#366E58] mb-8 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#E5EFE7] text-[#245B45] flex items-center justify-center shrink-0">
              <Tablet className="w-6 h-6" />
            </div>
            <div className="text-left">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#E5EFE7] block">
                Classroom Shared Device Rule
              </span>
              <p className="text-base sm:text-lg font-black tracking-tight text-white">
                "One device. Learn together. Take turns."
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-2xl border border-white/20 text-xs font-semibold">
            <span>🤝 3 Rotating Roles: Reader • Solver • Checker</span>
          </div>
        </div>

        {/* Heading & Subtitle */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Learning Together
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-2 font-medium">
            Choose your group to begin your village learning session.
          </p>
        </div>

        {/* The 3 Group Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {groups.map((group) => {
            const isSelected = highlightedGroupId === group.id;

            return (
              <div
                key={group.id}
                onClick={() => setHighlightedGroupId(group.id)}
                className={`relative rounded-3xl p-6 sm:p-8 cursor-pointer transition-all duration-300 flex flex-col justify-between border-3 text-left ${
                  isSelected
                    ? 'bg-white border-[#245B45] shadow-2xl scale-[1.03] ring-4 ring-[#245B45]/10'
                    : 'bg-white/80 border-[#E5EFE7] hover:border-slate-300 hover:bg-white shadow-card'
                }`}
              >
                {/* Active Selection Badge */}
                {isSelected && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#245B45] text-white text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#E5EFE7]" />
                    <span>Selected Pod</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-xl bg-[#E5EFE7] text-[#245B45]">
                      {group.grade}
                    </span>

                    <span className="flex items-center gap-1 text-xs font-bold text-[#C87552] bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                      <Star className="w-3.5 h-3.5 fill-[#C87552]" />
                      <span>{group.starsEarned} Stars</span>
                    </span>
                  </div>

                  <h2 className="text-2xl font-black text-slate-900">{group.name}</h2>
                  <p className="text-xs font-semibold text-slate-500 mb-6">
                    {group.leadVillage} Pod • 4 Students
                  </p>

                  {/* Student Avatars and Initials */}
                  <div className="space-y-3 mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Group Members & Today's Turn:
                    </span>
                    <div className="space-y-2">
                      {group.members.map((member) => (
                        <div
                          key={member.id}
                          className="flex items-center justify-between p-2 rounded-xl bg-[#F8F7F2] border border-slate-100"
                        >
                          <div className="flex items-center gap-2.5">
                            <div
                              className={`w-8 h-8 rounded-xl ${member.avatarBg} text-white font-black flex items-center justify-center text-xs shadow-xs`}
                            >
                              {member.initials}
                            </div>
                            <span className="font-bold text-slate-800 text-xs">
                              {member.name}
                            </span>
                          </div>

                          <span
                            className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                              member.assignedRole === 'Reader'
                                ? 'bg-[#E5EFE7] text-[#245B45]'
                                : member.assignedRole === 'Solver'
                                ? 'bg-amber-100 text-[#C87552]'
                                : 'bg-emerald-100 text-emerald-800'
                            }`}
                          >
                            {member.assignedRole}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-semibold">
                  <span>{group.completedLessonsCount} lessons completed</span>
                  <span className="text-[#245B45] font-bold">Select Group →</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Start Session CTA Button */}
      <div className="mt-10 max-w-md mx-auto w-full text-center">
        <button
          onClick={handleStartSession}
          className="w-full py-4 px-8 rounded-2xl bg-[#245B45] hover:bg-[#1A4333] text-white font-extrabold text-lg sm:text-xl shadow-xl shadow-[#245B45]/25 flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          <span>Start Group Session</span>
          <ArrowRight className="w-6 h-6" />
        </button>

        <p className="text-xs text-slate-500 mt-3 font-medium">
          Ready for interactive science, math, and village wisdom challenges!
        </p>
      </div>
    </div>
  );
};
