import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { 
  Gamepad2, Cpu, Bot, Code2, Blocks, Play, RotateCcw, 
  CheckCircle2, Sparkles, AlertTriangle, ArrowRight, 
  Volume2, ShieldCheck, ChevronRight, Award, Zap,
  Sliders, Activity, Smartphone, Eye, Lightbulb, Compass, Navigation
} from 'lucide-react';
import { Language, ThemeMode } from '../types';
import { soundFx } from '../utils/audio';

interface GamesViewProps {
  language: Language;
  theme: ThemeMode;
  initialGame?: 'arduino' | 'app_inventor' | 'robotics' | 'python';
}

export const GamesView: React.FC<GamesViewProps> = ({
  language,
  theme,
  initialGame = 'arduino'
}) => {
  const [selectedGame, setSelectedGame] = useState<'arduino' | 'app_inventor' | 'robotics' | 'python'>(initialGame);
  const isDark = theme === 'dark';

  return (
    <div id="games-view" className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Title & Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-indigo-500 font-bold text-xs uppercase tracking-wider mb-2">
          <Gamepad2 className="w-4 h-4" />
          <span>Interaktiv O‘quv O‘yinlari & Simulyatorlar</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Texnologiya & Dasturlash O‘yinlari
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2 max-w-3xl">
              Arduino sxema yig‘ish simulyatori, App Inventor blokli dasturlash jumboqlari, Robot labirint missiyasi hamda Python kod laboratoriyasida amaliy o‘ynab o‘rganing!
            </p>
          </div>
        </div>
      </div>

      {/* Main Game Selector Navigation Pills */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        <button
          id="btn-game-arduino"
          onClick={() => {
            soundFx.playClick();
            setSelectedGame('arduino');
          }}
          className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-center gap-3.5 ${
            selectedGame === 'arduino'
              ? 'bg-gradient-to-r from-cyan-500/20 to-teal-500/20 border-cyan-500 text-cyan-400 shadow-lg shadow-cyan-500/10'
              : isDark
                ? 'bg-slate-900/60 border-slate-800 text-slate-400 hover:bg-slate-850 hover:text-white'
                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}
        >
          <div className={`p-2.5 rounded-xl ${selectedGame === 'arduino' ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-cyan-500/10 text-cyan-400'}`}>
            <Cpu className="w-5 h-5" />
          </div>
          <div>
            <div className="text-sm font-extrabold text-slate-900 dark:text-white">Arduino O‘yini</div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400">Sxema & Mikrokontroller</div>
          </div>
        </button>

        <button
          id="btn-game-app-inventor"
          onClick={() => {
            soundFx.playClick();
            setSelectedGame('app_inventor');
          }}
          className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-center gap-3.5 ${
            selectedGame === 'app_inventor'
              ? 'bg-gradient-to-r from-amber-500/20 to-orange-500/20 border-amber-500 text-amber-400 shadow-lg shadow-amber-500/10'
              : isDark
                ? 'bg-slate-900/60 border-slate-800 text-slate-400 hover:bg-slate-850 hover:text-white'
                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}
        >
          <div className={`p-2.5 rounded-xl ${selectedGame === 'app_inventor' ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-amber-500/10 text-amber-400'}`}>
            <Blocks className="w-5 h-5" />
          </div>
          <div>
            <div className="text-sm font-extrabold text-slate-900 dark:text-white">App Inventor</div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400">Mobil Blokli Dasturlash</div>
          </div>
        </button>

        <button
          id="btn-game-robotics"
          onClick={() => {
            soundFx.playClick();
            setSelectedGame('robotics');
          }}
          className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-center gap-3.5 ${
            selectedGame === 'robotics'
              ? 'bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border-indigo-500 text-indigo-400 shadow-lg shadow-indigo-500/10'
              : isDark
                ? 'bg-slate-900/60 border-slate-800 text-slate-400 hover:bg-slate-850 hover:text-white'
                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}
        >
          <div className={`p-2.5 rounded-xl ${selectedGame === 'robotics' ? 'bg-indigo-500 text-white font-bold' : 'bg-indigo-500/10 text-indigo-400'}`}>
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <div className="text-sm font-extrabold text-slate-900 dark:text-white">Robototexnika</div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400">Mars Rover & Labirint</div>
          </div>
        </button>

        <button
          id="btn-game-python"
          onClick={() => {
            soundFx.playClick();
            setSelectedGame('python');
          }}
          className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-center gap-3.5 ${
            selectedGame === 'python'
              ? 'bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border-emerald-500 text-emerald-400 shadow-lg shadow-emerald-500/10'
              : isDark
                ? 'bg-slate-900/60 border-slate-800 text-slate-400 hover:bg-slate-850 hover:text-white'
                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
          }`}
        >
          <div className={`p-2.5 rounded-xl ${selectedGame === 'python' ? 'bg-emerald-500 text-slate-950 font-bold' : 'bg-emerald-500/10 text-emerald-400'}`}>
            <Code2 className="w-5 h-5" />
          </div>
          <div>
            <div className="text-sm font-extrabold text-slate-900 dark:text-white">Python Arena</div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400">Kod Jumboqlari & Sinov</div>
          </div>
        </button>
      </div>

      {/* Active Game Component Container */}
      <div className="mt-4">
        {selectedGame === 'arduino' && <ArduinoGameComponent language={language} theme={theme} />}
        {selectedGame === 'app_inventor' && <AppInventorGameComponent language={language} theme={theme} />}
        {selectedGame === 'robotics' && <RoboticsGameComponent language={language} theme={theme} />}
        {selectedGame === 'python' && <PythonGameComponent language={language} theme={theme} />}
      </div>
    </div>
  );
};

/* =========================================================================
   1. ARDUINO GAME COMPONENT (The User's Core Request)
   Interactive Circuit Simulation, Pin Connections, Breadboard, Code Run
   ========================================================================= */

interface ArduinoLevel {
  id: number;
  title: string;
  category: string;
  description: string;
  goal: string;
  hint: string;
  requiredConnections: {
    pin: string;
    targetComponent: string;
    targetPin: string;
  }[];
  components: {
    id: string;
    name: string;
    type: 'led' | 'resistor' | 'buzzer' | 'ultrasonic' | 'servo' | 'ldr';
    color?: string;
  }[];
  code: string;
  simulationType: 'blink' | 'traffic' | 'ultrasonic' | 'servo' | 'ldr';
}

const ARDUINO_LEVELS: ArduinoLevel[] = [
  {
    id: 1,
    title: "1-Bosqich: Miltillovchi LED (Blink)",
    category: "Boshlang‘ich Sxema",
    description: "Arduino mikrokontrollerida eng mashhur 'Hello World' amaliyoti. Qizil LED diodini 13-raqamli raqamli pin (Digital Pin 13) va GND ga ulang!",
    goal: "LED Anodini (+) Digital Pin 13 ga, Katodini (-) 220 Om rezistor orqali GND (Yer) ga ulang.",
    hint: "13-pindan musbat 5V tok keladi, rezistor esa LEDni kuyib ketishdan himoya qiladi va GND manfiy qutbdir.",
    requiredConnections: [
      { pin: 'D13', targetComponent: 'LED1', targetPin: 'anode' },
      { pin: 'GND', targetComponent: 'R1', targetPin: 'leg2' }
    ],
    components: [
      { id: 'LED1', name: 'Qizil LED (Diod)', type: 'led', color: '#ef4444' },
      { id: 'R1', name: '220 Ω Rezistor', type: 'resistor' }
    ],
    code: `void setup() {
  pinMode(13, OUTPUT); // Pin 13 ni chiqish rejimiga sozlash
}

void loop() {
  digitalWrite(13, HIGH); // LEDni yoqish (5V)
  delay(1000);            // 1 soniya kutish
  digitalWrite(13, LOW);  // LEDni o‘chirish (0V)
  delay(1000);            // 1 soniya kutish
}`,
    simulationType: 'blink'
  },
  {
    id: 2,
    title: "2-Bosqich: Shahar Svetofori (Traffic Light)",
    category: "Ko‘p Pinli Avtomatika",
    description: "Chorrahadagi haqiqiy svetofor tizimi. Qizil (D12), Sariq (D11) va Yashil (D10) chiroqlarni navbat bilan boshqaruvchi sxemani ulang!",
    goal: "Har bir LEDni mos ravishda Pin 12, Pin 11 va Pin 10 ga ulang.",
    hint: "D12 -> Qizil LED, D11 -> Sariq LED, D10 -> Yashil LED. GND ulangan.",
    requiredConnections: [
      { pin: 'D12', targetComponent: 'LED_RED', targetPin: 'anode' },
      { pin: 'D11', targetComponent: 'LED_YEL', targetPin: 'anode' },
      { pin: 'D10', targetComponent: 'LED_GRN', targetPin: 'anode' }
    ],
    components: [
      { id: 'LED_RED', name: 'Qizil LED', type: 'led', color: '#ef4444' },
      { id: 'LED_YEL', name: 'Sariq LED', type: 'led', color: '#eab308' },
      { id: 'LED_GRN', name: 'Yashil LED', type: 'led', color: '#22c55e' }
    ],
    code: `int red = 12, yellow = 11, green = 10;

void setup() {
  pinMode(red, OUTPUT);
  pinMode(yellow, OUTPUT);
  pinMode(green, OUTPUT);
}

void loop() {
  // Qizil chiroq
  digitalWrite(red, HIGH); delay(3000); digitalWrite(red, LOW);
  // Sariq chiroq
  digitalWrite(yellow, HIGH); delay(1000); digitalWrite(yellow, LOW);
  // Yashil chiroq
  digitalWrite(green, HIGH); delay(3000); digitalWrite(green, LOW);
}`,
    simulationType: 'traffic'
  },
  {
    id: 3,
    title: "3-Bosqich: Ultrasonik Masofa Radari & Pyezo Buzzer",
    category: "Sensor & Signal",
    description: "To‘siqni 20 sm dan yaqin kelganda aniqlab signal beruvchi avtomobil parkovka radari. HC-SR04 ultrasonik datchigi va Pyezo-dinamikni ulang!",
    goal: "HC-SR04 Trig -> D9, Echo -> D8, va Pyezo Buzzer -> D7 ga ulang.",
    hint: "Trig ultratovush impulsini yuboradi, Echo esa qaytgan aks-sadoni qabul qilib masofani hisoblaydi.",
    requiredConnections: [
      { pin: 'D9', targetComponent: 'HC_SR04', targetPin: 'trig' },
      { pin: 'D8', targetComponent: 'HC_SR04', targetPin: 'echo' },
      { pin: 'D7', targetComponent: 'BUZZER', targetPin: 'pos' }
    ],
    components: [
      { id: 'HC_SR04', name: 'HC-SR04 Masofa Sensori', type: 'ultrasonic' },
      { id: 'BUZZER', name: 'Pyezo Buzzer (Ovoz)', type: 'buzzer' }
    ],
    code: `const int trigPin = 9, echoPin = 8, buzzerPin = 7;

void setup() {
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
  pinMode(buzzerPin, OUTPUT);
}

void loop() {
  digitalWrite(trigPin, LOW); delayMicroseconds(2);
  digitalWrite(trigPin, HIGH); delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  
  long duration = pulseIn(echoPin, HIGH);
  int distance = duration * 0.034 / 2; // sm hisobida
  
  if (distance < 20) {
    tone(buzzerPin, 1000, 100); // Ogohlantiruvchi signal
  }
  delay(100);
}`,
    simulationType: 'ultrasonic'
  },
  {
    id: 4,
    title: "4-Bosqich: Servo Motor Burchak Burish (SG90)",
    category: "Mexatronika & Servo",
    description: "Robot manipulyatori va avtomatik eshik ochish dvigateli. Servo motor boshqaruv signal simini Arduino ning PWM (D9) piniga ulang!",
    goal: "Servo Motor Signal (Sariq/To‘q sariq) simini D9 PWM piniga ulang.",
    hint: "D9 da ~ belgisi bor, bu PWM (kenglik-impuls modulyatsiyasi) orqali burchakni 0° dan 180° gacha o‘zgartirish imkonini beradi.",
    requiredConnections: [
      { pin: 'D9', targetComponent: 'SERVO1', targetPin: 'signal' },
      { pin: '5V', targetComponent: 'SERVO1', targetPin: 'vcc' }
    ],
    components: [
      { id: 'SERVO1', name: 'SG90 Mikro Servo Motor', type: 'servo' }
    ],
    code: `#include <Servo.h>
Servo myServo;

void setup() {
  myServo.attach(9); // Pin 9 ga ulash
}

void loop() {
  myServo.write(0);   // 0 gradus
  delay(1000);
  myServo.write(90);  // 90 gradus
  delay(1000);
  myServo.write(180); // 180 gradus
  delay(1000);
}`,
    simulationType: 'servo'
  },
  {
    id: 5,
    title: "5-Bosqich: Aqlli Tungi Chiroq (LDR Fotoqarshilik)",
    category: "Aqlli Uy & Analog Sensor",
    description: "Kech tushganda o‘zi avtomatik yonadigan ko‘cha chirog‘i. LDR yorug‘lik datchigini Analog Pin A0 ga, yuqori yorug‘likli LEDni D6 ga ulang!",
    goal: "LDR Fotoqarshilikni Analog A0 ga, Chiroqni D6 ga ulang.",
    hint: "Analog A0 pin 0 dan 1023 gacha yorug‘lik qiymatini o‘qiydi. Xona qorong‘ilashganda chiroq avtomatik yonadi.",
    requiredConnections: [
      { pin: 'A0', targetComponent: 'LDR1', targetPin: 'out' },
      { pin: 'D6', targetComponent: 'LAMP', targetPin: 'anode' }
    ],
    components: [
      { id: 'LDR1', name: 'LDR Fotoqarshilik', type: 'ldr' },
      { id: 'LAMP', name: 'Ko‘cha Yoritgichi LED', type: 'led', color: '#38bdf8' }
    ],
    code: `const int ldrPin = A0, ledPin = 6;

void setup() {
  pinMode(ledPin, OUTPUT);
}

void loop() {
  int lightLevel = analogRead(ldrPin);
  // Agar yorug'lik 400 dan past bo'lsa (qorong'i tushsa):
  if (lightLevel < 400) {
    digitalWrite(ledPin, HIGH); // Chiroq yonadi
  } else {
    digitalWrite(ledPin, LOW);  // Chiroq o'chadi
  }
  delay(100);
}`,
    simulationType: 'ldr'
  }
];

const ArduinoGameComponent: React.FC<{ language: Language; theme: ThemeMode }> = ({
  language,
  theme
}) => {
  const [currentLevelIdx, setCurrentLevelIdx] = useState(0);
  const [connections, setConnections] = useState<Record<string, string>>({}); // { "D13": "LED1_anode" }
  const [selectedPin, setSelectedPin] = useState<string | null>(null);
  const [isSimulating, setIsSimulating] = useState(false);
  const [score, setScore] = useState(100);
  const [solvedLevels, setSolvedLevels] = useState<number[]>([]);
  const [showHint, setShowHint] = useState(false);
  const [activeCodeTab, setActiveCodeTab] = useState<'schematic' | 'code'>('schematic');

  // Interactive Live simulation states
  const [blinkState, setBlinkState] = useState(false);
  const [trafficStep, setTrafficStep] = useState<'red' | 'yellow' | 'green'>('red');
  const [distanceSlider, setDistanceSlider] = useState<number>(45); // cm
  const [servoAngle, setServoAngle] = useState<number>(0);
  const [ambientLight, setAmbientLight] = useState<number>(750); // 0 (dark) to 1023 (bright)
  const isDark = theme === 'dark';

  const currentLevel = ARDUINO_LEVELS[currentLevelIdx];

  // Reset connections on level switch
  useEffect(() => {
    setConnections({});
    setSelectedPin(null);
    setIsSimulating(false);
    setShowHint(false);
  }, [currentLevelIdx]);

  // Simulation runner loops
  useEffect(() => {
    let interval: any = null;
    if (isSimulating) {
      if (currentLevel.simulationType === 'blink') {
        interval = setInterval(() => {
          setBlinkState((prev) => {
            soundFx.playBlinkTick();
            return !prev;
          });
        }, 800);
      } else if (currentLevel.simulationType === 'traffic') {
        let stepCount = 0;
        interval = setInterval(() => {
          stepCount = (stepCount + 1) % 3;
          if (stepCount === 0) setTrafficStep('red');
          else if (stepCount === 1) setTrafficStep('yellow');
          else setTrafficStep('green');
          soundFx.playClick();
        }, 1500);
      } else if (currentLevel.simulationType === 'ultrasonic') {
        if (distanceSlider < 20) {
          interval = setInterval(() => {
            soundFx.playBuzzer(1100, 0.1);
          }, 300);
        }
      } else if (currentLevel.simulationType === 'servo') {
        // Smoothly rotate servo back and forth
        interval = setInterval(() => {
          setServoAngle((prev) => {
            const next = prev >= 180 ? 0 : prev + 45;
            soundFx.playServoMove();
            return next;
          });
        }, 1200);
      }
    } else {
      setBlinkState(false);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isSimulating, currentLevel.simulationType, distanceSlider]);

  // Ultrasonic distance change sound
  const handleDistanceChange = (val: number) => {
    setDistanceSlider(val);
    if (isSimulating && val < 20) {
      soundFx.playBuzzer(950, 0.12);
    }
  };

  // Wire connection logic
  const handlePinClick = (pin: string) => {
    soundFx.playClick();
    if (selectedPin === pin) {
      setSelectedPin(null);
    } else {
      setSelectedPin(pin);
    }
  };

  const handleComponentPinConnect = (componentId: string, pinRole: string) => {
    if (!selectedPin) return;
    soundFx.playClick();
    const targetKey = `${componentId}_${pinRole}`;

    setConnections((prev) => {
      const next = { ...prev };
      // Check if already mapped
      if (next[selectedPin] === targetKey) {
        delete next[selectedPin];
      } else {
        next[selectedPin] = targetKey;
      }
      return next;
    });
    setSelectedPin(null);
  };

  const handleQuickConnect = () => {
    soundFx.playSuccess();
    const autoMap: Record<string, string> = {};
    currentLevel.requiredConnections.forEach((rc) => {
      autoMap[rc.pin] = `${rc.targetComponent}_${rc.targetPin}`;
    });
    setConnections(autoMap);
  };

  const handleResetWires = () => {
    soundFx.playClick();
    setConnections({});
    setIsSimulating(false);
  };

  const verifyConnections = () => {
    let allValid = true;
    for (const req of currentLevel.requiredConnections) {
      const target = `${req.targetComponent}_${req.targetPin}`;
      if (connections[req.pin] !== target) {
        allValid = false;
        break;
      }
    }
    return allValid;
  };

  const handleRunSimulation = () => {
    const isValid = verifyConnections();
    if (isValid) {
      soundFx.playSuccess();
      setIsSimulating(true);
      if (!solvedLevels.includes(currentLevel.id)) {
        setSolvedLevels((prev) => [...prev, currentLevel.id]);
        setScore((prev) => prev + 50);
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    } else {
      soundFx.playError();
      setIsSimulating(false);
      alert("Sxemada xatolik bor! Simlarni to‘g‘ri pinlarga ulaganligingizni tekshiring yoki 'Yordam' tugmasini bosing.");
    }
  };

  const isCurrentLevelSolved = solvedLevels.includes(currentLevel.id);

  return (
    <div className="space-y-6">
      {/* Top Status & Level Bar */}
      <div className={`p-5 rounded-3xl border flex flex-col md:flex-row md:items-center justify-between gap-4 ${
        isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
      }`}>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <Cpu className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                {currentLevel.category}
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 font-mono">
                {currentLevelIdx + 1}/{ARDUINO_LEVELS.length}
              </span>
              {isCurrentLevelSolved && (
                <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  <CheckCircle2 className="w-3 h-3" /> Yechildi
                </span>
              )}
            </div>
            <h3 className="text-lg font-black text-slate-900 dark:text-white">
              {currentLevel.title}
            </h3>
          </div>
        </div>

        {/* Level Selector Pills & Score */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
            {ARDUINO_LEVELS.map((lvl, idx) => {
              const isCurrent = idx === currentLevelIdx;
              const isPassed = solvedLevels.includes(lvl.id);
              return (
                <button
                  key={lvl.id}
                  id={`btn-arduino-lvl-${lvl.id}`}
                  onClick={() => {
                    soundFx.playClick();
                    setCurrentLevelIdx(idx);
                  }}
                  className={`w-9 h-9 rounded-xl text-xs font-bold font-mono transition-all flex items-center justify-center cursor-pointer ${
                    isCurrent
                      ? 'bg-cyan-500 text-slate-950 shadow-md font-extrabold'
                      : isPassed
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                  title={lvl.title}
                >
                  {lvl.id}
                </button>
              );
            })}
          </div>

          <div className="px-4 py-2 rounded-2xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 text-amber-400 flex items-center gap-2">
            <Award className="w-4 h-4" />
            <span className="text-xs font-bold font-mono">{score} ball</span>
          </div>
        </div>
      </div>

      {/* Goal & Hint Banner */}
      <div className={`p-4 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs ${
        isDark ? 'bg-slate-950/60 border-slate-800 text-slate-300' : 'bg-cyan-50/70 border-cyan-200 text-slate-700'
      }`}>
        <div className="flex items-start gap-2.5">
          <Zap className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-slate-900 dark:text-white">Vazifa: </span>
            <span>{currentLevel.goal}</span>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => {
              soundFx.playClick();
              setShowHint(!showHint);
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-400 border border-amber-500/30 font-medium cursor-pointer"
          >
            <Lightbulb className="w-3.5 h-3.5" />
            <span>{showHint ? 'Yordamni yashirish' : 'Yordam (Hint)'}</span>
          </button>

          <button
            onClick={handleQuickConnect}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 font-medium cursor-pointer"
            title="Avtomatik to'g'ri ulash"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Avto-ulash</span>
          </button>
        </div>
      </div>

      {showHint && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs flex items-start gap-2.5"
        >
          <Lightbulb className="w-4 h-4 shrink-0 mt-0.5" />
          <div>
            <div className="font-bold mb-1">Qanday ulash kerak?</div>
            <div>{currentLevel.hint}</div>
          </div>
        </motion.div>
      )}

      {/* Main Interactive Arduino Board & Breadboard Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left / Center: Interactive Breadboard Canvas (8 cols) */}
        <div className={`lg:col-span-8 p-6 rounded-3xl border flex flex-col justify-between min-h-[520px] relative overflow-hidden ${
          isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-slate-100/90 border-slate-300 shadow-inner'
        }`}>
          
          {/* Top Board Toolbar */}
          <div className="flex items-center justify-between mb-4 z-10">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-cyan-500 animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-wider text-slate-700 dark:text-slate-300">
                ARDUINO UNO R3 VIRTUAL PLATASI
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleResetWires}
                className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-300 flex items-center gap-1.5 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Simlarni tozalash</span>
              </button>

              <button
                id="btn-run-arduino-sim"
                onClick={handleRunSimulation}
                className={`px-5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  isSimulating
                    ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/30'
                    : 'bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-black shadow-lg shadow-emerald-500/25 hover:scale-105'
                }`}
              >
                {isSimulating ? (
                  <>
                    <RotateCcw className="w-3.5 h-3.5 animate-spin" />
                    <span>To‘xtatish</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Yuklash & Ishga tushirish</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Graphical Visual Arduino UNO Simulation Area */}
          <div className="relative w-full h-[400px] rounded-2xl bg-gradient-to-b from-[#0e5c68]/30 via-slate-950/80 to-slate-950 p-4 border border-cyan-900/40 flex flex-col justify-between">
            
            {/* Top Pin Header of Arduino (Digital Pins 0-13, GND, AREF) */}
            <div>
              <div className="flex items-center justify-between text-[10px] font-mono text-cyan-400 mb-1 px-1">
                <span>DIGITAL (PWM ~) PINLAR</span>
                <span className="text-slate-400">AREF • GND • 13..0</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2 bg-slate-900 p-2 rounded-xl border border-cyan-800/40 overflow-x-auto">
                {['AREF', 'GND', 'D13', 'D12', 'D11', 'D10', 'D9', 'D8', 'D7', 'D6', 'D5', 'D4', 'D3', 'D2', 'TX', 'RX'].map((pinName) => {
                  const isSelected = selectedPin === pinName;
                  const isConnected = !!connections[pinName];
                  const isKeyPin = currentLevel.requiredConnections.some((c) => c.pin === pinName);
                  return (
                    <button
                      key={pinName}
                      id={`pin-${pinName}`}
                      onClick={() => handlePinClick(pinName)}
                      className={`flex flex-col items-center justify-center p-1.5 rounded-lg border text-[10px] font-mono transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-amber-400 text-slate-950 border-amber-300 scale-110 font-bold shadow-lg shadow-amber-400/40'
                          : isConnected
                            ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400 font-bold'
                            : isKeyPin
                              ? 'bg-indigo-950/60 text-indigo-300 border-indigo-500/50 hover:border-indigo-400'
                              : 'bg-slate-800/80 text-slate-400 border-slate-700 hover:bg-slate-700'
                      }`}
                    >
                      <div className={`w-3 h-3 rounded-full mb-1 flex items-center justify-center ${
                        isConnected ? 'bg-cyan-400' : isSelected ? 'bg-amber-500' : 'bg-slate-950 border border-slate-600'
                      }`} />
                      <span>{pinName}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Middle: Interactive Components Breadboard / Simulation Canvas */}
            <div className="my-auto py-2 flex flex-col items-center justify-center">
              
              {/* Simulation Mode 1: BLINK LEVEL */}
              {currentLevel.simulationType === 'blink' && (
                <div className="flex items-center justify-center gap-8 p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl">
                  {/* LED Component */}
                  <div className="flex flex-col items-center">
                    <div className="text-[11px] font-bold text-slate-400 mb-2">Qizil LED</div>
                    <div 
                      className={`w-16 h-16 rounded-full transition-all duration-300 flex items-center justify-center border-4 ${
                        isSimulating && blinkState
                          ? 'bg-red-500 border-red-300 shadow-[0_0_40px_rgba(239,68,68,0.9)] scale-110'
                          : 'bg-red-950/80 border-red-900/60'
                      }`}
                    >
                      <Zap className={`w-7 h-7 ${isSimulating && blinkState ? 'text-white' : 'text-red-900'}`} />
                    </div>
                    <div className="flex gap-2 mt-3">
                      <button
                        onClick={() => handleComponentPinConnect('LED1', 'anode')}
                        className={`px-2.5 py-1 rounded-md text-[10px] font-mono border cursor-pointer ${
                          connections['D13'] === 'LED1_anode'
                            ? 'bg-cyan-500 text-slate-950 font-bold border-cyan-400'
                            : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                        }`}
                      >
                        + Anod (D13)
                      </button>
                    </div>
                  </div>

                  {/* Resistor Component */}
                  <div className="flex flex-col items-center">
                    <div className="text-[11px] font-bold text-slate-400 mb-2">220 Ω Rezistor</div>
                    <div className="w-20 h-6 rounded-full bg-amber-700/60 border border-amber-600 flex items-center justify-around px-2">
                      <span className="w-1.5 h-full bg-red-600" />
                      <span className="w-1.5 h-full bg-red-600" />
                      <span className="w-1.5 h-full bg-amber-500" />
                      <span className="w-1.5 h-full bg-amber-300" />
                    </div>
                    <button
                      onClick={() => handleComponentPinConnect('R1', 'leg2')}
                      className={`mt-4 px-2.5 py-1 rounded-md text-[10px] font-mono border cursor-pointer ${
                        connections['GND'] === 'R1_leg2'
                          ? 'bg-cyan-500 text-slate-950 font-bold border-cyan-400'
                          : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                      }`}
                    >
                      - GND (Yer)
                    </button>
                  </div>
                </div>
              )}

              {/* Simulation Mode 2: TRAFFIC LIGHTS */}
              {currentLevel.simulationType === 'traffic' && (
                <div className="flex items-center gap-6 p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
                  <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col gap-3 items-center">
                    {/* Red */}
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full border-2 transition-all ${
                        isSimulating && trafficStep === 'red'
                          ? 'bg-red-500 border-white shadow-[0_0_25px_rgba(239,68,68,1)]'
                          : 'bg-red-950 border-red-900'
                      }`} />
                      <button
                        onClick={() => handleComponentPinConnect('LED_RED', 'anode')}
                        className={`px-2 py-1 rounded text-[10px] font-mono border cursor-pointer ${
                          connections['D12'] === 'LED_RED_anode' ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-400'
                        }`}
                      >
                        Qizil (D12)
                      </button>
                    </div>

                    {/* Yellow */}
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full border-2 transition-all ${
                        isSimulating && trafficStep === 'yellow'
                          ? 'bg-yellow-400 border-white shadow-[0_0_25px_rgba(250,204,21,1)]'
                          : 'bg-yellow-950 border-yellow-900'
                      }`} />
                      <button
                        onClick={() => handleComponentPinConnect('LED_YEL', 'anode')}
                        className={`px-2 py-1 rounded text-[10px] font-mono border cursor-pointer ${
                          connections['D11'] === 'LED_YEL_anode' ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-400'
                        }`}
                      >
                        Sariq (D11)
                      </button>
                    </div>

                    {/* Green */}
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full border-2 transition-all ${
                        isSimulating && trafficStep === 'green'
                          ? 'bg-green-500 border-white shadow-[0_0_25px_rgba(34,197,94,1)]'
                          : 'bg-green-950 border-green-900'
                      }`} />
                      <button
                        onClick={() => handleComponentPinConnect('LED_GRN', 'anode')}
                        className={`px-2 py-1 rounded text-[10px] font-mono border cursor-pointer ${
                          connections['D10'] === 'LED_GRN_anode' ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-400'
                        }`}
                      >
                        Yashil (D10)
                      </button>
                    </div>
                  </div>

                  <div className="text-xs text-slate-400 max-w-[200px]">
                    <div className="font-bold text-white mb-1">Chorraha Svetofori</div>
                    Avtomatlashtirilgan svetofor sikli: Qizil (to‘xtash), Sariq (tayyorgarlik) va Yashil (harakatlanish).
                  </div>
                </div>
              )}

              {/* Simulation Mode 3: ULTRASONIC & BUZZER */}
              {currentLevel.simulationType === 'ultrasonic' && (
                <div className="flex flex-col items-center gap-4 w-full max-w-md p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                      <Activity className="w-5 h-5 text-cyan-400" />
                      <span className="text-xs font-bold text-white">To‘siq masofasini o‘zgartiring:</span>
                    </div>
                    <span className={`text-sm font-mono font-black ${distanceSlider < 20 ? 'text-red-400 animate-pulse' : 'text-emerald-400'}`}>
                      {distanceSlider} sm
                    </span>
                  </div>

                  {/* Distance Slider */}
                  <input
                    type="range"
                    min="3"
                    max="100"
                    value={distanceSlider}
                    onChange={(e) => handleDistanceChange(Number(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                  />

                  {/* Ultrasonic & Buzzer Connectors */}
                  <div className="grid grid-cols-2 gap-3 w-full pt-2 border-t border-slate-800">
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex flex-col items-center">
                      <span className="text-[11px] font-bold text-cyan-400 mb-2">HC-SR04 Sensori</span>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleComponentPinConnect('HC_SR04', 'trig')}
                          className={`px-2 py-1 rounded text-[10px] font-mono border cursor-pointer ${
                            connections['D9'] === 'HC_SR04_trig' ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-300'
                          }`}
                        >
                          Trig (D9)
                        </button>
                        <button
                          onClick={() => handleComponentPinConnect('HC_SR04', 'echo')}
                          className={`px-2 py-1 rounded text-[10px] font-mono border cursor-pointer ${
                            connections['D8'] === 'HC_SR04_echo' ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-300'
                          }`}
                        >
                          Echo (D8)
                        </button>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex flex-col items-center">
                      <span className="text-[11px] font-bold text-amber-400 mb-2">Pyezo Buzzer</span>
                      <button
                        onClick={() => handleComponentPinConnect('BUZZER', 'pos')}
                        className={`px-3 py-1 rounded text-[10px] font-mono border cursor-pointer ${
                          connections['D7'] === 'BUZZER_pos' ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-300'
                        }`}
                      >
                        Signal (+) (D7)
                      </button>
                    </div>
                  </div>

                  {distanceSlider < 20 && isSimulating && (
                    <div className="text-xs font-bold text-red-400 flex items-center gap-1.5 animate-bounce">
                      <AlertTriangle className="w-4 h-4" />
                      <span>XAVF! To‘siq 20 sm dan yaqin! Ovozli signal ishga tushdi!</span>
                    </div>
                  )}
                </div>
              )}

              {/* Simulation Mode 4: SERVO MOTOR */}
              {currentLevel.simulationType === 'servo' && (
                <div className="flex flex-col items-center gap-4 p-5 rounded-2xl bg-slate-900/90 border border-slate-800 w-full max-w-sm">
                  <div className="text-xs font-bold text-white">SG90 Servo Burchagi: {servoAngle}°</div>
                  
                  {/* Rotating Arm Visual */}
                  <div className="relative w-32 h-32 rounded-full border-4 border-slate-700 bg-slate-950 flex items-center justify-center">
                    <div 
                      className="absolute w-2 h-14 bg-gradient-to-t from-cyan-500 to-indigo-500 rounded-full origin-bottom transition-transform duration-300"
                      style={{ transform: `rotate(${servoAngle - 90}deg) translateY(-50%)` }}
                    />
                    <div className="w-6 h-6 rounded-full bg-white shadow-md z-10" />
                  </div>

                  <button
                    onClick={() => handleComponentPinConnect('SERVO1', 'signal')}
                    className={`px-4 py-1.5 rounded-xl text-xs font-mono border cursor-pointer ${
                      connections['D9'] === 'SERVO1_signal' ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-300'
                    }`}
                  >
                    Servo Signal Simini D9 (PWM) ga ulash
                  </button>
                </div>
              )}

              {/* Simulation Mode 5: LDR PHOTO RESISTOR */}
              {currentLevel.simulationType === 'ldr' && (
                <div className="flex flex-col items-center gap-4 p-5 rounded-2xl bg-slate-900/90 border border-slate-800 w-full max-w-md">
                  <div className="flex items-center justify-between w-full text-xs">
                    <span className="font-bold text-white">Atrof-muhit yorug‘ligi:</span>
                    <span className="font-mono text-cyan-400">{ambientLight} ADC (Analog)</span>
                  </div>

                  <input
                    type="range"
                    min="50"
                    max="1000"
                    value={ambientLight}
                    onChange={(e) => setAmbientLight(Number(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                  />
                  <div className="flex justify-between w-full text-[10px] text-slate-500">
                    <span>Qorong‘i kecha (50)</span>
                    <span>Quyoshli kunduz (1000)</span>
                  </div>

                  <div className="flex items-center gap-4 pt-3 border-t border-slate-800 w-full justify-around">
                    <button
                      onClick={() => handleComponentPinConnect('LDR1', 'out')}
                      className={`px-3 py-1.5 rounded-xl text-xs font-mono border cursor-pointer ${
                        connections['A0'] === 'LDR1_out' ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-300'
                      }`}
                    >
                      LDR Sensori (A0)
                    </button>

                    <div className={`p-3 rounded-2xl border transition-all ${
                      ambientLight < 400 && isSimulating
                        ? 'bg-cyan-500/30 border-cyan-400 shadow-[0_0_30px_rgba(56,189,248,0.8)] text-cyan-300'
                        : 'bg-slate-950 border-slate-800 text-slate-600'
                    }`}>
                      <Lightbulb className="w-6 h-6" />
                    </div>

                    <button
                      onClick={() => handleComponentPinConnect('LAMP', 'anode')}
                      className={`px-3 py-1.5 rounded-xl text-xs font-mono border cursor-pointer ${
                        connections['D6'] === 'LAMP_anode' ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-300'
                      }`}
                    >
                      Chiroq D6
                    </button>
                  </div>
                </div>
              )}

            </div>

            {/* Bottom Pin Header: Power & Analog Pins (5V, 3.3V, GND, A0-A5) */}
            <div>
              <div className="flex items-center justify-between text-[10px] font-mono text-cyan-400 mb-1 px-1">
                <span>POWER & ANALOG IN PINLAR</span>
                <span className="text-slate-400">3.3V • 5V • GND • VIN • A0..A5</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2 bg-slate-900 p-2 rounded-xl border border-cyan-800/40 overflow-x-auto">
                {['3.3V', '5V', 'GND', 'VIN', 'A0', 'A1', 'A2', 'A3', 'A4', 'A5'].map((pinName) => {
                  const isSelected = selectedPin === pinName;
                  const isConnected = !!connections[pinName];
                  const isKeyPin = currentLevel.requiredConnections.some((c) => c.pin === pinName);
                  return (
                    <button
                      key={pinName}
                      id={`pin-${pinName}`}
                      onClick={() => handlePinClick(pinName)}
                      className={`flex flex-col items-center justify-center p-1.5 rounded-lg border text-[10px] font-mono transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-amber-400 text-slate-950 border-amber-300 scale-110 font-bold shadow-lg shadow-amber-400/40'
                          : isConnected
                            ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400 font-bold'
                            : isKeyPin
                              ? 'bg-indigo-950/60 text-indigo-300 border-indigo-500/50 hover:border-indigo-400'
                              : 'bg-slate-800/80 text-slate-400 border-slate-700 hover:bg-slate-700'
                      }`}
                    >
                      <span>{pinName}</span>
                      <div className={`w-3 h-3 rounded-full mt-1 flex items-center justify-center ${
                        isConnected ? 'bg-cyan-400' : isSelected ? 'bg-amber-500' : 'bg-slate-950 border border-slate-600'
                      }`} />
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Connected Wires Summary Pills */}
          <div className="mt-4 flex flex-wrap gap-2 text-xs">
            <span className="font-bold text-slate-400 self-center">Ulangan simlar:</span>
            {Object.keys(connections).length === 0 ? (
              <span className="text-slate-500 italic">Hali hech qanday sim ulanmadi. Pinni tanlang va detalga ulang!</span>
            ) : (
              Object.entries(connections).map(([pin, target]) => (
                <span 
                  key={pin}
                  className="px-2.5 py-1 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-mono text-[11px] flex items-center gap-1.5"
                >
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span>{pin} ➔ {String(target).replace('_', ' ')}</span>
                </span>
              ))
            )}
          </div>
        </div>

        {/* Right: Arduino C++ Code Editor & Explanation (4 cols) */}
        <div className={`lg:col-span-4 p-5 rounded-3xl border flex flex-col justify-between ${
          isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
        }`}>
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  Arduino C++ Dasturi
                </span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                Mikrodastur
              </span>
            </div>

            <div className="relative rounded-2xl bg-slate-950 p-4 border border-slate-800 overflow-x-auto font-mono text-[11px] text-cyan-300 leading-relaxed max-h-[380px]">
              <pre className="whitespace-pre">{currentLevel.code}</pre>
            </div>

            <div className="mt-4 p-3 rounded-2xl bg-slate-950/60 border border-slate-800 text-xs text-slate-400">
              <span className="font-bold text-white block mb-1">Qanday ishlaydi?</span>
              {currentLevel.description}
            </div>
          </div>

          {/* Level Next Button */}
          <div className="pt-4 mt-4 border-t border-slate-800 flex items-center justify-between">
            <button
              onClick={() => {
                soundFx.playClick();
                setCurrentLevelIdx((prev) => Math.max(0, prev - 1));
              }}
              disabled={currentLevelIdx === 0}
              className="px-3 py-2 rounded-xl text-xs font-bold text-slate-400 hover:text-white disabled:opacity-40 cursor-pointer"
            >
              Oldingi bosqich
            </button>

            <button
              onClick={() => {
                soundFx.playSuccess();
                if (currentLevelIdx < ARDUINO_LEVELS.length - 1) {
                  setCurrentLevelIdx((prev) => prev + 1);
                } else {
                  confetti();
                  alert("Tabriklaymiz! Barcha 5 ta Arduino bosqichini muvaffaqiyatli yakunladingiz!");
                }
              }}
              className="px-5 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-cyan-500 to-indigo-600 text-white flex items-center gap-1.5 shadow-md shadow-cyan-500/20 cursor-pointer"
            >
              <span>{currentLevelIdx === ARDUINO_LEVELS.length - 1 ? 'Hammasi yechildi!' : 'Keyingi bosqich'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

/* =========================================================================
   2. APP INVENTOR GAME COMPONENT (Block Puzzles & Mobile Emulator)
   ========================================================================= */

interface BlockPuzzle {
  id: number;
  appName: string;
  appDescription: string;
  targetAppAction: string;
  blocksNeeded: {
    id: string;
    label: string;
    color: string;
    category: 'event' | 'action' | 'parameter';
  }[];
  correctOrder: string[];
}

const APP_INVENTOR_PUZZLES: BlockPuzzle[] = [
  {
    id: 1,
    appName: "Gapiruvchi Ilova (Talking App)",
    appDescription: "Tugma bosilganda telefon yozilgan matnni ovoz chiqarib o‘qib beradi!",
    targetAppAction: "Matnni ovozga aylantirish (TTS)",
    blocksNeeded: [
      { id: 'b_btn', label: 'when Tugma1 .Click do', color: 'bg-amber-600', category: 'event' },
      { id: 'b_tts', label: 'call OvozgaAylantir1 .Speak', color: 'bg-purple-600', category: 'action' },
      { id: 'b_txt', label: 'message: "Salom, dunyo!"', color: 'bg-pink-600', category: 'parameter' }
    ],
    correctOrder: ['b_btn', 'b_tts', 'b_txt']
  },
  {
    id: 2,
    appName: "Ekran Bo‘ylab Chizish (Canvas Drawing)",
    appDescription: "Barmoq ekranda harakatlanganda rangli chiziq chizuvchi ilova!",
    targetAppAction: "Chizma chizish",
    blocksNeeded: [
      { id: 'b_drag', label: 'when Xolst1 .Dragged do', color: 'bg-amber-600', category: 'event' },
      { id: 'b_line', label: 'call Xolst1 .DrawLine', color: 'bg-purple-600', category: 'action' },
      { id: 'b_coords', label: 'x1: oldingiX, y1: oldingiY, x2: joriyX, y2: joriyY', color: 'bg-pink-600', category: 'parameter' }
    ],
    correctOrder: ['b_drag', 'b_line', 'b_coords']
  },
  {
    id: 3,
    appName: "Tebranish Detektori (Shake Alarm)",
    appDescription: "Telefon silkitilganda pyezo-signal beruvchi aqlli datchik!",
    targetAppAction: "Akselerometr tebranishi",
    blocksNeeded: [
      { id: 'b_shake', label: 'when AkselerometrSensor1 .Shaking do', color: 'bg-amber-600', category: 'event' },
      { id: 'b_sound', label: 'call Ovoz1 .Play', color: 'bg-purple-600', category: 'action' },
      { id: 'b_vib', label: 'call Telefon1 .Vibrate(ms: 500)', color: 'bg-purple-600', category: 'action' }
    ],
    correctOrder: ['b_shake', 'b_sound', 'b_vib']
  }
];

const AppInventorGameComponent: React.FC<{ language: Language; theme: ThemeMode }> = ({ theme }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [placedBlocks, setPlacedBlocks] = useState<string[]>([]);
  const [phoneMessage, setPhoneMessage] = useState<string>("Tugmani bosing...");
  const [isSpeaking, setIsSpeaking] = useState(false);
  const isDark = theme === 'dark';

  const puzzle = APP_INVENTOR_PUZZLES[currentIdx];

  const handleAddBlock = (blockId: string) => {
    soundFx.playClick();
    if (!placedBlocks.includes(blockId)) {
      setPlacedBlocks([...placedBlocks, blockId]);
    }
  };

  const handleRemoveBlock = (blockId: string) => {
    soundFx.playClick();
    setPlacedBlocks(placedBlocks.filter((b) => b !== blockId));
  };

  const isSolved = 
    placedBlocks.length === puzzle.correctOrder.length &&
    placedBlocks.every((id, idx) => id === puzzle.correctOrder[idx]);

  const handleRunPhoneApp = () => {
    if (!isSolved) {
      soundFx.playError();
      alert("Bloklar ketma-ketligi to‘g‘ri yig‘ilmadi! MIT App Inventor mantiqini tekshiring.");
      return;
    }
    soundFx.playSuccess();
    if (puzzle.id === 1) {
      setPhoneMessage("Salom, dunyo! Ilova gapirmoqda!");
      setIsSpeaking(true);
      if ('speechSynthesis' in window) {
        const u = new SpeechSynthesisUtterance("Salom, dunyo! App Inventor ilovasi muvaffaqiyatli ishga tushdi!");
        u.lang = 'uz-UZ';
        window.speechSynthesis.speak(u);
      }
      setTimeout(() => setIsSpeaking(false), 3000);
    } else if (puzzle.id === 2) {
      setPhoneMessage("Chiziqlar chizildi!");
    } else {
      setPhoneMessage("Signal chalindi!");
      soundFx.playBuzzer(1200, 0.4);
    }
    confetti({ particleCount: 50 });
  };

  return (
    <div className="space-y-6">
      <div className={`p-6 rounded-3xl border ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <span className="text-xs font-mono font-bold text-amber-500 uppercase tracking-wider">MIT App Inventor Laboratoriyasi</span>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-1">{puzzle.appName}</h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">{puzzle.appDescription}</p>
          </div>

          <div className="flex gap-2">
            {APP_INVENTOR_PUZZLES.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => {
                  soundFx.playClick();
                  setCurrentIdx(idx);
                  setPlacedBlocks([]);
                  setPhoneMessage("Tugmani bosing...");
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold font-mono cursor-pointer ${
                  currentIdx === idx ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                Ilova {p.id}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Blocks Workspace (8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              1. Kerakli Bloklarni Tanlang va Joylashtiring:
            </div>

            {/* Available Blocks Pool */}
            <div className="flex flex-wrap gap-2 p-4 rounded-2xl bg-slate-950 border border-slate-800 min-h-[90px]">
              {puzzle.blocksNeeded.map((blk) => {
                const isUsed = placedBlocks.includes(blk.id);
                return (
                  <button
                    key={blk.id}
                    onClick={() => handleAddBlock(blk.id)}
                    disabled={isUsed}
                    className={`px-4 py-2.5 rounded-xl text-xs font-bold text-white shadow-md transition-all cursor-pointer ${blk.color} ${
                      isUsed ? 'opacity-30 cursor-not-allowed scale-95' : 'hover:scale-105'
                    }`}
                  >
                    + {blk.label}
                  </button>
                );
              })}
            </div>

            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider pt-2">
              2. Yig‘ilgan Bloklar Ketma-ketligi (Kodni tashkil etish):
            </div>

            {/* Assembled Puzzle Area */}
            <div className="p-4 rounded-2xl bg-slate-950/80 border-2 border-dashed border-amber-500/40 min-h-[160px] flex flex-col gap-2 justify-center">
              {placedBlocks.length === 0 ? (
                <div className="text-center text-xs text-slate-500 italic">
                  Bloklarni shu yerga bosib qo‘shing. Tartib: Hodisa (When) ➔ Harakat (Call) ➔ Parametr (Message).
                </div>
              ) : (
                placedBlocks.map((blkId, idx) => {
                  const b = puzzle.blocksNeeded.find((item) => item.id === blkId);
                  if (!b) return null;
                  return (
                    <motion.div
                      key={blkId}
                      layout
                      className={`p-3 rounded-xl text-xs font-bold text-white flex items-center justify-between ${b.color}`}
                      style={{ marginLeft: `${idx * 16}px` }}
                    >
                      <span>{idx + 1}. {b.label}</span>
                      <button
                        onClick={() => handleRemoveBlock(blkId)}
                        className="px-2 py-0.5 bg-black/30 rounded text-[10px] hover:bg-black/50 cursor-pointer"
                      >
                        O‘chirish
                      </button>
                    </motion.div>
                  );
                })
              )}
            </div>
          </div>

          {/* Virtual Phone Emulator Preview (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <div className="text-xs font-bold text-slate-400 mb-3 flex items-center gap-1.5">
              <Smartphone className="w-4 h-4 text-amber-500" />
              <span>Smartfon Emulyatori</span>
            </div>

            {/* Smartphone Case */}
            <div className="w-[240px] h-[400px] rounded-[36px] bg-slate-950 border-4 border-slate-700 shadow-2xl p-4 flex flex-col justify-between relative overflow-hidden">
              {/* Notch */}
              <div className="w-20 h-4 bg-slate-800 rounded-full mx-auto mb-2" />

              {/* Screen Content */}
              <div className="bg-slate-900 h-full rounded-2xl p-3 flex flex-col items-center justify-center gap-4 text-center border border-slate-800">
                <div className="text-xs font-bold text-amber-400">{puzzle.appName}</div>
                
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-[11px] text-slate-300 w-full min-h-[50px] flex items-center justify-center">
                  {phoneMessage}
                </div>

                <button
                  id="btn-phone-run"
                  onClick={handleRunPhoneApp}
                  className={`w-full py-2.5 rounded-xl text-xs font-bold text-white shadow-lg transition-transform cursor-pointer ${
                    isSpeaking ? 'bg-purple-600 animate-pulse' : 'bg-amber-500 hover:bg-amber-400 text-slate-950'
                  }`}
                >
                  {isSpeaking ? 'Gapirmoqda...' : 'Tugmani Bosish (Sinash)'}
                </button>
              </div>

              {/* Bottom Home Indicator */}
              <div className="w-16 h-1 bg-slate-700 rounded-full mx-auto mt-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* =========================================================================
   3. ROBOTICS GAME COMPONENT (Rover Grid Maze Navigation)
   ========================================================================= */

const RoboticsGameComponent: React.FC<{ language: Language; theme: ThemeMode }> = ({ theme }) => {
  const [roverPos, setRoverPos] = useState<{ x: number; y: number; dir: 0 | 90 | 180 | 270 }>({ x: 0, y: 0, dir: 90 });
  const [commands, setCommands] = useState<('forward' | 'left' | 'right')[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const isDark = theme === 'dark';

  const target = { x: 3, y: 3 };
  const obstacles = [{ x: 1, y: 1 }, { x: 2, y: 1 }, { x: 1, y: 2 }];

  const handleAddCmd = (cmd: 'forward' | 'left' | 'right') => {
    soundFx.playClick();
    if (commands.length < 10) {
      setCommands([...commands, cmd]);
    }
  };

  const handleResetRover = () => {
    soundFx.playClick();
    setRoverPos({ x: 0, y: 0, dir: 90 });
    setCommands([]);
    setIsRunning(false);
    setIsSuccess(false);
  };

  const handleRunRover = async () => {
    if (commands.length === 0) return;
    soundFx.playSuccess();
    setIsRunning(true);
    setIsSuccess(false);

    let curX = 0;
    let curY = 0;
    let curDir: 0 | 90 | 180 | 270 = 90;

    for (const cmd of commands) {
      await new Promise((r) => setTimeout(r, 600));
      if (cmd === 'left') {
        curDir = ((curDir - 90 + 360) % 360) as any;
        soundFx.playServoMove();
      } else if (cmd === 'right') {
        curDir = ((curDir + 90) % 360) as any;
        soundFx.playServoMove();
      } else if (cmd === 'forward') {
        let nx = curX;
        let ny = curY;
        if (curDir === 0) ny = Math.max(0, curY - 1);
        else if (curDir === 90) nx = Math.min(3, curX + 1);
        else if (curDir === 180) ny = Math.min(3, curY + 1);
        else if (curDir === 270) nx = Math.max(0, curX - 1);

        // Check obstacle collision
        const hit = obstacles.some((o) => o.x === nx && o.y === ny);
        if (hit) {
          soundFx.playError();
          alert("To‘qnashuv! Robot toshga urildi!");
          setIsRunning(false);
          return;
        }
        curX = nx;
        curY = ny;
        soundFx.playBlinkTick();
      }
      setRoverPos({ x: curX, y: curY, dir: curDir });
    }

    setIsRunning(false);
    if (curX === target.x && curY === target.y) {
      setIsSuccess(true);
      soundFx.playSuccess();
      confetti({ particleCount: 70 });
    }
  };

  return (
    <div className={`p-6 rounded-3xl border ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
      <div className="mb-6">
        <span className="text-xs font-mono font-bold text-indigo-500 uppercase tracking-wider">Robototexnika Simulyatori</span>
        <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-1">Mars Rover Labirint Missiyasi</h3>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Avtonom robotni dasturlang: to‘siqlarni chetlab o‘tib, marraga (kristall stansiyasiga) yetib boring!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* 4x4 Grid Visual (7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-center">
          <div className="grid grid-cols-4 gap-2 bg-slate-950 p-4 rounded-3xl border border-indigo-900/40 shadow-xl w-full max-w-[360px] aspect-square">
            {Array.from({ length: 16 }).map((_, idx) => {
              const x = idx % 4;
              const y = Math.floor(idx / 4);
              const isRover = roverPos.x === x && roverPos.y === y;
              const isTarget = target.x === x && target.y === y;
              const isObstacle = obstacles.some((o) => o.x === x && o.y === y);

              return (
                <div
                  key={idx}
                  className={`rounded-2xl border flex items-center justify-center relative transition-all ${
                    isRover
                      ? 'bg-indigo-600/30 border-indigo-400 shadow-md'
                      : isTarget
                        ? 'bg-emerald-500/20 border-emerald-400'
                        : isObstacle
                          ? 'bg-rose-950/60 border-rose-800'
                          : 'bg-slate-900/60 border-slate-800'
                  }`}
                >
                  {isRover && (
                    <motion.div
                      layout
                      className="flex flex-col items-center justify-center text-indigo-400"
                      style={{ transform: `rotate(${roverPos.dir - 90}deg)` }}
                    >
                      <Bot className="w-8 h-8" />
                    </motion.div>
                  )}

                  {isTarget && !isRover && (
                    <div className="text-emerald-400 flex flex-col items-center">
                      <Sparkles className="w-6 h-6 animate-spin" />
                      <span className="text-[9px] font-bold">BAZA</span>
                    </div>
                  )}

                  {isObstacle && (
                    <div className="text-rose-500 font-bold text-xs">
                      ▲ TOSHLAR
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Command Queue & Controls (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            Robot Buyruqlarini Qo‘shish:
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => handleAddCmd('forward')}
              disabled={isRunning}
              className="flex-1 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-md cursor-pointer"
            >
              ▲ Oldinga
            </button>
            <button
              onClick={() => handleAddCmd('left')}
              disabled={isRunning}
              className="flex-1 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold cursor-pointer"
            >
              ◀ Chapga 90°
            </button>
            <button
              onClick={() => handleAddCmd('right')}
              disabled={isRunning}
              className="flex-1 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold cursor-pointer"
            >
              ▶ O‘ngga 90°
            </button>
          </div>

          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider pt-2">
            Buyruqlar Dasturi ({commands.length}/10):
          </div>

          <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 min-h-[90px] flex flex-wrap gap-2 items-center">
            {commands.length === 0 ? (
              <span className="text-xs text-slate-500 italic">Hali buyruq qo‘shilmadi.</span>
            ) : (
              commands.map((cmd, i) => (
                <span key={i} className="px-2.5 py-1 rounded-lg bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-mono">
                  {i + 1}. {cmd === 'forward' ? 'Oldinga' : cmd === 'left' ? 'Chapga' : 'O‘ngga'}
                </span>
              ))
            )}
          </div>

          <div className="flex gap-3 pt-2">
            <button
              onClick={handleResetRover}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-300 cursor-pointer"
            >
              Qayta o‘rnatish
            </button>

            <button
              id="btn-run-rover"
              onClick={handleRunRover}
              disabled={isRunning || commands.length === 0}
              className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-bold text-xs shadow-lg shadow-indigo-500/20 cursor-pointer"
            >
              {isRunning ? 'Robot Harakatlanmoqda...' : 'Missiyani Boshlash (Start)'}
            </button>
          </div>

          {isSuccess && (
            <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-bold flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 shrink-0" />
              <span>G‘alaba! Robot Mars bazasiga xavfsiz yetib keldi!</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

/* =========================================================================
   4. PYTHON GAME COMPONENT (Interactive Coding Quest)
   ========================================================================= */

interface PythonQuest {
  id: number;
  title: string;
  question: string;
  starterCode: string;
  expectedOutput: string;
  hint: string;
}

const PYTHON_QUESTS: PythonQuest[] = [
  {
    id: 1,
    title: "1-Jumboq: Ekranga chiqarish",
    question: "Python tilida ekranga 'Salom Python!' matnini chiqaruvchi kod yozing.",
    starterCode: `print("Salom Python!")`,
    expectedOutput: "Salom Python!",
    hint: "print() funksiyasidan foydalaning."
  },
  {
    id: 2,
    title: "2-Jumboq: Juft sonlarni topish",
    question: "Agar x juft son bo‘lsa 'Juft', aks holda 'Toq' so‘zini chiqaruvchi shartli ifoda yozing.",
    starterCode: `son = 10
if son % 2 == 0:
    print("Juft")
else:
    print("Toq")`,
    expectedOutput: "Juft",
    hint: "% operatori qoldiqni hisoblaydi."
  },
  {
    id: 3,
    title: "3-Jumboq: Arduino bilan Python aloqasi",
    question: "Robot sensorlarini ekranga tsiklda chiqarish:",
    starterCode: `sensorlar = ["Ultrasonik", "LDR", "Servo"]
for s in sensorlar:
    print(s)`,
    expectedOutput: "Ultrasonik\nLDR\nServo",
    hint: "for siklidan foydalaning."
  }
];

const PythonGameComponent: React.FC<{ language: Language; theme: ThemeMode }> = ({ theme }) => {
  const [questIdx, setQuestIdx] = useState(0);
  const [code, setCode] = useState(PYTHON_QUESTS[0].starterCode);
  const [output, setOutput] = useState<string | null>(null);
  const isDark = theme === 'dark';

  const q = PYTHON_QUESTS[questIdx];

  const handleRunPython = () => {
    soundFx.playSuccess();
    setOutput(q.expectedOutput);
    confetti({ particleCount: 40 });
  };

  return (
    <div className={`p-6 rounded-3xl border ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
      <div className="flex items-center justify-between gap-4 mb-6">
        <div>
          <span className="text-xs font-mono font-bold text-emerald-500 uppercase tracking-wider">Python Kod Arenasi</span>
          <h3 className="text-2xl font-black text-slate-900 dark:text-white mt-1">{q.title}</h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">{q.question}</p>
        </div>

        <div className="flex gap-2">
          {PYTHON_QUESTS.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                soundFx.playClick();
                setQuestIdx(idx);
                setCode(item.starterCode);
                setOutput(null);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold font-mono cursor-pointer ${
                questIdx === idx ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-400'
              }`}
            >
              Quest {item.id}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        {/* Code Editor */}
        <div className="space-y-3">
          <div className="text-xs font-bold text-slate-400">Python Kod Muharriri:</div>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            rows={7}
            className="w-full p-4 rounded-2xl bg-slate-950 border border-slate-800 font-mono text-xs text-emerald-400 focus:outline-none focus:border-emerald-500"
          />

          <button
            id="btn-run-python"
            onClick={handleRunPython}
            className="px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs flex items-center gap-2 cursor-pointer shadow-lg shadow-emerald-500/20"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Kodni Bajarish (Run)</span>
          </button>
        </div>

        {/* Terminal Output */}
        <div className="space-y-3">
          <div className="text-xs font-bold text-slate-400">Konsol Natijasi:</div>
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-200 min-h-[160px] whitespace-pre">
            {output ? (
              <span className="text-emerald-400">{output}</span>
            ) : (
              <span className="text-slate-600">Kodni ishga tushirish uchun 'Kodni Bajarish' tugmasini bosing...</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
