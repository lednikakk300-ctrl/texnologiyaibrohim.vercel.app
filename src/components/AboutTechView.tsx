import React from 'react';
import { motion } from 'motion/react';
import { 
  BookOpen, Sparkles, Clock, Globe, Cpu, ArrowRight, Zap, Lightbulb
} from 'lucide-react';
import { Language, ThemeMode } from '../types';

interface AboutTechViewProps {
  language: Language;
  theme: ThemeMode;
}

export const AboutTechView: React.FC<AboutTechViewProps> = ({
  language,
  theme,
}) => {
  const isDark = theme === 'dark';

  return (
    <div id="about-tech-view" className="py-8 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-cyan-500 font-bold text-xs uppercase tracking-wider mb-2">
          <BookOpen className="w-4 h-4" />
          <span>Fundamental Bilimlar</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
          Texnologiya nima?
        </h1>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
          Insoniyat tamaddunini tosh qurollardan sun’iy intellekt va fazoviy sayohatlargacha olib kelgan ilmiy-amaliy qudrat.
        </p>
      </div>

      {/* Main Narrative Article */}
      <div className={`p-6 sm:p-10 rounded-3xl border shadow-xl space-y-8 ${
        isDark ? 'bg-slate-900/90 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-800'
      }`}>
        
        {/* 1. Kelib chiqishi (Origin & Etymology) */}
        <div>
          <div className="flex items-center gap-2 text-sm font-bold text-cyan-500 uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4" />
            <span>1. Kelib Chiqishi va Etimologiyasi</span>
          </div>
          <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
            «Texnologiya» so‘zi qadimgi yunoncha <strong>«techne»</strong> (san’at, mahorat, hunar) va <strong>«logos»</strong> (so‘z, ta’limot, fan) so‘zlarining birikuvidan hosil bo‘lgan bo‘lib, so‘zma-so‘z <em>«hunar haqidagi ta’limot»</em> ma’nosini anglatadi. Dastlab bu atama insonning moddiy buyumlar yasash usullarini ifodalagan bo‘lsa, bugungi kunda insoniyatning atrof-muhitni o‘zgartirish, hayotini yengillashtirish va muammolarni hal qilishga qaratilgan barcha ilmiy-amaliy usullari majmuasiga aylanib ulgurdi.
          </p>
        </div>

        {/* 2. Rivojlanish tarixi (History of Development) */}
        <div className="border-t border-slate-800/60 dark:border-slate-800 pt-6">
          <div className="flex items-center gap-2 text-sm font-bold text-indigo-500 uppercase tracking-wider mb-4">
            <Clock className="w-4 h-4" />
            <span>2. Insoniyatning 4 Ta Sanoat Inqilobi</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className={`p-4 rounded-2xl border ${isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
              <span className="text-xs font-mono font-bold text-cyan-400 block mb-1">1-INQILOB (XVIII asr oxiri)</span>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Bug‘ dvigateli va Mexanizatsiya</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">Qo‘l mehnatidan zavod-fabrika dastgohlariga o‘tish.</p>
            </div>

            <div className={`p-4 rounded-2xl border ${isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
              <span className="text-xs font-mono font-bold text-cyan-400 block mb-1">2-INQILOB (XIX asr oxiri)</span>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Elektr energiyasi va Konveyer</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">Ommaviy seriyali ishlab chiqarish va telefon aloqasi.</p>
            </div>

            <div className={`p-4 rounded-2xl border ${isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
              <span className="text-xs font-mono font-bold text-cyan-400 block mb-1">3-INQILOB (XX asr ikkinchi yarmi)</span>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Raqamli Inqilob & Kompyuterlar</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">Tranzistorlar, mikrochiplar va butunjahon Interneti.</p>
            </div>

            <div className={`p-4 rounded-2xl border ${isDark ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
              <span className="text-xs font-mono font-bold text-cyan-400 block mb-1">4-INQILOB (Hozirgi davr)</span>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Sun’iy Intellekt & Kiber-Fizik Tizimlar</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">Katta ma’lumotlar (Big Data), IoT, avtonom robotlar.</p>
            </div>
          </div>
        </div>

        {/* 3. Bugungi kundagi o‘rni (Role in Today's World) */}
        <div className="border-t border-slate-800/60 dark:border-slate-800 pt-6">
          <div className="flex items-center gap-2 text-sm font-bold text-emerald-500 uppercase tracking-wider mb-3">
            <Globe className="w-4 h-4" />
            <span>3. Bugungi Kundagi O‘rni va Ta’siri</span>
          </div>
          <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300 mb-3">
            Bugun texnologiya shunchaki qulaylik emas, balki jamiyatning yashash shartiga aylandi:
          </p>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
              <span><strong>Tibbiyotda:</strong> Rentgen, MRT, robotlashtirilgan jarrohlik (Da Vinci) va DNK sekvenlash inson umrini ikki barobarga uzaytirdi.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
              <span><strong>Ta’limda:</strong> Masofaviy onlayn ta’lim, interaktiv simulyatorlar va sun’iy intellekt repetitorlari orqali ta’lim har kim uchun ochiq bo‘ldi.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
              <span><strong>Iqtisodiyotda:</strong> Onlayn banklar, bir zumlik to‘lovlar va elektron tijorat trillionlab dollarlik savdo aylanmasini ta’minlamoqda.</span>
            </li>
          </ul>
        </div>

        {/* 4. Kelajakdagi rivojlanishi (Future Development) */}
        <div className="border-t border-slate-800/60 dark:border-slate-800 pt-6">
          <div className="flex items-center gap-2 text-sm font-bold text-amber-500 uppercase tracking-wider mb-3">
            <Zap className="w-4 h-4" />
            <span>4. Kelajakdagi Rivojlanishi va Istiqbollar</span>
          </div>
          <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
            Keyingi o‘n yillikda insoniyat kvant hisoblash, termoyadroviy toza energiya, miya-kompyuter interfeyslari (BCI) va sayyoralararo fazo koloniyalarini o‘zlashtirish bo‘yicha yangi bosqichga qadam qo‘yadi. Texnologiyani to‘g‘ri va mas’uliyat bilan rivojlantirish – barcha ekologik va ijtimoiy muammolarni bartaraf etishning bosh omilidir.
          </p>
        </div>

      </div>
    </div>
  );
};
