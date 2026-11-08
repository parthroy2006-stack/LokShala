import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  Award,
  Star,
  Users,
  CheckCircle2,
  TrendingUp,
  FileText,
  Clock,
  Sparkles,
} from 'lucide-react';

export const TeacherAssessmentsTab: React.FC = () => {
  const { groups } = useApp();

  const assessmentLogs = [
    {
      id: 'a1',
      groupName: 'Group A (Class 5)',
      lessonTitle: 'Mountain Farming and Seasonal Crops',
      roleRotationScore: '100% (Strict Turns Followed)',
      comprehensionScore: '92%',
      starsEarned: 10,
      timestamp: 'Today, 09:15 AM',
      teacherNotes: 'Chubala explained soil nitrogen clearly to group; Toshi read paragraph 2 with confidence.',
    },
    {
      id: 'a2',
      groupName: 'Group B (Class 6)',
      lessonTitle: 'Angles & Cane Basket Weaving',
      roleRotationScore: '85%',
      comprehensionScore: '88%',
      starsEarned: 8,
      timestamp: 'Yesterday, 02:40 PM',
      teacherNotes: 'Needed one prompt to let Sentila take the Solver turn; math accuracy on 60° angles was excellent.',
    },
    {
      id: 'a3',
      groupName: 'Group C (Class 7)',
      lessonTitle: 'Gravity Water Supply Systems',
      roleRotationScore: '95%',
      comprehensionScore: '96%',
      starsEarned: 12,
      timestamp: 'Yesterday, 11:20 AM',
      teacherNotes: 'High peer collaboration; connected elevation head calculations directly to the village stream pipe.',
    },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E5EFE7] shadow-soft">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5EFE7] text-[#245B45] text-xs font-bold mb-2">
          <Award className="w-3.5 h-3.5" />
          <span>Formative Peer Assessments</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Group Assessment & Cooperative Mastery
        </h2>
        <p className="text-sm text-slate-600 mt-1 max-w-2xl">
          In a shared-device classroom, assessment evaluates both conceptual understanding
          AND social collaboration (taking turns, active listening, and explaining concepts to peers).
        </p>
      </div>

      {/* Group Performance Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {groups.map((group) => (
          <div
            key={group.id}
            className="bg-white p-6 rounded-3xl border border-[#E5EFE7] shadow-soft"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-slate-900 text-base">{group.name}</h3>
              <span className="text-xs text-slate-500 font-semibold">{group.grade}</span>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-500">Cooperative Stars:</span>
                <span className="font-bold text-[#C87552] flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-[#C87552]" />
                  {group.starsEarned} Stars
                </span>
              </div>

              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-500">Lessons Completed:</span>
                <span className="font-bold text-slate-800">{group.completedLessonsCount}</span>
              </div>

              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-500">Turn Discipline:</span>
                <span className="font-bold text-emerald-700">Excellent (94%)</span>
              </div>

              <div className="flex justify-between py-1.5">
                <span className="text-slate-500">Active Daily Streak:</span>
                <span className="font-bold text-[#245B45]">{group.streakDays} Days</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detailed Activity Logs */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5EFE7] shadow-soft">
        <h3 className="text-lg font-bold text-slate-900 mb-4">Recent Shared Session Logs</h3>

        <div className="space-y-4">
          {assessmentLogs.map((log) => (
            <div
              key={log.id}
              className="p-5 rounded-2xl bg-[#F8F7F2] border border-slate-200 text-xs space-y-2.5"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200/60 pb-2">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-900 text-sm">{log.groupName}</span>
                  <span className="text-slate-400">•</span>
                  <span className="font-semibold text-[#245B45]">{log.lessonTitle}</span>
                </div>
                <span className="text-[11px] text-slate-500">{log.timestamp}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-slate-600">
                <div className="bg-white p-2.5 rounded-xl border border-slate-200">
                  <span className="block text-slate-400 text-[10px] uppercase font-bold">
                    Turn Rotation Adherence
                  </span>
                  <span className="font-bold text-slate-900 text-sm">
                    {log.roleRotationScore}
                  </span>
                </div>

                <div className="bg-white p-2.5 rounded-xl border border-slate-200">
                  <span className="block text-slate-400 text-[10px] uppercase font-bold">
                    Formative Quiz Accuracy
                  </span>
                  <span className="font-bold text-emerald-700 text-sm">
                    {log.comprehensionScore}
                  </span>
                </div>

                <div className="bg-white p-2.5 rounded-xl border border-slate-200">
                  <span className="block text-slate-400 text-[10px] uppercase font-bold">
                    Stars Credited
                  </span>
                  <span className="font-bold text-[#C87552] text-sm flex items-center gap-1">
                    <Star className="w-4 h-4 fill-[#C87552]" />
                    +{log.starsEarned} Points
                  </span>
                </div>
              </div>

              <p className="text-slate-700 bg-white p-3 rounded-xl border border-slate-200 leading-relaxed">
                <strong>Maya Devi's Observation:</strong> {log.teacherNotes}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
