export interface Album {
  title: string;
  year: number;
  cover: string;
  tracks: string[];
  type?: "album" | "single";
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
  mainPhoto: string;
  logoUrl?: string;
}

// Artist photos - using local files from repository
const artistPhotos = {
  depeche: [
    { url: "/DMphotos/depeche_mode1.jpg", caption: "Depeche Mode" },
    { url: "/DMphotos/depeche2.jpg", caption: "Концертное выступление" },
    { url: "/DMphotos/depeche3.jpg", caption: "Промо-фото" },
    { url: "/DMphotos/violator_1920_9.jpg", caption: "Эпоха Violator" },
    { url: "/DMphotos/ultra_1920_9.jpg", caption: "Эпоха Ultra" },
    { url: "/DMphotos/musicforthemasses_1920_9.jpg", caption: "Music for the Masses тур" },
    { url: "/DMphotos/playingtheangel_1920_3.jpg", caption: "Playing the Angel тур" },
    { url: "/DMphotos/playingtheangel_1920_12.jpg", caption: "Playing the Angel промо" },
    { url: "/DMphotos/1_leave_in_silence.jpg", caption: "Leave in Silence" },
    { url: "/DMphotos/2.jpg", caption: "Студийная сессия" },
    { url: "/DMphotos/3.jpg", caption: "Фотосессия" },
    { url: "/DMphotos/7.jpg", caption: "На сцене" },
    { url: "/DMphotos/7-2.jpg", caption: "Концерт" },
    { url: "/DMphotos/13.jpg", caption: "Промо" },
    { url: "/DMphotos/13-2.jpg", caption: "Фото группы" },
    { url: "/DMphotos/18.jpg", caption: "Архивное фото" },
    { url: "/80s_photos/depeche1.jpg", caption: "Depeche Mode 80-е" }
  ],
  duran: [
    { url: "/80s_photos/duran duran1.jpg", caption: "Duran Duran" },
    { url: "/80s_photos/duran duran2.jpg", caption: "Duran Duran промо" }
  ],
  aha: [
    { url: "/80s_photos/aha1.jpg", caption: "a-ha" }
  ],
  inxs: [
    { url: "/80s_photos/inxs1.jpg", caption: "INXS" }
  ],
  modern: [
    { url: "/80s_photos/modern talking1.jpg", caption: "Modern Talking" }
  ],
  generic: [
    { url: "/80s_photos/frankie goes to hollywood1.jpg", caption: "80-е годы" }
  ]
};

// Album covers - using local files for DM, placeholders for others
const albumCovers = {
  // Depeche Mode - local files from public/DMalbums
  speakAndSpell: "/DMalbums/01_speakandspell_main.jpg",
  brokenFrame: "/DMalbums/02_abrokenframe_main.jpg",
  constructionTime: "/DMalbums/03_constructiontimeagain_main.jpg",
  peopleArePeople: "/DMalbums/04_peoplearepeople_main.jpg",
  someGreatReward: "/DMalbums/05_somegreatreward_main.jpg",
  catchingUp: "/DMalbums/06_catchingupwithdepechemode_main.jpg",
  singles8185: "/DMalbums/07_thesingles8185_main.jpg",
  blackCelebration: "/DMalbums/08_blackcelebration_main.jpg",
  musicMasses: "/DMalbums/09_musicforthemasses_main.jpg",
  live101: "/DMalbums/10_101_main.jpg",
  violator: "/DMalbums/11_violator_main.jpg",
  songsFaith: "/DMalbums/12_songsoffaithanddevotion_main.jpg",
  songsFaithLive: "/DMalbums/13_songsoffaithanddevotionlive_main.jpg",
  ultra: "/DMalbums/14_ultra_main.jpg",
  singles8698: "/DMalbums/15_thesingles8698_main.jpg",
  singles8185v2: "/DMalbums/16_thesingles8185_main.jpg",
  exciter: "/DMalbums/17_exciter_main.jpg",
  remixes8104: "/DMalbums/18_remixes8104_main.jpg",
  playingAngel: "/DMalbums/19_playingtheangel_main.jpg",
  bestOfVol1: "/DMalbums/20_thebestofdepechemodevolume1_main.jpg",
  soundsUniverse: "/DMalbums/21_soundsoftheuniverse_main.jpg",
  remixes2: "/DMalbums/22_remixes28111_main.jpg",
  deltaMachine: "/DMalbums/23_deltamachine_main.jpg",
  liveInBerlin: "/DMalbums/24_liveinberlinsoundtrack_main.jpg",
  spirit: "/DMalbums/25_spirit_main.jpg",
  mementoMori: "/DMalbums/26_mementomori_main.jpg",
  mementoMoriMexico: "/DMalbums/27_memento_mori_mexico_city_main.jpg",
  // DM logos
  dmLogo: "/DMalbums/DM_logo.jpg",
  dmLogo2: "/DMalbums/DM_logo2.jpg",
  dmLogo3: "/DMalbums/DM_logo3.jpg",
  
  // Duran Duran
  duranDuran: "https://images.unsplash.com/photo-1619983081563-430f63602796?w=400",
  rio: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400",
  sevenRagged: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400",
  notorious: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=400",
  bigThing: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=400",
  liberty: "https://images.unsplash.com/photo-1619983081563-430f63602796?w=400",
  weddingAlbum: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400",
  
  // a-ha
  huntingHighLow: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400",
  scoundrelDays: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=400",
  stayRoads: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=400",
  eastSun: "https://images.unsplash.com/photo-1619983081563-430f63602796?w=400",
  memorialBeach: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400",
  
  // INXS
  inxsDebut: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400",
  shabooh: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=400",
  theSwing: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=400",
  listenThieves: "https://images.unsplash.com/photo-1619983081563-430f63602796?w=400",
  kick: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400",
  x: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400",
  
  // Modern Talking
  firstAlbum: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=400",
  letsTalkLove: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=400",
  readyRomance: "https://images.unsplash.com/photo-1619983081563-430f63602796?w=400",
  middleNowhere: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400",
  romanticWarriors: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400",
  gardenVenus: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=400",
  backForGood: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=400",
  
  // Generic placeholder for others
  generic1: "https://images.unsplash.com/photo-1619983081563-430f63602796?w=400",
  generic2: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400",
  generic3: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400",
  generic4: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=400",
  generic5: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=400"
};

