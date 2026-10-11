import React from 'react';
import { siteConfig } from '../config/siteConfig';

interface FooterProps {
  onOpenAboutGroup: () => void;
  onOpenPaudPlaceholder: () => void;
  onScrollToSection: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenAboutGroup,
  onOpenPaudPlaceholder,
  onScrollToSection,
}) => {
  return (
    <footer className="bg-[#FFF9F4] border-t border-[#F7DDE5] pt-12 pb-8 text-xs text-[#5A454D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-[#F7DDE5]">
          {/* Brand & Identity Column */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#FCECF1] border border-[#D98FA6] flex items-center justify-center text-xs">
                🌸
              </span>
              <span className="text-lg font-bold font-['Outfit'] text-[#A94F70]">
                {siteConfig.websiteName}
              </span>
            </div>
            <p className="italic font-['Fraunces'] text-sm text-[#7A5B67]">
              "{siteConfig.tagline}"
            </p>
            <p className="text-xs text-[#5A454D] leading-relaxed max-w-sm">
              Proyek tugas kelompok mata kuliah {siteConfig.courseName} oleh <strong>{siteConfig.projectLabel}</strong>. Didedikasikan untuk membantu mahasiswa memahami teori belajar tanpa pusing.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="font-bold uppercase tracking-wider text-[#A94F70] text-[11px]">
              Eksplorasi Materi
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <button
                  onClick={() => onScrollToSection('beranda')}
                  className="hover:text-[#A94F70] transition-colors cursor-pointer text-left"
                >
                  Beranda & Ringkasan
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('hierarki')}
                  className="hover:text-[#A94F70] transition-colors cursor-pointer text-left"
                >
                  Hierarki Pedagogi (5 Tingkat)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('direct-instruction')}
                  className="hover:text-[#A94F70] transition-colors cursor-pointer text-left"
                >
                  Sintaks Direct Instruction (6 Langkah)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('komparasi')}
                  className="hover:text-[#A94F70] transition-colors cursor-pointer text-left"
                >
                  Matriks TCL vs SCL
                </button>
              </li>
              <li>
                <button
                  onClick={() => onScrollToSection('kuis')}
                  className="hover:text-[#A94F70] transition-colors cursor-pointer text-left"
                >
                  Tes Kepusinganmu (Kuis)
                </button>
              </li>
            </ul>
          </div>

          {/* Feature & Team Links */}
          <div className="md:col-span-4 space-y-2">
            <h4 className="font-bold uppercase tracking-wider text-[#A94F70] text-[11px]">
              Fitur & Informasi Proyek
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <button
                  onClick={onOpenPaudPlaceholder}
                  className="hover:text-[#A94F70] transition-colors cursor-pointer text-left flex items-center gap-1.5"
                >
                  <span>Learner Profile Builder (PAUD)</span>
                  <span className="text-[10px] text-[#A94F70] bg-[#FCECF1] px-1.5 py-0.2 rounded-md">
                    Fase 1
                  </span>
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenAboutGroup}
                  className="hover:text-[#A94F70] transition-colors cursor-pointer text-left"
                >
                  Profil Kelompok 1 & Anggota
                </button>
              </li>
              <li className="text-[#7A5B67] pt-2 text-[11px]">
                {siteConfig.university} · {siteConfig.semester}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#7A5B67]">
          <div>
            © {new Date().getFullYear()} {siteConfig.websiteName} · {siteConfig.projectLabel}. All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <span>Dibuat dengan rasa ingin tahu & kopi susu ☕</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
