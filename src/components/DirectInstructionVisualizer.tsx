import React, { useState, useEffect } from 'react';
import { DIRECT_INSTRUCTION_STEPS, DirectInstructionStep } from '../data/tclData';
import { Play, Pause, RotateCcw, ChevronLeft, ChevronRight, Clock, MessageSquare, Sparkles } from 'lucide-react';

export const DirectInstructionVisualizer: React.FC = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const currentStep = DIRECT_INSTRUCTION_STEPS[currentStepIndex];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setTimeout(() => {
        if (currentStepIndex < DIRECT_INSTRUCTION_STEPS.length - 1) {
          setCurrentStepIndex((prev) => prev + 1);
        } else {
          setIsPlaying(false);
        }
      }, 4000);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, currentStepIndex]);

  const handleNext = () => {
    if (currentStepIndex < DIRECT_INSTRUCTION_STEPS.length - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentStepIndex(0);
  };

  return (
    <section id="direct-instruction" className="py-16 md:py-24 bg-[#FCECF1]/40 border-t border-[#F7DDE5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#A94F70] uppercase tracking-wider mb-2">
            <span>🌸 Modul 02</span>
            <span aria-hidden="true">·</span>
            <span>Strategi Andalan TCL</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2D2226] font-['Outfit']">
            Sintaks Direct Instruction (6 Langkah Terarah)
          </h2>
          <p className="text-base text-[#5A454D] mt-3">
            Direct Instruction bukan sekadar guru bicara 2 jam nonstop! Ada alur ilmiah dari <strong>I Do</strong> (guru mendemonstrasikan), <strong>We Do</strong> (berlatih bersama), hingga <strong>You Do</strong> (murid mandiri).
          </p>
        </div>

        {/* Step Progression Bar */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F7DDE5] shadow-sm mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6 pb-6 border-b border-[#F7DDE5]">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-xl bg-[#FCECF1] text-[#A94F70] font-bold flex items-center justify-center font-mono">
                0{currentStep.step}
              </span>
              <div>
                <h3 className="text-lg font-bold text-[#2D2226]">
                  {currentStep.title}
                </h3>
                <span className="text-xs text-[#7A5B67] italic">
                  {currentStep.englishName}
                </span>
              </div>
            </div>

            {/* Interactive Player Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                disabled={currentStepIndex === 0}
                className="p-2.5 rounded-xl border border-[#F7DDE5] text-[#5A454D] hover:bg-[#FCECF1] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
                title="Langkah Sebelumnya"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="px-4 py-2.5 rounded-xl bg-[#A94F70] text-white font-semibold text-xs flex items-center gap-2 hover:bg-[#8F3E5C] cursor-pointer transition-colors shadow-sm"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                <span>{isPlaying ? 'Jeda Simulasi' : 'Putar Otomatis'}</span>
              </button>

              <button
                onClick={handleNext}
                disabled={currentStepIndex === DIRECT_INSTRUCTION_STEPS.length - 1}
                className="p-2.5 rounded-xl border border-[#F7DDE5] text-[#5A454D] hover:bg-[#FCECF1] disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
                title="Langkah Selanjutnya"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleReset}
                className="p-2.5 rounded-xl border border-[#F7DDE5] text-[#5A454D] hover:bg-[#FCECF1] cursor-pointer transition-colors"
                title="Mulai Dari Awal"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Stepper Navigation Dots */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-8">
            {DIRECT_INSTRUCTION_STEPS.map((step, idx) => {
              const isActive = idx === currentStepIndex;
              const isPassed = idx < currentStepIndex;
              return (
                <button
                  key={step.step}
                  onClick={() => {
                    setIsPlaying(false);
                    setCurrentStepIndex(idx);
                  }}
                  className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#FCECF1] border-[#A94F70] text-[#A94F70] shadow-xs'
                      : isPassed
                      ? 'bg-[#FFF9F4] border-[#A9BDA5] text-[#4A6346]'
                      : 'bg-[#FFF9F4] border-[#F7DDE5] text-[#7A5B67] hover:bg-[#FCECF1]/50'
                  }`}
                >
                  <div className="text-[11px] font-mono font-bold flex items-center justify-between mb-1">
                    <span>Langkah {step.step}</span>
                    <span>{isPassed ? '✓' : isActive ? '🌸' : '○'}</span>
                  </div>
                  <div className="text-xs font-semibold truncate text-[#2D2226]">
                    {step.title.split('&')[0]}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Step Detail Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left 7 cols: Teacher & Student Dynamics */}
            <div className="lg:col-span-7 space-y-4">
              <div className="p-4 rounded-2xl bg-[#FFF9F4] border border-[#F7DDE5]">
                <div className="flex items-center justify-between text-xs font-bold text-[#A94F70] mb-2">
                  <span>Peran & Tindakan Guru (Teacher Actions)</span>
                  <span className="flex items-center gap-1 text-[#7A5B67]">
                    <Clock className="w-3.5 h-3.5" />
                    {currentStep.durationEst}
                  </span>
                </div>
                <p className="text-sm text-[#3D2C33] leading-relaxed">
                  {currentStep.teacherAction}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FFF9F4] border border-[#F7DDE5]">
                <div className="text-xs font-bold text-[#6C8267] mb-2">
                  <span>Aksi Peserta Didik (Student Actions)</span>
                </div>
                <p className="text-sm text-[#3D2C33] leading-relaxed">
                  {currentStep.studentAction}
                </p>
              </div>
            </div>

            {/* Right 5 cols: Classroom Scenario & Pro-Tip */}
            <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
              <div className="p-5 rounded-2xl bg-[#FCECF1]/70 border border-[#D98FA6]/50">
                <div className="flex items-center gap-2 text-xs font-bold text-[#A94F70] mb-2">
                  <MessageSquare className="w-4 h-4 text-[#A94F70]" />
                  <span>Contoh Kalimat / Suasana Nyata di Kelas</span>
                </div>
                <blockquote className="text-xs text-[#5A454D] italic leading-relaxed border-l-2 border-[#D98FA6] pl-3 py-1">
                  {currentStep.exampleScenario}
                </blockquote>
              </div>

              <div className="p-4 rounded-2xl bg-[#E9E1F5]/60 border border-[#D98FA6]/30">
                <div className="flex items-center gap-2 text-xs font-bold text-[#6F4882] mb-1">
                  <Sparkles className="w-4 h-4 text-[#6F4882]" />
                  <span>Tips Anti-Pusing untuk Guru</span>
                </div>
                <p className="text-xs text-[#4E395A] leading-relaxed">
                  {currentStep.proTip}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
