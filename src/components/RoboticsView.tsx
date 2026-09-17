import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Bot, Cpu, Copy, Check, Terminal, CircuitBoard, 
  Wrench, Layers, Zap, Info, ChevronRight, Activity, Radio, Sun, Hand, Sparkles
} from 'lucide-react';
import { Language, ThemeMode, ArduinoProject, RoboticsComponent } from '../types';
import { arduinoProjectsData, roboticsComponentsData } from '../data/roboticsData';
import { soundFx } from '../utils/audio';

interface RoboticsViewProps {
  language: Language;
  theme: ThemeMode;
}

export const RoboticsView: React.FC<RoboticsViewProps> = ({
  language,
  theme,
}) => {
  const [activeTab, setActiveTab] = useState<'projects' | 'theory'>('projects');
  const [selectedProjectId, setSelectedProjectId] = useState<string>(arduinoProjectsData[0].id);
  const [copiedCode, setCopiedCode] = useState(false);
  const isDark = theme === 'dark';

  const currentProject: ArduinoProject = 
    arduinoProjectsData.find((p) => p.id === selectedProjectId) || arduinoProjectsData[0];

  const handleCopyCode = () => {
    soundFx.playClick();
    navigator.clipboard?.writeText(currentProject.code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const getComponentIcon = (name: string) => {
    switch (name) {
      case 'Bot': return Bot;
      case 'Activity': return Activity;
      case 'Cpu': return Cpu;
      case 'Radio': return Radio;
      case 'Sun': return Sun;
      case 'Zap': return Zap;
      case 'Hand': return Hand;
      case 'Sparkles': return Sparkles;
      default: return Cpu;
    }
  };

  return (
    <div id="robotics-view" className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-indigo-500 font-bold text-xs uppercase tracking-wider mb-2">
          <Bot className="w-4 h-4" />
          <span>Avtomatika & Mexatronika</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          Robototexnika va Arduino Loyihalari
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2 max-w-3xl">
          Robotlarning tuzilishi, apparat qismlari hamda 7 ta to‘liq amaliy Arduino loyihasi: ulanish sxemasi, tayyor kodi va bosqichma-bosqich qo‘llanmasi.
        </p>
      </div>

      {/* Mode Switcher Toggle */}
      <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 w-fit mb-8">
        <button
          id="tab-arduino-projects"
          onClick={() => {
            soundFx.playClick();
            setActiveTab('projects');
          }}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'projects'
              ? 'bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-md'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <CircuitBoard className="w-4 h-4" />
          <span>7 ta Arduino Loyihasi</span>
        </button>

        <button
          id="tab-robotics-theory"
          onClick={() => {
            soundFx.playClick();
            setActiveTab('theory');
          }}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            activeTab === 'theory'
              ? 'bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-md'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          <Bot className="w-4 h-4" />
          <span>Robot Tuzilishi & Asoslari</span>
        </button>
      </div>

      {/* Mode 1: 7 Arduino Projects */}
      {activeTab === 'projects' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Project Selector List */}
          <div className="lg:col-span-4 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 px-1">
              Amaliy Loyihalar Ro‘yxati:
            </div>
            {arduinoProjectsData.map((p, idx) => {
              const isSelected = p.id === selectedProjectId;
              return (
                <button
                  key={p.id}
                  id={`project-btn-${p.id}`}
                  onClick={() => {
                    soundFx.playClick();
                    setSelectedProjectId(p.id);
                  }}
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between gap-3 cursor-pointer ${
                    isSelected
                      ? isDark
                        ? 'bg-indigo-500/15 border-indigo-500/40 text-white shadow-lg'
                        : 'bg-indigo-50 border-indigo-300 text-slate-900 shadow-md'
                      : isDark
                        ? 'bg-slate-900/70 border-slate-800 text-slate-300 hover:bg-slate-850'
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-bold font-mono ${
                      isSelected ? 'bg-indigo-500 text-white' : 'bg-slate-800 text-slate-400'
                    }`}>
                      {idx + 1}
                    </span>
                    <div>
                      <div className="text-sm font-bold leading-tight">
                        {p.title[language]}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5">
                        {p.difficulty} • {p.componentsNeeded.length} ta detal
                      </div>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 shrink-0 ${isSelected ? 'text-indigo-400' : 'text-slate-600'}`} />
                </button>
              );
            })}
          </div>

          {/* Right: Detailed Arduino Project Guide */}
          <motion.div
            key={currentProject.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`lg:col-span-8 rounded-3xl border p-6 sm:p-8 space-y-6 shadow-xl ${
              isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200'
            }`}
          >
            {/* Title & Badge */}
            <div className="flex items-center justify-between flex-wrap gap-2 pb-4 border-b border-slate-800/40 dark:border-slate-800">
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-indigo-500/15 text-indigo-400 border border-indigo-500/30">
                  {currentProject.difficulty}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight mt-2">
                  {currentProject.title[language]}
                </h3>
              </div>
            </div>

            {/* Ishlash prinsipi (Working Principle) */}
            <div className={`p-4 rounded-2xl border ${
              isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}>
              <div className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5" />
                <span>Ishlash Prinsipi</span>
              </div>
              <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                {currentProject.workingPrinciple[language]}
              </p>
            </div>

            {/* Kerakli qismlar (Components needed) */}
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Wrench className="w-3.5 h-3.5 text-cyan-400" />
                <span>Kerakli qismlar ({currentProject.componentsNeeded.length}):</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {currentProject.componentsNeeded.map((comp, i) => (
                  <div 
                    key={i}
                    className={`p-3 rounded-xl border text-xs font-medium flex items-center gap-2 ${
                      isDark ? 'bg-slate-950 border-slate-800 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
                    <span>{comp[language]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ulanish sxemasi (Circuit Scheme) */}
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <CircuitBoard className="w-3.5 h-3.5 text-amber-400" />
                <span>Ulanish Sxemasi:</span>
              </div>
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs sm:text-sm text-slate-800 dark:text-amber-200 leading-relaxed font-mono">
                {currentProject.wiringDiagramDesc[language]}
              </div>
            </div>

            {/* Arduino KODI (Code Box) */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Arduino C++ Kodi:</span>
                </div>
                <button
                  id="btn-copy-arduino-code"
                  onClick={handleCopyCode}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-sans font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors cursor-pointer"
                >
                  {copiedCode ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Nusxalandi!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Kodni nusxalash</span>
                    </>
                  )}
                </button>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4 font-mono text-xs sm:text-sm text-cyan-300 overflow-x-auto leading-relaxed shadow-inner max-h-72">
                <pre>{currentProject.code}</pre>
              </div>
            </div>

            {/* Bosqichma-bosqich qo‘llanma (Step-by-step) */}
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-indigo-400" />
                <span>Bosqichma-bosqich bajarish:</span>
              </div>
              <div className="space-y-2.5">
                {currentProject.stepByStep.map((step, idx) => (
                  <div 
                    key={idx}
                    className={`p-3.5 rounded-2xl border flex items-start gap-3 text-xs sm:text-sm ${
                      isDark ? 'bg-slate-950/80 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
                    }`}
                  >
                    <span className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center font-bold font-mono text-xs shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{step[language]}</span>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      )}

      {/* Mode 2: Robotics Theory & Foundations */}
      {activeTab === 'theory' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-8"
        >
          {/* Arduino platform info banner */}
          <div className={`p-6 sm:p-8 rounded-3xl border shadow-lg ${
            isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200'
          }`}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase font-bold">Ochiq Kodli Platforma</span>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                  Arduino va Mikrokontrollerlar
                </h3>
              </div>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              Arduino — o‘zida mikrokontroller (ATmega328P), kirish/chiqish (GPIO) pinlari va USB dasturlash interfeysini birlashtirgan sodda va qulay elektronika platformasidir. U orqali dunyodagi millionlab muhandislar va o‘quvchilar avtomatlashtirilgan aqlli tizimlar, robotlar va IoT qurilmalar yasashmoqda.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-xl text-xs bg-slate-800 text-cyan-300 font-mono">Arduino Uno (Klassik)</span>
              <span className="px-3 py-1 rounded-xl text-xs bg-slate-800 text-cyan-300 font-mono">Arduino Nano (Kompakt)</span>
              <span className="px-3 py-1 rounded-xl text-xs bg-slate-800 text-cyan-300 font-mono">Arduino Mega (Ko‘p pinli)</span>
              <span className="px-3 py-1 rounded-xl text-xs bg-slate-800 text-cyan-300 font-mono">ESP32 / ESP8266 (Wi-Fi/Bluetooth)</span>
            </div>
          </div>

          {/* Grid of 8 Robotics Components & Anatomy */}
          <div>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4">
              Robotning Asosiy Qismlari va Qurilmalari ({roboticsComponentsData.length})
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {roboticsComponentsData.map((part) => {
                const IconComponent = getComponentIcon(part.icon);
                return (
                  <div
                    key={part.id}
                    className={`p-5 rounded-3xl border flex flex-col justify-between ${
                      isDark ? 'bg-slate-900/70 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                    }`}
                  >
                    <div>
                      <div className="w-10 h-10 rounded-2xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-3">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                        {part.name}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                        {part.desc[language]}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-slate-800/60 dark:border-slate-800">
                      <span className="text-[11px] text-indigo-400 font-mono block mb-1">Amaliy qo‘llanishi:</span>
                      <p className="text-[11px] text-slate-400">
                        {part.exampleUse[language]}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};
