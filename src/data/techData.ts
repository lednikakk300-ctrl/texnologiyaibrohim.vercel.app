import { TechnologyItem } from '../types';

export const technologiesData: TechnologyItem[] = [
  {
    id: 'computer',
    name: 'Kompyuter',
    localizedName: {
      uz: 'Kompyuter',
      ru: 'Компьютер',
      en: 'Computer'
    },
    category: 'hardware',
    icon: 'Monitor',
    tags: ['CPU', 'PC', 'Hardware', 'Dasturlash'],
    shortDesc: {
      uz: 'Axborotni qabul qilish, qayta ishlash va saqlash uchun mo‘ljallangan universal elektron hisoblash mashinasi.',
      ru: 'Универсальная электронно-вычислительная машина для обработки, хранения и передачи информации.',
      en: 'A general-purpose electronic device for storing, processing, and retrieving data.'
    },
    history: {
      uz: 'Dastlabki mexanik hisoblash qurilmasi XIX asrda Charlz Bebbij tomonidan loyihalashtirilgan. 1945-yilda birinchi to‘liq elektron kompyuter ENIAC yaratilgan. 1970-yillarda mikroprotsessorlar ixtiro qilinishi bilan shaxsiy kompyuterlar (PC) davri boshlandi.',
      ru: 'Первая механическая вычислительная машина была спроектирована Чарльзом Бэббиджем в XIX веке. В 1945 году появился первый электронный компьютер ENIAC. С созданием микропроцессоров в 1970-х годах началась эра персональных компьютеров.',
      en: 'The conceptual mechanical computer was designed by Charles Babbage in the 19th century. In 1945, the first digital computer, ENIAC, was built. The microprocessor revolution in the 1970s ushered in personal computing.'
    },
    howItWorks: {
      uz: 'Kompyuter ikkilik (0 va 1) tizimida ishlaydi. Protsessor (CPU) xotiradagi (RAM) buyruqlarni o‘qiydi, hisoblaydi va natijani ekranga yoki diskka (SSD/HDD) uzatadi.',
      ru: 'Компьютер работает в двоичной системе (0 и 1). Процессор (CPU) считывает инструкции из оперативной памяти (RAM), выполняет расчеты и выводит результат на экран или диск.',
      en: 'Computers compute using binary (0 and 1) logic. The CPU fetches instructions from RAM, executes mathematical logic gates, and delivers outputs to storage or display.'
    },
    advantages: [
      { uz: 'Favqulodda yuqori hisoblash tezligi va aniqlik', ru: 'Высокая скорость и точность вычислений', en: 'Ultra-high computational speed and precision' },
      { uz: 'Katta hajmdagi ma’lumotlarni saqlash va boshqarish', ru: 'Хранение и управление колоссальными объемами данных', en: 'Massive data storage and management' },
      { uz: 'Barcha sohalarni avtomatlashtirish imkoniyati', ru: 'Автоматизация всех сфер человеческой деятельности', en: 'Universal automation across industries' }
    ],
    disadvantages: [
      { uz: 'Elektr energiyasiga doimiy bog‘liqlik', ru: 'Зависимость от источников электроэнергии', en: 'Permanent dependence on power supplies' },
      { uz: 'Kiberxurujlar va viruslar xavfi', ru: 'Риск кибератак и вредоносных программ', en: 'Vulnerability to malware and cyber attacks' },
      { uz: 'Ko‘p o‘tirish sababli inson salomatligiga ta’siri', ru: 'Влияние на осанку и зрение при длительной работе', en: 'Ergonomic and health impacts from prolonged use' }
    ],
    whereUsed: [
      { uz: 'Dasturlash va IT sohasida', ru: 'Разработка ПО и IT индустрия', en: 'Software engineering & IT' },
      { uz: 'Ilmiy tadqiqotlar va kosmik laboratoriyalarda', ru: 'Научные лаборатории и космонавтика', en: 'Scientific labs & aerospace' },
      { uz: 'Tibbiyot, bank va ta’lim tizimlarida', ru: 'Медицина, банки и образование', en: 'Healthcare, banking, and education' }
    ],
    funFacts: [
      { uz: 'ENIAC kompyuteri 27 tonna og‘irlikda bo‘lgan va butun bir katta xonani egallagan!', ru: 'Компьютер ENIAC весил около 27 тонн и занимал целую комнату!', en: 'The ENIAC weighed over 27 tons and occupied an entire large hall!' },
      { uz: 'Bugungi oddiy smartfon 1969-yilda Oyni zabt etgan Apollo 11 bort kompyuteridan millionlab marta kuchliroq.', ru: 'Современный смартфон в миллионы раз мощнее компьютера Apollo 11, летавшего на Луну.', en: 'Today’s entry smartphone is millions of times faster than Apollo 11’s guidance computer.' }
    ]
  },
  {
    id: 'smartphone',
    name: 'Smartfon',
    localizedName: { uz: 'Smartfon', ru: 'Смартфон', en: 'Smartphone' },
    category: 'smart',
    icon: 'Smartphone',
    tags: ['Mobil', 'Android', 'iOS', 'Touch'],
    shortDesc: {
      uz: 'Mobil aloqa va cho‘ntak kompyuteri imkoniyatlarini birlashtirgan ko‘p funksiyali qurilma.',
      ru: 'Многофункциональное мобильное устройство, совмещающее телефон и портативный компьютер.',
      en: 'A handheld mobile device combining phone capabilities with advanced computing.'
    },
    history: {
      uz: '1992-yilda IBM Simon birinchi sensorli smartfon prototipi bo‘ldi. 2007-yilda Apple kompaniyasi chiqargan iPhone inqilob qildi va zamonaviy kapacitiv sensorli ekranlar davrini ochib berdi.',
      ru: 'В 1992 году появился IBM Simon — прародитель смартфонов. В 2007 году революционный iPhone задал стандарты современных сенсорных экранов и мобильных ОС.',
      en: 'The IBM Simon in 1992 was the earliest prototype. In 2007, Apple revolutionized modern mobile tech with the capacitive multi-touch iPhone.'
    },
    howItWorks: {
      uz: 'ARM arxitekturali SoC (System-on-Chip) protsessori, modem chipi, kamera sensorlari va operatsion tizim (Android/iOS) integratsiyasi asosida ishlaydi.',
      ru: 'Работает на базе чипсетов ARM (SoC), модемов беспроводной связи, датчиков и ОС (Android/iOS).',
      en: 'Driven by an ARM System-on-Chip (SoC) combining CPU, GPU, wireless modem, and mobile OS.'
    },
    advantages: [
      { uz: 'Ixchamlik va doimiy aloqada bo‘lish', ru: 'Компактность и постоянная доступность связи', en: 'Extreme portability and constant connectivity' },
      { uz: 'Kamera, navigator, bank va internet bitta qurilmada', ru: 'Камера, навигатор, банк и интернет в кармане', en: 'Camera, maps, payment, and web in one pocket' }
    ],
    disadvantages: [
      { uz: 'Akkumulyator tez quvvat yo‘qotishi', ru: 'Ограниченное время работы от батареи', en: 'Limited single-charge battery duration' },
      { uz: 'Raqamli qaramlik keltirib chiqarishi', ru: 'Риск экранной зависимости', en: 'Digital addiction risk' }
    ],
    whereUsed: [
      { uz: 'Kundalik hayot, muloqot, ta’lim va ishda', ru: 'Повседневная жизнь, общение, работа и учеба', en: 'Everyday life, communication, work, navigation' }
    ],
    funFacts: [
      { uz: 'Odamlar o‘rtacha hisobda kuniga 96 marta smartfonga qaraydi!', ru: 'В среднем человек разблокирует смартфон более 90 раз в день!', en: 'Average smartphone users check their screen more than 90 times a day!' }
    ]
  },
  {
    id: 'tablet',
    name: 'Planshet',
    localizedName: { uz: 'Planshet', ru: 'Планшет', en: 'Tablet' },
    category: 'smart',
    icon: 'Tablet',
    tags: ['Ekran', 'Multimedia', 'Stilus', 'Chizish'],
    shortDesc: {
      uz: 'Katta sensorli ekranli, kitob o‘qish, chizish va multimedia uchun qulay portativ qurilma.',
      ru: 'Портативное устройство с большим сенсорным экраном для мультимедиа, учебы и творчества.',
      en: 'A portable flat computer featuring a large touchscreen, great for media, reading, and art.'
    },
    history: {
      uz: '2010-yilda birinchi iPad taqdim etilishi bilan planshetlar noutbuk va smartfon orasidagi mukammal qurilma sifatida ommalashdi.',
      ru: 'Выпуск первого iPad в 2010 году сделал планшеты массовой категорией гаджетов.',
      en: 'The introduction of the iPad in 2010 created the modern consumer tablet revolution.'
    },
    howItWorks: {
      uz: 'Katta o‘lchamli IPS/OLED panel, stilus bosimini sezuvchi qatlam va optimallashtirilgan planshet interfeysi orqali ishlaydi.',
      ru: 'Использует сенсорные IPS/OLED матрицы с поддержкой стилуса и планшетных интерфейсов.',
      en: 'Utilizes large-format touch displays with active stylus digitizers and mobile OS adaptations.'
    },
    advantages: [
      { uz: 'Dizayn, chizish va o‘qish uchun juda qulay', ru: 'Идеален для иллюстраций, чтения и заметок', en: 'Ideal for digital art, reading, and media' }
    ],
    disadvantages: [
      { uz: 'Kuchli dasturlash va og‘ir montaj uchun klaviatura yetishmasligi', ru: 'Менее удобен для сложного программирования без клавиатуры', en: 'Less ergonomic for heavy coding without physical keyboards' }
    ],
    whereUsed: [
      { uz: 'Grafik dizayn, maktablar, aviatsiya va restoran menyularida', ru: 'Графический дизайн, школы, авиация, рестораны', en: 'Graphic design, digital schooling, cockpits, retail' }
    ],
    funFacts: [
      { uz: 'Zamonaviy uchuvchilar 20 kg qog‘oz xaritalar o‘rniga bitta planshetdan foydalanadilar.', ru: 'Пилоты самолетов заменили 20 кг бумажных карт одним планшетом.', en: 'Airline pilots replaced over 40 lbs of paper manuals with a single tablet.' }
    ]
  },
  {
    id: 'smart-tv',
    name: 'Smart TV',
    localizedName: { uz: 'Smart TV', ru: 'Smart TV', en: 'Smart TV' },
    category: 'smart',
    icon: 'Tv',
    tags: ['Televizor', 'Streaming', 'Internet', '4K'],
    shortDesc: {
      uz: 'Internetga ulanuvchi, ilovalar, striming va o‘yinlarni qo‘llab-quvvatlovchi aqlli televizor.',
      ru: 'Телевизор с подключением к интернету, медиасервисам и магазину приложений.',
      en: 'A television set integrated with the internet, streaming platforms, and apps.'
    },
    history: {
      uz: '1990-yillardagi WebTV-dan boshlanib, 2010-yillarda Android TV, webOS va Tizen tizimlari bilan haqiqiy media markazga aylandi.',
      ru: 'Развивался от ранних приставок WebTV до современных систем Android TV, Tizen и webOS.',
      en: 'Evolved from experimental 90s WebTV to contemporary high-speed streaming hubs.'
    },
    howItWorks: {
      uz: 'Wi-Fi orqali internetga ulanib, video oqimini (4K/8K) real vaqtda dekodlaydi va HDR texnologiyasida tasvirga aylantiradi.',
      ru: 'Подключается по Wi-Fi, декодирует потоковое видео 4K/8K и оптимизирует изображение с HDR.',
      en: 'Streams high-resolution 4K/8K video over Wi-Fi, using hardware codecs and HDR tone mapping.'
    },
    advantages: [
      { uz: 'Katta ekranda kinolar, YouTube va ta’lim videolari', ru: 'Кинотеатр и образовательный контент на большом экране', en: 'Cinematic streaming and educational video viewing' }
    ],
    disadvantages: [
      { uz: 'Eski modellarda dasturiy ta’minot yangilanishining to‘xtashi', ru: 'Устаревание прошивок на старых моделях', en: 'Software obsolescence on older hardware' }
    ],
    whereUsed: [
      { uz: 'Uylar, konferens-zallar, ta’lim auditoriyalari', ru: 'Дома, конференц-залы, учебные аудитории', en: 'Living rooms, conference centers, classrooms' }
    ],
    funFacts: [
      { uz: 'Birinchi televizorlar oq-qora va piksellari ko‘rinib turadigan 30 qatordan iborat edi!', ru: 'Первые телеприемники выдавали всего 30 строк развертки!', en: 'Earliest electromechanical TVs had only 30 lines of resolution!' }
    ]
  },
  {
    id: 'smart-watch',
    name: 'Smart Watch',
    localizedName: { uz: 'Smart Watch', ru: 'Смарт-часы', en: 'Smart Watch' },
    category: 'smart',
    icon: 'Watch',
    tags: ['Soat', 'Salomatlik', 'Yurak', 'Sport'],
    shortDesc: {
      uz: 'Yurak urishi, qon bosimi, qadamlarni o‘lchovchi va bildirishnomalarni ko‘rsatuvchi taqiladigan aqlli soat.',
      ru: 'Носимое устройство для контроля здоровья, тренировок и уведомлений.',
      en: 'A wrist-worn smart computing device tracking biometrics, health, and notifications.'
    },
    history: {
      uz: '1980-yillardagi kalkulyatorli soatlardan 2015-yilda Apple Watch va Galaxy Watch kabi tibbiy sensorli aqlli qurilmalargacha yetib keldi.',
      ru: 'От электронных часов с калькулятором 1980-х до современных медицинских датчиков в Apple Watch.',
      en: 'Progressed from 1980s calculator watches to sophisticated biometric health monitors.'
    },
    howItWorks: {
      uz: 'Fotopletizmografiya (yashil LED nuri orqali qon oqimini skanerlash), akselerometr va giroskop yordamida harakat va pulsni aniqlaydi.',
      ru: 'Оптические сенсоры (зеленые LED) считывают кровоток, а гироскопы фиксируют движение.',
      en: 'Employs photoplethysmography (green LEDs reflected through blood vessels) and IMU motion sensors.'
    },
    advantages: [
      { uz: 'Salomatlikni 24/7 nazorat qilish (EKG, uyqu, kislorod)', ru: 'Круглосуточный мониторинг здоровья (ЭКГ, пульс, кислород)', en: 'Round-the-clock health tracking (ECG, blood oxygen, sleep)' }
    ],
    disadvantages: [
      { uz: 'Akkumulyatorni har 1-2 kunda zaryadlash zarurati', ru: 'Частая необходимость подзарядки', en: 'Frequent battery recharge requirements' }
    ],
    whereUsed: [
      { uz: 'Sport, tibbiyot, kundalik rejalashtirish', ru: 'Спорт, фитнес, медицина, расписание', en: 'Athletics, fitness monitoring, everyday convenience' }
    ],
    funFacts: [
      { uz: 'Smart Watch ko‘plab insonlarning yiqilib tushganini yoki yurak xurujini oldindan aniqlab hayotini saqlab qolgan!', ru: 'Функция детекции падения и пульса в часах спасла жизни тысячам людей!', en: 'Emergency fall detection in smartwatches has saved thousands of lives globally.' }
    ]
  },
  {
    id: '3d-printer',
    name: '3D printer',
    localizedName: { uz: '3D printer', ru: '3D-принтер', en: '3D Printer' },
    category: 'hardware',
    icon: 'Printer',
    tags: ['Ishlab chiqarish', 'Model', 'Plastik', 'Prototip'],
    shortDesc: {
      uz: 'Raqamli 3D model asosida qatlam-qatlam moddiy jism yasovchi additiv ishlab chiqarish qurilmasi.',
      ru: 'Устройство для послойного создания физических трехмерных объектов по цифровой модели.',
      en: 'An additive manufacturing device fabricating physical 3D objects layer by layer.'
    },
    history: {
      uz: '1984-yilda Chak Xall tomonidan stereolitografiya (SLA) patenti olindi. Keyinchalik FDM (erigan plastmassa bilan qatlamlash) texnologiyasi ommalashdi.',
      ru: 'Чак Халл запатентовал стереолитографию в 1984 году. Позже технология FDM сделала печать общедоступной.',
      en: 'Chuck Hull invented stereolithography (SLA) in 1984. Open-source RepRap later democratized FDM.'
    },
    howItWorks: {
      uz: 'G-kod fayli bo‘yicha ekstruder plastik simni (PLA/ABS) 200°C da eritib, koordinatalar bo‘yicha mikron darajadagi qatlamlarni yotqizadi.',
      ru: 'Экструдер плавит пластик (PLA/ABS) и наносит микрослои по координатам из G-кода.',
      en: 'A heated nozzle extrudes melted filament or cures resin layer by layer using numeric G-code instructions.'
    },
    advantages: [
      { uz: 'Murakkab detallarni bir necha soatda tayyorlash', ru: 'Быстрое прототипирование сложных деталей за часы', en: 'Rapid prototyping of complex geometries in hours' },
      { uz: 'Xomashyo chiqindilarini minimal darajaga tushirish', ru: 'Экономия материалов и безотходность', en: 'Drastic reduction in material waste' }
    ],
    disadvantages: [
      { uz: 'Chop etish jarayonining sekinligi (bir necha soatdan kunlargacha)', ru: 'Длительное время печати крупных объектов', en: 'Slow manufacturing time compared to mass injection molding' }
    ],
    whereUsed: [
      { uz: 'Tibbiyot (protezlar, suyaklar), aviasozlik, me’morchilik va robototexnika', ru: 'Медицина (протезы), аэрокосмическая сфера, архитектура', en: 'Biomedical prosthetics, aerospace, architecture, hobby electronics' }
    ],
    funFacts: [
      { uz: 'Xalqaro Koinot Stansiyasida (XKS) buzilgan asboblarni 3D printerda to‘g‘ridan-to‘g‘ri koinotda chop etishadi!', ru: 'На МКС космонавты печатают нужные инструменты прямо на бортовой орбитальной станции!', en: 'Astronauts on the ISS 3D-print spare parts in zero gravity rather than waiting for cargo rockets!' }
    ]
  },
  {
    id: 'vr',
    name: 'VR (Virtual Reality)',
    localizedName: { uz: 'VR (Virtual Borliq)', ru: 'VR (Виртуальная реальность)', en: 'VR (Virtual Reality)' },
    category: 'future',
    icon: 'Glasses',
    tags: ['3D', 'Virtual', 'Simulyator', 'Metaverse'],
    shortDesc: {
      uz: 'Insonni kompyuter yaratgan to‘liq 360 darajali sun’iy olamga sho‘ng‘ituvchi texnologiya.',
      ru: 'Технология полного погружения человека в цифровой интерактивный 3D-мир.',
      en: 'A simulated experience providing full immersion into a 3D computer-generated world.'
    },
    history: {
      uz: '1968-yilda Ivan Sazerlend birinchi VR shlemini ("Damokl qilichi") yaratgan. 2016-yildan Oculus, HTC va PlayStation zamonaviy iste’mol bozoriga olib kirdi.',
      ru: 'Первый шлем создал Айвен Сазерленд в 1968 г. В 2016 году шлемы Oculus и HTC сделали VR популярным.',
      en: 'Ivan Sutherland built the first head-mounted display in 1968. Oculus sparked modern consumer adoption in 2016.'
    },
    howItWorks: {
      uz: 'Har bir ko‘z uchun alohida 90-120 Gts chastotali stereoskopik tasvir beriladi va bosh harakatlari giroskop/kameralar bilan fazoda kuzatiladi.',
      ru: 'Для каждого глаза формируется отдельная стереокартинка, а датчики точно отслеживают положение головы в пространстве.',
      en: 'Renders dual stereoscopic perspectives with sub-millimeter head and hand tracking.'
    },
    advantages: [
      { uz: 'Haqiqiy xavfsiz mashg‘ulotlar (uchuvchilar, jarrohlar simulyatori)', ru: 'Безопасное обучение пилотов и хирургов в симуляциях', en: 'Safe hands-on simulation for pilots, surgeons, and engineers' }
    ],
    disadvantages: [
      { uz: 'Uzoq foydalanganda ko‘ngil aynishi (motion sickness)', ru: 'Укачивание и вестибулярный дискомфорт', en: 'Motion sickness and visual fatigue after prolonged usage' }
    ],
    whereUsed: [
      { uz: 'O‘yinlar, virtual muzeylar, harbiy mashg‘ulotlar, arxitektura sayohatlari', ru: 'Игры, виртуальные туры, военные тренировки, проектирование', en: 'Gaming, architecture walkthroughs, defense training, medicine' }
    ],
    funFacts: [
      { uz: 'VR orqali fobiya va qo‘rquvlarni (masalan, balandlikdan qo‘rqish) psixologik davolash mumkin!', ru: 'VR эффективно используется психологами для избавления от фобий и страхов!', en: 'VR exposure therapy is widely used by clinical psychologists to cure acrophobia and PTSD.' }
    ]
  },
  {
    id: 'ar',
    name: 'AR (Augmented Reality)',
    localizedName: { uz: 'AR (Kengaytirilgan Borliq)', ru: 'AR (Дополненная реальность)', en: 'AR (Augmented Reality)' },
    category: 'future',
    icon: 'Scan',
    tags: ['Kamera', 'Real', '3D Qatlam', 'Smart Glass'],
    shortDesc: {
      uz: 'Haqiqiy dunyo tasviri ustiga raqamli 3D obyektlar va ma’lumotlarni joylashtiruvchi texnologiya.',
      ru: 'Технология наложения цифровых объектов и данных поверх реального окружающего мира.',
      en: 'Technology that overlays digital interactive elements onto the real-world view.'
    },
    history: {
      uz: '1990-yillarda harbiy samolyotlar oynasidagi HUD ekranlardan boshlangan. 2016-yilda Pokémon GO o‘yini orqali butun dunyoda mashhur bo‘ldi.',
      ru: 'Зародилась в военных дисплеях HUD. Массовую популярность приобрела благодаря Pokémon GO и маскам в соцсетях.',
      en: 'Stemmed from military head-up displays (HUD). Exploded into pop culture with Pokémon GO.'
    },
    howItWorks: {
      uz: 'Smartfon kamerasi va LiDAR sensorlari xonaning yuzasi (pol, devor)ni skanerlaydi (SLAM algoritmi) va virtual obyektni aniq burchakda qotirib qo‘yadi.',
      ru: 'Камера и датчики LiDAR сканируют пространство (алгоритмы SLAM) и фиксируют 3D модель на реальной поверхности.',
      en: 'Uses Simultaneous Localization and Mapping (SLAM) and spatial cameras to anchor virtual assets.'
    },
    advantages: [
      { uz: 'Haqiqiy dunyodan uzilmasdan qo‘shimcha ma’lumot olish', ru: 'Доступ к информации без отрыва от реальности', en: 'Enriches physical surroundings without isolating the user' }
    ],
    disadvantages: [
      { uz: 'Smartfon kamerasiga yuqori hisoblash yuki va qizib ketish', ru: 'Высокая нагрузка на аккумулятор и камеру', en: 'Heavy battery consumption and optical tracking limits' }
    ],
    whereUsed: [
      { uz: 'Mebel o‘lchash (IKEA Place), navigatsiya ko‘rsatkichlari, ta’mirlash qo‘llanmalari', ru: 'Примерка мебели, навигация, интерактивные инструкции', en: 'Retail visualization (IKEA), street navigation, surgical HUDs' }
    ],
    funFacts: [
      { uz: 'Jarrohlar murakkab operatsiyalarda bemorning ichki organlari joylashuvini AR ko‘zoynaklar orqali ko‘rib turadilar.', ru: 'Хирурги используют AR-очки, чтобы видеть расположение сосудов прямо сквозь ткани.', en: 'Surgeons utilize AR goggles to visualize 3D vascular scans aligned over the patient during operations.' }
    ]
  },
  {
    id: 'drone',
    name: 'Dron (UAV)',
    localizedName: { uz: 'Dron (UAV)', ru: 'Дрон (БПЛА)', en: 'Drone (UAV)' },
    category: 'hardware',
    icon: 'Plane',
    tags: ['Parvoz', 'Kvadrokopter', 'Avtonom', 'Kamera'],
    shortDesc: {
      uz: 'Masofadan boshqariladigan yoki dasturlashtirilgan avtonom uchuvchisiz uchish apparati.',
      ru: 'Беспилотный летательный аппарат, управляемый дистанционно или автономно по GPS.',
      en: 'An unmanned aerial vehicle operated remotely or via autonomous flight controllers.'
    },
    history: {
      uz: 'Birinchi harbiy dronlar XX asr boshlarida nishon sifatida sinovdan o‘tkazilgan. Li-Po batareyalar va giroskoplar paydo bo‘lishi bilan koker-kvadrokopterlar davri boshlandi.',
      ru: 'Ранние БПЛА создавались для военных целей. Развитие литиевых батарей сделало квадрокоптеры доступными каждому.',
      en: 'Began as target training aircraft. The invention of brushless motors and MEMS gyros enabled modern multi-rotors.'
    },
    howItWorks: {
      uz: 'To‘rtta (yoki undan ortiq) elektr motorlarning aylanish tezligini millisekundlarda o‘zgartirish orqali muvozanat va balandlikni boshqaradi.',
      ru: 'Контроллер балансирует дрон, меняя скорость вращения 4 электромоторов тысячи раз в секунду.',
      en: 'Flight controllers adjust motor speeds thousands of times per second based on gyro, barometer, and GPS data.'
    },
    advantages: [
      { uz: 'Inson borishi qiyin va xavfli joylarni havoda tekshirish', ru: 'Доступ к труднодоступным и опасным локациям с воздуха', en: 'Aerial access to dangerous or inaccessible terrain' }
    ],
    disadvantages: [
      { uz: 'Parvoz vaqtining o‘rtacha 20-40 daqiqalik cheklangani', ru: 'Ограниченное время полета (20-40 минут)', en: 'Short flight endurance restricted by battery energy density' }
    ],
    whereUsed: [
      { uz: 'Kinematografiya, qishloq xo‘jaligi ekinlarini dorilash, qidiruv-qutqaruv ishlari', ru: 'Киносъемка, сельское хозяйство, доставка, МЧС', en: 'Cinematography, precision agriculture, search-and-rescue, logistics' }
    ],
    funFacts: [
      { uz: 'Dronlar yordamida o‘rmon yong‘inlaridan keyin millionlab urug‘lar havoda tezkorlik bilan ekiladi!', ru: 'Дроны способны высаживать миллионы семян для восстановления лесов после пожаров!', en: 'Specialized reforestation drones fire biodegradable seed pods to replant deforested areas rapidly.' }
    ]
  },
  {
    id: 'robot',
    name: 'Robot',
    localizedName: { uz: 'Robot', ru: 'Робот', en: 'Robot' },
    category: 'hardware',
    icon: 'Bot',
    tags: ['Avtomatika', 'Mexanika', 'Sanoat', 'Sensor'],
    shortDesc: {
      uz: 'Inson buyrug‘i yoki sun’iy intellekt asosida mexanik harakatlarni bajaruvchi avtonom qurilma.',
      ru: 'Автоматическое устройство, действующее по программе и выполняющее механические задачи.',
      en: 'An automated electromechanical system executing programmed tasks or autonomous actions.'
    },
    history: {
      uz: '“Robot” so‘zini 1920-yilda chex yozuvchisi Karel Chapek kiritgan. 1961-yilda General Motors zavodida birinchi Unimate sanoat roboti ishga tushdi.',
      ru: 'Слово "робот" придумал Карел Чапек в 1920 году. Первый промышленный робот Unimate заработал в GM в 1961 г.',
      en: 'Karel Čapek coined the term in 1920. George Devol’s Unimate was installed at General Motors in 1961.'
    },
    howItWorks: {
      uz: 'Sensorlar atrof-muhitni o‘qiydi, boshqaruvchi kompyuter qaror qabul qiladi va aktuatorlar (servomotorlar) harakatni hosil qiladi.',
      ru: 'Датчики собирают информацию, процессор рассчитывает алгоритм, а сервоприводы приводят манипуляторы в движение.',
      en: 'Sensors feed environmental data to microprocessors, which compute trajectories and drive actuators.'
    },
    advantages: [
      { uz: 'Charchamaydi, xato qilmaydi va xavfli sharoitlarda ishlaydi', ru: 'Работа в опасных условиях 24/7 без усталости и ошибок', en: 'Tireless 24/7 precision in hazardous environments' }
    ],
    disadvantages: [
      { uz: 'Qimmat narx va dasturlashda yuqori malaka talabi', ru: 'Высокая стоимость оборудования и сложность обслуживания', en: 'High capital expenditure and sophisticated maintenance demands' }
    ],
    whereUsed: [
      { uz: 'Avtomobil zavodlari, jarrohlik (Da Vinci), omborlar (Amazon), uylar (robot-changyutgich)', ru: 'Автопром, хирургия Da Vinci, логистика, умный дом', en: 'Automotive factories, robotic surgery (Da Vinci), logistics, home vacuums' }
    ],
    funFacts: [
      { uz: 'Robot-changyutgichlar dunyodagi eng ko‘p sotilgan va keng tarqalgan uy robotlaridir!', ru: 'Роботы-пылесосы — самые массовые домашние сервисные роботы в истории человечества!', en: 'Robotic vacuum cleaners are the most widely deployed consumer robots in human history.' }
    ]
  },
  {
    id: 'electric-car',
    name: 'Elektr avtomobil',
    localizedName: { uz: 'Elektr avtomobil', ru: 'Электромобиль', en: 'Electric Vehicle (EV)' },
    category: 'future',
    icon: 'Zap',
    tags: ['EV', 'Batareya', 'Ekologiya', 'Tesla'],
    shortDesc: {
      uz: 'Ichki yonuv dvigateli o‘rniga elektr motori va qayta zaryadlanuvchi akkumulyatorda harakatlanuvchi transport vositasi.',
      ru: 'Транспортное средство, приводимое в движение электромотором от аккумулятора.',
      en: 'A vehicle propelled by electric motors powered by rechargeable lithium-ion battery packs.'
    },
    history: {
      uz: 'Elektr mashinalari XIX asr oxiridayoq paydo bo‘lgan, ammo benzin arzonlashib vaqtinchalik unutilgan. XXI asrda Tesla va batareya inqilobi uni qayta tikladi.',
      ru: 'Электрокары появились еще в конце XIX века. В XXI веке Tesla вернула им мировую популярность благодаря литиевым батареям.',
      en: 'Electric cars predate gasoline vehicles, but battery breakthroughs and Tesla revitalized them in the 2010s.'
    },
    howItWorks: {
      uz: 'Yuqori kuchlanishli akkumulyator (400V/800V) invertor orqali elektr motoriga tok beradi. Tormozlanganda rekuperatsiya orqali batareya qayta zaryadlanadi.',
      ru: 'Инвертор преобразует постоянный ток батареи в переменный для мотора. При торможении рекуперация возвращает энергию.',
      en: 'An inverter converts DC battery power to AC for synchronous motors; regenerative braking recovers kinetic energy.'
    },
    advantages: [
      { uz: 'Zaharli gazlar chiqarmaydi va shovqinsiz harakatlanadi', ru: 'Нулевой уровень выхлопных газов и тихий ход', en: 'Zero local emissions and quiet, instant torque acceleration' }
    ],
    disadvantages: [
      { uz: 'Zaryadlash vaqti va zaryadlash stansiyalari infratuzilmasi', ru: 'Время зарядки и зависимость от зарядной инфраструктуры', en: 'Recharging times and public charger network availability' }
    ],
    whereUsed: [
      { uz: 'Shahar transporti, taksi, jamoat avtobuslari, shaxsiy safarlar', ru: 'Городской транспорт, такси, электробусы, междугородние поездки', en: 'Passenger cars, urban taxi fleets, electric transit buses' }
    ],
    funFacts: [
      { uz: 'Elektr dvigatelining samaradorligi 90% dan yuqori, benzinli dvigatelda esa bor-yo‘g‘i 25-30%!', ru: 'КПД электромотора превышает 90%, тогда как у бензинового ДВС едва достигает 30%!', en: 'Electric motors achieve over 90% energy efficiency, compared to just ~25-30% for internal combustion engines.' }
    ]
  },
  {
    id: 'iot',
    name: 'IoT (Internet of Things)',
    localizedName: { uz: 'IoT (Narsalar Interneti)', ru: 'IoT (Интернет вещей)', en: 'IoT (Internet of Things)' },
    category: 'digital',
    icon: 'Radio',
    tags: ['Smart Home', 'Sensor', 'Tarmoq', 'Avtomatika'],
    shortDesc: {
      uz: 'Turli qurilmalarning internet orqali o‘zaro ma’lumot almashishi va inson aralashuvisiz ishlashi tizimi.',
      ru: 'Концепция сети физических устройств, собирающих и передающих данные без участия человека.',
      en: 'A network of physical objects embedded with sensors and connectivity exchanging data autonomously.'
    },
    history: {
      uz: '1999-yilda Kevin Eshton birinchi bor "Internet of Things" atamasini RFID teglari orqali ishlab chiqarishni nazorat qilishda qo‘llagan.',
      ru: 'Термин ввел Кевин Эштон в 1999 году, предложив объединить метки RFID в единую цепочку поставок.',
      en: 'Kevin Ashton coined the phrase in 1999 while researching RFID-enabled supply chains at Procter & Gamble.'
    },
    howItWorks: {
      uz: 'Harorat, bosim va harakat datchiklari ma’lumotni Wi-Fi/Zigbee orqali bulutli serverga yuboradi, server esa masalan xona isitishini avtomatik yoqadi.',
      ru: 'Микроконтроллеры передают показания датчиков по Wi-Fi/Zigbee на сервер, который запускает сценарии автоматизации.',
      en: 'Low-power sensors stream environmental telemetry via protocols like MQTT/Zigbee to cloud analytics platforms.'
    },
    advantages: [
      { uz: 'Aqlli uy, energiya tejamkorligi va qulaylik', ru: 'Умный дом, энергосбережение и автоматический комфорт', en: 'Automated smart homes, predictive maintenance, and energy savings' }
    ],
    disadvantages: [
      { uz: 'Kiberxavfsizlik zaifliklari (hackerlar tomonidan aqlli kameralarni buzish xavfi)', ru: 'Уязвимость дешевых устройств к взломам и ботнетам', en: 'Cybersecurity vulnerabilities in resource-constrained connected gadgets' }
    ],
    whereUsed: [
      { uz: 'Aqlli uylar (konditsioner, chiroqlar), aqlli fermalar, tibbiy monitorlar', ru: 'Умный дом, смарт-фермы, медицинские датчики, логистика', en: 'Smart thermostats, industrial telemetry, smart agriculture, utilities' }
    ],
    funFacts: [
      { uz: 'Bugungi kunda Yer yuzidagi IoT qurilmalari soni insonlar sonidan deyarli 3 barobar ko‘p!', ru: 'Количество активных устройств IoT на планете уже превысило число людей более чем в три раза!', en: 'Active connected IoT endpoints globally now outnumber the human population more than three to one!' }
    ]
  },
  {
    id: 'cloud-computing',
    name: 'Cloud Computing',
    localizedName: { uz: 'Cloud Computing (Bulutli hisoblash)', ru: 'Cloud Computing (Облачные вычисления)', en: 'Cloud Computing' },
    category: 'digital',
    icon: 'Cloud',
    tags: ['Server', 'AWS', 'Google Cloud', 'Xotira'],
    shortDesc: {
      uz: 'Hisoblash quvvati, serverlar va xotirani internet orqali masofadan xizmat sifatida taqdim etish.',
      ru: 'Предоставление серверов, хранилищ и баз данных по требованию через интернет.',
      en: 'On-demand delivery of computing power, databases, and storage via the internet.'
    },
    history: {
      uz: '2006-yilda Amazon Web Services (AWS) kompaniyasi S3 va EC2 xizmatlarini ishga tushirishi bilan bulutli inqilob yuz berdi.',
      ru: 'В 2006 году запуск сервисов Amazon Web Services (AWS) создал индустрию современных облачных вычислений.',
      en: 'AWS launched S3 and EC2 in 2006, creating the modern hyperscale cloud computing ecosystem.'
    },
    howItWorks: {
      uz: 'Dunyo bo‘ylab ulkan ma’lumotlar markazlaridagi (Data Center) minglab serverlar virtualizatsiya orqali birlashtiriladi va kerakli quvvat ajratiladi.',
      ru: 'Тысячи серверов в дата-центрах объединяются виртуализацией, динамически распределяя нагрузку.',
      en: 'Datacenter clusters pool hardware via hypervisors and orchestrators like Kubernetes to scale resources dynamically.'
    },
    advantages: [
      { uz: 'Qimmatbaho server sotib olish o‘rniga faqat ishlatilgan vaqt uchun to‘lash', ru: 'Экономия: оплата только за реально потребленные ресурсы', en: 'Pay-as-you-go pricing without upfront server hardware purchases' }
    ],
    disadvantages: [
      { uz: 'Internet uzilsa, bulutdagi barcha ma’lumotlarga kirish to‘xtaydi', ru: 'Полная зависимость от стабильности интернет-соединения', en: 'Inability to access remote services during severe network outages' }
    ],
    whereUsed: [
      { uz: 'Google Drive, Netflix strimingi, veb-saytlar, sun’iy intellekt modellarini o‘qitish', ru: 'Google Drive, стриминг Netflix, хостинг сайтов, обучение ИИ', en: 'Streaming platforms (Netflix), cloud storage, SaaS, AI model training' }
    ],
    funFacts: [
      { uz: 'Dunyodagi eng katta bulut ma’lumotlar markazlari millionlab litr suv bilan sovitiladi yoki okean tubiga joylashtiriladi!', ru: 'Некоторые дата-центры охлаждаются в океанских глубинах для экономии электричества!', en: 'Underwater datacenters submerged in the ocean leverage natural seawater cooling to save massive energy.' }
    ]
  },
  {
    id: 'blockchain',
    name: 'Blockchain',
    localizedName: { uz: 'Blockchain', ru: 'Блокчейн', en: 'Blockchain' },
    category: 'future',
    icon: 'Layers',
    tags: ['Kripto', 'Xavfsizlik', 'Decentralized', 'Smart Contract'],
    shortDesc: {
      uz: 'Ma’lumotlarni markaziy boshqaruvchisiz, zanjirband bloklarda o‘zgartirib bo‘lmas qilib saqlovchi taqsimlangan reyestr.',
      ru: 'Децентрализованная распределенная база данных неизменяемых блоков информации.',
      en: 'A decentralized, cryptographically linked distributed ledger for tamper-proof recordkeeping.'
    },
    history: {
      uz: '2008-yilda anonim dasturchi Satoshi Nakamoto tomonidan Bitcoin konsepsiyasi e’lon qilinishi bilan paydo bo‘ldi.',
      ru: 'Концепция была опубликована Сатоши Накамото в 2008 году в описании криптовалюты Bitcoin.',
      en: 'Introduced by the pseudonymous Satoshi Nakamoto in 2008 within the Bitcoin whitepaper.'
    },
    howItWorks: {
      uz: 'Har bir yangi blok oldingi blokning kriptografik xesh-kodini saqlaydi. Barcha tugunlar (node) konsensus (masalan, Proof of Work yoki Stake) orqali ma’lumotni tasdiqlaydi.',
      ru: 'Каждый блок содержит криптографический хеш предыдущего. Сеть подтверждает записи консенсусом.',
      en: 'Each block embeds the cryptographic hash of the preceding block; nodes validate transactions via consensus algorithms.'
    },
    advantages: [
      { uz: 'Ma’lumotlarni soxtalashtirish yoki o‘chirib tashlash imkonsizligi', ru: 'Невозможность подделки и удаления внесенных записей', en: 'Immutability, cryptographic transparency, and no single point of failure' }
    ],
    disadvantages: [
      { uz: 'Tranzaksiyalarning nisbatan sekinligi va yuqori energiya sarfi (ba’zi turlarida)', ru: 'Высокое энергопотребление и ограниченная скорость транзакций', en: 'Transaction throughput bottlenecks and computational energy consumption' }
    ],
    whereUsed: [
      { uz: 'Kriptovalyutalar, aqlli shartnomalar (Smart Contracts), ta’minot zanjirlari, mulk huquqini ro‘yxatga olish', ru: 'Криптовалюты, смарт-контракты, реестры недвижимости, логистика', en: 'Cryptocurrency, smart contracts, supply chain provenance, digital notarization' }
    ],
    funFacts: [
      { uz: 'Blockchain ma’lumotini o‘zgartirish uchun butun dunyodagi minglab serverlarning 51% quvvatini bir vaqtda egallash kerak bo‘ladi!', ru: 'Чтобы подделать блокчейн, злоумышленнику потребуется захватить более 51% мощностей сети!', en: 'Tampering with established blockchains requires capturing more than 51% of global network hash power.' }
    ]
  },
  {
    id: '5g',
    name: '5G',
    localizedName: { uz: '5G Aloqa', ru: '5G Связь', en: '5G Cellular' },
    category: 'network',
    icon: 'Wifi',
    tags: ['Mobil Aloqa', 'Tezlik', 'Gigabit', 'Pastroq Latency'],
    shortDesc: {
      uz: 'Sekundiga 10-20 Gigabit tezlik va 1 millisekundlik kechikishni ta’minlovchi 5-avlod mobil aloqa standarti.',
      ru: 'Пятое поколение мобильной связи со скоростями до 20 Гбит/с и задержкой около 1 мс.',
      en: 'Fifth-generation wireless technology delivering multi-gigabit speeds and ultra-low latency.'
    },
    history: {
      uz: '2019-yilda Janubiy Koreya va AQShda ilk tijoriy 5G tarmoqlari yoqildi. U 4G LTE texnologiyasining o‘rnini bosmoqda.',
      ru: 'Первые коммерческие сети 5G были развернуты в 2019 году в Южной Корее и США.',
      en: 'First commercial deployments began in 2019, succeeding 4G LTE networks worldwide.'
    },
    howItWorks: {
      uz: 'Millimetrli to‘lqinlar (mmWave) va Massive MIMO antenna texnologiyasidan foydalanib, bitta hududda millionlab qurilmalarni bir vaqtda ulaydi.',
      ru: 'Использует миллиметровые диапазоны частот, технологии Massive MIMO и направленного луча (Beamforming).',
      en: 'Utilizes high-frequency millimeter waves, beamforming, and Massive MIMO antenna arrays.'
    },
    advantages: [
      { uz: '4G dan 20-50 barobar yuqori yuklash tezligi va nolga yaqin kechikish', ru: 'Скорость в десятки раз выше 4G и минимальный пинг', en: '20x-50x faster peak speeds than 4G and sub-millisecond response times' }
    ],
    disadvantages: [
      { uz: 'To‘lqinlar devorlardan qiyin o‘tgani sababli juda ko‘p baza stansiyalari kerak', ru: 'Слабое прохождение сигнала через стены, требуется много вышек', en: 'Shorter range requiring dense base-station infrastructure' }
    ],
    whereUsed: [
      { uz: 'Haydovchisiz mashinalar, masofaviy jarrohlik, bulutli o‘yinlar, aqlli shaharlar', ru: 'Беспилотный транспорт, телемедицина, облачный гейминг', en: 'Autonomous vehicles, telemedicine, cloud VR gaming, smart city grids' }
    ],
    funFacts: [
      { uz: '5G tarmog‘ida butun boshli ikki soatlik 4K filmni atigi 4-6 soniyada yuklab olish mumkin!', ru: 'В сети 5G двухчасовой фильм в 4K можно загрузить всего за 4-6 секунд!', en: 'A full two-hour 4K movie can be downloaded over 5G in as little as 4 to 6 seconds!' }
    ]
  },
  {
    id: 'wifi',
    name: 'Wi-Fi',
    localizedName: { uz: 'Wi-Fi', ru: 'Wi-Fi', en: 'Wi-Fi' },
    category: 'network',
    icon: 'Wifi',
    tags: ['Simsiz', 'Router', 'IEEE 802.11', 'Lokal'],
    shortDesc: {
      uz: 'Radioto‘lqinlar orqali qurilmalarni simsiz lokal tarmoq va internetga bog‘lovchi texnologiya.',
      ru: 'Технология беспроводной локальной передачи данных по радиоканалам.',
      en: 'Wireless networking protocol connecting devices to local networks and the internet via radio waves.'
    },
    history: {
      uz: '1997-yilda 802.11 standarti qabul qilingan. Avstraliyalik radioastronom Jon O‘Sallivan tadqiqotlari Wi-Fi asosiga aylangan.',
      ru: 'Стандарт 802.11 утвержден в 1997 году. Физик Джон О’Салливан заложил математику фильтрации радиосигнала.',
      en: 'IEEE 802.11 standards debuted in 1997, building on radio astronomy fast-Fourier research by John O’Sullivan.'
    },
    howItWorks: {
      uz: 'Router 2.4 GGs, 5 GGs va 6 GGs (Wi-Fi 6E/7) chastotalarda radio signallarni yuboradi, noutbuk yoki telefon antennasi uni qabul qiladi.',
      ru: 'Роутер модулирует радиоволны на частотах 2.4, 5 и 6 ГГц, а чип в гаджете преобразует их в цифровые пакеты.',
      en: 'Routers modulate radio frequencies (2.4 GHz, 5 GHz, 6 GHz in Wi-Fi 6E/7) into high-bandwidth IP packets.'
    },
    advantages: [
      { uz: 'Simsiz erkinlik va bitta nuqtadan o‘nlab qurilmalarni ulash', ru: 'Удобство без проводов и одновременное подключение десятков устройств', en: 'Tangle-free mobility and multiple concurrent connections' }
    ],
    disadvantages: [
      { uz: 'Devorlar va masofa oshishi bilan signal pasayishi', ru: 'Ослабление сигнала через толстые стены и помехи', en: 'Signal degradation through solid obstacles and RF interference' }
    ],
    whereUsed: [
      { uz: 'Uylar, ofislar, qahvaxonalar, aeroportlar', ru: 'Квартиры, офисы, кафе, отели, аэропорты', en: 'Homes, offices, universities, public hotspots' }
    ],
    funFacts: [
      { uz: 'Gollivud yulduzi va ixtirochi Xedi Lamarr Ikkinchi jahon urushida chastotalarni sakrash texnologiyasini yaratgan, bu Wi-Fi va Bluetooth asosiga aylangan!', ru: 'Актриса Хеди Ламарр запатентовала технологию прыгающих частот, ставшую базисом для Wi-Fi!', en: 'Hollywood actress Hedy Lamarr co-invented frequency-hopping spread spectrum, the foundational core of Wi-Fi!' }
    ]
  },
  {
    id: 'bluetooth',
    name: 'Bluetooth',
    localizedName: { uz: 'Bluetooth', ru: 'Bluetooth', en: 'Bluetooth' },
    category: 'network',
    icon: 'Bluetooth',
    tags: ['Simsiz Quloqchin', 'Qisqa Masofa', '2.4GHz', 'BLE'],
    shortDesc: {
      uz: '10-100 metr masofada qurilmalarni kam energiya sarfi bilan simsiz bog‘lovchi qisqa to‘lqinli texnologiya.',
      ru: 'Беспроводная технология связи малого радиуса действия с низким энергопотреблением.',
      en: 'A short-range wireless standard designed for low-power peer-to-peer device communication.'
    },
    history: {
      uz: '1994-yilda Ericsson kompaniyasi muhandislari tomonidan kabellarni yo‘qotish maqsadida yaratilgan. Viking qiroli Garald Ko‘ktish sharafiga nomlangan.',
      ru: 'Создан компанией Ericsson в 1994 году. Назван в честь датского короля викингов Харальда Синезубого.',
      en: 'Engineered in 1994 by Ericsson to replace RS-232 cables, named after 10th-century Viking king Harald Bluetooth.'
    },
    howItWorks: {
      uz: '2.4 GGs diapazonida chastotani soniyasiga 1600 marta o‘zgartirib (FHSS), boshqa signallar bilan to‘qnashuvsiz ma’lumot uzatadi.',
      ru: 'Использует скачкообразную перестройку частоты (1600 скачков в секунду) для защиты от помех.',
      en: 'Leverages Frequency-Hopping Spread Spectrum (FHSS) hopping 1600 times a second across the 2.4 GHz band.'
    },
    advantages: [
      { uz: 'Juda kam elektr quvvati sarflaydi (BLE standarti yillar davomida batareyada ishlaydi)', ru: 'Минимальное энергопотребление и быстрое сопряжение', en: 'Ultra-low battery drain (BLE allows coin-cell sensors to run for years)' }
    ],
    disadvantages: [
      { uz: 'Masofasi chegaralangan va katta fayllar uzatish uchun tezligi past', ru: 'Ограниченный радиус действия и невысокая скорость передачи данных', en: 'Shorter range and lower throughput than Wi-Fi for heavy video transfers' }
    ],
    whereUsed: [
      { uz: 'Simsiz quloqchinlar, sichqoncha va klaviaturalar, avtomobil hands-free tizimi', ru: 'Наушники, беспроводные мыши, автоакустика, фитнес-браслеты', en: 'Wireless earbuds, mice/keyboards, hands-free automotive systems, beacons' }
    ],
    funFacts: [
      { uz: 'Bluetooth logotipi qadimgi skandinav runalari “H” (Hagall) va “B” (Bjarkan) birlashmasidan kelib chiqqan!', ru: 'Логотип Bluetooth объединяет две скандинавские руны: Хагалл (H) и Бьяркан (B)!', en: 'The famous Bluetooth icon is a bindrune combining the Younger Futhark runes for Harald Bluetooth’s initials (H and B)!' }
    ]
  }
];

