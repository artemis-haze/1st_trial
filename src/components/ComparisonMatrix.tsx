import React, { useState } from 'react';
import { TCL_VS_SCL_COMPARISON, ComparisonPoint } from '../data/tclData';
import { ArrowLeftRight, CheckCircle2, AlertTriangle, ShieldCheck, HelpCircle } from 'lucide-react';

export const ComparisonMatrix: React.FC = () => {
  const [activeAspectIndex, setActiveAspectIndex] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'card' | 'table'>('card');

  const selectedPoint = TCL_VS_SCL_COMPARISON[activeAspectIndex];

  return (
    <section id="komparasi" className="py-16 md:py-24 bg-[#FFF9F4] border-t border-[#F7DDE5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#A94F70] uppercase tracking-wider mb-2">
            <span>🌸 Modul 03</span>
            <span aria-hidden="true">·</span>
            <span>Analisis Komparatif</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2D2226] font-['Outfit']">
            TCL vs SCL: Kapan Harus Pakai yang Mana?
          </h2>
          <p className="text-base text-[#5A454D] mt-3">
            Sering ada mitos bahwa TCL itu "jadul" dan SCL itu "sempurna". Padahal dalam pedagogi nyata, guru yang hebat tahu persis kapan harus memimpin instruksi (TCL) dan kapan harus melepas siswa bereksplorasi (SCL).
          </p>

          {/* View mode toggle */}
          <div className="mt-6 inline-flex p-1 bg-[#FCECF1] rounded-xl border border-[#F7DDE5]">
            <button
              onClick={() => setViewMode('card')}
              className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                viewMode === 'card'
                  ? 'bg-white text-[#A94F70] shadow-xs'
                  : 'text-[#6B515B] hover:text-[#A94F70]'
              }`}
            >
              Mode Kartu Sorot
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                viewMode === 'table'
                  ? 'bg-white text-[#A94F70] shadow-xs'
                  : 'text-[#6B515B] hover:text-[#A94F70]'
              }`}
            >
              Mode Tabel Lengkap
            </button>
          </div>
        </div>

        {viewMode === 'card' ? (
          <div>
            {/* Aspect Selector Tabs */}
            <div className="flex flex-wrap gap-2 justify-center mb-8">
              {TCL_VS_SCL_COMPARISON.map((item, index) => (
                <button
                  key={item.aspect}
                  onClick={() => setActiveAspectIndex(index)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    activeAspectIndex === index
                      ? 'bg-[#A94F70] text-white shadow-xs'
                      : 'bg-white border border-[#F7DDE5] text-[#5A454D] hover:bg-[#FCECF1]'
                  }`}
                >
                  {item.aspect.split('(')[0].trim()}
                </button>
              ))}
            </div>

            {/* Side-by-Side Dual Comparison Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#F7DDE5] shadow-sm">
              <div className="text-center pb-6 border-b border-[#F7DDE5] mb-6">
                <span className="text-xs font-bold text-[#A94F70] uppercase tracking-wider">
                  Aspek yang Dibahas
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#2D2226] font-['Outfit'] mt-1">
                  {selectedPoint.aspect}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* TCL Card */}
                <div className="p-5 rounded-2xl bg-[#FFF9F4] border border-[#D98FA6]/40 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold text-[#A94F70] px-2.5 py-1 bg-[#FCECF1] rounded-lg">
                        TCL (Teacher-Centered)
                      </span>
                      <span className="text-xs text-[#7A5B67]">Fokus Otoritas Guru</span>
                    </div>
                    <p className="text-sm text-[#3D2C33] leading-relaxed">
                      {selectedPoint.tcl}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#F7DDE5] text-xs text-[#7A5B67]">
                    Kelebihan utama: Efisiensi waktu, arah belajar jelas terstandar.
                  </div>
                </div>

                {/* SCL Card */}
                <div className="p-5 rounded-2xl bg-[#F7F9F6] border border-[#A9BDA5]/60 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold text-[#3B5437] px-2.5 py-1 bg-[#E4ECE2] rounded-lg">
                        SCL (Student-Centered)
                      </span>
                      <span className="text-xs text-[#5C7258]">Fokus Kemandirian Siswa</span>
                    </div>
                    <p className="text-sm text-[#3D2C33] leading-relaxed">
                      {selectedPoint.scl}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#A9BDA5]/30 text-xs text-[#5C7258]">
                    Kelebihan utama: Otonomi berpikir kritis & kreativitas kelompok.
                  </div>
                </div>
              </div>

              {/* Verdict / Pedagogical Tip Banner */}
              <div className="p-4 rounded-2xl bg-[#FCECF1]/70 border border-[#F7DDE5] flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#A94F70] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#A94F70] uppercase tracking-wide">
                    Catatan Refleksi Pedagogi Kelompok 1
                  </h4>
                  <p className="text-xs text-[#5A454D] mt-1 leading-relaxed">
                    {selectedPoint.verdictTip}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Full Table Mode */
          <div className="bg-white rounded-3xl border border-[#F7DDE5] shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-[#FCECF1]/60 border-b border-[#F7DDE5] text-xs font-bold text-[#A94F70]">
                    <th className="py-4 px-6">Dimensi Pembelajaran</th>
                    <th className="py-4 px-6">Teacher-Centered Learning (TCL)</th>
                    <th className="py-4 px-6">Student-Centered Learning (SCL)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F7DDE5] text-xs text-[#3D2C33]">
                  {TCL_VS_SCL_COMPARISON.map((row) => (
                    <tr key={row.aspect} className="hover:bg-[#FFF9F4]/70 transition-colors">
                      <td className="py-4 px-6 font-bold text-[#2D2226] align-top w-1/4">
                        {row.aspect}
                      </td>
                      <td className="py-4 px-6 text-[#4E3D44] align-top w-3/8 leading-relaxed">
                        {row.tcl}
                      </td>
                      <td className="py-4 px-6 text-[#4E3D44] align-top w-3/8 leading-relaxed">
                        {row.scl}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Practical 3-Tier Rule of Thumb */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-2xl bg-white border border-[#F7DDE5]">
            <h4 className="text-xs font-bold text-[#A94F70] mb-2 flex items-center gap-1.5">
              <span>01. Tahap Fondasi Baru</span>
            </h4>
            <p className="text-xs text-[#5A454D] leading-relaxed">
              Gunakan TCL saat siswa belum punya skema kognitif awal sama sekali (contoh: belajar rumus fisika dasar atau huruf alfabet).
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-[#F7DDE5]">
            <h4 className="text-xs font-bold text-[#A94F70] mb-2 flex items-center gap-1.5">
              <span>02. Prosedur Berisiko Tinggi</span>
            </h4>
            <p className="text-xs text-[#5A454D] leading-relaxed">
              Gunakan TCL saat ada resiko cedera, kesalahan fatal, atau aturan keselamatan (contoh: alat laboratorium kimia, memegang benda tajam).
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-[#F7DDE5]">
            <h4 className="text-xs font-bold text-[#A9BDA5] text-[#4A6346] mb-2 flex items-center gap-1.5">
              <span>03. Transisi Menuju SCL</span>
            </h4>
            <p className="text-xs text-[#5A454D] leading-relaxed">
              Setelah keterampilan dasar dikuasai lewat pemodelan terarah, alihkan kontrol ke siswa untuk proyek kreatif terbuka (SCL).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
