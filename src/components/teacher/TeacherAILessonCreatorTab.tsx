import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Sparkles,
  BookOpen,
  CheckCircle2,
  Cpu,
  Layers,
  ArrowRight,
  HardDrive,
  RefreshCw,
  Lightbulb,
} from 'lucide-react';
import { SubjectType } from '../../types';

export const TeacherAILessonCreatorTab: React.FC = () => {
  const { createCustomLesson, setTeacherTab } = useApp();

  const [topicInput, setTopicInput] = useState('');
  const [selectedSubject, setSelectedSubject] = useState<SubjectType>('Science');
  const [selectedGrade, setSelectedGrade] = useState('Class 5–6');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPreview, setGeneratedPreview] = useState<any | null>(null);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Pre-configured village topics to test easily
  const quickVillageTopics = [
    {
      title: 'Bamboo Drip Irrigation on Steep Slopes',
      subject: 'Science' as SubjectType,
      grade: 'Class 6',
      contributor: 'Elder Angami Farmers',
      prompt: 'Traditional 200-year-old bamboo drip irrigation that channels hilltop spring water down cliff faces directly to betel leaf crops with zero wastage.',
    },
    {
      title: 'Indigenous Fermentation & Food Preservation',
      subject: 'Science' as SubjectType,
      grade: 'Class 7',
      contributor: 'Grandmother Chubasangla',
      prompt: 'How fermented bamboo shoots (Bas-tenga) and soybeans (Akhuni) preserve protein through winter months using beneficial microbes.',
    },
    {
      title: 'Khonoma Dry Stone Masonry & Friction Angles',
      subject: 'Mathematics' as SubjectType,
      grade: 'Class 5',
      contributor: 'Village Stone Masons',
      prompt: 'How mountain retaining walls stand for centuries without cement mortar by calculating interlocking gravity friction angles.',
    },
  ];

  const handleSelectPreset = (preset: (typeof quickVillageTopics)[0]) => {
    setTopicInput(preset.prompt);
    setSelectedSubject(preset.subject);
    setSelectedGrade(preset.grade);
    simulateGeneration(preset.title, preset.prompt, preset.subject, preset.grade, preset.contributor);
  };

  const handleGenerate = () => {
    if (!topicInput.trim()) return;
    simulateGeneration(
      topicInput.split('.')[0] || 'Mountain Village Learning Experience',
      topicInput,
      selectedSubject,
      selectedGrade,
      'Village Community Knowledge'
    );
  };

  const simulateGeneration = (
    title: string,
    prompt: string,
    subject: SubjectType,
    grade: string,
    contributor: string
  ) => {
    setIsGenerating(true);
    setSaveSuccess(false);

    setTimeout(() => {
      setGeneratedPreview({
        title: title.length > 50 ? title.substring(0, 48) + '...' : title,
        subject,
        grade,
        durationMinutes: 20,
        summary: `Explores how ${prompt.toLowerCase()} connects practical village life to fundamental principles of ${subject}.`,
        isVillageKnowledge: true,
        villageSource: `Derived from ${contributor}`,
        contributorName: contributor,
        steps: [
          {
            stepNumber: 1,
            stepTitle: 'Village Observation & Natural Challenge',
            readingSnippet: `High in the hills, resources must be managed with wisdom. When observing ${title.toLowerCase()}, we see that every local tool is adapted to the slope, water flow, and mountain seasons.`,
            roleInstructions: {
              reader: 'Read the observation paragraph aloud with high energy.',
              solver: 'Identify the two natural forces (like gravity, moisture, or friction) at work.',
              checker: 'Ensure every member agrees on how this helps the village sustain its harvest.',
            },
            groupQuestion: `How does this indigenous practice solve a problem that modern expensive equipment would struggle with?`,
            aiHints: {
              hint1: 'Consider what materials are free and naturally abundant in our mountain forests.',
              guidingQuestion: 'What would happen if the village had to buy and transport heavy machinery up the dirt trail?',
              localConnection: `Our elders designed this using locally harvested bamboo and stones that can be replaced anytime.`,
              discussionPrompt: 'Take turns: Reader defines the physical problem; Solver proposes how the technique works; Checker summarizes the ecological benefit.',
            },
          },
        ],
        quiz: [
          {
            id: `q-gen-${Date.now()}`,
            question: `What makes this traditional technique ideal for remote mountain ecosystems?`,
            options: [
              'It relies entirely on renewable local materials and zero electricity.',
              'It requires buying expensive chemical inputs from the city.',
              'It works only during snowstorms.',
              'It requires individual smartphones for everyone.'
            ],
            correctIndex: 0,
            explanation: 'Indigenous technologies are zero-waste, locally repairable, and harmonize with steep topography.',
            villageInsight: 'Community wisdom provides sustainable engineering solutions.'
          }
        ]
      });
      setIsGenerating(false);
    }, 600);
  };

  const handleSaveToCurriculum = () => {
    if (!generatedPreview) return;
    createCustomLesson(generatedPreview);
    setSaveSuccess(true);
    setTimeout(() => {
      setTeacherTab('resources');
    }, 1200);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E5EFE7] shadow-soft">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5EFE7] text-[#245B45] text-xs font-bold mb-2">
          <Cpu className="w-3.5 h-3.5 text-[#245B45]" />
          <span>Local Open-Source AI Co-Pilot (Simulated)</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          AI Lesson Creator for Teachers
        </h2>
        <p className="text-sm text-slate-600 mt-1 max-w-3xl leading-relaxed">
          Empowering Teacher Maya Devi to translate oral village practices into structured,
          curriculum-aligned collaborative lesson modules with defined student roles and Socratic hints.
          Operates locally on the village laptop without requiring paid APIs or internet.
        </p>

        {/* Quick Suggestion Presets */}
        <div className="mt-6 pt-5 border-t border-slate-100">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
            Try a Village Case Study Preset:
          </span>
          <div className="flex flex-wrap gap-2">
            {quickVillageTopics.map((preset) => (
              <button
                key={preset.title}
                onClick={() => handleSelectPreset(preset)}
                className="text-xs px-3 py-2 rounded-xl bg-[#F8F7F2] hover:bg-[#E5EFE7] text-[#245B45] border border-[#245B45]/20 font-semibold transition-all flex items-center gap-1.5"
              >
                <Lightbulb className="w-3.5 h-3.5 text-[#C87552]" />
                <span>{preset.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Input & Form */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E5EFE7] shadow-soft space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
              Subject Area
            </label>
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value as SubjectType)}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm font-semibold bg-[#F8F7F2] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#245B45]"
            >
              <option value="Science">Science (Ecology / Physics / Botany)</option>
              <option value="Mathematics">Mathematics (Angles / Fractions / Units)</option>
              <option value="English">English (Reading / Storytelling / Vocabulary)</option>
              <option value="Our Community">Our Community (Civics / Heritage / Ecology)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
              Target Level
            </label>
            <select
              value={selectedGrade}
              onChange={(e) => setSelectedGrade(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm font-semibold bg-[#F8F7F2] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#245B45]"
            >
              <option value="Class 5">Class 5 (Introductory Group Learning)</option>
              <option value="Class 6">Class 6 (Intermediate Collaborative)</option>
              <option value="Class 7">Class 7 (Advanced Inquiry & Discussion)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
              Cooperative Dynamic
            </label>
            <div className="px-3 py-2 rounded-xl bg-[#E5EFE7] text-[#245B45] text-xs font-bold flex items-center justify-between">
              <span>3 Roles: Reader, Solver, Checker</span>
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
            Describe the Village Practice, Elder Story, or Natural Phenomenon
          </label>
          <textarea
            rows={3}
            value={topicInput}
            onChange={(e) => setTopicInput(e.target.value)}
            placeholder="e.g. How village grandmothers use wood ash from the hearth to prevent insects on cabbage seedlings..."
            className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-sm bg-[#F8F7F2] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#245B45]"
          />
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleGenerate}
            disabled={!topicInput.trim() || isGenerating}
            className={`px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 transition-all ${
              !topicInput.trim() || isGenerating
                ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                : 'bg-[#245B45] hover:bg-[#1A4333] text-white shadow-md hover:scale-[1.02]'
            }`}
          >
            {isGenerating ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Structuring Pedagogical Scaffolding...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-[#E5EFE7]" />
                <span>Generate LokShala Module</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Generated Lesson Preview */}
      {generatedPreview && (
        <div className="bg-white rounded-3xl border-2 border-[#245B45] p-6 sm:p-8 shadow-card space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#E5EFE7] text-[#245B45] uppercase">
                Generated Module Preview
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-2">
                {generatedPreview.title}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                {generatedPreview.subject} • {generatedPreview.grade} • {generatedPreview.durationMinutes} Minutes • {generatedPreview.villageSource}
              </p>
            </div>

            <button
              onClick={handleSaveToCurriculum}
              disabled={saveSuccess}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all ${
                saveSuccess
                  ? 'bg-emerald-600 text-white'
                  : 'bg-[#C87552] hover:bg-[#B06140] text-white shadow-md hover:scale-[1.02]'
              }`}
            >
              {saveSuccess ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Saved to Local Devices!</span>
                </>
              ) : (
                <>
                  <HardDrive className="w-4 h-4" />
                  <span>Save to Offline Curriculum</span>
                </>
              )}
            </button>
          </div>

          {/* Group Roles Breakdown Preview */}
          <div className="bg-[#F8F7F2] p-5 rounded-2xl border border-slate-200">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              Step 1 Group Role Task Assignment:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-white border border-slate-200">
                <span className="font-bold text-[#245B45] block mb-1">📖 Reader Role:</span>
                <p className="text-slate-600 leading-relaxed">
                  {generatedPreview.steps[0].roleInstructions.reader}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-white border border-slate-200">
                <span className="font-bold text-[#C87552] block mb-1">🧠 Solver Role:</span>
                <p className="text-slate-600 leading-relaxed">
                  {generatedPreview.steps[0].roleInstructions.solver}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-white border border-slate-200">
                <span className="font-bold text-[#366E58] block mb-1">✅ Checker Role:</span>
                <p className="text-slate-600 leading-relaxed">
                  {generatedPreview.steps[0].roleInstructions.checker}
                </p>
              </div>
            </div>
          </div>

          {/* AI Hints Preview (Pedagogical Scaffolding) */}
          <div className="bg-[#E5EFE7]/50 p-5 rounded-2xl border border-[#245B45]/20">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-[#245B45]" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#245B45]">
                AI Scaffolding Engine (Socratic Hints, Not Answers)
              </h4>
            </div>
            <div className="space-y-2 text-xs text-slate-700">
              <p>
                <strong>Hint 1:</strong> {generatedPreview.steps[0].aiHints.hint1}
              </p>
              <p>
                <strong>Guiding Question:</strong>{' '}
                {generatedPreview.steps[0].aiHints.guidingQuestion}
              </p>
              <p>
                <strong>Local Connection:</strong>{' '}
                {generatedPreview.steps[0].aiHints.localConnection}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
