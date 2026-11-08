import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { X, HeartHandshake, Sparkles, CheckCircle2 } from 'lucide-react';
import { KnowledgeCategory, SubjectType } from '../../types';

interface AddCommunityKnowledgeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AddCommunityKnowledgeModal: React.FC<AddCommunityKnowledgeModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { addCommunityKnowledge } = useApp();

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<KnowledgeCategory>('Traditional Mountain Farming');
  const [contributor, setContributor] = useState('');
  const [contributorRole, setContributorRole] = useState('');
  const [relatedSubject, setRelatedSubject] = useState<SubjectType>('Science');
  const [shortDescription, setShortDescription] = useState('');
  const [fullStory, setFullStory] = useState('');
  const [seasonalContext, setSeasonalContext] = useState('');
  const [wisdom1, setWisdom1] = useState('');
  const [wisdom2, setWisdom2] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !contributor.trim()) return;

    addCommunityKnowledge({
      title,
      category,
      contributor,
      contributorRole: contributorRole || 'Village Elder',
      relatedSubject,
      shortDescription: shortDescription || fullStory.substring(0, 120),
      fullStory: fullStory || shortDescription,
      seasonalContext: seasonalContext || 'Year-round traditional knowledge',
      keyWisdom: [wisdom1, wisdom2].filter(Boolean),
      audioLanguageNote: 'Local oral recording noted in registry',
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#E5EFE7] animate-fade-in">
        {/* Header */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-[#E5EFE7] text-[#245B45] flex items-center justify-center">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg">Record Community Knowledge</h3>
              <p className="text-xs text-slate-500">Document oral elder wisdom into LokShala's archive</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs">
          <div>
            <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
              Title of Traditional Knowledge *
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Traditional Terrace Weed Mulching"
              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-[#245B45] focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as KnowledgeCategory)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold focus:ring-2 focus:ring-[#245B45] focus:outline-none"
              >
                <option value="Traditional Mountain Farming">Traditional Mountain Farming</option>
                <option value="Seasonal Crops">Seasonal Crops</option>
                <option value="Local Medicinal Plants">Local Medicinal Plants</option>
                <option value="Folk Stories">Folk Stories</option>
                <option value="Traditional Crafts">Traditional Crafts</option>
                <option value="Local Environmental Knowledge">Local Environmental Knowledge</option>
              </select>
            </div>

            <div>
              <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                Related School Subject
              </label>
              <select
                value={relatedSubject}
                onChange={(e) => setRelatedSubject(e.target.value as SubjectType)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold focus:ring-2 focus:ring-[#245B45] focus:outline-none"
              >
                <option value="Science">Science</option>
                <option value="Mathematics">Mathematics</option>
                <option value="English">English</option>
                <option value="Our Community">Our Community</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                Elder / Contributor Name *
              </label>
              <input
                type="text"
                required
                value={contributor}
                onChange={(e) => setContributor(e.target.value)}
                placeholder="e.g. Uncle Thepfulhou"
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#245B45] focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                Elder Role / Clan
              </label>
              <input
                type="text"
                value={contributorRole}
                onChange={(e) => setContributorRole(e.target.value)}
                placeholder="e.g. Terrace Stonemason, Lower Khel"
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#245B45] focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
              Short Description / Summary
            </label>
            <textarea
              rows={2}
              value={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
              placeholder="Brief explanation of how the practice or story works..."
              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#245B45] focus:outline-none"
            />
          </div>

          <div>
            <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
              Key Wisdom Bullet Points for Students
            </label>
            <input
              type="text"
              value={wisdom1}
              onChange={(e) => setWisdom1(e.target.value)}
              placeholder="Point 1: e.g. Turning green weeds back into soil traps moisture during frost..."
              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs mb-2 focus:ring-2 focus:ring-[#245B45] focus:outline-none"
            />
            <input
              type="text"
              value={wisdom2}
              onChange={(e) => setWisdom2(e.target.value)}
              placeholder="Point 2: e.g. Saves money while keeping mountain soil rich in earthworms..."
              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#245B45] focus:outline-none"
            />
          </div>

          {/* Footer */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl border border-slate-200 font-semibold text-slate-600 hover:bg-slate-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-[#245B45] hover:bg-[#1A4333] text-white font-bold flex items-center gap-1.5 shadow-sm"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Save to Village Archive</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
