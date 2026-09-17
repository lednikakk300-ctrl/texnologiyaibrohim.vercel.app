import { ProgrammingLanguage } from '../types';

export const programmingLanguagesData: ProgrammingLanguage[] = [
  {
    id: 'html',
    name: 'HTML (HyperText Markup Language)',
    icon: 'Code',
    color: '#E34F26',
    badge: 'Web Asosi',
    purpose: {
      uz: 'Veb-sahifaning skeleti, matnlari, rasmlari, tugmalari va strukturasini yaratish uchun ishlatiladi.',
      ru: 'Создание каркаса, структуры, текста, ссылок и разметки веб-страниц.',
      en: 'Building the fundamental structure, content, and markup of web pages.'
    },
    whereUsed: [
      { uz: 'Dunyodagi deyarli har bir veb-saytda', ru: 'В каждом существующем веб-сайте', en: 'Every single website across the World Wide Web' },
      { uz: 'Elektron xabarlar (HTML emaillar) tuzishda', ru: 'Оформление интерактивных email-писем', en: 'Rich HTML email formatting and newsletters' }
    ],
    codeSample: `<!DOCTYPE html>
<html lang="uz">
  <head>
    <title>Salom Dunyo!</title>
  </head>
  <body>
    <h1>Kelajak Texnologiyalari</h1>
    <p>Dasturlash olamiga xush kelibsiz!</p>
    <button onclick="alert('Salom!')">Meni bosing</button>
  </body>
</html>`,
    codeExplanation: {
      uz: 'Bu kod HTML sahifa skeletini ko‘rsatadi. <h1> katta sarlavha, <p> matn paragrafi va <button> bosiladigan tugma yaratadi.',
      ru: 'Этот базовый код создает HTML документ: <h1> — главный заголовок, <p> — абзац текста, а <button> — интерактивная кнопка.',
      en: 'Standard HTML skeleton where <h1> renders a main header, <p> wraps paragraph copy, and <button> triggers an alert.'
    },
    keyFeatures: [
      { uz: 'Oddiy teglar tizimi (<tag>)', ru: 'Простая система тегов (<tag>)', en: 'Intuitive tag-based syntax (<tag>)' },
      { uz: 'Brauzerlar tomonidan bevosita o‘qiladi', ru: 'Нативно исполняется любым браузером', en: 'Universally rendered natively by browsers' }
    ]
  },
  {
    id: 'css',
    name: 'CSS (Cascading Style Sheets)',
    icon: 'Palette',
    color: '#1572B6',
    badge: 'Dizayn & Stil',
    purpose: {
      uz: 'HTML sahifalarini bezash, ranglar, shriftlar, animatsiyalar berish va turli ekranlarga (telefon, planshet) moslashtirish.',
      ru: 'Оформление внешнего вида веб-страниц, шрифты, цвета, адаптивная верстка и анимации.',
      en: 'Styling, layout composition, typography, color palettes, and responsive animations.'
    },
    whereUsed: [
      { uz: 'Veb-saytlarning barcha vizual dizayni va interfeyslarida', ru: 'Визуальный дизайн всех веб-ресурсов', en: 'All visual web interfaces and frontends' },
      { uz: 'Mobil ilovalarning veb-freymvorklarida', ru: 'Мобильные гибридные веб-приложения', en: 'Hybrid mobile app frameworks' }
    ],
    codeSample: `/* Zamonaviy zamonaviy neon karta stili */
.tech-card {
  background: linear-gradient(135deg, #0f172a, #1e293b);
  border: 1px solid #38bdf8;
  border-radius: 16px;
  padding: 24px;
  color: #ffffff;
  box-shadow: 0 10px 25px rgba(56, 189, 248, 0.2);
  transition: transform 0.3s ease;
}

.tech-card:hover {
  transform: translateY(-6px);
}`,
    codeExplanation: {
      uz: 'Ushbu CSS qoidasi .tech-card klassiga ega elementlarga zamonaviy gradient fon, burchaklarni yumaloqlash va kursor olib kelganda ko‘tarilish animatsiyasini beradi.',
      ru: 'Класс .tech-card задает градиентный фон, неоновую рамку, тень и плавный подъем карточки при наведении мыши.',
      en: 'Styles .tech-card with a gradient backdrop, rounded edges, neon shadow, and smooth hover lift.'
    },
    keyFeatures: [
      { uz: 'Flexbox va Grid zamonaviy joylashuvlari', ru: 'Мощные макеты Flexbox и Grid', en: 'Modern Flexbox and CSS Grid layout engines' },
      { uz: 'Media so‘rovlar (Media Queries) bilan responsivlik', ru: 'Адаптивность через Media Queries', en: 'Adaptive responsiveness via Media Queries' }
    ]
  },
  {
    id: 'javascript',
    name: 'JavaScript (JS)',
    icon: 'Terminal',
    color: '#F7DF1E',
    badge: 'Interaktiv Veb',
    purpose: {
      uz: 'Saytlarni jonlantirish: tugmalar reaksiyasi, animatsiyalar, server bilan ma’lumot almashish va to‘liq ilovalar yaratish.',
      ru: 'Добавление интерактивности на сайты, обработка кликов, работа с API и создание веб-приложений.',
      en: 'Powering web interactivity, asynchronous API calls, complex state, and full-stack applications.'
    },
    whereUsed: [
      { uz: 'Frontend (React, Vue, Angular)', ru: 'Фронтенд разработка (React, Vue, Angular)', en: 'Frontend SPAs (React, Vue, Next.js)' },
      { uz: 'Backend (Node.js, Express)', ru: 'Серверный бэкенд (Node.js, Express)', en: 'Server backends (Node.js, Express)' },
      { uz: 'Mobil ilovalar (React Native)', ru: 'Мобильная разработка (React Native)', en: 'Cross-platform mobile apps (React Native)' }
    ],
    codeSample: `// Foydalanuvchi salomlashuvi va ma'lumot hisoblash
function calculateTechScore(answers) {
  const correct = answers.filter(a => a.isCorrect).length;
  const percentage = Math.round((correct / answers.length) * 100);
  
  console.log(\`Natijangiz: \${percentage}%\`);
  return { correct, percentage };
}

const userResults = calculateTechScore([
  { id: 1, isCorrect: true },
  { id: 2, isCorrect: true },
  { id: 3, isCorrect: false }
]);`,
    codeExplanation: {
      uz: 'calculateTechScore funksiyasi massivdagi to‘g‘ri javoblarni filtrlash orqali foydalanuvchining foizli natijasini hisoblab beradi.',
      ru: 'Функция фильтрует массив ответов, подсчитывает число верных и вычисляет процент успеха пользователя.',
      en: 'Calculates the user test success rate by filtering verified answers and returning rounded percentages.'
    },
    keyFeatures: [
      { uz: 'Asinxron kod (async/await va Promises)', ru: 'Асинхронность (async/await, Promises)', en: 'Asynchronous event loop (async/await)' },
      { uz: 'Har qanday brauzerda o‘rnatishlarsiz ishlaydi', ru: 'Работает из коробки в любом браузере', en: 'Built-in browser execution engine without installs' }
    ]
  },
  {
    id: 'python',
    name: 'Python',
    icon: 'Terminal',
    color: '#3776AB',
    badge: 'AI & Data Science',
    purpose: {
      uz: 'Sun’iy intellekt, ma’lumotlar tahlili, backend veb-ishlab chiqish, avtomatlashtirish va ilmiy hisob-kitoblar.',
      ru: 'Искусственный интеллект, анализ данных, бэкенд веб-сервисов и скрипты автоматизации.',
      en: 'Artificial intelligence, machine learning, data engineering, backend APIs, and automation scripts.'
    },
    whereUsed: [
      { uz: 'Machine Learning (TensorFlow, PyTorch, Scikit-learn)', ru: 'Обучение ИИ (PyTorch, TensorFlow)', en: 'Machine learning (PyTorch, TensorFlow)' },
      { uz: 'Veb serverlar (Django, FastAPI, Flask)', ru: 'Веб-фреймворки (FastAPI, Django)', en: 'High-performance web backends (FastAPI, Django)' },
      { uz: 'Kiberxavfsizlik va skriptlar', ru: 'Автоматизация и этичный хакинг', en: 'Cybersecurity tooling and scripting' }
    ],
    codeSample: `# Python bilan oddiy sun'iy intellekt tavsiya funksiyasi
def recommend_technology(interest: str) -> str:
    categories = {
        "kod": "Python yoki JavaScript o'rganing!",
        "qurilma": "Arduino yoki Robototexnikadan boshlang!",
        "dizayn": "HTML/CSS va 3D modellashni o'rganing!",
        "ai": "Neyron tarmoqlar va Machine Learning kursini tanlang!"
    }
    return categories.get(interest.lower(), "Texnologiyalar bo'limini ko'zdan kechiring!")

print(recommend_technology("ai"))
# Chiqish: Neyron tarmoqlar va Machine Learning kursini tanlang!`,
    codeExplanation: {
      uz: 'Python o‘qilishi eng oson tildir. recommendations lug‘atidan (dictionary) foydalanib, kiritilgan qiziqishga mos yo‘nalishni tavsiya qiladi.',
      ru: 'Python славится чистым синтаксисом. Словарь categories сопоставляет интерес пользователя с подходящим направлением.',
      en: 'Demonstrates Python’s clean syntax using a lookup dictionary to suggest learning roadmaps.'
    },
    keyFeatures: [
      { uz: 'Oson va ingliz tiliga yaqin sintaksis', ru: 'Простой, интуитивный синтаксис', en: 'English-like, readable syntax without semicolons' },
      { uz: 'Dunyodagi eng boy AI va ilmiy kutubxonalar', ru: 'Самая богатая экосистема библиотек для ИИ', en: 'Largest scientific and machine learning ecosystem' }
    ]
  },
  {
    id: 'java',
    name: 'Java',
    icon: 'Coffee',
    color: '#007396',
    badge: 'Enterprise & Android',
    purpose: {
      uz: 'Katta korporativ bank tizimlari, Android mobil ilovalari va yuqori yuklamali serverlar yaratish.',
      ru: 'Создание крупных банковских систем, корпоративного ПО и классических приложений Android.',
      en: 'Building scalable enterprise systems, banking engines, and legacy Android applications.'
    },
    whereUsed: [
      { uz: 'Banklar va to‘lov tizimlari (Visa, Mastercard)', ru: 'Банковские платформы и платежные шлюзы', en: 'Fintech and high-reliability financial transactions' },
      { uz: 'Android operatsion tizimi arxitekturasi', ru: 'Основа архитектуры Android', en: 'Android OS application layers' }
    ],
    codeSample: `public class Main {
    public static void main(String[] args) {
        String student = "Azizbek";
        int solvedTests = 15;
        
        System.out.println("Talaba: " + student);
        System.out.println("Yechilgan testlar soni: " + solvedTests);
    }
}`,
    codeExplanation: {
      uz: 'Java qat’iy tiplashga (strongly typed) ega obyektyo‘naltirilgan til. main() funksiyasi dasturning kirish nuqtasidir.',
      ru: 'Java — строго типизированный ООП-язык. Функция main() — это главная точка входа в программу.',
      en: 'Statically-typed OOP language where execution begins inside the public static void main entrypoint.'
    },
    keyFeatures: [
      { uz: 'JVM (Java Virtual Machine) - bir marta yoz, hamma joyda ishlat', ru: '«Напиши один раз, запускай везде» (JVM)', en: '"Write Once, Run Anywhere" via Java Virtual Machine' },
      { uz: 'Katta xotira xavfsizligi va Garbage Collector', ru: 'Автоматическая сборка мусора (GC)', en: 'Automated memory safety with Garbage Collection' }
    ]
  },
  {
    id: 'cpp',
    name: 'C++',
    icon: 'Cpu',
    color: '#00599C',
    badge: 'Tezkor & Tizimli',
    purpose: {
      uz: 'Maksimal tezlik talab qilinadigan o‘yin motorlari (Unreal Engine), operatsion tizimlar va drayverlar yozish.',
      ru: 'Высокопроизводительные игровые движки, операционные системы, драйверы и эмуляторы.',
      en: 'High-performance computing, game engines (Unreal Engine 5), operating systems, and drivers.'
    },
    whereUsed: [
      { uz: '3D O‘yinlar va AAA grafik dvigatellar', ru: 'Игровые движки AAA (Unreal Engine)', en: 'AAA game engines and real-time graphics' },
      { uz: 'Koinot kemalari dasturlari va robototexnika', ru: 'Аэрокосмические системы и робототехника', en: 'Aerospace control systems and robotic motion' }
    ],
    codeSample: `#include <iostream>
#include <string>

int main() {
    std::string techName = "C++";
    int executionSpeed = 100; // Maksimal tezlik
    
    std::cout << "Til: " << techName << std::endl;
    std::cout << "Unumdorlik: " << executionSpeed << "%" << std::endl;
    return 0;
}`,
    codeExplanation: {
      uz: 'C++ to‘g‘ridan-to‘g‘ri protsessor mashina kodiga kompilyatsiya qilinadi, shuning uchun boshqa tillarga qaraganda eng tez ishlaydi.',
      ru: 'C++ компилируется прямо в машинные инструкции, обеспечивая максимальную скорость и прямой доступ к памяти.',
      en: 'Compiles directly to bare-metal processor instructions for unparalleled execution speeds.'
    },
    keyFeatures: [
      { uz: 'Xotirani qo‘lda aniq boshqarish (pointers)', ru: 'Прямое управление памятью через указатели', en: 'Deterministic direct manual memory management' },
      { uz: 'Nol narxdagi abstraksiyalar (Zero-cost abstractions)', ru: 'Нулевая стоимость абстракций', en: 'Zero-overhead abstractions and template metaprogramming' }
    ]
  },
  {
    id: 'csharp',
    name: 'C# (C-Sharp)',
    icon: 'Gamepad2',
    color: '#239120',
    badge: 'Unity & .NET',
    purpose: {
      uz: 'Unity o‘yin dvigatelida 2D/3D o‘yinlar, Windows dasturlari va zamonaviy .NET veb API-lar ishlab chiqish.',
      ru: 'Разработка игр на движке Unity, кроссплатформенных сервисов на .NET и десктопных программ.',
      en: 'Game development with Unity 3D, cross-platform enterprise cloud APIs on .NET, and desktop apps.'
    },
    whereUsed: [
      { uz: 'Unity orqali mobil va kompyuter o‘yinlari', ru: 'Игры на Unity для ПК и смартфонов', en: 'Mobile and PC video games on Unity' },
      { uz: 'Microsoft korporativ ekotizimi', ru: 'Корпоративные веб-сервисы Microsoft', en: 'Enterprise cloud services on ASP.NET Core' }
    ],
    codeSample: `using System;

class Program {
    static void Main() {
        string gameEngine = "Unity";
        Console.WriteLine($"O'yin ishlab chiqish uchun {gameEngine} ishlatiladi.");
    }
}`,
    codeExplanation: {
      uz: 'C# tili Microsoft tomonidan yaratilgan bo‘lib, sintaksisi juda toza va zamonaviy xususiyatlarga boy.',
      ru: 'C# сочетает строгость Java с удобством современных функциональных возможностей языка.',
      en: 'A modern, type-safe object-oriented language optimized for rapid, reliable development.'
    },
    keyFeatures: [
      { uz: 'Unity o‘yinlari uchun rasmiy dasturlash tili', ru: 'Главный язык движка Unity', en: 'The standard scripting language for the Unity ecosystem' },
      { uz: 'LINQ yordamida qulay ma’lumotlar bilan ishlash', ru: 'Удобные запросы данных через LINQ', en: 'Declarative data querying via integrated LINQ' }
    ]
  },
  {
    id: 'kotlin',
    name: 'Kotlin',
    icon: 'Smartphone',
    color: '#7F52FF',
    badge: 'Zamonaviy Android',
    purpose: {
      uz: 'Google tomonidan Android tizimi uchun tavsiya etilgan rasmiy, xavfsiz va zamonaviy mobil dasturlash tili.',
      ru: 'Официальный и рекомендуемый Google язык разработки современных приложений для Android.',
      en: 'Google’s officially preferred modern language for native Android mobile engineering.'
    },
    whereUsed: [
      { uz: 'Google Play’dagi eng mashhur Android ilovalar', ru: 'Большинство современных Android-приложений', en: 'Native Android apps and Jetpack Compose UIs' },
      { uz: 'Kotlin Multiplatform (iOS va Android birga)', ru: 'Кроссплатформа (Kotlin Multiplatform)', en: 'Cross-platform codebases (Kotlin Multiplatform)' }
    ],
    codeSample: `fun main() {
    val tech = "Robototexnika"
    println("Mavzu: $tech o'rganilmoqda!")
    
    val scores = listOf(85, 92, 78)
    println("O'rtacha ball: \${scores.average()}")
}`,
    codeExplanation: {
      uz: 'Kotlin tili kod hajmini 40% ga qisqartiradi va "NullPointerException" xatolaridan to‘liq himoya qiladi.',
      ru: 'Kotlin лаконичен и на уровне компилятора защищает код от падений из-за NullPointerException.',
      en: 'Concise syntax featuring first-class null-safety preventing unexpected NullPointerExceptions.'
    },
    keyFeatures: [
      { uz: 'Null Safety - dastur to‘satdan qulab tushishini yo‘qotadi', ru: 'Встроенная безопасность null (Null Safety)', en: 'Built-in null safety prevents null-reference runtime crashes' },
      { uz: 'Java bilan 100% to‘liq moslashuvchanlik', ru: 'Полная совместимость с существующим кодом Java', en: '100% interoperable with Java libraries and frameworks' }
    ]
  },
  {
    id: 'swift',
    name: 'Swift',
    icon: 'Apple',
    color: '#FA7343',
    badge: 'Apple Ekotizimi',
    purpose: {
      uz: 'Apple qurilmalari (iPhone, iPad, Mac, Apple Watch, Apple Vision Pro) uchun maxsus yaratilgan o‘ta tez va qulay til.',
      ru: 'Разработка нативных приложений для всей линейки Apple (iOS, macOS, watchOS, visionOS).',
      en: 'Native development for the entire Apple platform ecosystem (iOS, macOS, watchOS, visionOS).'
    },
    whereUsed: [
      { uz: 'App Store’dagi iOS ilovalar (SwiftUI)', ru: 'Приложения из App Store на базе SwiftUI', en: 'iOS App Store applications built with SwiftUI' },
      { uz: 'Mac kompyuterlaridagi dasturlar', ru: 'Десктопные программы для macOS', en: 'Native desktop apps for macOS' }
    ],
    codeSample: `import Foundation

let technologyName = "Swift"
var isModern = true

print("Til: \\(technologyName), iOS uchun eng yaxshi tanlov!")`,
    codeExplanation: {
      uz: 'Swift tili Apple tomonidan yaratilgan bo‘lib, xavfsizlik va yuqori tezlikni o‘zida mujassamlashtirgan.',
      ru: 'Swift объединяет высокую скорость компиляции C++ с простотой скриптовых языков.',
      en: 'Designed by Apple to be fast, expressive, and inherently memory-safe using ARC.'
    },
    keyFeatures: [
      { uz: 'SwiftUI deklarativ interfeys yaratish tizimi', ru: 'Декларативный UI с помощью SwiftUI', en: 'Declarative reactive UI layout engine with SwiftUI' },
      { uz: 'Avtomatik xotira hisobi (ARC)', ru: 'Автоматический подсчет ссылок (ARC)', en: 'Automatic Reference Counting without garbage collection pauses' }
    ]
  },
  {
    id: 'sql',
    name: 'SQL (Structured Query Language)',
    icon: 'Database',
    color: '#336791',
    badge: 'Ma’lumotlar Bazasi',
    purpose: {
      uz: 'Ma’lumotlar bazasida jadvallar tuzish, ma’lumotlarni qidirish, qo‘shish, yangilash va hisobotlar olish.',
      ru: 'Язык реляционных баз данных для поиска, фильтрации, добавления и изменения записей.',
      en: 'Querying, defining, manipulating, and securing relational database structures and tables.'
    },
    whereUsed: [
      { uz: 'PostgreSQL, MySQL, SQLite, Oracle, SQL Server', ru: 'СУБД: PostgreSQL, MySQL, SQLite, Oracle', en: 'RDBMS engines: PostgreSQL, MySQL, SQLite, Oracle' },
      { uz: 'Banklar, foydalanuvchilar hisoboti va analitika', ru: 'Учет пользователей, транзакции, аналитика', en: 'Customer profiles, financial ledger logs, and analytics' }
    ],
    codeSample: `-- Foydalanuvchilar orasida 80 balldan yuqori natijalarni saralash
SELECT ism, mavzu, ball 
FROM foydalanuvchi_natijalari
WHERE ball >= 80
ORDER BY ball DESC
LIMIT 5;`,
    codeExplanation: {
      uz: 'Bu SQL so‘rovi bazadan 80 va undan yuqori ball to‘plagan 5 nafar talabaning ismi va natijasini yuqoridan pastga saralab chiqaradi.',
      ru: 'Запрос фильтрует таблицу результатов, отбирая топ-5 учеников с баллом 80 и выше по убыванию.',
      en: 'Selects the top five students scoring 80% or higher, sorted by score in descending order.'
    },
    keyFeatures: [
      { uz: 'Deklarativ so‘rovlar: "qanday qilish" emas, "nima kerakligini" aytasiz', ru: 'Декларативность: описание желаемого результата', en: 'Declarative querying focuses on what data is needed, not how' },
      { uz: 'Millionlab qatorlarni sekund ulushida filtrlash', ru: 'Мгновенный поиск по миллионам строк', en: 'Blazing index-based scans across millions of relational rows' }
    ]
  }
];

