import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Globe, Wifi, Router, Server, Layout, Compass, 
  Search, MapPin, BookOpen, Lock, Cloud, Sparkles, Layers, ShieldCheck
} from 'lucide-react';
import { Language, ThemeMode, InternetTopic } from '../types';
import { internetTopicsData } from '../data/aiInternetSecurityData';
import { soundFx } from '../utils/audio';

interface InternetViewProps {
  language: Language;
  theme: ThemeMode;
}

export const InternetView: React.FC<InternetViewProps> = ({
  language,
  theme,
}) => {
  const [selectedTopicId, setSelectedTopicId] = useState<string>(internetTopicsData[0].id);
  const isDark = theme === 'dark';

  const currentTopic: InternetTopic = 
    internetTopicsData.find((t) => t.id === selectedTopicId) || internetTopicsData[0];

  const getIcon = (name: string) => {
    switch (name) {
      case 'Globe': return Globe;
      case 'Wifi': return Wifi;
      case 'Router': return Router;
      case 'Server': return Server;
      case 'Layout': return Layout;
      case 'Compass': return Compass;
      case 'Search': return Search;
      case 'MapPin': return MapPin;
      case 'BookOpen': return BookOpen;
      case 'Lock': return Lock;
      case 'Cloud': return Cloud;
      default: return Globe;
    }
  };

  return (
    <div id="internet-view" className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sky-500 font-bold text-xs uppercase tracking-wider mb-2">
          <Globe className="w-4 h-4" />
          <span>Global Tarmoqlar</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          Internet va Tarmoq Texnologiyalari
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2 max-w-3xl">
          DNS, IP manzillar, Wi-Fi to‘lqinlaridan tortib okean tubidagi optik kabellargacha bo‘lgan 12 ta asosiy tarmoq tushunchasi.
        </p>
      </div>

      {/* Grid of 12 Internet Concepts */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        {internetTopicsData.map((topic) => {
          const isSelected = topic.id === selectedTopicId;
          const IconComponent = getIcon(topic.icon);
          return (
            <button
              key={topic.id}
              id={`internet-chip-${topic.id}`}
              onClick={() => {
                soundFx.playClick();
                setSelectedTopicId(topic.id);
              }}
              className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between min-h-[100px] ${
                isSelected
                  ? 'bg-sky-500 text-slate-950 border-sky-400 shadow-lg shadow-sky-500/20 scale-[1.02]'
                  : isDark
                    ? 'bg-slate-900/80 border-slate-800 text-slate-200 hover:bg-slate-850 hover:border-slate-700'
                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 shadow-sm'
              }`}
            >
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center mb-2 ${
                isSelected ? 'bg-slate-950 text-sky-400' : 'bg-slate-800 text-sky-400'
              }`}>
                <IconComponent className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-bold truncate">
                {topic.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Detailed Card for Selected Concept */}
      <motion.div
        key={currentTopic.id}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className={`rounded-3xl border p-6 sm:p-8 space-y-6 shadow-xl ${
          isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200'
        }`}
      >
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-400">
            {React.createElement(getIcon(currentTopic.icon), { className: 'w-6 h-6' })}
          </div>
          <div>
            <span className="text-[11px] font-mono text-sky-400 font-semibold uppercase">
              Protokol & Tarmoq
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {currentTopic.title}
            </h3>
          </div>
        </div>

        {/* Definition */}
        <div className={`p-4 rounded-2xl border ${
          isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
        }`}>
          <div className="text-xs font-bold text-sky-500 uppercase tracking-wider mb-1">
            Tushuncha & Ta’rif
          </div>
          <p className="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
            {currentTopic.desc[language]}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* How It Works */}
          <div className={`p-5 rounded-2xl border ${
            isDark ? 'bg-slate-950/40 border-slate-800' : 'bg-slate-50 border-slate-200'
          }`}>
            <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">
              <Layers className="w-4 h-4" />
              <span>Qanday ishlaydi?</span>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {currentTopic.howItWorks[language]}
            </p>
          </div>

          {/* Key Role */}
          <div className={`p-5 rounded-2xl border ${
            isDark ? 'bg-slate-950/40 border-slate-800' : 'bg-slate-50 border-slate-200'
          }`}>
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Ahamiyati</span>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {currentTopic.keyRole[language]}
            </p>
          </div>
        </div>

        {/* Fun Fact */}
        <div className={`p-5 rounded-2xl border ${
          isDark ? 'bg-sky-950/20 border-sky-900/40' : 'bg-sky-50/70 border-sky-200'
        }`}>
          <div className="flex items-center gap-2 text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Qiziqarli fakt</span>
          </div>
          <p className="text-xs sm:text-sm italic text-slate-700 dark:text-slate-200">
            "{currentTopic.funFact[language]}"
          </p>
        </div>

      </motion.div>
    </div>
  );
};
