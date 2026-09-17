import React from 'react';
import { Cpu, Heart, ArrowUp, Globe, Sparkles } from 'lucide-react';
import { ActivePage, Language, ThemeMode } from '../types';
import { translations } from '../translations';
import { soundFx } from '../utils/audio';

interface FooterProps {
  onNavigate: (page: ActivePage) => void;
  language: Language;
  theme: ThemeMode;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  language,
  theme,
}) => {
  const isDark = theme === 'dark';
  const t = translations[language];

  const handleScrollTop = () => {
    soundFx.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      id="main-footer"
      className={`border-t transition-colors ${
        isDark ? 'bg-slate-950 border-slate-800 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-600'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[1.5px] flex items-center justify-center shadow-md">
                <div className={`w-full h-full rounded-[10px] flex items-center justify-center ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
                  <Cpu className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
                {t.appName}
              </span>
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              "{t.footerSlogan}"
            </p>

            <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
              Dasturlash, robototexnika, sun’iy intellekt va kiberxavfsizlik bo‘yicha to‘liq funksional interaktiv ta’lim platformasi.
            </p>
          </div>

          {/* Quick Nav Links 1 */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200 font-mono">
              Asosiy Bo‘limlar
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  {t.navHome}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about_tech')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  {t.navAboutTech}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('tech')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  {t.navTech}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('devices')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  {t.navDevices}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('programming')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  {t.navProgramming}
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Nav Links 2 */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200 font-mono">
              Laboratoriya & Amaliyot
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('robotics')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  {t.navRobotics} (7 ta Arduino)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('ai')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  {t.navAI}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('security')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  {t.navSecurity} & Parol Test
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('test')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  {t.navTest} & Tezkor Quiz
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('settings')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  {t.navSettings}
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar with Scroll-to-Top and Copyright */}
        <div className="pt-8 border-t border-slate-800/60 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-500 text-center sm:text-left">
            {t.footerCopyright}
          </p>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-500">
              <span>Made with</span>
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
              <span>for Education</span>
            </span>

            <button
              id="footer-scroll-top-btn"
              onClick={handleScrollTop}
              className="p-2 rounded-xl bg-slate-800/60 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
              title="Yuqoriga qaytish"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
