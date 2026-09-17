import { TestQuestion } from '../types';

export const quizQuestionsData: TestQuestion[] = [
  {
    id: 'q-cpu-role',
    category: 'Qurilmalar (Hardware)',
    question: {
      uz: 'CPU (Markaziy protsessor) nima asosiy vazifani bajaradi?',
      ru: 'Какую главную функцию выполняет CPU (Центральный процессор)?',
      en: 'What is the primary function performed by the CPU (Central Processing Unit)?'
    },
    options: [
      { uz: 'A) Faqat ekranga tasvir chiqaradi', ru: 'A) Выводит графику на экран', en: 'A) Renders graphics to display' },
      { uz: 'B) Hisoblash va buyruqlarni boshqarish', ru: 'B) Вычисления и управление командами', en: 'B) Computation and instruction control' },
      { uz: 'C) Wi-Fi internet tarqatadi', ru: 'C) Раздает Wi-Fi интернет', en: 'C) Broadcasts Wi-Fi internet' },
      { uz: 'D) Karnay orqali ovoz chiqaradi', ru: 'D) Воспроизводит звук через динамик', en: 'D) Emits audio through speakers' }
    ],
    correctIndex: 1,
    explanation: {
      uz: 'CPU kompyuterning miyasi hisoblanadi. U barcha arifmetik hisoblashlar va buyruqlarni nazorat qiladi.',
      ru: 'CPU — это мозг ПК. Он выполняет арифметические вычисления и управляет исполнением машинных команд.',
      en: 'The CPU is the central brain of the computer, executing calculations and coordinating software logic.'
    }
  },
  {
    id: 'q-ram-volatile',
    category: 'Qurilmalar (Hardware)',
    question: {
      uz: 'Kompyuter o‘chirilganda RAM (Operativ xotira)dagi ma’lumotlar nima bo‘ladi?',
      ru: 'Что происходит с данными в оперативной памяти (RAM) при выключении компьютера?',
      en: 'What happens to the data stored inside RAM when the computer powers off?'
    },
    options: [
      { uz: 'A) Doimiy saqlanib qoladi', ru: 'A) Сохраняются навсегда', en: 'A) Persists permanently' },
      { uz: 'B) Fleshkaga ko‘chiriladi', ru: 'B) Автоматически копируются на флешку', en: 'B) Automatically copies to flash drive' },
      { uz: 'C) Butunlay o‘chib ketadi', ru: 'C) Полностью стираются', en: 'C) Completely erases' },
      { uz: 'D) Bulutga yuklanadi', ru: 'D) Загружаются в облако', en: 'D) Uploads to the cloud' }
    ],
    correctIndex: 2,
    explanation: {
      uz: 'RAM o‘zgaruvchan (volatile) xotiradir. Tok uzilganda mikroskopik kondensatorlardagi elektr zaryadi yo‘qoladi va ma’lumot o‘chadi.',
      ru: 'RAM — энергозависимая память. Без электричества ячейки конденсаторов разряжаются, и данные стираются.',
      en: 'RAM is volatile memory; the moment electrical current is disconnected, all stored capacitor states dissipate.'
    }
  },
  {
    id: 'q-python-ai',
    category: 'Dasturlash (Programming)',
    question: {
      uz: 'Sun’iy intellekt va Machine Learning sohasida eng ko‘p qo‘llaniladigan dasturlash tili qaysi?',
      ru: 'Какой язык программирования наиболее популярен в сфере искусственного интеллекта и ML?',
      en: 'Which programming language is most widely adopted for Artificial Intelligence and Machine Learning?'
    },
    options: [
      { uz: 'A) Python', ru: 'A) Python', en: 'A) Python' },
      { uz: 'B) HTML', ru: 'B) HTML', en: 'B) HTML' },
      { uz: 'C) CSS', ru: 'C) CSS', en: 'C) CSS' },
      { uz: 'D) SQL', ru: 'D) SQL', en: 'D) SQL' }
    ],
    correctIndex: 0,
    explanation: {
      uz: 'Python sodda sintaksisi hamda PyTorch, TensorFlow va Scikit-learn kabi boy kutubxonalari tufayli AI sohasida 1-o‘rinda turadi.',
      ru: 'Python лидирует в AI благодаря библиотекам PyTorch, TensorFlow и простоте синтаксиса.',
      en: 'Python dominates AI and ML due to its intuitive syntax and powerful libraries like PyTorch and TensorFlow.'
    }
  },
  {
    id: 'q-arduino-ultrasonic',
    category: 'Robototexnika (Robotics)',
    question: {
      uz: 'Arduino loyihalarida HC-SR04 sensori nima maqsadda ishlatiladi?',
      ru: 'Для чего в проектах Arduino используется датчик HC-SR04?',
      en: 'What is the primary function of the HC-SR04 sensor in Arduino projects?'
    },
    options: [
      { uz: 'A) Xona haroratini o‘lchash', ru: 'A) Измерение температуры в комнате', en: 'A) Measuring ambient temperature' },
      { uz: 'B) To‘siqqacha bo‘lgan masofani aniqlash', ru: 'B) Определение расстояния до препятствия', en: 'B) Determining distance to obstacles' },
      { uz: 'C) Gaz sizib chiqishini aniqlash', ru: 'C) Детекция утечки газа', en: 'C) Detecting combustible gas leaks' },
      { uz: 'D) Havoning namligini tekshirish', ru: 'D) Замер влажности воздуха', en: 'D) Checking air humidity' }
    ],
    correctIndex: 1,
    explanation: {
      uz: 'HC-SR04 ultratovush signali yuborib, uning qaytish vaqtiga qarab to‘siqqacha masofani santimetrlarda aniqlaydi.',
      ru: 'HC-SR04 излучает ультразвуковой импульс и замеряет время его эха для расчета расстояния в см.',
      en: 'HC-SR04 emits an ultrasound ping and measures the reflection echo duration to compute range.'
    }
  },
  {
    id: 'q-https-security',
    category: 'Internet & Xavfsizlik',
    question: {
      uz: 'HTTPS protokolining oddiy HTTP dan asosiy ustunligi nimada?',
      ru: 'В чем главное преимущество протокола HTTPS перед обычным HTTP?',
      en: 'What is the primary advantage of the HTTPS protocol over standard HTTP?'
    },
    options: [
      { uz: 'A) Internet tezligini 10 barobarga oshiradi', ru: 'A) Увеличивает скорость интернета в 10 раз', en: 'A) Boosts internet speed by 10x' },
      { uz: 'B) Ma’lumotlarni shifrlab (SSL/TLS) xavfsiz uzatadi', ru: 'B) Шифрует данные (SSL/TLS) для безопасности', en: 'B) Encrypts data in transit via SSL/TLS encryption' },
      { uz: 'C) Saytdagi barcha reklamalarni o‘chiradi', ru: 'C) Автоматически блокирует всю рекламу', en: 'C) Automatically removes site advertising' },
      { uz: 'D) Faqat rasmlarni yuklash uchun xizmat qiladi', ru: 'D) Служит исключительно для картинок', en: 'D) Works exclusively for image assets' }
    ],
    correctIndex: 1,
    explanation: {
      uz: 'HTTPS ma’lumotlarni shifrlangan holda uzatadi, shuning uchun parollar va bank kartalari yo‘lda xakerlar tomonidan o‘g‘irlanmaydi.',
      ru: 'HTTPS шифрует трафик сертификатами безопасности, предотвращая перехват паролей и платежных карт.',
      en: 'HTTPS encrypts data exchanges via TLS, preventing adversaries from intercepting passwords and payment credentials.'
    }
  },
  {
    id: 'q-5g-speed',
    category: 'Texnologiyalar (Technologies)',
    question: {
      uz: '5G mobil aloqa tarmog‘ining asosiy xarakteristikalari qaysilar?',
      ru: 'Каковы ключевые характеристики технологии мобильной связи 5G?',
      en: 'What are the distinguishing characteristics of 5G cellular networks?'
    },
    options: [
      { uz: 'A) Faqat simli aloqa orqali ishlashi', ru: 'A) Работа исключительно по проводам', en: 'A) Operates exclusively via copper cables' },
      { uz: 'B) O‘ta yuqori gigabit tezlik va 1ms minimal kechikish', ru: 'B) Гигабитная скорость и минимальный пинг (~1 мс)', en: 'B) Ultra-high gigabit throughput and sub-millisecond ping' },
      { uz: 'C) Faqat kompyuterlar uchun mo‘ljallangani', ru: 'C) Предназначена только для ПК', en: 'C) Intended strictly for desktop PCs' },
      { uz: 'D) 2G tarmog‘idan ham sekinroq ishlashi', ru: 'D) Работает медленнее, чем 2G', en: 'D) Slower transfer rates than legacy 2G' }
    ],
    correctIndex: 1,
    explanation: {
      uz: '5G tarmog‘i 10-20 Gbit/s gacha tezlik va haydovchisiz transportlar uchun muhim bo‘lgan 1 millisekundlik kechikishni ta’minlaydi.',
      ru: 'Сети 5G обеспечивают гигабитный обмен данными и сверхнизкую задержку, необходимую для автопилотов.',
      en: '5G delivers peak multi-gigabit speeds and near-instant latency crucial for autonomous driving and telemedicine.'
    }
  },
  {
    id: 'q-phishing-define',
    category: 'Kiberxavfsizlik (Security)',
    question: {
      uz: 'Kiberxavfsizlikda "Phishing" (Fishing) xuruji nima degani?',
      ru: 'Что означает фишинг (Phishing) в сфере кибербезопасности?',
      en: 'What does a "Phishing" attack refer to in cybersecurity?'
    },
    options: [
      { uz: 'A) Kompyuter sovutish ventilyatorining tozalanishi', ru: 'A) Очистка кулера компьютера от пыли', en: 'A) Cleaning dust from computer heatsinks' },
      { uz: 'B) Yangi o‘yin o‘rnatish jarayoni', ru: 'B) Процесс установки новой видеоигры', en: 'B) Installing a new computer game' },
      { uz: 'C) Soxta saytlar orqali parollarni aldamchilik bilan o‘g‘irlash', ru: 'C) Выманивание паролей через поддельные сайты-клоны', en: 'C) Tricking victims into submitting credentials via clone sites' },
      { uz: 'D) Operativ xotirani kuchaytirish', ru: 'D) Апгрейд оперативной памяти', en: 'D) Upgrading system memory chips' }
    ],
    correctIndex: 2,
    explanation: {
      uz: 'Fishing - bu firibgarlar haqiqiy bank yoki pochta saytiga o‘xshatib soxta sahifa ochib, siz kiritgan parol va kodlarni o‘g‘irlash usuli.',
      ru: 'Фишинг — это социальная инженерия, создающая поддельные формы входа для перехвата паролей пользователей.',
      en: 'Phishing is social engineering using lookalike portals to harvest authentication credentials and banking details.'
    }
  },
  {
    id: 'q-dns-purpose',
    category: 'Internet',
    question: {
      uz: 'DNS (Domain Name System) tizimi nima vazifani bajaradi?',
      ru: 'Какую задачу выполняет система доменных имен DNS?',
      en: 'What is the primary role of the Domain Name System (DNS)?'
    },
    options: [
      { uz: 'A) Sayt nomlarini (google.com) raqamli IP manzilga aylantiradi', ru: 'A) Преобразует имена сайтов в числовые IP-адреса', en: 'A) Translates domain names into numeric IP addresses' },
      { uz: 'B) Kompyuterdagi viruslarni tozalaydi', ru: 'B) Очищает жесткий диск от вирусов', en: 'B) Cleans malware from the storage drive' },
      { uz: 'C) Elektr quvvatini taqsimlaydi', ru: 'C) Распределяет электроэнергию в розетках', en: 'C) Distributes electrical currents in circuits' },
      { uz: 'D) Ovoz yozish uchun xizmat qiladi', ru: 'D) Служит для записи звука с микрофона', en: 'D) Serves as a sound recording driver' }
    ],
    correctIndex: 0,
    explanation: {
      uz: 'DNS internetning telefon kitobidir. Insonlar sonli IP larni eslab qolmasligi uchun so‘zli domenlarni raqamli IP ga tarjima qiladi.',
      ru: 'DNS как телефонный справочник связывает понятные человеку доменные имена с серверами по их IP.',
      en: 'DNS functions as the internet’s phone directory, resolving human-readable domain names into IP addresses.'
    }
  },
  {
    id: 'q-genai-definition',
    category: 'Sun’iy Intellekt (AI)',
    question: {
      uz: 'Generativ Sun’iy Intellekt (Generative AI)ning an’anaviy algoritmlardan asosiy farqi nima?',
      ru: 'В чем главное отличие Генеративного ИИ от традиционных алгоритмов?',
      en: 'What distinguishes Generative AI from conventional classification algorithms?'
    },
    options: [
      { uz: 'A) Faqat internet o‘chirilganda ishlaydi', ru: 'A) Работает только без подключения к сети', en: 'A) Operates exclusively when internet is disconnected' },
      { uz: 'B) Mutlaqo yangi matnlar, rasmlar va kodlarni o‘zi yarata oladi', ru: 'B) Создает абсолютно новый контент (текст, код, арты)', en: 'B) Synthesizes completely novel content (text, code, images)' },
      { uz: 'C) Faqat kalkulyatordek raqamlarni qo‘shadi', ru: 'C) Умеет только складывать числа как калькулятор', en: 'C) Only adds numbers together like a basic calculator' },
      { uz: 'D) Kompyuter ekranini o‘chirib qo‘yadi', ru: 'D) Гасит подсветку экрана компьютера', en: 'D) Turns off the computer monitor display' }
    ],
    correctIndex: 1,
    explanation: {
      uz: 'Generativ AI shunchaki tahlil qilish bilan cheklanmay, yangi original matn, san’at asari va dasturiy ta’minot yaratadi.',
      ru: 'Генеративный ИИ не просто распознает образы, а синтезирует принципиально новые тексты, изображения и музыку.',
      en: 'Generative models create novel outputs by modeling probability distributions of text, pixels, and code.'
    }
  },
  {
    id: 'q-blockchain-immutability',
    category: 'Texnologiyalar (Technologies)',
    question: {
      uz: 'Blockchain texnologiyasida ma’lumotlarni nega o‘zgartirib yoki o‘chirib bo‘lmaydi?',
      ru: 'Почему данные в технологии блокчейн невозможно тайно изменить или удалить?',
      en: 'Why is data stored on a blockchain immutable and virtually tamper-proof?'
    },
    options: [
      { uz: 'A) Chunki kompyuterlarning sichqonchasi o‘chirilgan bo‘ladi', ru: 'A) Потому что отключены клавиатуры и мыши', en: 'A) Because keyboards and mice are disconnected' },
      { uz: 'B) Har bir blok oldingisining xesh-kodiga kriptografik bog‘langan', ru: 'B) Каждый блок криптографически связан с хешем предыдущего', en: 'B) Every block is cryptographically linked to the previous hash' },
      { uz: 'C) Ular qog‘ozga qalam bilan yozib qo‘yiladi', ru: 'C) Они записаны на бумаге карандашом', en: 'C) They are written on physical paper with ink' },
      { uz: 'D) Blokcheynda internet ishlamaydi', ru: 'D) В блокчейне отсутствует интернет', en: 'D) Blockchains do not utilize network protocols' }
    ],
    correctIndex: 1,
    explanation: {
      uz: 'Har bir blok oldingi blokning kriptografik xeshini o‘zida saqlaydi. Bittasini o‘zgartirish butun zanjirni buzadi va konsensus buni rad etadi.',
      ru: 'Каждый блок включает хеш предыдущего. Любое изменение ломает цепочку и отвергается распределенной сетью.',
      en: 'Cryptographic hash chains ensure that modifying any historical block invalidates all downstream blocks.'
    }
  }
];
