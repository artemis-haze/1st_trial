import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { Sparkles, MessageCircle, X, ChevronRight } from 'lucide-react';

const MASCOT_TIPS = [
  "Guru yang ceramah 2 jam tanpa henti itu bukan Direct Instruction, tapi monolog radio! Direct Instruction sejati selalu ada tahap 'We Do' dan 'You Do'. 🌸",
  "Pusing bedain Strategi dan Metode? Ingat analogi ini: Strategi itu rencana jalan-jalan ke Bandung, Metode itu pilihan naik kereta atau mobil! 🚂",
  "Taktik itu bumbu dapur guru! Dua guru bisa sama-sama pakai metode ceramah, tapi guru A menyelipkan jokes receh dan guru B lebih puitis. 🧂",
  "Di kelas PAUD, TCL bukan berarti mendikte anak jadi kaku, melainkan melindungi jari mungil mereka saat pertama kali memegang gunting tajam! ✂️",
  "Sintaks Direct Instruction wajib ada umpan balik segera (Immediate Feedback). Jangan biarkan murid mengulang cara salah berkali-kali! ✨",
];

export const MascotBuddy: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [tipIndex, setTipIndex] = useState(0);

  const nextTip = () => {
    setTipIndex((prev) => (prev + 1) % MASCOT_TIPS.length);
  };

  return (
    <div className="fixed bottom-5 right-5 z-40">
      {isOpen ? (
        <div className="bg-white rounded-3xl p-4 sm:p-5 border border-[#F7DDE5] shadow-lg max-w-xs sm:max-w-sm mb-3 relative animate-fade-in">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-3 text-[#7A5B67] hover:text-[#A94F70] p-1 rounded-lg"
            aria-label="Tutup pesan maskot"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-2xl overflow-hidden border border-[#D98FA6] bg-[#FCECF1] shrink-0 p-0.5">
              <img
                src="/src/assets/images/mascot_bunga_pusing_1791675253387.jpg"
                alt="Si Bunga Pusing"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#A94F70]">
                {siteConfig.mascot.name}
              </h4>
              <p className="text-[10px] text-[#7A5B67]">
                Teman Curhat Belajar Pedagogi
              </p>
            </div>
          </div>

          <p className="text-xs text-[#3D2C33] leading-relaxed italic bg-[#FCECF1]/60 p-3 rounded-2xl border border-[#F7DDE5] mb-3">
            "{MASCOT_TIPS[tipIndex]}"
          </p>

          <div className="flex items-center justify-between text-[11px]">
            <span className="text-[#7A5B67]">
              Tips {tipIndex + 1} dari {MASCOT_TIPS.length}
            </span>
            <button
              onClick={nextTip}
              className="text-[#A94F70] font-bold hover:underline cursor-pointer flex items-center gap-1"
            >
              <span>Tips Selanjutnya</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      ) : null}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-full bg-white border border-[#D98FA6] text-[#A94F70] shadow-md hover:bg-[#FCECF1] transition-all cursor-pointer group hover:scale-105"
        title="Bicara dengan Bungsi (Si Bunga Pusing)"
      >
        <span className="w-6 h-6 rounded-full overflow-hidden inline-block border border-[#D98FA6]">
          <img
            src="/src/assets/images/mascot_bunga_pusing_1791675253387.jpg"
            alt="Mascot Avatar"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </span>
        <span className="text-xs font-bold font-['Outfit'] pr-1 hidden sm:inline">
          Bungsi Butuh Teman? 🌸
        </span>
      </button>
    </div>
  );
};
