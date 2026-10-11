import React from 'react';
import { Baby, ArrowRight, Sparkles, Shield, Palette } from 'lucide-react';

interface PaudEntrySectionProps {
  onOpenPaudPlaceholder: () => void;
}

export const PaudEntrySection: React.FC<PaudEntrySectionProps> = ({
  onOpenPaudPlaceholder,
}) => {
  return (
    <section className="py-16 md:py-20 bg-[#FCECF1]/30 border-t border-[#F7DDE5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#F7DDE5] p-6 sm:p-10 shadow-sm relative overflow-hidden">
          {/* Decorative stationery washi tape */}
          <div className="tape-effect" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left 7 cols: Content */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#A94F70]">
                <Baby className="w-4 h-4 text-[#A94F70]" />
                <span>Destinasi Khusus · Pengembangan Tahap Awal</span>
                <span aria-hidden="true">·</span>
                <span className="bg-[#FCECF1] px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider font-bold">
                  Preview Fase 1
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#2D2226] font-['Outfit']">
                Learner Profile Builder (PAUD)
              </h2>

              <p className="text-sm text-[#5A454D] leading-relaxed">
                Ruang eksplorasi khusus skenario anak usia dini (3–6 tahun). Cari tahu mengapa pemodelan instruksi langsung (TCL) sangat penting untuk mengajarkan kebiasaan keselamatan, menggunting, hingga rutinitas harian anak tanpa mematikan keceriaan mereka.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-2xl bg-[#FFF9F4] border border-[#F7DDE5] text-xs">
                  <div className="font-bold text-[#A94F70] mb-1">✂️ Motorik Halus</div>
                  <p className="text-[11px] text-[#6B515B]">Teknik aman memegang gunting dan melipat kertas pola.</p>
                </div>
                <div className="p-3 rounded-2xl bg-[#FFF9F4] border border-[#F7DDE5] text-xs">
                  <div className="font-bold text-[#A94F70] mb-1">🧼 Rutinitas Sehat</div>
                  <p className="text-[11px] text-[#6B515B]">Modeling 6 langkah cuci tangan dengan lagu gembira.</p>
                </div>
                <div className="p-3 rounded-2xl bg-[#FFF9F4] border border-[#F7DDE5] text-xs">
                  <div className="font-bold text-[#A94F70] mb-1">🚨 Prosedur Aman</div>
                  <p className="text-[11px] text-[#6B515B]">Ketaatan instruksi tenang saat simulasi evakuasi.</p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenPaudPlaceholder}
                  className="px-5 py-2.5 rounded-xl bg-[#A94F70] text-white text-xs font-semibold hover:bg-[#8F3E5C] transition-colors cursor-pointer inline-flex items-center gap-2 group shadow-xs"
                >
                  <span>Buka Halaman Pratinjau Skenario PAUD</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right 5 cols: Classroom Image */}
            <div className="lg:col-span-5">
              <div
                onClick={onOpenPaudPlaceholder}
                className="group relative rounded-2xl overflow-hidden border border-[#F7DDE5] aspect-[4/3] bg-[#FCECF1] cursor-pointer shadow-xs hover:border-[#D98FA6] transition-all"
              >
                <img
                  src="/src/assets/images/paud_early_childhood_1791675279861.jpg"
                  alt="Ilustrasi Kelas PAUD Ceria"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium flex items-center justify-between">
                  <span>Klik untuk melihat preview skenario 🧸</span>
                  <span className="text-[10px] bg-white/30 backdrop-blur-xs px-2 py-0.5 rounded-lg">
                    Lihat &rarr;
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
