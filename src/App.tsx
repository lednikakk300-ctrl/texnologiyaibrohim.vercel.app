import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SplashScreen } from './components/SplashScreen';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TechView } from './components/TechView';
import { DevicesView } from './components/DevicesView';
import { ProgrammingView } from './components/ProgrammingView';
import { RoboticsView } from './components/RoboticsView';
import { AIView } from './components/AIView';
import { InternetView } from './components/InternetView';
import { SecurityView } from './components/SecurityView';
import { NewsView } from './components/NewsView';
import { TestView } from './components/TestView';
import { AboutTechView } from './components/AboutTechView';
import { FavoritesView } from './components/FavoritesView';
import { SettingsView } from './components/SettingsView';
import { DetailModal } from './components/DetailModal';
import { SearchBarModal } from './components/SearchBarModal';
import { Footer } from './components/Footer';

import { ActivePage, Language, ThemeMode, TechnologyItem } from './types';
import { technologiesData } from './data/techData';
import { soundFx } from './utils/audio';

// Home Page Featured Section Helper
import { ArrowRight, Sparkles, Cpu, Code2, Bot, ShieldCheck, Zap } from 'lucide-react';
import { translations } from './translations';

export default function App() {
  const [showSplash, setShowSplash] = useState<boolean>(true);
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [language, setLanguage] = useState<Language>(() => {
    return (localStorage.getItem('tech_app_lang') as Language) || 'uz';
  });
  const [theme, setTheme] = useState<ThemeMode>(() => {
    return (localStorage.getItem('tech_app_theme') as ThemeMode) || 'dark';
  });
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('tech_app_favorites');
      return saved ? JSON.parse(saved) : ['ai-general', 'arduino-led', 'python-lang'];
    } catch {
      return ['ai-general'];
    }
  });
  const [isOnline, setIsOnline] = useState<boolean>(() => {
    return typeof navigator !== 'undefined' ? navigator.onLine : true;
  });
  const [searchOpen, setSearchOpen] = useState(false);
  const [detailItem, setDetailItem] = useState<TechnologyItem | null>(null);

  const [soundEnabled, setSoundEnabled] = useState(true);
  const [animationsEnabled, setAnimationsEnabled] = useState(true);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  // Sync theme to DOM HTML element
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('tech_app_theme', theme);
  }, [theme]);

  // Sync language
  useEffect(() => {
    localStorage.setItem('tech_app_lang', language);
  }, [language]);

  // Sync favorites
  useEffect(() => {
    localStorage.setItem('tech_app_favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Listen to network status
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Keyboard shortcut Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const handleClearData = () => {
    soundFx.playSuccess();
    setFavorites([]);
    localStorage.removeItem('tech_app_favorites');
    alert('Barcha saqlangan ma’lumotlar tozalandi.');
  };

  const handleOpenDetail = (item: TechnologyItem) => {
    setDetailItem(item);
  };

  const handleSelectSearchResult = (page: ActivePage, itemId?: string) => {
    setActivePage(page);
    if (page === 'tech' && itemId) {
      const found = technologiesData.find((t) => t.id === itemId);
      if (found) {
        setDetailItem(found);
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const t = translations[language];
  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen font-sans antialiased transition-colors duration-200 ${
      isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* 1. Splash Screen on Launch */}
      <AnimatePresence>
        {showSplash && (
          <SplashScreen 
            onFinish={() => setShowSplash(false)} 
            language={language} 
          />
        )}
      </AnimatePresence>

      {/* 2. Top Navigation Bar */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        language={language}
        setLanguage={setLanguage}
        theme={theme}
        toggleTheme={toggleTheme}
        favoritesCount={favorites.length}
        openSearch={() => setSearchOpen(true)}
        isOnline={isOnline}
      />

      {/* 3. Main View Router Container */}
      <main className="min-h-[calc(100vh-16rem)]">
        {activePage === 'home' && (
          <div id="page-home" className="space-y-12">
            {/* Hero Banner Section */}
            <HeroSection
              language={language}
              theme={theme}
              onNavigate={setActivePage}
            />

            {/* Featured Technologies Teaser Grid on Home */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
              <div className="flex items-center justify-between gap-4 mb-8">
                <div>
                  <div className="flex items-center gap-2 text-cyan-500 font-bold text-xs uppercase tracking-wider mb-1">
                    <Sparkles className="w-4 h-4" />
                    <span>Eng Sara Texnologiyalar</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                    Kelajakni Shakllantirayotgan Yechimlar
                  </h2>
                </div>

                <button
                  onClick={() => {
                    soundFx.playClick();
                    setActivePage('tech');
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-500 hover:text-cyan-400 cursor-pointer"
                >
                  <span>Barchasini ko‘rish (17)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* 4 Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {technologiesData.slice(0, 4).map((item) => {
                  const itemTitle = item.localizedName?.[language] || item.title || item.name;
                  return (
                    <div
                      key={item.id}
                      onClick={() => {
                        soundFx.playClick();
                        setDetailItem(item);
                      }}
                      className={`p-5 rounded-3xl border transition-all hover:scale-[1.02] hover:shadow-xl cursor-pointer flex flex-col justify-between ${
                        isDark ? 'bg-slate-900/80 border-slate-800 hover:border-cyan-500/40' : 'bg-white border-slate-200 hover:border-cyan-400 shadow-sm'
                      }`}
                    >
                      <div>
                        <div className="h-36 rounded-2xl overflow-hidden mb-4 relative">
                          <img 
                            src={item.image} 
                            alt={itemTitle} 
                            className="w-full h-full object-cover" 
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute top-2 left-2">
                            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-slate-950/80 text-cyan-300 backdrop-blur-md">
                              {item.category}
                            </span>
                          </div>
                        </div>

                        <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">
                          {itemTitle}
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mb-4">
                          {item.shortDesc?.[language] || ''}
                        </p>
                      </div>

                      <div className="flex items-center justify-between text-xs font-bold text-cyan-500 pt-3 border-t border-slate-800/40 dark:border-slate-800">
                        <span>Batafsil o‘qish</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Quick Interactive Exploration Hub Banner */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
              <div className={`rounded-3xl p-8 border shadow-xl relative overflow-hidden ${
                isDark 
                  ? 'bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border-slate-800' 
                  : 'bg-gradient-to-r from-cyan-50 via-indigo-50/50 to-white border-slate-200'
              }`}>
                <div className="max-w-2xl relative z-10">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 mb-3 inline-block">
                    INTERAKTIV SINOV
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-3">
                    Bilimlaringizni sinab ko‘rishga tayyormisiz?
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    Texnologiya, dasturlash va kiberxavfsizlik bo‘yicha tuzilgan test savollari va 15 soniyalik tezkor quizda o‘z darajangizni aniqlang.
                  </p>

                  <button
                    onClick={() => {
                      soundFx.playSuccess();
                      setActivePage('test');
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/25 hover:scale-105 transition-transform cursor-pointer"
                  >
                    <Zap className="w-4 h-4" />
                    <span>Testni boshlash</span>
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}

        {activePage === 'about_tech' && (
          <AboutTechView
            language={language}
            theme={theme}
          />
        )}

        {activePage === 'tech' && (
          <TechView
            language={language}
            theme={theme}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
            onOpenDetail={handleOpenDetail}
          />
        )}

        {activePage === 'devices' && (
          <DevicesView
            language={language}
            theme={theme}
          />
        )}

        {activePage === 'programming' && (
          <ProgrammingView
            language={language}
            theme={theme}
          />
        )}

        {activePage === 'robotics' && (
          <RoboticsView
            language={language}
            theme={theme}
          />
        )}

        {activePage === 'ai' && (
          <AIView
            language={language}
            theme={theme}
          />
        )}

        {activePage === 'internet' && (
          <InternetView
            language={language}
            theme={theme}
          />
        )}

        {activePage === 'security' && (
          <SecurityView
            language={language}
            theme={theme}
          />
        )}

        {activePage === 'news' && (
          <NewsView
            language={language}
            theme={theme}
            isOnline={isOnline}
          />
        )}

        {activePage === 'test' && (
          <TestView
            language={language}
            theme={theme}
          />
        )}

        {activePage === 'favorites' && (
          <FavoritesView
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
            onOpenDetail={handleOpenDetail}
            language={language}
            theme={theme}
          />
        )}

        {activePage === 'settings' && (
          <SettingsView
            language={language}
            setLanguage={setLanguage}
            theme={theme}
            toggleTheme={toggleTheme}
            soundEnabled={soundEnabled}
            setSoundEnabled={setSoundEnabled}
            animationsEnabled={animationsEnabled}
            setAnimationsEnabled={setAnimationsEnabled}
            notificationsEnabled={notificationsEnabled}
            setNotificationsEnabled={setNotificationsEnabled}
            onClearData={handleClearData}
          />
        )}
      </main>

      {/* 4. Technology Full Detail Modal */}
      <DetailModal
        item={detailItem}
        onClose={() => setDetailItem(null)}
        language={language}
        theme={theme}
        isFavorite={detailItem ? favorites.includes(detailItem.id) : false}
        onToggleFavorite={toggleFavorite}
      />

      {/* 5. Real-Time Global Search Modal */}
      <SearchBarModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        language={language}
        theme={theme}
        onSelectResult={handleSelectSearchResult}
      />

      {/* 6. Footer */}
      <Footer
        onNavigate={setActivePage}
        language={language}
        theme={theme}
      />
    </div>
  );
}