export const programmingData = programmingLanguagesData;

const langMetadata: Record<string, { year: number; creator: string }> = {
  html: { year: 1993, creator: 'Tim Berners-Lee' },
  css: { year: 1996, creator: 'Håkon Wium Lie' },
  javascript: { year: 1995, creator: 'Brendan Eich' },
  python: { year: 1991, creator: 'Guido van Rossum' },
  java: { year: 1995, creator: 'James Gosling' },
  cpp: { year: 1985, creator: 'Bjarne Stroustrup' },
  csharp: { year: 2000, creator: 'Anders Hejlsberg' },
  php: { year: 1994, creator: 'Rasmus Lerdorf' },
  sql: { year: 1974, creator: 'Donald Chamberlin & Raymond Boyce' },
};

programmingLanguagesData.forEach((item) => {
  item.codeSnippet = item.codeSample;
  item.description = item.purpose;
  item.useCases = item.whereUsed;
  item.pros = item.keyFeatures;
  item.cons = [
    { uz: 'O‘rganish va amaliyot talab qiladi', ru: 'Требует времени на практику', en: 'Requires continuous practice' }
  ];
  item.year = langMetadata[item.id]?.year || 2000;
  item.creator = langMetadata[item.id]?.creator || 'Hamjamiyat';
});
