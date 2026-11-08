import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  Users,
  BookOpen,
  CheckCircle2,
  AlertTriangle,
  Plus,
  Sparkles,
  HeartHandshake,
  HardDrive,
  ArrowRight,
  TrendingUp,
  FileQuestion,
  Calendar,
  Clock,
  ChevronRight,
  RefreshCw,
} from 'lucide-react';
import { OfflineBadge } from '../common/OfflineBadge';
import { WEEKLY_ACTIVITY_METRICS } from '../../data/sampleData';

interface TeacherOverviewTabProps {
  onOpenCreateLesson: () => void;
  onOpenGenerateQuiz: () => void;
  onOpenAddCommunity: () => void;
}

export const TeacherOverviewTab: React.FC<TeacherOverviewTabProps> = ({
  onOpenCreateLesson,
  onOpenGenerateQuiz,
  onOpenAddCommunity,
}) => {
  const {
    groups,
    lessons,
    communityKnowledge,
    supportAlerts,
    setTeacherTab,
    startLesson,
    setCurrentView,
    convertCommunityToLesson,
    resolveAlert,
    isOffline,
  } = useApp();

  // Aggregate stats
  const totalStudents = 38; // 8 groups in village cluster
  const activeLessonsCount = lessons.length;
  const activitiesCompleted = groups.reduce((acc, g) => acc + g.totalActivitiesCount, 75);
  const studentsNeedingSupportCount = supportAlerts.length;

  const maxActivityValue = Math.max(...WEEKLY_ACTIVITY_METRICS.map((m) => m.activitiesCount));

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Welcome Banner & Quick Actions */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5EFE7] shadow-soft flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#E5EFE7] text-[#245B45]">
              Term 2 • Khonoma Community School
            </span>
            <span className="text-xs text-slate-400">|</span>
            <span className="text-xs text-slate-500 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              Week 6 Session
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Good morning, Maya Devi!
          </h1>
          <p className="text-sm text-slate-600 mt-1 max-w-xl">
            All 3 shared classroom tablets synced 18 minutes ago. Group A and Group B are scheduled for Science & Village Agriculture this morning.
          </p>
        </div>

        {/* Quick Action Buttons */}
        <div className="flex flex-wrap items-center gap-2.5 w-full lg:w-auto">
          <button
            onClick={onOpenCreateLesson}
            className="px-4 py-2.5 rounded-xl bg-[#245B45] hover:bg-[#1A4333] text-white text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-sm transition-all hover:scale-[1.02]"
          >
            <Sparkles className="w-4 h-4 text-[#E5EFE7]" />
            <span>Create Lesson</span>
          </button>

          <button
            onClick={onOpenGenerateQuiz}
            className="px-4 py-2.5 rounded-xl bg-[#C87552] hover:bg-[#B06140] text-white text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-sm transition-all hover:scale-[1.02]"
          >
            <FileQuestion className="w-4 h-4" />
            <span>Generate Quiz</span>
          </button>

          <button
            onClick={onOpenAddCommunity}
            className="px-4 py-2.5 rounded-xl bg-[#F8F7F2] hover:bg-[#E5EFE7] text-[#245B45] border border-[#245B45]/20 text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all"
          >
            <HeartHandshake className="w-4 h-4" />
            <span>Add Community Knowledge</span>
          </button>
        </div>
      </div>

      {/* 4 Primary Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Stat 1: Total Students */}
        <div className="bg-white p-5 rounded-2xl border border-[#E5EFE7] shadow-soft flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#E5EFE7] text-[#245B45] flex items-center justify-center shrink-0">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-black text-slate-900">{totalStudents}</div>
            <div className="text-xs font-semibold text-slate-500">Total Students</div>
            <div className="text-[10px] text-emerald-700 font-medium mt-0.5">
              8 peer groups (3 shared tablets)
            </div>
          </div>
        </div>

        {/* Stat 2: Active Lessons */}
        <div className="bg-white p-5 rounded-2xl border border-[#E5EFE7] shadow-soft flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#F8F7F2] text-[#245B45] flex items-center justify-center shrink-0 border border-[#245B45]/15">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-black text-slate-900">{activeLessonsCount}</div>
            <div className="text-xs font-semibold text-slate-500">Active Lessons</div>
            <div className="text-[10px] text-[#245B45] font-medium mt-0.5">
              {lessons.filter((l) => l.isDownloadedOffline).length} available offline
            </div>
          </div>
        </div>

        {/* Stat 3: Activities Completed */}
        <div className="bg-white p-5 rounded-2xl border border-[#E5EFE7] shadow-soft flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-black text-slate-900">{activitiesCompleted}</div>
            <div className="text-xs font-semibold text-slate-500">Activities Completed</div>
            <div className="text-[10px] text-emerald-700 font-medium mt-0.5">
              +18 this week
            </div>
          </div>
        </div>

        {/* Stat 4: Students Needing Support */}
        <div className="bg-white p-5 rounded-2xl border border-[#E5EFE7] shadow-soft flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-black text-slate-900">{studentsNeedingSupportCount}</div>
            <div className="text-xs font-semibold text-slate-500">Students Needing Support</div>
            <div className="text-[10px] text-amber-700 font-medium mt-0.5">
              Identified via role checks
            </div>
          </div>
        </div>
      </div>

      {/* Middle Row: Learning Activity Chart & Offline-Ready Status */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Learning Activity Chart (2 Cols) */}
        <div className="lg:col-span-2 bg-white p-6 rounded-3xl border border-[#E5EFE7] shadow-soft">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-bold text-slate-900 text-base">Weekly Group Learning Activity</h3>
              <p className="text-xs text-slate-500">
                Number of cooperative group challenges completed across shared devices
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1.5 text-xs text-slate-600 bg-[#F8F7F2] px-2.5 py-1 rounded-lg border border-slate-200">
                <TrendingUp className="w-3.5 h-3.5 text-[#245B45]" />
                Peak: Thursday (31 tasks)
              </span>
            </div>
          </div>

          {/* Bar Chart Visualization */}
          <div className="pt-4 pb-2">
            <div className="h-44 flex items-end gap-3 sm:gap-6 justify-between px-2">
              {WEEKLY_ACTIVITY_METRICS.map((metric) => {
                const heightPercent = Math.round((metric.activitiesCount / maxActivityValue) * 100);
                return (
                  <div key={metric.day} className="flex-1 flex flex-col items-center gap-2 group">
                    <span className="text-[11px] font-bold text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity">
                      {metric.activitiesCount}
                    </span>
                    <div className="w-full bg-[#E5EFE7] rounded-xl overflow-hidden h-32 flex items-end">
                      <div
                        style={{ height: `${heightPercent}%` }}
                        className="w-full bg-[#245B45] group-hover:bg-[#C87552] transition-all rounded-t-xl"
                      ></div>
                    </div>
                    <span className="text-xs font-semibold text-slate-600">{metric.day}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>Aggregated from offline logs during device return</span>
            <button
              onClick={() => setTeacherTab('assessments')}
              className="text-[#245B45] font-semibold hover:underline flex items-center gap-1"
            >
              View detailed group logs →
            </button>
          </div>
        </div>

        {/* Offline Readiness Card (1 Col) */}
        <div className="bg-white p-6 rounded-3xl border border-[#E5EFE7] shadow-soft flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#E5EFE7] text-[#245B45] flex items-center justify-center">
                <HardDrive className="w-5 h-5" />
              </div>
              <span
                className={`text-xs px-2.5 py-1 rounded-full font-bold border ${
                  isOffline
                    ? 'bg-amber-50 text-amber-900 border-amber-300'
                    : 'bg-[#E5EFE7] text-[#245B45] border-[#245B45]/20'
                }`}
              >
                {isOffline ? 'Offline Active' : 'Synced & Ready'}
              </span>
            </div>

            <h3 className="font-bold text-slate-900 text-base">Village Device Offline Health</h3>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              All learning assets, audio explanations, and quiz questions are stored in SQLite/LocalStorage for classroom use without internet.
            </p>

            <div className="mt-4 space-y-2 text-xs">
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-500">Offline-ready lessons:</span>
                <span className="font-bold text-slate-900">
                  {lessons.filter((l) => l.isDownloadedOffline).length} of {lessons.length}
                </span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-500">Elder audio clips:</span>
                <span className="font-bold text-slate-900">12 Cached (4.8 MB)</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-slate-500">Last Village Hub Sync:</span>
                <span className="font-semibold text-emerald-700">Today, 08:30 AM</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-3 border-t border-slate-100">
            <button
              onClick={() => setTeacherTab('settings')}
              className="w-full py-2 px-3 rounded-xl bg-[#F8F7F2] hover:bg-[#E5EFE7] text-[#245B45] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Manage Offline Sync Queue</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Grid: Recently Created Lessons & Students Needing Attention */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recently Created Lessons */}
        <div className="bg-white p-6 rounded-3xl border border-[#E5EFE7] shadow-soft">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-bold text-slate-900 text-base">Recently Created Lessons</h3>
              <p className="text-xs text-slate-500">Standard curriculum blended with village wisdom</p>
            </div>
            <button
              onClick={() => setTeacherTab('resources')}
              className="text-xs text-[#245B45] font-semibold hover:underline flex items-center gap-1"
            >
              View all ({lessons.length}) →
            </button>
          </div>

          <div className="space-y-3">
            {lessons.slice(0, 3).map((lesson) => (
              <div
                key={lesson.id}
                className="p-3.5 rounded-2xl bg-[#F8F7F2] hover:bg-[#E5EFE7]/50 border border-slate-200 transition-all flex items-center justify-between gap-3 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white text-[#245B45] flex items-center justify-center shadow-xs border border-slate-200 shrink-0 font-bold text-sm">
                    {lesson.subject === 'Science' ? '🌱' : lesson.subject === 'Mathematics' ? '📐' : '📖'}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#245B45] transition-colors">
                      {lesson.title}
                    </h4>
                    <div className="flex items-center gap-2 mt-0.5 text-xs text-slate-500">
                      <span className="font-medium text-[#245B45]">{lesson.subject}</span>
                      <span>•</span>
                      <span>{lesson.grade}</span>
                      <span>•</span>
                      <span>{lesson.durationMinutes} mins</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <OfflineBadge isDownloaded={lesson.isDownloadedOffline} />
                  <button
                    onClick={() => {
                      startLesson(lesson.id);
                      setCurrentView('student-learning');
                    }}
                    title="Preview this lesson as a student"
                    className="p-2 rounded-lg bg-white hover:bg-[#245B45] hover:text-white text-slate-600 transition-colors shadow-xs"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Students Needing Additional Attention */}
        <div className="bg-white p-6 rounded-3xl border border-[#E5EFE7] shadow-soft">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-slate-900 text-base">Students Needing Attention</h3>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-900">
                  {supportAlerts.length} Active
                </span>
              </div>
              <p className="text-xs text-slate-500">
                Actionable flags identified from shared-device role contributions
              </p>
            </div>
            <button
              onClick={() => setTeacherTab('students')}
              className="text-xs text-[#245B45] font-semibold hover:underline"
            >
              See all students →
            </button>
          </div>

          <div className="space-y-3">
            {supportAlerts.slice(0, 3).map((alert) => (
              <div
                key={alert.id}
                className="p-3.5 rounded-2xl bg-amber-50/50 border border-amber-200/80 hover:border-amber-300 transition-all text-xs"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900 text-sm">{alert.studentName}</span>
                    <span className="text-[11px] text-slate-500 bg-white px-2 py-0.5 rounded-md border border-slate-200">
                      {alert.groupName}
                    </span>
                  </div>
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

                <p className="text-slate-700 font-medium">{alert.concern}</p>
                <div className="mt-2 p-2 rounded-lg bg-white border border-amber-200 text-slate-600 flex items-start justify-between gap-2">
                  <span>💡 <strong>Recommendation:</strong> {alert.suggestedAction}</span>
                  <button
                    onClick={() => resolveAlert(alert.id)}
                    className="text-[#245B45] font-bold hover:underline shrink-0 text-[11px]"
                  >
                    Mark Addressed
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Community Contribution Spotlight */}
      <div className="bg-[#E5EFE7]/60 rounded-3xl p-6 sm:p-8 border border-[#245B45]/20">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#245B45] text-white flex items-center justify-center shrink-0">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Community Knowledge Pipeline
              </h3>
              <p className="text-xs text-slate-600">
                Oral wisdom shared by village elders ready to be converted into structured lessons
              </p>
            </div>
          </div>

          <button
            onClick={() => setTeacherTab('community')}
            className="px-4 py-2 rounded-xl bg-white text-[#245B45] hover:bg-[#245B45] hover:text-white border border-[#245B45]/30 text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            <span>Explore Knowledge Hub ({communityKnowledge.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {communityKnowledge.slice(0, 2).map((item) => (
            <div
              key={item.id}
              className="bg-white p-5 rounded-2xl border border-[#E5EFE7] shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                  <span className="font-semibold text-[#245B45] bg-[#E5EFE7] px-2 py-0.5 rounded-md">
                    {item.category}
                  </span>
                  <span>Contributor: <strong>{item.contributor}</strong></span>
                </div>
                <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
                <p className="text-xs text-slate-600 mt-1 line-clamp-2">{item.shortDescription}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 font-medium">
                  Maps to: <strong>{item.relatedSubject}</strong>
                </span>
                {item.convertedToLesson ? (
                  <span className="text-xs text-emerald-700 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    In Curriculum
                  </span>
                ) : (
                  <button
                    onClick={() => convertCommunityToLesson(item.id)}
                    className="text-xs font-bold text-[#C87552] hover:text-[#B06140] flex items-center gap-1"
                  >
                    <span>Convert to Lesson</span>
                    <Sparkles className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
