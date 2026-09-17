import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, ArrowRight, Layers, Cpu, Code2, Bot, Globe, ShieldCheck } from 'lucide-react';
import { ActivePage, Language, ThemeMode } from '../types';
import { technologiesData } from '../data/techData';
import { hardwareData } from '../data/hardwareData';
import { programmingData } from '../data/programmingData';
import { arduinoProjectsData } from '../data/roboticsData';
import { aiTopicsData, internetTopicsData, securityTopicsData } from '../data/aiInternetSecurityData';
import { translations } from '../translations';
import { soundFx } from '../utils/audio';

interface SearchResultItem {
  id: string;
  title: string;
  category: string;
  page: ActivePage;
  icon: React.ComponentType<{ className?: string }>;
  snippet: string;
}

interface SearchBarModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  theme: ThemeMode;
  onSelectResult: (page: ActivePage, itemId?: string) => void;
}

export const SearchBarModal: React.FC<SearchBarModalProps> = ({
  isOpen,
  onClose,
  language,
  theme,
  onSelectResult,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const t = translations[language];
  const isDark = theme === 'dark';

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        if (isOpen) onClose();
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Aggregate searchable items
  const allSearchable: SearchResultItem[] = [
    ...technologiesData.map((item) => ({
      id: item.id,
      title: item.localizedName?.[language] || item.title || item.name || '',
      category: 'Texnologiyalar',
      page: 'tech' as ActivePage,
      icon: Layers,
      snippet: item.shortDesc?.[language] || '',
    })),
    ...hardwareData.map((item) => ({
      id: item.id,
      title: item.name || '',
      category: 'Qurilmalar (Hardware)',
      page: 'devices' as ActivePage,
      icon: Cpu,
      snippet: item.what?.[language] || '',
    })),
    ...programmingData.map((item) => ({
      id: item.id,
      title: item.name || '',
      category: 'Dasturlash Tillari',
      page: 'programming' as ActivePage,
      icon: Code2,
      snippet: item.purpose?.[language] || '',
    })),
    ...arduinoProjectsData.map((item) => ({
      id: item.id,
      title: item.title?.[language] || '',
      category: 'Robototexnika & Arduino',
      page: 'robotics' as ActivePage,
      icon: Bot,
      snippet: item.workingPrinciple?.[language] || '',
    })),
    ...aiTopicsData.map((item) => ({
      id: item.id,
      title: item.title?.[language] || '',
      category: 'Sun’iy Intellekt',
      page: 'ai' as ActivePage,
      icon: Bot,
      snippet: item.shortDesc?.[language] || '',
    })),
    ...internetTopicsData.map((item) => ({
      id: item.id,
      title: item.title || '',
      category: 'Internet',
      page: 'internet' as ActivePage,
      icon: Globe,
      snippet: item.desc?.[language] || '',
    })),
    ...securityTopicsData.map((item) => ({
      id: item.id,
      title: item.title?.[language] || '',
      category: 'Kiberxavfsizlik',
      page: 'security' as ActivePage,
      icon: ShieldCheck,
      snippet: item.desc?.[language] || '',
    })),
  ];

  const trimmed = query.trim().toLowerCase();
  const results = trimmed
    ? allSearchable.filter(
        (item) =>
          (item.title || '').toLowerCase().includes(trimmed) ||
          (item.snippet || '').toLowerCase().includes(trimmed) ||
          (item.category || '').toLowerCase().includes(trimmed)
      )
    : [];

  const handleSelect = (item: SearchResultItem) => {
    soundFx.playClick();
    onSelectResult(item.page, item.id);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div 
        id="search-modal-backdrop"
        className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/75 backdrop-blur-md"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.2 }}
          className={`w-full max-w-2xl rounded-3xl border shadow-2xl overflow-hidden ${
            isDark ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-800'
          }`}
        >
          {/* Input Header */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-800/60 dark:border-slate-800">
            <Search className="w-5 h-5 text-cyan-400 shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full bg-transparent text-sm sm:text-base outline-none placeholder:text-slate-400 font-medium"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="p-1 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={onClose}
              className="px-2 py-1 text-xs rounded-lg bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              Esc
            </button>
          </div>

          {/* Quick Suggestions when empty */}
          {!trimmed && (
            <div className="p-5">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                Mashhur qidiruv so‘rovlari:
              </div>
              <div className="flex flex-wrap gap-2">
                {['Arduino', 'Python', '5G', 'Robot', 'CPU', 'Neural Network', 'HTTPS', 'Phishing', 'Kvant'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => {
                      soundFx.playClick();
                      setQuery(tag);
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-medium border transition-colors cursor-pointer ${
                      isDark 
                        ? 'bg-slate-950 border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40' 
                        : 'bg-slate-100 border-slate-200 text-slate-700 hover:text-cyan-600'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Search Results List */}
          {trimmed && (
            <div className="max-h-96 overflow-y-auto p-3 space-y-1">
              {results.length > 0 ? (
                results.slice(0, 15).map((item) => (
                  <button
                    key={`${item.page}-${item.id}`}
                    onClick={() => handleSelect(item)}
                    className={`w-full text-left p-3 rounded-2xl flex items-start justify-between gap-4 transition-colors cursor-pointer group ${
                      isDark 
                        ? 'hover:bg-slate-800/80 text-slate-200' 
                        : 'hover:bg-slate-100 text-slate-800'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center shrink-0 mt-0.5 text-cyan-400">
                        <item.icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-sm font-bold group-hover:text-cyan-400 transition-colors">
                            {item.title}
                          </span>
                          <span className="text-[10px] px-2 py-0.5 rounded-md font-mono bg-slate-800 text-slate-300">
                            {item.category}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 line-clamp-1">
                          {item.snippet}
                        </p>
                      </div>
                    </div>
                    <div className="text-xs font-semibold text-cyan-400 flex items-center gap-1 shrink-0 pt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>O‘tish</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </button>
                ))
              ) : (
                <div className="py-12 text-center">
                  <p className="text-sm font-semibold text-slate-300 mb-1">
                    {t.noSearchResults}
                  </p>
                  <p className="text-xs text-slate-500">
                    "{query}" bo‘yicha hech narsa topilmadi. Boshqa so‘z bilan sinab ko‘ring.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Footer info */}
          <div className="p-3 px-5 border-t border-slate-800/60 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
            <span>{results.length > 0 ? `${results.length} ta natija topildi` : 'Real vaqtda qidiruv'}</span>
            <span className="font-mono">Enter ↵ orqali ochish</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
