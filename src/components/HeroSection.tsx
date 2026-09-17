import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, Sparkles, Layers, Cpu, Code2, Bot, 
  ShieldCheck, Globe, Zap, Database, Terminal
} from 'lucide-react';
import { ActivePage, Language, ThemeMode } from '../types';
import { translations } from '../translations';
import { soundFx } from '../utils/audio';

interface HeroSectionProps {
  language: Language;
  theme: ThemeMode;
  onNavigate: (page: ActivePage) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  language,
  theme,
  onNavigate,
}) => {
  const t = translations[language];
  const isDark = theme === 'dark';

  const stats = [
    { count: '17+', label: { uz: 'Zamonaviy Texnologiya', ru: 'Современных технологий', en: 'Modern Technologies' }, icon: Zap, color: 'from-cyan-500 to-blue-500' },
    { count: '11', label: { uz: 'Kompyuter Qurilmasi', ru: 'Устройств ПК', en: 'Hardware Units' }, icon: Cpu, color: 'from-amber-500 to-orange-500' },
    { count: '10', label: { uz: 'Dasturlash Tili', ru: 'Языков программирования', en: 'Programming Languages' }, icon: Code2, color: 'from-emerald-500 to-teal-500' },
    { count: '7', label: { uz: 'Arduino Loyihasi', ru: 'Проектов Arduino', en: 'Arduino Projects' }, icon: Bot, color: 'from-purple-500 to-indigo-500' },
  ];

  return (
    <div className="relative overflow-hidden pt-6 sm:pt-10 pb-12 sm:pb-16">
      {/* Dynamic Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-cyan-500/10 via-indigo-500/5 to-transparent pointer-events-none blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text & CTA Column */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Pill Announcement */}
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-6 border ${
              isDark 
                ? 'bg-cyan-950/50 text-cyan-300 border-cyan-800/60 shadow-sm shadow-cyan-950' 
                : 'bg-cyan-50 text-cyan-800 border-cyan-200'
            }`}>
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>{t.welcomeBadge}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span className="font-mono opacity-80">v2.4 Pro</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] mb-6">
              <span className="block text-slate-900 dark:text-white">
                {t.heroTitle}
              </span>
              <span className="block bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 bg-clip-text text-transparent mt-1">
                TEXNOLOGIYA
              </span>
            </h1>

            {/* Subtitle Description */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mb-8">
              {t.heroSubtitle}
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-10">
              <button
                id="hero-btn-start"
                onClick={() => {
                  soundFx.playSuccess();
                  onNavigate('tech');
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.02] cursor-pointer"
              >
                <span>{t.btnStart}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-btn-view-tech"
                onClick={() => {
                  soundFx.playClick();
                  onNavigate('about_tech');
                }}
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm border transition-all hover:scale-[1.01] cursor-pointer ${
                  isDark
                    ? 'bg-slate-900/80 hover:bg-slate-850 text-slate-200 border-slate-700'
                    : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-300 shadow-sm'
                }`}
              >
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>{t.btnViewTech}</span>
              </button>
            </div>

            {/* Quick jump tag buttons */}
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="text-slate-400 font-medium mr-1">Tezkor o‘tish:</span>
              {[
                { label: 'Sun’iy Intellekt', page: 'ai' as ActivePage, icon: Bot },
                { label: 'Arduino', page: 'robotics' as ActivePage, icon: Cpu },
                { label: 'Python & JS', page: 'programming' as ActivePage, icon: Terminal },
                { label: 'Kiberxavfsizlik', page: 'security' as ActivePage, icon: ShieldCheck },
                { label: 'Test & Quiz', page: 'test' as ActivePage, icon: Zap },
              ].map((pill, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    soundFx.playClick();
                    onNavigate(pill.page);
                  }}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-medium border transition-colors cursor-pointer ${
                    isDark
                      ? 'bg-slate-900 hover:bg-slate-800 text-slate-300 border-slate-800 hover:border-slate-700'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
                  }`}
                >
                  <pill.icon className="w-3 h-3 text-cyan-400" />
                  <span>{pill.label}</span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right Futuristic Cyber Visual Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5 relative"
          >
            <div className={`relative rounded-3xl p-6 sm:p-8 border shadow-2xl overflow-hidden ${
              isDark 
                ? 'bg-gradient-to-b from-slate-900/90 to-slate-950/90 border-slate-800 shadow-cyan-950/30' 
                : 'bg-gradient-to-b from-white to-slate-50 border-slate-200 shadow-slate-300/40'
            }`}>
              
              {/* Top Cyber Status Header */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800/40 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1 text-[11px] font-mono text-cyan-400 bg-cyan-950/40 px-2.5 py-0.5 rounded-full border border-cyan-800/40">
                  <span>core_engine.sh</span>
                  <span className="animate-pulse">●</span>
                </div>
              </div>

              {/* Central Interactive Processor Visualization */}
              <div className="relative my-4 p-6 rounded-2xl bg-gradient-to-br from-cyan-950/30 via-slate-950/40 to-indigo-950/30 border border-cyan-500/20 flex flex-col items-center justify-center text-center">
                <div className="relative w-20 h-20 mb-4 flex items-center justify-center rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[2px] shadow-lg shadow-cyan-500/30">
                  <div className={`w-full h-full rounded-[14px] flex items-center justify-center ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
                    <Cpu className="w-10 h-10 text-cyan-400 animate-pulse" />
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-100 dark:text-white mb-1">
                  Interaktiv Axborot Tizimi
                </h3>
                <p className="text-xs text-slate-400 max-w-xs">
                  Barcha modullar to‘liq offlayn va onlayn kesh rejimida ishlaydi.
                </p>

                {/* Cyber Matrix Indicators */}
                <div className="grid grid-cols-3 gap-2 w-full mt-5">
                  <div className="p-2 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
                    <span className="text-[10px] text-slate-400 block font-mono">LATENCY</span>
                    <span className="text-xs font-bold text-emerald-400 font-mono">0.4 ms</span>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
                    <span className="text-[10px] text-slate-400 block font-mono">ENCRYPTION</span>
                    <span className="text-xs font-bold text-cyan-400 font-mono">AES-256</span>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-900/60 border border-slate-800 text-center">
                    <span className="text-[10px] text-slate-400 block font-mono">LANGUAGES</span>
                    <span className="text-xs font-bold text-indigo-400 font-mono">3 Tilda</span>
                  </div>
                </div>
              </div>

              {/* Quick Action in Card */}
              <div className="flex items-center justify-between pt-2 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Ma’lumotlar bazasi to‘liq yuklangan</span>
                </span>
                <span className="text-emerald-400 font-mono font-bold">100% OK</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Platform Metrics Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 sm:mt-16">
          {stats.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx, duration: 0.5 }}
              className={`p-4 sm:p-5 rounded-2xl border transition-all hover:scale-[1.02] ${
                isDark
                  ? 'bg-slate-900/70 border-slate-800 hover:border-slate-700'
                  : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${item.color} flex items-center justify-center text-white shadow-md`}>
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 dark:text-white block">
                    {item.count}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {item.label[language]}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};
