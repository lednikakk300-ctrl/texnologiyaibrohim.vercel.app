import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, Heart, History, Cog, ThumbsUp, ThumbsDown, 
  MapPin, Sparkles, Share2, Check, Volume2, VolumeX, Calendar
} from 'lucide-react';
import { TechnologyItem, Language, ThemeMode } from '../types';
import { translations } from '../translations';
import { soundFx } from '../utils/audio';

const TECH_CREATION_YEARS: Record<string, number | string> = {
  computer: 1945,
  smartphone: 1992,
  internet: 1969,
  ai: 1956,
  robotics: 1954,
  cloud: 2006,
  cybersecurity: 1971,
  blockchain: 2008,
  quantum: 1981,
  fiveg: 2019,
  iot: 1999,
  vr_ar: 1968,
  three_d_print: 1984,
  ev: 1832,
  biotech: 1973,
  nanotech: 1959,
  bluetooth: 1994,
  voice_message: 1979
};

interface DetailModalProps {
  item: TechnologyItem | null;
  onClose: () => void;
  language: Language;
  theme: ThemeMode;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({
  item,
  onClose,
  language,
  theme,
  isFavorite,
  onToggleFavorite,
}) => {
  const [copied, setCopied] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const t = translations[language];
  const isDark = theme === 'dark';

  // Stop speech if modal closes or item changes
  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [item]);

  if (!item) return null;

  const prosList = item.advantages || item.pros || [];
  const consList = item.disadvantages || item.cons || [];
  const useCasesList = item.whereUsed || item.useCases || [];
  const funFactsList = item.funFacts || (item.funFact ? [item.funFact] : []);
  const title = item.localizedName?.[language] || item.title || item.name;

  // Creation Year lookup
  const creationYear = TECH_CREATION_YEARS[item.id] || 
    (item.history?.[language]?.match(/\b(18\d{2}|19\d{2}|20\d{2})\b/)?.[0] || 'XX asrda');

