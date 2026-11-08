import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { RotateCw, BookOpen, Brain, CheckSquare, Sparkles } from 'lucide-react';
import { StudentRole } from '../../types';

export const RotatingRolesBar: React.FC = () => {
  const { selectedGroup, rotateRolesForGroup } = useApp();
  const [justRotated, setJustRotated] = useState(false);

  if (!selectedGroup) return null;

  const handleRotate = () => {
    rotateRolesForGroup(selectedGroup.id);
    setJustRotated(true);
    setTimeout(() => setJustRotated(false), 2000);
  };

  const getRoleIcon = (role: StudentRole) => {
    switch (role) {
      case 'Reader':
        return <BookOpen className="w-4 h-4 text-[#245B45]" />;
      case 'Solver':
        return <Brain className="w-4 h-4 text-[#C87552]" />;
      case 'Checker':
        return <CheckSquare className="w-4 h-4 text-emerald-700" />;
    }
  };

  const getRoleDescription = (role: StudentRole) => {
    switch (role) {
      case 'Reader':
        return 'Reads the question aloud clearly so everyone hears';
      case 'Solver':
        return 'Works on the problem with the team’s ideas';
      case 'Checker':
        return 'Verifies the steps and checks if all agree';
    }
  };

  return (
    <div className="bg-white rounded-3xl p-4 sm:p-5 border border-[#E5EFE7] shadow-soft mb-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        {/* Title and Turn Rule */}
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#245B45] bg-[#E5EFE7] px-2.5 py-0.5 rounded-md">
              Shared Tablet Roles
            </span>
            <span className="text-xs text-slate-500 font-medium">
              Turn {selectedGroup.currentRoleCycle + 1} of 3
            </span>
          </div>
          <h3 className="text-base font-extrabold text-slate-900 mt-0.5">
            Who Does What This Turn?
          </h3>
        </div>

        {/* Rotate Turn Button */}
        <button
          onClick={handleRotate}
          className={`px-4 py-2.5 rounded-2xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-xs ${
            justRotated
              ? 'bg-emerald-600 text-white scale-105'
              : 'bg-[#F8F7F2] hover:bg-[#E5EFE7] text-[#245B45] border border-[#245B45]/20 hover:scale-[1.02]'
          }`}
        >
          <RotateCw className={`w-4 h-4 ${justRotated ? 'animate-spin' : ''}`} />
          <span>{justRotated ? '🎉 Turn Rotated!' : 'Rotate Turns for Next Step'}</span>
        </button>
      </div>

      {/* The 3 Active Role Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
        {selectedGroup.members.slice(0, 3).map((member) => (
          <div
            key={member.id}
            className={`p-3.5 rounded-2xl border text-xs transition-all ${
              member.assignedRole === 'Reader'
                ? 'bg-[#E5EFE7]/50 border-[#245B45]/30'
                : member.assignedRole === 'Solver'
                ? 'bg-amber-50/70 border-amber-300'
                : 'bg-emerald-50/70 border-emerald-300'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="flex items-center gap-1.5 font-bold uppercase text-[10px] tracking-wider text-slate-700">
                {getRoleIcon(member.assignedRole)}
                <span>{member.assignedRole}</span>
              </span>

              <div
                className={`w-6 h-6 rounded-lg ${member.avatarBg} text-white font-extrabold flex items-center justify-center text-[10px]`}
              >
                {member.initials}
              </div>
            </div>

            <div className="font-extrabold text-slate-900 text-sm mb-1">{member.name}</div>
            <p className="text-[11px] text-slate-600 leading-snug">
              {getRoleDescription(member.assignedRole)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
