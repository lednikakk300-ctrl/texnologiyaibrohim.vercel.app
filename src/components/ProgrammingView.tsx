import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Code2, Copy, Check, Play, Terminal, User, 
  Calendar, CheckCircle2, Sparkles
} from 'lucide-react';
import { Language, ThemeMode, ProgrammingLanguage } from '../types';
import { programmingData } from '../data/programmingData';
import { soundFx } from '../utils/audio';

interface ProgrammingViewProps {
  language: Language;
  theme: ThemeMode;
}

export const ProgrammingView: React.FC<ProgrammingViewProps> = ({
  language,
  theme,
}) => {
  const [selectedLangId, setSelectedLangId] = useState<string>(programmingData[0].id);
  const [copied, setCopied] = useState(false);
  const [runOutput, setRunOutput] = useState<string | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const isDark = theme === 'dark';

  const currentLang: ProgrammingLanguage = 
    programmingData.find((l) => l.id === selectedLangId) || programmingData[0];

  const getSimulatedOutput = (id: string) => {
    switch (id) {
      case 'python':
        return '>>> Salom, Dunyo!\n>>> Ro‘yxat kvadratlari: [1, 4, 9, 16, 25]\n>>> Jarayon 0.02 soniyada muvaffaqiyatli yakunlandi.';
      case 'javascript':
        return '> Texnologiya platformasiga xush kelibsiz!\n> Foydalanuvchilar soni: 1,240 ta\n> Event loop: Barcha hodisalar bajarildi.';
      case 'cpp':
        return 'Salom, zamonaviy C++ olami!\nXotira ajratildi: 64 bayt.\n[Program finished with exit code 0]';
      case 'html':
        return '<!DOCTYPE html> tahlil qilindi.\nDOM daraxti 12 ta element bilan render qilindi.';
      case 'css':
        return 'CSS qoidalari qo‘llanildi: Grid & Flexbox aktiv.\nAnimatsiya 60fps tezlikda ishlamoqda.';
      case 'sql':
        return 'Query executed successfully.\n5 rows returned in 1.4ms (Indexed scan).';
      case 'java':
        return 'JVM versiyasi: OpenJDK 21 LTS\nMain thread: Barcha testlar muvaffaqiyatli o‘tdi.';
      case 'csharp':
        return '.NET 8.0 Runtime faollashtirildi.\nAsinxron task muvaffaqiyatli yakunlandi.';
      case 'php':
        return 'PHP 8.3 Engine: HTTP 200 OK javobi qaytarildi.';
      default:
        return 'Kodni bajarish muvaffaqiyatli yakunlandi.';
    }
  };

  const handleCopyCode = () => {
    soundFx.playClick();
    navigator.clipboard?.writeText(currentLang.codeSample);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSimulateRun = () => {
    soundFx.playSuccess();
    setIsRunning(true);
    setRunOutput(null);
    setTimeout(() => {
      setIsRunning(false);
      setRunOutput(getSimulatedOutput(currentLang.id));
    }, 600);
  };

  return (
    <div id="programming-view" className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-emerald-500 font-bold text-xs uppercase tracking-wider mb-2">
          <Code2 className="w-4 h-4" />
          <span>Dasturiy Ta’minot & Kod</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          Dasturlash Tillari Laboratoriyasi
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2 max-w-3xl">
          Dunyoning eng mashhur dasturlash tillari: ularning vazifasi, imkoniyatlari va interaktiv kod muharririda sinovdan o‘tkazing.
        </p>
      </div>

      {/* Language Selector Horizontal Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
        {programmingData.map((lang) => {
          const isSelected = lang.id === selectedLangId;
          return (
            <button
              key={lang.id}
              id={`lang-tab-${lang.id}`}
              onClick={() => {
                soundFx.playClick();
                setSelectedLangId(lang.id);
                setRunOutput(null);
              }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all border cursor-pointer ${
                isSelected
                  ? 'bg-emerald-500 text-slate-950 border-emerald-400 shadow-lg shadow-emerald-500/20 scale-105'
                  : isDark
                    ? 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              <span>{lang.name}</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-md ${
                isSelected ? 'bg-slate-950/20 text-slate-950' : 'bg-slate-800 text-slate-400'
              }`}>
                {lang.badge}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Grid: Info + Interactive IDE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Language Overview Card */}
        <motion.div
          key={currentLang.id}
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          className={`lg:col-span-5 rounded-3xl border p-6 sm:p-8 space-y-6 shadow-xl ${
            isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200'
          }`}
        >
          {/* Header & Meta */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                {currentLang.badge}
              </span>
              <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                {currentLang.year && (
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    {currentLang.year}
                  </span>
                )}
              </div>
            </div>

            <h3 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              {currentLang.name}
            </h3>

            {currentLang.creator && (
              <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mt-1">
                <User className="w-3.5 h-3.5" />
                <span>Muallif: <strong className="text-slate-700 dark:text-slate-200">{currentLang.creator}</strong></span>
              </div>
            )}
          </div>

          {/* Purpose */}
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            {currentLang.purpose[language]}
          </p>

          {/* Where Used */}
          {currentLang.whereUsed && currentLang.whereUsed.length > 0 && (
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                Qo‘llanilish sohalari:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {currentLang.whereUsed.map((uc, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1 rounded-xl text-xs font-medium border ${
                      isDark ? 'bg-slate-950 border-slate-800 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
                    }`}
                  >
                    {uc[language]}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Key Features */}
          {currentLang.keyFeatures && currentLang.keyFeatures.length > 0 && (
            <div>
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-2">
                Afzalliklari va Imkoniyatlari:
              </span>
              <div className="space-y-2">
                {currentLang.keyFeatures.map((p, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{p[language]}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>

        {/* Right: Interactive Code Editor Playground */}
        <motion.div
          key={`ide-${currentLang.id}`}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-7 rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl overflow-hidden"
        >
          {/* Editor Header Bar */}
          <div className="px-5 py-3.5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="text-xs text-slate-400 ml-2 font-sans font-medium">
                {currentLang.name} Dastur namunasi
              </span>
            </div>

            <div className="flex items-center gap-2">
              {/* Copy Button */}
              <button
                id="btn-copy-code"
                onClick={handleCopyCode}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-sans font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Nusxalandi!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Nusxalash</span>
                  </>
                )}
              </button>

              {/* Run Simulation Button */}
              <button
                id="btn-run-code"
                onClick={handleSimulateRun}
                disabled={isRunning}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-sans font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-md shadow-emerald-500/20 transition-all active:scale-95 cursor-pointer disabled:opacity-50"
              >
                <Play className="w-3.5 h-3.5 fill-slate-950" />
                <span>{isRunning ? 'Bajarilmoqda...' : 'Ishga tushirish'}</span>
              </button>
            </div>
          </div>

          {/* Code Body with line numbers */}
          <div className="p-4 sm:p-6 overflow-x-auto text-xs sm:text-sm leading-relaxed flex font-mono">
            <div className="select-none text-slate-600 pr-4 text-right border-r border-slate-800 shrink-0">
              {currentLang.codeSample.split('\n').map((_, i) => (
                <div key={i}>{i + 1}</div>
              ))}
            </div>
            <div className="pl-4 text-emerald-300 whitespace-pre">
              {currentLang.codeSample}
            </div>
          </div>

          {/* Code Explanation Banner */}
          <div className="px-5 py-3.5 bg-slate-900/50 border-t border-slate-800 text-xs font-sans text-slate-400">
            <span className="font-bold text-cyan-400">Izoh: </span>
            {currentLang.codeExplanation[language]}
          </div>

          {/* Simulated Console Output */}
          {(runOutput || isRunning) && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="border-t border-slate-800 bg-black/80 p-5 font-mono text-xs"
            >
              <div className="flex items-center gap-2 text-slate-400 mb-2 font-sans font-bold">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                <span>Konsol Natijasi (Simulyatsiya):</span>
              </div>
              {isRunning ? (
                <div className="text-slate-400 animate-pulse">
                  Kompilyatsiya qilinmoqda va ishga tushirilmoqda...
                </div>
              ) : (
                <div className="text-emerald-400 whitespace-pre-wrap leading-relaxed">
                  {runOutput}
                </div>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};
