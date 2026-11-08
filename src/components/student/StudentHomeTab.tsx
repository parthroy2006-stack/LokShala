import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  BookOpen,
  Sprout,
  Compass,
  Calculator,
  ShieldCheck,
  Star,
  Sparkles,
  ArrowRight,
  HardDrive,
  Users,
  RotateCw,
  Clock,
  HeartHandshake,
} from 'lucide-react';
import { OfflineBadge } from '../common/OfflineBadge';
import { RotatingRolesBar } from './RotatingRolesBar';
import { SubjectType } from '../../types';

export const StudentHomeTab: React.FC = () => {
  const { selectedGroup, lessons, startLesson, isOffline } = useApp();
  const [selectedSubject, setSelectedSubject] = useState<SubjectType | 'All'>('All');

  if (!selectedGroup) return null;

  // Find the featured "Mountain Farming and Seasonal Crops" lesson
  const featuredVillageLesson =
    lessons.find((l) => l.id === 'lesson-1') || lessons.find((l) => l.isVillageKnowledge) || lessons[0];

  const subjects: { name: SubjectType; icon: any; color: string; bgColor: string }[] = [
    {
      name: 'Mathematics',
      icon: Calculator,
      color: 'text-[#245B45]',
      bgColor: 'bg-[#E5EFE7]',
    },
    {
      name: 'Science',
      icon: Sprout,
      color: 'text-emerald-800',
      bgColor: 'bg-emerald-100',
    },
    {
      name: 'English',
      icon: BookOpen,
      color: 'text-blue-800',
      bgColor: 'bg-blue-100',
    },
    {
      name: 'Our Community',
      icon: HeartHandshake,
      color: 'text-[#C87552]',
      bgColor: 'bg-amber-100',
    },
  ];

  const filteredLessons = lessons.filter(
    (l) => selectedSubject === 'All' || l.subject === selectedSubject
  );

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Group Welcome Bar */}
      <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E5EFE7] shadow-soft flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-2xl bg-[#245B45] text-white flex items-center justify-center font-black text-xl shadow-md">
            {selectedGroup.name.replace('Group ', '')}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#C87552]">
                Active Shared Tablet Session
              </span>
              <span className="text-xs text-slate-400">•</span>
              <span className="text-xs font-semibold text-slate-600">
                {selectedGroup.grade}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900">
              Welcome back, {selectedGroup.name}!
            </h1>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              4 members sharing this device • {selectedGroup.leadVillage} Pod
            </p>
          </div>
        </div>

        {/* Stars Badge */}
        <div className="flex items-center gap-2 bg-amber-50 px-4 py-2.5 rounded-2xl border border-amber-200 shadow-xs">
          <Star className="w-5 h-5 fill-[#C87552] text-[#C87552]" />
          <div>
            <span className="text-xs text-slate-500 font-semibold block leading-tight">
              Group Balance
            </span>
            <span className="text-lg font-black text-[#C87552] leading-none">
              {selectedGroup.starsEarned} Stars
            </span>
          </div>
        </div>
      </div>

      {/* Rotating Group Roles Widget */}
      <RotatingRolesBar />

      {/* PROMINENT SECTION: Learn from Our Village */}
      <section className="bg-gradient-to-br from-[#245B45] to-[#1A4333] text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="max-w-xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5EFE7] text-[#245B45] text-xs font-black uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#C87552]" />
              <span>Learn from Our Village</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white leading-tight">
              {featuredVillageLesson.title}
            </h2>

            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
              Discover how our mountain terrace slopes, Alder tree nitrogen roots, and weather
              clues guide when our village plants rice and winter vegetables.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-semibold text-[#E5EFE7]">
              <span>Contributed by: <strong>Elder Viseyie Chase</strong></span>
              <span>•</span>
              <span>25 Minutes</span>
              <span>•</span>
              <span>3 Rotating Turns</span>
            </div>
          </div>

          <div className="shrink-0 w-full lg:w-auto flex flex-col items-center gap-2">
            <button
              onClick={() => startLesson(featuredVillageLesson.id)}
              className="w-full lg:w-auto px-8 py-4 rounded-2xl bg-[#C87552] hover:bg-[#B06140] text-white font-black text-base sm:text-lg flex items-center justify-center gap-3 shadow-lg shadow-[#C87552]/30 transition-all hover:scale-105 active:scale-95"
            >
              <span>Start Village Lesson</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <span className="text-[11px] text-[#E5EFE7]/80">
              ⚡ Pre-loaded for 100% Offline Classroom Use
            </span>
          </div>
        </div>
      </section>

      {/* 4 Subjects Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-black text-slate-900">Explore Subjects</h3>
            <p className="text-xs text-slate-500">Pick a topic together to learn as a group</p>
          </div>

          {/* Quick Subject Filter Pill */}
          <button
            onClick={() => setSelectedSubject('All')}
            className={`text-xs font-bold px-3 py-1.5 rounded-xl border transition-all ${
              selectedSubject === 'All'
                ? 'bg-[#245B45] text-white border-[#245B45]'
                : 'bg-white text-slate-600 border-slate-200'
            }`}
          >
            Show All Subjects
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {subjects.map((subj) => {
            const Icon = subj.icon;
            const isSelected = selectedSubject === subj.name;

            return (
              <div
                key={subj.name}
                onClick={() => setSelectedSubject(subj.name)}
                className={`p-5 rounded-3xl cursor-pointer border-2 transition-all flex flex-col items-center text-center justify-between gap-3 ${
                  isSelected
                    ? 'bg-white border-[#245B45] shadow-md scale-105 ring-2 ring-[#245B45]/10'
                    : 'bg-white border-[#E5EFE7] hover:border-[#245B45]/50 shadow-xs'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-2xl ${subj.bgColor} ${subj.color} flex items-center justify-center shadow-xs`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm sm:text-base text-slate-900">
                    {subj.name}
                  </h4>
                  <span className="text-[11px] text-slate-500 font-medium">
                    {lessons.filter((l) => l.subject === subj.name).length} Lessons
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Lessons List for Selected Subject */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-slate-900">
            {selectedSubject === 'All' ? 'All Available Lessons' : `${selectedSubject} Lessons`}
          </h3>
          <span className="text-xs text-slate-500 font-semibold">
            {filteredLessons.length} Modules Ready
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredLessons.map((lesson) => (
            <div
              key={lesson.id}
              onClick={() => startLesson(lesson.id)}
              className="bg-white p-5 rounded-3xl border border-[#E5EFE7] shadow-soft hover:shadow-md hover:border-[#245B45] transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-bold text-[#245B45] bg-[#E5EFE7] px-2.5 py-0.5 rounded-md">
                    {lesson.subject}
                  </span>
                  <OfflineBadge isDownloaded={lesson.isDownloadedOffline} />
                </div>

                <h4 className="font-extrabold text-base text-slate-900 group-hover:text-[#245B45] transition-colors">
                  {lesson.title}
                </h4>

                {lesson.isVillageKnowledge && (
                  <span className="text-xs font-semibold text-[#C87552] block mt-1">
                    🌾 {lesson.villageSource}
                  </span>
                )}

                <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                  {lesson.summary}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium">
                  {lesson.durationMinutes} mins • {lesson.grade}
                </span>

                <span className="font-bold text-[#245B45] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  Start Together →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