// Aliases for backwards compatibility
const albumCover = albumCovers.generic1;
const albumCover2 = albumCovers.generic2;
const albumCover3 = albumCovers.generic3;
const albumCover4 = albumCovers.generic4;
const albumCover5 = albumCovers.generic5;

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
    mainPhoto: "/DMphotos/depeche_mode1.jpg",
    logoUrl: "/logos/depeche-mode.png",
    albums: [
      { 
        title: "Speak & Spell", 
        year: 1981, 
        cover: albumCovers.speakAndSpell,
        type: "album",
        tracks: ["New Life", "I Sometimes Wish I Was Dead", "Puppets", "Boys Say Go!", "Nodisco", "What's Your Name?", "Photographic", "Tora! Tora! Tora!", "Big Muff", "Any Second Now (Voices)", "Just Can't Get Enough"] 
      },
      { 
        title: "A Broken Frame", 
        year: 1982, 
        cover: albumCovers.brokenFrame,
        type: "album",
        tracks: ["Leave in Silence", "My Secret Garden", "Monument", "Nothing to Fear", "See You", "Satellite", "The Meaning of Love", "A Photograph of You", "Shouldn't Have Done That", "The Sun & the Rainfall"] 
      },
      { 
        title: "Construction Time Again", 
        year: 1983, 
        cover: albumCovers.constructionTime,
        type: "album",
        tracks: ["Love, in Itself", "More Than a Party", "Pipeline", "Everything Counts", "Two Minute Warning", "Shame", "The Landscape Is Changing", "Told You So", "And Then..."] 
      },
      { 
        title: "Some Great Reward", 
        year: 1984, 
        cover: albumCovers.someGreatReward,
        type: "album",
        tracks: ["Something to Do", "Lie to Me", "People Are People", "It Doesn't Matter", "Stories of Old", "Somebody", "Master and Servant", "If You Want", "Blasphemous Rumours"] 
      },
      { 
        title: "Black Celebration", 
        year: 1986, 
        cover: albumCovers.blackCelebration,
        type: "album",
        tracks: ["Black Celebration", "Fly on the Windscreen – Final", "A Question of Lust", "Sometimes", "It Doesn't Matter Two", "A Question of Time", "Stripped", "Here Is the House", "World Full of Nothing", "Dressed in Black", "New Dress"] 
      },
      { 
        title: "Music for the Masses", 
        year: 1987, 
        cover: albumCovers.musicMasses,
        type: "album",
        tracks: ["Never Let Me Down Again", "The Things You Said", "Strangelove", "Sacred", "Little 15", "Behind the Wheel", "I Want You Now", "To Have and to Hold", "Nothing", "Pimpf"] 
      },
      { 
        title: "Violator", 
        year: 1990, 
        cover: albumCovers.violator,
        type: "album",
        tracks: ["World in My Eyes", "Sweetest Perfection", "Personal Jesus", "Halo", "Waiting for the Night", "Enjoy the Silence", "Policy of Truth", "Blue Dress", "Clean"] 
      },
      { 
        title: "Songs of Faith and Devotion", 
        year: 1993, 
        cover: albumCovers.songsFaith,
        type: "album",
        tracks: ["I Feel You", "Walking in My Shoes", "Condemnation", "Mercy in You", "Judas", "In Your Room", "Get Right with Me", "Rush", "One Caress", "Higher Love"] 
      },
      { 
        title: "Ultra", 
        year: 1997, 
        cover: albumCovers.ultra,
        type: "album",
        tracks: ["Barrel of a Gun", "The Love Thieves", "Home", "It's No Good", "Uselink", "Useless", "Sister of Night", "Jazz Thieves", "Freestate", "The Bottom Line", "Insight"] 
      },
      { 
        title: "Exciter", 
        year: 2001, 
        cover: albumCovers.exciter,
        type: "album",
        tracks: ["Dream On", "Shine", "The Sweetest Condition", "When the Body Speaks", "The Dead of Night", "Lovetheme", "Freelove", "Comatose", "I Feel Loved", "Breathe", "Easy Tiger", "I Am You", "Goodnight Lovers"] 
      },
      { 
        title: "Playing the Angel", 
        year: 2005, 
        cover: albumCovers.playingAngel,
        type: "album",
        tracks: ["A Pain That I'm Used To", "John the Revelator", "Suffer Well", "The Sinner in Me", "Precious", "Macro", "I Want It All", "Nothing's Impossible", "Introspectre", "Damaged People", "Lilian", "The Darkest Star"] 
      },
      { 
        title: "Sounds of the Universe", 
        year: 2009, 
        cover: albumCovers.soundsUniverse,
        type: "album",
        tracks: ["In Chains", "Hole to Feed", "Wrong", "Fragile Tension", "Little Soul", "In Sympathy", "Peace", "Come Back", "Spacewalker", "Perfect", "Miles Away/The Truth Is", "Jezebel", "Corrupt"] 
      },
      { 
        title: "Delta Machine", 
        year: 2013, 
        cover: albumCovers.deltaMachine,
        type: "album",
        tracks: ["Welcome to My World", "Angel", "Heaven", "Secret to the End", "My Little Universe", "Slow", "Broken", "The Child Inside", "Soft Touch/Raw Nerve", "Should Be Higher", "Alone", "Soothe My Soul", "Goodbye"] 
      },
      { 
        title: "Spirit", 
        year: 2017, 
        cover: albumCovers.spirit,
        type: "album",
        tracks: ["Going Backwards", "Where's the Revolution", "The Worst Crime", "Scum", "You Move", "Cover Me", "Eternal", "Poison Heart", "So Much Love", "Poorman", "No More (This Is the Last Time)", "Fail"] 
      },
      { 
        title: "Memento Mori", 
        year: 2023, 
        cover: albumCovers.mementoMori,
        type: "album",
        tracks: ["My Cosmos Is Mine", "Wagging Tongue", "Ghosts Again", "Don't Say You Love Me", "My Favourite Stranger", "Soul with Me", "Caroline's Monkey", "Before We Drown", "People Are Good", "Always You", "Never Let Me Go", "Speak to Me"] 
      },
      // Singles
      { title: "Dreaming of Me", year: 1981, cover: albumCover, type: "single", tracks: ["Dreaming of Me", "Ice Machine"] },
      { title: "New Life", year: 1981, cover: albumCover2, type: "single", tracks: ["New Life", "Shout!"] },
      { title: "Just Can't Get Enough", year: 1981, cover: albumCover3, type: "single", tracks: ["Just Can't Get Enough", "Any Second Now"] },
      { title: "See You", year: 1982, cover: albumCover4, type: "single", tracks: ["See You", "Now This Is Fun"] },
      { title: "The Meaning of Love", year: 1982, cover: albumCover5, type: "single", tracks: ["The Meaning of Love", "Oberkorn (It's a Small Town)"] },
      { title: "Leave in Silence", year: 1982, cover: albumCover, type: "single", tracks: ["Leave in Silence", "Excerpt from: My Secret Garden", "Further Excerpts from: My Secret Garden"] },
      { title: "Get the Balance Right!", year: 1983, cover: albumCover2, type: "single", tracks: ["Get the Balance Right!", "The Great Outdoors!", "Tora! Tora! Tora! (Live)"] },
      { title: "Everything Counts", year: 1983, cover: albumCover3, type: "single", tracks: ["Everything Counts", "Work Hard"] },
      { title: "Love, in Itself", year: 1983, cover: albumCover4, type: "single", tracks: ["Love, in Itself", "Fools", "Just Can't Get Enough (Live)", "A Photograph of You (Live)"] },
      { title: "People Are People", year: 1984, cover: albumCover5, type: "single", tracks: ["People Are People", "In Your Memory"] },
      { title: "Master and Servant", year: 1984, cover: albumCover, type: "single", tracks: ["Master and Servant", "(Set Me Free) Remotivate Me", "Are People People?"] },
      { title: "Blasphemous Rumours", year: 1984, cover: albumCover2, type: "single", tracks: ["Blasphemous Rumours", "Somebody", "Two Minute Warning (Live)", "Ice Machine (Live)", "Everything Counts (Live)"] },
      { title: "Shake the Disease", year: 1985, cover: albumCover3, type: "single", tracks: ["Shake the Disease", "Flexible"] },
      { title: "It's Called a Heart", year: 1985, cover: albumCover4, type: "single", tracks: ["It's Called a Heart", "Fly on the Windscreen"] },
      { title: "Stripped", year: 1986, cover: albumCover5, type: "single", tracks: ["Stripped", "But Not Tonight", "Breathing in Fumes", "Black Day"] },
      { title: "A Question of Lust", year: 1986, cover: albumCover, type: "single", tracks: ["A Question of Lust", "Christmas Island", "People Are People (Live)", "It Doesn't Matter Two (Instrumental)"] },
      { title: "A Question of Time", year: 1986, cover: albumCover2, type: "single", tracks: ["A Question of Time", "Black Celebration (Live)", "Something to Do (Live)", "Stripped (Live)", "More Than a Party (Live)"] },
      { title: "Strangelove", year: 1987, cover: albumCover3, type: "single", tracks: ["Strangelove", "Pimpf", "Agent Orange"] },
      { title: "Never Let Me Down Again", year: 1987, cover: albumCover4, type: "single", tracks: ["Never Let Me Down Again", "Pleasure, Little Treasure", "To Have and to Hold (Spanish Taster)"] },
      { title: "Behind the Wheel", year: 1987, cover: albumCover5, type: "single", tracks: ["Behind the Wheel", "Route 66/Behind the Wheel (Mega-Single Mix)"] },
      { title: "Personal Jesus", year: 1989, cover: albumCover, type: "single", tracks: ["Personal Jesus", "Dangerous"] },
      { title: "Enjoy the Silence", year: 1990, cover: albumCover2, type: "single", tracks: ["Enjoy the Silence", "Memphisto", "Sibeling", "Enjoy the Silence (Hands and Feet Mix)"] },
      { title: "Policy of Truth", year: 1990, cover: albumCover3, type: "single", tracks: ["Policy of Truth", "Kaleid"] },
      { title: "World in My Eyes", year: 1990, cover: albumCover4, type: "single", tracks: ["World in My Eyes", "Happiest Girl", "Sea of Sin"] },
      { title: "I Feel You", year: 1993, cover: albumCover5, type: "single", tracks: ["I Feel You", "One Caress", "I Feel You (Throb Mix)", "I Feel You (Babylon Mix)"] },
      { title: "Walking in My Shoes", year: 1993, cover: albumCover, type: "single", tracks: ["Walking in My Shoes", "My Joy", "Walking in My Shoes (Grungy Gonads Mix)"] },
      { title: "Condemnation", year: 1993, cover: albumCover2, type: "single", tracks: ["Condemnation", "Death's Door (Jazz Mix)", "Rush (Spiritual Guidance Mix)"] },
      { title: "In Your Room", year: 1994, cover: albumCover3, type: "single", tracks: ["In Your Room", "Higher Love", "In Your Room (Zephyr Mix)"] },
      { title: "Barrel of a Gun", year: 1997, cover: albumCover4, type: "single", tracks: ["Barrel of a Gun", "Painkiller", "Barrel of a Gun (Underworld Soft Mix)"] },
      { title: "It's No Good", year: 1997, cover: albumCover5, type: "single", tracks: ["It's No Good", "Slowblow", "It's No Good (Speedy J Mix)"] },
      { title: "Home", year: 1997, cover: albumCover, type: "single", tracks: ["Home", "Useless (Live)", "Barrel of a Gun (Live)", "It's No Good (Live)"] },
      { title: "Useless", year: 1997, cover: albumCover2, type: "single", tracks: ["Useless", "Useless (Escape from Wherever: Parts 1 & 2)", "Useless (CJ Bolland Funky Sub Mix)"] },
      { title: "Only When I Lose Myself", year: 1998, cover: albumCover3, type: "single", tracks: ["Only When I Lose Myself", "Surrender", "Headstar", "Only When I Lose Myself (Subsonic Legacy Remix)"] },
      { title: "Dream On", year: 2001, cover: albumCover4, type: "single", tracks: ["Dream On", "Easy Tiger", "Dream On (Dave Clarke Remix)"] },
      { title: "I Feel Loved", year: 2001, cover: albumCover5, type: "single", tracks: ["I Feel Loved", "Dirt", "I Feel Loved (Danny Tenaglia's Labor of Love Mix)"] },
      { title: "Freelove", year: 2001, cover: albumCover, type: "single", tracks: ["Freelove", "Zenstation", "Freelove (Flood Mix)"] },
      { title: "Goodnight Lovers", year: 2002, cover: albumCover2, type: "single", tracks: ["Goodnight Lovers", "When the Body Speaks (Acoustic)", "The Dead of Night (Electronicat Remix)"] },
      { title: "Enjoy the Silence 04", year: 2004, cover: albumCover3, type: "single", tracks: ["Enjoy the Silence 04", "Halo (Goldfrapp Remix)", "Enjoy the Silence (Timo Maas Remix)"] },
      { title: "Precious", year: 2005, cover: albumCover4, type: "single", tracks: ["Precious", "Free", "Precious (Sasha's Spooky Mix)"] },
      { title: "A Pain That I'm Used To", year: 2005, cover: albumCover5, type: "single", tracks: ["A Pain That I'm Used To", "Newborn", "A Pain That I'm Used To (Jacques Lu Cont Remix)"] },
      { title: "Suffer Well", year: 2006, cover: albumCover, type: "single", tracks: ["Suffer Well", "The Darkest Star (Monolake Remix)", "Suffer Well (Narcotic Thrust Dub)"] },
      { title: "John the Revelator", year: 2006, cover: albumCover2, type: "single", tracks: ["John the Revelator", "Lilian", "John the Revelator (Dave Is in the Disco Mix)"] },
      { title: "Martyr", year: 2006, cover: albumCover3, type: "single", tracks: ["Martyr", "Martyr (Paul van Dyk Remix)", "Martyr (Booka Shade Full Vocal Mix)"] },
      { title: "Wrong", year: 2009, cover: albumCover4, type: "single", tracks: ["Wrong", "Oh Well", "Wrong (Trentemøller Club Remix)"] },
      { title: "Peace", year: 2009, cover: albumCover5, type: "single", tracks: ["Peace", "Come Back (Leama & Moor Remix)", "Peace (SixToes Remix)"] },
      { title: "Fragile Tension", year: 2009, cover: albumCover, type: "single", tracks: ["Fragile Tension", "Hole to Feed (Holy Ghost! Remix)", "Fragile Tension (Peter Bjorn and John Remix)"] },
      { title: "Personal Jesus 2011", year: 2011, cover: albumCover2, type: "single", tracks: ["Personal Jesus (Alex Metric Remix)", "Personal Jesus (Stargate Entertainment Remix)"] },
      { title: "Heaven", year: 2013, cover: albumCover3, type: "single", tracks: ["Heaven", "All That's Mine", "Heaven (Blawan Remix)"] },
      { title: "Soothe My Soul", year: 2013, cover: albumCover4, type: "single", tracks: ["Soothe My Soul", "Angel (Robag Wruhme Remix)", "Soothe My Soul (Steve Angello vs. Jacques Lu Cont Remix)"] },
      { title: "Should Be Higher", year: 2013, cover: albumCover5, type: "single", tracks: ["Should Be Higher", "Goodbye (remix)", "Should Be Higher (Andhim Remix)"] },
      { title: "Where's the Revolution", year: 2017, cover: albumCover, type: "single", tracks: ["Where's the Revolution", "Where's the Revolution (Terence Fixmer Remix)"] },
      { title: "Going Backwards", year: 2017, cover: albumCover2, type: "single", tracks: ["Going Backwards", "Going Backwards (Chris Liebing Remix)"] },
      { title: "Cover Me", year: 2017, cover: albumCover3, type: "single", tracks: ["Cover Me", "Cover Me (Ellen Allien U.F.O. Remix)"] },
      { title: "Ghosts Again", year: 2023, cover: albumCover4, type: "single", tracks: ["Ghosts Again", "Ghosts Again (Wolfgang Flür Remix)"] },
      { title: "Wagging Tongue", year: 2023, cover: albumCover5, type: "single", tracks: ["Wagging Tongue", "Wagging Tongue (Myer Remix)"] },
      { title: "My Favourite Stranger", year: 2023, cover: albumCover, type: "single", tracks: ["My Favourite Stranger", "My Favourite Stranger (Alan Moulder Remix)"] }
    ],
    photos: artistPhotos.depeche
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
    mainPhoto: "/80s_photos/duran duran1.jpg",
    logoUrl: "/logos/duran-duran.png",
    albums: [
      { title: "Duran Duran", year: 1981, cover: albumCovers.duranDuran, type: "album", tracks: ["Planet Earth", "Girls on Film", "Careless Memories", "Night Boat", "Sound of Thunder", "Friends of Mine", "Tel Aviv", "Anyone Out There", "To the Shore"] },
      { title: "Rio", year: 1982, cover: albumCovers.rio, type: "album", tracks: ["Rio", "Hungry Like the Wolf", "Save a Prayer", "Hold Back the Rain", "New Religion", "My Own Way", "Lonely in Your Nightmare", "The Chauffeur", "Last Chance on the Stairway"] },
      { title: "Seven and the Ragged Tiger", year: 1983, cover: albumCovers.sevenRagged, type: "album", tracks: ["The Reflex", "Union of the Snake", "New Moon on Monday", "I Take the Dice", "Of Crime and Passion", "Shadows on Your Side", "Tiger Tiger", "The Seventh Stranger", "Cracks in the Pavement"] },
      { title: "Notorious", year: 1986, cover: albumCovers.notorious, type: "album", tracks: ["Notorious", "Skin Trade", "A Matter of Feeling", "Meet El Presidente", "American Science", "Winter Marches On", "Vertigo (Do the Demolition)", "So Misled", "Proposition"] },
      { title: "Big Thing", year: 1988, cover: albumCovers.bigThing, type: "album", tracks: ["Big Thing", "I Don't Want Your Love", "All She Wants Is", "Too Late Marlene", "Drug (It's Just a State of Mind)", "Do You Believe in Shame?", "Palomino", "Interlude One", "Land", "Flute Interlude", "The Edge of America", "Lake Shore Driving"] },
      { title: "Liberty", year: 1990, cover: albumCovers.liberty, type: "album", tracks: ["Violence of Summer (Love's Taking Over)", "Liberty", "Hothead", "Serious", "All Along the Water", "My Antarctica", "First Impression", "Read My Lips", "Can You Deal with It", "Venice Drowning", "Downtown"] },
      { title: "The Wedding Album", year: 1993, cover: albumCovers.weddingAlbum, type: "album", tracks: ["Too Much Information", "Ordinary World", "Come Undone", "Drowning Man", "Love Voodoo", "Shotgun", "UMF", "Femme Fatale", "None of the Above", "Shelter", "To Whom It May Concern", "Sin of the City"] },
      { title: "Thank You", year: 1995, cover: albumCover3, type: "album", tracks: ["White Lines", "I Wanna Take You Higher", "Perfect Day", "Watching the Detectives", "Lay Lady Lay", "911 Is a Joke", "Success", "Crystal Ship", "Ball of Confusion", "Thank You", "Drive By", "I Wanna Take You Higher Again"] },
      { title: "Pop Trash", year: 2000, cover: albumCover4, type: "album", tracks: ["Someone Else Not Me", "Playing with Uranium", "Hallucinating Elvis", "Starting to Remember", "Pop Trash Movie", "Fragment", "Mars Meets Venus", "Lady Xanax", "The Sun Doesn't Shine Forever", "Kiss Goodbye", "Last Day on Earth"] },
      { title: "Astronaut", year: 2004, cover: albumCover5, type: "album", tracks: ["(Reach Up for The) Sunrise", "What Happens Tomorrow", "Astronaut", "Bedroom Toys", "Nice", "Taste the Summer", "Finest Hour", "Want You More!", "Chains", "One of Those Days", "Point of No Return", "Still Breathing"] },
      { title: "Red Carpet Massacre", year: 2007, cover: albumCover, type: "album", tracks: ["The Valley", "Falling Down", "Nite-Runner", "Skin Divers", "Tempted", "Tricked Out", "Zoom In", "She's Too Much", "Dirty Great Monster", "Last Man Standing", "Box Full o' Honey", "Red Carpet Massacre"] },
      { title: "All You Need Is Now", year: 2010, cover: albumCover2, type: "album", tracks: ["All You Need Is Now", "Blame the Machines", "Being Followed", "Leave a Light On", "Mediterranea", "Safe (In the Heat of the Moment)", "Girl Panic!", "The Man Who Stole a Leopard", "Networker Nation", "Other People's Lives", "Runway Runaway", "Return to Now", "Before the Rain"] },
      { title: "Paper Gods", year: 2015, cover: albumCover3, type: "album", tracks: ["Paper Gods", "Last Night in the City", "You Kill Me with Silence", "Pressure Off", "Face for Today", "Danceophobia", "What Are the Chances?", "Sunset Garage", "Change the Skyline", "Butterfly Girl", "Only in Dreams", "The Universe Alone"] },
      { title: "Future Past", year: 2021, cover: albumCover4, type: "album", tracks: ["Invisible", "Anniversary", "Future Past", "Beautiful Lies", "Tonight United", "Wing", "Nothing Less", "Hammerhead", "More Joy!", "Give It All Up", "Falling", "Velvet Newton"] },
      { title: "Danse Macabre", year: 2023, cover: albumCover5, type: "album", tracks: ["Black Moonlight", "Psycho Killer", "Supernature", "Bury a Friend", "Nightclubbing", "Love Comes Quickly", "Paint It Black", "Ghost Town", "Super Lonely Freak", "Spellbound", "Danse Macabre", "Secret Oktober"] }
    ],
    photos: artistPhotos.duran
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
    mainPhoto: "/80s_photos/aha1.jpg",
    albums: [
      { title: "Hunting High and Low", year: 1985, cover: albumCovers.huntingHighLow, type: "album", tracks: ["Take On Me", "Train of Thought", "Hunting High and Low", "The Blue Sky", "Living a Boy's Adventure Tale", "The Sun Always Shines on T.V.", "And You Tell Me", "Love Is Reason", "Dream Myself Alive", "Here I Stand and Face the Rain"] },
      { title: "Scoundrel Days", year: 1986, cover: albumCovers.scoundrelDays, type: "album", tracks: ["Scoundrel Days", "The Swing of Things", "I've Been Losing You", "October", "Manhattan Skyline", "Cry Wolf", "We're Looking for the Whales", "The Weight of the Wind", "Maybe Maybe", "Soft Rains of April"] },
      { title: "Stay on These Roads", year: 1988, cover: albumCovers.stayRoads, type: "album", tracks: ["Stay on These Roads", "The Blood That Moves the Body", "Touchy!", "This Alone Is Love", "Hurry Home", "The Living Daylights", "There's Never a Forever Thing", "Out of Blue Comes Green", "You Are the One", "You'll End Up Crying"] },
      { title: "East of the Sun, West of the Moon", year: 1990, cover: albumCovers.eastSun, type: "album", tracks: ["Crying in the Rain", "Early Morning", "I Call Your Name", "Slender Frame", "East of the Sun", "Sycamore Leaves", "Waiting for Her", "Cold River", "The Way We Talk", "Rolling Thunder", "(Seemingly) Nonstop July"] },
      { title: "Memorial Beach", year: 1993, cover: albumCovers.memorialBeach, type: "album", tracks: ["Dark Is the Night for All", "Move to Memphis", "Cold as Stone", "Angel in the Snow", "Locust", "Lamb to the Slaughter", "How Sweet It Was", "Lie Down in Darkness", "Memorial Beach", "Between Your Mama and Yourself", "Differences"] },
      { title: "Minor Earth Major Sky", year: 2000, cover: albumCover, type: "album", tracks: ["Minor Earth Major Sky", "Little Black Heart", "Velvet", "Summer Moved On", "The Sun Never Shone That Day", "To Let You Win", "The Company Man", "Thought That It Was You", "I Wish I Cared", "Barely Hanging On", "You'll Never Get Over Me", "I Won't Forget Her"] },
      { title: "Lifelines", year: 2002, cover: albumCover2, type: "album", tracks: ["Lifelines", "You Wanted More", "Forever Not Yours", "Time and Again", "Did Anyone Approach You?", "Afternoon High", "A Little Bit", "Less Than Pure", "Turned Off Turn On", "Cannot Hide", "White Canvas", "Dragonfly"] },
      { title: "Analogue", year: 2005, cover: albumCover3, type: "album", tracks: ["Celice", "Cosy Prisons", "Analogue (All I Want)", "Make It Soon", "The Bandstand", "What There Is", "Birthright", "Holyground", "Over the Treetops", "A Fine Blue Line", "Halfway Through the Tour"] },
      { title: "Foot of the Mountain", year: 2009, cover: albumCover4, type: "album", tracks: ["The Bandstand", "Foot of the Mountain", "What Do You Want from Me?", "Riding the Crest", "Real Meaning", "Shadowside", "Nothing Is Keeping You Here", "Mother Nature Goes to Heaven", "Sunny Mystery", "Start the Simulator"] },
      { title: "Cast in Steel", year: 2015, cover: albumCover5, type: "album", tracks: ["Cast in Steel", "Under the Makeup", "The Wake", "Forest Fire", "Objects in the Mirror", "Door Ajar", "Living at the End of the World", "She's Humming a Tune", "Shadow Endeavors", "Mythomania", "Giving Up the Ghost", "Goodbye Thompson"] },
      { title: "True North", year: 2022, cover: albumCover, type: "album", tracks: ["I'm In", "Forest for the Trees", "Bluebottle", "Bumblebee", "You Have What It Takes", "True North", "Between the Halo and the Horn", "Oh My My", "Make It Happen", "Hurry Don't Rush Me", "Whales Don't Cry", "Smooth Operator"] }
    ],
    photos: artistPhotos.aha
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
    mainPhoto: "/80s_photos/inxs1.jpg",
    logoUrl: "/logos/inxs.png",
    albums: [
      { title: "INXS", year: 1980, cover: albumCovers.inxsDebut, type: "album", tracks: ["On a Bus", "Doctor", "Just Keep Walking", "Learn to Smile", "Jumping", "In Vain", "Roller Skating", "Body Language", "Newsreel Babies", "Wishy Washy"] },
      { title: "Underneath the Colours", year: 1981, cover: albumCover2, type: "album", tracks: ["Stay Young", "Horizons", "Big Go Go", "Underneath the Colours", "Fair Weather Ahead", "Night of Rebellion", "Follow", "Barbarian", "Just to Learn Again", "What Would You Do"] },
      { title: "Shabooh Shoobah", year: 1982, cover: albumCovers.shabooh, type: "album", tracks: ["The One Thing", "To Look at You", "Spy of Love", "Soul Mistake", "Here Comes II", "Black and White", "Golden Playpen", "Jan's Song", "Old World New World", "Don't Change"] },
      { title: "The Swing", year: 1984, cover: albumCovers.theSwing, type: "album", tracks: ["Original Sin", "Melting in the Sun", "I Send a Message", "Dancing on the Jetty", "The Swing", "Johnson's Aeroplane", "Love Is (What I Say)", "Face the Change", "Burn for You", "All the Voices"] },
      { title: "Listen Like Thieves", year: 1985, cover: albumCovers.listenThieves, type: "album", tracks: ["What You Need", "Listen Like Thieves", "Kiss the Dirt (Falling Down the Mountain)", "Shine Like It Does", "Good & Bad Times", "Biting Bullets", "This Time", "Three Sisters", "Same Direction", "One × One", "Red Red Sun"] },
      { title: "Kick", year: 1987, cover: albumCovers.kick, type: "album", tracks: ["Guns in the Sky", "New Sensation", "Devil Inside", "Need You Tonight", "Mediate", "The Loved One", "Wild Life", "Never Tear Us Apart", "Mystify", "Kick", "Calling All Nations", "Tiny Daggers"] },
      { title: "X", year: 1990, cover: albumCovers.x, type: "album", tracks: ["Suicide Blonde", "Disappear", "The Stairs", "Faith in Each Other", "By My Side", "Lately", "Who Pays the Price", "Know the Difference", "Bitter Tears", "On My Way", "Hear That Sound"] },
      { title: "Welcome to Wherever You Are", year: 1992, cover: albumCover3, type: "album", tracks: ["Questions", "Heaven Sent", "Communication", "Taste It", "Not Enough Time", "All Around", "Baby Don't Cry", "Beautiful Girl", "Wishing Well", "Back on Line", "Strange Desire", "Men and Women"] },
      { title: "Full Moon, Dirty Hearts", year: 1993, cover: albumCover4, type: "album", tracks: ["Days of Rust", "The Gift", "Make Your Peace", "Time", "I'm Only Looking", "Please (You Got That...)", "Full Moon, Dirty Hearts", "Freedom Deep", "Kill the Pain", "Cut Your Roses Down", "The Messenger", "Viking Juice"] },
      { title: "Elegantly Wasted", year: 1997, cover: albumCover5, type: "album", tracks: ["Elegantly Wasted", "Everything", "Don't Lose Your Head", "Searching", "Show Me (Cherry Baby)", "Let It Ride", "She Is Rising", "Building Bridges", "I'm Just a Man", "Girl on Fire", "We Are Thrown Together"] }
    ],
    photos: artistPhotos.inxs
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
    mainPhoto: "/80s_photos/modern talking1.jpg",
    logoUrl: "/logos/modern-talking.png",
    albums: [
      { title: "The 1st Album", year: 1985, cover: albumCovers.firstAlbum, type: "album", tracks: ["You're My Heart, You're My Soul", "You Can Win If You Want", "There's Too Much Blue in Missing You", "Lucky Guy", "Do You Wanna", "One in a Million", "Heaven Will Know", "With a Little Love", "The Night Is Yours – The Night Is Mine", "Keep Love Alive"] },
      { title: "Let's Talk About Love", year: 1985, cover: albumCovers.letsTalkLove, type: "album", tracks: ["Cheri, Cheri Lady", "Atlantis Is Calling (S.O.S. for Love)", "Lonely Tears in Chinatown", "Just Like an Angel", "Let's Talk About Love", "With a Little Love", "Love Don't Live Here Anymore", "You're the Lady of My Heart", "Diamonds Never Made a Lady", "It's Christmas"] },
      { title: "Ready for Romance", year: 1986, cover: albumCovers.readyRomance, type: "album", tracks: ["Brother Louie", "Jet Airliner", "Love in Your Eyes", "Ready for Romance", "You're the Lady of My Heart", "One in a Million", "Save Me – Don't Break Me", "Angie's Heart", "Blinded by Your Love", "Lady Lai"] },
      { title: "In the Middle of Nowhere", year: 1986, cover: albumCovers.middleNowhere, type: "album", tracks: ["Geronimo's Cadillac", "Give Me Peace on Earth", "Princess of the Night", "Stranded in the Middle of Nowhere", "Sweet Little Sheila", "Maria", "Ten Thousand Lonely Drums", "Don't Give Up", "Bells of Paris", "The Angels Sing in New York City"] },
      { title: "Romantic Warriors", year: 1987, cover: albumCovers.romanticWarriors, type: "album", tracks: ["We Take the Chance", "Don't Let It Get You Down", "Romantic Warriors", "Charlene", "Lonely Tears in Chinatown", "Just Close Your Eyes", "Rouge et Noir", "Goodbye Baby", "Follow the Rainbow", "Midnight Lady", "Walking in the Rain"] },
      { title: "In the Garden of Venus", year: 1987, cover: albumCovers.gardenVenus, type: "album", tracks: ["In 100 Years", "In Shaire", "Locomotion Tango", "In the Garden of Venus", "When the Sky Rained Fire", "Riding on a White Swan", "Slow Motion", "Doctor for My Heart", "Ave Maria", "Nostalgia"] },
      { title: "Back for Good", year: 1998, cover: albumCovers.backForGood, type: "album", tracks: ["You're My Heart, You're My Soul '98", "Brother Louie '98", "China in Her Eyes", "Juliet", "You Are Not Alone", "Anything Is Possible", "No Face, No Name, No Number", "Space Mix '98", "Good Girls Go to Heaven – Bad Girls Go to Everywhere", "I'll Never Give You Up"] },
      { title: "Alone", year: 1999, cover: albumCover3, type: "album", tracks: ["Sexy Sexy Lover", "You're a Woman", "No.1 Hit Medley", "Hey You", "Last Exit to Brooklyn", "Alone", "It's Your Smile", "Love Is Forever", "We Still Have Dreams", "In a Hundred Years", "Cheri, Cheri Lady '99"] },
      { title: "Year of the Dragon", year: 2000, cover: albumCover4, type: "album", tracks: ["Win the Race", "Don't Make Me Blue", "China in Her Eyes 2000", "Don't Take Away My Heart", "Words Don't Come Easy", "I Need You Now", "I Will Follow You", "Year of the Dragon", "Part Time Lover", "Superstar", "Fly to the Moon", "With a Little Love '99", "Are You Ready for Love", "Cheri, Cheri Lady 2000"] },
      { title: "America", year: 2001, cover: albumCover5, type: "album", tracks: ["SMS to My Heart", "Ready for the Victory", "I Can't Give You More", "Live Your Dream", "Can't Let You Go", "Don't Worry", "America", "The Night Is Yours", "Just Say You'll Be Mine", "I Need You", "Love Is Like a Rainbow", "Do You Know", "Another Night in Paradise", "Blue System Megamix"] },
      { title: "Universe", year: 2003, cover: albumCover, type: "album", tracks: ["TV Makes the Superstar", "Knocking on My Door", "You Can Win If You Want (New Version)", "Walking in the Rain", "Love to Love You", "Universe", "For a Lifetime", "Nothing But the Truth", "Superstar", "Modern Talking Medley", "It's Your Birthday", "We Are Children of the World"] }
    ],
    photos: artistPhotos.modern
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
    mainPhoto: "/80s_photos/frankie goes to hollywood1.jpg",
    logoUrl: "/logos/blue-system.png",
    albums: [
      { title: "Walking on a Rainbow", year: 1987, cover: albumCover, type: "album", tracks: ["Sorry Little Sarah", "On the Floor Tonight", "Silent Water", "Under My Skin", "Walking on a Rainbow", "Love Suite", "My Bed Is Too Big", "Follow Me", "Sorry Little Sarah (Reprise)", "Gangster Love"] },
      { title: "Body Heat", year: 1988, cover: albumCover2, type: "album", tracks: ["My Bed Is Too Big", "Love Me on the Rocks", "Body Heat", "Operator", "Déjà Vu", "Magic Mystery", "28° C (Too Hot for September)", "When Sarah Smiles", "Shame, Shame, Shame", "She's a Lady"] },
      { title: "Twilight", year: 1989, cover: albumCover3, type: "album", tracks: ["Love Is Such a Lonely Sword", "Twilight", "Lucifer", "This Is the Night", "That's Love", "It's Ecstasy", "Don't You Ever Forget", "Sister Cool", "Taxi Girl", "Seeds of Heaven"] },
      { title: "Obsession", year: 1990, cover: albumCover4, type: "album", tracks: ["Love Will Drive Me Crazy", "6 Years – 6 Nights", "Love Me More", "G.T.O.", "Obsession", "I'm Not Responsible", "Headlines", "Love Will Be Forever", "Here I Go Again", "Julie Says"] },
      { title: "Seeds of Heaven", year: 1991, cover: albumCover5, type: "album", tracks: ["Déjà Vu '91", "Romeo & Juliet", "Seeds of Heaven", "System of Love", "That's All Right", "Dr. Mabuse", "Laila", "Sorry Little Sarah '91", "Midnight Blue", "Love Suite '91"] },
      { title: "21st Century", year: 1994, cover: albumCover, type: "album", tracks: ["Dr. Mabuse", "21st Century", "History", "Testamente d'Amelia", "X-Ten-Dance", "That's the Way It Is", "Love Me on the Rocks '94", "Radio Lollipop", "When Sarah Smiles '94", "Magic Symphony"] },
      { title: "Hello America", year: 1997, cover: albumCover2, type: "album", tracks: ["Only with You", "See You in Miami", "Hello America", "You'll Never Be Alone", "Titanic", "Rain in My Heart", "Laila", "Love Me More", "Love Is Such a Lonely Sword '97", "Operator '97"] }
    ],
    photos: artistPhotos.generic
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
    mainPhoto: "/80s_photos/frankie goes to hollywood1.jpg",
    logoUrl: "/logos/joy.png",
    albums: [
      { title: "Joy and Tears", year: 1986, cover: albumCover, type: "album", tracks: ["Touch by Touch", "Valerie", "Hello", "Japanese Girls", "Let Me Dream", "Tomorrow", "Sunshine Reggae", "Midnight Love", "Baby Baby", "One More Time"] },
      { title: "Wonderful", year: 1987, cover: albumCover2, type: "album", tracks: ["Lovely Dream", "Show Me the Way", "Wonderful", "Breaking Hearts", "Moonlight", "Dancing Under the Moon", "Follow Me", "Heart on Fire", "I Love You So", "Night of the Stars"] }
    ],
    photos: artistPhotos.generic
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
    mainPhoto: "/80s_photos/frankie goes to hollywood1.jpg",
    logoUrl: "/logos/sigue-sigue-sputnik.png",
    albums: [
      { title: "Flaunt It", year: 1986, cover: albumCover, type: "album", tracks: ["Love Missile F1-11", "Atari Baby", "Sex Bomb Boogie", "21st Century Boy", "Massive Retaliation", "Rocket Miss U.S.A.", "Sci-Fi Baby!", "She's My Man", "Teenage Thunder", "Is This the Future?"] },
      { title: "Dress for Excess", year: 1988, cover: albumCover2, type: "album", tracks: ["Success", "Dancerama", "Albinoni vs. Star Wars", "Hey Jane", "Boom Boom Satellite", "Rio Rocks", "M*A*D*", "Pirate Doubloon Dancerama", "I Rock the World", "Ultraviolence"] }
    ],
    photos: artistPhotos.generic
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
    mainPhoto: "/80s_photos/frankie goes to hollywood1.jpg",
    albums: [
      { title: "Geography", year: 1982, cover: albumCover, type: "album", tracks: ["Operating Tracks", "Kinetics", "Kampfbereit", "Art & Strategy", "U-Men", "Geography", "Black White Blue", "Young Guys", "Electronomic", "Take One"] },
      { title: "No Comment", year: 1984, cover: albumCover2, type: "album", tracks: ["No Shuffle", "Commando Mix", "Deceit", "Politics of Pressure", "Work 242", "Commando Remix", "No Shuffle (Special Forces Mix)", "Take One (U.S. Army Remix)"] },
      { title: "Official Version", year: 1987, cover: albumCover3, type: "album", tracks: ["W.Y.H.I.W.Y.G.", "Slaughter", "Angst", "Welcome to Paradise", "Rerun Time", "First in First out", "Quite Unusual", "Loud", "Bloke", "Funkahdafi", "Television Station"] },
      { title: "Front by Front", year: 1988, cover: albumCover4, type: "album", tracks: ["Headhunter", "Welcome to Paradise", "Circling Overland", "First in First out", "Never Stop!", "Im Rhythmus Bleiben", "Work 01", "Blend the Strengths", "Felines", "The Untold"] },
      { title: "Tyranny >For You<", year: 1991, cover: albumCover5, type: "album", tracks: ["Sacrifice", "Tragedy >For You<", "Rhythm of Time", "Moldavia", "Leitmotiv", "Soul Manager", "Trigger 2", "Neurobashing", "Gripped by Fear", "Trigger 1"] },
      { title: "06:21:03:11 Up Evil", year: 1993, cover: albumCover, type: "album", tracks: ["Crapage", "Animal (Gate)", "Religion", "Together", "Melt", "Modern Angel", "Motion", "Skin", "Crushed", "Junkdrome", "Happiness"] },
      { title: "05:22:09:12 Off", year: 1993, cover: albumCover2, type: "album", tracks: ["Off", "Serial Killers Don't Kill Their Girlfriend", "Acrobat", "Ethics", "Body to Body", "Touch Me", "New Dance", "Quite Unusual (Off Mix)", "Controversy Between"] },
      { title: "Pulse", year: 2003, cover: albumCover3, type: "album", tracks: ["Take One", "Together Now", "Columbian Hunch", "Seq 666", "Lovely Day", "Psychedelic", "Unknown", "Therapy?", "Punish Your Machine", "Noise from the Heart", "Slow Motion"] }
    ],
    photos: artistPhotos.generic
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
    mainPhoto: "/80s_photos/frankie goes to hollywood1.jpg",
    logoUrl: "/logos/dead-or-alive.png",
    albums: [
      { title: "Sophisticated Boom Boom", year: 1984, cover: albumCover, type: "album", tracks: ["That's the Way (I Like It)", "I Wanna Be Your Toy", "Selfish Side", "What I Want", "Cake and Eat It", "Don't Cry", "You Make Me Wanna", "How Do I Feel", "Misty Circles", "Throw Your Arms Around Me"] },
      { title: "Youthquake", year: 1985, cover: albumCover2, type: "album", tracks: ["You Spin Me Round (Like a Record)", "Lover Come Back to Me", "In Too Deep", "My Heart Goes Bang (Get Me to the Doctor)", "I'd Do Anything", "What I Want (Remix)", "Big Daddy of the Rhythm", "This Strangers Love", "Cake and Eat It (Remix)", "D.J. Hit That Button"] },
      { title: "Mad, Bad, and Dangerous to Know", year: 1987, cover: albumCover3, type: "album", tracks: ["Brand New Lover", "Something in My House", "Son of a Gun", "I'll Save You All My Kisses", "Hooked on Love", "Come Home with Me Baby", "Special Star", "Then There Was You", "Sit on It", "You Spin Me Round (Murder Mix)"] },
      { title: "Nude", year: 1989, cover: albumCover4, type: "album", tracks: ["Come Home with Me Baby", "Baby Don't Say Goodbye", "Freaky", "Never Never Land", "My Heart Beats Like a Drum", "Rescue Me", "In the Life", "Take It", "Give Up This Foolishness", "Misfits", "The Last of the Teenage Idols"] },
      { title: "Fan the Flame (Part 1)", year: 1990, cover: albumCover5, type: "album", tracks: ["Your Sweetness (Is Your Weakness)", "Unhappy Birthday", "Let's Get Greedy", "Furry Happy", "Turn Around and Count 2 Ten", "Love Thy Neighbour", "Cop This Lot", "Megamix"] },
      { title: "Nukleopatra", year: 1995, cover: albumCover, type: "album", tracks: ["Nukleopatra", "Rebel Rebel", "Hit and Run Lover", "Sex Drive", "I Paralyze", "International Thing", "Give It Back (That Love Is Mine)", "D'ya Dare", "Unhappy Birthday", "You Spin Me Round '96", "Disco Beat", "I Can Turn Around"] }
    ],
    photos: artistPhotos.generic
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
