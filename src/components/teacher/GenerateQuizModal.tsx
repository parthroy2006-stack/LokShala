import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { X, FileQuestion, Sparkles, CheckCircle2 } from 'lucide-react';
import { SubjectType } from '../../types';

interface GenerateQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GenerateQuizModal: React.FC<GenerateQuizModalProps> = ({ isOpen, onClose }) => {
  const { createCustomLesson, setTeacherTab } = useApp();

  const [topic, setTopic] = useState('Local Seasonal Weather Patterns');
  const [subject, setSubject] = useState<SubjectType>('Science');
  const [questionCount, setQuestionCount] = useState(3);
  const [isGenerated, setIsGenerated] = useState(false);

  if (!isOpen) return null;

  const handleGenerate = () => {
    setIsGenerated(true);
    setTimeout(() => {
      // Create quiz-centric lesson
      createCustomLesson({
        title: `Quick Quiz: ${topic}`,
        subject,
        grade: 'Class 5–7',
        durationMinutes: 15,
        summary: `A collaborative quiz activity on ${topic.toLowerCase()} designed for shared-device group discussion.`,
        isVillageKnowledge: true,
        villageSource: 'Teacher Generated Formative Quiz',
        badgeText: 'Collaborative Quiz',
      });
      onClose();
      setTeacherTab('resources');
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#E5EFE7] animate-fade-in space-y-5">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-[#F8F7F2] text-[#C87552] flex items-center justify-center border border-[#C87552]/20">
              <FileQuestion className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg">Generate Collaborative Quiz</h3>
              <p className="text-xs text-slate-500">
                Formative questions tailored for shared group discussion
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4 text-xs">
          <div>
            <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
              Topic or Village Scenario
            </label>
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-[#C87552] focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                Subject
              </label>
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value as SubjectType)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 font-semibold focus:ring-2 focus:ring-[#C87552] focus:outline-none"
              >
                <option value="Science">Science</option>
                <option value="Mathematics">Mathematics</option>
                <option value="English">English</option>
                <option value="Our Community">Our Community</option>
              </select>
            </div>

            <div>
              <label className="block font-bold text-slate-700 uppercase tracking-wider mb-1">
                Questions
              </label>
              <select
                value={questionCount}
                onChange={(e) => setQuestionCount(Number(e.target.value))}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 font-semibold focus:ring-2 focus:ring-[#C87552] focus:outline-none"
              >
                <option value={3}>3 Questions (Quick 10m Check)</option>
                <option value={5}>5 Questions (Full Pod Challenge)</option>
              </select>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs leading-relaxed">
            💡 <strong>Group Interaction Rule:</strong> Each question requires the{' '}
            <strong>Reader</strong> to read choices aloud, the <strong>Solver</strong> to defend
            the answer, and the <strong>Checker</strong> to tap confirmation.
          </div>
        </div>

        <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl border border-slate-200 font-semibold text-slate-600 hover:bg-slate-50 text-xs"
          >
            Cancel
          </button>
          <button
            onClick={handleGenerate}
            className="px-5 py-2.5 rounded-xl bg-[#C87552] hover:bg-[#B06140] text-white font-bold text-xs flex items-center gap-2 shadow-sm transition-transform hover:scale-[1.02]"
          >
            {isGenerated ? (
              <>
                <CheckCircle2 className="w-4 h-4" />
                <span>Deploying Quiz to Tablets...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-amber-200" />
                <span>Generate & Publish Quiz</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
