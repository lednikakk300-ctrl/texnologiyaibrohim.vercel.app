import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Heart, ArrowRight, Filter, Search, Sparkles
} from 'lucide-react';
import { TechnologyItem, Language, ThemeMode } from '../types';
import { technologiesData } from '../data/techData';
import { translations } from '../translations';
import { soundFx } from '../utils/audio';

interface TechViewProps {
  language: Language;
  theme: ThemeMode;
  favorites: string[];
  onToggleFavorite: (id: string) => void;
  onOpenDetail: (item: TechnologyItem) => void;
}

export const TechView: React.FC<TechViewProps> = ({
  language,
  theme,
  favorites,
  onToggleFavorite,
  onOpenDetail,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchFilter, setSearchFilter] = useState('');
  const t = translations[language];
  const isDark = theme === 'dark';

  // Extract unique categories
  const categories = ['all', ...Array.from(new Set(technologiesData.map((item) => item.category)))];

  const categoryNames: Record<string, Record<Language, string>> = {
    all: { uz: `Barchasi (${technologiesData.length})`, ru: `Все (${technologiesData.length})`, en: `All (${technologiesData.length})` },
    hardware: { uz: 'Qurilmalar', ru: 'Устройства', en: 'Hardware' },
    network: { uz: 'Tarmoq & Aloqa', ru: 'Сети и связь', en: 'Network' },
    future: { uz: 'Kelajak texnologiyalari', ru: 'Технологии будущего', en: 'Future Tech' },
    digital: { uz: 'Raqamli tizimlar', ru: 'Цифровые системы', en: 'Digital' },
    smart: { uz: 'Aqlli tizimlar', ru: 'Умные системы', en: 'Smart Systems' },
  };

  const filteredItems = technologiesData.filter((item) => {
    const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
    const title = item.localizedName?.[language] || item.title || item.name || '';
    const desc = item.shortDesc?.[language] || '';
    const matchesSearch = 
      title.toLowerCase().includes(searchFilter.toLowerCase()) ||
      desc.toLowerCase().includes(searchFilter.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div id="tech-view" className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-cyan-500 font-bold text-xs uppercase tracking-wider mb-2">
          <Sparkles className="w-4 h-4" />
          <span>{t.sectionTechTitle}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          Zamonaviy va Ilg‘or Texnologiyalar
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2 max-w-3xl">
          Sun’iy intellektdan tortib kvant kompyuterlarigacha bo‘lgan 17 ta inqilobiy texnologiyani batafsil o‘rganing.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                soundFx.playClick();
                setSelectedCategory(cat);
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : isDark
                    ? 'bg-slate-900 text-slate-300 hover:bg-slate-850 border border-slate-800'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {categoryNames[cat]?.[language] || cat}
            </button>
          ))}
        </div>

        {/* Search input within category */}
        <div className={`flex items-center gap-2 px-3 py-2 rounded-xl border max-w-xs w-full ${
          isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
        }`}>
          <Search className="w-4 h-4 text-slate-400 shrink-0" />
          <input
            type="text"
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            placeholder="Texnologiyani izlash..."
            className="w-full bg-transparent text-xs outline-none text-slate-800 dark:text-slate-200 placeholder:text-slate-400"
          />
        </div>
      </div>

      {/* Grid of 17 Technology Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => {
          const isFav = favorites.includes(item.id);
          const itemTitle = item.localizedName?.[language] || item.title || item.name;
          const useCasesCount = item.whereUsed?.length || item.useCases?.length || 0;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.04, duration: 0.4 }}
              onClick={() => {
                soundFx.playClick();
                onOpenDetail(item);
              }}
              className={`group flex flex-col rounded-3xl border overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer ${
                isDark 
                  ? 'bg-slate-900/90 border-slate-800 hover:border-cyan-500/40 hover:shadow-cyan-950/40' 
                  : 'bg-white border-slate-200 hover:border-cyan-400 hover:shadow-slate-300'
              }`}
            >
              {/* Image Banner */}
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={itemTitle}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-slate-950/80 text-cyan-300 border border-cyan-500/30 backdrop-blur-md">
                    {categoryNames[item.category]?.[language] || item.category}
                  </span>
                </div>

                {/* Favorite Heart Button */}
                <button
                  id={`fav-btn-${item.id}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    soundFx.playSuccess();
                    onToggleFavorite(item.id);
                  }}
                  aria-label="Add to favorites"
                  className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-transform active:scale-90 cursor-pointer ${
                    isFav 
                      ? 'bg-rose-500 text-white shadow-md' 
                      : 'bg-slate-950/70 hover:bg-slate-950 text-white'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isFav ? 'fill-white' : ''}`} />
                </button>
              </div>

              {/* Content Body */}
              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {itemTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3 mb-4">
                    {item.shortDesc?.[language] || ''}
                  </p>
                </div>

                {/* Card Action */}
                <div className="pt-3 border-t border-slate-800/40 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-cyan-500 dark:text-cyan-400">
                    {useCasesCount} ta soha
                  </span>

                  <button
                    id={`btn-detail-${item.id}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      soundFx.playClick();
                      onOpenDetail(item);
                    }}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-cyan-500/15 group-hover:bg-cyan-500 text-cyan-500 dark:text-cyan-300 group-hover:text-slate-950 transition-all cursor-pointer"
                  >
                    <span>{t.btnDetail}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {filteredItems.length === 0 && (
        <div className="py-16 text-center">
          <p className="text-base font-semibold text-slate-400">Mos keluvchi texnologiya topilmadi</p>
        </div>
      )}
    </div>
  );
};
