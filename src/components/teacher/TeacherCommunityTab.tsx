import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  HeartHandshake,
  Sparkles,
  BookOpen,
  CheckCircle2,
  Filter,
  Plus,
  Volume2,
  HardDrive,
  User,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { KnowledgeCategory, SubjectType } from '../../types';

interface TeacherCommunityTabProps {
  onOpenAddModal: () => void;
}

export const TeacherCommunityTab: React.FC<TeacherCommunityTabProps> = ({ onOpenAddModal }) => {
  const { communityKnowledge, convertCommunityToLesson, startLesson, setCurrentView } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Traditional Mountain Farming',
    'Seasonal Crops',
    'Local Medicinal Plants',
    'Folk Stories',
    'Traditional Crafts',
    'Local Environmental Knowledge',
  ];

  const filteredItems = communityKnowledge.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.contributor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header Banner */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E5EFE7] shadow-soft flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5EFE7] text-[#245B45] text-xs font-bold mb-2">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Community Knowledge Hub</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Village Wisdom into Classroom Curriculum
          </h2>
          <p className="text-sm text-slate-600 mt-1 max-w-2xl">
            In remote mountain villages, elders hold invaluable ecological, botanical, and mathematical knowledge.
            LokShala enables teachers to capture oral contributions and scaffold them into curriculum-aligned lessons.
          </p>
        </div>

        <button
          onClick={onOpenAddModal}
          className="px-4 py-2.5 rounded-xl bg-[#245B45] hover:bg-[#1A4333] text-white text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-sm shrink-0 transition-all hover:scale-[1.02]"
        >
          <Plus className="w-4 h-4" />
          <span>Record Elder Contribution</span>
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 rounded-2xl border border-[#E5EFE7] shadow-soft flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
          <Filter className="w-4 h-4 text-slate-400 shrink-0 ml-1" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-[#245B45] text-white shadow-xs'
                  : 'bg-[#F8F7F2] text-slate-600 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <input
          type="text"
          placeholder="Search by topic, elder, or plant..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full sm:w-64 px-3.5 py-1.5 text-xs rounded-xl border border-slate-200 bg-[#F8F7F2] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#245B45]"
        />
      </div>

      {/* Community Entries Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-3xl border border-[#E5EFE7] shadow-soft hover:shadow-md transition-all p-6 flex flex-col justify-between"
          >
            <div>
              {/* Category & Status */}
              <div className="flex items-start justify-between gap-2 mb-3">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#E5EFE7] text-[#245B45] border border-[#245B45]/20">
                  {item.category}
                </span>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-[#F8F7F2] text-slate-600 border border-slate-200">
                    Maps to: {item.relatedSubject}
                  </span>
                  {item.convertedToLesson && (
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      In Syllabus
                    </span>
                  )}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>

              {/* Contributor Credential */}
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-4 bg-[#F8F7F2] p-2.5 rounded-xl border border-slate-100">
                <User className="w-4 h-4 text-[#C87552]" />
                <span>
                  Contributed by <strong className="text-slate-800">{item.contributor}</strong> (
                  {item.contributorRole})
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                {item.shortDescription}
              </p>

              {/* Key Wisdom Bullets */}
              <div className="bg-[#E5EFE7]/40 p-3.5 rounded-xl border border-[#245B45]/15 mb-4 space-y-1.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#245B45]">
                  Core Village Wisdom & Observations:
                </span>
                <ul className="text-xs text-slate-700 space-y-1 list-disc list-inside">
                  {item.keyWisdom.map((wisdom, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {wisdom}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Audio and Seasonal Note */}
              <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                <span className="flex items-center gap-1">
                  <Volume2 className="w-3.5 h-3.5 text-[#245B45]" />
                  <span>{item.audioLanguageNote || 'Oral audio notes recorded'}</span>
                </span>
                <span className="text-[11px] text-slate-400">
                  Season: {item.seasonalContext}
                </span>
              </div>
            </div>

            {/* Action Row */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
              <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                <HardDrive className="w-3.5 h-3.5 text-[#245B45]" />
                <span>Cached on village laptop</span>
              </span>

              {item.convertedToLesson ? (
                <button
                  onClick={() => {
                    if (item.lessonId) {
                      startLesson(item.lessonId);
                      setCurrentView('student-learning');
                    }
                  }}
                  className="px-3.5 py-1.5 rounded-xl bg-[#245B45] text-white hover:bg-[#1A4333] text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <span>Preview Lesson</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <button
                  onClick={() => convertCommunityToLesson(item.id)}
                  className="px-3.5 py-1.5 rounded-xl bg-[#C87552] hover:bg-[#B06140] text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition-transform hover:scale-105"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-200" />
                  <span>Convert into Classroom Lesson</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
