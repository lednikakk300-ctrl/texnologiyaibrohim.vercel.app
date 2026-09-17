import { ComputerPart } from '../types';

export const computerPartsData: ComputerPart[] = [
  {
    id: 'cpu',
    name: 'CPU (Markaziy Protsessor)',
    icon: 'Cpu',
    what: {
      uz: 'Kompyuterning asosiy "miyasi" bo‘lib, barcha hisob-kitoblar va mantiqiy amallarni bajaruvchi asosiy yarimo‘tkazgichli mikrosxema.',
      ru: 'Главный вычислительный «мозг» компьютера, исполняющий машинные команды программ.',
      en: 'The primary central processor or "brain" executing program instructions and logic.'
    },
    role: {
      uz: 'Dasturlarning kodini o‘qish, arifmetik hisob-kitoblarni amalga oshirish va barcha boshqa kompyuter komponentlariga buyruqlar berish.',
      ru: 'Выполнение арифметических и логических операций, координация работы всех узлов ПК.',
      en: 'Executing instructions, performing arithmetic/logic calculations, and managing hardware coordination.'
    },
    howItWorks: {
      uz: 'Takt chastotasida (masalan, 4-5 Gigagerts) "Fetch-Decode-Execute" siklini bajaradi: xotiradan kodni oladi, tushunadi va tranzistorlar yordamida hisoblab natija qaytaradi.',
      ru: 'Работает по циклу «выборка-декодирование-исполнение» на частоте в миллиарды тактов в секунду.',
      en: 'Runs billions of cycles per second using the Fetch-Decode-Execute pipeline across microscopic silicon transistors.'
    },
    funFact: {
      uz: 'Zamonaviy eng yangi protsessorda inson tirnog‘idek o‘lchamda 50 milliarddan ortiq mikroskopik tranzistorlar joylashgan!',
      ru: 'В современном чипе размером с ноготь упаковано свыше 50 миллиардов транзисторов!',
      en: 'A modern flagship CPU packs over 50 billion nanometer-scale transistors onto a sliver of silicon smaller than a postage stamp!'
    },
    specs: [
      { uz: 'Yadro va oqimlar: 8-24 yadro', ru: 'Ядра и потоки: 8-24 ядра', en: 'Cores & Threads: 8-24 cores' },
      { uz: 'Chastota: 3.5 - 5.8 GGs', ru: 'Частота: 3.5 - 5.8 ГГц', en: 'Clock Speed: 3.5 - 5.8 GHz' }
    ]
  },
  {
    id: 'gpu',
    name: 'GPU (Video Karta / Grafik Protsessor)',
    icon: 'Tv',
    what: {
      uz: 'Tasvirlar, 3D modellar, o‘yinlar va sun’iy intellekt matrisalarini parallel hisoblashga mo‘ljallangan maxsus grafik protsessor.',
      ru: 'Специализированный графический процессор для рендеринга 3D-графики, видео и задач ИИ.',
      en: 'A specialized processor optimized for parallel rendering of 3D graphics, games, and neural networks.'
    },
    role: {
      uz: 'Ekranga millionlab piksellarni soniyasiga 60-240 marta chiqarish va neyron tarmoqlar matritsali hisoblarini o‘ta tez parallel bajarish.',
      ru: 'Отрисовка миллионов пикселей на дисплее в секунду и высокопараллельные вычисления для AI.',
      en: 'Rasterizing and ray-tracing millions of screen pixels alongside high-throughput tensor math for AI.'
    },
    howItWorks: {
      uz: 'CPU-da 8-16 ta kuchli yadro bo‘lsa, GPU-da bir vaqtning o‘zida ishlaydigan minglab kichik hisoblash yadrolari (CUDA / Stream Core) mavjud.',
      ru: 'Содержит тысячи параллельных ядер (CUDA), способных одновременно вычислять векторы и шейдеры.',
      en: 'Employs thousands of streamlined arithmetic cores working concurrently to process geometric polygons.'
    },
    funFact: {
      uz: 'Eng zamonaviy sun’iy intellekt modellari (ChatGPT, Gemini) aynan minglab GPU klasterlari yordamida o‘qitiladi!',
      ru: 'Все передовые модели искусственного интеллекта обучаются на гигантских кластерах из тысяч GPU!',
      en: 'Frontier AI models like ChatGPT and Gemini are trained across clusters of tens of thousands of GPUs!'
    },
    specs: [
      { uz: 'VRAM: 8GB - 24GB GDDR6X', ru: 'Видеопамять: 8GB - 24GB GDDR6X', en: 'VRAM: 8GB - 24GB GDDR6X' },
      { uz: 'Yadrolar: 10,000+ CUDA yadrolari', ru: 'Ядра: 10,000+ CUDA ядер', en: 'Cores: 10,000+ parallel cores' }
    ]
  },
  {
    id: 'ram',
    name: 'RAM (Operativ Xotira)',
    icon: 'Layers',
    what: {
      uz: 'Kompyuter ishlayotgan paytda faol dasturlar va ochiq ilovalarning ma’lumotlarini saqlovchi o‘ta tezkor vaqtinchalik xotira.',
      ru: 'Сверхбыстрая энергозависимая память для временного хранения данных запущенных программ.',
      en: 'High-speed volatile system memory storing active programs and runtime variables.'
    },
    role: {
      uz: 'Protsessorga kerakli ma’lumotlarni sekin doimiy diskdan (SSD/HDD) emas, nanosekundlar ichida yetkazib berish.',
      ru: 'Предоставление процессору сверхбыстрого доступа к выполняемому коду и активным данным.',
      en: 'Feeding data to the CPU at nanosecond latencies, orders of magnitude faster than persistent drives.'
    },
    howItWorks: {
      uz: 'Millionlab mikroskopik kondensator va tranzistorlardan iborat. Kondensatorda zaryad borligi 1, yo‘qligi 0 hisoblanadi. Doimiy yangilanib turishi kerak.',
      ru: 'Хранит биты в виде электрического заряда в миллионах конденсаторов, требующих постоянного обновления.',
      en: 'Stores bits as electrical charges inside capacitor-transistor pairs refreshed thousands of times per second.'
    },
    funFact: {
      uz: 'Kompyuter o‘chirilganda yoki tok uzilganda RAM-dagi barcha ma’lumotlar bir zumda butunlay o‘chib ketadi!',
      ru: 'При отключении питания все данные в оперативной памяти мгновенно бесследно исчезают!',
      en: 'RAM is volatile: the exact millisecond power cuts off, every single byte stored inside disappears completely!'
    },
    specs: [
      { uz: 'Standart: DDR4 / DDR5', ru: 'Стандарт: DDR4 / DDR5', en: 'Standard: DDR4 / DDR5' },
      { uz: 'Tezlik: 3200 - 6400 MT/s', ru: 'Скорость: 3200 - 6400 MT/s', en: 'Throughput: 3200 - 6400 MT/s' }
    ]
  },
  {
    id: 'ssd',
    name: 'SSD (Qattiq Jism Xotirasi)',
    icon: 'HardDrive',
    what: {
      uz: 'Harakatsiz flesh-chiplarga asoslangan, operatsion tizim, o‘yinlar va fayllarni doimiy saqlovchi zamonaviy o‘ta tez disk.',
      ru: 'Твердотельный накопитель на микросхемах флеш-памяти без подвижных механических частей.',
      en: 'A solid-state flash storage drive with no moving parts for high-speed persistent file storage.'
    },
    role: {
      uz: 'Kompyuter tizimini 5-10 soniyada yuklash, fayllarni tez ko‘chirish va ilovalarni bir zumda ochish.',
      ru: 'Мгновенная загрузка операционной системы, тяжелых игр и программ.',
      en: 'Booting operating systems in seconds and loading vast game environments seamlessly.'
    },
    howItWorks: {
      uz: 'NAND flash xotira katakchalarida elektr zaryadini ushlab turuvchi "suzuvchi zatvor" (floating gate) orqali tok bo‘lmaganda ham ma’lumotni saqlaydi.',
      ru: 'Записывает биты изменением электрического заряда в ячейках 3D NAND флеш-памяти.',
      en: 'Traps electrons in floating-gate or charge-trap transistors inside multi-layered 3D NAND cells.'
    },
    funFact: {
      uz: 'Eng yangi PCIe 5.0 NVMe SSD disklari sekundiga 14 000 Megabayt (14 Gigabayt) tezlikda ma’lumot o‘qiy oladi!',
      ru: 'Скорость современных NVMe SSD достигает невероятных 14 гигабайт в секунду!',
      en: 'Cutting-edge PCIe 5.0 NVMe SSDs read data at blistering speeds exceeding 14,000 MB (14 GB) per second!'
    },
    specs: [
      { uz: 'Format: M.2 NVMe / 2.5 SATA', ru: 'Форм-фактор: M.2 NVMe / 2.5 SATA', en: 'Form factor: M.2 NVMe / 2.5 SATA' },
      { uz: 'Tezlik: 3500 - 14000 MB/s', ru: 'Скорость: 3500 - 14000 МБ/с', en: 'Speed: 3500 - 14000 MB/s' }
    ]
  },
  {
    id: 'hdd',
    name: 'HDD (Qattiq Magnit Disk)',
    icon: 'Disc',
    what: {
      uz: 'Aylanuvchi magnit plastinkalar va harakatlanuvchi o‘qish kallagiga ega bo‘lgan an’anaviy mexanik xotira qurilmasi.',
      ru: 'Традиционный механический жесткий диск с вращающимися магнитными пластинами.',
      en: 'A traditional electro-mechanical storage drive using spinning magnetic platters.'
    },
    role: {
      uz: 'Katta hajmdagi arxiv ma’lumotlar, kinolar, zaxira nusxalar (backup) va videolarni arzon narxda uzoq yillar saqlash.',
      ru: 'Экономичное долговременное хранение гигантских архивов данных, резервных копий и медиа.',
      en: 'Providing vast, cost-effective storage capacity for cold archives, backups, and media libraries.'
    },
    howItWorks: {
      uz: 'Disklar daqiqasiga 5400 yoki 7200 marta aylanadi, nozik magnit igna esa sirtga magnit qutblar orqali 0 va 1 larni yozadi va o‘qiydi.',
      ru: 'Шпиндель раскручивает пластины до 7200 об/мин, а головка намагничивает микросектора дорожек.',
      en: 'Platters spin at 5400 to 7200 RPM while microscopic magnetic read/write heads float nanometers above.'
    },
    funFact: {
      uz: '1956-yildagi birinchi IBM HDD diski 5 Megabayt hajmga ega bo‘lib, ikkita katta muzlatgich o‘lchamida edi!',
      ru: 'Первый жесткий диск IBM 1956 года вмещал всего 5 МБ и был размером с два больших холодильника!',
      en: 'The first commercial hard drive in 1956 held just 5 MB of data and had the footprint of two refrigerators!'
    },
    specs: [
      { uz: 'Aylanish tezligi: 5400 - 7200 RPM', ru: 'Скорость вращения: 5400 - 7200 об/мин', en: 'Rotational speed: 5400 - 7200 RPM' },
      { uz: 'Hajm: 1TB - 24TB', ru: 'Объем: 1ТБ - 24ТБ', en: 'Capacity: 1TB - 24TB' }
    ]
  },
  {
    id: 'motherboard',
    name: 'Ona Plata (Motherboard)',
    icon: 'Cpu',
    what: {
      uz: 'Kompyuterning barcha qismlarini (CPU, RAM, GPU, SSD, quvvat bloki) o‘zaro elektr va axborot shinalari orqali bog‘lovchi asosiy plata.',
      ru: 'Главная системная плата, физически и логически объединяющая все компоненты ПК.',
      en: 'The central printed circuit board interconnecting all internal computing hardware components.'
    },
    role: {
      uz: 'Protsessor, xotira va videokarta o‘rtasida gigabaytlab ma’lumotlarni o‘ta yuqori tezlikdagi shinalar (PCIe, SATA) orqali uzatish.',
      ru: 'Обеспечение электрического питания, синхронизации и высокоскоростной передачи данных по шинам.',
      en: 'Distributing clean regulated power and routing high-frequency signals across PCB bus traces.'
    },
    howItWorks: {
      uz: 'Ko‘p qatlamli (8-12 qatlamli) tekstolit plastina ichidagi minglab mis o‘tkazgich yo‘llar, chipset va VRM (kuchlanish regulyatori) orqali boshqaradi.',
      ru: 'Многослойный текстолит с медными дорожками управляется чипсетом и BIOS/UEFI.',
      en: 'Uses multi-layered printed copper traces, controller chipsets, and UEFI firmware to synchronize hardware.'
    },
    funFact: {
      uz: 'Ona platadagi mikroskopik mis o‘tkazgichlarning umumiy uzunligi bir necha kilometrga yetishi mumkin!',
      ru: 'Общая длина медных проводников на сложной материнской плате может достигать нескольких километров!',
      en: 'If unraveled, the total copper trace wiring on an enthusiast motherboard can stretch several kilometers!'
    },
    specs: [
      { uz: 'Format: ATX, Micro-ATX, Mini-ITX', ru: 'Форм-фактор: ATX, Micro-ATX, Mini-ITX', en: 'Form factor: ATX, Micro-ATX, Mini-ITX' },
      { uz: 'Soket: LGA1700, AM5', ru: 'Сокет: LGA1700, AM5', en: 'Sockets: LGA1700, AM5' }
    ]
  },
  {
    id: 'psu',
    name: 'Quvvat Bloki (Power Supply / PSU)',
    icon: 'Zap',
    what: {
      uz: 'Rozetkadagi 220V o‘zgaruvchan tokni kompyuter qismlari uchun zarur bo‘lgan xavfsiz 12V, 5V, 3.3V o‘zgarmas tokka aylantiruvchi manba.',
      ru: 'Блок питания, преобразующий переменный сетевой ток 220В в стабилизированные 12В, 5В и 3.3В постоянного тока.',
      en: 'The power supply unit converting AC wall electricity into stabilized low-voltage DC rails.'
    },
    role: {
      uz: 'Kompyuter qismlariga barqaror quvvat yetkazib berish va ularni elektrdagi kuchlanish sakrashlaridan himoya qilish.',
      ru: 'Надежное снабжение чипов стабильным током и защита от перепадов напряжения и коротких замыканий.',
      en: 'Supplying ripple-free electrical current and safeguarding sensitive silicon against surges.'
    },
    howItWorks: {
      uz: 'Impulsli transformator, kondensatorlar va diodli ko‘prik orqali tokni to‘g‘rilaydi va o‘ta yuqori chastotada filtrlashni ta’minlaydi.',
      ru: 'Импульсные преобразователи и ШИМ-контроллеры выпрямляют ток с высоким КПД.',
      en: 'Switched-mode circuitry steps down high voltage using PWM controllers, rectifiers, and filtering capacitors.'
    },
    funFact: {
      uz: '80 PLUS Titanium sertifikatiga ega eng yaxshi quvvat bloklari elektr energiyasining 94% ini isrof qilmay foydali ishga sarflaydi!',
      ru: 'Топовые блоки с сертификатом 80 PLUS Titanium имеют феноменальный КПД свыше 94%!',
      en: 'Certified 80 PLUS Titanium power supplies achieve over 94% energy efficiency under load!'
    },
    specs: [
      { uz: 'Quvvat: 500W - 1200W', ru: 'Мощность: 500W - 1200W', en: 'Wattage: 500W - 1200W' },
      { uz: 'Sertifikat: 80 PLUS Bronze/Gold/Platinum', ru: 'Сертификат: 80 PLUS Gold/Platinum', en: 'Efficiency: 80 PLUS Gold/Platinum' }
    ]
  },
  {
    id: 'monitor',
    name: 'Monitor (Displey)',
    icon: 'Monitor',
    what: {
      uz: 'Kompyuter video kartasidan kelgan raqamli signallarni inson ko‘zi ilg‘aydigan rangli tasvirga aylantiruvchi displey.',
      ru: 'Устройство визуального вывода графической и текстовой информации.',
      en: 'Visual display unit presenting output from graphics processors into visible pixel frames.'
    },
    role: {
      uz: 'Foydalanuvchiga matn, video, o‘yinlar va dasturlar natijalarini real vaqtda tiniq va ravshan ko‘rsatish.',
      ru: 'Отображение интерфейса, графики и мультимедийного контента с высокой четкостью.',
      en: 'Showing user interfaces, text, video rendering, and games at high refresh rates.'
    },
    howItWorks: {
      uz: 'IPS yoki OLED matritsasidagi millionlab qizil, yashil va ko‘k (RGB) subpiksellar yorug‘lik kuchi orqali 16.7 milliondan 1 milliardgacha rang hosil qiladi.',
      ru: 'Миллионы триад субпикселей (RGB) светятся с разной яркостью, формируя полноцветную картинку.',
      en: 'Clusters of red, green, and blue subpixels emit or filter backlight to synthesize over a billion color shades.'
    },
    funFact: {
      uz: '4K monitor ekranida bir vaqtning o‘zida 8 million 294 ming 400 ta alohida piksel porlab turadi!',
      ru: 'На экране 4K монитора одновременно работает более 8,3 миллионов отдельных пикселей!',
      en: 'A 4K UHD monitor illuminates 8,294,400 individual addressable pixels updated dozens of times every second!'
    },
    specs: [
      { uz: 'Chastotalar: 60Hz - 360Hz', ru: 'Частота: 60Гц - 360Гц', en: 'Refresh rate: 60Hz - 360Hz' },
      { uz: 'Matritsa: IPS, OLED, VA', ru: 'Матрица: IPS, OLED, VA', en: 'Panel type: IPS, OLED, VA' }
    ]
  },
  {
    id: 'keyboard',
    name: 'Klaviatura (Keyboard)',
    icon: 'Keyboard',
    what: {
      uz: 'Matn, raqamlar va boshqaruv buyruqlarini kompyuterga kiritish uchun mo‘ljallangan tugmali asosiy kiritish qurilmasi.',
      ru: 'Основное клавишное устройство ввода текста и управляющих команд.',
      en: 'The primary alphanumeric input peripheral for typing code, text, and sending shortcuts.'
    },
    role: {
      uz: 'Dasturchilar, foydalanuvchilar va o‘yinchilar tomonidan buyruqlarni mikrosekundlarda kompyuter tizimiga uzatish.',
      ru: 'Ввод информации и быстрый вызов горячих клавиш операционной системы.',
      en: 'Registering mechanical key actuation to emit scan codes to the operating system.'
    },
    howItWorks: {
      uz: 'Har bir tugma ostida mexanik kontakt (switch) yoki membranali mikrosxema joylashgan. Bosilganda elektr zanjir tutashib, skan-kod CPU ga boradi.',
      ru: 'Замыкание электрического контакта под клавишей генерирует скан-код, считываемый контроллером.',
      en: 'Pressing a key bridges a mechanical switch or membrane matrix trace, triggering interrupt signals.'
    },
    funFact: {
      uz: 'QWERTY klaviatura tartibi 1870-yillarda mexanik yozuv mashinkalari harflari bir-biriga urilib qolmasligi uchun ataylab sekinroq yozishga moslab tuzilgan edi!',
      ru: 'Раскладка QWERTY была разработана в 1870-х годах для печатных машинок, чтобы их молоточки не заклинивали!',
      en: 'The QWERTY layout was invented in the 1870s for mechanical typewriters specifically to prevent typing hammer jams!'
    },
    specs: [
      { uz: 'Turlari: Mexanik, Membranali, Optik', ru: 'Типы: Механические, мембранные, оптические', en: 'Switch types: Mechanical, membrane, optical' },
      { uz: 'Ulanish: USB Type-C, Bluetooth, 2.4GHz', ru: 'Подключение: USB Type-C, Bluetooth, 2.4ГГц', en: 'Interface: USB Type-C, Bluetooth, 2.4GHz' }
    ]
  },
  {
    id: 'mouse',
    name: 'Sichqoncha (Mouse)',
    icon: 'Mouse',
    what: {
      uz: 'Grafik interfeysda kursor harakatini boshqaruvchi, bosish, siljitish va tanlash amallarini bajaruvchi ko‘rsatkich qurilmasi.',
      ru: 'Координатное манипуляторное устройство для управления курсором на экране.',
      en: 'A handheld optical coordinate pointing device directing screen cursors and selections.'
    },
    role: {
      uz: 'Operatsion tizim oynalarini ochish, matn belgilash, 3D modellar bilan ishlash va o‘yinlarda nishonni to‘g‘rilash.',
      ru: 'Взаимодействие с графическим интерфейсом операционной системы и точное позиционирование.',
      en: 'Selecting interface widgets, manipulating 3D viewports, and navigating desktop workflows.'
    },
    howItWorks: {
      uz: 'Pastki qismidagi optik sensor sirtni soniyasiga minglab marta mikrosuratga oladi (DPI) va kursorning siljish koordinatalarini hisoblaydi.',
      ru: 'Мини-камера оптического сенсора фотографирует поверхность тысячи раз в секунду и вычисляет сдвиг (DPI).',
      en: 'An integrated microscopic CMOS optical sensor captures thousands of surface frames per second to track motion.'
    },
    funFact: {
      uz: 'Dunyodagi birinchi kompyuter sichqonchasi 1964-yilda Duglas Engelbart tomonidan yog‘ochdan yasalgan va bittagina tugmaga ega bo‘lgan!',
      ru: 'Первая компьютерная мышь 1964 года была выточена Дугласом Энгельбартом из дерева!',
      en: 'The world’s first computer mouse invented in 1964 was carved out of wood and featured only a single red button!'
    },
    specs: [
      { uz: 'Sensor sezgirligi: 1000 - 30,000 DPI', ru: 'Чувствительность: 1000 - 30,000 DPI', en: 'Sensor precision: 1000 - 30,000 DPI' },
      { uz: 'Poll tezligi: 1000Hz - 8000Hz', ru: 'Частота опроса: 1000Hz - 8000Hz', en: 'Polling rate: 1000Hz - 8000Hz' }
    ]
  },
  {
    id: 'cooling',
    name: 'Sovutish Tizimi (Cooling System)',
    icon: 'Wind',
    what: {
      uz: 'Protsessor (CPU) va videokartadagi (GPU) yuqori issiqlikni chiqarib tashlovchi havoli (kuler) yoki suyuqlikli (SVO) sovitish tizimi.',
      ru: 'Система отвода избыточного тепла от процессора и чипов (воздушная или водяная).',
      en: 'Thermal cooling apparatus dissipation heat away from processors via air heatsinks or liquid loops.'
    },
    role: {
      uz: 'Kompyuterning qizib ketishi (trottling) va chiplarning erib ishdan chiqishining oldini olish, doimiy maksimal unumdorlikni saqlash.',
      ru: 'Предотвращение перегрева и троттлинга чипов под высокой нагрузкой.',
      en: 'Preventing silicon thermal throttling and hardware damage during sustained heavy workloads.'
    },
    howItWorks: {
      uz: 'Issiqlik naychalari (heatpipes) ichidagi suyuqlik bug‘lanib issiqlikni radiator panjaralariga olib boradi, ventilyator esa uni tashqariga haydaydi.',
      ru: 'Медные теплотрубки с фазовым переходом передают тепло на радиатор, обдуваемый вентиляторами.',
      en: 'Vapor-chamber copper heatpipes transfer thermal energy to aluminum fins where high-pressure fans exhaust it.'
    },
    funFact: {
      uz: 'Superkompyuterlar va serverlar maxsus elektr o‘tkazmaydigan suyuqlik (mineral moy) ichiga butunlay botirilib sovitiladi!',
      ru: 'Серверы суперкомпьютеров погружают целиком в специальные ванны с диэлектрической жидкостью!',
      en: 'Cutting-edge AI supercomputing clusters are fully submerged in non-conductive dielectric immersion coolant!'
    },
    specs: [
      { uz: 'Turlari: Havoli radiator, 240/360mm suvli sovutgich (AIO)', ru: 'Типы: Башенные кулеры, СЖО 240/360мм', en: 'Types: Dual-tower air, 240/360mm AIO liquid' },
      { uz: 'TDP quvvati: 150W - 350W+', ru: 'Отвод тепла (TDP): 150W - 350W+', en: 'Heat dissipation (TDP): 150W - 350W+' }
    ]
  }
];

export const hardwareData = computerPartsData;

const hardwareImages: Record<string, string> = {
  cpu: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=600&auto=format&fit=crop&q=80',
  gpu: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600&auto=format&fit=crop&q=80',
  ram: 'https://images.unsplash.com/photo-1562976540-1502c2145186?w=600&auto=format&fit=crop&q=80',
  ssd: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=600&auto=format&fit=crop&q=80',
  motherboard: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=80',
  psu: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=600&auto=format&fit=crop&q=80',
  monitor: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600&auto=format&fit=crop&q=80',
  keyboard: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&auto=format&fit=crop&q=80',
  mouse: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=600&auto=format&fit=crop&q=80',
  cooling: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=600&auto=format&fit=crop&q=80',
};

computerPartsData.forEach((item) => {
  item.definition = item.what;
  item.types = item.specs;
  item.category = ['monitor', 'keyboard', 'mouse'].includes(item.id) ? 'Periferiya' : 'Asosiy apparat';
  item.image = hardwareImages[item.id] || 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=80';
});
