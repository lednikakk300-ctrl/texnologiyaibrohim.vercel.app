import React from 'react';
import { motion } from 'motion/react';
import { Heart, Trash2, ArrowRight, Layers, Sparkles } from 'lucide-react';
import { Language, ThemeMode, TechnologyItem } from '../types';
import { technologiesData } from '../data/techData';
import { soundFx } from '../utils/audio';

interface FavoritesViewProps {
  favorites: string[];
  onToggleFavorite: (id: string) => void;
  onOpenDetail: (item: TechnologyItem) => void;
  language: Language;
  theme: ThemeMode;
}

export const FavoritesView: React.FC<FavoritesViewProps> = ({
  favorites,
  onToggleFavorite,
  onOpenDetail,
  language,
  theme,
}) => {
  const isDark = theme === 'dark';

  const favoriteTechItems = technologiesData.filter((item) => favorites.includes(item.id));

  return (
    <div id="favorites-view" className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-rose-500 font-bold text-xs uppercase tracking-wider mb-2">
          <Heart className="w-4 h-4 fill-rose-500" />
          <span>Shaxsiy To‘plam</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          Sevimlilar ({favoriteTechItems.length})
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 max-w-2xl">
          Siz belgilab qo‘ygan texnologiyalar va maqolalar bu yerda doimiy saqlanadi.
        </p>
      </div>

      {favoriteTechItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoriteTechItems.map((item) => {
            const itemTitle = item.localizedName?.[language] || item.title || item.name;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={() => {
                  soundFx.playClick();
                  onOpenDetail(item);
                }}
                className={`rounded-3xl border overflow-hidden flex flex-col justify-between cursor-pointer hover:shadow-xl transition-all ${
                  isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                <div>
                  <div className="relative h-44 w-full">
                    <img
                      src={item.image}
                      alt={itemTitle}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        soundFx.playClick();
                        onToggleFavorite(item.id);
                      }}
                      className="absolute top-3 right-3 p-2 rounded-full bg-rose-500 text-white cursor-pointer shadow-md"
                      title="Sevimlilardan o‘chirish"
                    >
                      <Heart className="w-4 h-4 fill-white" />
                    </button>
                  </div>

                  <div className="p-5">
                    <span className="text-[11px] font-mono text-cyan-400 font-semibold mb-1 block">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                      {itemTitle}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2">
                      {item.shortDesc?.[language] || ''}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 flex items-center justify-between">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      soundFx.playClick();
                      onToggleFavorite(item.id);
                    }}
                    className="text-xs text-slate-400 hover:text-rose-400 flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>O‘chirish</span>
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      soundFx.playClick();
                      onOpenDetail(item);
                    }}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-cyan-500/15 hover:bg-cyan-500 text-cyan-500 dark:text-cyan-300 hover:text-slate-950 transition-colors cursor-pointer"
                  >
                    <span>Batafsil</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      ) : (
        <div className="py-20 text-center rounded-3xl border border-dashed border-slate-800 p-8">
          <Heart className="w-12 h-12 text-slate-600 mx-auto mb-3" />
          <p className="text-base font-bold text-slate-300 mb-1">
            Sevimlilar ro‘yxati hozircha bo‘sh
          </p>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Istalgan texnologiya kartasidagi yurakcha belgisini bosib uni bu yerga saqlab qo‘yishingiz mumkin.
          </p>
        </div>
      )}
    </div>
  );
};
