import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  BookOpen,
  CheckCircle2,
  HelpCircle,
  Star,
  Award,
  Volume2,
  RefreshCw,
  HardDrive,
} from 'lucide-react';
import { RotatingRolesBar } from './RotatingRolesBar';
import { AIAssistantWidget } from './AIAssistantWidget';
import { OfflineBadge } from '../common/OfflineBadge';

export const LessonViewer: React.FC = () => {
  const {
    activeLesson,
    closeActiveLesson,
    selectedGroup,
    awardGroupStars,
    markLessonComplete,
  } = useApp();

  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [lessonFinished, setLessonFinished] = useState(false);

  if (!activeLesson) return null;

  const steps = activeLesson.steps;
  const currentStep = steps[currentStepIndex];
  const quizQuestions = activeLesson.quiz || [];
  const currentQuestion = quizQuestions[currentQuizIndex];

  const handleNextStep = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    } else if (quizQuestions.length > 0) {
      setShowQuiz(true);
    } else {
      handleFinishLesson();
    }
  };

  const handlePrevStep = () => {
    if (showQuiz) {
      setShowQuiz(false);
    } else if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

  const handleSubmitQuizAnswer = () => {
    if (selectedOption === null) return;
    setIsAnswerSubmitted(true);

    if (selectedOption === currentQuestion.correctIndex && selectedGroup) {
      awardGroupStars(selectedGroup.id, 5);
    }
  };

  const handleNextQuizQuestion = () => {
    setSelectedOption(null);
    setIsAnswerSubmitted(false);

    if (currentQuizIndex < quizQuestions.length - 1) {
      setCurrentQuizIndex((prev) => prev + 1);
    } else {
      handleFinishLesson();
    }
  };

  const handleFinishLesson = () => {
    setLessonFinished(true);
    if (selectedGroup) {
      markLessonComplete(selectedGroup.id, activeLesson.id);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-20 animate-fade-in">
      {/* Top Bar Navigation */}
      <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-[#E5EFE7] shadow-xs">
        <button
          onClick={closeActiveLesson}
          className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-600 hover:text-[#245B45] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Exit to Group Dashboard</span>
        </button>

        <div className="flex items-center gap-2">
          <OfflineBadge isDownloaded={activeLesson.isDownloadedOffline} />
          <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-[#F8F7F2] text-[#245B45]">
            {activeLesson.subject} • {activeLesson.grade}
          </span>
        </div>
      </div>

      {/* Rotating Roles Bar for Shared Tablet Accountability */}
      <RotatingRolesBar />

      {!lessonFinished ? (
        <>
          {/* Main Content Card */}
          {!showQuiz && currentStep ? (
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5EFE7] shadow-soft space-y-6">
              {/* Step Title Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#C87552]">
                    Step {currentStep.stepNumber} of {steps.length}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                    {currentStep.stepTitle}
                  </h2>
                </div>

                <div className="text-xs font-bold text-slate-500 bg-[#F8F7F2] px-3 py-1.5 rounded-xl border border-slate-200">
                  {activeLesson.title}
                </div>
              </div>

              {/* Reading Snippet */}
              <div className="p-6 rounded-2xl bg-[#F8F7F2] border border-slate-200">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#245B45] block mb-2">
                  📖 Reader Turn: Read aloud with clear mountain voice:
                </span>
                <p className="text-base sm:text-lg font-medium text-slate-800 leading-relaxed">
                  "{currentStep.readingSnippet}"
                </p>
              </div>

              {/* Role Checkpoints Grid */}
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                  Group Responsibilities For This Paragraph:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-[#E5EFE7]/50 border border-[#245B45]/20">
                    <span className="font-bold text-[#245B45] block mb-1">
                      📖 Reader:
                    </span>
                    <p className="text-slate-700">{currentStep.roleInstructions.reader}</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200">
                    <span className="font-bold text-[#C87552] block mb-1">
                      🧠 Solver:
                    </span>
                    <p className="text-slate-700">{currentStep.roleInstructions.solver}</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200">
                    <span className="font-bold text-emerald-800 block mb-1">
                      ✅ Checker:
                    </span>
                    <p className="text-slate-700">{currentStep.roleInstructions.checker}</p>
                  </div>
                </div>
              </div>

              {/* AI Socratic Assistant Widget */}
              <AIAssistantWidget
                question={currentStep.groupQuestion}
                hints={currentStep.aiHints}
              />

              {/* Step Navigation Controls */}
              <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                <button
                  onClick={handlePrevStep}
                  disabled={currentStepIndex === 0}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-colors ${
                    currentStepIndex === 0
                      ? 'text-slate-300 cursor-not-allowed'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Previous Step</span>
                </button>

                <button
                  onClick={handleNextStep}
                  className="px-6 py-3 rounded-2xl bg-[#245B45] hover:bg-[#1A4333] text-white font-extrabold text-sm sm:text-base flex items-center gap-2 shadow-md transition-all hover:scale-[1.02]"
                >
                  <span>
                    {currentStepIndex === steps.length - 1
                      ? 'Proceed to Cooperative Quiz →'
                      : 'Next Step →'}
                  </span>
                </button>
              </div>
            </div>
          ) : (
            /* Formative Collaborative Quiz Screen */
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5EFE7] shadow-soft space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#C87552]">
                    Group Checkpoint • Question {currentQuizIndex + 1} of{' '}
                    {quizQuestions.length}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                    Collaborative Team Challenge
                  </h3>
                </div>

                <div className="flex items-center gap-1 text-xs font-bold text-[#C87552] bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                  <Star className="w-4 h-4 fill-[#C87552]" />
                  <span>+5 Stars each correct answer</span>
                </div>
              </div>

              {/* Turn Rule Reminder for Quiz */}
              <div className="p-3.5 rounded-xl bg-[#E5EFE7]/60 border border-[#245B45]/20 text-xs text-slate-700">
                <strong>Shared Tablet Rule:</strong> Reader reads choices aloud. Solver defends
                the choice. Checker confirms group consensus before tapping.
              </div>

              {/* Question Text */}
              <div className="p-5 rounded-2xl bg-[#F8F7F2] border border-slate-200">
                <p className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                  {currentQuestion?.question}
                </p>
              </div>

              {/* Options */}
              <div className="space-y-3">
                {currentQuestion?.options.map((option, idx) => {
                  const isSelected = selectedOption === idx;
                  const isCorrect = idx === currentQuestion.correctIndex;

                  let optionStyle =
                    'bg-white border-slate-200 hover:border-[#245B45] hover:bg-[#F8F7F2] text-slate-800';

                  if (isAnswerSubmitted) {
                    if (isCorrect) {
                      optionStyle =
                        'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold';
                    } else if (isSelected) {
                      optionStyle = 'bg-rose-50 border-rose-400 text-rose-950';
                    } else {
                      optionStyle = 'bg-white border-slate-100 opacity-50';
                    }
                  } else if (isSelected) {
                    optionStyle =
                      'bg-[#E5EFE7] border-[#245B45] ring-2 ring-[#245B45] font-bold text-[#245B45]';
                  }

                  return (
                    <button
                      key={idx}
                      disabled={isAnswerSubmitted}
                      onClick={() => setSelectedOption(idx)}
                      className={`w-full p-4 rounded-2xl border-2 text-left text-sm sm:text-base transition-all flex items-center justify-between gap-3 ${optionStyle}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center font-bold text-xs shrink-0">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span>{option}</span>
                      </div>

                      {isAnswerSubmitted && isCorrect && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation & Local Village Insight (After Submission) */}
              {isAnswerSubmitted && (
                <div className="p-5 rounded-2xl bg-[#E5EFE7]/50 border border-[#245B45]/20 text-xs sm:text-sm space-y-2 animate-fade-in">
                  <div className="font-extrabold text-[#245B45] flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Scientific & Village Explanation:</span>
                  </div>
                  <p className="text-slate-700">{currentQuestion?.explanation}</p>
                  <p className="text-xs text-[#C87552] font-semibold italic pt-2 border-t border-[#245B45]/15">
                    💡 Village Elder Insight: {currentQuestion?.villageInsight}
                  </p>
                </div>
              )}

              {/* Quiz Action Buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <button
                  onClick={handlePrevStep}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-100"
                >
                  Review Lesson Notes
                </button>

                {!isAnswerSubmitted ? (
                  <button
                    onClick={handleSubmitQuizAnswer}
                    disabled={selectedOption === null}
                    className={`px-6 py-3 rounded-2xl font-bold text-sm sm:text-base transition-all ${
                      selectedOption === null
                        ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                        : 'bg-[#245B45] hover:bg-[#1A4333] text-white shadow-md hover:scale-[1.02]'
                    }`}
                  >
                    Confirm Group Answer
                  </button>
                ) : (
                  <button
                    onClick={handleNextQuizQuestion}
                    className="px-6 py-3 rounded-2xl bg-[#C87552] hover:bg-[#B06140] text-white font-bold text-sm sm:text-base flex items-center gap-2 shadow-md hover:scale-[1.02]"
                  >
                    <span>
                      {currentQuizIndex < quizQuestions.length - 1
                        ? 'Next Challenge Question →'
                        : 'Complete Session 🎉'}
                    </span>
                  </button>
                )}
              </div>
            </div>
          )}
        </>
      ) : (
        /* Completion Celebration Screen */
        <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-[#245B45] shadow-xl text-center space-y-6">
          <div className="w-20 h-20 rounded-3xl bg-[#E5EFE7] text-[#245B45] flex items-center justify-center mx-auto shadow-md">
            <Award className="w-10 h-10" />
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#C87552]">
              Shared Pod Success!
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2">
              Outstanding Work, {selectedGroup?.name}!
            </h2>
            <p className="text-slate-600 mt-2 max-w-lg mx-auto text-sm sm:text-base">
              You worked together as Reader, Solver, and Checker to master{' '}
              <strong>"{activeLesson.title}"</strong> and unlocked 10 village wisdom stars.
            </p>
          </div>

          <div className="inline-flex items-center gap-3 bg-amber-50 border border-amber-200 px-6 py-3 rounded-2xl text-amber-900 font-extrabold text-lg">
            <Star className="w-6 h-6 fill-[#C87552] text-[#C87552]" />
            <span>+10 Stars Added to {selectedGroup?.name}</span>
          </div>

          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={closeActiveLesson}
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-[#245B45] hover:bg-[#1A4333] text-white font-extrabold text-base shadow-md transition-all hover:scale-105"
            >
              Return to Group Learning Hub
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
