import React from 'react';
import { 
  Settings, Sun, Moon, Globe, Bell, Sparkles, 
  Volume2, VolumeX, Trash2, Info, ShieldCheck, Check
} from 'lucide-react';
import { Language, ThemeMode } from '../types';
import { translations } from '../translations';
import { soundFx } from '../utils/audio';

interface SettingsViewProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: ThemeMode;
  toggleTheme: () => void;
  soundEnabled: boolean;
  setSoundEnabled: (enabled: boolean) => void;
  animationsEnabled: boolean;
  setAnimationsEnabled: (enabled: boolean) => void;
  notificationsEnabled: boolean;
  setNotificationsEnabled: (enabled: boolean) => void;
  onClearData: () => void;
}

export const SettingsView: React.FC<SettingsViewProps> = ({
  language,
  setLanguage,
  theme,
  toggleTheme,
  soundEnabled,
  setSoundEnabled,
  animationsEnabled,
  setAnimationsEnabled,
  notificationsEnabled,
  setNotificationsEnabled,
  onClearData,
}) => {
  const isDark = theme === 'dark';
  const t = translations[language];

  return (
    <div id="settings-view" className="py-8 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-cyan-500 font-bold text-xs uppercase tracking-wider mb-2">
          <Settings className="w-4 h-4" />
          <span>Tizim Moslamalari</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          {t.settingsTitle}
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">
          Ilova ko‘rinishi, asosiy til, ovoz effektlari va shaxsiy ma’lumotlarni boshqaring.
        </p>
      </div>

      {/* Settings Options Card */}
      <div className={`rounded-3xl border divide-y shadow-xl overflow-hidden ${
        isDark ? 'bg-slate-900/90 border-slate-800 divide-slate-800' : 'bg-white border-slate-200 divide-slate-200'
      }`}>
        
        {/* 1. Theme Setting */}
        <div className="p-5 sm:p-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${
              isDark ? 'bg-amber-500/15 text-amber-400' : 'bg-amber-100 text-amber-600'
            }`}>
              {isDark ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">
                {t.themeSetting}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                {isDark ? t.themeDark : t.themeLight}
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              soundFx.playClick();
              toggleTheme();
            }}
            className={`px-4 py-2 rounded-xl text-xs font-bold border transition-colors cursor-pointer ${
              isDark ? 'bg-slate-800 text-amber-400 border-slate-700' : 'bg-slate-100 text-slate-800 border-slate-300'
            }`}
          >
            {isDark ? 'Kunduzgi rejimga o‘tish' : 'Tungi rejimga o‘tish'}
          </button>
        </div>

        {/* 2. Language Selection */}
        <div className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-cyan-500/15 text-cyan-400 flex items-center justify-center">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">
                {t.languageSetting}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                Ilovaning barcha bo‘limlari uchun asosiy til
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {[
              { id: 'uz' as Language, label: '🇺🇿 O‘zbek' },
              { id: 'ru' as Language, label: '🇷🇺 Русский' },
              { id: 'en' as Language, label: '🇬🇧 English' },
            ].map((lang) => (
              <button
                key={lang.id}
                onClick={() => {
                  soundFx.playClick();
                  setLanguage(lang.id);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                  language === lang.id
                    ? 'bg-cyan-500 text-slate-950 border-cyan-400 font-bold shadow-sm'
                    : isDark
                      ? 'bg-slate-950 text-slate-300 border-slate-800 hover:bg-slate-800'
                      : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3. Sound Effects Toggle */}
        <div className="p-5 sm:p-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-indigo-500/15 text-indigo-400 flex items-center justify-center">
              {soundEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5 text-slate-500" />}
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">
                Ovozli effektlar (Sound FX)
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                Tugmalar va test javoblarida sintezlangan audio signallari
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              const next = !soundEnabled;
              soundFx.enabled = next;
              setSoundEnabled(next);
              if (next) soundFx.playSuccess();
            }}
            className={`w-12 h-7 rounded-full p-1 transition-colors cursor-pointer ${
              soundEnabled ? 'bg-cyan-500' : 'bg-slate-700'
            }`}
          >
            <div className={`w-5 h-5 rounded-full bg-white transition-transform ${
              soundEnabled ? 'translate-x-5' : 'translate-x-0'
            }`} />
          </button>
        </div>

        {/* 4. Animations Toggle */}
        <div className="p-5 sm:p-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">
                {t.animationsSetting}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                Interfeys elementlarining silliq harakatlanishi
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              soundFx.playClick();
              setAnimationsEnabled(!animationsEnabled);
            }}
            className={`w-12 h-7 rounded-full p-1 transition-colors cursor-pointer ${
              animationsEnabled ? 'bg-cyan-500' : 'bg-slate-700'
            }`}
          >
            <div className={`w-5 h-5 rounded-full bg-white transition-transform ${
              animationsEnabled ? 'translate-x-5' : 'translate-x-0'
            }`} />
          </button>
        </div>

        {/* 5. Notifications Toggle */}
        <div className="p-5 sm:p-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-purple-500/15 text-purple-400 flex items-center justify-center">
              <Bell className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">
                {t.notificationsSetting}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                Yangi texnologiya xabarlari haqida xabardor qilish
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              soundFx.playClick();
              setNotificationsEnabled(!notificationsEnabled);
            }}
            className={`w-12 h-7 rounded-full p-1 transition-colors cursor-pointer ${
              notificationsEnabled ? 'bg-cyan-500' : 'bg-slate-700'
            }`}
          >
            <div className={`w-5 h-5 rounded-full bg-white transition-transform ${
              notificationsEnabled ? 'translate-x-5' : 'translate-x-0'
            }`} />
          </button>
        </div>

        {/* 6. Clear Data / Reset */}
        <div className="p-5 sm:p-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-rose-500/15 text-rose-400 flex items-center justify-center">
              <Trash2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">
                {t.clearDataSetting}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                Barcha sevimlilar va test natijalarini tozalash
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              if (window.confirm('Haqiqatan ham barcha saqlangan ma’lumotlarni tozalamoqchimisiz?')) {
                onClearData();
              }
            }}
            className="px-4 py-2 rounded-xl text-xs font-bold bg-rose-500/15 hover:bg-rose-500 text-rose-400 hover:text-white border border-rose-500/30 transition-colors cursor-pointer"
          >
            Tozalash
          </button>
        </div>

        {/* 7. About App (Ilova haqida) */}
        <div className="p-5 sm:p-6">
          <div className="flex items-center gap-3.5 mb-3">
            <div className="w-10 h-10 rounded-2xl bg-sky-500/15 text-sky-400 flex items-center justify-center">
              <Info className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900 dark:text-white">
                {t.aboutAppSetting}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                Platforma versiyasi: v2.4 Pro Edition
              </div>
            </div>
          </div>

          <div className={`p-4 rounded-2xl border text-xs sm:text-sm leading-relaxed space-y-2 ${
            isDark ? 'bg-slate-950 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
          }`}>
            <p>
              <strong>“TEXNOLOGIYA”</strong> — zamonaviy, interaktiv va to‘liq funksional ta’limiy platforma. Dasturlash, robototexnika, sun’iy intellekt, internet tarmoqlari va kiberxavfsizlikni barchaga tushunarli uslubda o‘rgatishga bag‘ishlangan.
            </p>
            <div className="flex items-center gap-2 pt-2 text-[11px] font-mono text-cyan-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Offline-first & High performance Next-Gen Web App</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
