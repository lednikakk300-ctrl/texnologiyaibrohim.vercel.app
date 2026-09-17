import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { 
  HelpCircle, Timer, Award, CheckCircle2, XCircle, 
  RotateCcw, ArrowRight, Zap, Trophy, BookOpen, AlertCircle
} from 'lucide-react';
import { Language, ThemeMode, TestQuestion } from '../types';
import { quizQuestionsData } from '../data/quizQuestions';
import { translations } from '../translations';
import { soundFx } from '../utils/audio';

interface TestViewProps {
  language: Language;
  theme: ThemeMode;
}

export const TestView: React.FC<TestViewProps> = ({
  language,
  theme,
}) => {
  const [testMode, setTestMode] = useState<'exam' | 'speed'>('exam');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [userAnswers, setUserAnswers] = useState<{ [qIndex: number]: number }>({});
  const [isFinished, setIsFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15);
  const isDark = theme === 'dark';
  const t = translations[language];

  const questions = quizQuestionsData;
  const currentQ: TestQuestion = questions[currentIndex];

  // Timer effect for Speed Quiz
  useEffect(() => {
    if (testMode === 'speed' && !isFinished && !isAnswered) {
      if (timeLeft <= 0) {
        // Auto submit timeout
        handleSelectOption(-1);
        return;
      }
      const interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [testMode, isFinished, isAnswered, timeLeft]);

  const handleSelectOption = (optIndex: number) => {
    if (isAnswered) return;
    setSelectedOption(optIndex);
    setIsAnswered(true);

    const isCorrect = optIndex === currentQ.correctIndex;
    if (isCorrect) {
      soundFx.playSuccess();
    } else {
      soundFx.playError();
    }

    setUserAnswers((prev) => ({
      ...prev,
      [currentIndex]: optIndex,
    }));
  };

  const handleNextQuestion = () => {
    soundFx.playClick();
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setTimeLeft(15);
    } else {
      // Finished
      setIsFinished(true);
      // Calculate score
      let correct = 0;
      questions.forEach((q, idx) => {
        if (userAnswers[idx] === q.correctIndex) correct++;
      });
      if (selectedOption === currentQ.correctIndex) correct++;
      const pct = Math.round((correct / questions.length) * 100);
      if (pct >= 70) {
        try {
          confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
        } catch {
          // ignore
        }
      }
    }
  };

  const handleRestart = (mode: 'exam' | 'speed') => {
    soundFx.playClick();
    setTestMode(mode);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setUserAnswers({});
    setIsFinished(false);
    setTimeLeft(15);
  };

  // Score statistics calculations
  const totalCount = questions.length;
  let correctCount = 0;
  const wrongTopics: string[] = [];

  questions.forEach((q, idx) => {
    const ans = userAnswers[idx];
    if (ans === q.correctIndex) {
      correctCount++;
    } else {
      if (!wrongTopics.includes(q.category)) {
        wrongTopics.push(q.category);
      }
    }
  });

  const percent = Math.round((correctCount / totalCount) * 100);

  // Determine user skill rank badge
  const getSkillBadge = (pct: number) => {
    if (pct >= 90) return { title: 'Texnologiya eksperti', color: 'from-cyan-500 to-indigo-600', icon: Trophy };
    if (pct >= 70) return { title: 'Juda yaxshi', color: 'from-emerald-500 to-teal-600', icon: Award };
    if (pct >= 50) return { title: 'Yaxshi', color: 'from-amber-500 to-orange-600', icon: CheckCircle2 };
    return { title: 'Boshlang‘ich', color: 'from-rose-500 to-pink-600', icon: BookOpen };
  };

  const skill = getSkillBadge(percent);

  return (
    <div id="test-view" className="py-8 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8 text-center">
        <div className="inline-flex items-center gap-2 text-cyan-500 font-bold text-xs uppercase tracking-wider mb-2">
          <HelpCircle className="w-4 h-4" />
          <span>Bilimni Sinash Markazi</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          Test va Tezkor Quiz Tizimi
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 max-w-xl mx-auto">
          Qurilmalar, dasturlash, robototexnika va kiberxavfsizlik bo‘yicha bilimlaringizni sinang.
        </p>

        {/* Mode Selector */}
        {!isFinished && (
          <div className="flex items-center justify-center gap-3 mt-6">
            <button
              onClick={() => handleRestart('exam')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                testMode === 'exam'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              Standart Test (Batafsil)
            </button>
            <button
              onClick={() => handleRestart('speed')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                testMode === 'speed'
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              <span>Tezkor Quiz (15s Taymer)</span>
            </button>
          </div>
        )}
      </div>

      {/* Test is Active */}
      {!isFinished && (
        <div className={`p-6 sm:p-8 rounded-3xl border shadow-xl ${
          isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200'
        }`}>
          {/* Progress Header */}
          <div className="flex items-center justify-between gap-4 mb-6">
            <div className="text-xs font-mono text-cyan-400 font-bold">
              Savol {currentIndex + 1} / {questions.length}
            </div>

            {testMode === 'speed' && (
              <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold ${
                timeLeft <= 5 ? 'bg-rose-500/20 text-rose-400 animate-pulse' : 'bg-amber-500/20 text-amber-400'
              }`}>
                <Timer className="w-3.5 h-3.5" />
                <span>{timeLeft}s</span>
              </div>
            )}

            <span className="text-xs px-2.5 py-0.5 rounded-md bg-slate-800 text-slate-300 font-mono">
              {currentQ.category}
            </span>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-1.5 rounded-full bg-slate-800 mb-8 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
            />
          </div>

          {/* Question Text */}
          <h3 className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-white mb-8 leading-snug">
            {currentQ.question[language]}
          </h3>

          {/* 4 Multiple Choice Options */}
          <div className="space-y-3 mb-6">
            {currentQ.options.map((opt, i) => {
              const isSelected = selectedOption === i;
              const isCorrect = currentQ.correctIndex === i;

              let btnStyle = isDark 
                ? 'bg-slate-950 border-slate-800 text-slate-200 hover:border-cyan-500/50 hover:bg-slate-850'
                : 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100';

              if (isAnswered) {
                if (isCorrect) {
                  btnStyle = 'bg-emerald-500/20 border-emerald-500 text-emerald-400 font-bold';
                } else if (isSelected && !isCorrect) {
                  btnStyle = 'bg-rose-500/20 border-rose-500 text-rose-400 font-bold';
                } else {
                  btnStyle = 'opacity-40 bg-slate-950 border-slate-800 text-slate-400';
                }
              }

              return (
                <button
                  key={i}
                  id={`opt-btn-${i}`}
                  onClick={() => handleSelectOption(i)}
                  disabled={isAnswered}
                  className={`w-full text-left p-4 rounded-2xl border text-sm font-medium transition-all flex items-center justify-between gap-3 cursor-pointer ${btnStyle}`}
                >
                  <span>{opt[language]}</span>
                  {isAnswered && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />}
                  {isAnswered && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-rose-400 shrink-0" />}
                </button>
              );
            })}
          </div>

          {/* Explanation Box when answered */}
          {isAnswered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 rounded-2xl border mb-6 text-xs sm:text-sm leading-relaxed ${
                selectedOption === currentQ.correctIndex 
                  ? 'bg-emerald-950/20 border-emerald-900/40 text-emerald-300' 
                  : 'bg-rose-950/20 border-rose-900/40 text-rose-300'
              }`}
            >
              <span className="font-bold block mb-1">To‘g‘ri javob tushuntirishi:</span>
              {currentQ.explanation[language]}
            </motion.div>
          )}

          {/* Next Button */}
          {isAnswered && (
            <div className="flex justify-end">
              <button
                id="btn-next-question"
                onClick={handleNextQuestion}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/20 cursor-pointer"
              >
                <span>{currentIndex < questions.length - 1 ? 'Keyingi savol' : 'Natijani ko‘rish'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      )}

      {/* Test Finished: Results Dashboard */}
      {isFinished && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`p-6 sm:p-8 rounded-3xl border shadow-2xl text-center ${
            isDark ? 'bg-slate-900/95 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-800'
          }`}
        >
          {/* Skill Badge */}
          <div className="w-20 h-20 mx-auto mb-4 rounded-3xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[2px] shadow-xl shadow-cyan-500/30 flex items-center justify-center">
            <div className="w-full h-full bg-slate-950 rounded-[22px] flex items-center justify-center">
              <skill.icon className="w-10 h-10 text-cyan-400" />
            </div>
          </div>

          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 mb-2">
            Darajangiz: {skill.title}
          </div>

          <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-6">
            Test Yakunlandi!
          </h3>

          {/* Stats 3-Col Block */}
          <div className="grid grid-cols-3 gap-3 max-w-lg mx-auto mb-8">
            <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 text-center">
              <span className="text-xs text-slate-400 block font-mono">To‘g‘ri</span>
              <span className="text-xl sm:text-2xl font-black text-emerald-400 font-mono">{correctCount}</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 text-center">
              <span className="text-xs text-slate-400 block font-mono">Noto‘g‘ri</span>
              <span className="text-xl sm:text-2xl font-black text-rose-400 font-mono">{totalCount - correctCount}</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 text-center">
              <span className="text-xs text-slate-400 block font-mono">Foiz</span>
              <span className="text-xl sm:text-2xl font-black text-cyan-400 font-mono">{percent}%</span>
            </div>
          </div>

          {/* Wrong Topics Advice */}
          {wrongTopics.length > 0 && (
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 max-w-lg mx-auto text-left mb-8">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
                <AlertCircle className="w-4 h-4" />
                <span>Qayta o‘rganish tavsiya etiladigan mavzular:</span>
              </div>
              <ul className="space-y-1 text-xs text-slate-300">
                {wrongTopics.map((topic, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Restart Controls */}
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => handleRestart('exam')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Qaytadan boshlash</span>
            </button>
            <button
              onClick={() => handleRestart('speed')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs cursor-pointer"
            >
              <Zap className="w-4 h-4" />
              <span>Tezkor Quiz</span>
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};
