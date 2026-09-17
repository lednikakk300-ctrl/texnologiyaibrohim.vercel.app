import { NewsItem } from '../types';

export const initialNewsData: NewsItem[] = [
  {
    id: 'news-quantum-computing-2026',
    title: {
      uz: 'Kvant kompyuterlari: yangi avlod quvvati millionlab barobar oshirildi',
      ru: 'Квантовые процессоры: вычислительная мощность увеличена в миллионы раз',
      en: 'Quantum Computing Breakthrough: Millions of Times Greater Error-Corrected Capacity'
    },
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format&fit=crop&q=80',
    date: '2026-09-15',
    category: 'Kvant Texnologiyasi',
    readTime: '4 daqiqa',
    summary: {
      uz: 'Tadqiqotchilar xatolarni o‘zi tuzatuvchi kubitlar (fault-tolerant qubits) yordamida yangi kvant mikrochiplarini sinovdan o‘tkazishdi.',
      ru: 'Ученые представили чип с отказоустойчивыми логическими кубитами нового поколения.',
      en: 'Physicists validated a scalable architecture of fault-tolerant logical qubits with near-zero decoherence.'
    },
    content: {
      uz: 'Kvant hisoblash texnologiyasi an’anaviy superkompyuterlar o‘n ming yillab hisoblaydigan murakkab molekulyar modellarni bir necha daqiqada hisoblab berishi kutilmoqda. Bu kashfiyot yangi akkumulyator materiallari va toza energiya yaratishda inqilob qiladi.',
      ru: 'Квантовые суперкомпьютеры способны моделировать биомолекулярные процессы за минуты вместо тысячелетий вычислений на классических машинах.',
      en: 'Quantum supremacy benchmarks demonstrate rapid simulations of molecular catalysts and novel superconductive alloys in minutes instead of centuries.'
    },
    source: 'TechGlobal Science'
  },
  {
    id: 'news-humanoid-robots-factories',
    title: {
      uz: 'Gumanoid robotlar dunyo bo‘ylab zamonaviy avtozavodlarda to‘liq ishga tushdi',
      ru: 'Гуманоидные роботы заступили на полноценную рабочую смену на автозаводах',
      en: 'Autonomous Humanoid Robots Deployed Full-Time on Automotive Assembly Lines'
    },
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=80',
    date: '2026-09-12',
    category: 'Robototexnika',
    readTime: '3 daqiqa',
    summary: {
      uz: 'Inson qaddi-qomatiga ega ikki oyoqli aqlli robotlar og‘ir ehtiyot qismlarni saralash va o‘rnatish vazifalarini avtomatlashtirdi.',
      ru: 'Двуногие роботы с искусственным интеллектом успешно справляются со сложными задачами сборки.',
      en: 'Bipedal AI humanoids coordinate complex material handling and fine parts assembly safely alongside humans.'
    },
    content: {
      uz: 'Robotlar vizual-til-harakat (VLA) modellaridan foydalanib, har bir yangi detallarga inson ko‘rsatmasisiz mustaqil moslashadi. Bu ishlab chiqarish samaradorligini 35% ga oshirdi.',
      ru: 'Благодаря новейшим нейросетевым моделям восприятия роботы адаптируются к непредвиденным ситуациям на конвейере.',
      en: 'Leveraging vision-language-action (VLA) foundation models, the robots dynamically adapt grip pressure and movement.'
    },
    source: 'Robotics Insider'
  },
  {
    id: 'news-solid-state-batteries',
    title: {
      uz: 'Elektr avtomobillar uchun qattiq jism batareyalari: 1000 km masofa va 8 daqiqada zaryad',
      ru: 'Твердотельные батареи для электрокаров: 1000 км хода и зарядка за 8 минут',
      en: 'Solid-State Battery Revolution: 1000km Range and Ultra-Fast 8-Minute Charging'
    },
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&auto=format&fit=crop&q=80',
    date: '2026-09-08',
    category: 'Kelajak Transporti',
    readTime: '5 daqiqa',
    summary: {
      uz: 'Suyuq elektrolit o‘rniga keramika va qattiq polimerdan foydalanilgan yangi batareyalar o‘t olish xavfini butunlay yo‘qotdi.',
      ru: 'Отказ от жидкого электролита исключает риск возгорания и удваивает плотность энергии.',
      en: 'Solid ceramic electrolytes eliminate dendrite short-circuits and thermal runaway while doubling volumetric energy density.'
    },
    content: {
      uz: 'Yangi texnologiya sovuq ob-havoda ham quvvatini yo‘qotmaydi. Birinchi ommaviy avtomobillar shu yilning oxirida konveyerdan chiqishi kutilmoqda.',
      ru: 'Технология сохраняет 90% емкости при сильных морозах и готова к внедрению в серийное производство.',
      en: 'Solid-state packs maintain over 90% usable retention down to -30°C and enter mass consumer production this cycle.'
    },
    source: 'CleanTech Energy'
  },
  {
    id: 'news-brain-computer-interface',
    title: {
      uz: 'Miya-kompyuter interfeysi (BCI) orqali fikr kuchi bilan matn yozish tezligi yangilandi',
      ru: 'Интерфейс мозг-компьютер: новый рекорд скорости печати силой мысли',
      en: 'Brain-Computer Interfaces Achieve Record Typing Speeds Powered by Thought'
    },
    image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=800&auto=format&fit=crop&q=80',
    date: '2026-09-05',
    category: 'Neyrotexnologiya',
    readTime: '4 daqiqa',
    summary: {
      uz: 'Neyrochip o‘rnatilgan bemorlar daqiqasiga 95 ta so‘zni faqat fikr yordamida ekranga chiqarishga erishdi.',
      ru: 'Пациенты с нейроимплантами научились печатать до 95 слов в минуту исключительно силой мысли.',
      en: 'Paralyzed clinical trial participants achieved over 95 words-per-minute screen typing using neural spike decoders.'
    },
    content: {
      uz: 'Ushbu texnologiya harakatlanish va gapirish qobiliyatini yo‘qotgan insonlarga to‘laqonli muloqot qilish va kompyuterni boshqarish imkoniyatini taqdim etmoqda.',
      ru: 'Технология возвращает возможность свободного общения и управления цифровым миром миллионам людей.',
      en: 'Restoring interactive agency, real-time speech synthesis, and high-speed web navigation for neuro-disabled patients.'
    },
    source: 'NeuroScience Digest'
  }
];
