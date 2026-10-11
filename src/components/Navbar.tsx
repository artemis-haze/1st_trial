import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenPaudPlaceholder: () => void;
  onOpenAboutGroup: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenPaudPlaceholder,
  onOpenAboutGroup,
  activeSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FFF9F4]/90 backdrop-blur-md border-b border-[#F7DDE5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark (single text element with flower icon) */}
        <a
          href="#beranda"
          onClick={(e) => {
            e.preventDefault();
            scrollTo('beranda');
          }}
          className="flex items-center gap-2 text-xl font-bold tracking-tight text-[#A94F70] font-['Outfit'] whitespace-nowrap shrink-0 group"
        >
          <span className="w-7 h-7 rounded-full bg-[#FCECF1] border border-[#D98FA6] flex items-center justify-center text-sm group-hover:rotate-12 transition-transform duration-200">
            🌸
          </span>
          <span>{siteConfig.websiteName}</span>
        </a>

        {/* Zone 2: 4–5 concise single-line nav links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#5A454D]">
          <a
            href="#beranda"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('beranda');
            }}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-[#A94F70] ${
              activeSection === 'beranda' ? 'text-[#A94F70] font-semibold' : ''
            }`}
          >
            Beranda
          </a>
          <a
            href="#hierarki"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('hierarki');
            }}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-[#A94F70] ${
              activeSection === 'hierarki' ? 'text-[#A94F70] font-semibold' : ''
            }`}
          >
            Hierarki Pedagogi
          </a>
          <a
            href="#direct-instruction"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('direct-instruction');
            }}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-[#A94F70] ${
              activeSection === 'direct-instruction' ? 'text-[#A94F70] font-semibold' : ''
            }`}
          >
            Direct Instruction
          </a>
          <a
            href="#komparasi"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('komparasi');
            }}
            className={`whitespace-nowrap shrink-0 transition-colors hover:text-[#A94F70] ${
              activeSection === 'komparasi' ? 'text-[#A94F70] font-semibold' : ''
            }`}
          >
            TCL vs SCL
          </a>
          <button
            onClick={onOpenPaudPlaceholder}
            className="whitespace-nowrap shrink-0 transition-colors hover:text-[#A94F70] text-left text-sm font-medium"
          >
            Profil PAUD
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => scrollTo('kuis')}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#A94F70] rounded-xl hover:bg-[#8F3E5C] transition-colors shadow-sm whitespace-nowrap shrink-0"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tes Kepusinganmu</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#5A454D] hover:text-[#A94F70] rounded-lg transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation panel */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFF9F4] border-b border-[#F7DDE5] px-4 pt-2 pb-4 space-y-2 text-sm font-medium text-[#5A454D]">
          <button
            onClick={() => scrollTo('beranda')}
            className="block w-full text-left py-2 px-3 rounded-lg hover:bg-[#FCECF1] text-[#2D2226]"
          >
            Beranda
          </button>
          <button
            onClick={() => scrollTo('hierarki')}
            className="block w-full text-left py-2 px-3 rounded-lg hover:bg-[#FCECF1] text-[#2D2226]"
          >
            Hierarki Pedagogi (Strategi - Taktik)
          </button>
          <button
            onClick={() => scrollTo('direct-instruction')}
            className="block w-full text-left py-2 px-3 rounded-lg hover:bg-[#FCECF1] text-[#2D2226]"
          >
            Direct Instruction (6 Langkah)
          </button>
          <button
            onClick={() => scrollTo('komparasi')}
            className="block w-full text-left py-2 px-3 rounded-lg hover:bg-[#FCECF1] text-[#2D2226]"
          >
            TCL vs SCL
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenPaudPlaceholder();
            }}
            className="block w-full text-left py-2 px-3 rounded-lg hover:bg-[#FCECF1] text-[#A94F70]"
          >
            Learner Profile Builder (PAUD)
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenAboutGroup();
            }}
            className="block w-full text-left py-2 px-3 rounded-lg hover:bg-[#FCECF1] text-[#5A454D]"
          >
            Tentang Kelompok 1
          </button>
          <button
            onClick={() => scrollTo('kuis')}
            className="w-full mt-2 py-2 px-4 text-xs font-semibold text-white bg-[#A94F70] rounded-xl text-center"
          >
            Tes Kepusinganmu 🌸
          </button>
        </div>
      )}
    </header>
  );
};
