import { RoboticsComponent, ArduinoProject } from '../types';

export const roboticsComponentsData: RoboticsComponent[] = [
  {
    id: 'what-is-robot',
    name: 'Robot nima?',
    icon: 'Bot',
    desc: {
      uz: 'Atrof-muhitni sensorlar orqali idrok etuvchi, olingan ma’lumotni mikrokontrollerda qayta ishlovchi va mexanik harakatlarni bajaruvchi avtomatlashtirilgan tizim.',
      ru: 'Автоматическая система, воспринимающая мир через датчики, обрабатывающая данные и совершающая действия.',
      en: 'An automated system sensing its environment, processing telemetry with microcontrollers, and performing physical actuation.'
    },
    role: {
      uz: 'Inson hayotiga xavfli, og‘ir yoki o‘ta aniq takrorlanuvchi ishlarni mustaqil va bexato amalga oshirish.',
      ru: 'Выполнение опасной, тяжелой или монотонной работы без утомления.',
      en: 'Performing hazardous, heavy, or high-precision repetitive tasks autonomously.'
    },
    exampleUse: {
      uz: 'Avtomobil payvandlash liniyalari, Marsdagi kashfiyotchi roverlar va jarrohlik robotlari.',
      ru: 'Линии сварки авто, марсоходы Perseverance и хирургические роботы.',
      en: 'Automotive welding assembly lines, Mars exploration rovers, and robotic surgery.'
    }
  },
  {
    id: 'sensors',
    name: 'Sensorlar (Datchiklar)',
    icon: 'Activity',
    desc: {
      uz: 'Fizik kattaliklarni (yorug‘lik, harorat, masofa, gaz, harakat) elektr signallariga aylantirib beruvchi sezuvchi elementlar.',
      ru: 'Электронные элементы, преобразующие физические величины в электрические сигналы.',
      en: 'Transducers converting physical phenomena (light, temperature, distance, motion) into electrical signals.'
    },
    role: {
      uz: 'Robotga tashqi olamni "ko‘rish", "sezish" va atrofdagi o‘zgarishlarga qarab to‘g‘ri qaror qabul qilish imkonini berish.',
      ru: 'Служат «органами чувств» робота для адаптации к внешней среде.',
      en: 'Acting as the robot’s sensory organs to perceive surrounding environmental changes.'
    },
    exampleUse: {
      uz: 'Avtomobil parktroniklari, smartfonning barmoq izi va qadam hisoblagich datchiklari.',
      ru: 'Парктроники, датчики шагов и сканеры отпечатков пальцев.',
      en: 'Automobile parking sonar sensors and smartphone IMU pedometers.'
    }
  },
  {
    id: 'arduino',
    name: 'Arduino',
    icon: 'Cpu',
    desc: {
      uz: 'Elektronika va robototexnikani o‘rganish uchun dunyodagi eng ommabop ochiq kodli mikrokontroller platasi (ATmega328P asosida).',
      ru: 'Популярная плата микроконтроллера с открытым исходным кодом для обучения робототехнике.',
      en: 'World-renowned open-source microcontroller prototyping platform based on ATmega microchips.'
    },
    role: {
      uz: 'Sensorlardan ma’lumotlarni o‘qish va chiroqlar, motorlar va relelarga boshqaruv impulslarini yuborish.',
      ru: 'Считывание данных с датчиков и прямое управление двигателями и светодиодами.',
      en: 'Reading analog/digital sensor pins and driving actuators, servos, and indicators.'
    },
    exampleUse: {
      uz: 'Aqlli uy tizimlari, ob-havo stansiyalari, chiziq bo‘ylab yuruvchi kichik robotlar.',
      ru: 'Умный дом, метеостанции, роботы-следопыты по линии.',
      en: 'Smart home automation, weather monitors, and line-follower robot vehicles.'
    }
  },
  {
    id: 'raspberry-pi',
    name: 'Raspberry Pi',
    icon: 'Terminal',
    desc: {
      uz: 'Kredit kartasi o‘lchamidagi, to‘liq Linux operatsion tizimi (Debian) ishlaydigan bitta plataning o‘zidagi haqiqiy kompyuter (SBC).',
      ru: 'Одноплатный микрокомпьютер размером с кредитку под управлением полноценной ОС Linux.',
      en: 'A credit card-sized single-board computer running full Linux distributions with GPIO headers.'
    },
    role: {
      uz: 'Kompyuter ko‘rish (Computer Vision), kamera orqali yuzlarni aniqlash va murakkab neyron tarmoqlarni robotda ishga tushirish.',
      ru: 'Обработка видеопотока с камер, распознавание лиц и запуск алгоритмов ИИ.',
      en: 'Running computer vision, camera stream inference, and complex software stacks locally.'
    },
    exampleUse: {
      uz: 'Avtonom sun’iy intellektli dronlar, uy multimedia serveri, yuzni tanuvchi aqlli eshik qulflari.',
      ru: 'Автономные дроны с ИИ, медиацентры, умные замки с распознаванием лиц.',
      en: 'Autonomous AI drones, personal web servers, and facial recognition door locks.'
    }
  },
  {
    id: 'servo-motor',
    name: 'Servo motor (Servoprivod)',
    icon: 'Compass',
    desc: {
      uz: 'Vali aniq berilgan burchakka (masalan, 0° dan 180° gacha) buriluvchi va shu holatda qat’iy ushlab turuvchi mexanizm.',
      ru: 'Электродвигатель с обратной связью, поворачивающийся строго на заданный угол (0°-180°).',
      en: 'A rotary actuator allowing precise angular position control with built-in closed-loop feedback.'
    },
    role: {
      uz: 'Robot bo‘g‘inlari, barmoqlari va kameralarni aniq koordinatalarga yo‘naltirish.',
      ru: 'Точное позиционирование суставов роборуки и поворот камер.',
      en: 'Actuating articulated joints, robotic fingers, and pan-tilt camera platforms.'
    },
    exampleUse: {
      uz: 'Robot qo‘l manipulyatorlari, samolyot qanotlarining boshqaruv mexanizmlari (elonlar).',
      ru: 'Суставы манипуляторов, закрылки радиоуправляемых самолетов.',
      en: 'Multi-axis robotic arms and radio-controlled aircraft control surfaces.'
    }
  },
  {
    id: 'ultrasonic',
    name: 'Ultrasonic sensor (HC-SR04)',
    icon: 'Radio',
    desc: {
      uz: 'Inson qulog‘i eshitmaydigan 40 kGs ultratovush to‘lqini tarqatib, uning to‘siqdan qaytish vaqti orqali masofani santimetrlarda aniq o‘lchovchi sensor.',
      ru: 'Ультразвуковой дальномер, измеряющий расстояние по времени возврата эха ультразвука.',
      en: 'An acoustic sensor emitting 40 kHz ultrasound waves and measuring reflection time to determine range.'
    },
    role: {
      uz: 'Robotning to‘siqlarga urilib ketishining oldini olish va masofani millimetrlarda hisoblash.',
      ru: 'Предотвращение столкновений робота с препятствиями.',
      en: 'Obstacle avoidance navigation and real-time proximity detection.'
    },
    exampleUse: {
      uz: 'Robot-changyutgichlar, avtomobil radarlari, suyuqlik idishlari to‘lish darajasini o‘lchash.',
      ru: 'Роботы-пылесосы, датчики парковки, замер уровня жидкости в баках.',
      en: 'Robotic vacuums, liquid tank level monitors, and perimeter detection.'
    }
  },
  {
    id: 'led',
    name: 'LED (Yorug‘lik diodi)',
    icon: 'Sun',
    desc: {
      uz: 'Elektr toki o‘tganda energiya tejamkor ravishda fotonlar chiqaruvchi yarimo‘tkazgichli yorug‘lik manbai.',
      ru: 'Полупроводниковый прибор, излучающий свет при прохождении электрического тока.',
      en: 'A semiconductor light source emitting light when forward-biased electric current flows through.'
    },
    role: {
      uz: 'Robot holati, batareya quvvati, xatoliklar yoki qabul qilingan buyruqlarni ko‘rsatib beruvchi indikator.',
      ru: 'Индикация режимов работы, ошибок и статуса питания робота.',
      en: 'Visual feedback indicator displaying power, statuses, and error diagnostics.'
    },
    exampleUse: {
      uz: 'Svetofor loyihalari, barcha elektronika asboblarining quvvat chiroqlari.',
      ru: 'Светофоры, гирлянды, индикаторы включения техники.',
      en: 'Traffic signals, status indicators on all electronics, and screen backlighting.'
    }
  },
  {
    id: 'dc-motor',
    name: 'DC Motor & Reduktor',
    icon: 'Zap',
    desc: {
      uz: 'O‘zgarmas tok ta’sirida o‘z o‘qi atrofida doimiy va yuqori tezlikda aylanuvchi asosiy elektr motori.',
      ru: 'Электродвигатель постоянного тока с редуктором для создания крутящего момента.',
      en: 'Direct-current rotary motor paired with geared gearboxes for wheel and pulley drive.'
    },
    role: {
      uz: 'G‘ildiraklarni aylantirish, konveyer lentalarini harakatga keltirish va robotni oldinga/orqaga yurgizish.',
      ru: 'Вращение колес колесных платформ и гусениц роботов.',
      en: 'Propelling wheeled and tracked robotic chassis across terrain.'
    },
    exampleUse: {
      uz: 'Masofadan boshqariluvchi mashinalar, dron parraklari, lift mexanizmlari.',
      ru: 'Радиоуправляемые машинки, пропеллеры дронов, конвейеры.',
      en: 'Radio-controlled cars, drone propellers, and industrial conveyor belts.'
    }
  },
  {
    id: 'robot-arm',
    name: 'Robot qo‘l (Manipulyator)',
    icon: 'Hand',
    desc: {
      uz: 'Inson qo‘li anatomiyasiga o‘xshash, bir nechta erkinlik darajasi (DOF) bo‘yicha harakatlanuvchi mexanik manipulyator.',
      ru: 'Многозвенный механический манипулятор с несколькими степенями свободы.',
      en: 'An articulated mechanical manipulator arm mimicking human shoulder, elbow, and wrist joints.'
    },
    role: {
      uz: 'Og‘ir yoki mayda detallarni qisib olish, ko‘chirish, payvandlash, bo‘yash va joyiga o‘rnatish.',
      ru: 'Захват, перемещение, сварка деталей и сборка электронных плат.',
      en: 'Gripping, sorting, precision micro-assembly, welding, and material handling.'
    },
    exampleUse: {
      uz: 'Tesla Gigafactory konveyerlaridagi yig‘ish robotlari, operatsiya zallaridagi robotlashtirilgan asboblar.',
      ru: 'Сборочные линии заводов электроники и автопрома.',
      en: 'Automotive stamping factories and surgical microsurgery instruments.'
    }
  },
  {
    id: 'smart-robot',
    name: 'Aqlli robot (Avtonom AI Robot)',
    icon: 'Sparkles',
    desc: {
      uz: 'Oldindan yozilgan qat’iy kodsiz, sun’iy intellekt va mashinali o‘rganish orqali kutilmagan vaziyatlarda mustaqil qaror qabul qiluvchi robot.',
      ru: 'Автономный робот с элементами искусственного интеллекта, обучающийся на опыте.',
      en: 'An autonomous robotic entity utilizing neural networks and reinforcement learning to navigate dynamically.'
    },
    role: {
      uz: 'Noma’lum muhitlarda xaritalar tuzish (SLAM), inson nutqini tushunish va murakkab vazifalarni hamkorlikda bajarish.',
      ru: 'Ориентация в незнакомых пространствах, понимание речи и взаимодействие с людьми.',
      en: 'Constructing dynamic 3D maps, understanding speech commands, and interacting with humans.'
    },
    exampleUse: {
      uz: 'Boston Dynamics kompaniyasining Atlas va Spot robotlari, insoniy gumanoid robotlar (Tesla Optimus).',
      ru: 'Роботы Spot и Atlas от Boston Dynamics, гуманоид Tesla Optimus.',
      en: 'Boston Dynamics Spot & Atlas, autonomous warehouse AGVs, and Tesla Optimus humanoid.'
    }
  }
];

