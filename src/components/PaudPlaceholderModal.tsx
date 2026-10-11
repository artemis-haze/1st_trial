import React, { useState } from 'react';
import { PAUD_PREVIEW_SCENARIOS } from '../data/tclData';
import { X, Sparkles, Bell, Check, Baby, Shield, HeartHandshake, BookOpen } from 'lucide-react';

interface PaudPlaceholderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PaudPlaceholderModal: React.FC<PaudPlaceholderModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [emailInput, setEmailInput] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [feedbackInput, setFeedbackInput] = useState('');
  const [feedbackSent, setFeedbackSent] = useState(false);

  if (!isOpen) return null;

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setIsSubscribed(true);
    }
  };

  const handleSendFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    if (feedbackInput.trim()) {
      setFeedbackSent(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div className="relative bg-[#FFF9F4] w-full max-w-3xl rounded-3xl border border-[#F7DDE5] shadow-xl overflow-hidden my-8">
        {/* Top Header Bar */}
        <div className="bg-[#FCECF1] px-6 py-4 border-b border-[#F7DDE5] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-xl bg-white border border-[#D98FA6] flex items-center justify-center text-sm">
              🧸
            </span>
            <div>
              <span className="text-[11px] font-bold tracking-wider text-[#A94F70] uppercase">
                Fitur Spesifik Pembelajar PAUD · Fase 1 (Placeholder)
              </span>
              <h2 className="text-lg font-bold text-[#2D2226] font-['Outfit']">
                Learner Profile Builder: Eksplorasi Skenario PAUD
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-[#5A454D] hover:bg-white hover:text-[#A94F70] transition-colors cursor-pointer"
            aria-label="Tutup jendela"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
          {/* Banner with Generated PAUD Artwork */}
          <div className="rounded-2xl overflow-hidden border border-[#F7DDE5] relative aspect-[16/9] bg-[#FCECF1]">
            <img
              src="/src/assets/images/paud_early_childhood_1791675279861.jpg"
              alt="Suasana Ruang Belajar Anak Usia Dini PAUD"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2D2226]/80 via-[#2D2226]/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#A94F70] inline-block mb-1">
                Segera Hadir di Fase Pengembangan Berikutnya
              </span>
              <h3 className="text-xl font-bold font-['Outfit']">
                Ruang Eksplorasi Khusus Guru & Mahasiswa PAUD
              </h3>
              <p className="text-xs text-white/90 mt-1 max-w-xl">
                Anak usia 3–6 tahun membutuhkan bimbingan langsung (Direct Modeling) untuk keselamatan fisik dan pembentukan rutinitas mendasar.
              </p>
            </div>
          </div>

          {/* Why TCL in PAUD? Pedagogical Rationale */}
          <div className="p-5 rounded-2xl bg-white border border-[#F7DDE5] space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#A94F70] flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-[#A94F70]" />
              <span>Mengapa TCL Penting untuk Anak Usia Dini?</span>
            </h4>
            <p className="text-xs text-[#5A454D] leading-relaxed">
              Meskipun dunia PAUD identik dengan bermain bebas, pendekatan <strong>Teacher-Centered Learning</strong> tetap menjadi pilar vital dalam 3 kondisi utama:
              instruksi keamanan fisik (memegang gunting/benda tajam), penanaman prosedur kesehatan baku (cuci tangan, sikat gigi), dan pembiasaan adab atau kedisiplinan sosial awal.
            </p>
          </div>

          {/* Sneak-Peek Scenarios */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#7A5B67] mb-3">
              Pratinjau Skenario Pembelajar yang Sedang Dirancang:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {PAUD_PREVIEW_SCENARIOS.map((scen) => (
                <div
                  key={scen.id}
                  className="p-3.5 rounded-2xl bg-white border border-[#F7DDE5] flex flex-col justify-between"
                >
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-bold text-[#A9BDA5] text-[#3D5639] block">
                      {scen.ageGroup}
                    </span>
                    <h5 className="text-xs font-bold text-[#2D2226]">
                      {scen.title}
                    </h5>
                    <p className="text-[11px] text-[#6B515B] leading-snug">
                      {scen.whyTcl}
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-[#F7DDE5] text-[10px] text-[#A94F70] font-medium">
                    {scen.tag}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Notify Form */}
          <div className="p-5 rounded-2xl bg-[#FCECF1]/70 border border-[#D98FA6]/40">
            <div className="flex items-center gap-2 text-xs font-bold text-[#A94F70] mb-2">
              <Bell className="w-4 h-4" />
              <span>Ingatkan Saya Saat Fitur Learner Profile Builder Siap Digunakan</span>
            </div>
            <p className="text-xs text-[#5A454D] mb-4">
              Tinggalkan emailmu atau catat nama kelompok agar kami bisa mengabari saat modul interaktif PAUD ini dibuka penuh.
            </p>

            {!isSubscribed ? (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Masukkan email mahasiswa / dosen..."
                  required
                  className="flex-1 px-3.5 py-2 rounded-xl bg-white border border-[#F7DDE5] text-xs text-[#2D2226] focus:outline-none focus:border-[#A94F70]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-[#A94F70] text-white text-xs font-semibold hover:bg-[#8F3E5C] transition-colors cursor-pointer whitespace-nowrap"
                >
                  Daftar Notifikasi
                </button>
              </form>
            ) : (
              <div className="p-3 rounded-xl bg-[#E4ECE2] text-[#243B21] text-xs font-medium flex items-center gap-2">
                <Check className="w-4 h-4 text-[#4A6346]" />
                <span>Terima kasih! Email kamu telah dicatat untuk pembaruan rilis Fase 2.</span>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#FFF9F4] px-6 py-4 border-t border-[#F7DDE5] flex items-center justify-between text-xs text-[#7A5B67]">
          <span>Kelompok 1 · TCL Learning Project</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl border border-[#F7DDE5] bg-white text-[#5A454D] hover:bg-[#FCECF1] font-medium cursor-pointer"
          >
            Tutup Pratinjau
          </button>
        </div>
      </div>
    </div>
  );
};
