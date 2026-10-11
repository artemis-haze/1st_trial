import React, { useState } from 'react';
import { TCL_HIERARCHY, HierarchyLevel } from '../data/tclData';
import { Compass, Map, Layers, Sparkles, Smile, Lightbulb, ChevronRight, Check } from 'lucide-react';

export const HierarchyExplorer: React.FC = () => {
  const [selectedLevelId, setSelectedLevelId] = useState<string>('approach');
  const [drillAnswer, setDrillAnswer] = useState<string | null>(null);

  const activeLevel = TCL_HIERARCHY.find((item) => item.id === selectedLevelId) || TCL_HIERARCHY[0];

  const getIcon = (name: string) => {
    switch (name) {
      case 'Compass':
        return <Compass className="w-5 h-5" />;
      case 'Map':
        return <Map className="w-5 h-5" />;
      case 'Layers':
        return <Layers className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'Smile':
        return <Smile className="w-5 h-5" />;
      default:
        return <Compass className="w-5 h-5" />;
    }
  };

  return (
    <section id="hierarki" className="py-16 md:py-24 bg-[#FFF9F4] border-t border-[#F7DDE5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#A94F70] uppercase tracking-wider mb-2">
            <span>🌸 Modul 01</span>
            <span aria-hidden="true">·</span>
            <span>Konsep Kunci Pedagogi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2D2226] font-['Outfit']">
            Hierarki Pedagogis: Jangan Salah Sebut Lagi!
          </h2>
          <p className="text-base text-[#5A454D] mt-3">
            Banyak mahasiswa keguguran poin saat ujian gara-gara menyamakan istilah <em>Strategi</em> dan <em>Metode</em>. Mari kita petakan dari yang paling luas (filosofis) hingga yang paling personal di kelas.
          </p>
        </div>

        {/* Interactive Layout: Left Pyramid Steps, Right Deep-Dive Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Stacked Stepper Navigation */}
          <div className="lg:col-span-5 space-y-3">
            <div className="bg-[#FCECF1]/70 p-4 rounded-2xl border border-[#F7DDE5] mb-4 text-xs text-[#7A5B67] flex items-center justify-between">
              <span>Tingkat Filosofis / Luas (Atas)</span>
              <span>↓ Menuju Aksi Personal di Kelas</span>
            </div>

            {TCL_HIERARCHY.map((level, index) => {
              const isSelected = level.id === selectedLevelId;
              return (
                <button
                  key={level.id}
                  onClick={() => setSelectedLevelId(level.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-white border-[#A94F70] shadow-sm translate-x-1.5'
                      : 'bg-[#FFF9F4] border-[#F7DDE5] hover:bg-white hover:border-[#D98FA6]'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-[#A94F70] text-white'
                          : 'bg-[#FCECF1] text-[#A94F70]'
                      }`}
                    >
                      {getIcon(level.iconName)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-[#A94F70]">
                          Tingkat {index + 1}
                        </span>
                        <span className="text-[11px] text-[#7A5B67] italic">
                          ({level.englishTerm})
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-[#2D2226]">
                        {level.name}
                      </h3>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 transition-transform ${
                      isSelected ? 'text-[#A94F70] translate-x-1' : 'text-[#D98FA6]/50'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Level Detail Card (Stationery Notebook Style) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F7DDE5] shadow-sm relative overflow-hidden">
              {/* Paper line decorative top bar */}
              <div className="flex items-center justify-between border-b border-[#F7DDE5] pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#A94F70]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#A94F70]">
                    Tingkat {activeLevel.tier} dari 5 · {activeLevel.englishTerm}
                  </span>
                </div>
                <span className="text-xs text-[#7A5B67] bg-[#FCECF1] px-3 py-1 rounded-full font-medium">
                  Pedagogical Framework
                </span>
              </div>

              {/* Title & English term */}
              <div className="mb-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#2D2226] font-['Outfit']">
                  {activeLevel.name}
                </h3>
                <p className="text-xs text-[#7A5B67] mt-1">
                  Istilah Akademik: <span className="font-semibold text-[#A94F70]">{activeLevel.englishTerm}</span>
                </p>
              </div>

              {/* Definition */}
              <div className="mb-6 p-4 rounded-2xl bg-[#FFF9F4] border border-[#F7DDE5]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#A94F70] mb-1">
                  Definisi Sederhana
                </h4>
                <p className="text-sm text-[#3D2C33] leading-relaxed">
                  {activeLevel.definition}
                </p>
              </div>

              {/* Analogy & Example Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-2xl bg-[#FCECF1]/70 border border-[#F7DDE5]">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#A94F70] mb-2">
                    <Lightbulb className="w-4 h-4 text-[#A94F70]" />
                    <span>Analogi Sehari-hari</span>
                  </div>
                  <p className="text-xs text-[#5A454D] leading-relaxed">
                    {activeLevel.analogy}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#E9E1F5]/50 border border-[#D98FA6]/30">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#7A4F8F] mb-2">
                    <Sparkles className="w-4 h-4 text-[#7A4F8F]" />
                    <span>Contoh di Kelas TCL</span>
                  </div>
                  <p className="text-xs text-[#4F3C55] leading-relaxed">
                    {activeLevel.example}
                  </p>
                </div>
              </div>

              {/* Interactive Mini-Drill to Test Retention */}
              <div className="pt-4 border-t border-[#F7DDE5]">
                <div className="text-xs font-bold text-[#2D2226] mb-2 flex items-center justify-between">
                  <span>💡 Cek Pemahaman Kilat:</span>
                  {drillAnswer && (
                    <span className="text-[11px] text-[#A94F70] font-medium">
                      Sudah terjawab
                    </span>
                  )}
                </div>
                <p className="text-xs text-[#5A454D] mb-3">
                  "Guru menyelipkan senyum ramah dan intonasi lembut saat siswa tampak tegang." Ini masuk kategori apa?
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Pendekatan', 'Strategi', 'Metode', 'Taktik'].map((option) => (
                    <button
                      key={option}
                      onClick={() => setDrillAnswer(option)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-colors cursor-pointer ${
                        drillAnswer === option
                          ? option === 'Taktik'
                            ? 'bg-[#A9BDA5] text-[#243B21] font-bold'
                            : 'bg-[#F7DDE5] text-[#A94F70]'
                          : 'bg-[#FFF9F4] border border-[#F7DDE5] text-[#5A454D] hover:bg-[#FCECF1]'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                {drillAnswer && (
                  <div className="mt-3 text-xs p-3 rounded-xl bg-[#FFF9F4] border border-[#F7DDE5] text-[#5A454D]">
                    {drillAnswer === 'Taktik' ? (
                      <span className="text-[#3A5C34] font-semibold flex items-center gap-1.5">
                        <Check className="w-4 h-4" />
                        Tepat sekali! Senyum, intonasi, dan kehangatan personal guru adalah <strong>Taktik</strong>.
                      </span>
                    ) : (
                      <span className="text-[#A94F70]">
                        Kurang pas! Pilihan kamu ({drillAnswer}) bersifat lebih struktural/prosedural. Sikap personal guru di depan kelas adalah <strong>Taktik</strong>.
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
