export interface Album {
  title: string;
  year: number;
  cover: string;
  tracks: string[];
}

export interface Artist {
  id: string;
  name: string;
  genre: string;
  country: string;
  yearsActive: string;
  description: string;
  funFacts: string[];
  members?: string[];
  albums: Album[];
  photos: { url: string; caption: string }[];
}

export const artists: Artist[] = [
  {
    id: "depeche-mode",
    name: "Depeche Mode",
    genre: "Synth-pop / New Wave",
    country: "Великобритания",
    yearsActive: "1980 — настоящее время",
    description: "Depeche Mode — британская группа, ставшая одной из самых влиятельных в истории электронной музыки. Их мрачный, атмосферный звук и философские тексты определили целое поколение музыкантов.",
    funFacts: [
      "Название группы переводится с французского как 'Быстрая мода'",
      "Продали более 100 миллионов записей по всему миру",
      "Их песня 'Personal Jesus' была записана Джонни Кэшем",
      "Стадионный тур 'Devotional' 1993 года стал одним из самых масштабных в истории",
      "Были включены в Зал славы рок-н-ролла в 2020 году"
    ],
    members: ["Dave Gahan", "Martin Gore", "Andy Fletcher†", "Vince Clarke (ранее)", "Alan Wilder (ранее)"],
    albums: [
      {
        title: "Speak & Spell",
        year: 1981,
        cover: "https://images.unsplash.com/photo-1619983081563-430f63602796?w=400",
        tracks: ["New Life", "Just Can't Get Enough", "Dreaming of Me", "Puppets", "Boys Say Go!"]
      },
      {
        title: "A Broken Frame",
        year: 1982,
        cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400",
        tracks: ["Leave in Silence", "My Secret Garden", "Monument", "Nothing to Fear", "See You"]
      },
      {
        title: "Some Great Reward",
        year: 1984,
        cover: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400",
        tracks: ["Blasphemous Rumours", "Master and Servant", "People Are People", "Lie to Me", "Somebody"]
      },
      {
        title: "Music for the Masses",
        year: 1987,
        cover: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=400",
        tracks: ["Never Let Me Down Again", "Strangelove", "Behind the Wheel", "Sacred", "Little 15"]
      },
      {
        title: "Violator",
        year: 1990,
        cover: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=400",
        tracks: ["Personal Jesus", "Enjoy the Silence", "Policy of Truth", "World in My Eyes", "Halo"]
      }
    ],
    photos: [
      { url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600", caption: "Концертное выступление" },
      { url: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600", caption: "Студийная сессия" },
      { url: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=600", caption: "За кулисами" },
      { url: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=600", caption: "Фотосессия 80-х" },
      { url: "https://images.unsplash.com/photo-1619983081563-430f63602796?w=600", caption: "Мировой тур" }
    ]
  },
  {
    id: "duran-duran",
    name: "Duran Duran",
    genre: "New Wave / Synth-pop",
    country: "Великобритания",
    yearsActive: "1978 — настоящее время",
    description: "Duran Duran стали символом гламура 80-х годов. Их яркие видеоклипы, снятые в экзотических локациях, произвели революцию в MTV и музыкальной индустрии в целом.",
    funFacts: [
      "Названы в честь злодея из фильма 'Барбарелла'",
      "Их клип 'Hungry Like the Wolf' стал одним из первых хитов MTV",
      "Участники группы снялись в фильме о Джеймсе Бонде 'Вид на убийство'",
      "Продали более 100 миллионов пластинок",
      "Были на обложке журнала Rolling Stone 6 раз"
    ],
    members: ["Simon Le Bon", "Nick Rhodes", "John Taylor", "Roger Taylor", "Andy Taylor (ранее)"],
    albums: [
      {
        title: "Duran Duran",
        year: 1981,
        cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400",
        tracks: ["Planet Earth", "Girls on Film", "Careless Memories", "Night Boat", "Sound of Thunder"]
      },
      {
        title: "Rio",
        year: 1982,
        cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400",
        tracks: ["Rio", "Hungry Like the Wolf", "Save a Prayer", "Hold Back the Rain", "New Religion"]
      },
      {
        title: "Seven and the Ragged Tiger",
        year: 1983,
        cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400",
        tracks: ["The Reflex", "Union of the Snake", "New Moon on Monday", "I Take the Dice", "Of Crime and Passion"]
      },
      {
        title: "Notorious",
        year: 1986,
        cover: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400",
        tracks: ["Notorious", "Skin Trade", "A Matter of Feeling", "Meet El Presidente", "American Science"]
      }
    ],
    photos: [
      { url: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600", caption: "На съёмках клипа Rio" },
      { url: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=600", caption: "Концерт в Лондоне" },
      { url: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600", caption: "Студийная работа" },
      { url: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600", caption: "Мировое турне" },
      { url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600", caption: "Церемония награждения" }
    ]
  },
  {
    id: "a-ha",
    name: "a-ha",
    genre: "Synth-pop / New Wave",
    country: "Норвегия",
    yearsActive: "1982 — настоящее время",
    description: "Норвежское трио a-ha покорило мир своим хитом 'Take On Me' и революционным видеоклипом, сочетающим анимацию и живую съёмку. Их мелодичный синти-поп стал классикой жанра.",
    funFacts: [
      "Клип 'Take On Me' занял первое место в чартах 36 стран",
      "Записали заглавную тему к фильму о Джеймсе Бонде 'Искры из глаз'",
      "Собрали 198 000 зрителей на концерте в Рио — мировой рекорд того времени",
      "Morten Harket считался секс-символом 80-х",
      "Анимированный клип 'Take On Me' стоил 100 000 долларов — огромная сумма для того времени"
    ],
    members: ["Morten Harket", "Magne Furuholmen", "Pål Waaktaar-Savoy"],
    albums: [
      {
        title: "Hunting High and Low",
        year: 1985,
        cover: "https://images.unsplash.com/photo-1484755560615-a4c64e778a6c?w=400",
        tracks: ["Take On Me", "The Sun Always Shines on T.V.", "Train of Thought", "Hunting High and Low", "Living a Boy's Adventure Tale"]
      },
      {
        title: "Scoundrel Days",
        year: 1986,
        cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400",
        tracks: ["Cry Wolf", "Manhattan Skyline", "The Swing of Things", "I've Been Losing You", "October"]
      },
      {
        title: "Stay on These Roads",
        year: 1988,
        cover: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400",
        tracks: ["Stay on These Roads", "The Blood That Moves the Body", "Touchy!", "Hurry Home", "You Are the One"]
      }
    ],
    photos: [
      { url: "https://images.unsplash.com/photo-1484755560615-a4c64e778a6c?w=600", caption: "Съёмки клипа Take On Me" },
      { url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600", caption: "Концерт в Осло" },
      { url: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600", caption: "Промо-фото" },
      { url: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=600", caption: "Мировой тур" },
      { url: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=600", caption: "За кулисами" }
    ]
  },
  {
    id: "inxs",
    name: "INXS",
    genre: "New Wave / Rock",
    country: "Австралия",
    yearsActive: "1977 — 2012",
    description: "Австралийская группа INXS во главе с харизматичным Майклом Хатченсом стала одной из самых успешных рок-групп 80-х. Их энергичный сплав рока, фанка и новой волны покорил миллионы слушателей.",
    funFacts: [
      "Майкл Хатченс был признан одним из самых сексуальных мужчин мира",
      "Альбом 'Kick' разошёлся тиражом более 20 миллионов копий",
      "Участвовали в благотворительном концерте Live Aid в 1985 году",
      "Их песня 'Need You Tonight' стала #1 в Billboard Hot 100",
      "Группа названа в честь словосочетания 'in excess' (чрезмерность)"
    ],
    members: ["Michael Hutchence†", "Andrew Farriss", "Tim Farriss", "Jon Farriss", "Kirk Pengilly", "Garry Gary Beers"],
    albums: [
      {
        title: "The Swing",
        year: 1984,
        cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400",
        tracks: ["Original Sin", "I Send a Message", "Dancing on the Jetty", "Burn for You", "All the Voices"]
      },
      {
        title: "Listen Like Thieves",
        year: 1985,
        cover: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400",
        tracks: ["What You Need", "Listen Like Thieves", "Kiss the Dirt", "Shine Like It Does", "This Time"]
      },
      {
        title: "Kick",
        year: 1987,
        cover: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=400",
        tracks: ["Need You Tonight", "New Sensation", "Devil Inside", "Never Tear Us Apart", "Mystify"]
      },
      {
        title: "X",
        year: 1990,
        cover: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=400",
        tracks: ["Suicide Blonde", "Disappear", "Bitter Tears", "By My Side", "Hear That Sound"]
      }
    ],
    photos: [
      { url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600", caption: "Майкл Хатченс на сцене" },
      { url: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600", caption: "Концерт в Сиднее" },
      { url: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=600", caption: "Фотосессия для Kick" },
      { url: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=600", caption: "Мировой тур" },
      { url: "https://images.unsplash.com/photo-1619983081563-430f63602796?w=600", caption: "За кулисами" }
    ]
  },
  {
    id: "modern-talking",
    name: "Modern Talking",
    genre: "Euro Disco / Synth-pop",
    country: "Германия",
    yearsActive: "1984 — 2003",
    description: "Немецкий дуэт Modern Talking стал феноменом евро-диско. Их характерный звук с высоким вокалом Томаса Андерса и продюсированием Дитера Болена покорил весь мир.",
    funFacts: [
      "Продали более 120 миллионов пластинок",
      "'You're My Heart, You're My Soul' стала #1 в 30 странах",
      "Дитер Болен продолжил карьеру как судья в шоу талантов",
      "Дуэт распадался дважды из-за конфликтов между участниками",
      "Их песни до сих пор являются хитами на дискотеках"
    ],
    members: ["Thomas Anders", "Dieter Bohlen"],
    albums: [
      {
        title: "The 1st Album",
        year: 1985,
        cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400",
        tracks: ["You're My Heart, You're My Soul", "You Can Win If You Want", "There's Too Much Blue in Missing You", "Lucky Guy", "Do You Wanna"]
      },
      {
        title: "Let's Talk About Love",
        year: 1985,
        cover: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400",
        tracks: ["Cheri, Cheri Lady", "Atlantis Is Calling", "Brother Louie", "Just We Two", "With a Little Love"]
      },
      {
        title: "Ready for Romance",
        year: 1986,
        cover: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=400",
        tracks: ["Brother Louie", "Geronimo's Cadillac", "Ready for Romance", "Arabian Gold", "Angie's Heart"]
      },
      {
        title: "In the Middle of Nowhere",
        year: 1986,
        cover: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=400",
        tracks: ["Geronimo's Cadillac", "Give Me Peace on Earth", "Princess of the Night", "Stranded in the Middle of Nowhere", "Sweet Little Sheila"]
      }
    ],
    photos: [
      { url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600", caption: "Выступление на ТВ" },
      { url: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600", caption: "Концерт в Берлине" },
      { url: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=600", caption: "Промо-фото 1985" },
      { url: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=600", caption: "Студийная запись" },
      { url: "https://images.unsplash.com/photo-1619983081563-430f63602796?w=600", caption: "Мировой тур" }
    ]
  },
  {
    id: "blue-system",
    name: "Blue System",
    genre: "Euro Disco / Synth-pop",
    country: "Германия",
    yearsActive: "1987 — 1998",
    description: "После распада Modern Talking Дитер Болен создал Blue System — сольный проект, продолживший традиции евро-диско с ещё более космическим и футуристичным звучанием.",
    funFacts: [
      "Дитер Болен сам исполнял все песни после ухода из Modern Talking",
      "Выпустили 11 студийных альбомов за 11 лет",
      "Песня 'Sorry Little Sarah' стала международным хитом",
      "Были особенно популярны в СССР и странах Восточной Европы",
      "Название символизировало меланхолию и синий цвет тоски"
    ],
    members: ["Dieter Bohlen"],
    albums: [
      {
        title: "Walking on a Rainbow",
        year: 1987,
        cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400",
        tracks: ["Sorry Little Sarah", "Silent Water", "Under My Skin", "Walking on a Rainbow", "Love Suite"]
      },
      {
        title: "Body Heat",
        year: 1988,
        cover: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400",
        tracks: ["My Bed Is Too Big", "Love Me on the Rocks", "Body Heat", "Operator", "Déjà Vu"]
      },
      {
        title: "Twilight",
        year: 1989,
        cover: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=400",
        tracks: ["Love Is Such a Lonely Sword", "Twilight", "Lucifer", "This Is the Night", "That's Love"]
      }
    ],
    photos: [
      { url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600", caption: "Дитер Болен на сцене" },
      { url: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600", caption: "Концертное шоу" },
      { url: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=600", caption: "Запись в студии" },
      { url: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=600", caption: "Промо-фото" },
      { url: "https://images.unsplash.com/photo-1619983081563-430f63602796?w=600", caption: "Выступление на фестивале" }
    ]
  },
  {
    id: "joy",
    name: "Joy",
    genre: "Euro Disco / Italo Disco",
    country: "Австрия",
    yearsActive: "1984 — 1990",
    description: "Австрийская группа Joy стала культовой в жанре евро-диско благодаря своим танцевальным хитам. Их музыка олицетворяла беззаботность и оптимизм 80-х годов.",
    funFacts: [
      "'Touch by Touch' стала визитной карточкой группы",
      "Были особенно популярны в Европе и Азии",
      "Их песни часто звучали на советских дискотеках",
      "Сочетали элементы итало-диско и немецкой электроники",
      "Группа воссоединялась для ретро-концертов в 2000-х"
    ],
    members: ["Manfred Plachy", "Gerold Heilig", "Herbert Schnedl"],
    albums: [
      {
        title: "Joy and Tears",
        year: 1986,
        cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400",
        tracks: ["Touch by Touch", "Valerie", "Hello", "Japanese Girls", "Let Me Dream"]
      },
      {
        title: "Wonderful",
        year: 1987,
        cover: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400",
        tracks: ["Lovely Dream", "Show Me the Way", "Wonderful", "Breaking Hearts", "Moonlight"]
      }
    ],
    photos: [
      { url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600", caption: "На сцене" },
      { url: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600", caption: "Промо-фото" },
      { url: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=600", caption: "Концертное турне" },
      { url: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=600", caption: "В студии" },
      { url: "https://images.unsplash.com/photo-1619983081563-430f63602796?w=600", caption: "ТВ-выступление" }
    ]
  },
  {
    id: "sigue-sigue-sputnik",
    name: "Sigue Sigue Sputnik",
    genre: "Electro / Glam Rock",
    country: "Великобритания",
    yearsActive: "1982 — 1989",
    description: "Sigue Sigue Sputnik были провокационной группой, сочетавшей панк-эстетику, глэм-рок и футуристическую электронику. Их эпатажный имидж и маркетинговые трюки опередили время.",
    funFacts: [
      "Продали рекламные слоты между треками на своём альбоме",
      "Их подписали на EMI за рекордные 4 миллиона фунтов",
      "Название взято из граффити в московском метро",
      "Тони Джеймс ранее играл в группе Generation X с Билли Айдолом",
      "Их футуристический имидж вдохновил многих художников"
    ],
    members: ["Tony James", "Martin Degville", "Neal X", "Chris Kavanagh", "Ray Mayhew"],
    albums: [
      {
        title: "Flaunt It",
        year: 1986,
        cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400",
        tracks: ["Love Missile F1-11", "21st Century Boy", "Sex Bomb Boogie", "Massive Retaliation", "Rockit Miss U.S.A."]
      },
      {
        title: "Dress for Excess",
        year: 1988,
        cover: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400",
        tracks: ["Success", "Dancerama", "Albinoni vs. Star Wars", "Hey Jane", "Boom Boom Satellite"]
      }
    ],
    photos: [
      { url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600", caption: "Эпатажный имидж" },
      { url: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600", caption: "Концерт" },
      { url: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=600", caption: "Промо-фото" },
      { url: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=600", caption: "За кулисами" },
      { url: "https://images.unsplash.com/photo-1619983081563-430f63602796?w=600", caption: "Видеосъёмка" }
    ]
  },
  {
    id: "front-242",
    name: "Front 242",
    genre: "EBM / Industrial",
    country: "Бельгия",
    yearsActive: "1981 — настоящее время",
    description: "Front 242 — пионеры электронной боди-музыки (EBM). Их агрессивный, милитаристский звук и визуальный стиль оказали огромное влияние на индустриальную музыку.",
    funFacts: [
      "Считаются основателями жанра EBM",
      "Их логотип стал культовым символом индустриальной сцены",
      "Песня 'Headhunter' остаётся гимном электронных клубов",
      "Влияние группы признавали Nine Inch Nails и Ministry",
      "Их концерты отличались военной эстетикой и провокационностью"
    ],
    members: ["Jean-Luc De Meyer", "Daniel Bressanutti", "Patrick Codenys", "Richard Jonckheere (ранее)"],
    albums: [
      {
        title: "Geography",
        year: 1982,
        cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400",
        tracks: ["Operating Tracks", "Kinetics", "Kampfbereit", "Art & Strategy", "U-Men"]
      },
      {
        title: "No Comment",
        year: 1984,
        cover: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400",
        tracks: ["No Shuffle", "Commando Mix", "Deceit", "Politics of Pressure", "Work"]
      },
      {
        title: "Official Version",
        year: 1987,
        cover: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=400",
        tracks: ["W.Y.H.I.W.Y.G.", "Slaughter", "Angst", "Welcome to Paradise", "Rerun Time"]
      },
      {
        title: "Front by Front",
        year: 1988,
        cover: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=400",
        tracks: ["Headhunter", "Welcome to Paradise", "Circling Overland", "First in First out", "Never Stop!"]
      }
    ],
    photos: [
      { url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600", caption: "Концерт в Брюсселе" },
      { url: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600", caption: "Милитаристский имидж" },
      { url: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=600", caption: "На сцене" },
      { url: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=600", caption: "Студийная работа" },
      { url: "https://images.unsplash.com/photo-1619983081563-430f63602796?w=600", caption: "Промо-фото" }
    ]
  },
  {
    id: "dead-or-alive",
    name: "Dead or Alive",
    genre: "Hi-NRG / Synth-pop",
    country: "Великобритания",
    yearsActive: "1980 — 2016",
    description: "Dead or Alive во главе с экстравагантным Питом Бёрнсом стали иконой Hi-NRG музыки. Их хит 'You Spin Me Round' стал одной из самых узнаваемых песен 80-х.",
    funFacts: [
      "'You Spin Me Round' была первой песней в стиле Hi-NRG, достигшей #1 в UK",
      "Пит Бёрнс был известен своим эпатажным имиджем и пластическими операциями",
      "Песня 'You Spin Me Round' была использована в фильме 'Свадебный переполох'",
      "Группа продолжала концертную деятельность до смерти Бёрнса в 2016 году",
      "Их влияние чувствуется в современной электронной поп-музыке"
    ],
    members: ["Pete Burns†", "Steve Coy†", "Mike Percy", "Tim Lever"],
    albums: [
      {
        title: "Sophisticated Boom Boom",
        year: 1984,
        cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400",
        tracks: ["That's the Way (I Like It)", "I Wanna Be Your Toy", "Selfish Side", "What I Want", "Cake and Eat It"]
      },
      {
        title: "Youthquake",
        year: 1985,
        cover: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400",
        tracks: ["You Spin Me Round (Like a Record)", "Lover Come Back to Me", "In Too Deep", "My Heart Goes Bang", "Cake and Eat It"]
      },
      {
        title: "Mad, Bad, and Dangerous to Know",
        year: 1987,
        cover: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=400",
        tracks: ["Brand New Lover", "Something in My House", "Son of a Gun", "I'll Save You All My Kisses", "Hooked on Love"]
      }
    ],
    photos: [
      { url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600", caption: "Пит Бёрнс на сцене" },
      { url: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600", caption: "Эпатажный имидж" },
      { url: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=600", caption: "Концертное шоу" },
      { url: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=600", caption: "Видеосъёмка" },
      { url: "https://images.unsplash.com/photo-1619983081563-430f63602796?w=600", caption: "Фотосессия" }
    ]
  }
];

export const getArtistById = (id: string): Artist | undefined => {
  return artists.find(artist => artist.id === id);
};

export const genres = [
  { 
    name: "Disco / Euro Disco", 
    description: "Танцевальная музыка с электронными битами, синтезаторами и запоминающимися мелодиями",
    artists: ["Modern Talking", "Blue System", "Joy"]
  },
  { 
    name: "New Wave", 
    description: "Пост-панк движение с электронными элементами, модным имиджем и экспериментальным звучанием",
    artists: ["Duran Duran", "INXS", "Depeche Mode", "a-ha"]
  },
  { 
    name: "Synth-pop", 
    description: "Музыка, основанная на синтезаторах с мелодичным вокалом и танцевальными ритмами",
    artists: ["Depeche Mode", "a-ha", "Dead or Alive"]
  },
  { 
    name: "EBM / Industrial", 
    description: "Агрессивная электронная музыка с индустриальными звуками и милитаристской эстетикой",
    artists: ["Front 242", "Sigue Sigue Sputnik"]
  }
];
