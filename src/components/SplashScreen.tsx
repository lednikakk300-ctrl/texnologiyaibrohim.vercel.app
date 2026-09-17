import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Cpu, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface SplashScreenProps {
  onFinish: () => void;
  language: Language;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish, language }) => {
  const [progress, setProgress] = useState(0);
  const t = translations[language];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onFinish, 300);
          return 100;
        }
        return prev + 5;
      });
    }, 70);

    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <motion.div
      id="splash-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 text-white overflow-hidden p-6 select-none"
    >
      {/* Background Cyber Glow Elements */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-indigo-500/15 rounded-full blur-2xl pointer-events-none" />

      {/* Main Brand Content */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="relative z-10 flex flex-col items-center text-center max-w-md w-full"
      >
        {/* Animated Cyber Core Icon */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.06, 1]
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
          className="relative w-24 h-24 mb-8 flex items-center justify-center rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[2px] shadow-2xl shadow-cyan-500/30"
        >
          <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
            <Cpu className="w-12 h-12 text-cyan-400" />
          </div>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-ping" />
        </motion.div>

        {/* Brand Name */}
        <motion.h1
          initial={{ letterSpacing: "0.2em", opacity: 0 }}
          animate={{ letterSpacing: "0.05em", opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-cyan-300 bg-clip-text text-transparent mb-3"
        >
          {t.appName}
        </motion.h1>

        {/* Subtitle */}
        <p className="text-lg text-slate-400 font-medium mb-8">
          {t.appSubtitle}
        </p>

        {/* Progress Bar Container */}
        <div className="w-full bg-slate-900 border border-slate-800 rounded-full h-2 overflow-hidden mb-4 p-[1px]">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-sky-400 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress percent & status */}
        <div className="flex items-center justify-between w-full text-xs text-slate-400 font-mono mb-8 px-1">
          <span>Tizim modullari yuklanmoqda...</span>
          <span className="text-cyan-400 font-bold">{progress}%</span>
        </div>

        {/* Skip button for user control */}
        <button
          id="btn-skip-splash"
          onClick={onFinish}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white bg-slate-900/60 hover:bg-slate-900 border border-slate-800 transition-colors"
        >
          <span>O‘tkazib yuborish</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </motion.div>
    </motion.div>
  );
};
