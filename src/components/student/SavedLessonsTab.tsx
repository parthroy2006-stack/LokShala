import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  HardDrive,
  Download,
  CheckCircle2,
  Trash2,
  ArrowRight,
  WifiOff,
  Sparkles,
} from 'lucide-react';
import { OfflineBadge } from '../common/OfflineBadge';

export const SavedLessonsTab: React.FC = () => {
  const { lessons, toggleLessonDownload, startLesson, isOffline } = useApp();

  const savedLessons = lessons.filter((l) => l.isDownloadedOffline);

  return (
    <div className="space-y-8 animate-fade-in max-w-4xl mx-auto">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5EFE7] shadow-soft flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5EFE7] text-[#245B45] text-xs font-bold mb-2">
            <HardDrive className="w-3.5 h-3.5" />
            <span>Local Tablet Cache</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Saved Offline Lessons
          </h2>
          <p className="text-sm text-slate-600 mt-1 max-w-xl">
            These lessons are saved directly on this tablet. Your group can learn even if bad weather cuts off village internet.
          </p>
        </div>

        <div className="bg-[#F8F7F2] p-4 rounded-2xl border border-slate-200 text-xs shrink-0">
          <span className="text-slate-500 block font-semibold">Storage Used on Tablet:</span>
          <span className="text-base font-black text-[#245B45]">
            4.8 MB ({savedLessons.length} Lessons Cached)
          </span>
        </div>
      </div>

      {/* Offline Notice Banner */}
      {isOffline && (
        <div className="bg-amber-50 border-2 border-amber-300 p-4 rounded-2xl flex items-center gap-3 text-xs text-amber-900">
          <WifiOff className="w-5 h-5 text-amber-700 shrink-0" />
          <span>
            <strong>Simulated Offline Mode Active:</strong> Only saved lessons below can be opened right now. Notice how smoothly they load without any internet request!
          </span>
        </div>
      )}

      {/* Saved Lessons Grid */}
      <div className="space-y-3">
        {savedLessons.map((lesson) => (
          <div
            key={lesson.id}
            className="bg-white p-5 rounded-3xl border border-[#E5EFE7] shadow-soft flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-md bg-[#E5EFE7] text-[#245B45]">
                  {lesson.subject}
                </span>
                <OfflineBadge isDownloaded={true} size={lesson.downloadSize} />
              </div>

              <h4 className="text-lg font-bold text-slate-900">{lesson.title}</h4>
              <p className="text-xs text-slate-600">{lesson.summary}</p>
            </div>

            <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto justify-end">
              <button
                onClick={() => toggleLessonDownload(lesson.id)}
                className="p-2.5 rounded-xl border border-slate-200 text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                title="Remove from tablet storage"
              >
                <Trash2 className="w-4 h-4" />
              </button>

              <button
                onClick={() => startLesson(lesson.id)}
                className="px-5 py-2.5 rounded-xl bg-[#245B45] hover:bg-[#1A4333] text-white font-bold text-xs sm:text-sm flex items-center gap-2 shadow-sm transition-all hover:scale-105"
              >
                <span>Open Lesson</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
