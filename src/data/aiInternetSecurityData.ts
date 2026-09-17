import { AITopic, InternetTopic, SecurityTopic } from '../types';

export const aiTopicsData: AITopic[] = [
  {
    id: 'ai-intro',
    title: { uz: 'Sun’iy intellekt nima?', ru: 'Что такое искусственный интеллект?', en: 'What is Artificial Intelligence?' },
    icon: 'Brain',
    badge: 'AI Asosi',
    shortDesc: {
      uz: 'Inson miyasi kabi fikrlash, tahlil qilish, o‘rganish va mustaqil xulosa chiqarishga qodir kompyuter tizimlari fan sohasi.',
      ru: 'Область науки о создании интеллектуальных машин, способных мыслить, учиться и решать задачи подобно человеку.',
      en: 'The science of building computational systems that emulate human cognition, reasoning, learning, and decision-making.'
    },
    simpleExplanation: {
      uz: 'Agar oddiy dastur faqat qat’iy qoidalar bo‘yicha ishlasa, sun’iy intellekt xuddi inson bolasidek tajriba va xatolaridan saboq olib o‘rganadi.',
      ru: 'Обычная программа жестко следует коду, а искусственный интеллект обучается на миллионах примеров как человек.',
      en: 'Unlike traditional rigid algorithms, AI systems learn continuously by analyzing patterns and making probabilistic inferences.'
    },
    examples: [
      { uz: 'Shaxmatda chempionlarni yenggan AlphaZero', ru: 'Побеждающий гроссмейстеров AlphaZero', en: 'AlphaZero defeating world grandmasters' },
      { uz: 'Smartfonlardagi Siri va Google Assistant', ru: 'Голосовые ассистенты Siri и Google', en: 'Voice assistants like Siri and Google Assistant' }
    ],
    realWorldImpact: {
      uz: 'Shifokorlarga rentgen suratlarida saratonni erta aniqlashda, yo‘llarda tiqilinchlarni kamaytirishda va yangi dori moddalarini yaratishda yordam bermoqda.',
      ru: 'Ранняя диагностика заболеваний по снимкам, оптимизация трафика и разработка новых лекарств.',
      en: 'Early cancer diagnosis from medical scans, citywide traffic optimization, and molecular pharmaceutical drug discovery.'
    }
  },
  {
    id: 'machine-learning',
    title: { uz: 'Machine Learning (Mashinali o‘rganish)', ru: 'Машинное обучение (Machine Learning)', en: 'Machine Learning (ML)' },
    icon: 'Cpu',
    badge: 'O‘rganish',
    shortDesc: {
      uz: 'Kompyuterga to‘g‘ridan-to‘g‘ri kod yozmasdan, unga katta ma’lumotlar berib o‘rgatish usuli.',
      ru: 'Метод обучения компьютеров на примерах данных без явного ручного программирования каждого правила.',
      en: 'Algorithms that automatically improve their performance through experience and exposure to vast datasets.'
    },
    simpleExplanation: {
      uz: 'Tasavvur qiling, bolaga 10 000 ta mushuk va it rasmini ko‘rsatib: "Bu mushuk, bu esa it" deb o‘rgatasiz. Keyin u yangi ko‘rgan hayvonini o‘zi taniy oladi.',
      ru: 'Как ребенок различает кошек и собак после просмотра тысячи картинок, так и алгоритм находит скрытые закономерности.',
      en: 'Training a model on labeled images until it generalizes characteristics to classify novel unseen inputs accurately.'
    },
    examples: [
      { uz: 'YouTube va Spotify’dagi tavsiya tizimlari', ru: 'Рекомендации в YouTube и Spotify', en: 'Recommendation engines on YouTube and Spotify' },
      { uz: 'Banklardagi firibgarlikni aniqlash tizimlari', ru: 'Выявление подозрительных транзакций в банках', en: 'Real-time banking fraud detection filters' }
    ],
    realWorldImpact: {
      uz: 'Har kuni millionlab odamlarga o‘zlari qiziqqan kontentni topishga va kredit arizalarini soniyalarda ko‘rib chiqishga xizmat qiladi.',
      ru: 'Автоматический подбор музыки, видео и молниеносная выдача кредитных решений.',
      en: 'Curating personalized media feeds and performing split-second risk assessments in finance.'
    }
  },
  {
    id: 'deep-learning',
    title: { uz: 'Deep Learning (Chuqur o‘rganish)', ru: 'Глубокое обучение (Deep Learning)', en: 'Deep Learning' },
    icon: 'Layers',
    badge: 'Chuqur Qatlamlar',
    shortDesc: {
      uz: 'O‘nlab yoki yuzlab neyron qatlamlaridan tashkil topgan ko‘p pog‘onali murakkab neyron tarmoqlar.',
      ru: 'Подраздел машинного обучения на основе многослойных глубоких искусственных нейросетей.',
      en: 'A subset of ML based on artificial neural networks with representation learning across dozens of hidden layers.'
    },
    simpleExplanation: {
      uz: 'Birinchi qatlam rasmning chiziqlarini, ikkinchisi shakllarini, uchinchisi ko‘z va burunni, oxirgi qatlam esa to‘liq inson yuzini taniydi.',
      ru: 'Первые слои сети видят простые линии и точки, а глубокие слои собирают их в лица, силуэты и объекты.',
      en: 'Hierarchical abstractions: shallow layers detect raw edges, while deeper layers assemble holistic semantic concepts.'
    },
    examples: [
      { uz: 'Haydovchisiz Tesla mashinalarining ko‘rish tizimi', ru: 'Автопилот Tesla и распознавание дорожной обстановки', en: 'Tesla Full Self-Driving neural perception networks' },
      { uz: 'Nutqni real vaqtda matnga aylantiruvchi Whisper AI', ru: 'Распознавание речи на лету Whisper AI', en: 'Whisper AI real-time speech transcription' }
    ],
    realWorldImpact: {
      uz: 'Avtomobillarni avtopilot rejimida xavfsiz boshqarish imkonini yaratmoqda.',
      ru: 'Создает безопасный полностью автономный беспилотный транспорт будущего.',
      en: 'Empowering Level 4/5 autonomous vehicles and superhuman sensory perception.'
    }
  },
  {
    id: 'neural-networks',
    title: { uz: 'Neural Network (Neyron Tarmoqlar)', ru: 'Искусственные нейросети', en: 'Artificial Neural Networks' },
    icon: 'Network',
    badge: 'Biologik Model',
    shortDesc: {
      uz: 'Inson miyasidagi biologik neyronlar va sinapslar ishlash prinsipiga asoslangan matematik arxitektura.',
      ru: 'Математическая модель, имитирующая синапсы и нейроны биологического головного мозга.',
      en: 'Mathematical models composed of interconnected processing nodes inspired by biological synapses.'
    },
    simpleExplanation: {
      uz: 'Har bir sun’iy neyron signallarni qabul qiladi, ularni o‘z og‘irligiga (weight) ko‘paytiradi va aktivatsiya funksiyasi orqali keyingi neyronga uzatadi.',
      ru: 'Входные сигналы умножаются на числовые веса связей и через функции активации передаются дальше.',
      en: 'Artificial neurons sum weighted inputs, apply a non-linear activation function, and propagate signals forward.'
    },
    examples: [
      { uz: 'CNN (Konvolyutsion neyron to‘ri) - rasmlar uchun', ru: 'CNN сети для работы с изображениями', en: 'Convolutional Neural Networks (CNN) for imagery' },
      { uz: 'Transformer arxitekturasi - tillar va matnlar uchun', ru: 'Архитектура Transformer для языков', en: 'Transformer architectures for language understanding' }
    ],
    realWorldImpact: {
      uz: 'Zamonaviy ChatGPT, Gemini va Claude kabi barcha qudratli modellar Transformer neyron tarmog‘iga asoslangan.',
      ru: 'Фундамент всех языковых моделей (LLM), изменивших мир за последние годы.',
      en: 'The architectural backbone underpinning frontier LLMs and diffusion models worldwide.'
    }
  },
  {
    id: 'computer-vision',
    title: { uz: 'Computer Vision (Kompyuter Ko‘rish)', ru: 'Компьютерное зрение (Computer Vision)', en: 'Computer Vision' },
    icon: 'Eye',
    badge: 'Vizual AI',
    shortDesc: {
      uz: 'Kompyuter va kameralarga dunyoni inson kabi ko‘rish, obyektlarni ajratish va tushunish qobiliyatini beruvchi AI sohasi.',
      ru: 'Способность компьютеров извлекать информацию из цифровых фотографий и видеопотоков.',
      en: 'Enabling machines to perceive, analyze, segment, and understand digital images and high-frame video.'
    },
    simpleExplanation: {
      uz: 'Kompyuter uchun rasm bu shunchaki sonlar matritsasi. Kompyuter ko‘rish texnologiyasi bu sonlar orasidan odam, avtomobil yoki mushukni ajratib oladi.',
      ru: 'Пиксели фотографии декодируются алгоритмами в четкие координаты людей, препятствий и номеров машин.',
      en: 'Converts raw numeric pixel matrices into semantic bounding boxes, masks, and environmental context.'
    },
    examples: [
      { uz: 'Smartfonda Face ID bilan yuz orqali qulfni ochish', ru: 'Разблокировка смартфона лицом Face ID', en: 'Biometric Face ID authentication on smartphones' },
      { uz: 'Yo‘l kameralarida davlat raqamlarini avtomatik o‘qish', ru: 'Фиксация номеров машин камерами ГАИ', en: 'Automated License Plate Recognition (ALPR)' }
    ],
    realWorldImpact: {
      uz: 'Aeroportlarda pasport tekshiruvini tezlashtiradi va qidiruvdagi jinoyatchilarni topishda yordam beradi.',
      ru: 'Обеспечение безопасности на вокзалах, в метро и автоматический контроль багажа.',
      en: 'Automated border control e-gates and automated industrial defect inspection.'
    }
  },
  {
    id: 'nlp',
    title: { uz: 'Natural Language Processing (NLP)', ru: 'Обработка естественного языка (NLP)', en: 'Natural Language Processing (NLP)' },
    icon: 'MessageSquare',
    badge: 'Til & Nutq',
    shortDesc: {
      uz: 'Kompyuterga inson gapiradigan va yozadigan tabiiy tillarni (o‘zbek, ingliz, rus) tushunish va javob berishni o‘rgatish.',
      ru: 'Технологии анализа, понимания и генерации человеческой речи и письменного текста.',
      en: 'Enabling computers to parse, comprehend, translate, and synthesize human natural languages.'
    },
    simpleExplanation: {
      uz: 'Matnni mayda so‘zlarga (token) bo‘lib, ularning bir-biriga bog‘liqligi va kontekstini grammatik va semantik jihatdan tahlil qiladi.',
      ru: 'Разбивает фразы на токены, анализирует контекст и улавливает тончайшие смысловые оттенки.',
      en: 'Tokenizes sentences into vectors, interpreting grammatical dependencies and contextual semantics.'
    },
    examples: [
      { uz: 'Google Translate va DeepL tarjima tizimlari', ru: 'Онлайн-переводчики Google Translate и DeepL', en: 'Google Translate and DeepL translation services' },
      { uz: 'Spam xatlarni aniqlovchi pochtadagi aqlli filtrlar', ru: 'Антиспам-фильтры почтовых ящиков', en: 'Intelligent email spam filtering and summarization' }
    ],
    realWorldImpact: {
      uz: 'Dunyo xalqlari orasidagi til to‘sig‘ini yo‘qotib, har kim o‘z ona tilida xohlagan ma’lumotni olishiga imkon beradi.',
      ru: 'Стирает языковые барьеры между людьми по всему миру в реальном времени.',
      en: 'Eliminating cross-cultural language barriers through instantaneous high-fidelity translation.'
    }
  },
  {
    id: 'generative-ai',
    title: { uz: 'Generative AI (Generativ AI)', ru: 'Генеративный ИИ (Generative AI)', en: 'Generative AI' },
    icon: 'Sparkles',
    badge: 'Ijodiy AI',
    shortDesc: {
      uz: 'Faqat ma’lumotni tahlil qilibgina qolmay, mutlaqo yangi matnlar, rasmlar, musiqalar va dasturiy kodlarni yaratuvchi inqilobiy intellekt.',
      ru: 'ИИ, способный генерировать абсолютно новый оригинальный контент: тексты, код, арт и музыку.',
      en: 'Artificial intelligence capable of creating novel text, code, photorealistic artwork, and audio.'
    },
    simpleExplanation: {
      uz: 'Milyardlab kitob va suratlarni o‘rgangach, siz bergan birgina taklif (prompt) asosida yangi she’r, hikoya yoki dizayn chizib beradi.',
      ru: 'На основе короткого текстового описания (промпта) за секунды создает готовые проекты и решения.',
      en: 'Synthesizes contextually accurate essays, software scripts, or illustrations from short user prompts.'
    },
    examples: [
      { uz: 'GPT-4, Gemini, Claude, Llama', ru: 'Модели GPT-4, Gemini, Claude', en: 'State-of-the-art models: Gemini, Claude, GPT-4' },
      { uz: 'Dasturchilarga kod yozishda ko‘maklashuvchi Copilot', ru: 'GitHub Copilot для ускорения кодинга', en: 'GitHub Copilot coding assistant' }
    ],
    realWorldImpact: {
      uz: 'Dasturchilar, mualliflar, dizaynerlar va o‘quvchilarning ish unumdorligini 5-10 barobarga oshirmoqda.',
      ru: 'Повышает продуктивность разработчиков и творческих специалистов в разы.',
      en: 'Accelerating human creative productivity, research synthesis, and rapid software engineering.'
    }
  },
  {
    id: 'ai-chatbots',
    title: { uz: 'AI Chatbotlar', ru: 'Диалоговые AI-чатботы', en: 'AI Conversational Chatbots' },
    icon: 'Bot',
    badge: 'Muloqot',
    shortDesc: {
      uz: 'Inson bilan jonli suhbatdek erkin muloqot qiluvchi, savollarga javob beruvchi va maslahat taqdim etuvchi aqlli dasturlar.',
      ru: 'Программы для ведения связного осмысленного диалога с пользователем на любую тему.',
      en: 'Conversational conversational agents answering queries, offering tutoring, and solving problems.'
    },
    simpleExplanation: {
      uz: 'Oldingi oddiy botlar faqat "1 ni bosing, 2 ni bosing" der edi. Zamonaviy AI chatbotlar esa ixtiyoriy jumlani tushunadi va mulohaza yuritadi.',
      ru: 'В отличие от кнопочных ботов, понимают сложные живые вопросы и помнят контекст беседы.',
      en: 'Maintains conversational memory and nuance, unlike legacy static decision-tree customer support bots.'
    },
    examples: [
      { uz: 'ChatGPT, Google Gemini, Perplexity', ru: 'ChatGPT, Google Gemini, Perplexity', en: 'Google Gemini, ChatGPT, Perplexity AI' },
      { uz: 'Kompaniyalarning 24/7 ishlovchi aqlli yordamchilari', ru: 'Круглосуточная интеллектуальная техподдержка', en: '24/7 omni-channel automated customer support agents' }
    ],
    realWorldImpact: {
      uz: 'Ta’limda har bir o‘quvchiga shaxsiy 24/7 repetitor bo‘lib xizmat qiladi.',
      ru: 'Персональный круглосуточный репетитор и ассистент в учебе для каждого школьника и студента.',
      en: 'Democratizing personalized round-the-clock interactive tutoring for students globally.'
    }
  },
  {
    id: 'ai-image-gen',
    title: { uz: 'AI Image Generation (Rasm generatsiyasi)', ru: 'Генерация изображений с помощью ИИ', en: 'AI Image Generation' },
    icon: 'Image',
    badge: 'Vizual San’at',
    shortDesc: {
      uz: 'Oddiy matnli tavsif (prompt) asosida bir necha soniyada fotorealistik suratlar, illyustratsiyalar va logotiplar chizuvchi modellar.',
      ru: 'Создание фотореалистичных артов и концептов по текстовому описанию за секунды.',
      en: 'Diffusion algorithms turning descriptive textual prompts into high-resolution photorealistic imagery.'
    },
    simpleExplanation: {
      uz: 'Diffuziya modeli: avval tasodifiy nuqtalar shovqinidan (noise) boshlaydi va uni asta-sekin matnga mos tiniq suratga aylantiradi.',
      ru: 'Диффузионная сеть берет случайный цифровой шум и пошагово проявляет из него задуманное полотно.',
      en: 'Iterative denoising: latent diffusion models refine pure Gaussian noise into crisp detailed art.'
    },
    examples: [
      { uz: 'Midjourney, DALL-E 3, Stable Diffusion, Imagen', ru: 'Midjourney, DALL-E 3, Stable Diffusion', en: 'Midjourney, Stable Diffusion, DALL-E 3, Google Imagen' },
      { uz: 'Reklama bannerlari va o‘yin konsept-artlari', ru: 'Рекламные материалы и игровые концепт-арты', en: 'Marketing graphics, concept art, and architectural renders' }
    ],
    realWorldImpact: {
      uz: 'Kino, reklama va o‘yin sanoatida dizayn jarayonini bir necha oylik vaqtdan bir necha daqiqaga qisqartirdi.',
      ru: 'Сокращение времени создания визуального контента с недель до минут.',
      en: 'Slashing visual asset conceptualization from months to seconds for indie creators and studios.'
    }
  },
  {
    id: 'ai-video-gen',
    title: { uz: 'AI Video Generation (Video yaratish)', ru: 'Генерация видео с помощью ИИ', en: 'AI Video Generation' },
    icon: 'Video',
    badge: 'Kelajak Mediasi',
    shortDesc: {
      uz: 'Matn yoki bitta surat asosida kinematografik sifatdagi harakatlanuvchi videolarni generatsiya qiluvchi ilg‘or modellar.',
      ru: 'Синтез кинематографических видеороликов по текстовому описанию или статичному кадру.',
      en: 'Synthesizing coherent temporal video sequences with physical realism directly from prompts.'
    },
    simpleExplanation: {
      uz: 'Model nafaqat bitta kadrni, balki fizik qonuniyatlar (tortishish kuchi, suv harakati, yorug‘lik akslanishi)ni vaqt bo‘yicha ketma-ket hisoblaydi.',
      ru: 'Модель просчитывает законы физики, освещение и траектории движения объектов кадр за кадром.',
      en: 'Generates consistent spatiotemporal keyframes obeying physics, reflections, and camera trajectories.'
    },
    examples: [
      { uz: 'Sora (OpenAI), Veo (Google DeepMind), Runway Gen-3', ru: 'OpenAI Sora, Google Veo, Runway Gen-3', en: 'Google Veo, OpenAI Sora, Runway Gen-3, Kling' },
      { uz: 'Kino montaji va maxsus vizual effektlar (VFX)', ru: 'Визуальные киноэффекты и спецэффекты VFX', en: 'Virtual movie production and rapid visual effects rendering' }
    ],
    realWorldImpact: {
      uz: 'Kelajakda har bir inson o‘z xonasida o‘tirib to‘liq metrajli kino suratga olish imkoniga ega bo‘ladi.',
      ru: 'В будущем позволит любому человеку режиссировать кинофильмы прямо дома.',
      en: 'Paving the way for personalized Hollywood-caliber filmmaking produced by single creators.'
    }
  }
];

