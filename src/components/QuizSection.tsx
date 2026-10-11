import React, { useState } from 'react';
import { QUIZ_QUESTIONS, QuizQuestion } from '../data/tclData';
import { CheckCircle2, XCircle, RotateCcw, ArrowRight, Award, Sparkles } from 'lucide-react';

export const QuizSection: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [quizCompleted, setQuizCompleted] = useState<boolean>(false);

  const question = QUIZ_QUESTIONS[currentQuestionIndex];

  const handleSelectOption = (idx: number) => {
    if (hasSubmitted) return;
    setSelectedOptionIndex(idx);
  };

  const handleSubmitAnswer = () => {
    if (selectedOptionIndex === null) return;
    setHasSubmitted(true);
    if (question.options[selectedOptionIndex].isCorrect) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOptionIndex(null);
      setHasSubmitted(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOptionIndex(null);
    setHasSubmitted(false);
    setScore(0);
    setQuizCompleted(false);
  };

  return (
    <section id="kuis" className="py-16 md:py-24 bg-[#FFF9F4] border-t border-[#F7DDE5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#A94F70] uppercase tracking-wider mb-2">
            <span>🌸 Uji Pemahaman Mandiri</span>
            <span aria-hidden="true">·</span>
            <span>Refleksi Cepat</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2D2226] font-['Outfit']">
            Tes Kepusinganmu: Seberapa Paham Kamu tentang TCL?
          </h2>
          <p className="text-sm text-[#5A454D] mt-2">
            Uji apakah kamu sudah bisa membedakan situasi kelas yang butuh TCL dengan presisi.
          </p>
        </div>

        {!quizCompleted ? (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F7DDE5] shadow-sm relative">
            {/* Top progress indicator */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#F7DDE5]">
              <span className="text-xs font-bold text-[#A94F70]">
                Soal {currentQuestionIndex + 1} dari {QUIZ_QUESTIONS.length}
              </span>
              <span className="text-xs text-[#7A5B67]">
                Konteks: {question.context}
              </span>
            </div>

            {/* Question Text */}
            <h3 className="text-lg sm:text-xl font-bold text-[#2D2226] font-['Outfit'] mb-6 leading-relaxed">
              {question.question}
            </h3>

            {/* Options */}
            <div className="space-y-3 mb-6">
              {question.options.map((opt, idx) => {
                const isSelected = selectedOptionIndex === idx;
                let optionStyle = 'bg-[#FFF9F4] border-[#F7DDE5] text-[#3D2C33] hover:bg-[#FCECF1]';

                if (hasSubmitted) {
                  if (opt.isCorrect) {
                    optionStyle = 'bg-[#E4ECE2] border-[#A9BDA5] text-[#253D22] font-semibold';
                  } else if (isSelected && !opt.isCorrect) {
                    optionStyle = 'bg-[#FCECF1] border-[#A94F70] text-[#A94F70] font-semibold';
                  } else {
                    optionStyle = 'bg-gray-50 border-gray-200 text-gray-400 opacity-60';
                  }
                } else if (isSelected) {
                  optionStyle = 'bg-[#FCECF1] border-[#A94F70] text-[#A94F70] font-semibold shadow-xs';
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    disabled={hasSubmitted}
                    className={`w-full text-left p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 ${optionStyle}`}
                  >
                    <span className="w-6 h-6 rounded-lg bg-white/70 border border-[#D98FA6]/40 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="text-sm leading-relaxed">{opt.text}</span>
                  </button>
                );
              })}
            </div>

            {/* Post-submit explanation */}
            {hasSubmitted && selectedOptionIndex !== null && (
              <div
                className={`p-4 rounded-2xl mb-6 border text-xs leading-relaxed ${
                  question.options[selectedOptionIndex].isCorrect
                    ? 'bg-[#E4ECE2]/80 border-[#A9BDA5] text-[#20361E]'
                    : 'bg-[#FCECF1] border-[#D98FA6] text-[#632239]'
                }`}
              >
                <div className="font-bold mb-1 flex items-center gap-1.5">
                  {question.options[selectedOptionIndex].isCorrect ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-[#4A6346]" />
                      <span>Jawaban Tepat!</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-4 h-4 text-[#A94F70]" />
                      <span>Catatan Pembahasan:</span>
                    </>
                  )}
                </div>
                <p>{question.options[selectedOptionIndex].explanation}</p>
              </div>
            )}

            {/* Bottom Action Buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-[#F7DDE5]">
              <div className="text-xs text-[#7A5B67]">
                Skor sementara:{' '}
                <span className="font-bold text-[#A94F70]">{score}</span>
              </div>

              {!hasSubmitted ? (
                <button
                  onClick={handleSubmitAnswer}
                  disabled={selectedOptionIndex === null}
                  className="px-5 py-2.5 rounded-xl bg-[#A94F70] text-white text-xs font-semibold hover:bg-[#8F3E5C] disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                >
                  Kunci Jawaban
                </button>
              ) : (
                <button
                  onClick={handleNextQuestion}
                  className="px-5 py-2.5 rounded-xl bg-[#A94F70] text-white text-xs font-semibold hover:bg-[#8F3E5C] transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>
                    {currentQuestionIndex < QUIZ_QUESTIONS.length - 1
                      ? 'Lanjut ke Soal Berikutnya'
                      : 'Lihat Hasil Akhir'}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        ) : (
          /* Quiz Results Card */
          <div className="bg-white rounded-3xl p-8 border border-[#F7DDE5] shadow-sm text-center">
            <div className="w-20 h-20 mx-auto mb-4 rounded-3xl bg-[#FCECF1] border border-[#D98FA6] flex items-center justify-center text-3xl">
              {score >= 4 ? '🌸' : score >= 2 ? '🌱' : '🪴'}
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-[#2D2226] font-['Outfit'] mb-2">
              {score === 5
                ? 'Bunga Mekar Sempurna! Paham Total!'
                : score >= 3
                ? 'Mantap! Tinggal Sedikit Lagi Mekar!'
                : 'Masih Agak Pusing? Wajar Banget!'}
            </h3>

            <p className="text-sm text-[#5A454D] max-w-md mx-auto mb-6">
              Kamu berhasil menjawab <strong>{score} dari {QUIZ_QUESTIONS.length}</strong> pertanyaan dengan tepat.
              {score >= 4
                ? ' Kamu sudah mampu membedakan pendekatan, strategi, dan penerapan TCL di lapangan nyata.'
                : ' Belajar pedagogi memang butuh waktu berulang kali mencermati contoh konkret.'}
            </p>

            <button
              onClick={handleRestartQuiz}
              className="px-6 py-3 rounded-xl bg-[#A94F70] text-white font-semibold text-xs hover:bg-[#8F3E5C] transition-colors cursor-pointer inline-flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Ulangi Kuis Dari Awal</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
