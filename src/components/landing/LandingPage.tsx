import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  GraduationCap,
  Users,
  WifiOff,
  Sparkles,
  BookOpen,
  Compass,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  HardDrive,
  Cpu,
  Layers,
  HeartHandshake,
} from 'lucide-react';

export const LandingPage: React.FC = () => {
  const { setCurrentView, isOffline, toggleOfflineMode } = useApp();

  return (
    <div className="min-h-screen bg-[#F8F7F2] pb-16">
      {/* Top Notice Bar */}
      <div className="bg-[#245B45] text-white text-xs py-2 px-4 text-center flex items-center justify-center gap-2 flex-wrap border-b border-[#366E58]">
        <span className="bg-[#E5EFE7] text-[#245B45] font-bold px-2 py-0.5 rounded-full text-[10px] uppercase">
          Product Management Competition Prototype
        </span>
        <span>
          Designed for remote mountain villages in Northeast India • Offline-First • Shared-Device Architecture
        </span>
        <button
          onClick={toggleOfflineMode}
          className="underline ml-2 hover:text-[#E5EFE7] font-semibold"
        >
          {isOffline ? 'Currently Offline (Click to go Online)' : 'Currently Online (Click to test Offline Mode)'}
        </button>
      </div>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 pt-12 sm:pt-16 pb-12 text-center">
        {/* Emblem */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E5EFE7] border border-[#245B45]/20 text-[#245B45] font-semibold text-xs sm:text-sm mb-6 shadow-xs">
          <Sparkles className="w-4 h-4 text-[#C87552]" />
          <span>LokShala • A Community-Powered Educational Ecosystem</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15] max-w-4xl mx-auto">
          Where the community <br className="hidden sm:inline" />
          <span className="text-[#245B45]">becomes the classroom.</span>
        </h1>

        <p className="mt-5 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Bridging the digital divide for remote mountain villages. Empowering teachers,
          enabling shared-device peer groups, and turning indigenous elder wisdom into
          structured, interactive learning.
        </p>

        {/* The Two Main Action Paths */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Path A: Teacher Dashboard */}
          <div
            onClick={() => setCurrentView('teacher')}
            className="group relative bg-white p-8 rounded-3xl border-2 border-[#E5EFE7] hover:border-[#245B45] shadow-card hover:shadow-xl transition-all duration-300 text-left cursor-pointer flex flex-col justify-between"
          >
            <div className="absolute top-6 right-6 w-10 h-10 rounded-2xl bg-[#E5EFE7] text-[#245B45] flex items-center justify-center group-hover:bg-[#245B45] group-hover:text-white transition-colors">
              <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </div>

            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#245B45] text-white flex items-center justify-center mb-6 shadow-md shadow-[#245B45]/25">
                <GraduationCap className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#245B45] bg-[#E5EFE7] px-2.5 py-1 rounded-md">
                Desktop-First Interface
              </span>
              <h2 className="text-2xl font-bold text-slate-900 mt-3 group-hover:text-[#245B45] transition-colors">
                Enter Teacher Dashboard
              </h2>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                For single laptop classrooms. Manage student groups, convert elder stories into lessons, monitor struggling students, and manage offline sync.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#245B45]">
              <span>Teacher Maya Devi's Hub</span>
              <span className="group-hover:translate-x-1 transition-transform flex items-center gap-1">
                Launch Dashboard →
              </span>
            </div>
          </div>

          {/* Path B: Student Learning */}
          <div
            onClick={() => setCurrentView('student-group-select')}
            className="group relative bg-white p-8 rounded-3xl border-2 border-[#E5EFE7] hover:border-[#C87552] shadow-card hover:shadow-xl transition-all duration-300 text-left cursor-pointer flex flex-col justify-between"
          >
            <div className="absolute top-6 right-6 w-10 h-10 rounded-2xl bg-[#F8F7F2] text-[#C87552] flex items-center justify-center group-hover:bg-[#C87552] group-hover:text-white transition-colors">
              <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </div>

            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#C87552] text-white flex items-center justify-center mb-6 shadow-md shadow-[#C87552]/25">
                <Users className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#C87552] bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                Shared-Device Experience
              </span>
              <h2 className="text-2xl font-bold text-slate-900 mt-3 group-hover:text-[#C87552] transition-colors">
                Enter Student Learning
              </h2>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Designed for 3–5 children sharing a single tablet. Choose your village group, take turns as Reader, Solver, and Checker, and explore localized lessons.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#C87552]">
              <span>"One device. Learn together. Take turns."</span>
              <span className="group-hover:translate-x-1 transition-transform flex items-center gap-1">
                Start Session →
              </span>
            </div>
          </div>
        </div>

        {/* Offline Indicator Quick Info */}
        <div className="mt-8 flex items-center justify-center gap-3">
          <div
            onClick={toggleOfflineMode}
            className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl cursor-pointer border text-xs font-medium transition-all ${
              isOffline
                ? 'bg-amber-100/80 border-amber-300 text-amber-900 shadow-sm'
                : 'bg-white border-[#E5EFE7] text-slate-600 hover:border-[#245B45]'
            }`}
          >
            {isOffline ? (
              <WifiOff className="w-4 h-4 text-amber-700" />
            ) : (
              <HardDrive className="w-4 h-4 text-[#245B45]" />
            )}
            <span>
              Network Status:{' '}
              <strong className={isOffline ? 'text-amber-800' : 'text-[#245B45]'}>
                {isOffline ? 'Offline Mode (Local Storage)' : 'Village Mesh Connected'}
              </strong>
            </span>
            <span className="text-[11px] underline text-slate-500 hover:text-slate-900">
              [Click to toggle]
            </span>
          </div>
        </div>
      </section>

      {/* Core Product Principles Cards */}
      <section className="max-w-6xl mx-auto px-4 mt-8">
        <div className="text-center mb-8">
          <h2 className="text-xs font-bold uppercase tracking-wider text-[#245B45]">
            Product Architecture & Village Constraints
          </h2>
          <h3 className="text-2xl font-bold text-slate-900 mt-1">
            Built Around 6 Foundational Principles
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* 1 */}
          <div className="bg-white p-6 rounded-2xl border border-[#E5EFE7] shadow-soft flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#E5EFE7] text-[#245B45] flex items-center justify-center mb-4">
                <WifiOff className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">1. Offline-First Reality</h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Mountain valleys have spotty cellular signal. LokShala pre-caches rich media,
                audio hints, and lessons into local browser storage. Zero constant internet required.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-[#245B45] font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Full LocalStorage Sync</span>
            </div>
          </div>

          {/* 2 */}
          <div className="bg-white p-6 rounded-2xl border border-[#E5EFE7] shadow-soft flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#F8F7F2] text-[#C87552] flex items-center justify-center mb-4 border border-[#C87552]/20">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">2. Shared-Device Learning</h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                One tablet for 4 children. The software enforces healthy social rotation with
                explicit assigned roles: <strong>Reader</strong>, <strong>Solver</strong>, and <strong>Checker</strong>.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-[#C87552] font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Social Accountability Engine</span>
            </div>
          </div>

          {/* 3 */}
          <div className="bg-white p-6 rounded-2xl border border-[#E5EFE7] shadow-soft flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#E5EFE7] text-[#245B45] flex items-center justify-center mb-4">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">3. Teacher-Led Empowerment</h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Technology serves Maya Devi (the teacher), never replaces her. She tracks
                struggling students, assigns activities, and controls content distribution.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-[#245B45] font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Single-Laptop Teacher Hub</span>
            </div>
          </div>

          {/* 4 */}
          <div className="bg-white p-6 rounded-2xl border border-[#E5EFE7] shadow-soft flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#F8F7F2] text-[#245B45] flex items-center justify-center mb-4 border border-[#245B45]/20">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">4. Community Knowledge Hub</h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Elder wisdom on terrace farming, alder trees, basket geometry, and medicinal herbs
                is documented and transformed into accredited curricular science and math.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-[#245B45] font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Oral Archive to Lesson Converter</span>
            </div>
          </div>

          {/* 5 */}
          <div className="bg-white p-6 rounded-2xl border border-[#E5EFE7] shadow-soft flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#C87552] flex items-center justify-center mb-4 border border-[#C87552]/20">
                <Cpu className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">5. Pedagogical AI Hints</h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                No direct copy-paste answers! The simulated AI provides Socratic hints,
                guiding questions, and connects problems to local farming to spark group debates.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-[#C87552] font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Socratic Scaffolding + Audio</span>
            </div>
          </div>

          {/* 6 */}
          <div className="bg-white p-6 rounded-2xl border border-[#E5EFE7] shadow-soft flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#E5EFE7] text-[#245B45] flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">6. Simplicity & Dignity</h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                No expensive proprietary cloud fees, no individual child logins required,
                no ad tracking. Large touch targets, high contrast, and warm organic aesthetics.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-[#245B45] font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Open & Accessible Architecture</span>
            </div>
          </div>
        </div>
      </section>

      {/* Case Competition Presentation Context Callout */}
      <section className="max-w-4xl mx-auto px-4 mt-12">
        <div className="bg-[#E5EFE7]/70 border border-[#245B45]/30 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
          <div className="w-14 h-14 rounded-2xl bg-[#245B45] text-white flex items-center justify-center shrink-0">
            <Layers className="w-7 h-7" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-[#245B45]">
              Product Management Competition Note
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
              This prototype provides visual and interactive proof of concept for our 9–10 slide pitch.
              Test the <strong>Teacher Dashboard</strong> to see how Maya Devi creates lessons and monitors students,
              or jump into <strong>Student Learning (Group A)</strong> to see the rotating role system and localized AI hints in action.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
