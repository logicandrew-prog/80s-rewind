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
      // Studio Albums
      { 
        title: "Speak & Spell", 
        year: 1981, 
        cover: "https://upload.wikimedia.org/wikipedia/en/7/7e/Depeche_Mode_-_Speak_%26_Spell.png",
        type: "album",
        tracks: ["New Life", "I Sometimes Wish I Was Dead", "Puppets", "Boys Say Go!", "Nodisco", "What's Your Name?", "Photographic", "Tora! Tora! Tora!", "Big Muff", "Any Second Now (Voices)", "Just Can't Get Enough"] 
      },
      { 
        title: "A Broken Frame", 
        year: 1982, 
        cover: "https://upload.wikimedia.org/wikipedia/en/1/1f/Depeche_Mode_-_A_Broken_Frame.png",
        type: "album",
        tracks: ["Leave in Silence", "My Secret Garden", "Monument", "Nothing to Fear", "See You", "Satellite", "The Meaning of Love", "A Photograph of You", "Shouldn't Have Done That", "The Sun & the Rainfall"] 
      },
      { 
        title: "Construction Time Again", 
        year: 1983, 
        cover: "https://upload.wikimedia.org/wikipedia/en/6/6d/Depeche_Mode_-_Construction_Time_Again.png",
        type: "album",
        tracks: ["Love, in Itself", "More Than a Party", "Pipeline", "Everything Counts", "Two Minute Warning", "Shame", "The Landscape Is Changing", "Told You So", "And Then..."] 
      },
      { 
        title: "Some Great Reward", 
        year: 1984, 
        cover: "https://upload.wikimedia.org/wikipedia/en/1/1c/Depeche_Mode_-_Some_Great_Reward.png",
        type: "album",
        tracks: ["Something to Do", "Lie to Me", "People Are People", "It Doesn't Matter", "Stories of Old", "Somebody", "Master and Servant", "If You Want", "Blasphemous Rumours"] 
      },
      { 
        title: "Black Celebration", 
        year: 1986, 
        cover: "https://upload.wikimedia.org/wikipedia/en/2/2e/Depeche_Mode_-_Black_Celebration.png",
        type: "album",
        tracks: ["Black Celebration", "Fly on the Windscreen – Final", "A Question of Lust", "Sometimes", "It Doesn't Matter Two", "A Question of Time", "Stripped", "Here Is the House", "World Full of Nothing", "Dressed in Black", "New Dress"] 
      },
      { 
        title: "Music for the Masses", 
        year: 1987, 
        cover: "https://upload.wikimedia.org/wikipedia/en/0/0b/Depeche_Mode_-_Music_for_the_Masses.png",
        type: "album",
        tracks: ["Never Let Me Down Again", "The Things You Said", "Strangelove", "Sacred", "Little 15", "Behind the Wheel", "I Want You Now", "To Have and to Hold", "Nothing", "Pimpf"] 
      },
      { 
        title: "Violator", 
        year: 1990, 
        cover: "https://upload.wikimedia.org/wikipedia/en/1/17/Depeche_Mode_-_Violator.png",
        type: "album",
        tracks: ["World in My Eyes", "Sweetest Perfection", "Personal Jesus", "Halo", "Waiting for the Night", "Enjoy the Silence", "Policy of Truth", "Blue Dress", "Clean"] 
      },
      { 
        title: "Songs of Faith and Devotion", 
        year: 1993, 
        cover: "https://upload.wikimedia.org/wikipedia/en/8/8a/Depeche_Mode_-_Songs_of_Faith_and_Devotion.png",
        type: "album",
        tracks: ["I Feel You", "Walking in My Shoes", "Condemnation", "Mercy in You", "Judas", "In Your Room", "Get Right with Me", "Rush", "One Caress", "Higher Love"] 
      },
      { 
        title: "Ultra", 
        year: 1997, 
        cover: "https://upload.wikimedia.org/wikipedia/en/e/e1/Depeche_Mode_-_Ultra.png",
        type: "album",
        tracks: ["Barrel of a Gun", "The Love Thieves", "Home", "It's No Good", "Uselink", "Useless", "Sister of Night", "Jazz Thieves", "Freestate", "The Bottom Line", "Insight"] 
      },
      { 
        title: "Exciter", 
        year: 2001, 
        cover: "https://upload.wikimedia.org/wikipedia/en/1/11/Depeche_Mode_-_Exciter.png",
        type: "album",
        tracks: ["Dream On", "Shine", "The Sweetest Condition", "When the Body Speaks", "The Dead of Night", "Lovetheme", "Freelove", "Comatose", "I Feel Loved", "Breathe", "Easy Tiger", "I Am You", "Goodnight Lovers"] 
      },
      { 
        title: "Playing the Angel", 
        year: 2005, 
        cover: "https://upload.wikimedia.org/wikipedia/en/1/19/Depeche_Mode_-_Playing_the_Angel.png",
        type: "album",
        tracks: ["A Pain That I'm Used To", "John the Revelator", "Suffer Well", "The Sinner in Me", "Precious", "Macro", "I Want It All", "Nothing's Impossible", "Introspectre", "Damaged People", "Lilian", "The Darkest Star"] 
      },
      { 
        title: "Sounds of the Universe", 
        year: 2009, 
        cover: "https://upload.wikimedia.org/wikipedia/en/d/d2/Depeche_Mode_-_Sounds_of_the_Universe.png",
        type: "album",
        tracks: ["In Chains", "Hole to Feed", "Wrong", "Fragile Tension", "Little Soul", "In Sympathy", "Peace", "Come Back", "Spacewalker", "Perfect", "Miles Away/The Truth Is", "Jezebel", "Corrupt"] 
      },
      { 
        title: "Delta Machine", 
        year: 2013, 
        cover: "https://upload.wikimedia.org/wikipedia/en/d/d9/Depeche_Mode_-_Delta_Machine.png",
        type: "album",
        tracks: ["Welcome to My World", "Angel", "Heaven", "Secret to the End", "My Little Universe", "Slow", "Broken", "The Child Inside", "Soft Touch/Raw Nerve", "Should Be Higher", "Alone", "Soothe My Soul", "Goodbye"] 
      },
      { 
        title: "Spirit", 
        year: 2017, 
        cover: "https://upload.wikimedia.org/wikipedia/en/c/cf/Depeche_Mode_-_Spirit.png",
        type: "album",
        tracks: ["Going Backwards", "Where's the Revolution", "The Worst Crime", "Scum", "You Move", "Cover Me", "Eternal", "Poison Heart", "So Much Love", "Poorman", "No More (This Is the Last Time)", "Fail"] 
      },
      { 
        title: "Memento Mori", 
        year: 2023, 
        cover: "https://upload.wikimedia.org/wikipedia/en/1/17/Depeche_Mode_-_Memento_Mori.png",
        type: "album",
        tracks: ["My Cosmos Is Mine", "Wagging Tongue", "Ghosts Again", "Don't Say You Love Me", "My Favourite Stranger", "Soul with Me", "Caroline's Monkey", "Before We Drown", "People Are Good", "Always You", "Never Let Me Go", "Speak to Me"] 
      },
      // Singles
      { title: "Dreaming of Me", year: 1981, cover: "https://upload.wikimedia.org/wikipedia/en/4/4e/Depeche_Mode_-_Dreaming_of_Me.png", type: "single", tracks: ["Dreaming of Me", "Ice Machine"] },
      { title: "New Life", year: 1981, cover: "https://upload.wikimedia.org/wikipedia/en/6/69/Depeche_Mode_-_New_Life.png", type: "single", tracks: ["New Life", "Shout!"] },
      { title: "Just Can't Get Enough", year: 1981, cover: "https://upload.wikimedia.org/wikipedia/en/6/6d/Depeche_Mode_-_Just_Can%27t_Get_Enough.png", type: "single", tracks: ["Just Can't Get Enough", "Any Second Now"] },
      { title: "See You", year: 1982, cover: "https://upload.wikimedia.org/wikipedia/en/5/59/Depeche_Mode_-_See_You.png", type: "single", tracks: ["See You", "Now, This Is Fun"] },
      { title: "The Meaning of Love", year: 1982, cover: "https://upload.wikimedia.org/wikipedia/en/b/b5/Depeche_Mode_-_The_Meaning_of_Love.png", type: "single", tracks: ["The Meaning of Love", "Oberkorn (It's a Small Town)"] },
      { title: "Leave in Silence", year: 1982, cover: "https://upload.wikimedia.org/wikipedia/en/8/88/Depeche_Mode_-_Leave_in_Silence.png", type: "single", tracks: ["Leave in Silence", "Excerpt from: My Secret Garden", "Further Excerpts from: My Secret Garden"] },
      { title: "Get the Balance Right!", year: 1983, cover: "https://upload.wikimedia.org/wikipedia/en/f/f3/Depeche_Mode_-_Get_the_Balance_Right%21.png", type: "single", tracks: ["Get the Balance Right!", "The Great Outdoors!", "Tora! Tora! Tora! (Live)"] },
      { title: "Everything Counts", year: 1983, cover: "https://upload.wikimedia.org/wikipedia/en/d/d0/Depeche_Mode_-_Everything_Counts.png", type: "single", tracks: ["Everything Counts", "Work Hard"] },
      { title: "Love in Itself", year: 1983, cover: "https://upload.wikimedia.org/wikipedia/en/7/7e/Depeche_Mode_-_Love%2C_in_Itself.png", type: "single", tracks: ["Love, in Itself", "Fools", "Just Can't Get Enough (Schizo Mix)"] },
      { title: "People Are People", year: 1984, cover: "https://upload.wikimedia.org/wikipedia/en/9/9b/Depeche_Mode_-_People_Are_People.png", type: "single", tracks: ["People Are People", "In Your Memory"] },
      { title: "Master and Servant", year: 1984, cover: "https://upload.wikimedia.org/wikipedia/en/e/e4/Depeche_Mode_-_Master_and_Servant.png", type: "single", tracks: ["Master and Servant", "(Set Me Free) Remotivate Me", "Are People People?"] },
      { title: "Blasphemous Rumours", year: 1984, cover: "https://upload.wikimedia.org/wikipedia/en/b/b7/Depeche_Mode_-_Blasphemous_Rumours.png", type: "single", tracks: ["Blasphemous Rumours", "Somebody", "Something to Do", "Two Minute Warning (Live)"] },
      { title: "Shake the Disease", year: 1985, cover: "https://upload.wikimedia.org/wikipedia/en/1/19/Depeche_Mode_-_Shake_the_Disease.png", type: "single", tracks: ["Shake the Disease", "Flexible"] },
      { title: "It's Called a Heart", year: 1985, cover: "https://upload.wikimedia.org/wikipedia/en/c/c9/Depeche_Mode_-_It%27s_Called_a_Heart.png", type: "single", tracks: ["It's Called a Heart", "Fly on the Windscreen"] },
      { title: "Stripped", year: 1986, cover: "https://upload.wikimedia.org/wikipedia/en/6/67/Depeche_Mode_-_Stripped.png", type: "single", tracks: ["Stripped", "But Not Tonight", "Breathing in Fumes", "Black Day"] },
      { title: "A Question of Lust", year: 1986, cover: "https://upload.wikimedia.org/wikipedia/en/1/1b/Depeche_Mode_-_A_Question_of_Lust.png", type: "single", tracks: ["A Question of Lust", "Christmas Island", "People Are People (Live)", "It Doesn't Matter Two (Instrumental)"] },
      { title: "A Question of Time", year: 1986, cover: "https://upload.wikimedia.org/wikipedia/en/5/5e/Depeche_Mode_-_A_Question_of_Time.png", type: "single", tracks: ["A Question of Time", "Black Celebration (Live)", "Something to Do (Live)", "Stripped (Live)"] },
      { title: "Strangelove", year: 1987, cover: "https://upload.wikimedia.org/wikipedia/en/e/ec/Depeche_Mode_-_Strangelove.png", type: "single", tracks: ["Strangelove", "Pimpf", "Agent Orange"] },
      { title: "Never Let Me Down Again", year: 1987, cover: "https://upload.wikimedia.org/wikipedia/en/1/1d/Depeche_Mode_-_Never_Let_Me_Down_Again.png", type: "single", tracks: ["Never Let Me Down Again", "Pleasure, Little Treasure", "To Have and to Hold (Spanish Taster)"] },
      { title: "Behind the Wheel", year: 1987, cover: "https://upload.wikimedia.org/wikipedia/en/5/55/Depeche_Mode_-_Behind_the_Wheel.png", type: "single", tracks: ["Behind the Wheel", "Route 66", "Behind the Wheel (Remix)"] },
      { title: "Little 15", year: 1988, cover: "https://upload.wikimedia.org/wikipedia/en/5/54/Depeche_Mode_-_Little_15.png", type: "single", tracks: ["Little 15", "Stjarna"] },
      { title: "Personal Jesus", year: 1989, cover: "https://upload.wikimedia.org/wikipedia/en/5/5b/Depeche_Mode_-_Personal_Jesus.png", type: "single", tracks: ["Personal Jesus", "Dangerous"] },
      { title: "Enjoy the Silence", year: 1990, cover: "https://upload.wikimedia.org/wikipedia/en/e/ea/Depeche_Mode_-_Enjoy_the_Silence.png", type: "single", tracks: ["Enjoy the Silence", "Memphisto", "Sibeling", "Enjoy the Silence (Hands and Feet Mix)"] },
      { title: "Policy of Truth", year: 1990, cover: "https://upload.wikimedia.org/wikipedia/en/1/14/Depeche_Mode_-_Policy_of_Truth.png", type: "single", tracks: ["Policy of Truth", "Kaleid"] },
      { title: "World in My Eyes", year: 1990, cover: "https://upload.wikimedia.org/wikipedia/en/6/64/Depeche_Mode_-_World_in_My_Eyes.png", type: "single", tracks: ["World in My Eyes", "Happiest Girl", "Sea of Sin"] },
      { title: "I Feel You", year: 1993, cover: "https://upload.wikimedia.org/wikipedia/en/1/1e/Depeche_Mode_-_I_Feel_You.png", type: "single", tracks: ["I Feel You", "One Caress", "I Feel You (Throb Mix)"] },
      { title: "Walking in My Shoes", year: 1993, cover: "https://upload.wikimedia.org/wikipedia/en/b/be/Depeche_Mode_-_Walking_in_My_Shoes.png", type: "single", tracks: ["Walking in My Shoes", "My Joy", "Walking in My Shoes (Grungy Gonads Mix)"] },
      { title: "Condemnation", year: 1993, cover: "https://upload.wikimedia.org/wikipedia/en/4/47/Depeche_Mode_-_Condemnation.png", type: "single", tracks: ["Condemnation", "Death's Door", "Rush (Spiritual Guidance Mix)"] },
      { title: "In Your Room", year: 1994, cover: "https://upload.wikimedia.org/wikipedia/en/4/4b/Depeche_Mode_-_In_Your_Room.png", type: "single", tracks: ["In Your Room", "Higher Love (Adrenaline Mix)", "Policy of Truth (Trancentral Mix)"] },
      { title: "Barrel of a Gun", year: 1997, cover: "https://upload.wikimedia.org/wikipedia/en/c/c9/Depeche_Mode_-_Barrel_of_a_Gun.png", type: "single", tracks: ["Barrel of a Gun", "Painkiller", "Barrel of a Gun (United Mix)"] },
      { title: "It's No Good", year: 1997, cover: "https://upload.wikimedia.org/wikipedia/en/9/9e/Depeche_Mode_-_It%27s_No_Good.png", type: "single", tracks: ["It's No Good", "Slowblow", "It's No Good (Speedy J Mix)"] },
      { title: "Home", year: 1997, cover: "https://upload.wikimedia.org/wikipedia/en/d/d2/Depeche_Mode_-_Home.png", type: "single", tracks: ["Home", "Home (Air Around the Golf Remix)", "Useless (Live)"] },
      { title: "Useless", year: 1997, cover: "https://upload.wikimedia.org/wikipedia/en/d/d3/Depeche_Mode_-_Useless.png", type: "single", tracks: ["Useless", "Barrel of a Gun (Live)", "It's No Good (Live)"] },
      { title: "Only When I Lose Myself", year: 1998, cover: "https://upload.wikimedia.org/wikipedia/en/5/5f/Depeche_Mode_-_Only_When_I_Lose_Myself.png", type: "single", tracks: ["Only When I Lose Myself", "Surrender", "Headstar"] },
      { title: "Dream On", year: 2001, cover: "https://upload.wikimedia.org/wikipedia/en/c/cc/Depeche_Mode_-_Dream_On.png", type: "single", tracks: ["Dream On", "Easy Tiger", "Dream On (Bushwacka Tough Guy Mix)"] },
      { title: "I Feel Loved", year: 2001, cover: "https://upload.wikimedia.org/wikipedia/en/0/02/Depeche_Mode_-_I_Feel_Loved.png", type: "single", tracks: ["I Feel Loved", "Dirt", "I Feel Loved (Danny Tenaglia Labor of Love Mix)"] },
      { title: "Freelove", year: 2001, cover: "https://upload.wikimedia.org/wikipedia/en/8/8d/Depeche_Mode_-_Freelove.png", type: "single", tracks: ["Freelove", "Zenstation", "Freelove (DJ Muggs Remix)"] },
      { title: "Goodnight Lovers", year: 2002, cover: "https://upload.wikimedia.org/wikipedia/en/f/f7/Depeche_Mode_-_Goodnight_Lovers.png", type: "single", tracks: ["Goodnight Lovers", "When the Body Speaks (Acoustic)", "The Dead of Night (Electronicat Remix)"] },
      { title: "Enjoy the Silence 04", year: 2004, cover: "https://upload.wikimedia.org/wikipedia/en/a/a9/Depeche_Mode_-_Enjoy_the_Silence_04.png", type: "single", tracks: ["Enjoy the Silence (Reinterpreted)", "Halo (Goldfrapp Remix)", "Enjoy the Silence (Timo Maas Remix)"] },
      { title: "Precious", year: 2005, cover: "https://upload.wikimedia.org/wikipedia/en/c/c9/Depeche_Mode_-_Precious.png", type: "single", tracks: ["Precious", "Free", "Precious (Motor Remix)"] },
      { title: "A Pain That I'm Used To", year: 2005, cover: "https://upload.wikimedia.org/wikipedia/en/f/f2/Depeche_Mode_-_A_Pain_That_I%27m_Used_To.png", type: "single", tracks: ["A Pain That I'm Used To", "Newborn", "A Pain That I'm Used To (Jacques Lu Cont Remix)"] },
      { title: "Suffer Well", year: 2006, cover: "https://upload.wikimedia.org/wikipedia/en/c/c9/Depeche_Mode_-_Suffer_Well.png", type: "single", tracks: ["Suffer Well", "The Darkest Star (Monolake Remix)", "Suffer Well (M83 Remix)"] },
      { title: "John the Revelator", year: 2006, cover: "https://upload.wikimedia.org/wikipedia/en/4/4f/Depeche_Mode_-_John_the_Revelator.png", type: "single", tracks: ["John the Revelator", "Lilian", "John the Revelator (Murk Mode Remix)"] },
      { title: "Martyr", year: 2006, cover: "https://upload.wikimedia.org/wikipedia/en/b/bb/Depeche_Mode_-_Martyr.png", type: "single", tracks: ["Martyr", "Martyr (Paul van Dyk Remix)", "Martyr (DJ Tactix Remix)"] },
      { title: "Wrong", year: 2009, cover: "https://upload.wikimedia.org/wikipedia/en/6/60/Depeche_Mode_-_Wrong.png", type: "single", tracks: ["Wrong", "Oh Well", "Wrong (Trentemøller Remix)"] },
      { title: "Peace", year: 2009, cover: "https://upload.wikimedia.org/wikipedia/en/2/29/Depeche_Mode_-_Peace.png", type: "single", tracks: ["Peace", "Corrupt", "Peace (Sander van Doorn Remix)"] },
      { title: "Fragile Tension", year: 2009, cover: "https://upload.wikimedia.org/wikipedia/en/5/5c/Depeche_Mode_-_Fragile_Tension.png", type: "single", tracks: ["Fragile Tension", "Hole to Feed", "Fragile Tension (Peter Bjorn and John Remix)"] },
      { title: "Personal Jesus 2011", year: 2011, cover: "https://upload.wikimedia.org/wikipedia/en/6/6f/Depeche_Mode_-_Personal_Jesus_2011.png", type: "single", tracks: ["Personal Jesus (Alex Metric Remix)", "Personal Jesus (Eric Prydz Remix)", "Personal Jesus (Stargate Remix)"] },
      { title: "Heaven", year: 2013, cover: "https://upload.wikimedia.org/wikipedia/en/a/a7/Depeche_Mode_-_Heaven.png", type: "single", tracks: ["Heaven", "All That's Mine", "Heaven (Blawan Remix)"] },
      { title: "Soothe My Soul", year: 2013, cover: "https://upload.wikimedia.org/wikipedia/en/6/6b/Depeche_Mode_-_Soothe_My_Soul.png", type: "single", tracks: ["Soothe My Soul", "Soothe My Soul (Steve Angello Remix)", "Soothe My Soul (Gregor Tresher Remix)"] },
      { title: "Should Be Higher", year: 2013, cover: "https://upload.wikimedia.org/wikipedia/en/a/a8/Depeche_Mode_-_Should_Be_Higher.png", type: "single", tracks: ["Should Be Higher", "Should Be Higher (Ewan Pearson Remix)", "Should Be Higher (Jimmy Edgar Remix)"] },
      { title: "Where's the Revolution", year: 2017, cover: "https://upload.wikimedia.org/wikipedia/en/e/ef/Depeche_Mode_-_Where%27s_the_Revolution.png", type: "single", tracks: ["Where's the Revolution", "Where's the Revolution (Algiers Remix)", "Where's the Revolution (Autolux Remix)"] },
      { title: "Going Backwards", year: 2017, cover: "https://upload.wikimedia.org/wikipedia/en/0/0e/Depeche_Mode_-_Going_Backwards.png", type: "single", tracks: ["Going Backwards", "Going Backwards (Highline Session)", "Going Backwards (Chris Liebing Remix)"] },
      { title: "Cover Me", year: 2017, cover: "https://upload.wikimedia.org/wikipedia/en/8/8d/Depeche_Mode_-_Cover_Me.png", type: "single", tracks: ["Cover Me", "Cover Me (Highline Session)", "Cover Me (Ellen Allien U.F.O. Remix)"] },
      { title: "Ghosts Again", year: 2023, cover: "https://upload.wikimedia.org/wikipedia/en/f/f9/Depeche_Mode_-_Ghosts_Again.png", type: "single", tracks: ["Ghosts Again", "Ghosts Again (Ewan Pearson Remix)"] },
      { title: "Wagging Tongue", year: 2023, cover: "https://upload.wikimedia.org/wikipedia/en/6/65/Depeche_Mode_-_Wagging_Tongue.png", type: "single", tracks: ["Wagging Tongue", "Wagging Tongue (ANNA Remix)"] },
      { title: "My Favourite Stranger", year: 2023, cover: "https://upload.wikimedia.org/wikipedia/en/3/3c/Depeche_Mode_-_My_Favourite_Stranger.png", type: "single", tracks: ["My Favourite Stranger", "My Favourite Stranger (Obskür Remix)"] }
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
      { title: "Duran Duran", year: 1981, cover: "https://upload.wikimedia.org/wikipedia/en/5/58/Duran_Duran_%28album%29.jpg", type: "album", tracks: ["Girls on Film", "Planet Earth", "Anyone Out There", "To the Shore", "Careless Memories", "Night Boat", "Sound of Thunder", "Friends of Mine", "Tel Aviv"] },
      { title: "Rio", year: 1982, cover: "https://upload.wikimedia.org/wikipedia/en/6/61/DuranDuranRio.jpg", type: "album", tracks: ["Rio", "My Own Way", "Lonely in Your Nightmare", "Hungry Like the Wolf", "Hold Back the Rain", "New Religion", "Last Chance on the Stairway", "Save a Prayer", "The Chauffeur"] },
      { title: "Seven and the Ragged Tiger", year: 1983, cover: "https://upload.wikimedia.org/wikipedia/en/2/2a/SevenandtheRaggedTiger.jpg", type: "album", tracks: ["The Reflex", "New Moon on Monday", "I Take the Dice", "Of Crime and Passion", "Union of the Snake", "Shadows on Your Side", "Tiger Tiger", "The Seventh Stranger", "Cracks in the Pavement"] },
      { title: "Notorious", year: 1986, cover: "https://upload.wikimedia.org/wikipedia/en/3/3d/Duran_Duran_-_Notorious.png", type: "album", tracks: ["Notorious", "American Science", "Skin Trade", "A Matter of Feeling", "Hold Me", "Vertigo (Do the Demolition)", "So Misled", "Meet El Presidente", "Winter Marches On", "Proposition"] },
      { title: "Big Thing", year: 1988, cover: "https://upload.wikimedia.org/wikipedia/en/2/2a/Duranduranbigthing.jpg", type: "album", tracks: ["Big Thing", "I Don't Want Your Love", "All She Wants Is", "Too Late Marlene", "Drug (It's Just a State of Mind)", "Do You Believe in Shame?", "Palomino", "Interlude One", "Land", "Flute Interlude", "The Edge of America", "Lake Shore Driving"] },
      { title: "Liberty", year: 1990, cover: "https://upload.wikimedia.org/wikipedia/en/b/bd/DuranDuranLiberty.jpg", type: "album", tracks: ["Violence of Summer (Love's Taking Over)", "Liberty", "Hothead", "Serious", "All Along the Water", "My Antarctica", "First Impression", "Read My Lips", "Can You Deal with It", "Venice Drowning", "Downtown"] },
      { title: "Duran Duran (The Wedding Album)", year: 1993, cover: "https://upload.wikimedia.org/wikipedia/en/9/95/Duran_Duran_%28The_Wedding_Album%29.jpg", type: "album", tracks: ["Too Much Information", "Ordinary World", "Love Voodoo", "Drowning Man", "Shotgun", "Come Undone", "Breath After Breath", "UMF", "Femme Fatale", "None of the Above", "Shelter", "To Whom It May Concern", "Sin of the City"] },
      { title: "Thank You", year: 1995, cover: "https://upload.wikimedia.org/wikipedia/en/0/0b/Duranduranthankyoualbum.jpg", type: "album", tracks: ["White Lines (Don't Don't Do It)", "I Wanna Take You Higher", "Perfect Day", "Watching the Detectives", "Lay Lady Lay", "911 Is a Joke", "Success", "Crystal Ship", "Ball of Confusion", "Thank You", "Drive By", "I Wanna Take You Higher Again"] },
      { title: "Medazzaland", year: 1997, cover: "https://upload.wikimedia.org/wikipedia/en/b/be/Duranduran_medazzaland.jpg", type: "album", tracks: ["Medazzaland", "Big Bang Generation", "Electric Barbarella", "Out of My Mind", "Who Do You Think You Are?", "Silva Halo", "Be My Icon", "Buried in the Sand", "Michael You've Got a Lot to Answer For", "Midnight Sun", "So Long Suicide", "Undergoing Treatment"] },
      { title: "Pop Trash", year: 2000, cover: "https://upload.wikimedia.org/wikipedia/en/4/40/Poptrash.jpg", type: "album", tracks: ["Someone Else Not Me", "Lava Lamp", "Playing with Uranium", "Hallucinating Elvis", "Starting to Remember", "Pop Trash Movie", "Fragment", "Mars Meets Venus", "Lady Xanax", "The Sun Doesn't Shine Forever", "Kiss Goodbye", "Last Day on Earth"] },
      { title: "Astronaut", year: 2004, cover: "https://upload.wikimedia.org/wikipedia/en/9/9d/Duran_Duran_-_Astronaut.png", type: "album", tracks: ["(Reach Up for The) Sunrise", "Want You More!", "What Happens Tomorrow", "Astronaut", "Bedroom Toys", "Nice", "Taste the Summer", "Finest Hour", "One of Those Days", "Point of No Return", "Still Breathing"] },
      { title: "Red Carpet Massacre", year: 2007, cover: "https://upload.wikimedia.org/wikipedia/en/8/86/Redcarpetmassacre.jpg", type: "album", tracks: ["The Valley", "Nite-Runner", "Falling Down", "Red Carpet Massacre", "Box Full o' Honey", "Skin Divers", "Tempted", "Tricked Out", "Zoom In", "She's Too Much", "Dirty Great Monster", "Last Man Standing"] },
      { title: "All You Need Is Now", year: 2010, cover: "https://upload.wikimedia.org/wikipedia/en/7/7e/Duran_Duran_-_All_You_Need_Is_Now.png", type: "album", tracks: ["All You Need Is Now", "Blame the Machines", "Being Followed", "Leave a Light On", "Safe (In the Heat of the Moment)", "Girl Panic!", "The Man Who Stole a Leopard", "Other People's Lives", "Mediterranea", "Too Bad You're So Beautiful", "Runway Runaway", "Return to Now", "Before the Rain"] },
      { title: "Paper Gods", year: 2015, cover: "https://upload.wikimedia.org/wikipedia/en/0/0b/Duran_Duran_-_Paper_Gods.png", type: "album", tracks: ["Paper Gods", "Last Night in the City", "You Kill Me with Silence", "Pressure Off", "Face for Today", "Danceophobia", "What Are the Chances?", "Sunset Garage", "Change the Skyline", "Butterfly Girl", "Only in Dreams", "The Universe Alone"] },
      { title: "Future Past", year: 2021, cover: "https://upload.wikimedia.org/wikipedia/en/e/e4/Duran_Duran_-_Future_Past.png", type: "album", tracks: ["Invisible", "Anniversary", "Future Past", "Beautiful Lies", "Tonight United", "Wing", "Nothing Less", "Give It All Up", "More Joy!", "Hammerhead", "Falling", "Butterfly", "Propositions Reprise"] },
      { title: "Danse Macabre", year: 2023, cover: "https://upload.wikimedia.org/wikipedia/en/e/e1/Duran_Duran_-_Danse_Macabre.png", type: "album", tracks: ["Black Moonlight", "Bury a Friend", "Psycho Killer", "Super Lonely Freak", "Nightboat", "Spooky Ghost", "Confession in the Afterlife", "Supernature", "Love Voodoo", "Secret Oktober", "Paint It Black", "Ghost Town"] }
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
      { title: "Hunting High and Low", year: 1985, cover: "https://upload.wikimedia.org/wikipedia/en/4/40/A-ha_Hunting_High_and_Low.jpg", type: "album", tracks: ["Take On Me", "Train of Thought", "Hunting High and Low", "The Blue Sky", "Living a Boy's Adventure Tale", "The Sun Always Shines on T.V.", "And You Tell Me", "Love Is Reason", "Dream Myself Alive", "Here I Stand and Face the Rain"] },
      { title: "Scoundrel Days", year: 1986, cover: "https://upload.wikimedia.org/wikipedia/en/e/e9/A-ha_-_Scoundrel_Days.jpg", type: "album", tracks: ["Scoundrel Days", "The Swing of Things", "I've Been Losing You", "October", "Manhattan Skyline", "Cry Wolf", "We're Looking for the Whales", "The Weight of the Wind", "Maybe, Maybe", "Soft Rains of April"] },
      { title: "Stay on These Roads", year: 1988, cover: "https://upload.wikimedia.org/wikipedia/en/a/a1/A-ha_-_Stay_on_These_Roads.jpg", type: "album", tracks: ["Blood That Moves the Body", "Touchy!", "The Living Daylights", "Stay on These Roads", "The Blood That Moves the Body", "You Are the One", "Hurry Home", "This Alone Is Love", "Out of Blue Comes Green", "You'll End Up Crying", "Take On Me (Live)"] },
      { title: "East of the Sun, West of the Moon", year: 1990, cover: "https://upload.wikimedia.org/wikipedia/en/5/52/A-ha_-_East_of_the_Sun%2C_West_of_the_Moon.jpg", type: "album", tracks: ["Crying in the Rain", "Early Morning", "I Call Your Name", "Slender Frame", "East of the Sun", "Sycamore Leaves", "Waiting for Her", "Cold River", "The Way We Talk", "Rolling Thunder", "I've Been Losing You (Remix)"] },
      { title: "Memorial Beach", year: 1993, cover: "https://upload.wikimedia.org/wikipedia/en/0/09/A-ha_-_Memorial_Beach.jpg", type: "album", tracks: ["Dark Is the Night for All", "Move to Memphis", "Cold as Stone", "Angel in the Snow", "Locust", "Between Your Mama and Yourself", "Lamb to the Slaughter", "How Sweet It Was", "Lie Down in Darkness", "Memorial Beach"] },
      { title: "Minor Earth Major Sky", year: 2000, cover: "https://upload.wikimedia.org/wikipedia/en/7/7f/Aha_minorearthmajosky.jpg", type: "album", tracks: ["Minor Earth Major Sky", "Little Black Heart", "Velvet", "The Sun Never Shone That Day", "To Let You Win", "The Company Man", "Thought That It Was You", "I Wish I Cared", "Summer Moved On", "You'll Never Get Over Me", "I Won't Forget Her", "Mary Ellen Makes the Moment Count"] },
      { title: "Lifelines", year: 2002, cover: "https://upload.wikimedia.org/wikipedia/en/3/37/A-ha_-_Lifelines.jpg", type: "album", tracks: ["Lifelines", "You Wanted More", "Forever Not Yours", "Time and Again", "Did Anyone Approach You?", "Oranges on Appletrees", "Less Than Pure", "Turn the Lights Down", "A Little Bit", "Dragonfly", "Afternoon High", "Cannot Hide", "Difference"] },
      { title: "Analogue", year: 2005, cover: "https://upload.wikimedia.org/wikipedia/en/0/09/A-ha_analogue.jpg", type: "album", tracks: ["Celice", "Cosy Prisons", "Analogue (All I Want)", "The Bandstand", "Keeper of the Flame", "Over the Treetops", "Make It Soon", "White Canvas", "Birthright", "What There Is", "Holy Ground"] },
      { title: "Foot of the Mountain", year: 2009, cover: "https://upload.wikimedia.org/wikipedia/en/c/c6/Aha_Foot_of_the_Mountain.jpg", type: "album", tracks: ["The Bandstand", "Foot of the Mountain", "What There Is", "Riding the Crest", "Real Meaning", "Shadowside", "Nothing Is Keeping You Here", "Mother Nature Goes to Heaven", "Sunny Mystery", "Start the Simulator", "Velvet"] },
      { title: "Cast in Steel", year: 2015, cover: "https://upload.wikimedia.org/wikipedia/en/e/e7/A-ha_Cast_in_Steel.jpg", type: "album", tracks: ["Cast in Steel", "Under the Makeup", "The Wake", "Forest Fire", "Objects in the Mirror", "Door Ajar", "Living at the End of the World", "Mythomania", "Shadow Endeavors", "She's Humming a Tune", "Giving Up the Ghost"] },
      { title: "True North", year: 2022, cover: "https://upload.wikimedia.org/wikipedia/en/1/17/A-ha_-_True_North.png", type: "album", tracks: ["I'm In", "Hunter in the Hills", "Forest for the Trees", "Between the Halo and the Horn", "You Have What It Takes", "Oh My My", "As If", "Bumblebee", "You, My Salvation", "Make a Leap", "True North", "I'm In (Reprise)"] }
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
      { title: "INXS", year: 1980, cover: "https://upload.wikimedia.org/wikipedia/en/2/2e/InxsINXS.jpg", type: "album", tracks: ["On a Bus", "Doctor", "Just Keep Walking", "Learn to Smile", "Jumping", "Wishy Washy", "Roller Skating", "Body Language", "Newsreel Babies", "In Vain"] },
      { title: "Underneath the Colours", year: 1981, cover: "https://upload.wikimedia.org/wikipedia/en/c/ce/InxsUnderneath.jpg", type: "album", tracks: ["Stay Young", "Horizons", "Big Go Go", "Underneath the Colours", "Fair Weather Ahead", "Night of Rebellion", "Follow", "Barbarian", "Just to Learn Again", "The Loved One"] },
      { title: "Shabooh Shoobah", year: 1982, cover: "https://upload.wikimedia.org/wikipedia/en/d/da/InxsShabooh.jpg", type: "album", tracks: ["Soul Mistake", "Here Comes", "Black and White", "Golden Playpen", "Jan's Song", "Old World New World", "Don't Change", "To Look at You", "Spy of Love", "The One Thing"] },
      { title: "The Swing", year: 1984, cover: "https://upload.wikimedia.org/wikipedia/en/5/58/Inxs_the_swing.jpg", type: "album", tracks: ["Original Sin", "Melting in the Sun", "I Send a Message", "Dancing on the Jetty", "The Swing", "Johnson's Aeroplane", "Love Is (What I Say)", "Face the Change", "Burn for You", "All the Voices"] },
      { title: "Listen Like Thieves", year: 1985, cover: "https://upload.wikimedia.org/wikipedia/en/7/7e/Inxslistenlike.jpg", type: "album", tracks: ["What You Need", "Listen Like Thieves", "Kiss the Dirt (Falling Down the Mountain)", "Shine Like It Does", "Good + Bad Times", "Biting Bullets", "This Time", "Three Sisters", "Same Direction", "One x One", "Red Red Sun"] },
      { title: "Kick", year: 1987, cover: "https://upload.wikimedia.org/wikipedia/en/d/d4/Inxskick.jpg", type: "album", tracks: ["Guns in the Sky", "New Sensation", "Devil Inside", "Need You Tonight", "Mediate", "The Loved One", "Wild Life", "Never Tear Us Apart", "Mystify", "Kick", "Calling All Nations", "Tiny Daggers"] },
      { title: "X", year: 1990, cover: "https://upload.wikimedia.org/wikipedia/en/e/e7/Inxs_X.jpg", type: "album", tracks: ["Suicide Blonde", "Disappear", "The Stairs", "Faith in Each Other", "By My Side", "Lately", "Who Pays the Price", "Know the Difference", "Bitter Tears", "On My Way", "Hear That Sound"] },
      { title: "Welcome to Wherever You Are", year: 1992, cover: "https://upload.wikimedia.org/wikipedia/en/7/7d/InxsWelcome.jpg", type: "album", tracks: ["Questions", "Heaven Sent", "Communication", "Taste It", "Not Enough Time", "All Around", "Baby Don't Cry", "Beautiful Girl", "Wishing Well", "Back On Line", "Strange Desire", "Men and Women"] },
      { title: "Full Moon, Dirty Hearts", year: 1993, cover: "https://upload.wikimedia.org/wikipedia/en/5/5b/Inxsfullmoon.jpg", type: "album", tracks: ["Days of Rust", "The Gift", "Make Your Peace", "Time", "I'm Only Looking", "Please (You Got That...)", "Full Moon, Dirty Hearts", "Freedom Deep", "Kill the Pain", "Cut Your Roses Down", "The Messenger", "Viking Juice"] },
      { title: "Elegantly Wasted", year: 1997, cover: "https://upload.wikimedia.org/wikipedia/en/5/53/Inxselegant.jpg", type: "album", tracks: ["Show Me (Cherry Baby)", "Elegantly Wasted", "Everything", "Don't Lose Your Head", "Searching", "I'm Just a Man", "She Is Rising", "Building Bridges", "Girl on Fire", "Shake the Tree", "We Are Thrown Together", "Let It Ride"] },
      { title: "Switch", year: 2005, cover: "https://upload.wikimedia.org/wikipedia/en/6/64/INXSSwitchalbumcover.jpg", type: "album", tracks: ["Devil's Party", "Pretty Vegas", "Afterglow", "Never Let You Go", "Hot Girls", "Perfect Strangers", "Remember Who's Your Man", "Hungry", "God's Top Ten", "I Get Up", "Like It or Not", "Groove Mobile"] },
      { title: "Original Sin", year: 2010, cover: "https://upload.wikimedia.org/wikipedia/en/0/00/INXS_Original_Sin.png", type: "album", tracks: ["Original Sin (with INXS All Stars)", "New Sensation (featuring Ben Harper)", "Need You Tonight (with Rob Thomas)", "Never Tear Us Apart (with Tegan and Sara)", "Mystify (with Darren Hayes)", "What You Need (with Pat Monahan)"] }
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
      { title: "The 1st Album", year: 1985, cover: "https://upload.wikimedia.org/wikipedia/en/6/63/Modern_Talking_-_The_1st_Album.jpg", type: "album", tracks: ["You're My Heart, You're My Soul", "You Can Win If You Want", "There's Too Much Blue in Missing You", "With a Little Love", "The Night Is Yours — The Night Is Mine", "Diamonds — Never Made a Lady", "Lucky Guy", "Do You Wanna", "Keep Love Alive", "One in a Million"] },
      { title: "Let's Talk About Love", year: 1985, cover: "https://upload.wikimedia.org/wikipedia/en/1/10/Modern_Talking_-_Let%27s_Talk_About_Love.jpg", type: "album", tracks: ["Cheri, Cheri Lady", "Just Like an Angel", "One of These Days", "Let's Talk About Love", "Heaven Will Know", "Don't Give Up", "Atlantis Is Calling (S.O.S. for Love)", "Why Did You Do It Just Tonight", "Just We Two (Mona Lisa)", "With a Little Love"] },
      { title: "Ready for Romance", year: 1986, cover: "https://upload.wikimedia.org/wikipedia/en/a/a3/Modern_Talking_-_Ready_for_Romance.jpg", type: "album", tracks: ["Brother Louie", "Angie's Heart", "Ready for Romance", "Love Don't Live Here Anymore", "Only Love Can Break My Heart", "Blinded by Your Love", "You and Me", "Keep Love Alive '86", "Love to Love You", "Don't Let Me Down"] },
      { title: "In the Middle of Nowhere", year: 1986, cover: "https://upload.wikimedia.org/wikipedia/en/4/47/Modern_Talking_-_In_the_Middle_of_Nowhere.jpg", type: "album", tracks: ["Geronimo's Cadillac", "Give Me Peace on Earth", "Lonely Tears in Chinatown", "Princess of the Night", "Sweet Little Sheila", "Stranded in the Middle of Nowhere", "Wild, Wild Water", "Doctor for My Heart", "Riding on a White Swan", "Jet Airliner"] },
      { title: "Romantic Warriors", year: 1987, cover: "https://upload.wikimedia.org/wikipedia/en/9/94/Modern_Talking_-_Romantic_Warriors.jpg", type: "album", tracks: ["Just We Two", "Romantic Warriors", "Bells of Paris", "Don't Worry", "Follow Your Heart", "Lonely Tears in Chinatown '87", "So in Love with You", "God Bless the U.S.A.", "Midnight Lady", "Ten Thousand Lonely Drums"] },
      { title: "In the Garden of Venus", year: 1987, cover: "https://upload.wikimedia.org/wikipedia/en/6/6a/Modern_Talking_-_In_the_Garden_of_Venus.jpg", type: "album", tracks: ["In Shaire", "Locomotion Tango", "The Angels Sing in New York City", "Charlene", "In 100 Years", "Lady Lai", "Maria", "Goodbye Mama", "In the Garden of Venus", "Touching My Soul"] },
      { title: "Back for Good", year: 1998, cover: "https://upload.wikimedia.org/wikipedia/en/f/f1/Modern_Talking_-_Back_for_Good.jpg", type: "album", tracks: ["You're My Heart, You're My Soul '98", "Brother Louie '98", "Cheri, Cheri Lady '98", "You Are Not Alone", "I Will Follow You", "Juliet", "Space Mix '98", "We Take the Chance", "Don't Play with My Heart", "Let's Talk About Love '98"] },
      { title: "Alone", year: 1999, cover: "https://upload.wikimedia.org/wikipedia/en/5/5d/Modern_Talking_-_Alone.jpg", type: "album", tracks: ["Sexy, Sexy Lover", "I'll Never Give You Up", "I'll Be Reminding You", "Cinderella", "Fly Me to the Moon", "You're the Lady of My Heart", "Like a Hero", "Baby I Miss You", "Alone", "You and Only You", "Cheri, Cheri Lady '98", "Sexy, Sexy Lover (Extended)"] },
      { title: "Year of the Dragon", year: 2000, cover: "https://upload.wikimedia.org/wikipedia/en/1/12/Modern_Talking_-_Year_of_the_Dragon.jpg", type: "album", tracks: ["China in Her Eyes", "Year of the Dragon", "Sorry", "Runaway Girl", "Win the Race", "Between the Seas", "Show Me the Way", "Don't Play It Loud", "Juliet '99", "Brother Louie '99", "You're My Heart '99"] },
      { title: "America", year: 2001, cover: "https://upload.wikimedia.org/wikipedia/en/5/50/Modern_Talking_-_America.jpg", type: "album", tracks: ["America", "Win the Race", "Last Exit to Brooklyn", "Slam (Superstar Remix)", "Angie's Heart 2001", "Heartbeat", "You Are Not Alone 2001", "10 Seconds to Countdown", "Pop Corn", "Television", "Who Will Save the World"] },
      { title: "Victory", year: 2002, cover: "https://upload.wikimedia.org/wikipedia/en/2/29/Modern_Talking_-_Victory.jpg", type: "album", tracks: ["Ready for the Victory", "Heaven", "Do You Really Want Me", "Can't Get Enough", "Do You Remember", "Love Is Forever", "Thank God", "TV Makes the Superstar", "Do You Know What You Want", "Somebody Love Me", "Never Sleep Again", "SMS to My Heart"] },
      { title: "Universe", year: 2003, cover: "https://upload.wikimedia.org/wikipedia/en/b/b9/Modern_Talking_-_Universe.jpg", type: "album", tracks: ["Universe", "Don't Stop Don't Give Up", "Shooting Star", "The Night Is Ours", "When The Sky Rained Fire", "I Need You Now", "Anything Is Possible", "Last Goodbye", "Walking in the Rain", "You're No Lady", "Diamonds Never Made a Lady '02", "Lucky Girl"] }
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
      { title: "Walking on a Rainbow", year: 1987, cover: "https://upload.wikimedia.org/wikipedia/en/a/a7/Blue_System_-_Walking_on_a_Rainbow.jpg", type: "album", tracks: ["Sorry Little Sarah", "Silent Water", "Under My Skin", "Walking on a Rainbow", "Love Suite", "Don't You Want My Foolish Heart", "Love Is Such a Lonely Sword", "Crying in the Silence", "Big Boys Don't Cry", "Love Me on the Rocks"] },
      { title: "Body Heat", year: 1988, cover: "https://upload.wikimedia.org/wikipedia/en/d/d5/Blue_System_-_Body_Heat.jpg", type: "album", tracks: ["My Bed Is Too Big", "Love Me on the Rocks", "Body Heat", "Operator", "Déjà Vu", "Shame, Shame, Shame", "Automatic Lovemachine", "Life Is Too Long", "48 Hours", "Midnight Blue"] },
      { title: "Twilight", year: 1989, cover: "https://upload.wikimedia.org/wikipedia/en/a/ae/Blue_System_-_Twilight.jpg", type: "album", tracks: ["Love Is Such a Lonely Sword", "Twilight", "Lucifer", "This Is the Night", "That's Love", "Baby Believe Me", "I Miss You", "San Francisco", "My Heart Beats for You", "Magic Symphony"] },
      { title: "Obsession", year: 1990, cover: "https://upload.wikimedia.org/wikipedia/en/5/5e/Blue_System_-_Obsession.jpg", type: "album", tracks: ["When Sarah Smiles", "Romeo and Juliet", "48 Hours", "Obsession", "Rain from Heaven", "Radio Silence", "Night Moves", "I Will Survive in Your Life", "Tower of Love", "Every Heartbeat"] },
      { title: "Seeds of Heaven", year: 1991, cover: "https://upload.wikimedia.org/wikipedia/en/0/05/Blue_System_-_Seeds_of_Heaven.jpg", type: "album", tracks: ["Déjà Vu (New Version)", "Hello America", "Love Will Drive Me Crazy", "Seeds of Heaven", "6 Years, 6 Nights", "Is She Really Going Out with Him?", "You and I", "Baby Believe Me", "Going to L.A.", "Run Away"] },
      { title: "Déjà vu", year: 1991, cover: "https://upload.wikimedia.org/wikipedia/en/b/b2/Blue_System_-_Deja_Vu.jpg", type: "album", tracks: ["History", "Testamente d'Amelia", "New York Time", "My Bed Is Still Burning", "Silent Night, Holy Night", "Claudia, Hey", "Freedom", "She's a Lady", "Street Feeling", "Angel Dust"] },
      { title: "Hello America", year: 1992, cover: "https://upload.wikimedia.org/wikipedia/en/f/f9/Blue_System_-_Hello_America.jpg", type: "album", tracks: ["That's Love", "Julie Ann", "American Love", "Claudia", "I'm Not in Love", "Just a Gigolo", "Love You More", "Magic Symphony 2", "Only with You", "She's My Woman, She's My Man"] },
      { title: "Backstreet Dreams", year: 1993, cover: "https://upload.wikimedia.org/wikipedia/en/5/5b/Blue_System_-_Backstreet_Dreams.jpg", type: "album", tracks: ["Laila", "G.T.O.", "Backstreet Heaven", "Dr. Mabuse", "Angel Eyes", "Only with You", "Déjà Vu 93", "Sister Blue", "Love Is (What I Say)", "Baby I Love You"] },
      { title: "21st Century", year: 1994, cover: "https://upload.wikimedia.org/wikipedia/en/3/34/Blue_System_-_21st_Century.jpg", type: "album", tracks: ["I Love You", "Dr. Mabuse '94", "Titanic", "Question of Time", "A Long, Long Time Ago", "Love 2000", "I Never Thought I'd Lose You So Soon", "This Is Our Love", "I Miss You", "Take Me Home"] },
      { title: "X-Ten", year: 1994, cover: "https://upload.wikimedia.org/wikipedia/en/3/33/Blue_System_-_X-Ten.jpg", type: "album", tracks: ["Anything", "My Heart Is Beating", "That Night", "You and I '94", "It's All Over", "Love at First Sight", "Save Your Love", "Big Girls Don't Cry", "I Will Live for You", "Love Comes, Love Goes"] },
      { title: "Forever Blue", year: 1995, cover: "https://upload.wikimedia.org/wikipedia/en/5/5b/Blue_System_-_Forever_Blue.jpg", type: "album", tracks: ["Shame Shame Shame", "Mon Amour", "Midnight Lady", "Only with You '95", "Magic Symphony '95", "Body and Soul", "Cindy Dearest", "In the Summertime", "Love Me on the Rocks '95", "To Be Number One"] }
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
      { title: "Joy and Tears", year: 1986, cover: "https://upload.wikimedia.org/wikipedia/en/d/dd/Joy_and_tears.jpg", type: "album", tracks: ["Touch by Touch", "Valerie", "Hello", "Japanese Girls", "Let Me Dream", "Tomorrow", "If You Look Away", "Dancing Time", "Baby Don't Go", "Crying in My Heart"] },
      { title: "Joy", year: 1987, cover: "https://upload.wikimedia.org/wikipedia/en/a/a8/Joy_Joy.jpg", type: "album", tracks: ["Lovely Dream", "Show Me the Way", "Wonderful", "Breaking Hearts", "Moonlight", "Give Me Your Love", "Lonely Heart", "Summer Dreams", "Touch by Touch '87", "Magic Time"] }
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
      { title: "Flaunt It", year: 1986, cover: "https://upload.wikimedia.org/wikipedia/en/a/a6/Flauntitalbumcover.jpg", type: "album", tracks: ["Love Missile F1-11", "Atari Baby", "Sex Bomb Boogie", "Rockit Miss U.S.A.", "21st Century Boy", "Massive Retaliation", "Teenage Thunder", "She's My Man", "Is This the Future?", "Buy EMI"] },
      { title: "Dress for Excess", year: 1988, cover: "https://upload.wikimedia.org/wikipedia/en/4/41/SSS_Dress_for_Excess.jpg", type: "album", tracks: ["Success", "Dancerama", "Albinoni vs. Star Wars", "Hey Jane", "Boom Boom Satellite", "M*A*D", "Rio Rocks", "Barcelona", "La Familia", "Pirate Radio"] }
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
      { title: "Geography", year: 1982, cover: "https://upload.wikimedia.org/wikipedia/en/f/fc/Front_242_Geography.jpg", type: "album", tracks: ["Operating Tracks", "Ethics", "Black White Blue", "Geography I", "Kinetics", "A New Religion", "Geography II", "Art & Strategy", "Kampfbereit", "U-Men", "Dialogue", "Take One"] },
      { title: "No Comment", year: 1984, cover: "https://upload.wikimedia.org/wikipedia/en/2/2e/Front_242_-_No_Comment.jpg", type: "album", tracks: ["No Shuffle", "Commando Mix", "Deceit", "Politics of Pressure", "Work 01:242:19:84", "Lovely Day", "Special Forces", "F.L.H.", "Controversy Between", "Don't Crash"] },
      { title: "Official Version", year: 1987, cover: "https://upload.wikimedia.org/wikipedia/en/2/24/Front_242_-_Official_Version.jpg", type: "album", tracks: ["W.Y.H.I.W.Y.G.", "Masterhit", "Television Station", "Slaughter", "Angst", "Welcome to Paradise", "Rerun Time", "No Talk", "Commando Remix", "Quite Unusual"] },
      { title: "Front by Front", year: 1988, cover: "https://upload.wikimedia.org/wikipedia/en/9/92/Front_242_-_Front_by_Front.jpg", type: "album", tracks: ["Until Death (Us Do Part)", "Circling Overland", "Im Rhythmus Bleiben", "Headhunter", "Welcome to Paradise", "First in First out", "Felines", "Never Stop! (v1.0)", "Terminal State", "Work 242"] },
      { title: "Tyranny >For You<", year: 1991, cover: "https://upload.wikimedia.org/wikipedia/en/8/8c/Front_242_-_Tyranny_for_You.jpg", type: "album", tracks: ["Sacrifice", "Rhythm of Time", "Tragedy >For You<", "Leitmotiv", "Trigger 1 (Wasted)", "Moldavia", "Neurobashing", "Gripped by Fear", "Soul Manager", "Trigger 2", "Crapage"] },
      { title: "05:22:09:12 Off", year: 1993, cover: "https://upload.wikimedia.org/wikipedia/en/5/50/Front_242_-_05-22-09-12_Off.jpg", type: "album", tracks: ["Religion", "Melt!", "Skin", "Animal", "Happiness", "Junkdrome", "Modern Angel", "Croissance/Décroissance", "Separated", "Motion"] },
      { title: "Pulse", year: 2003, cover: "https://upload.wikimedia.org/wikipedia/en/c/c5/Front_242_-_Pulse.png", type: "album", tracks: ["Together", "Seq 666", "Body to Body", "Lovely Day", "Take One", "Commando Mix", "Headhunter (Ultrasound)", "Pulse of Pulse", "Serial Killers Don't Kill", "Not a Song"] }
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
      { title: "Sophisticated Boom Boom", year: 1984, cover: "https://upload.wikimedia.org/wikipedia/en/a/ac/Dead_or_Alive_-_Sophisticated_Boom_Boom.jpg", type: "album", tracks: ["I'd Do Anything", "Flowers", "What I Want", "Cake and Eat It", "This House", "Selfish Side", "That's the Way (I Like It)", "No Doubt About It", "It's Been a Long Time", "It's Only Love"] },
      { title: "Youthquake", year: 1985, cover: "https://upload.wikimedia.org/wikipedia/en/a/a9/Dead_or_Alive_-_Youthquake.jpg", type: "album", tracks: ["You Spin Me Round (Like a Record)", "Lover Come Back to Me", "In Too Deep", "My Heart Goes Bang (Get Me to the Doctor)", "Cake and Eat It", "Big Daddy of the Rhythm", "D.J. Hit That Button", "Brand New Lover", "Misty Circles", "We Are What We Are"] },
      { title: "Mad, Bad, and Dangerous to Know", year: 1987, cover: "https://upload.wikimedia.org/wikipedia/en/5/5c/Dead_or_Alive_-_Mad%2C_Bad%2C_and_Dangerous_to_Know.jpg", type: "album", tracks: ["Brand New Lover", "Something in My House", "I'll Save You All My Kisses", "Son of a Gun", "Hooked on Love", "Then There Was You", "Special Star", "I Wanna Be a Toy", "Come Let Me Love You", "You Make Me Wanna"] },
      { title: "Nude", year: 1989, cover: "https://upload.wikimedia.org/wikipedia/en/5/5e/Dead_or_Alive_-_Nude.jpg", type: "album", tracks: ["Come Home (With Me Baby)", "Baby Don't Say Goodbye", "I Don't Wanna Be Your Boyfriend", "Give It Back That Love Is Mine", "Something About You", "Unhappy Birthday", "Lover Return", "I'm Falling", "Isn't It a Shame", "Stop Picking on Me"] },
      { title: "Fan the Flame (Part 1)", year: 1990, cover: "https://upload.wikimedia.org/wikipedia/en/9/93/Dead_or_Alive_-_Fan_the_Flame_%28Part_1%29.jpg", type: "album", tracks: ["Your Sweetness (Is Your Weakness)", "Little Bit of Love", "Unhappy Birthday", "Rebel Rebel", "I Paralyze", "Bring It On", "Something in Your Kiss", "Dangerous", "Downer", "I'm Falling", "Lost Soul Found"] },
      { title: "Nukleopatra", year: 1995, cover: "https://upload.wikimedia.org/wikipedia/en/1/18/Dead_or_Alive_-_Nukleopatra.jpg", type: "album", tracks: ["Nukleopatra", "Give Myself to You", "Isn't It a Pity", "S.E.X.", "You Spin Me Round 1996", "Rebel Rebel", "Hit and Run Lover", "I Paralyze", "Unhappy Birthday", "There's Something on Your Mind", "Watch Out, Here It Comes Again"] },
      { title: "Fragile", year: 2000, cover: "https://upload.wikimedia.org/wikipedia/en/f/f9/Dead_or_Alive_-_Fragile.jpg", type: "album", tracks: ["I'm Too Beautiful", "Every Day", "Fragile", "Beautiful Eyes", "Time", "Pretty Pretty Boy", "Precious", "Holding On", "Fly Away", "You Make Me Complete", "Disappear Forever", "DJ Hit That Button '99"] }
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