export const arduinoProjectsData: ArduinoProject[] = [
  {
    id: 'traffic-light',
    title: {
      uz: '1. Svetofor Tizimi (Traffic Light)',
      ru: '1. Система светофора (Traffic Light)',
      en: '1. Smart Traffic Light System'
    },
    difficulty: 'Oson',
    componentsNeeded: [
      { uz: 'Arduino Uno platasi', ru: 'Плата Arduino Uno', en: 'Arduino Uno board' },
      { uz: 'Qizil, sariq, yashil 5mm LED chiroqlar', ru: 'Красный, желтый и зеленый LED', en: 'Red, yellow, green 5mm LEDs' },
      { uz: '3 dona 220 Om rezistor', ru: '3 резистора по 220 Ом', en: '3x 220 Ohm resistors' },
      { uz: 'Maket platasi (Breadboard) va simlar (Jumper)', ru: 'Макетная плата и соединительные провода', en: 'Breadboard & jumper wires' }
    ],
    wiringDiagramDesc: {
      uz: 'Qizil LED musbat (uzun oyog‘i) 220 Om rezistor orqali Arduino Pin 13 ga. Sariq LED Pin 12 ga. Yashil LED Pin 11 ga. Har bir LEDning manfiy (kaltasi) oyog‘i umumiy GND ga ulanadi.',
      ru: 'Красный LED -> резистор 220 Ом -> Pin 13. Желтый LED -> Pin 12. Зеленый LED -> Pin 11. Катоды (минус) всех светодиодов объединены на пин GND.',
      en: 'Red LED anode -> 220 Ohm -> Pin 13. Yellow LED -> Pin 12. Green LED -> Pin 11. All LED cathodes connect to common Arduino GND.'
    },
    code: `// Svetofor loyihasi
const int redPin = 13;
const int yellowPin = 12;
const int greenPin = 11;

void setup() {
  pinMode(redPin, OUTPUT);
  pinMode(yellowPin, OUTPUT);
  pinMode(greenPin, OUTPUT);
}

void loop() {
  // 1. Qizil chiroq 5 soniya yonadi
  digitalWrite(redPin, HIGH);
  digitalWrite(yellowPin, LOW);
  digitalWrite(greenPin, LOW);
  delay(5000);

  // 2. Sariq chiroq 2 soniya yonadi
  digitalWrite(redPin, LOW);
  digitalWrite(yellowPin, HIGH);
  delay(2000);

  // 3. Yashil chiroq 5 soniya yonadi
  digitalWrite(yellowPin, LOW);
  digitalWrite(greenPin, HIGH);
  delay(5000);

  // 4. Yashil chiroq 3 marta miltillaydi
  for (int i = 0; i < 3; i++) {
    digitalWrite(greenPin, LOW);
    delay(400);
    digitalWrite(greenPin, HIGH);
    delay(400);
  }
}`,
    workingPrinciple: {
      uz: 'Arduino raqamli chiqish pinlariga navbatma-navbat 5V (HIGH) va 0V (LOW) beradi. delay() funksiyasi belgilangan vaqt davomida kutishni ta’minlaydi.',
      ru: 'Контроллер поочередно подает 5В (HIGH) и 0В (LOW) на цифровые пины с выдержкой задержек delay().',
      en: 'Arduino alternates digital HIGH (5V) and LOW (0V) states on pins with timed delay() intervals to simulate intersection cycles.'
    },
    stepByStep: [
      { uz: '1-qadam: LED larni ketma-ketlikda breadboardga joylashtiring.', ru: 'Шаг 1: Разместите светодиоды на макетной плате.', en: 'Step 1: Mount the three LEDs on the breadboard.' },
      { uz: '2-qadam: Har birining musbat oyog‘iga 220 Om rezistor ulab, Arduino 13, 12, 11-pinlariga bog‘lang.', ru: 'Шаг 2: Подключите резисторы к анодам и пинам 13, 12, 11.', en: 'Step 2: Connect current-limiting 220 Ohm resistors to pins 13, 12, 11.' },
      { uz: '3-qadam: Manfiy oyoqlarini Arduino GND piniga ulang.', ru: 'Шаг 3: Соедините катоды светодиодов с пином GND.', en: 'Step 3: Tie all LED cathodes to Arduino GND.' },
      { uz: '4-qadam: Kodni Arduino IDE orqali plataga yuklang.', ru: 'Шаг 4: Загрузите скетч через Arduino IDE.', en: 'Step 4: Flash the code via Arduino IDE over USB.' }
    ]
  },
  {
    id: 'distance-meter',
    title: {
      uz: '2. Masofa O‘lchagich (HC-SR04 Ultrasonic)',
      ru: '2. Ультразвуковой дальномер (HC-SR04)',
      en: '2. Ultrasonic Distance Meter'
    },
    difficulty: 'O‘rtacha',
    componentsNeeded: [
      { uz: 'Arduino Uno', ru: 'Arduino Uno', en: 'Arduino Uno' },
      { uz: 'HC-SR04 ultratovush sensori', ru: 'Ультразвуковой датчик HC-SR04', en: 'HC-SR04 ultrasonic sensor' },
      { uz: 'Pyezo Buzzer (tovush signali)', ru: 'Пьезо-зуммер (пищалка)', en: 'Piezo buzzer' },
      { uz: 'Simlar', ru: 'Провода', en: 'Jumper wires' }
    ],
    wiringDiagramDesc: {
      uz: 'VCC -> 5V, GND -> GND, Trig -> Pin 9, Echo -> Pin 10. Buzzer musbat oyog‘i Pin 8 ga, manfiy oyog‘i GND ga.',
      ru: 'VCC -> 5V, GND -> GND, Trig -> Pin 9, Echo -> Pin 10. Плюс зуммера -> Pin 8, минус -> GND.',
      en: 'VCC -> 5V, GND -> GND, Trig -> Pin 9, Echo -> Pin 10. Buzzer (+) -> Pin 8, (-) -> GND.'
    },
    code: `const int trigPin = 9;
const int echoPin = 10;
const int buzzerPin = 8;

void setup() {
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
  pinMode(buzzerPin, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  // Ultratovush impulsini yuborish
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);

  // Aks-sadoni qabul qilish va vaqtini hisoblash
  long duration = pulseIn(echoPin, HIGH);
  // Tovush tezligi bo'yicha masofa (sm)
  int distance = duration * 0.034 / 2;

  Serial.print("Masofa: ");
  Serial.print(distance);
  Serial.println(" sm");

  // Agar masofa 15 sm dan kam bo'lsa ogohlantirish signali
  if (distance < 15 && distance > 0) {
    digitalWrite(buzzerPin, HIGH);
  } else {
    digitalWrite(buzzerPin, LOW);
  }
  delay(100);
}`,
    workingPrinciple: {
      uz: 'Trig pini 10 mikrosekundlik ultratovush signali chiqaradi. Tovush to‘siqqa urilib qaytgach Echo pini signal oladi. Masofa = (Vaqt * 0.034 sm/mks) / 2 formulasi orqali topiladi.',
      ru: 'Датчик посылает звуковую волну и замеряет время эха. Расстояние рассчитывается по скорости звука в воздухе.',
      en: 'Measures time elapsed between triggering ultrasound pulse and receiving reflective echo via pulseIn().'
    },
    stepByStep: [
      { uz: '1-qadam: Sensorning 4 ta pinini (VCC, GND, Trig, Echo) aniqlang.', ru: 'Шаг 1: Найдите 4 контакта на модуле HC-SR04.', en: 'Step 1: Identify the four pins on HC-SR04.' },
      { uz: '2-qadam: Trig ni 9-pinga, Echo ni 10-pinga ulang.', ru: 'Шаг 2: Соедините Trig с Pin 9, Echo с Pin 10.', en: 'Step 2: Connect Trig to 9, Echo to 10.' },
      { uz: '3-qadam: Buzzer qo‘shib, Serial Monitor orqali santimetrlarni tekshiring.', ru: 'Шаг 3: Откройте монитор порта в IDE и наблюдайте дистанцию.', en: 'Step 3: Open Serial Monitor at 9600 baud to view real-time distance.' }
    ]
  },
  {
    id: 'motion-sensor',
    title: {
      uz: '3. Harakat Sensori (PIR Motion Detector)',
      ru: '3. Датчик движения (PIR Motion)',
      en: '3. PIR Motion Detection System'
    },
    difficulty: 'Oson',
    componentsNeeded: [
      { uz: 'Arduino Uno', ru: 'Arduino Uno', en: 'Arduino Uno' },
      { uz: 'HC-SR501 PIR harakat sensori', ru: 'PIR датчик HC-SR501', en: 'HC-SR501 PIR motion sensor' },
      { uz: 'LED va 220 Om rezistor', ru: 'LED и резистор', en: 'LED and 220 Ohm resistor' }
    ],
    wiringDiagramDesc: {
      uz: 'PIR VCC -> 5V, GND -> GND, OUT -> Pin 2. LED musbat -> Pin 13, manfiy -> GND.',
      ru: 'PIR VCC -> 5V, GND -> GND, OUT -> Pin 2. Светодиод -> Pin 13.',
      en: 'PIR VCC -> 5V, GND -> GND, OUT -> Pin 2. LED anode -> Pin 13, cathode -> GND.'
    },
    code: `const int pirPin = 2;
const int ledPin = 13;

void setup() {
  pinMode(pirPin, INPUT);
  pinMode(ledPin, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  int motion = digitalRead(pirPin);
  if (motion == HIGH) {
    digitalWrite(ledPin, HIGH);
    Serial.println("Harakat aniqlandi! Chiroq yoqildi.");
  } else {
    digitalWrite(ledPin, LOW);
  }
  delay(200);
}`,
    workingPrinciple: {
      uz: 'PIR sensori inson va hayvonlar tanasidan chiquvchi infraqizil (issiqlik) nurlanishining o‘zgarishini aniqlaydi va OUT piniga 1 (HIGH) uzatadi.',
      ru: 'Датчик PIR фиксирует изменения инфракрасного (теплового) излучения живых объектов.',
      en: 'Pyroelectric sensor detects shifts in ambient infrared thermal radiation caused by moving bodies.'
    },
    stepByStep: [
      { uz: '1-qadam: PIR sensoridagi sezgirlik potensiallarini sozlang.', ru: 'Шаг 1: Настройте чувствительность резисторами на плате PIR.', en: 'Step 1: Calibrate potentiometer sensitivity on the PIR PCB.' },
      { uz: '2-qadam: OUT pinini Arduino Pin 2 ga ulang.', ru: 'Шаг 2: Подключите OUT к Pin 2.', en: 'Step 2: Wire OUT pin to Arduino Pin 2.' },
      { uz: '3-qadam: Qo‘lingizni sensordan 2 metr narida qimirlatib tekshirib ko‘ring.', ru: 'Шаг 3: Протестируйте срабатывание взмахом руки.', en: 'Step 3: Test trigger response by waving your hand.' }
    ]
  },
  {
    id: 'water-sensor',
    title: {
      uz: '4. Suv Sathi Sensori (Water Level Detector)',
      ru: '4. Датчик уровня воды / протечки',
      en: '4. Water Level & Rain Detector'
    },
    difficulty: 'Oson',
    componentsNeeded: [
      { uz: 'Arduino Uno', ru: 'Arduino Uno', en: 'Arduino Uno' },
      { uz: 'Suv o‘tkazuvchanlik sensori (Water level module)', ru: 'Модуль датчика уровня воды', en: 'Water level sensor probe' },
      { uz: 'Buzzer yoki ogohlantiruvchi qizil LED', ru: 'Зуммер или красный LED', en: 'Buzzer or alert LED' }
    ],
    wiringDiagramDesc: {
      uz: 'Sensor (+) -> 5V, (-) -> GND, Signal (S) -> A0 (Analog pin). Buzzer -> Pin 7.',
      ru: 'Питание датчика (+) -> 5V, (-) -> GND, Сигнал (S) -> A0. Зуммер -> Pin 7.',
      en: 'Probe (+) -> 5V, (-) -> GND, Signal (S) -> Analog A0. Buzzer -> Pin 7.'
    },
    code: `const int sensorPin = A0;
const int alertPin = 7;

void setup() {
  pinMode(alertPin, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  int waterLevel = analogRead(sensorPin);
  Serial.print("Suv darajasi ko'rsatkichi: ");
  Serial.println(waterLevel);

  // Agar suv sezilsa (daraja 200 dan oshsa)
  if (waterLevel > 200) {
    digitalWrite(alertPin, HIGH);
    Serial.println("DIQQAT: Suv toshishi aniqlandi!");
  } else {
    digitalWrite(alertPin, LOW);
  }
  delay(500);
}`,
    workingPrinciple: {
      uz: 'Platadagi parallel mis yo‘llar suvga botganda, suv elektr tokini o‘tkazadi va sensorning qarshiligi kamayib, analog kuchlanish oshadi.',
      ru: 'Вода замыкает открытые дорожки платы, снижая сопротивление и повышая напряжение на аналоговом входе A0.',
      en: 'Conductive parallel PCB traces submerged in water decrease circuit resistance, increasing analog voltage on pin A0.'
    },
    stepByStep: [
      { uz: '1-qadam: Sensorni stakandagi suvga ozgina botiring.', ru: 'Шаг 1: Опустите край датчика в емкость с водой.', en: 'Step 1: Immerse the probe tip into a container of water.' },
      { uz: '2-qadam: Analog A0 ko‘rsatkichlarini Serial portda kuzating.', ru: 'Шаг 2: Смотрите динамику значений в мониторе порта.', en: 'Step 2: Observe varying 0-1023 ADC values on the serial monitor.' }
    ]
  },
  {
    id: 'temp-sensor',
    title: {
      uz: '5. Harorat O‘lchagich (DHT11 / LM35)',
      ru: '5. Измеритель температуры и влажности (DHT11)',
      en: '5. Temperature & Humidity Station'
    },
    difficulty: 'O‘rtacha',
    componentsNeeded: [
      { uz: 'Arduino Uno', ru: 'Arduino Uno', en: 'Arduino Uno' },
      { uz: 'DHT11 harorat va namlik sensori', ru: 'Датчик температуры DHT11', en: 'DHT11 sensor module' },
      { uz: '10 kOm rezistor', ru: 'Резистор 10 кОм', en: '10k Ohm pull-up resistor' }
    ],
    wiringDiagramDesc: {
      uz: 'DHT11 VCC -> 5V, GND -> GND, Data pin -> Arduino Digital Pin 2 (10k rezistor bilan 5V ga tortilgan).',
      ru: 'DHT11 VCC -> 5V, GND -> GND, Data -> Pin 2 с подтяжкой 10кОм к 5V.',
      en: 'DHT11 VCC -> 5V, GND -> GND, Data pin -> Digital Pin 2 pulled high via 10k resistor.'
    },
    code: `#include <DHT.h>

#define DHTPIN 2
#define DHTTYPE DHT11

DHT dht(DHTPIN, DHTTYPE);

void setup() {
  Serial.begin(9600);
  dht.begin();
  Serial.println("Harorat stansiyasi ishga tushdi.");
}

void loop() {
  delay(2000);
  float humidity = dht.readHumidity();
  float tempC = dht.readTemperature();

  if (isnan(humidity) || isnan(tempC)) {
    Serial.println("Sensordan o'qishda xatolik yuz berdi!");
    return;
  }

  Serial.print("Harorat: ");
  Serial.print(tempC);
  Serial.print(" °C | Namlik: ");
  Serial.print(humidity);
  Serial.println(" %");
}`,
    workingPrinciple: {
      uz: 'Termistor haroratga qarab qarshiligini o‘zgartiradi, ichki chip esa bu signalni raqamli 1-Wire protokoliga aylantirib yuboradi.',
      ru: 'Термистор меняет сопротивление от нагрева, встроенный чип конвертирует сигнал в цифровые данные.',
      en: 'An internal NTC thermistor and capacitive humidity sensor stream serialized packets over a 1-Wire interface.'
    },
    stepByStep: [
      { uz: '1-qadam: DHT kutubxonasini Arduino IDE ga o‘rnating.', ru: 'Шаг 1: Установите библиотеку DHT sensor library в IDE.', en: 'Step 1: Include the DHT sensor library in Arduino IDE.' },
      { uz: '2-qadam: Data pinini 2-raqamli pinga ulang va kodni yuklang.', ru: 'Шаг 2: Соедините Data с Pin 2 и прошейте плату.', en: 'Step 2: Connect Data to Pin 2 and upload the sketch.' }
    ]
  },
  {
    id: 'light-sensor',
    title: {
      uz: '6. Yorug‘lik Sensori (LDR Fotorezistor)',
      ru: '6. Автоматический ночник (Датчик освещенности LDR)',
      en: '6. LDR Ambient Light Sensor (Auto Nightlight)'
    },
    difficulty: 'Oson',
    componentsNeeded: [
      { uz: 'Arduino Uno', ru: 'Arduino Uno', en: 'Arduino Uno' },
      { uz: 'LDR fotorezistor', ru: 'Фоторезистор LDR', en: 'LDR photoresistor' },
      { uz: '10 kOm rezistor (kuchlanish bo‘luvchi)', ru: 'Резистор 10 кОм', en: '10k Ohm voltage divider resistor' },
      { uz: 'Oq LED chiroq', ru: 'Белый светодиод', en: 'White high-brightness LED' }
    ],
    wiringDiagramDesc: {
      uz: '5V -> LDR -> A0 va 10k rezistor orqali GND ga. LED musbat -> Pin 9 (PWM), manfiy -> GND.',
      ru: 'Делитель напряжения: 5V -> LDR -> Pin A0 -> Резистор 10к -> GND. LED на Pin 9.',
      en: 'Voltage divider: 5V -> LDR -> Pin A0 -> 10k resistor -> GND. LED anode on PWM Pin 9.'
    },
    code: `const int ldrPin = A0;
const int ledPin = 9;

void setup() {
  pinMode(ledPin, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  int lightValue = analogRead(ldrPin);
  Serial.print("Yorug'lik darajasi: ");
  Serial.println(lightValue);

  // Qorong'i bo'lganda (qiymat 400 dan pasaysa) avtomatik chiroq yonadi
  if (lightValue < 400) {
    digitalWrite(ledPin, HIGH);
  } else {
    digitalWrite(ledPin, LOW);
  }
  delay(100);
}`,
    workingPrinciple: {
      uz: 'Fotorezistorga tushayotgan fotonlar uning ichki yarimo‘tkazgich qarshiligini kamaytiradi. Qorong‘uda qarshilik megaomlarga yetadi.',
      ru: 'При падении света на фоторезистор его сопротивление падает, а в темноте резко возрастает.',
      en: 'Photons excite electrons across the semiconductor bandgap, dropping resistance as illumination rises.'
    },
    stepByStep: [
      { uz: '1-qadam: LDR va 10k rezistorni kuchlanish bo‘luvchi sxemada ulang.', ru: 'Шаг 1: Соберите делитель напряжения на макетке.', en: 'Step 1: Wire the LDR and 10k resistor in a voltage divider circuit.' },
      { uz: '2-qadam: Barmoq bilan LDR ustini yopib, avtomatik chiroq yoqilishini ko‘ring.', ru: 'Шаг 2: Закройте фоторезистор пальцем и проверьте включение LED.', en: 'Step 2: Shade the sensor with your finger to witness the auto nightlight trigger.' }
    ]
  },
  {
    id: 'gas-sensor',
    title: {
      uz: '7. Gaz va Tutun Sensori (MQ-2 Gas Detector)',
      ru: '7. Датчик утечки газа и дыма (MQ-2)',
      en: '7. Gas Leak & Smoke Alarm (MQ-2)'
    },
    difficulty: 'O‘rtacha',
    componentsNeeded: [
      { uz: 'Arduino Uno', ru: 'Arduino Uno', en: 'Arduino Uno' },
      { uz: 'MQ-2 gaz sensori', ru: 'Датчик газа и дыма MQ-2', en: 'MQ-2 gas & smoke sensor module' },
      { uz: 'Buzzer va qizil LED', ru: 'Зуммер и красный LED', en: 'Piezo buzzer & red alarm LED' }
    ],
    wiringDiagramDesc: {
      uz: 'MQ-2 VCC -> 5V, GND -> GND, AOUT -> Arduino Pin A1. Buzzer -> Pin 6.',
      ru: 'MQ-2 VCC -> 5V, GND -> GND, AOUT -> Pin A1. Зуммер -> Pin 6.',
      en: 'MQ-2 VCC -> 5V, GND -> GND, AOUT -> Analog Pin A1. Buzzer -> Pin 6.'
    },
    code: `const int gasPin = A1;
const int alarmBuzzer = 6;
const int alarmLed = 5;

void setup() {
  pinMode(alarmBuzzer, OUTPUT);
  pinMode(alarmLed, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  int gasValue = analogRead(gasPin);
  Serial.print("Gaz konsentratsiyasi: ");
  Serial.println(gasValue);

  // Xavfli chegara (masalan, 300)
  if (gasValue > 300) {
    digitalWrite(alarmBuzzer, HIGH);
    digitalWrite(alarmLed, HIGH);
    Serial.println("XAVF: Gaz sizib chiqishi yoki tutun!");
  } else {
    digitalWrite(alarmBuzzer, LOW);
    digitalWrite(alarmLed, LOW);
  }
  delay(300);
}`,
    workingPrinciple: {
      uz: 'MQ-2 ichidagi SnO2 (qalay dioksidi) qizitilganda havodagi yonuvchi gazlar bilan reaksiyaga kirishadi va o‘tkazuvchanligi oshadi.',
      ru: 'Нагретый слой диоксида олова SnO2 при контакте с газом или дымом резко повышает проводимость.',
      en: 'Internal heated tin dioxide (SnO2) sensing element adsorbs combustible gases, drastically increasing conductivity.'
    },
    stepByStep: [
      { uz: '1-qadam: MQ-2 sensorini ulab, qizishi uchun 1-2 daqiqa kuting.', ru: 'Шаг 1: Включите датчик и дайте ему прогреться 1-2 минуты.', en: 'Step 1: Power the MQ-2 module and allow 1-2 minutes of heater pre-warming.' },
      { uz: '2-qadam: Serial monitordan xona toza havo ko‘rsatkichini qayd qiling va chegarani belgilang.', ru: 'Шаг 2: Откалибруйте базовый уровень чистого воздуха.', en: 'Step 2: Note baseline clean-air readings to set your alarm threshold.' }
    ]
  }
];
