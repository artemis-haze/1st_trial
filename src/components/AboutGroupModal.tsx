import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { X, GraduationCap, Users, BookOpen } from 'lucide-react';

interface AboutGroupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutGroupModal: React.FC<AboutGroupModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/40 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div className="relative bg-[#FFF9F4] w-full max-w-2xl rounded-3xl border border-[#F7DDE5] shadow-xl overflow-hidden my-8">
        {/* Header */}
        <div className="bg-[#FCECF1] px-6 py-4 border-b border-[#F7DDE5] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-xl bg-white border border-[#D98FA6] flex items-center justify-center text-sm">
              🎓
            </span>
            <div>
              <span className="text-[11px] font-bold tracking-wider text-[#A94F70] uppercase">
                Profil Tim Pengembang
              </span>
              <h2 className="text-lg font-bold text-[#2D2226] font-['Outfit']">
                Tentang {siteConfig.projectLabel}
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

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
          {/* Mission Note */}
          <div className="p-4 rounded-2xl bg-white border border-[#F7DDE5] space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#A94F70] flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-[#A94F70]" />
              <span>Misi Pembelajaran Kelompok 1</span>
            </h3>
            <p className="text-xs text-[#5A454D] leading-relaxed">
              Website <strong>{siteConfig.websiteName}</strong> dibuat sebagai tugas kelompok perkuliahan untuk menjelajahi konsep <em>Teacher-Centered Learning</em> (TCL) secara interaktif, menyenangkan, dan relevan dengan tantangan pendidikan masa kini.
            </p>
            <div className="pt-2 text-[11px] text-[#7A5B67] flex flex-wrap gap-x-4">
              <span>Mata Kuliah: {siteConfig.courseName}</span>
              <span>·</span>
              <span>{siteConfig.semester}</span>
            </div>
          </div>

          {/* Members List */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#7A5B67] mb-3 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5" />
              <span>Anggota Kelompok 1</span>
            </h4>
            <div className="space-y-2.5">
              {siteConfig.teamMembers.map((member) => (
                <div
                  key={member.nim}
                  className="p-3 rounded-2xl bg-white border border-[#F7DDE5] flex items-center justify-between"
                >
                  <div>
                    <h5 className="text-xs font-bold text-[#2D2226]">
                      {member.name}
                    </h5>
                    <p className="text-[11px] text-[#7A5B67]">
                      {member.role}
                    </p>
                  </div>
                  <span className="text-[11px] font-mono text-[#A94F70] bg-[#FCECF1] px-2.5 py-1 rounded-lg">
                    {member.nim}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Academic References */}
          <div className="p-4 rounded-2xl bg-[#FCECF1]/50 border border-[#F7DDE5]">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#A94F70] mb-2 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Rujukan Teori Utama</span>
            </h4>
            <ul className="text-[11px] text-[#5A454D] space-y-1.5">
              {siteConfig.references.map((ref, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-[#A94F70] font-bold">•</span>
                  <span>
                    <strong>{ref.author}</strong> ({ref.year}). <em>{ref.title}</em>.
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#FFF9F4] px-6 py-4 border-t border-[#F7DDE5] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-[#A94F70] text-white text-xs font-semibold hover:bg-[#8F3E5C] transition-colors cursor-pointer"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
