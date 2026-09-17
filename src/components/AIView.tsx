import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Brain, Cpu, Eye, MessageSquare, Sparkles, 
  Bot, Image, Video, Network, Layers, ArrowRight, Lightbulb, Globe
} from 'lucide-react';
import { Language, ThemeMode, AITopic } from '../types';
import { aiTopicsData } from '../data/aiInternetSecurityData';
import { soundFx } from '../utils/audio';

interface AIViewProps {
  language: Language;
  theme: ThemeMode;
}

export const AIView: React.FC<AIViewProps> = ({
  language,
  theme,
}) => {
  const [selectedTopicId, setSelectedTopicId] = useState<string>(aiTopicsData[0].id);
  const isDark = theme === 'dark';

  const currentTopic: AITopic = 
    aiTopicsData.find((t) => t.id === selectedTopicId) || aiTopicsData[0];

  const getIcon = (name: string) => {
    switch (name) {
      case 'Brain': return Brain;
      case 'Cpu': return Cpu;
      case 'Layers': return Layers;
      case 'Network': return Network;
      case 'Eye': return Eye;
      case 'MessageSquare': return MessageSquare;
      case 'Sparkles': return Sparkles;
      case 'Bot': return Bot;
      case 'Image': return Image;
      case 'Video': return Video;
      default: return Brain;
    }
  };

  return (
    <div id="ai-view" className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-cyan-500 font-bold text-xs uppercase tracking-wider mb-2">
          <Brain className="w-4 h-4" />
          <span>Intellektual Tizimlar</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          Sun’iy Intellekt (Artificial Intelligence)
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2 max-w-3xl">
          Neyron tarmoqlardan generativ AI gacha bo‘lgan 10 ta asosiy mavzu: sodda tushuntirishlar, amaliy misollar va insoniyat hayotidagi o‘rni.
        </p>
      </div>

      {/* 2-Column Responsive Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: 10 AI Topics Vertical Navigation List */}
        <div className="lg:col-span-4 space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 px-1">
            Mavzular Ro‘yxati (10 ta):
          </div>
          {aiTopicsData.map((topic) => {
            const isSelected = topic.id === selectedTopicId;
            const IconComponent = getIcon(topic.icon);
            return (
              <button
                key={topic.id}
                id={`ai-topic-${topic.id}`}
                onClick={() => {
                  soundFx.playClick();
                  setSelectedTopicId(topic.id);
                }}
                className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between gap-3 cursor-pointer ${
                  isSelected
                    ? isDark
                      ? 'bg-cyan-500/15 border-cyan-500/40 text-white shadow-lg'
                      : 'bg-cyan-50 border-cyan-300 text-slate-900 shadow-md'
                    : isDark
                      ? 'bg-slate-900/70 border-slate-800 text-slate-300 hover:bg-slate-850'
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                    isSelected ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-slate-800 text-cyan-400'
                  }`}>
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <span className="text-xs font-bold truncate block">
                      {topic.title[language]}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      {topic.badge}
                    </span>
                  </div>
                </div>
                <ArrowRight className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-cyan-400' : 'text-slate-600'}`} />
              </button>
            );
          })}
        </div>

        {/* Right Side: Detailed Deep-Dive Container */}
        <motion.div
          key={currentTopic.id}
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className={`lg:col-span-8 rounded-3xl border p-6 sm:p-8 space-y-6 shadow-xl ${
            isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200'
          }`}
        >
          {/* Header */}
          <div className="flex items-start justify-between flex-wrap gap-3 pb-4 border-b border-slate-800/40 dark:border-slate-800">
            <div>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/15 text-cyan-400 border border-cyan-500/30">
                {currentTopic.badge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight mt-2">
                {currentTopic.title[language]}
              </h3>
            </div>
          </div>

          {/* Qisqa tavsif */}
          <p className="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
            {currentTopic.shortDesc[language]}
          </p>

          {/* Sodda tushuntirish (Simple Analogy) */}
          <div className={`p-5 rounded-2xl border ${
            isDark ? 'bg-cyan-950/20 border-cyan-900/40' : 'bg-cyan-50/70 border-cyan-200'
          }`}>
            <div className="flex items-center gap-2 text-xs font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-2">
              <Lightbulb className="w-4 h-4" />
              <span>Sodda Tushuntirish (Oddiy so‘zlar bilan)</span>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-200 italic">
              "{currentTopic.simpleExplanation[language]}"
            </p>
          </div>

          {/* Hayotiy misollar (Examples) */}
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              Amaliy Misollar:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentTopic.examples.map((ex, i) => (
                <div 
                  key={i}
                  className={`p-3.5 rounded-2xl border flex items-center gap-3 text-xs sm:text-sm font-medium ${
                    isDark ? 'bg-slate-950 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
                  <span>{ex[language]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hayotda qo‘llanishi va Ta’siri (Real World Impact) */}
          <div className={`p-5 rounded-2xl border ${
            isDark ? 'bg-indigo-950/20 border-indigo-900/40' : 'bg-indigo-50/70 border-indigo-200'
          }`}>
            <div className="flex items-center gap-2 text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-2">
              <Globe className="w-4 h-4" />
              <span>Hayotda Qo‘llanishi va Kelajakdagi O‘rni</span>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              {currentTopic.realWorldImpact[language]}
            </p>
          </div>

        </motion.div>
      </div>
    </div>
  );
};