const techImages: Record<string, string> = {
  computer: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&auto=format&fit=crop&q=80',
  smartphone: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop&q=80',
  internet: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=80',
  ai: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&auto=format&fit=crop&q=80',
  robotics: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&auto=format&fit=crop&q=80',
  cloud: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&auto=format&fit=crop&q=80',
  cybersecurity: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&auto=format&fit=crop&q=80',
  blockchain: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&auto=format&fit=crop&q=80',
  quantum: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&auto=format&fit=crop&q=80',
  fiveg: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&auto=format&fit=crop&q=80',
  iot: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=600&auto=format&fit=crop&q=80',
  vr_ar: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=600&auto=format&fit=crop&q=80',
  three_d_print: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&auto=format&fit=crop&q=80',
  ev: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=600&auto=format&fit=crop&q=80',
  biotech: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=600&auto=format&fit=crop&q=80',
  nanotech: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?w=600&auto=format&fit=crop&q=80',
  bluetooth: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80',
};

technologiesData.forEach((item) => {
  item.title = item.name;
  item.image = techImages[item.id] || 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=80';
  item.useCases = item.whereUsed || [];
  item.pros = item.advantages || [];
  item.cons = item.disadvantages || [];
  item.funFact = (item.funFacts && item.funFacts.length > 0) 
    ? item.funFacts[0] 
    : { uz: 'Eng ilg‘or texnologiyalardan biri.', ru: 'Одна из передовых технологий.', en: 'One of the breakthrough technologies.' };
});
