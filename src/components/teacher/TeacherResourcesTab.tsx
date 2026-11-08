import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  BookOpen,
  Download,
  CheckCircle2,
  Filter,
  HardDrive,
  Clock,
  Sparkles,
  ArrowRight,
  WifiOff,
} from 'lucide-react';
import { OfflineBadge } from '../common/OfflineBadge';
import { SubjectType } from '../../types';

export const TeacherResourcesTab: React.FC = () => {
  const {
    lessons,
    toggleLessonDownload,
    startLesson,
    setCurrentView,
    setTeacherTab,
  } = useApp();
  const [selectedSubject, setSelectedSubject] = useState<string>('All');

  const subjects = ['All', 'Science', 'Mathematics', 'English', 'Our Community'];

  const filteredLessons = lessons.filter(
    (l) => selectedSubject === 'All' || l.subject === selectedSubject
  );

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E5EFE7] shadow-soft flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5EFE7] text-[#245B45] text-xs font-bold mb-2">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Curriculum Library</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Learning Resources & Local Modules
          </h2>
          <p className="text-sm text-slate-600 mt-1 max-w-2xl">
            Pre-loaded textbooks, interactive modules, and community-adapted village wisdom.
            Toggle offline cache for each module so shared classroom tablets have them ready.
          </p>
        </div>

        <button
          onClick={() => setTeacherTab('creator')}
          className="px-4 py-2.5 rounded-xl bg-[#245B45] hover:bg-[#1A4333] text-white text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-sm transition-all"
        >
          <Sparkles className="w-4 h-4 text-[#E5EFE7]" />
          <span>New AI Lesson</span>
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {subjects.map((sub) => (
          <button
            key={sub}
            onClick={() => setSelectedSubject(sub)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedSubject === sub
                ? 'bg-[#245B45] text-white shadow-sm'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {sub}
          </button>
        ))}
      </div>

      {/* Lesson Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLessons.map((lesson) => (
          <div
            key={lesson.id}
            className="bg-white rounded-3xl border border-[#E5EFE7] shadow-soft hover:shadow-md transition-all p-6 flex flex-col justify-between"
          >
            <div>
              {/* Badge and Subject */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-[#F8F7F2] text-[#245B45] border border-[#245B45]/20">
                  {lesson.subject}
                </span>

                <OfflineBadge isDownloaded={lesson.isDownloadedOffline} />
              </div>

              {/* Title & Village Source */}
              <h3 className="text-lg font-bold text-slate-900 mb-1">{lesson.title}</h3>
              {lesson.isVillageKnowledge && (
                <div className="text-xs font-semibold text-[#C87552] mb-2 flex items-center gap-1">
                  <span>🌾 {lesson.villageSource || 'Village Wisdom'}</span>
                </div>
              )}

              <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                {lesson.summary}
              </p>

              {/* Duration and Grade Meta */}
              <div className="flex items-center gap-3 text-xs text-slate-500 py-2 border-y border-slate-100 mb-4">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>{lesson.durationMinutes} mins</span>
                </span>
                <span>•</span>
                <span>{lesson.grade}</span>
                <span>•</span>
                <span>{lesson.downloadSize}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between gap-2 pt-2">
              <button
                onClick={() => toggleLessonDownload(lesson.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 border transition-all ${
                  lesson.isDownloadedOffline
                    ? 'bg-[#E5EFE7] text-[#245B45] border-[#245B45]/20 hover:bg-rose-50 hover:text-rose-700 hover:border-rose-200'
                    : 'bg-white text-slate-700 border-slate-300 hover:bg-[#245B45] hover:text-white'
                }`}
                title={lesson.isDownloadedOffline ? 'Click to remove from cache' : 'Click to download for offline use'}
              >
                {lesson.isDownloadedOffline ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Cached Offline</span>
                  </>
                ) : (
                  <>
                    <Download className="w-3.5 h-3.5" />
                    <span>Download (Offline)</span>
                  </>
                )}
              </button>

              <button
                onClick={() => {
                  startLesson(lesson.id);
                  setCurrentView('student-learning');
                }}
                className="px-3.5 py-1.5 rounded-xl bg-[#245B45] hover:bg-[#1A4333] text-white text-xs font-semibold flex items-center gap-1 shadow-xs transition-colors"
              >
                <span>Launch</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
