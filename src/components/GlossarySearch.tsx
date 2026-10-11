import React, { useState } from 'react';
import { GLOSSARY_ITEMS, GlossaryItem } from '../data/tclData';
import { Search, BookMarked, Sparkles } from 'lucide-react';

export const GlossarySearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');

  const categories = ['Semua', 'Strategi', 'Metode', 'Teknik', 'Praktik'];

  const filteredItems = GLOSSARY_ITEMS.filter((item) => {
    const matchesSearch =
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.simpleExplanation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.inClassExample.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === 'Semua' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-16 bg-[#FFF9F4] border-t border-[#F7DDE5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#A94F70] uppercase tracking-wider mb-2">
            <span>🌸 Glosarium Mini</span>
            <span aria-hidden="true">·</span>
            <span>Kamus Cepat Mahasiswa</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2D2226] font-['Outfit']">
            Catatan Istilah Pedagogi Penting
          </h2>
          <p className="text-sm text-[#5A454D] mt-2">
            Penjelasan istilah asing dalam bahasa Indonesia yang santai, ringkas, dan mudah diingat saat diskusi kelas.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="max-w-2xl mx-auto mb-8 space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 text-[#A94F70] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Cari istilah pedagogi (misal: Scaffolding, Chunking, dsb)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white border border-[#F7DDE5] text-xs text-[#2D2226] focus:outline-none focus:border-[#A94F70] transition-colors shadow-2xs"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-1.5 text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#A94F70] text-white shadow-2xs'
                    : 'bg-white border border-[#F7DDE5] text-[#5A454D] hover:bg-[#FCECF1]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-2xl bg-white border border-[#F7DDE5] hover:border-[#D98FA6] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold text-[#A94F70] px-2 py-0.5 bg-[#FCECF1] rounded-md">
                    {item.category}
                  </span>
                  <BookMarked className="w-3.5 h-3.5 text-[#D98FA6]" />
                </div>
                <h3 className="text-base font-bold text-[#2D2226] mb-2 font-['Outfit']">
                  {item.term}
                </h3>
                <p className="text-xs text-[#5A454D] leading-relaxed mb-3">
                  {item.simpleExplanation}
                </p>
              </div>

              <div className="pt-3 border-t border-[#F7DDE5] text-[11px] text-[#7A5B67] bg-[#FFF9F4] p-2.5 rounded-xl">
                <span className="font-semibold text-[#A94F70]">Contoh Praktik: </span>
                <span>{item.inClassExample}</span>
              </div>
            </div>
          ))}

          {filteredItems.length === 0 && (
            <div className="col-span-full text-center py-12 text-[#7A5B67] text-xs">
              Tidak menemukan istilah dengan kata kunci "{searchTerm}". Coba kata kunci lain atau pilih kategori "Semua".
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
