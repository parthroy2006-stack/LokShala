import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  Users,
  RotateCw,
  AlertTriangle,
  CheckCircle2,
  Sparkles,
  Shield,
  Star,
  Award,
} from 'lucide-react';

export const TeacherStudentsTab: React.FC = () => {
  const { groups, rotateRolesForGroup, supportAlerts, resolveAlert } = useApp();

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E5EFE7] shadow-soft flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5EFE7] text-[#245B45] text-xs font-bold mb-2">
            <Users className="w-3.5 h-3.5" />
            <span>Shared-Device Learning Cohorts</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Classroom Groups & Student Roster
          </h2>
          <p className="text-sm text-slate-600 mt-1 max-w-2xl">
            Because devices are shared, students are organized into peer learning pods.
            LokShala rotates roles (Reader, Solver, Checker) daily to ensure equitable participation.
          </p>
        </div>

        <div className="bg-[#F8F7F2] px-4 py-2.5 rounded-2xl border border-slate-200 text-xs text-slate-600">
          <span className="font-bold text-[#245B45]">Active Tablet Pods:</span> 3 Groups
          (12 active students on shift)
        </div>
      </div>

      {/* Group Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {groups.map((group) => (
          <div
            key={group.id}
            className="bg-white rounded-3xl border border-[#E5EFE7] shadow-soft p-6 flex flex-col justify-between"
          >
            <div>
              {/* Group Title and Grade */}
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{group.name}</h3>
                  <span className="text-xs font-medium text-slate-500">
                    {group.grade} • {group.leadVillage}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-xs font-bold text-[#C87552] bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                  <Star className="w-3.5 h-3.5 fill-[#C87552]" />
                  <span>{group.starsEarned}</span>
                </div>
              </div>

              {/* Progress Summary */}
              <div className="grid grid-cols-2 gap-2 my-4 p-3 rounded-2xl bg-[#F8F7F2] border border-slate-100 text-xs">
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">
                    Completed Lessons
                  </span>
                  <span className="text-base font-black text-slate-800">
                    {group.completedLessonsCount}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">
                    Activities Done
                  </span>
                  <span className="text-base font-black text-[#245B45]">
                    {group.totalActivitiesCount}
                  </span>
                </div>
              </div>

              {/* Members and Current Roles */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-400">
                  <span>Student Members</span>
                  <span>Active Role</span>
                </div>

                {group.members.map((member) => (
                  <div
                    key={member.id}
                    className="p-2.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between gap-3 text-xs"
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-7 h-7 rounded-lg ${member.avatarBg} text-white font-bold flex items-center justify-center text-[10px] shadow-xs`}
                      >
                        {member.initials}
                      </div>
                      <span className="font-semibold text-slate-800">{member.name}</span>
                    </div>

                    <span
                      className={`px-2 py-0.5 rounded-md font-bold text-[10px] ${
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

            {/* Quick Rotate Roles Button */}
            <div className="mt-6 pt-4 border-t border-slate-100">
              <button
                onClick={() => rotateRolesForGroup(group.id)}
                className="w-full py-2 px-3 rounded-xl bg-[#F8F7F2] hover:bg-[#E5EFE7] text-[#245B45] text-xs font-semibold flex items-center justify-center gap-2 transition-colors border border-slate-200"
              >
                <RotateCw className="w-3.5 h-3.5" />
                <span>Rotate Group Roles (Turn Cycle)</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Student Support Interventions Section */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5EFE7] shadow-soft">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-200">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              Individual Support Log & Actionable Interventions
            </h3>
            <p className="text-xs text-slate-500">
              Identified automatically during group activities when a student pauses or requests repeated audio hints
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {supportAlerts.map((alert) => (
            <div
              key={alert.id}
              className="p-4 rounded-2xl bg-[#F8F7F2] border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-900 text-sm">{alert.studentName}</span>
                  <span className="text-[11px] text-slate-500 bg-white px-2 py-0.5 rounded-md border border-slate-200">
                    {alert.groupName}
                  </span>
                  <span
                    className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${
                      alert.severity === 'high'
                        ? 'bg-rose-100 text-rose-800'
                        : 'bg-amber-100 text-amber-800'
                    }`}
                  >
                    {alert.severity} priority
                  </span>
                </div>
                <p className="text-slate-700">
                  <strong>Observation:</strong> {alert.observation}
                </p>
                <p className="text-[#245B45] font-semibold">
                  💡 <strong>Teacher Action:</strong> {alert.suggestedAction}
                </p>
              </div>

              <button
                onClick={() => resolveAlert(alert.id)}
                className="px-3.5 py-1.5 rounded-xl bg-white hover:bg-[#245B45] hover:text-white border border-slate-300 text-slate-700 font-semibold transition-colors shrink-0"
              >
                Mark Handled
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
