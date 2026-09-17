import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, ShieldAlert, Key, AlertTriangle, Bug, 
  Skull, MailX, Shield, UserCheck, Check, X, Eye, EyeOff, Lock
} from 'lucide-react';
import { Language, ThemeMode, SecurityTopic } from '../types';
import { securityTopicsData } from '../data/aiInternetSecurityData';
import { soundFx } from '../utils/audio';

interface SecurityViewProps {
  language: Language;
  theme: ThemeMode;
}

export const SecurityView: React.FC<SecurityViewProps> = ({
  language,
  theme,
}) => {
  const [selectedTopicId, setSelectedTopicId] = useState<string>(securityTopicsData[0].id);
  const [testPassword, setTestPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const isDark = theme === 'dark';

  const currentTopic: SecurityTopic = 
    securityTopicsData.find((t) => t.id === selectedTopicId) || securityTopicsData[0];

  // Password evaluation logic
  const hasMinLength = testPassword.length >= 10;
  const hasUpper = /[A-Z]/.test(testPassword);
  const hasLower = /[a-z]/.test(testPassword);
  const hasNumber = /[0-9]/.test(testPassword);
  const hasSpecial = /[^A-Za-z0-9]/.test(testPassword);

  let score = 0;
  if (testPassword.length >= 8) score += 20;
  if (hasMinLength) score += 20;
  if (hasUpper) score += 15;
  if (hasLower) score += 15;
  if (hasNumber) score += 15;
  if (hasSpecial) score += 15;

  const getStrengthLabel = () => {
    if (!testPassword) return { text: 'Parol kiritilmagan', color: 'text-slate-400', crackTime: '0 soniya' };
    if (score < 40) return { text: 'Juda kuchsiz (Xavfli)', color: 'text-rose-500', crackTime: '1 millisekund' };
    if (score < 70) return { text: 'O‘rtacha (Yaxshilang)', color: 'text-amber-500', crackTime: 'Bir necha soat' };
    if (score < 90) return { text: 'Kuchli (Xavfsiz)', color: 'text-emerald-500', crackTime: '300 yil' };
    return { text: 'O‘ta kuchli (Buzilmas)', color: 'text-cyan-400', crackTime: '10 million yil+' };
  };

  const strength = getStrengthLabel();

  const getDangerBadge = (level: 'low' | 'medium' | 'high' | 'critical') => {
    switch (level) {
      case 'critical':
        return <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-rose-500/20 text-rose-400 border border-rose-500/30">O‘ta Xavfli (Kritik)</span>;
      case 'high':
        return <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-amber-500/20 text-amber-400 border border-amber-500/30">Yuqori Xavf</span>;
      case 'medium':
        return <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-sky-500/20 text-sky-400 border border-sky-500/30">O‘rtacha Xavf</span>;
      case 'low':
        return <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">Past Xavf</span>;
    }
  };

  const getIcon = (name: string) => {
    switch (name) {
      case 'Key': return Key;
      case 'ShieldCheck': return ShieldCheck;
      case 'AlertTriangle': return AlertTriangle;
      case 'Bug': return Bug;
      case 'Skull': return Skull;
      case 'MailX': return MailX;
      case 'Shield': return Shield;
      case 'UserCheck': return UserCheck;
      default: return ShieldCheck;
    }
  };

  return (
    <div id="security-view" className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-rose-500 font-bold text-xs uppercase tracking-wider mb-2">
          <ShieldAlert className="w-4 h-4" />
          <span>Raqamli Himoya</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          Kiberxavfsizlik va Ma’lumotlar Himoyasi
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2 max-w-3xl">
          Fishing, viruslar, 2FA himoyasi va interaktiv parol sinov laboratoriyasi orqali shaxsiy hisoblaringizni xakerlardan asrang.
        </p>
      </div>

      {/* Interactive Tool: Live Password Strength Tester */}
      <div className={`p-6 sm:p-8 rounded-3xl border mb-10 shadow-xl ${
        isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200'
      }`}>
        <div className="flex items-center gap-2.5 mb-2">
          <Key className="w-5 h-5 text-cyan-400" />
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            Interaktiv Parol Mustahkamligini Tekshirish
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
          Kiritilgan parol hech qayerga jo‘natilmaydi va faqat brauzeringizda matematik hisoblanadi.
        </p>

        {/* Input box */}
        <div className="relative max-w-xl mb-4">
          <input
            id="input-password-tester"
            type={showPassword ? 'text' : 'password'}
            value={testPassword}
            onChange={(e) => setTestPassword(e.target.value)}
            placeholder="Parol kiriting (masalan: MyS3cur3!P@ss2026)"
            className={`w-full px-4 py-3.5 pr-12 rounded-2xl border text-sm font-mono outline-none transition-colors ${
              isDark 
                ? 'bg-slate-950 border-slate-700 text-white focus:border-cyan-400' 
                : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-cyan-500'
            }`}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-white cursor-pointer"
          >
            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>

        {/* Strength Progress Bar */}
        <div className="max-w-xl mb-3">
          <div className="flex items-center justify-between text-xs font-mono mb-1.5">
            <span className={`font-bold ${strength.color}`}>{strength.text}</span>
            <span className="text-slate-400">Taxminiy buzish vaqti: <strong className="text-white">{strength.crackTime}</strong></span>
          </div>
          <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
            <motion.div
              className={`h-full ${
                score < 40 ? 'bg-rose-500' : score < 70 ? 'bg-amber-500' : score < 90 ? 'bg-emerald-500' : 'bg-cyan-400'
              }`}
              style={{ width: `${score}%` }}
            />
          </div>
        </div>

        {/* Checklist */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 max-w-xl text-[11px] font-mono mt-4">
          <div className={`flex items-center gap-1.5 ${hasMinLength ? 'text-emerald-400 font-bold' : 'text-slate-500'}`}>
            {hasMinLength ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />}
            <span>10+ belgi</span>
          </div>
          <div className={`flex items-center gap-1.5 ${hasUpper ? 'text-emerald-400 font-bold' : 'text-slate-500'}`}>
            {hasUpper ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />}
            <span>Katta harf (A-Z)</span>
          </div>
          <div className={`flex items-center gap-1.5 ${hasLower ? 'text-emerald-400 font-bold' : 'text-slate-500'}`}>
            {hasLower ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />}
            <span>Kichik harf (a-z)</span>
          </div>
          <div className={`flex items-center gap-1.5 ${hasNumber ? 'text-emerald-400 font-bold' : 'text-slate-500'}`}>
            {hasNumber ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />}
            <span>Raqam (0-9)</span>
          </div>
          <div className={`flex items-center gap-1.5 ${hasSpecial ? 'text-emerald-400 font-bold' : 'text-slate-500'}`}>
            {hasSpecial ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />}
            <span>Maxsus belgi (!@#$)</span>
          </div>
        </div>
      </div>

      {/* 8 Cybersecurity Topics Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Topics List */}
        <div className="lg:col-span-4 space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 px-1">
            Xavfsizlik Mavzulari (8 ta):
          </div>
          {securityTopicsData.map((topic) => {
            const isSelected = topic.id === selectedTopicId;
            const IconComponent = getIcon(topic.icon);
            return (
              <button
                key={topic.id}
                id={`sec-topic-${topic.id}`}
                onClick={() => {
                  soundFx.playClick();
                  setSelectedTopicId(topic.id);
                }}
                className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between gap-3 cursor-pointer ${
                  isSelected
                    ? isDark
                      ? 'bg-rose-500/15 border-rose-500/40 text-white shadow-lg'
                      : 'bg-rose-50 border-rose-300 text-slate-900 shadow-md'
                    : isDark
                      ? 'bg-slate-900/70 border-slate-800 text-slate-300 hover:bg-slate-850'
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                    isSelected ? 'bg-rose-500 text-white' : 'bg-slate-800 text-rose-400'
                  }`}>
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold block">
                      {topic.title[language]}
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      Xavf: {topic.dangerLevel}
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Details Container */}
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
          <div className="flex items-start justify-between flex-wrap gap-2 pb-4 border-b border-slate-800/40 dark:border-slate-800">
            <div>
              <div className="mb-2">
                {getDangerBadge(currentTopic.dangerLevel)}
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                {currentTopic.title[language]}
              </h3>
            </div>
          </div>

          {/* Description */}
          <div className={`p-4 rounded-2xl border ${
            isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
          }`}>
            <div className="text-xs font-bold text-rose-500 uppercase tracking-wider mb-1">
              Tushuncha
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
              {currentTopic.desc[language]}
            </p>
          </div>

          {/* Educational Info */}
          <div className={`p-5 rounded-2xl border ${
            isDark ? 'bg-rose-950/20 border-rose-900/40' : 'bg-rose-50/70 border-rose-200'
          }`}>
            <div className="flex items-center gap-2 text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider mb-2">
              <ShieldAlert className="w-4 h-4" />
              <span>Xavf darajasi va Oqibatlari</span>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              {currentTopic.educationalInfo[language]}
            </p>
          </div>

          {/* Protection Tips */}
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              Himoyalanish Bo‘yicha Tavsiyalar:
            </div>
            <div className="space-y-2.5">
              {currentTopic.tips.map((tip, i) => (
                <div 
                  key={i}
                  className={`p-3.5 rounded-2xl border flex items-start gap-3 text-xs sm:text-sm font-medium ${
                    isDark ? 'bg-slate-950 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
                  }`}
                >
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center text-xs shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span className="leading-relaxed">{tip[language]}</span>
                </div>
              ))}
            </div>
          </div>

        </motion.div>
      </div>
    </div>
  );
};
