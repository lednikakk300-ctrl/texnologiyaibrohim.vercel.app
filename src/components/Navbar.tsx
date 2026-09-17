import React, { useState } from 'react';
import { 
  Menu, X, Search, Sun, Moon, Globe, Heart, 
  Wifi, WifiOff, Cpu
} from 'lucide-react';
import { ActivePage, Language, ThemeMode } from '../types';
import { translations } from '../translations';
import { soundFx } from '../utils/audio';

interface NavbarProps {
  activePage: ActivePage;
  setActivePage: (page: ActivePage) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: ThemeMode;
  toggleTheme: () => void;
  favoritesCount: number;
  openSearch: () => void;
  isOnline: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  setActivePage,
  language,
  setLanguage,
  theme,
  toggleTheme,
  favoritesCount,
  openSearch,
  isOnline,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const t = translations[language];

  const navItems: { id: ActivePage; label: string }[] = [
    { id: 'home', label: t.navHome },
    { id: 'tech', label: t.navTech },
    { id: 'devices', label: t.navDevices },
    { id: 'programming', label: t.navProgramming },
    { id: 'robotics', label: t.navRobotics },
    { id: 'ai', label: t.navAI },
    { id: 'internet', label: t.navInternet },
    { id: 'security', label: t.navSecurity },
    { id: 'news', label: t.navNews },
    { id: 'test', label: t.navTest },
    { id: 'about_tech', label: t.navAboutTech },
    { id: 'settings', label: t.navSettings },
  ];

