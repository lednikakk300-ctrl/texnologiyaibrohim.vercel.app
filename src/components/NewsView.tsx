import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Newspaper, RefreshCw, WifiOff, Calendar, Clock, 
  ArrowRight, X, AlertCircle, Sparkles, CheckCircle2
} from 'lucide-react';
import { Language, ThemeMode, NewsItem } from '../types';
import { initialNewsData } from '../data/newsData';
import { translations } from '../translations';
import { soundFx } from '../utils/audio';

interface NewsViewProps {
  language: Language;
  theme: ThemeMode;
  isOnline: boolean;
}

export const NewsView: React.FC<NewsViewProps> = ({
  language,
  theme,
  isOnline,
}) => {
  const [news, setNews] = useState<NewsItem[]>(initialNewsData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string>('Bugun, 09:30');
  const t = translations[language];
  const isDark = theme === 'dark';

  const handleRefresh = () => {
    soundFx.playClick();
    setLoading(true);
    setError(null);

    // Simulate network fetch with live fallback
    setTimeout(() => {
      setLoading(false);
      if (!isOnline) {
        setError(t.offlineNewsWarning);
      } else {
        const now = new Date();
        setLastUpdated(`${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`);
        // Optionally prepend fresh headline simulation
        soundFx.playSuccess();
      }
    }, 900);
  };

  return (
    <div id="news-view" className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header with Refresh and Live Status */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 text-cyan-500 font-bold text-xs uppercase tracking-wider mb-2">
            <Newspaper className="w-4 h-4" />
            <span>Texnologik Yangiliklar</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Dunyo Texnologiya Xabarlari
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
            Oxirgi yangilanish: <span className="font-mono font-bold text-cyan-400">{lastUpdated}</span>
          </p>
        </div>

        {/* Refresh & Retry Controls */}
        <div className="flex items-center gap-2">
          <button
            id="btn-refresh-news"
            onClick={handleRefresh}
            disabled={loading}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-all active:scale-95 cursor-pointer disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
            <span>{loading ? t.loadingNews : t.btnRefresh}</span>
          </button>
        </div>
      </div>

      {/* Offline Warning Banner if not online */}
      {!isOnline && (
        <div className="mb-6 p-4 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs sm:text-sm flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <WifiOff className="w-5 h-5 text-amber-400 shrink-0" />
            <span>{t.offlineNewsWarning}</span>
          </div>
          <button
            onClick={handleRefresh}
            className="px-3 py-1 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 font-bold underline cursor-pointer"
          >
            {t.btnRetry}
          </button>
        </div>
      )}

      {/* Loading state indicator */}
      {loading && (
        <div className="py-12 flex flex-col items-center justify-center text-center">
          <RefreshCw className="w-8 h-8 text-cyan-400 animate-spin mb-3" />
          <p className="text-sm font-semibold text-slate-300">{t.loadingNews}</p>
        </div>
      )}

      {/* Error state */}
      {error && !loading && (
        <div className="mb-6 p-4 rounded-2xl bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs sm:text-sm flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* News Cards Grid */}
      {!loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {news.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className={`rounded-3xl border overflow-hidden transition-all duration-300 hover:shadow-2xl flex flex-col justify-between ${
                isDark 
                  ? 'bg-slate-900/90 border-slate-800 hover:border-slate-700' 
                  : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
              }`}
            >
              <div>
                <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title[language]}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-slate-950/80 text-cyan-300 border border-cyan-500/30 backdrop-blur-md">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-slate-400 mb-2 font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      {item.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {item.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                    {item.title[language]}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                    {item.summary[language]}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-slate-800/40 dark:border-slate-800">
                <span className="text-xs text-slate-500 font-mono">
                  Manba: {item.source}
                </span>

                <button
                  id={`btn-news-detail-${item.id}`}
                  onClick={() => {
                    soundFx.playClick();
                    setSelectedNews(item);
                  }}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-cyan-500/15 hover:bg-cyan-500 text-cyan-500 dark:text-cyan-300 hover:text-slate-950 transition-colors cursor-pointer"
                >
                  <span>{t.btnDetail}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* News Article Modal */}
      <AnimatePresence>
        {selectedNews && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm overflow-y-auto"
            onClick={(e) => {
              if (e.target === e.currentTarget) setSelectedNews(null);
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className={`relative w-full max-w-2xl rounded-3xl border shadow-2xl overflow-hidden ${
                isDark ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-800'
              }`}
            >
              <div className="relative h-56 w-full">
                <img
                  src={selectedNews.image}
                  alt={selectedNews.title[language]}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <button
                  onClick={() => setSelectedNews(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 text-white backdrop-blur-md cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                  <span>{selectedNews.date}</span>
                  <span>•</span>
                  <span>{selectedNews.category}</span>
                </div>

                <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                  {selectedNews.title[language]}
                </h3>

                <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  {selectedNews.content[language]}
                </p>

                <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
                  <span>Manba: {selectedNews.source}</span>
                  <button
                    onClick={() => setSelectedNews(null)}
                    className="px-4 py-1.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs cursor-pointer"
                  >
                    {t.btnClose}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
