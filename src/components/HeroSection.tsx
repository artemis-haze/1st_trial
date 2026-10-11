import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { BookOpen, Sparkles, ArrowRight, Baby, HelpCircle, Layers, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  onOpenPaudPlaceholder: () => void;
  onScrollToSection: (id: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenPaudPlaceholder,
  onScrollToSection,
}) => {
  const [isTitlePopped, setIsTitlePopped] = useState(false);
  return (
    <section id="beranda" className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden">
      {/* Decorative botanical & question marks background subtle doodles */}
      <div className="absolute inset-0 stationery-grid opacity-70 pointer-events-none" />
      <div className="absolute top-12 left-8 text-[#D98FA6]/30 text-4xl select-none pointer-events-none animate-pulse">
        ✦
      </div>
      <div className="absolute top-40 right-12 text-[#A9BDA5]/40 text-5xl select-none pointer-events-none">
        ?
      </div>
      <div className="absolute bottom-16 left-1/4 text-[#D98FA6]/25 text-3xl select-none pointer-events-none">
        ❀
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Subtle unboxed metadata kicker */}
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#A94F70] mb-4">
          <span>{siteConfig.projectLabel}</span>
          <span aria-hidden="true">·</span>
          <span>Pedagogi & Desain Instruksional</span>
          <span aria-hidden="true">·</span>
          <span>{siteConfig.university}</span>
        </div>

        {/* Hero Title & Identity */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsTitlePopped(!isTitlePopped)}
                className="text-left group cursor-pointer focus:outline-none"
                title="Klik untuk kejutan kecil!"
              >
                {!isTitlePopped ? (
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#A94F70] font-['Outfit'] leading-[1.12] title-glow-flicker inline-block transition-transform duration-200 group-hover:scale-102">
                    {siteConfig.websiteName}
                  </h1>
                ) : (
                  <h1 className="text-2xl sm:text-3xl font-bold text-[#A94F70] font-['Outfit'] leading-snug animate-pop-out inline-block bg-[#FCECF1] px-4 py-2 rounded-2xl border border-[#D98FA6] shadow-xs">
                    maaf, saya gamau pusing sendirian 😆
                  </h1>
                )}
              </button>
              <div className="text-[11px] text-[#A94F70]/70 font-medium mt-1 flex items-center gap-1 select-none">
                <span>✦</span>
                <span>{isTitlePopped ? 'klik judul lagi untuk mengembalikan 🌸' : 'coba klik judulnya ✨'}</span>
              </div>
            </div>

            {/* Official English Tagline */}
            <p className="text-lg sm:text-xl font-medium text-[#7A5B67] italic font-['Fraunces']">
              "{siteConfig.tagline}"
            </p>

            <p className="text-base text-[#4E3D44] leading-relaxed max-w-2xl">
              Pernah pusing membedakan antara <strong>Pendekatan</strong>, <strong>Strategi</strong>, <strong>Metode</strong>, <strong>Teknik</strong>, hingga <strong>Taktik</strong> saat belajar pedagogi? Di sini, Kelompok 1 meracik konsep <em>Teacher-Centered Learning</em> (TCL) agar terasa renyah, visual, dan tidak bikin kening berkerut.
            </p>

            {/* Quick interactive highlights */}
            <div className="flex flex-wrap gap-y-2 gap-x-4 text-xs font-medium text-[#6B515B] pt-1">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#A94F70]" />
                Bebas Jargon Rumit
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#A94F70]" />
                Hierarki Pedagogi Praktis
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#A94F70]" />
                Sintaks Direct Instruction 6 Langkah
              </span>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onScrollToSection('hierarki')}
                className="px-6 py-3 rounded-xl bg-[#A94F70] text-white font-semibold text-sm hover:bg-[#8F3E5C] transition-all duration-200 shadow-sm flex items-center gap-2 group cursor-pointer"
              >
                <BookOpen className="w-4 h-4" />
                <span>Buka Knowledge Base</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenPaudPlaceholder}
                className="px-6 py-3 rounded-xl bg-[#FCECF1] text-[#A94F70] border border-[#F7DDE5] font-semibold text-sm hover:bg-[#F7DDE5] transition-all duration-200 flex items-center gap-2 cursor-pointer"
              >
                <Baby className="w-4 h-4" />
                <span>Profil Pembelajar PAUD</span>
              </button>
            </div>
          </div>

          {/* Right Visual Card with Mascot & Stationery Notebook Image */}
          <div className="lg:col-span-5 relative">
            <div className="bg-[#FFF9F4] p-3 rounded-3xl border border-[#F7DDE5] shadow-sm relative">
              {/* Stationery tape visual detail */}
              <div className="tape-effect" />

              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#FCECF1] border border-[#F7DDE5]">
                <img
                  src={${import.meta.env.BASE_URL}src/assets/images/hero_stationery_tcl_1791675267552.jpg}
                  alt="Catatan Jurnal Belajar Pedagogi TCL RADA PUSING"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D2226]/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium backdrop-blur-sm bg-black/30 p-2 rounded-xl">
                  📖 Buku Catatan Pedagogi: Dari teori klasik hingga aplikasi kelas modern.
                </div>
              </div>

              {/* Floating Mascot Interaction Box */}
              <div className="mt-4 p-3.5 bg-[#FCECF1]/80 rounded-2xl border border-[#F7DDE5] flex items-center gap-3.5">
                <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white border border-[#D98FA6] shrink-0 p-0.5 shadow-sm">
                  <img
                    src={${import.meta.env.BASE_URL}src/assets/images/mascot_bunga_pusing_1791675253387.jpg}
                    alt="Mascot Si Bunga Pusing"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-xs space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-[#A94F70]">
                    <span>{siteConfig.mascot.name}</span>
                    <span className="text-[10px] px-1.5 py-0.2 bg-white rounded-full border border-[#D98FA6] text-[#A94F70]">Maskot</span>
                  </div>
                  <p className="text-[#5A454D] italic leading-snug">
                    "Katanya TCL itu ceramah kuno? Padahal pas belajar naik motor atau gunting kertas, arahan langsung guru justru penolong utama! Yuk bedah bareng."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2 Main Destinations Feature Grid on Homepage */}
        <div className="mt-14 pt-8 border-t border-[#F7DDE5]">
          <div className="mb-6">
            <h2 className="text-xs font-bold tracking-widest text-[#A94F70] uppercase">
              Dua Destinasi Utama Belajar
            </h2>
            <p className="text-xl font-bold text-[#2D2226] font-['Outfit'] mt-1">
              Pilih Ruang Eksplorasi Kamu Hari Ini
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Destination 1: TCL Knowledge Base */}
            <div
              onClick={() => onScrollToSection('hierarki')}
              className="group p-6 rounded-3xl bg-[#FFF9F4] border border-[#F7DDE5] hover:border-[#D98FA6] hover:shadow-md transition-all duration-200 cursor-pointer relative overflow-hidden flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FCECF1] border border-[#D98FA6] flex items-center justify-center text-[#A94F70]">
                  <Layers className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#A94F70] mb-1">
                    <span>Destinasi 01</span>
                    <span aria-hidden="true">·</span>
                    <span>Modul Lengkap</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#2D2226] font-['Outfit'] group-hover:text-[#A94F70] transition-colors">
                    TCL Knowledge Base
                  </h3>
                  <p className="text-sm text-[#5A454D] mt-2 leading-relaxed">
                    Koleksi interaktif teori TCL, hierarki pedagogis (Pendekatan, Strategi, Metode, Teknik, Taktik), 6 langkah sintaks Direct Instruction, serta matriks perbandingan TCL vs SCL.
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap gap-2 text-xs text-[#7A5B67]">
                  <span className="px-2.5 py-1 bg-[#FCECF1] rounded-lg">Piramida Hierarki</span>
                  <span className="px-2.5 py-1 bg-[#FCECF1] rounded-lg">6 Sintaks DI</span>
                  <span className="px-2.5 py-1 bg-[#FCECF1] rounded-lg">Matriks TCL vs SCL</span>
                  <span className="px-2.5 py-1 bg-[#FCECF1] rounded-lg">Kuis Kilas</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F7DDE5] flex items-center justify-between text-xs font-semibold text-[#A94F70]">
                <span>Eksplorasi Materi Lengkap</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>

            {/* Destination 2: Learner Profile Builder (PAUD) */}
            <div
              onClick={onOpenPaudPlaceholder}
              className="group p-6 rounded-3xl bg-[#FFF9F4] border border-[#F7DDE5] hover:border-[#A9BDA5] hover:shadow-md transition-all duration-200 cursor-pointer relative overflow-hidden flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#E9E1F5] border border-[#D98FA6]/60 flex items-center justify-center text-[#A94F70]">
                  <Baby className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#6C8267] mb-1">
                    <span>Destinasi 02</span>
                    <span aria-hidden="true">·</span>
                    <span>Early Childhood Scenario</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-[#A94F70]">Preview Fase 1</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#2D2226] font-['Outfit'] group-hover:text-[#A94F70] transition-colors">
                    Learner Profile Builder
                  </h3>
                  <p className="text-sm text-[#5A454D] mt-2 leading-relaxed">
                    Fitur khusus untuk mengeksplorasi skenario pembelajar anak usia dini (PAUD). Pelajari kapan instruksi terarah sangat efektif untuk keamanan, motorik halus, dan kebiasaan baik anak.
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap gap-2 text-xs text-[#7A5B67]">
                  <span className="px-2.5 py-1 bg-[#FCECF1] rounded-lg">Skenario Gunting & Lem</span>
                  <span className="px-2.5 py-1 bg-[#FCECF1] rounded-lg">Rutinitas Cuci Tangan</span>
                  <span className="px-2.5 py-1 bg-[#FCECF1] rounded-lg">Aturan Evakuasi</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F7DDE5] flex items-center justify-between text-xs font-semibold text-[#A94F70]">
                <span>Buka Pratinjau Skenario PAUD</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
