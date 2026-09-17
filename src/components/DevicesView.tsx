import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Cpu, HardDrive, Monitor, Keyboard, Mouse, 
  Fan, Zap, Sparkles, Layers, Box, Tv
} from 'lucide-react';
import { HardwareItem, Language, ThemeMode } from '../types';
import { hardwareData } from '../data/hardwareData';
import { soundFx } from '../utils/audio';

interface DevicesViewProps {
  language: Language;
  theme: ThemeMode;
}

export const DevicesView: React.FC<DevicesViewProps> = ({
  language,
  theme,
}) => {
  const [selectedId, setSelectedId] = useState<string>(hardwareData[0].id);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const isDark = theme === 'dark';

  const selectedItem = hardwareData.find((item) => item.id === selectedId) || hardwareData[0];

  const categories = [
    { id: 'all', label: 'Barcha qismlar (11)' },
    { id: 'Hisoblash & Asos', label: 'Hisoblash & Asos' },
    { id: 'Xotira', label: 'Xotira' },
    { id: 'Quvvat & Sovutish', label: 'Quvvat & Sovutish' },
    { id: 'Periferiya', label: 'Periferiya' },
  ];

  const filteredHardware = hardwareData.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  return (
    <div id="devices-view" className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-amber-500 font-bold text-xs uppercase tracking-wider mb-2">
          <Cpu className="w-4 h-4" />
          <span>Kompyuter Arxitekturasi</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          Kompyuter Qurilmalari (Hardware)
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2 max-w-3xl">
          Zamonaviy kompyuterni tashkil qiluvchi 11 ta asosiy qism: ularning arxitekturasi, ishlash mexanizmi va turlarini o‘rganing.
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              soundFx.playClick();
              setActiveCategory(cat.id);
            }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              activeCategory === cat.id
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                : isDark
                  ? 'bg-slate-900 text-slate-300 hover:bg-slate-850 border border-slate-800'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Interactive 2-Column Hardware Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Hardware Item Selector List */}
        <div className="lg:col-span-4 space-y-2">
          {filteredHardware.map((item) => {
            const isSelected = item.id === selectedId;
            return (
              <button
                key={item.id}
                id={`hardware-item-${item.id}`}
                onClick={() => {
                  soundFx.playClick();
                  setSelectedId(item.id);
                }}
                className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center gap-3.5 cursor-pointer ${
                  isSelected
                    ? isDark
                      ? 'bg-amber-500/15 border-amber-500/40 text-white shadow-lg'
                      : 'bg-amber-50 border-amber-300 text-slate-900 shadow-md'
                    : isDark
                      ? 'bg-slate-900/70 border-slate-800 text-slate-300 hover:bg-slate-850'
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-slate-700">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover" 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex-grow min-w-0">
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-sm font-bold truncate">
                      {item.name}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded font-mono bg-slate-800/80 text-amber-400 shrink-0">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 truncate mt-0.5">
                    {item.role[language]}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Side: Deep Interactive Hardware Inspector Card */}
        <motion.div 
          key={selectedItem.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className={`lg:col-span-8 rounded-3xl border shadow-xl overflow-hidden ${
            isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200'
          }`}
        >
          {/* Header with Image */}
          <div className="relative h-64 sm:h-72 w-full overflow-hidden">
            <img 
              src={selectedItem.image} 
              alt={selectedItem.name} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30 backdrop-blur-md mb-2 inline-block">
                {selectedItem.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                {selectedItem.name}
              </h3>
            </div>
          </div>

          {/* Details Content */}
          <div className="p-6 sm:p-8 space-y-6">
            
            {/* Ta’rifi (Definition) */}
            <div className={`p-4 rounded-2xl border ${
              isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}>
              <div className="text-xs font-bold text-amber-500 uppercase tracking-wider mb-1">
                Ta’rifi
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
                {selectedItem.definition[language]}
              </p>
            </div>

            {/* Nima vazifani bajarishi (Role) */}
            <div>
              <div className="flex items-center gap-2 text-sm font-bold text-cyan-500 uppercase tracking-wider mb-2">
                <Zap className="w-4 h-4" />
                <span>Nima vazifani bajaradi?</span>
              </div>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {selectedItem.role[language]}
              </p>
            </div>

            {/* Qanday ishlashi (How It Works) */}
            <div>
              <div className="flex items-center gap-2 text-sm font-bold text-indigo-500 uppercase tracking-wider mb-2">
                <Layers className="w-4 h-4" />
                <span>Qanday ishlaydi?</span>
              </div>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {selectedItem.howItWorks[language]}
              </p>
            </div>

            {/* Turlari (Types) */}
            <div>
              <div className="text-sm font-bold text-emerald-500 uppercase tracking-wider mb-3">
                Asosiy Turlari
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedItem.types.map((type, i) => (
                  <div 
                    key={i} 
                    className={`p-3 rounded-xl border text-xs sm:text-sm font-medium flex items-center gap-2.5 ${
                      isDark ? 'bg-slate-950 border-slate-800 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                    <span>{type[language]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Qiziqarli faktlar (Fun Fact) */}
            <div className={`p-4 rounded-2xl border ${
              isDark ? 'bg-amber-950/20 border-amber-900/40' : 'bg-amber-50/70 border-amber-200'
            }`}>
              <div className="flex items-center gap-2 mb-1.5 text-amber-600 dark:text-amber-400 font-bold text-sm">
                <Sparkles className="w-4 h-4" />
                <span>Qiziqarli fakt</span>
              </div>
              <p className="text-xs sm:text-sm italic text-slate-700 dark:text-slate-300">
                "{selectedItem.funFact[language]}"
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </div>
  );
};
