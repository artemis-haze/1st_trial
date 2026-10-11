import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { HierarchyExplorer } from './components/HierarchyExplorer';
import { DirectInstructionVisualizer } from './components/DirectInstructionVisualizer';
import { ComparisonMatrix } from './components/ComparisonMatrix';
import { PaudEntrySection } from './components/PaudEntrySection';
import { QuizSection } from './components/QuizSection';
import { GlossarySearch } from './components/GlossarySearch';
import { Footer } from './components/Footer';
import { PaudPlaceholderModal } from './components/PaudPlaceholderModal';
import { AboutGroupModal } from './components/AboutGroupModal';
import { MascotBuddy } from './components/MascotBuddy';

export default function App() {
  const [isPaudModalOpen, setIsPaudModalOpen] = useState(false);
  const [isAboutGroupModalOpen, setIsAboutGroupModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('beranda');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['beranda', 'hierarki', 'direct-instruction', 'komparasi', 'kuis'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF9F4] text-[#2D2226] font-['Plus_Jakarta_Sans'] selection:bg-[#F7DDE5] selection:text-[#A94F70]">
      {/* Navigation Top Bar */}
      <Navbar
        onOpenPaudPlaceholder={() => setIsPaudModalOpen(true)}
        onOpenAboutGroup={() => setIsAboutGroupModalOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section with Official Identity & 2 Main Destinations */}
        <HeroSection
          onOpenPaudPlaceholder={() => setIsPaudModalOpen(true)}
          onScrollToSection={scrollToSection}
        />

        {/* 1. Hierarchy Explorer (Pendekatan, Strategi, Metode, Teknik, Taktik) */}
        <HierarchyExplorer />

        {/* 2. Direct Instruction 6-Step Syntax Visualizer */}
        <DirectInstructionVisualizer />

        {/* 3. TCL vs SCL Comparative Matrix */}
        <ComparisonMatrix />

        {/* 4. Learner Profile Builder (PAUD) Entry Spotlight */}
        <PaudEntrySection
          onOpenPaudPlaceholder={() => setIsPaudModalOpen(true)}
        />

        {/* 5. Interactive Quiz & Reflection "Tes Kepusinganmu" */}
        <QuizSection />

        {/* 6. Mini Glossary of Pedagogical Terms */}
        <GlossarySearch />
      </main>

      {/* Footer */}
      <Footer
        onOpenAboutGroup={() => setIsAboutGroupModalOpen(true)}
        onOpenPaudPlaceholder={() => setIsPaudModalOpen(true)}
        onScrollToSection={scrollToSection}
      />

      {/* Modals & Floating Helpers */}
      <PaudPlaceholderModal
        isOpen={isPaudModalOpen}
        onClose={() => setIsPaudModalOpen(false)}
      />

      <AboutGroupModal
        isOpen={isAboutGroupModalOpen}
        onClose={() => setIsAboutGroupModalOpen(false)}
      />

      <MascotBuddy />
    </div>
  );
}
