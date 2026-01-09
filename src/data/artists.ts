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
      { title: "Speak & Spell", year: 1981, cover: "https://images.unsplash.com/photo-1619983081563-430f63602796?w=400", tracks: ["New Life", "Just Can't Get Enough", "Dreaming of Me", "Puppets", "Boys Say Go!"] },
      { title: "A Broken Frame", year: 1982, cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400", tracks: ["Leave in Silence", "My Secret Garden", "Monument", "Nothing to Fear", "See You"] },
      { title: "Construction Time Again", year: 1983, cover: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400", tracks: ["Love, in Itself", "More Than a Party", "Pipeline", "Everything Counts", "Two Minute Warning"] },
      { title: "Some Great Reward", year: 1984, cover: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=400", tracks: ["Blasphemous Rumours", "Master and Servant", "People Are People", "Lie to Me", "Somebody"] },
      { title: "Black Celebration", year: 1986, cover: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=400", tracks: ["Black Celebration", "Fly on the Windscreen", "A Question of Lust", "Stripped", "Here Is the House"] },
      { title: "Music for the Masses", year: 1987, cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400", tracks: ["Never Let Me Down Again", "Strangelove", "Behind the Wheel", "Sacred", "Little 15"] },
      { title: "Violator", year: 1990, cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400", tracks: ["Personal Jesus", "Enjoy the Silence", "Policy of Truth", "World in My Eyes", "Halo"] },
      { title: "Songs of Faith and Devotion", year: 1993, cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400", tracks: ["I Feel You", "Walking in My Shoes", "Condemnation", "In Your Room", "Higher Love"] },
      { title: "Ultra", year: 1997, cover: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400", tracks: ["Barrel of a Gun", "It's No Good", "Home", "Useless", "The Bottom Line"] },
      { title: "Exciter", year: 2001, cover: "https://images.unsplash.com/photo-1484755560615-a4c64e778a6c?w=400", tracks: ["Dream On", "I Feel Loved", "Freelove", "Goodnight Lovers", "The Dead of Night"] },
      { title: "Playing the Angel", year: 2005, cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400", tracks: ["A Pain That I'm Used To", "Precious", "Suffer Well", "John the Revelator", "Lilian"] },
      { title: "Sounds of the Universe", year: 2009, cover: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400", tracks: ["Wrong", "Peace", "Fragile Tension", "Hole to Feed", "Come Back"] },
      { title: "Delta Machine", year: 2013, cover: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=400", tracks: ["Heaven", "Soothe My Soul", "Should Be Higher", "Secret to the End", "Soft Touch/Raw Nerve"] },
      { title: "Spirit", year: 2017, cover: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=400", tracks: ["Where's the Revolution", "Going Backwards", "Cover Me", "Poison Heart", "So Much Love"] },
      { title: "Memento Mori", year: 2023, cover: "https://images.unsplash.com/photo-1619983081563-430f63602796?w=400", tracks: ["Ghosts Again", "My Cosmos Is Mine", "Wagging Tongue", "Don't Say You Love Me", "Soul with Me"] }
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
      { title: "Duran Duran", year: 1981, cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400", tracks: ["Planet Earth", "Girls on Film", "Careless Memories", "Night Boat", "Sound of Thunder"] },
      { title: "Rio", year: 1982, cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400", tracks: ["Rio", "Hungry Like the Wolf", "Save a Prayer", "Hold Back the Rain", "New Religion"] },
      { title: "Seven and the Ragged Tiger", year: 1983, cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400", tracks: ["The Reflex", "Union of the Snake", "New Moon on Monday", "I Take the Dice", "Of Crime and Passion"] },
      { title: "Notorious", year: 1986, cover: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400", tracks: ["Notorious", "Skin Trade", "A Matter of Feeling", "Meet El Presidente", "American Science"] },
      { title: "Big Thing", year: 1988, cover: "https://images.unsplash.com/photo-1484755560615-a4c64e778a6c?w=400", tracks: ["I Don't Want Your Love", "All She Wants Is", "Too Late Marlene", "Drug", "Do You Believe in Shame?"] },
      { title: "Liberty", year: 1990, cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400", tracks: ["Violence of Summer", "Serious", "All Along the Water", "My Antarctica", "Read My Lips"] },
      { title: "Duran Duran (Wedding Album)", year: 1993, cover: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400", tracks: ["Ordinary World", "Come Undone", "Too Much Information", "Drowning Man", "Love Voodoo"] },
      { title: "Thank You", year: 1995, cover: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=400", tracks: ["White Lines", "I Wanna Take You Higher", "Perfect Day", "Watching the Detectives", "911 Is a Joke"] },
      { title: "Medazzaland", year: 1997, cover: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=400", tracks: ["Electric Barbarella", "Out of My Mind", "Who Do You Think You Are?", "Medazzaland", "Big Bang Generation"] },
      { title: "Pop Trash", year: 2000, cover: "https://images.unsplash.com/photo-1619983081563-430f63602796?w=400", tracks: ["Someone Else Not Me", "Playing with Uranium", "Hallucinating Elvis", "Last Day on Earth", "Mars Meets Venus"] },
      { title: "Astronaut", year: 2004, cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400", tracks: ["(Reach Up for The) Sunrise", "What Happens Tomorrow", "Astronaut", "Nice", "Bedroom Toys"] },
      { title: "Red Carpet Massacre", year: 2007, cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400", tracks: ["Falling Down", "Nite-Runner", "Skin Divers", "Red Carpet Massacre", "Box Full o' Honey"] },
      { title: "All You Need Is Now", year: 2010, cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400", tracks: ["All You Need Is Now", "Blame the Machines", "Girl Panic!", "Being Followed", "Leave a Light On"] },
      { title: "Paper Gods", year: 2015, cover: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400", tracks: ["Paper Gods", "Pressure Off", "Face for Today", "You Kill Me with Silence", "What Are the Chances?"] },
      { title: "Future Past", year: 2021, cover: "https://images.unsplash.com/photo-1484755560615-a4c64e778a6c?w=400", tracks: ["Invisible", "Anniversary", "Give It All Up", "More Joy!", "Tonight United"] },
      { title: "Danse Macabre", year: 2023, cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400", tracks: ["Black Moonlight", "Bury a Friend", "Psycho Killer", "Super Lonely Freak", "Nightboat"] }
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
      { title: "Hunting High and Low", year: 1985, cover: "https://images.unsplash.com/photo-1484755560615-a4c64e778a6c?w=400", tracks: ["Take On Me", "The Sun Always Shines on T.V.", "Train of Thought", "Hunting High and Low", "Living a Boy's Adventure Tale"] },
      { title: "Scoundrel Days", year: 1986, cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400", tracks: ["Cry Wolf", "Manhattan Skyline", "The Swing of Things", "I've Been Losing You", "October"] },
      { title: "Stay on These Roads", year: 1988, cover: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400", tracks: ["Stay on These Roads", "The Blood That Moves the Body", "Touchy!", "Hurry Home", "You Are the One"] },
      { title: "East of the Sun, West of the Moon", year: 1990, cover: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=400", tracks: ["Crying in the Rain", "I Call Your Name", "Early Morning", "East of the Sun", "Rolling Thunder"] },
      { title: "Memorial Beach", year: 1993, cover: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=400", tracks: ["Dark Is the Night", "Move to Memphis", "Cold River", "Angel in the Snow", "Lie Down in Darkness"] },
      { title: "Minor Earth Major Sky", year: 2000, cover: "https://images.unsplash.com/photo-1619983081563-430f63602796?w=400", tracks: ["Summer Moved On", "Minor Earth Major Sky", "The Sun Never Shone That Day", "Velvet", "Little Black Heart"] },
      { title: "Lifelines", year: 2002, cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400", tracks: ["Forever Not Yours", "Lifelines", "You Wanted More", "Time and Again", "Turn the Lights Down"] },
      { title: "Analogue", year: 2005, cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400", tracks: ["Celice", "Analogue", "Cosy Prisons", "Make It Soon", "Over the Treetops"] },
      { title: "Foot of the Mountain", year: 2009, cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400", tracks: ["Foot of the Mountain", "What There Is", "Shadowside", "Nothing Is Keeping You Here", "Real Meaning"] },
      { title: "Cast in Steel", year: 2015, cover: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400", tracks: ["Cast in Steel", "Under the Makeup", "The Wake", "Forest Fire", "Door Ajar"] },
      { title: "True North", year: 2022, cover: "https://images.unsplash.com/photo-1484755560615-a4c64e778a6c?w=400", tracks: ["I'm In", "Hunter in the Hills", "Forest for the Trees", "Bumblebee", "You Have What It Takes"] }
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
      { title: "INXS", year: 1980, cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400", tracks: ["Just Keep Walking", "Doctor", "Learn to Smile", "Jumping", "Roller Skating"] },
      { title: "Underneath the Colours", year: 1981, cover: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400", tracks: ["Stay Young", "Horizons", "Big Go Go", "Underneath the Colours", "Fair Weather Ahead"] },
      { title: "Shabooh Shoobah", year: 1982, cover: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=400", tracks: ["The One Thing", "Don't Change", "Black and White", "Golden Playpen", "Jan's Song"] },
      { title: "The Swing", year: 1984, cover: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=400", tracks: ["Original Sin", "I Send a Message", "Dancing on the Jetty", "Burn for You", "All the Voices"] },
      { title: "Listen Like Thieves", year: 1985, cover: "https://images.unsplash.com/photo-1619983081563-430f63602796?w=400", tracks: ["What You Need", "Listen Like Thieves", "Kiss the Dirt", "Shine Like It Does", "This Time"] },
      { title: "Kick", year: 1987, cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400", tracks: ["Need You Tonight", "New Sensation", "Devil Inside", "Never Tear Us Apart", "Mystify"] },
      { title: "X", year: 1990, cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400", tracks: ["Suicide Blonde", "Disappear", "Bitter Tears", "By My Side", "Hear That Sound"] },
      { title: "Welcome to Wherever You Are", year: 1992, cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400", tracks: ["Heaven Sent", "Baby Don't Cry", "Taste It", "Beautiful Girl", "Wishing Well"] },
      { title: "Full Moon, Dirty Hearts", year: 1993, cover: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400", tracks: ["The Gift", "Make Your Peace", "Time", "Please (You Got That...)", "Full Moon, Dirty Hearts"] },
      { title: "Elegantly Wasted", year: 1997, cover: "https://images.unsplash.com/photo-1484755560615-a4c64e778a6c?w=400", tracks: ["Elegantly Wasted", "Everything", "Don't Lose Your Head", "Searching", "Building Bridges"] },
      { title: "Switch", year: 2005, cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400", tracks: ["Devil's Party", "Afterglow", "Hot Girls", "Perfect Strangers", "Remember Who's Your Man"] },
      { title: "Original Sin", year: 2010, cover: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400", tracks: ["Original Sin (featuring Rob Thomas)", "Need You Tonight (Rock Remix)", "New Sensation (2010)", "Devil Inside (Dance Mix)", "Never Tear Us Apart (Acoustic)"] }
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
      { title: "The 1st Album", year: 1985, cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400", tracks: ["You're My Heart, You're My Soul", "You Can Win If You Want", "There's Too Much Blue in Missing You", "Lucky Guy", "Do You Wanna"] },
      { title: "Let's Talk About Love", year: 1985, cover: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400", tracks: ["Cheri, Cheri Lady", "Atlantis Is Calling", "Brother Louie", "Just We Two", "With a Little Love"] },
      { title: "Ready for Romance", year: 1986, cover: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=400", tracks: ["Brother Louie", "Geronimo's Cadillac", "Ready for Romance", "Arabian Gold", "Angie's Heart"] },
      { title: "In the Middle of Nowhere", year: 1986, cover: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=400", tracks: ["Geronimo's Cadillac", "Give Me Peace on Earth", "Princess of the Night", "Stranded in the Middle of Nowhere", "Sweet Little Sheila"] },
      { title: "Romantic Warriors", year: 1987, cover: "https://images.unsplash.com/photo-1619983081563-430f63602796?w=400", tracks: ["Jet Airliner", "Lonely Tears in Chinatown", "Romantic Warriors", "In 100 Years", "Don't Give Up"] },
      { title: "In the Garden of Venus", year: 1987, cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400", tracks: ["In 100 Years", "We Take the Chance", "In the Garden of Venus", "Don't Worry", "Riding on a White Swan"] },
      { title: "Back for Good", year: 1998, cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400", tracks: ["You're My Heart, You're My Soul '98", "Brother Louie '98", "Cheri, Cheri Lady '98", "Atlantis Is Calling '98", "Geronimo's Cadillac '98"] },
      { title: "Alone", year: 1999, cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400", tracks: ["Sexy, Sexy Lover", "You Are Not Alone", "Diamonds Never Made a Lady", "Don't Take Away My Heart", "No Face, No Name, No Number"] },
      { title: "Year of the Dragon", year: 2000, cover: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400", tracks: ["China in Her Eyes", "Juliet", "For a Lifetime", "TV Makes the Superstar", "Year of the Dragon"] },
      { title: "America", year: 2001, cover: "https://images.unsplash.com/photo-1484755560615-a4c64e778a6c?w=400", tracks: ["Win the Race", "Last Exit to Brooklyn", "You're a Woman", "Love Is Like a Rainbow", "Anything Is Possible"] },
      { title: "Victory", year: 2002, cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400", tracks: ["Ready for the Victory", "Shooting Star", "Don't Make Me Blue", "Superboy & Supergirl", "Victory"] },
      { title: "Universe", year: 2003, cover: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400", tracks: ["TV Makes the Superstar", "Knocking on My Door", "Unique", "Universe", "It's Your Smile"] }
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
      { title: "Walking on a Rainbow", year: 1987, cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400", tracks: ["Sorry Little Sarah", "Silent Water", "Under My Skin", "Walking on a Rainbow", "Love Suite"] },
      { title: "Body Heat", year: 1988, cover: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400", tracks: ["My Bed Is Too Big", "Love Me on the Rocks", "Body Heat", "Operator", "Déjà Vu"] },
      { title: "Twilight", year: 1989, cover: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=400", tracks: ["Love Is Such a Lonely Sword", "Twilight", "Lucifer", "This Is the Night", "That's Love"] },
      { title: "Obsession", year: 1990, cover: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=400", tracks: ["Love Is a Burning Fire", "A Million Tears", "Voodoo Nights", "Obsession", "Julie Says"] },
      { title: "Seeds of Heaven", year: 1991, cover: "https://images.unsplash.com/photo-1619983081563-430f63602796?w=400", tracks: ["6 Years — 6 Nights", "Seeds of Heaven", "Romeo & Juliet", "For the Children", "Gangster Love"] },
      { title: "Deja Vu", year: 1991, cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400", tracks: ["Déjà Vu", "History", "Love Will Drive Me Crazy", "Give Me Space and Time", "Dr. Mabuse"] },
      { title: "Hello America", year: 1992, cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400", tracks: ["Hello America", "That's the Way", "Only with You", "I Will Survive", "Big Boys Don't Cry"] },
      { title: "Backstreet Dreams", year: 1993, cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400", tracks: ["That Night", "Backstreet Dreams", "Laila", "21st Century", "She's a Lady"] },
      { title: "X-Ten", year: 1994, cover: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400", tracks: ["Love Me More", "I Love the Way You Love Me", "Testamente D'Amelia", "If You Go Away", "Protection"] },
      { title: "It's All Over", year: 1996, cover: "https://images.unsplash.com/photo-1484755560615-a4c64e778a6c?w=400", tracks: ["It's All Over", "You and I", "The Night Is High", "She's Got That Light", "Don't You Cry"] },
      { title: "Forever Blue", year: 1998, cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400", tracks: ["Body to Body", "Forever Blue", "Time 4 Love", "Hip Hop on the Flip Flop", "Angel Cry"] }
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
      { title: "Joy and Tears", year: 1986, cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400", tracks: ["Touch by Touch", "Valerie", "Hello", "Japanese Girls", "Let Me Dream"] },
      { title: "Wonderful", year: 1987, cover: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400", tracks: ["Lovely Dream", "Show Me the Way", "Wonderful", "Breaking Hearts", "Moonlight"] },
      { title: "Hello", year: 1988, cover: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=400", tracks: ["Hello (New Version)", "Paradise Road", "I Love Your Eyes", "Say Goodbye", "Gonna Catch Your Heart"] },
      { title: "Heart Beats", year: 1989, cover: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=400", tracks: ["Heart Beats", "Love Is Forever", "Feel the Fire", "Endless Nights", "Stay with Me"] }
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
      { title: "Flaunt It", year: 1986, cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400", tracks: ["Love Missile F1-11", "21st Century Boy", "Sex Bomb Boogie", "Massive Retaliation", "Rockit Miss U.S.A."] },
      { title: "Dress for Excess", year: 1988, cover: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400", tracks: ["Success", "Dancerama", "Albinoni vs. Star Wars", "Hey Jane", "Boom Boom Satellite"] },
      { title: "Piratespace", year: 2001, cover: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=400", tracks: ["Cyberia", "Super Crook Blues", "Piratespace", "Rio Rocks", "Virtual Reality"] }
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
      { title: "Geography", year: 1982, cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400", tracks: ["Operating Tracks", "Kinetics", "Kampfbereit", "Art & Strategy", "U-Men"] },
      { title: "No Comment", year: 1984, cover: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400", tracks: ["No Shuffle", "Commando Mix", "Deceit", "Politics of Pressure", "Work"] },
      { title: "Official Version", year: 1987, cover: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=400", tracks: ["W.Y.H.I.W.Y.G.", "Slaughter", "Angst", "Welcome to Paradise", "Rerun Time"] },
      { title: "Front by Front", year: 1988, cover: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=400", tracks: ["Headhunter", "Welcome to Paradise", "Circling Overland", "First in First out", "Never Stop!"] },
      { title: "Tyranny (For You)", year: 1991, cover: "https://images.unsplash.com/photo-1619983081563-430f63602796?w=400", tracks: ["Tragedy for You", "Rhythm of Time", "Gripped by Fear", "Moldavia", "Soul Manager"] },
      { title: "06:21:03:11 Up Evil", year: 1993, cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400", tracks: ["Religion", "Crushed", "Melt!", "Animal (Gate)", "Serial Killers Don't Kill Their Girlfriends"] },
      { title: "05:22:09:12 Off", year: 1993, cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400", tracks: ["Triple XXX Girlfriend", "Skin", "Motion", "Together", "Take One"] },
      { title: "Mut@ge.Mix@ge", year: 1995, cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400", tracks: ["Funkahdafi", "Happiness", "Loud Confusion", "Louder Confusion", "Headhunter (Remix)"] },
      { title: "Pulse", year: 2003, cover: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400", tracks: ["Take One", "Headhunter 2000", "Body to Body", "Rhythm of Time", "Religion"] }
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
      { title: "Sophisticated Boom Boom", year: 1984, cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400", tracks: ["That's the Way (I Like It)", "I Wanna Be Your Toy", "Selfish Side", "What I Want", "Cake and Eat It"] },
      { title: "Youthquake", year: 1985, cover: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400", tracks: ["You Spin Me Round (Like a Record)", "Lover Come Back to Me", "In Too Deep", "My Heart Goes Bang", "Cake and Eat It"] },
      { title: "Mad, Bad, and Dangerous to Know", year: 1987, cover: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=400", tracks: ["Brand New Lover", "Something in My House", "Son of a Gun", "I'll Save You All My Kisses", "Hooked on Love"] },
      { title: "Nude", year: 1989, cover: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=400", tracks: ["Come Home with Me Baby", "Turn Around and Count 2 Ten", "Baby Don't Say Goodbye", "I Don't Wanna Be Your Boyfriend", "Unhappy Birthday"] },
      { title: "Fan the Flame (Part 1)", year: 1990, cover: "https://images.unsplash.com/photo-1619983081563-430f63602796?w=400", tracks: ["Your Sweetness (Is Your Weakness)", "Give It Back", "Sex Drive", "I Paralyze", "Fan the Flame"] },
      { title: "Nukleopatra", year: 1995, cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400", tracks: ["You Spin Me Round (Remix)", "Nukleopatra", "Rebel Rebel", "Sex Drive", "Give It Back"] },
      { title: "Fragile", year: 2000, cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400", tracks: ["Isn't It a Pity", "Fragile", "Lover of Mine", "Hit and Run Lover", "Sex Drive (2000)"] }
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