  const handleNavClick = (pageId: ActivePage) => {
    soundFx.playClick();
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isDark = theme === 'dark';

  return (
    <header 
      id="main-navbar"
      className={`sticky top-0 z-40 w-full transition-colors duration-200 border-b backdrop-blur-md ${
        isDark 
          ? 'bg-slate-950/85 border-slate-800 text-slate-100' 
          : 'bg-white/90 border-slate-200 text-slate-800 shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-2">
          
          {/* Brand Logo */}
          <button
            id="brand-logo-btn"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 group text-left cursor-pointer focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[1.5px] flex items-center justify-center shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <div className={`w-full h-full rounded-[10px] flex items-center justify-center ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
                <Cpu className="w-5 h-5 text-cyan-500 group-hover:rotate-12 transition-transform" />
              </div>
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500 bg-clip-text text-transparent block leading-tight">
                {t.appName}
              </span>
              <span className={`text-[10px] font-mono tracking-wider block ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                PLATFORMA
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 overflow-x-auto py-2">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? isDark
                        ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30'
                        : 'bg-cyan-50 text-cyan-700 border border-cyan-200'
                      : isDark
                        ? 'text-slate-300 hover:text-white hover:bg-slate-850'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons & Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            
            {/* Online/Offline status badge */}
            <div 
              title={isOnline ? t.onlineStatus : t.offlineStatus}
              className={`hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${
                isOnline 
                  ? isDark 
                    ? 'bg-emerald-950/40 text-emerald-400 border-emerald-800/60' 
                    : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                  : isDark
                    ? 'bg-amber-950/40 text-amber-400 border-amber-800/60'
                    : 'bg-amber-50 text-amber-700 border-amber-200'
              }`}
            >
              {isOnline ? (
                <>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[11px] font-mono">ONLAYN</span>
                </>
              ) : (
                <>
                  <WifiOff className="w-3 h-3 text-amber-500" />
                  <span className="text-[11px] font-mono">OFLAYN</span>
                </>
              )}
            </div>

            {/* Global Search Button */}
            <button
              id="navbar-search-btn"
              onClick={() => {
                soundFx.playClick();
                openSearch();
              }}
              aria-label="Search"
              className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-medium border transition-colors cursor-pointer ${
                isDark
                  ? 'bg-slate-900/80 hover:bg-slate-850 text-slate-300 hover:text-white border-slate-800'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 border-slate-200'
              }`}
            >
              <Search className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden sm:inline">{t.btnSearch}</span>
              <kbd className="hidden lg:inline text-[10px] px-1 py-0.5 rounded bg-slate-800 text-slate-400 font-mono">
                ⌘K
              </kbd>
            </button>

            {/* Favorites Icon Button */}
            <button
              id="navbar-favorites-btn"
              onClick={() => handleNavClick('favorites')}
              aria-label="Favorites"
              className={`relative p-2 rounded-xl border transition-colors cursor-pointer ${
                activePage === 'favorites'
                  ? 'bg-rose-500/15 border-rose-500/40 text-rose-400'
                  : isDark
                    ? 'bg-slate-900/80 hover:bg-slate-850 text-slate-300 hover:text-white border-slate-800'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 border-slate-200'
              }`}
            >
              <Heart className={`w-4 h-4 ${favoritesCount > 0 ? 'fill-rose-500 text-rose-500' : ''}`} />
              {favoritesCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center">
                  {favoritesCount}
                </span>
              )}
            </button>

            {/* Language Switcher Dropdown */}
            <div className="relative">
              <button
                id="navbar-lang-btn"
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-semibold border transition-colors cursor-pointer ${
                  isDark
                    ? 'bg-slate-900/80 hover:bg-slate-850 text-slate-300 border-slate-800'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
                }`}
              >
                <Globe className="w-3.5 h-3.5 text-cyan-400" />
                <span className="uppercase font-mono">{language}</span>
              </button>

              {langMenuOpen && (
                <div 
                  className={`absolute right-0 mt-2 w-36 rounded-xl border shadow-xl py-1 z-50 animate-in fade-in zoom-in-95 ${
                    isDark ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-800'
                  }`}
                >
                  <button
                    onClick={() => {
                      setLanguage('uz');
                      setLangMenuOpen(false);
                      soundFx.playClick();
                    }}
                    className={`w-full px-3 py-2 text-left text-xs font-medium flex items-center justify-between hover:bg-cyan-500/10 ${
                      language === 'uz' ? 'text-cyan-400 font-bold' : ''
                    }`}
                  >
                    <span>🇺🇿 O‘zbek</span>
                    {language === 'uz' && <span className="text-cyan-400">✓</span>}
                  </button>
                  <button
                    onClick={() => {
                      setLanguage('ru');
                      setLangMenuOpen(false);
                      soundFx.playClick();
                    }}
                    className={`w-full px-3 py-2 text-left text-xs font-medium flex items-center justify-between hover:bg-cyan-500/10 ${
                      language === 'ru' ? 'text-cyan-400 font-bold' : ''
                    }`}
                  >
                    <span>🇷🇺 Русский</span>
                    {language === 'ru' && <span className="text-cyan-400">✓</span>}
                  </button>
                  <button
                    onClick={() => {
                      setLanguage('en');
                      setLangMenuOpen(false);
                      soundFx.playClick();
                    }}
                    className={`w-full px-3 py-2 text-left text-xs font-medium flex items-center justify-between hover:bg-cyan-500/10 ${
                      language === 'en' ? 'text-cyan-400 font-bold' : ''
                    }`}
                  >
                    <span>🇬🇧 English</span>
                    {language === 'en' && <span className="text-cyan-400">✓</span>}
                  </button>
                </div>
              )}
            </div>

            {/* Dark / Light Mode Toggle */}
            <button
              id="navbar-theme-toggle"
              onClick={() => {
                soundFx.playClick();
                toggleTheme();
              }}
              aria-label="Toggle Theme"
              className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                isDark
                  ? 'bg-slate-900/80 hover:bg-slate-850 text-amber-400 border-slate-800'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
              }`}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            </button>

            {/* Mobile Hamburger Menu Button */}
            <button
              id="navbar-mobile-menu-btn"
              onClick={() => {
                soundFx.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              aria-label="Toggle Menu"
              className={`xl:hidden p-2 rounded-xl border transition-colors cursor-pointer ${
                isDark
                  ? 'bg-slate-900/80 hover:bg-slate-850 text-slate-200 border-slate-800'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
              }`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div 
          className={`xl:hidden border-b px-4 pt-2 pb-6 space-y-1 transition-all ${
            isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-800'
          }`}
        >
          {/* Quick status bar on mobile */}
          <div className="flex items-center justify-between py-2 px-3 mb-2 rounded-lg bg-slate-900/50 text-xs font-mono">
            <span className="text-slate-400">Tarmoq holati:</span>
            <span className={isOnline ? 'text-emerald-400 font-bold' : 'text-amber-400 font-bold'}>
              {isOnline ? '● Onlayn' : '○ Oflayn'}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-1.5">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  id={`mobile-nav-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
                    isActive
                      ? isDark
                        ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                        : 'bg-cyan-100 text-cyan-800 border border-cyan-300'
                      : isDark
                        ? 'hover:bg-slate-900 text-slate-300'
                        : 'hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