  const handleToggleVoice = () => {
    soundFx.playClick();
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      alert("Qurilmangizda brauzer ovozli o‘qish (TTS) funksiyasi qo‘llab-quvvatlanmaydi.");
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    window.speechSynthesis.cancel();

    // Construct voice message explicitly stating when it was created:
    let speechText = "";
    if (language === 'uz') {
      speechText = `${title} haqida ovozli ma'lumot. Ushbu texnologiya birinchi marta ${creationYear}-yilda yaratilgan. Qisqacha tavsifi: ${item.shortDesc?.[language] || ''}. Tarixi: ${item.history?.[language] || ''}`;
    } else if (language === 'ru') {
      speechText = `Голосовое сообщение о технологии ${title}. Эта технология была впервые создана в ${creationYear} году. Описание: ${item.shortDesc?.[language] || ''}. История: ${item.history?.[language] || ''}`;
    } else {
      speechText = `Voice message regarding ${title}. This technology was first created in the year ${creationYear}. Summary: ${item.shortDesc?.[language] || ''}. History: ${item.history?.[language] || ''}`;
    }

    const utterance = new SpeechSynthesisUtterance(speechText);
    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    utterance.lang = language === 'uz' ? 'uz-UZ' : language === 'ru' ? 'ru-RU' : 'en-US';

    utterance.onend = () => {
      setIsSpeaking(false);
    };

    utterance.onerror = () => {
      setIsSpeaking(false);
    };

    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  const handleCopyShare = () => {
    soundFx.playClick();
    const text = `${title} (${creationYear}-yilda yaratilgan) - TEXNOLOGIYA Platformasi: ${item.shortDesc?.[language] || ''}`;
    navigator.clipboard?.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div 
        id="tech-detail-modal-overlay"
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-sm overflow-y-auto"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className={`relative w-full max-w-3xl max-h-[90vh] flex flex-col rounded-3xl border shadow-2xl overflow-hidden ${
            isDark 
              ? 'bg-slate-900 border-slate-800 text-slate-100' 
              : 'bg-white border-slate-200 text-slate-800'
          }`}
        >
          {/* Top Visual Image Banner */}
          <div className="relative h-48 sm:h-64 w-full overflow-hidden shrink-0">
            <img 
              src={item.image} 
              alt={title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            
            {/* Top Close & Favorite Actions */}
            <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
              <button
                id="modal-voice-btn"
                onClick={handleToggleVoice}
                className={`p-2.5 rounded-full backdrop-blur-md transition-all cursor-pointer ${
                  isSpeaking
                    ? 'bg-cyan-500 text-slate-950 font-black animate-pulse shadow-lg shadow-cyan-500/40'
                    : 'bg-slate-900/80 hover:bg-slate-900 text-cyan-300'
                }`}
                title="Ovozli xabar: qachon yaratilganini tinglash"
              >
                {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>

              <button
                id="modal-share-btn"
                onClick={handleCopyShare}
                className="p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white backdrop-blur-md transition-colors cursor-pointer"
                title="Havoladan nusxa olish"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
              </button>

              <button
                id="modal-fav-btn"
                onClick={() => {
                  soundFx.playSuccess();
                  onToggleFavorite(item.id);
                }}
                className={`p-2.5 rounded-full backdrop-blur-md transition-colors cursor-pointer ${
                  isFavorite 
                    ? 'bg-rose-500 text-white' 
                    : 'bg-slate-900/80 hover:bg-slate-900 text-white'
                }`}
                title="Sevimlilarga qo‘shish"
              >
                <Heart className={`w-4 h-4 ${isFavorite ? 'fill-white' : ''}`} />
              </button>

              <button
                id="modal-close-btn"
                onClick={() => {
                  soundFx.playClick();
                  onClose();
                }}
                className="p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white backdrop-blur-md transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Title & Badge on Image */}
            <div className="absolute bottom-4 left-4 sm:left-6 right-4 z-10">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 backdrop-blur-md">
                  {item.category}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30 backdrop-blur-md">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{creationYear}-yilda yaratilgan</span>
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {title}
              </h2>
            </div>
          </div>

          {/* Scrollable Content Body */}
          <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
            
            {/* Ovozli Xabar Player Banner */}
            <div className={`p-4 rounded-2xl border flex items-center justify-between gap-4 transition-all ${
              isSpeaking
                ? 'bg-cyan-500/15 border-cyan-500/40 shadow-lg shadow-cyan-500/10'
                : isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-cyan-50/70 border-cyan-200'
            }`}>
              <div className="flex items-center gap-3">
                <button
                  id="btn-play-voice-announce"
                  onClick={handleToggleVoice}
                  className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-all cursor-pointer ${
                    isSpeaking 
                      ? 'bg-cyan-500 text-slate-950 shadow-md animate-pulse font-black' 
                      : 'bg-slate-800 text-cyan-400 hover:bg-slate-700'
                  }`}
                  title="Ovozli xabarni eshitish"
                >
                  {isSpeaking ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span>Ovozli xabar: {title}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-mono font-bold">
                      {creationYear}-yil
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    {isSpeaking 
                      ? "Ovozli ma'lumot (qachon yaratilgani va tarixi) o‘qilmoqda..." 
                      : "Bosib, texnologiya qachon yaratilgani va to‘liq ovozli sharhni tinglang"}
                  </div>
                </div>
              </div>

              {isSpeaking && (
                <div className="flex items-center gap-1 h-5 pr-2">
                  <span className="w-1 h-3 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1 h-5 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1 h-4 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  <span className="w-1 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '450ms' }} />
                </div>
              )}
            </div>

            {/* Overview Short Description */}
            <div className={`p-4 rounded-2xl border ${
              isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}>
              <p className="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
                {item.shortDesc?.[language] || ''}
              </p>
            </div>

            {/* Tarixi (History) */}
            {item.history?.[language] && (
              <div>
                <div className="flex items-center gap-2 mb-2.5 text-cyan-500 font-bold text-sm uppercase tracking-wider">
                  <History className="w-4 h-4" />
                  <span>{t.tabHistory}</span>
                </div>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 pl-1">
                  {item.history[language]}
                </p>
              </div>
            )}

            {/* Qanday ishlashi (How It Works) */}
            {item.howItWorks?.[language] && (
              <div>
                <div className="flex items-center gap-2 mb-2.5 text-indigo-500 font-bold text-sm uppercase tracking-wider">
                  <Cog className="w-4 h-4" />
                  <span>{t.tabHowItWorks}</span>
                </div>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 pl-1">
                  {item.howItWorks[language]}
                </p>
              </div>
            )}

            {/* Afzalliklari va Kamchiliklari (Pros & Cons) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Afzalliklari */}
              <div className={`p-4 rounded-2xl border ${
                isDark ? 'bg-emerald-950/20 border-emerald-900/40' : 'bg-emerald-50/70 border-emerald-200'
              }`}>
                <div className="flex items-center gap-2 mb-3 text-emerald-600 dark:text-emerald-400 font-bold text-sm">
                  <ThumbsUp className="w-4 h-4" />
                  <span>{t.tabPros}</span>
                </div>
                <ul className="space-y-2">
                  {prosList.map((pro, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                      <span>{pro[language] || pro.uz}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Kamchiliklari */}
              <div className={`p-4 rounded-2xl border ${
                isDark ? 'bg-rose-950/20 border-rose-900/40' : 'bg-rose-50/70 border-rose-200'
              }`}>
                <div className="flex items-center gap-2 mb-3 text-rose-600 dark:text-rose-400 font-bold text-sm">
                  <ThumbsDown className="w-4 h-4" />
                  <span>{t.tabCons}</span>
                </div>
                <ul className="space-y-2">
                  {consList.map((con, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                      <span>{con[language] || con.uz}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Qayerda ishlatilishi (Use Cases) */}
            {useCasesList.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-3 text-amber-500 font-bold text-sm uppercase tracking-wider">
                  <MapPin className="w-4 h-4" />
                  <span>{t.tabUseCases}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {useCasesList.map((useCase, i) => (
                    <span 
                      key={i}
                      className={`px-3 py-1.5 rounded-xl text-xs font-medium border ${
                        isDark 
                          ? 'bg-slate-950 border-slate-800 text-slate-300' 
                          : 'bg-slate-100 border-slate-200 text-slate-700'
                      }`}
                    >
                      {useCase[language] || useCase.uz}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Qiziqarli faktlar (Fun Facts) */}
            {funFactsList.length > 0 && (
              <div className={`p-4 rounded-2xl border ${
                isDark ? 'bg-indigo-950/20 border-indigo-900/40' : 'bg-indigo-50/70 border-indigo-200'
              }`}>
                <div className="flex items-center gap-2 mb-2 text-indigo-500 dark:text-indigo-400 font-bold text-sm">
                  <Sparkles className="w-4 h-4" />
                  <span>{t.tabFunFacts}</span>
                </div>
                <div className="space-y-2">
                  {funFactsList.map((fact, idx) => (
                    <p key={idx} className="text-xs sm:text-sm italic text-slate-600 dark:text-slate-300">
                      "{fact[language] || fact.uz}"
                    </p>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Modal Footer */}
          <div className={`p-4 px-6 border-t flex items-center justify-between ${
            isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
          }`}>
            <button
              onClick={() => onToggleFavorite(item.id)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold border transition-colors cursor-pointer ${
                isFavorite 
                  ? 'bg-rose-500/10 border-rose-500/40 text-rose-400' 
                  : 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white'
              }`}
            >
              <Heart className={`w-3.5 h-3.5 ${isFavorite ? 'fill-rose-500 text-rose-500' : ''}`} />
              <span>{isFavorite ? 'Sevimlilarda mavjud' : t.addToFavorites}</span>
            </button>

            <button
              id="modal-footer-close-btn"
              onClick={() => {
                soundFx.playClick();
                onClose();
              }}
              className="px-5 py-2 rounded-xl text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors cursor-pointer"
            >
              {t.btnClose}
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