export const internetTopicsData: InternetTopic[] = [
  {
    id: 'what-is-internet',
    title: 'Internet nima?',
    icon: 'Globe',
    desc: {
      uz: 'Butun dunyo bo‘ylab milliardlab kompyuterlar, serverlar va telefonlarni yagona protokollar asosida birlashtirgan global tarmoq.',
      ru: 'Всемирная глобальная сеть, соединяющая миллиарды компьютеров и устройств по единым правилам.',
      en: 'A global network of interconnected computer networks utilizing standardized TCP/IP communication protocols.'
    },
    howItWorks: {
      uz: 'Ma’lumotlar mayda paketlarga bo‘linadi, yer osti va okean tubidagi optik tolali kabellar orqali yorug‘lik tezligida kerakli manzilga yetkaziladi.',
      ru: 'Данные дробятся на пакеты и со скоростью света несутся по оптоволокну на дне океанов.',
      en: 'Data splits into small packets routed across undersea fiber-optic cables at near light speed.'
    },
    keyRole: {
      uz: 'Global axborot almashish, iqtisodiyot va insoniyat muloqotining markaziy qon tomiri.',
      ru: 'Основа мировой экономики, коммуникаций и свободного доступа к знаниям.',
      en: 'The digital backbone of global commerce, communications, and knowledge sharing.'
    },
    funFact: {
      uz: 'Dunyo internet trafigining 98% dan ortig‘i sun’iy yo‘ldoshlar emas, okean tubiga yotqizilgan ulkan optik kabellar orqali o‘tadi!',
      ru: 'Более 98% всего мирового интернет-трафика идет по подводным кабелям на дне океана, а не через спутники!',
      en: 'Over 98% of international internet traffic flows through submerged undersea fiber cables, not satellites!'
    }
  },
  {
    id: 'wifi-topic',
    title: 'Wi-Fi',
    icon: 'Wifi',
    desc: {
      uz: 'Radioto‘lqinlar yordamida qurilmalarni simsiz tarzda internetga ulovchi texnologiya (IEEE 802.11).',
      ru: 'Беспроводная технология связи устройств с роутером посредством радиоволн.',
      en: 'Local wireless technology allowing devices to interconnect and reach the internet via radio waves.'
    },
    howItWorks: {
      uz: '2.4 GGs, 5 GGs yoki 6 GGs chastotali radio to‘lqinlar raqamli bitlarni modulyatsiya qilib havo orqali uzatadi.',
      ru: 'Модуляция радиосигналов на частотах 2.4, 5 и 6 ГГц передает байты информации по воздуху.',
      en: 'Modulates high-frequency electromagnetic radio signals across 2.4, 5, and 6 GHz spectrum bands.'
    },
    keyRole: {
      uz: 'Har bir uy, maktab va ofisda kabellarsiz mobil erkinlikni ta’minlash.',
      ru: 'Удобный доступ в сеть без проводов для ноутбуков, телевизоров и смартфонов.',
      en: 'Providing seamless untethered connectivity throughout homes, campuses, and workplaces.'
    },
    funFact: {
      uz: 'Wi-Fi so‘zi hech qanday qisqartma emas, u shunchaki Hi-Fi so‘ziga ohangdosh marketing brendi sifatida o‘ylab topilgan!',
      ru: 'Слово Wi-Fi ничего не расшифровывает, это просто благозвучная игра слов с Hi-Fi!',
      en: 'The term "Wi-Fi" is not an acronym for anything; it was created as a catchy consumer rhyming pun on "Hi-Fi"!'
    }
  },
  {
    id: 'router',
    title: 'Router (Marshrutizator)',
    icon: 'Router',
    desc: {
      uz: 'Turli tarmoqlar o‘rtasida axborot paketlarining eng maqbul va tezkor yo‘lini belgilab beruvchi maxsus tarmoq qurilmasi.',
      ru: 'Сетевое устройство, определяющее оптимальный маршрут передачи пакетов между сетями.',
      en: 'A networking hardware device directing data packets between local networks and the broader internet.'
    },
    howItWorks: {
      uz: 'Har bir paketning sarlavhasidagi IP manzilni o‘qiydi, marshrutlash jadvaliga (Routing Table) qarab paketni to‘g‘ri portga yo‘naltiradi.',
      ru: 'Анализирует IP-адрес назначения в заголовке пакета и направляет его по таблице маршрутизации.',
      en: 'Inspects packet destination headers and consults internal routing tables to forward traffic through the fastest hop.'
    },
    keyRole: {
      uz: 'Uy tarmog‘idagi bir nechta qurilmalarni bitta provayder liniyasiga ulash (NAT) va xavfsizlik devori (Firewall) vazifasi.',
      ru: 'Раздача интернета десяткам домашних гаджетов и базовая защита от атак извне.',
      en: 'Facilitating Network Address Translation (NAT) and serving as the first line of defense.'
    },
    funFact: {
      uz: 'Global internetning asosiy magistral routerlari soniyasiga terabaytlab ma’lumotlarni uzata oladi!',
      ru: 'Магистральные провайдерские роутеры обрабатывают десятки терабит трафика каждую секунду!',
      en: 'Core internet backbone routers process tens of terabits of routing traffic every single second!'
    }
  },
  {
    id: 'server',
    title: 'Server',
    icon: 'Server',
    desc: {
      uz: '24/7 o‘chmasdan ishlovchi, foydalanuvchilarning so‘rovlariga javob beruvchi va saytlar, ma’lumotlarni saqlovchi qudratli kompyuter.',
      ru: 'Мощный надежный компьютер, непрерывно обслуживающий запросы пользователей сети.',
      en: 'A dedicated, high-availability host computer serving requests, hosting applications, and storing databases.'
    },
    howItWorks: {
      uz: 'Mijoz (Client - sizning telefoningiz) so‘rov yuboradi, server bu so‘rovni qabul qilib, bazadan kerakli ma’lumotni oladi va javob qaytaradi.',
      ru: 'Работает по модели «клиент-сервер», обрабатывая HTTP/TCP запросы тысяч клиентов одновременно.',
      en: 'Implements the client-server paradigm, listening on open network ports to fulfill concurrent client requests.'
    },
    keyRole: {
      uz: 'Instagram, Telegram, YouTube va barcha onlayn platformalarning yuragi.',
      ru: 'Обеспечивает доступность онлайн-сервисов, баз данных и веб-сайтов круглые сутки.',
      en: 'Housing the logic and data pipelines that keep modern digital services operational around the clock.'
    },
    funFact: {
      uz: 'Google kompaniyasi butun dunyo bo‘ylab 2.5 milliondan ortiq serverlarga egalik qiladi!',
      ru: 'Корпорация Google обслуживает более 2,5 миллионов серверов по всей планете!',
      en: 'Google operates more than 2.5 million servers across interconnected global datacenters!'
    }
  },
  {
    id: 'website',
    title: 'Website (Veb-sayt)',
    icon: 'Layout',
    desc: {
      uz: 'Internetda umumiy manzil (domen) ostida birlashgan, foydalanuvchi ko‘rishi mumkin bo‘lgan raqamli sahifalar to‘plami.',
      ru: 'Совокупность веб-страниц, объединенных общим доменным именем и темой.',
      en: 'A collection of publicly accessible, interlinked web pages sharing a single domain name.'
    },
    howItWorks: {
      uz: 'HTML (tuzilish), CSS (dizayn) va JavaScript (harakat) fayllaridan tashkil topib, serverdan brauzerga yuklanadi.',
      ru: 'Состоит из кода HTML, файлов стилей CSS и скриптов JS, визуализируемых браузером.',
      en: 'Composed of HTML semantic trees, CSS stylesheets, and JavaScript runtime modules parsed on demand.'
    },
    keyRole: {
      uz: 'Kompaniyalar, ta’lim muassasalari va insonlarning internetdagi rasmiy raqamli qiyofasi.',
      ru: 'Информационная, торговая или сервисная площадка в глобальной сети.',
      en: 'The digital storefront, educational portal, or media publication presence for individuals and organizations.'
    },
    funFact: {
      uz: 'Dunyodagi birinchi veb-sayt 1991-yilda Tim Berners-Li tomonidan CERN laboratoriyasida yaratilgan va info.cern.ch manzilida hanuzgacha ochiq turibdi!',
      ru: 'Самый первый в мире сайт был запущен в 1991 году и доступен по адресу info.cern.ch до сих пор!',
      en: 'The world’s first website, created in 1991 by Tim Berners-Lee at CERN (info.cern.ch), is still online today!'
    }
  },
  {
    id: 'browser',
    title: 'Browser (Veb-brauzer)',
    icon: 'Compass',
    desc: {
      uz: 'Veb-saytlarning kodini (HTML/CSS/JS) chiroyli va tushunarli ko‘rinishga keltirib beruvchi maxsus dastur.',
      ru: 'Программа для просмотра веб-страниц, декодирования интернет-разметки и запуска веб-приложений.',
      en: 'An application software for retrieving, rendering, and traversing information resources on the World Wide Web.'
    },
    howItWorks: {
      uz: 'Rendering motori (masalan, Chromium Blink yoki Gecko) kodni o‘qiydi, DOM daraxtini tuzadi va ekranga piksellarni chizadi.',
      ru: 'Движок браузера (Blink, Gecko) строит дерево DOM, применяет стили и выводит графику.',
      en: 'Rendering engines construct Document Object Model (DOM) trees and paint rendered layouts on screen.'
    },
    keyRole: {
      uz: 'Inson va internet olami o‘rtasidagi eng asosiy vizual darvoza.',
      ru: 'Главный проводник и интерфейс взаимодействия человека со всем интернетом.',
      en: 'The everyday visual portal bridging human users with online software applications.'
    },
    funFact: {
      uz: 'Google Chrome dunyodagi barcha brauzerlar bozorining 65% dan ortig‘iga egalik qiladi.',
      ru: 'Google Chrome занимает более 65% мирового рынка среди всех браузеров.',
      en: 'Google Chrome powers over 65% of all web browsing sessions globally.'
    }
  },
  {
    id: 'search-engine',
    title: 'Search Engine (Qidiruv tizimi)',
    icon: 'Search',
    desc: {
      uz: 'Internetdagi milliardlab sahifalarni skanerlab, foydalanuvchi so‘ragan ma’lumotni soniyaning mingdan bir ulushida topib beruvchi tizim.',
      ru: 'Автоматизированная система поиска страниц в интернете по ключевым словам и фразам.',
      en: 'A software system designed to scour, index, and retrieve relevant information from the web at lightning speed.'
    },
    howItWorks: {
      uz: 'Botlar (web crawlers) saytlarni aylanib indeks tuzadi. Siz so‘rov kiritganingizda PageRank va AI algoritmlari eng mos natijalarni saralab beradi.',
      ru: 'Роботы-пауки индексируют сайты, а сложные математические алгоритмы ранжируют релевантные ответы.',
      en: 'Spiders crawl hyperlinks to build reverse indexes; ranking algorithms sort outputs by relevance and domain authority.'
    },
    keyRole: {
      uz: 'Axborot ummonida kerakli bilimlarni bir zumda topish.',
      ru: 'Быстрая навигация в гигантском океане мировых знаний.',
      en: 'Directing users instantly to verified answers amidst vast expanses of information.'
    },
    funFact: {
      uz: 'Google qidiruv tizimida har kuni 8.5 milliarddan ortiq qidiruv so‘rovi amalga oshiriladi!',
      ru: 'Ежедневно пользователи делают в Google свыше 8,5 миллиардов поисковых запросов!',
      en: 'Google processes over 8.5 billion searches every single day!'
    }
  },
  {
    id: 'ip-address',
    title: 'IP address (IP manzil)',
    icon: 'MapPin',
    desc: {
      uz: 'Internetga ulangan har bir qurilmaning (telefon, kompyuter, printer) yagona takrorlanmas raqamli pasporti.',
      ru: 'Уникальный числовой идентификатор устройства в компьютерной сети.',
      en: 'A unique numerical label assigned to each device connected to a computer network.'
    },
    howItWorks: {
      uz: 'IPv4 to‘rtta sondan iborat (masalan: 192.168.1.1). Yangi IPv6 esa 128 bitli bo‘lib, koinotdagi barcha qum zarralariga yetadigan manzil zaxirasiga ega.',
      ru: 'IPv4 состоит из 4 чисел (напр. 142.250.190.46). Новый IPv6 обеспечивает практически бесконечное число адресов.',
      en: 'IPv4 employs 32-bit addresses (e.g., 172.217.16.206), while IPv6 uses 128-bit addresses ensuring trillions of unique IPs.'
    },
    keyRole: {
      uz: 'Ma’lumot paketlari adashib ketmasdan aynan sizning telefoningizga yetib borishini ta’minlash.',
      ru: 'Точная адресация доставки пакетов конкретному получателю.',
      en: 'Ensuring network packets find their exact physical and logical recipient device without misrouting.'
    },
    funFact: {
      uz: 'IPv6 manzillari soni 340 undecillion (340 dan keyin 36 ta nol) ga teng!',
      ru: 'Количество адресов стандарта IPv6 превышает 340 ундециллионов (число с 36 нулями)!',
      en: 'IPv6 provides 340 undecillion addresses—enough to assign millions of IPs to every atom on Earth!'
    }
  },
  {
    id: 'dns',
    title: 'DNS (Domain Name System)',
    icon: 'BookOpen',
    desc: {
      uz: 'Inson tushunadigan domen nomlarini (masalan, google.com) kompyuter tushunadigan raqamli IP manzilga (142.250.190.46) aylantiruvchi "telefon kitobi".',
      ru: 'Распределенная система «телефонной книги» интернета, преобразующая домены в IP-адреса.',
      en: 'The phonebook of the Internet, translating human-friendly domain names into machine-readable IP addresses.'
    },
    howItWorks: {
      uz: 'Siz brauzerga sayt nomini yozganingizda, DNS server bir necha millisekundda unga mos IP ni topib brauzerga ulanish yo‘lini beradi.',
      ru: 'При вводе имени сайта DNS-сервер за миллисекунды находит соответствующий ему IP-сервера.',
      en: 'Recursively queries root, TLD, and authoritative nameservers to resolve domain hostnames in milliseconds.'
    },
    keyRole: {
      uz: 'Murakkab sonli IP larni yodlab o‘tirmasdan, so‘zlar orqali saytlarga kirish qulayligi.',
      ru: 'Позволяет людям запоминать удобные слова вместо сложных длинных комбинаций цифр.',
      en: 'Allows humans to navigate websites using memorable names instead of cumbersome numerical coordinates.'
    },
    funFact: {
      uz: 'Agar dunyoda bir zumga barcha DNS serverlar to‘xtasa, hech kim nomlar orqali birorta saytga kira olmay qoladi!',
      ru: 'Если отключатся все DNS-серверы мира, интернет станет недоступен по обычным именам сайтов!',
      en: 'Without functioning DNS resolvers, no website domain name on Earth would open in browsers!'
    }
  },
  {
    id: 'http-https',
    title: 'HTTP va HTTPS',
    icon: 'Lock',
    desc: {
      uz: 'Brauzer va server o‘rtasida veb-sahifalarni uzatish protokoli. HTTPS esa barcha ma’lumotlarni shifrlab uzatuvchi xavfsiz talqini.',
      ru: 'Сетевые протоколы передачи веб-страниц. HTTPS защищает передаваемые данные сквозным шифрованием SSL/TLS.',
      en: 'Hypertext Transfer Protocols for transmitting web assets. HTTPS secures transmissions using cryptographic SSL/TLS.'
    },
    howItWorks: {
      uz: 'HTTPS da ma’lumotlar shifrlanadi (SSL/TLS sertifikati). Hatto xakerlar yo‘lda tutib olgan taqdirda ham parollar va bank kartalari sir bo‘lib qoladi.',
      ru: 'Криптографический протокол TLS зашифровывает весь обмен данными между браузером и сервером.',
      en: 'Asymmetric encryption handshakes negotiate symmetric session keys to encrypt every transferred bit.'
    },
    keyRole: {
      uz: 'Onlayn bank to‘lovlari va shaxsiy parollarning o‘g‘irlanishining oldini olish.',
      ru: 'Безопасность покупок картами, паролей и конфиденциальной переписки.',
      en: 'Safeguarding credit card credentials, passwords, and private communications against packet sniffing.'
    },
    funFact: {
      uz: 'Bugungi kunda dunyodagi veb-saytlarning 95% dan ortig‘i xavfsiz HTTPS protokolida ishlaydi!',
      ru: 'Более 95% всего современного мирового веб-трафика защищено зеленым замком HTTPS!',
      en: 'Over 95% of active global web traffic is now transmitted securely through encrypted HTTPS channels!'
    }
  },
  {
    id: 'cloud-internet',
    title: 'Cloud (Bulut)',
    icon: 'Cloud',
    desc: {
      uz: 'Internet orqali istalgan joydan kirish mumkin bo‘lgan masofaviy saqlash omborlari va hisoblash quvvati.',
      ru: 'Модель предоставления вычислительных мощностей и хранилищ через интернет.',
      en: 'A network of remote servers hosted on the Internet to store, manage, and process data.'
    },
    howItWorks: {
      uz: 'Fayllaringiz bitta kompyuterda emas, dunyo bo‘ylab zaxiralangan serverlar tarmog‘ida sinxron saqlanadi.',
      ru: 'Данные реплицируются между несколькими центрами обработки для гарантии сохранности.',
      en: 'Stores and mirrors datasets across distributed geographical server facilities for automated redundancy.'
    },
    keyRole: {
      uz: 'Telefoningiz yo‘qolsa ham rasmlar, kontaktlar va hujjatlarni saqlab qolish.',
      ru: 'Защита от потери данных при поломке персональных гаджетов.',
      en: 'Preventing permanent data loss when personal consumer hardware fails or gets misplaced.'
    },
    funFact: {
      uz: 'Agar bulut tizimlaridagi barcha kabellar va serverlar birlashtirilsa, oylik elektr sarfi butun boshli katta mamlakatlarnikiga teng bo‘ladi!',
      ru: 'Энергопотребление мировых дата-центров облачных гигантов сравнимо с энергопотреблением целых стран!',
      en: 'Global datacenter power consumption matches the total annual electric output of entire industrialized nations!'
    }
  }
];

