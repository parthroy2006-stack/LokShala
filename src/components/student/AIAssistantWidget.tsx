import React, { useState } from 'react';
import {
  Sparkles,
  Volume2,
  VolumeX,
  Lightbulb,
  HelpCircle,
  Users,
  Compass,
  MessageSquare,
  ArrowRight,
  RefreshCw,
} from 'lucide-react';

interface AIAssistantWidgetProps {
  question: string;
  hints: {
    hint1: string;
    guidingQuestion: string;
    localConnection: string;
    discussionPrompt: string;
  };
}

export const AIAssistantWidget: React.FC<AIAssistantWidgetProps> = ({ question, hints }) => {
  const [hintStage, setHintStage] = useState<number>(1);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);

  const stages = [
    {
      level: 1,
      title: 'Small Clue',
      content: hints.hint1,
      icon: Lightbulb,
      color: 'bg-amber-100 text-amber-800 border-amber-300',
    },
    {
      level: 2,
      title: 'Guiding Question',
      content: hints.guidingQuestion,
      icon: HelpCircle,
      color: 'bg-blue-100 text-blue-800 border-blue-300',
    },
    {
      level: 3,
      title: 'Local Village Practice',
      content: hints.localConnection,
      icon: Compass,
      color: 'bg-[#E5EFE7] text-[#245B45] border-[#245B45]/30',
    },
    {
      level: 4,
      title: 'Group Discussion Challenge',
      content: hints.discussionPrompt,
      icon: Users,
      color: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    },
  ];

  const currentHint = stages[hintStage - 1];

  const handleNextHint = () => {
    setHintStage((prev) => (prev >= 4 ? 1 : prev + 1));
  };

  const handleHearHint = () => {
    if (!('speechSynthesis' in window)) {
      alert('Text-to-speech is not supported on this browser.');
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const textToSpeak = `${currentHint.title}. ${currentHint.content}`;
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.rate = 0.9; // gentle pace for young learners
    utterance.pitch = 1.0;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.cancel(); // clear queue
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-[#245B45]/20 shadow-soft">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-[#E5EFE7] text-[#245B45] flex items-center justify-center shrink-0">
            <Sparkles className="w-6 h-6 text-[#245B45]" />
          </div>
          <div>
            <h4 className="text-base font-extrabold text-slate-900">
              LokShala AI Learning Assistant
            </h4>
            <p className="text-xs font-semibold text-[#C87552]">
              "Discuss as a group. LokShala gives hints, not just answers."
            </p>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex items-center gap-1.5 bg-[#F8F7F2] px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-bold">
          <span className="text-slate-400">Step:</span>
          <span className="text-[#245B45]">
            Hint {hintStage} of {stages.length}
          </span>
        </div>
      </div>

      {/* Target Question */}
      <div className="my-5 p-4 rounded-2xl bg-[#F8F7F2] border border-slate-200">
        <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 block mb-1">
          Group Challenge Question:
        </span>
        <p className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
          "{question}"
        </p>
      </div>

      {/* The Active Socratic Hint Box */}
      <div className={`p-5 rounded-2xl border transition-all ${currentHint.color}`}>
        <div className="flex items-center justify-between mb-2">
          <span className="font-extrabold text-xs uppercase tracking-wider flex items-center gap-1.5">
            <currentHint.icon className="w-4 h-4" />
            <span>
              Level {hintStage}: {currentHint.title}
            </span>
          </span>

          <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-white/80 border border-current">
            Shared Tablet Hint
          </span>
        </div>

        <p className="text-sm sm:text-base font-medium leading-relaxed">
          {currentHint.content}
        </p>
      </div>

      {/* Step Pills for Navigating Hints */}
      <div className="flex items-center gap-2 mt-4 overflow-x-auto pb-1">
        {stages.map((stage) => (
          <button
            key={stage.level}
            onClick={() => setHintStage(stage.level)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              hintStage === stage.level
                ? 'bg-[#245B45] text-white shadow-xs'
                : 'bg-[#F8F7F2] text-slate-600 hover:bg-slate-200 border border-slate-200'
            }`}
          >
            {stage.level}. {stage.title}
          </button>
        ))}
      </div>

      {/* Action Buttons: Show Hint & Hear Hint */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 pt-4 border-t border-slate-100">
        <button
          onClick={handleNextHint}
          className="w-full py-3.5 px-4 rounded-2xl bg-[#245B45] hover:bg-[#1A4333] text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          <Lightbulb className="w-5 h-5 text-amber-200" />
          <span>
            {hintStage >= 4 ? 'Cycle Back to First Hint' : 'Show Next Guiding Hint'}
          </span>
        </button>

        <button
          onClick={handleHearHint}
          className={`w-full py-3.5 px-4 rounded-2xl font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 transition-all border ${
            isSpeaking
              ? 'bg-rose-50 text-rose-700 border-rose-300 animate-pulse'
              : 'bg-[#F8F7F2] hover:bg-[#E5EFE7] text-[#245B45] border-[#245B45]/30 hover:scale-[1.02]'
          }`}
        >
          {isSpeaking ? (
            <>
              <VolumeX className="w-5 h-5" />
              <span>Stop Audio Narration</span>
            </>
          ) : (
            <>
              <Volume2 className="w-5 h-5 text-[#245B45]" />
              <span>Hear Hint Aloud (Speaker)</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