export const securityTopicsData: SecurityTopic[] = [
  {
    id: 'strong-password',
    title: { uz: 'Kuchli parol', ru: 'Надежный пароль', en: 'Strong Passwords' },
    icon: 'Key',
    dangerLevel: 'high',
    desc: {
      uz: 'Hisoblarni buzishdan himoyalovchi, kamida 12-16 belgidan iborat, katta-kichik harflar, raqamlar va belgilarni o‘z ichiga olgan maxfiy kalit so‘z.',
      ru: 'Криптостойкая комбинация от 12-16 символов, содержащая буквы разных регистров, цифры и спецзнаки.',
      en: 'A high-entropy passphrase of 12-16+ characters combining mixed-case letters, numerals, and punctuation symbols.'
    },
    educationalInfo: {
      uz: 'Oddiy "123456" yoki "parol" kabi parollarni xakerlar kompyuteri soniyaning mingdan bir ulushida topadi (Brute-force). Kuchli parolni topish uchun esa millionlab yillar kerak bo‘ladi.',
      ru: 'Простые пароли взламываются перебором за миллисекунды, тогда как стойкий пароль требует тысячелетий вычислений.',
      en: 'Simple dictionary words are cracked by automated brute-force scripts in milliseconds; high-entropy phrases require millennia.'
    },
    tips: [
      { uz: 'Hech qachon ismingiz yoki tug‘ilgan yilingizni parol qilmang', ru: 'Не используйте имена, клички и даты рождения', en: 'Never use personal dates, names, or dictionary words' },
      { uz: 'Har xil saytlar uchun bitta paroldan qayta foydalanmang', ru: 'Используйте уникальный пароль для каждого аккаунта', en: 'Never reuse the exact same password across multiple platforms' },
      { uz: 'Parol boshqaruvchilardan (Password Manager) foydalaning', ru: 'Пользуйтесь надежными менеджерами паролей', en: 'Leverage dedicated password managers like Bitwarden or 1Password' }
    ]
  },
  {
    id: 'two-factor-auth',
    title: { uz: 'Ikki bosqichli himoya (2FA)', ru: 'Двухфакторная аутентификация (2FA)', en: 'Two-Factor Authentication (2FA)' },
    icon: 'ShieldCheck',
    dangerLevel: 'critical',
    desc: {
      uz: 'Parol kiritilgandan so‘ng, telefoningizga SMS yoki maxsus ilova (Google Authenticator) orqali ikkinchi tasdiq kodini so‘rovchi eng samarali himoya tizimi.',
      ru: 'Подтверждение входа вторым фактором (код из SMS или приложения-аутентификатора).',
      en: 'Requiring two separate, distinct authentication factors before granting access to account portals.'
    },
    educationalInfo: {
      uz: 'Agar xaker parolingizni bilib olgan taqdirda ham, telefoningizdagi 30 soniyalik kodsiz hisobingizga kira olmaydi.',
      ru: 'Даже зная ваш пароль, злоумышленник не войдет в аккаунт без временного одноразового кода.',
      en: 'Even if credentials are compromised in a data leak, attackers cannot log in without the physical second factor.'
    },
    tips: [
      { uz: 'Telegram, Google va bank ilovalarida 2FA ni albatta yoqing', ru: 'Обязательно включите 2FA в Telegram, Google и банках', en: 'Enable 2FA across Google, Telegram, banking apps, and social accounts' },
      { uz: 'SMS o‘rniga Google Authenticator ilovasidan foydalanish xavfsizroq', ru: 'Предпочитайте приложения-аутентификаторы SMS-сообщениям', en: 'Prefer authenticator apps (TOTP) over SMS to prevent SIM-swapping risks' }
    ]
  },
  {
    id: 'phishing',
    title: { uz: 'Phishing (Fishing xurujlari)', ru: 'Фишинг (Phishing)', en: 'Phishing Attacks' },
    icon: 'AlertTriangle',
    dangerLevel: 'critical',
    desc: {
      uz: 'Haqiqiy bank, to‘lov yoki ijtimoiy tarmoq saytiga juda o‘xshash soxta sahifalar orqali parollarni va karta raqamlarini o‘g‘irlash usuli.',
      ru: 'Вид интернет-мошенничества с целью выманивания паролей через поддельные сайты-клоны.',
      en: 'Deceptive social engineering attempts to steal passwords and financial data via spoofed clone websites.'
    },
    educationalInfo: {
      uz: 'Sizga "Siz 10 000 dollar yutib oldingiz!" yoki "Hisobingiz bloklanmoqda, havola orqali kiring" degan shubhali xabarlar kelishi mumkin.',
      ru: 'Мошенники присылают тревожные сообщения с ссылками на клоны реальных сайтов.',
      en: 'Scammers weaponize urgent emotional appeals, fear, or false prize giveaways with forged login links.'
    },
    tips: [
      { uz: 'Brauzerdagi sayt manzilini (URL) har doim harfma-harf tekshiring', ru: 'Внимательно проверяйте адресную строку сайта (URL)', en: 'Scrutinize the exact domain URL spelling before entering credentials' },
      { uz: 'Noma’lum kishilardan kelgan shubhali havolalarga kirmang', ru: 'Не переходите по подозрительным ссылкам в мессенджерах', en: 'Do not click unknown links in unsolicited messages or emails' }
    ]
  },
  {
    id: 'viruses',
    title: { uz: 'Kompyuter viruslari', ru: 'Компьютерные вирусы', en: 'Computer Viruses' },
    icon: 'Bug',
    dangerLevel: 'high',
    desc: {
      uz: 'Boshqa dasturlarga yopishib, o‘zini-o‘zi ko‘paytiruvchi va operatsion tizimni buzuvchi zararli dasturiy kodlar.',
      ru: 'Вредоносный саморазмножающийся код, заражающий другие файлы и нарушающий работу системы.',
      en: 'Self-replicating malicious programs that inject their code into legitimate executable files.'
    },
    educationalInfo: {
      uz: 'Viruslar fayllarni o‘chirib yuborishi, xotirani to‘ldirishi yoki kompyuterni sekinlashtirishi mumkin.',
      ru: 'Вирусы портят системные файлы, перегружают память и тормозят устройство.',
      en: 'Viruses corrupt filesystem structures, commandeer CPU resources, and disrupt operating system stability.'
    },
    tips: [
      { uz: 'Antivirus dasturining bazasini muntazam yangilab turing', ru: 'Регулярно обновляйте базы антивируса', en: 'Keep built-in antivirus definitions updated consistently' },
      { uz: 'Noma’lum fleshkalarni kompyuterga ehtiyotkorlik bilan ulang', ru: 'Будьте осторожны с незнакомыми USB-флешками', en: 'Scan unfamiliar USB flash drives before opening executable contents' }
    ]
  },
  {
    id: 'malware',
    title: { uz: 'Malware (Zararli dasturlar)', ru: 'Вредоносное ПО (Malware)', en: 'Malware & Ransomware' },
    icon: 'Skull',
    dangerLevel: 'critical',
    desc: {
      uz: 'Troyanlar, shifrlab pul talab qiluvchi dasturlar (Ransomware) va josus dasturlarni (Spyware) o‘z ichiga olgan umumiy xavfli tushuncha.',
      ru: 'Собирательное понятие для всех видов вредоносного софта: троянов, вымогателей и шпионов.',
      en: 'An umbrella term encompassing trojans, spyware, keyloggers, and extortionist ransomware.'
    },
    educationalInfo: {
      uz: 'Ransomware (Tovlamachi virus) kompyuteringizdagi barcha rasmlar va fayllarni shifrlab qo‘yadi va ochish uchun pul talab qiladi.',
      ru: 'Шифровальщики блокируют личные файлы и требуют выкуп за ключ расшифровки.',
      en: 'Ransomware encrypts personal family photos and business files with AES keys, demanding extortion payments.'
    },
    tips: [
      { uz: 'Muhim hujjatlarning zaxira nusxasini (Backup) tashqi diskda saqlang', ru: 'Делайте резервные копии важных файлов на внешний диск', en: 'Maintain isolated offline backups of mission-critical files regularly' },
      { uz: 'Piratlangan buzuq o‘yin va dasturlarni (.exe) yuklab olmang', ru: 'Не скачивайте пиратские взломанные программы', en: 'Avoid downloaded cracked software and unverified executable files' }
    ]
  },
  {
    id: 'spam',
    title: { uz: 'Spam (Keraksiz xabarlar)', ru: 'Спам (Spam)', en: 'Spam Messages' },
    icon: 'MailX',
    dangerLevel: 'low',
    desc: {
      uz: 'Foydalanuvchi so‘ramagan, ommaviy ravishda elektron pochtaga yoki ijtimoiy tarmoqlarga yuboriluvchi keraksiz reklama xabarlari.',
      ru: 'Массовая нежелательная рекламная рассылка по почте или в мессенджерах.',
      en: 'Unsolicited, indiscriminate bulk messaging sent across email, SMS, and messaging networks.'
    },
    educationalInfo: {
      uz: 'Spam xabarlar shunchaki reklama bo‘lishi yoki ichida zararli virusli havolalarni yashirgan bo‘lishi mumkin.',
      ru: 'Спам засоряет память и часто маскирует опасные фишинговые вложения.',
      en: 'Spam clutters mailboxes and frequently disguises drive-by download links or fraudulent lottery schemes.'
    },
    tips: [
      { uz: 'Asosiy elektron pochtangizni ochiq forumlarda yozib qoldirmang', ru: 'Не публикуйте свой email в открытом доступе', en: 'Do not post your primary private email address on public forums' },
      { uz: 'Spam papkasidagi noma’lum fayllarni aslo ochmang', ru: 'Никогда не открывайте прикрепленные файлы из спама', en: 'Never open email attachments originating from unknown senders' }
    ]
  },
  {
    id: 'safe-browsing',
    title: { uz: 'Xavfsiz internet qoidalari', ru: 'Безопасный веб-серфинг', en: 'Safe Web Browsing' },
    icon: 'Shield',
    dangerLevel: 'medium',
    desc: {
      uz: 'Internetda sayohat qilayotganda kiberhujumlarga tushmaslik uchun amal qilinishi kerak bo‘lgan qoidalar to‘plami.',
      ru: 'Свод правил цифровой гигиены для защиты личных данных в интернете.',
      en: 'Fundamental digital hygiene practices for navigating the web safely without compromising personal data.'
    },
    educationalInfo: {
      uz: 'Ochiq bepul Wi-Fi nuqtalarida (masalan, kafeda) bank ilovalariga kirishda ehtiyot bo‘lish kerak, chunki tarmoq trafigi ushlab qolinishi mumkin.',
      ru: 'В публичных незащищенных сетях кафе злоумышленники могут перехватывать трафик.',
      en: 'Unencrypted public Wi-Fi networks in airports or cafes expose unprotected network traffic to snooping.'
    },
    tips: [
      { uz: 'Ommaviy Wi-Fi ga ulanganda VPN xizmatlaridan foydalaning', ru: 'Используйте проверенный VPN в публичных сетях', en: 'Use a trusted encrypted VPN when connecting to open public Wi-Fi' },
      { uz: 'Sayt manzilida qulf belgisi (HTTPS) borligiga e’tibor bering', ru: 'Убедитесь в наличии протокола HTTPS перед вводом данных', en: 'Always confirm the padlock HTTPS badge is present before entering credentials' }
    ]
  },
  {
    id: 'personal-data-protection',
    title: { uz: 'Shaxsiy ma’lumotlarni himoya qilish', ru: 'Защита персональных данных', en: 'Personal Data Privacy' },
    icon: 'UserCheck',
    dangerLevel: 'high',
    desc: {
      uz: 'Passport raqami, yashash manzili, bank kartasi ma’lumotlari va shaxsiy fotosuratlarning begona qo‘llarga tushishining oldini olish.',
      ru: 'Меры по предотвращению утечки паспортов, номеров карт и конфиденциальной информации.',
      en: 'Safeguarding identity documents, payment cards, location telemetry, and sensitive personal information.'
    },
    educationalInfo: {
      uz: 'Ijtimoiy tarmoqlarda o‘z shaxsiy hujjatlaringiz, aviapiletlar (QR kodi bilan) va bank kartalarining rasmlarini joylashtirmang.',
      ru: 'Штрих-коды билетов и фотографии карт в соцсетях мгновенно используются мошенниками.',
      en: 'Posting boarding passes with barcodes or card images on social media exposes personal identity to theft.'
    },
    tips: [
      { uz: 'Ilovalarga mikrofonga va geolokatsiyaga faqat kerak paytda ruxsat bering', ru: 'Ограничивайте доступ приложений к геолокации и микрофону', en: 'Audit smartphone app permissions for camera, microphone, and location' },
      { uz: 'Bank kartangizning orqasidagi 3 xonali CVV/CVC kodini hech kimga aytmang', ru: 'Никогда и никому не сообщайте CVV-код с обратной стороны карты', en: 'Never disclose your payment card’s 3-digit CVV/CVC security code to anyone' }
    ]
  }
];
