
const API_BASE_URL =
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1"
        ? "http://localhost:3000"
        : "https://taylor-swift-archive.onrender.com";


// ==========================================
// MOTIF DATA
// ==========================================

const motifs = {
  
    starryeyes: {
    title: "Starry Eyes",
    image: "images/starry-eyes.jpg",

    description: "Stars and celestial imagery are often used in Taylor Swift's music to describe admiration, romance and idealised perceptions of another person. References to starry eyes, eyes filled with stars and looking at someone like the stars create imagery of wonder, affection and seeing someone as extraordinary.",

    physicalReleases: [],

    songTitles: [],

    lyrics: [
        {
            excerpt: "He said the way my blue eyes shined put those Georgia stars to shame that night",
            song: "Tim McGraw",
            album: "Taylor Swift",
            year: "2006"
        },
        {
            excerpt: "I looked at you like the stars that shined in the sky like pretty lights",
            song: "Mary's Song (Oh My My My)",
            album: "Taylor Swift",
            year: "2006"
        },
        {
            excerpt: "I'll still look at you like the stars that shine in the sky",
            song: "Mary's Song (Oh My My My)",
            album: "Taylor Swift",
            year: "2006"
        },
        {
            excerpt: "Hangs in the air like stars in outer space",
            song: "When Emma Falls in Love",
            album: "Speak Now (Taylor's Version)",
            year: "2023"
        },
        {
            excerpt: "Call it what you want, starry eyes sparking up my darkest night",
            song: "Call It What You Want",
            album: "Reputation",
            year: "2017"
        },
        {
            excerpt: "The stars in your eyes shined brighter in Tupelo",
            song: "dorothea",
            album: "evermore",
            year: "2020"
        },
        {
            excerpt: "You're a bandit like me, eyes full of stars",
            song: "cowboy like me",
            album: "evermore",
            year: "2020"
        },
        {
            excerpt: "I thought I was better safe than starry-eyed",
            song: "loml",
            album: "The Tortured Poets Department",
            year: "2024"
        },
        {
            excerpt: "Gazing at me starry-eyed in your Jehovah's Witness suit",
            song: "The Smallest Man Who Ever Lived",
            album: "The Tortured Poets Department",
            year: "2024"
        }
    ]
},

moon: {
    title: "The Moon",
    image: "images/moon.jpg",

    description: "The moon frequently appears in Taylor Swift's music as a symbol of romance, mystery, longing and the passage of time. It is often associated with nighttime, dreams and distant connections, while lunar imagery can also reflect changing emotions and relationships.",

    physicalReleases: [
         {
            album: "Midnights",
            searchTerm: "Moonstone Blue",
            description: "The Moonstone Blue variant connects to the moon motif through its name and blue-toned visual identity.",
            specialEdition: true
        },
        {
            album: "Midnights",
            searchTerm: "Blood Moon",
            description: "The Blood Moon variant references the reddish appearance of the moon during a lunar eclipse.",
            specialEdition: true
        }
    ],

    songTitles: [],

    lyrics: [
        {
            excerpt: "The one we danced to all night long, the moon like a spotlight on the lake",
            song: "Tim McGraw",
            album: "Taylor Swift",
            year: "2006"
        },
        {
            excerpt: "I love you to the moon and back",
            song: "Ronan",
            album: "Red (Taylor's Version)",
            year: "2021"
        },
        {
            excerpt: "Aquamarine, moonlit swimming pool",
            song: "\"Slut!\"",
            album: "1989 (Taylor's Version)",
            year: "2023"
        },
        {
            excerpt: "The moon is high like your friends were the night when we first met",
            song: "Paper Rings",
            album: "Lover",
            year: "2019"
        },
        {
            excerpt: "Love you to the moon and to Saturn",
            song: "seven",
            album: "folklore",
            year: "2020"
        },
        {
            excerpt: "Crescent moon, coast is clear, spring breaks loose but so does fear",
            song: "ivy",
            album: "evermore",
            year: "2020"
        },
        {
            excerpt: "One night, a few moons ago, I saw flecks of what could have been lights",
            song: "Snow on the Beach",
            album: "Midnights",
            year: "2022"
        },
        {
            excerpt: "Half-moon eyes, bad surprise, did you realize out of time?",
            song: "Question...?",
            album: "Midnights",
            year: "2022"
        },
        {
            excerpt: "But some guy said my aura's moonstone just 'cause he was high",
            song: "Bejeweled",
            album: "Midnights",
            year: "2022"
        },
        {
            excerpt: "Blood moonlit, it must be counterfeit, I think there's been a glitch",
            song: "Glitch",
            album: "Midnights (3am Edition)",
            year: "2022"
        },
        {
            excerpt: "Half moonshine, a full eclipse",
            song: "Clara Bow",
            album: "The Tortured Poets Department",
            year: "2024"
        },
        {
            excerpt: "A greater woman stays cool, but I howl like a wolf at the moon",
            song: "The Prophecy",
            album: "The Tortured Poets Department: The Anthology",
            year: "2024"
        },
        {
            excerpt: "We both did the best we could do underneath the same moon in different galaxies",
            song: "Peter",
            album: "The Tortured Poets Department: The Anthology",
            year: "2024"
        }
    ]
},

  rain: {
    title: "Rain",
    image: "images/rain.jpg",

    description: "Rain is a recurring motif in Taylor Swift's music, often representing sadness, heartbreak, emotional conflict and difficult periods in relationships. However, rain can also symbolise renewal, cleansing, change and the possibility of moving forward.",

    physicalReleases: [],

    songTitles: [],

    lyrics: [
        // TAYLOR SWIFT (2006)
        {
            excerpt: "Trying to see through the rain coming down",
            song: "A Place in This World",
            album: "Taylor Swift",
            year: "2006"
        },
        {
            excerpt: "Oh, what a shame, what a rainy ending given to a perfect day",
            song: "Cold as You",
            album: "Taylor Swift",
            year: "2006"
        },
        {
            excerpt: "But he leaves you out like a penny in the rain",
            song: "Tied Together with a Smile",
            album: "Taylor Swift",
            year: "2006"
        },
        {
            excerpt: "I'm taking pictures in my mind so I can save them for a rainy day",
            song: "Stay Beautiful",
            album: "Taylor Swift",
            year: "2006"
        },

        // FEARLESS (TAYLOR'S VERSION) (2021)
        {
            excerpt: "There's something 'bout the way the street looks when it's just rained",
            song: "Fearless",
            album: "Fearless (Taylor's Version)",
            year: "2021"
        },
        {
            excerpt: "Can't help it if I wanna kiss you in the rain",
            song: "Hey Stephen",
            album: "Fearless (Taylor's Version)",
            year: "2021"
        },
        {
            excerpt: "But I miss screaming and fighting and kissing in the rain",
            song: "The Way I Loved You",
            album: "Fearless (Taylor's Version)",
            year: "2021"
        },
        {
            excerpt: "And it rains in your bedroom, everything is wrong, it rains when you're here and it rains when you're gone",
            song: "Forever & Always",
            album: "Fearless (Taylor's Version)",
            year: "2021"
        },
        {
            excerpt: "Just know I'm right here hoping that you'll come in with the rain",
            song: "Come In with the Rain",
            album: "Fearless (Taylor's Version)",
            year: "2021"
        },
        {
            excerpt: "Wait there in the pouring rain, come back for more",
            song: "The Other Side of the Door",
            album: "Fearless (Taylor's Version)",
            year: "2021"
        },
        {
            excerpt: "Once the last drop of rain has dried off the pavement",
            song: "You All Over Me",
            album: "Fearless (Taylor's Version)",
            year: "2021"
        },
        {
            excerpt: "It wasn't just like a movie, the rain didn't soak through my clothes down to my skin",
            song: "Bye Bye Baby",
            album: "Fearless (Taylor's Version)",
            year: "2021"
        },

        // SPEAK NOW (TAYLOR'S VERSION) (2023)
        {
            excerpt: "The way you move is like a full-on rainstorm",
            song: "Sparks Fly",
            album: "Speak Now (Taylor's Version)",
            year: "2023"
        },
        {
            excerpt: "Drop everything now, meet me in the pouring rain",
            song: "Sparks Fly",
            album: "Speak Now (Taylor's Version)",
            year: "2023"
        },
        {
            excerpt: "You paint me a blue sky, and go back and turn it to rain",
            song: "Dear John",
            album: "Speak Now (Taylor's Version)",
            year: "2023"
        },
        {
            excerpt: "I do recall now the smell of the rain fresh off the pavement",
            song: "Last Kiss",
            album: "Speak Now (Taylor's Version)",
            year: "2023"
        },
        {
            excerpt: "I've been left in the rain, lost and pining",
            song: "Electric Touch",
            album: "Speak Now (Taylor's Version)",
            year: "2023"
        },
        {
            excerpt: "She waits and takes her time 'cause little Miss Sunshine always thinks it's gonna rain",
            song: "When Emma Falls in Love",
            album: "Speak Now (Taylor's Version)",
            year: "2023"
        },
        {
            excerpt: "Now he'll be her shelter when it rains",
            song: "When Emma Falls in Love",
            album: "Speak Now (Taylor's Version)",
            year: "2023"
        },

        // RED (TAYLOR'S VERSION) (2021)
        {
            excerpt: "All I know is pouring rain and everything has changed",
            song: "Everything Has Changed",
            album: "Red",
            year: "2012"
        },

        // 1989 (TAYLOR'S VERSION) (2023)
        {
            excerpt: "Stand there like a ghost, shaking from the rain",
            song: "How You Get the Girl",
            album: "1989 (Taylor's Version)",
            year: "2023"
        },
        {
            excerpt: "Rain came pouring down, when I was drowning that's when I could finally breathe",
            song: "Clean",
            album: "1989 (Taylor's Version)",
            year: "2023"
        },
        {
            excerpt: "It's like we don't remember the rain we thought would last forever and ever",
            song: "Sweeter Than Fiction",
            album: "One Chance Soundtrack",
            year: "2013"
        },

        // REPUTATION (2017)
        {
            excerpt: "So why'd you have to rain on my parade?",
            song: "This Is Why We Can't Have Nice Things",
            album: "Reputation",
            year: "2017"
        },

        // LOVER (2019)
        {
            excerpt: "We bless the rains on Cornelia Street, memorize the creaks in the floor",
            song: "Cornelia Street",
            album: "Lover",
            year: "2019"
        },
        {
            excerpt: "Show me a gray sky, a rainy cab ride",
            song: "London Boy",
            album: "Lover",
            year: "2019"
        },
        {
            excerpt: "And when we had that fight out in the rain, you ran after me and called my name",
            song: "ME!",
            album: "Lover",
            year: "2019"
        },

        // FOLKLORE (2020)
        {
            excerpt: "But the rain is always gonna come if you're standing with me",
            song: "peace",
            album: "folklore",
            year: "2020"
        },

        // EVERMORE (2020)
        {
            excerpt: "But now my eyes leak acid rain on the pillow where you used to lay your head",
            song: "happiness",
            album: "evermore",
            year: "2020"
        },

        // MIDNIGHTS (2022)
        {
            excerpt: "Rain, he wanted it comfortable, I wanted that pain",
            song: "Midnight Rain",
            album: "Midnights",
            year: "2022"
        },
        {
            excerpt: "He was sunshine, I was midnight rain",
            song: "Midnight Rain",
            album: "Midnights",
            year: "2022"
        },
        {
            excerpt: "All of me changed like midnight rain",
            song: "Midnight Rain",
            album: "Midnights",
            year: "2022"
        },
        {
            excerpt: "Rain soaking, blind hoping, you said I was freeloading",
            song: "High Infidelity",
            album: "Midnights",
            year: "2022"
        },

        // THE TORTURED POETS DEPARTMENT (2024)
        {
            excerpt: "The voices in his head called the rain to end our days of wild",
            song: "My Boy Only Breaks His Favorite Toys",
            album: "The Tortured Poets Department",
            year: "2024"
        },
        {
            excerpt: "How you don't miss me in the shower and remember how my rain-soaked body was shaking",
            song: "The Black Dog",
            album: "The Tortured Poets Department: The Anthology",
            year: "2024"
        },
        {
            excerpt: "And when that sky rains fire on you and you're persona non grata",
            song: "The Albatross",
            album: "The Tortured Poets Department",
            year: "2024"
        },

        // THE LIFE OF A SHOWGIRL
        {
            excerpt: "Glistening grass from September rain",
            song: "Ruin the Friendship",
            album: "The Life of a Showgirl",
            year: "2025"
        }
    ]
},
  
    sunshine: {
    title: "Sunshine",
    image: "images/sunshine.jpg",

    description: "Sunshine and sunlight frequently appear in Taylor Swift's music, representing warmth, happiness, hope, love and clarity. The sun can also symbolise the passing of time, changing relationships and the contrast between light and darkness.",

    physicalReleases: [],

    songTitles: [],

    lyrics: [
        {
            excerpt: "Feeling lucky today, got the sunshine, could you tell me what more do I need",
            song: "A Place in This World",
            album: "Taylor Swift",
            year: "2006"
        },
        {
            excerpt: "But you're untouchable, burning brighter than the sun",
            song: "Untouchable",
            album: "Fearless (Taylor's Version)",
            year: "2021"
        },
        {
            excerpt: "We used to watch the sun go down on the boats in the water",
            song: "We Were Happy",
            album: "Fearless (Taylor's Version)",
            year: "2021"
        },
        {
            excerpt: "That's when, when it's sunny or storming",
            song: "That's When",
            album: "Fearless (Taylor's Version)",
            year: "2021"
        },
        {
            excerpt: "That's when, it was sunny or storming",
            song: "That's When",
            album: "Fearless (Taylor's Version)",
            year: "2021"
        },
        {
            excerpt: "And I hope the sun shines, and it's a beautiful day, and something reminds you, you wish you had stayed",
            song: "Last Kiss",
            album: "Speak Now",
            year: "2010"
        },
        {
            excerpt: "She waits and takes her time 'cause little Miss Sunshine always thinks it's gonna rain",
            song: "When Emma Falls in Love",
            album: "Speak Now (Taylor's Version)",
            year: "2023"
        },
        {
            excerpt: "I'll be summer sun for you forever",
            song: "Forever Winter",
            album: "Red (Taylor's Version)",
            year: "2021"
        },
        {
            excerpt: "I'll be your summer sun forever",
            song: "Forever Winter",
            album: "Red (Taylor's Version)",
            year: "2021"
        },
        {
            excerpt: "When you started crying, baby, I did, too, but when the sun came up I was looking at you",
            song: "Out of the Woods",
            album: "1989",
            year: "2014"
        },
        {
            excerpt: "But the monsters turned out to be just trees, and when the sun came up you were looking at me",
            song: "Out of the Woods",
            album: "1989",
            year: "2014"
        },
        {
            excerpt: "Say you'll remember me standing in a nice dress, staring at the sunset, babe",
            song: "Wildest Dreams",
            album: "1989",
            year: "2014"
        },
        {
            excerpt: "Flamingo pink, Sunrise Boulevard, clink clink, being this young is art",
            song: "\"Slut!\"",
            album: "1989 (Taylor's Version)",
            year: "2023"
        },
        {
            excerpt: "Whiskey on ice, Sunset and Vine, you've ruined my life by not being mine",
            song: "Gorgeous",
            album: "Reputation",
            year: "2017"
        },
        {
            excerpt: "Lived in the shade you were throwing 'til all of my sunshine was gone, gone, gone",
            song: "I Forgot That You Existed",
            album: "Lover",
            year: "2019"
        },
        {
            excerpt: "Sunshine on the street at the parade, but you would rather be in the dark ages",
            song: "You Need to Calm Down",
            album: "Lover",
            year: "2019"
        },
        {
            excerpt: "Sun sinks down, no curfew",
            song: "It's Nice to Have a Friend",
            album: "Lover",
            year: "2019"
        },
        {
            excerpt: "Rebekah rode up on the afternoon train, it was sunny",
            song: "the last great american dynasty",
            album: "folklore",
            year: "2020"
        },
        {
            excerpt: "We gather here, we line up weeping in a sunlit room",
            song: "my tears ricochet",
            album: "folklore",
            year: "2020"
        },
        {
            excerpt: "Your back beneath the sun, wishing I could write my name on it",
            song: "august",
            album: "folklore",
            year: "2020"
        },
        {
            excerpt: "I'd give you my sunshine, give you my best",
            song: "peace",
            album: "folklore",
            year: "2020"
        },
        {
            excerpt: "My eclipsed sun, this has broken me down",
            song: "hoax",
            album: "folklore",
            year: "2020"
        },
        {
            excerpt: "In our history, across our great divide, there is a glorious sunrise",
            song: "happiness",
            album: "evermore",
            year: "2020"
        },
        {
            excerpt: "And it gets colder and colder when the sun goes down",
            song: "coney island",
            album: "evermore",
            year: "2020"
        },
        {
            excerpt: "When the sun goes down, the sight that flashed before me was your face, when the sun goes down",
            song: "coney island",
            album: "evermore",
            year: "2020"
        },
        {
            excerpt: "I'll stare directly at the sun but never in the mirror",
            song: "Anti-Hero",
            album: "Midnights",
            year: "2022"
        },
        {
            excerpt: "He was sunshine, I was midnight rain",
            song: "Midnight Rain",
            album: "Midnights",
            year: "2022"
        },
        {
            excerpt: "Now the sun burns my heart and the sand hurts my feelings",
            song: "Hits Different",
            album: "Midnights",
            year: "2022"
        },
        {
            excerpt: "A moment of warm sun, but I'm not the one",
            song: "So Long, London",
            album: "The Tortured Poets Department",
            year: "2024"
        },
        {
            excerpt: "Now I'm dancing in my dress in the sun",
            song: "But Daddy I Love Him",
            album: "The Tortured Poets Department",
            year: "2024"
        },
        {
            excerpt: "Handcuffed to the spell I was under for just one hour of sunshine",
            song: "Fresh Out the Slammer",
            album: "The Tortured Poets Department",
            year: "2024"
        }
    ]
},
  
    clouds: {
    title: "Clouds",
    image: "images/clouds.jpg",

    description: "Clouds often appear in Taylor Swift's music as imagery associated with uncertainty, dreams, distance and changing emotions. They can represent something obscured or unreachable, but can also create a sense of wonder and possibility.",

    physicalReleases: [],

    songTitles: [
         {
        title: "Pink Clouding",
        album: "The Life Of A Showgirl Encore",
        year: "2026"
    }
    ],

    lyrics: [
        {
            excerpt: "Something happens when everybody finds out, see the vultures circling dark clouds",
            song: "I Know Places",
            album: "1989 (Taylor's Version)",
            year: "2023"
        },
        {
            excerpt: "And she's in my dreams, into the mist, into the clouds",
            song: "Carolina",
            album: "Where the Crawdads Sing Soundtrack",
            year: "2022"
        },
             {
            excerpt: "But I was pink (Pink) clouding from the thrill of it",
        song: "Pink Clouding",
        album: "The Life of a Showgirl (Encore)",
        year: "2026"
            },

               {
            excerpt: "I didn't wanna let you down (Pink cloud, pink cloud) So I left you up there on a pink cloud (Pink cloud)",
        song: "Pink Clouding",
        album: "The Life of a Showgirl (Encore)",
        year: "2026"
            }
    ]
},
  
    reds: {
    title: "Reds",
    image: "images/reds.jpg",

    description: "Red is a recurring colour in Taylor Swift's music, often representing intense love, passion, heartbreak, anger and memories. Through shades such as scarlet, crimson, burgundy and maroon, red can communicate different emotional experiences.",

    physicalReleases: [
    {
        searchTerm: "Red",
        album: "Red",
        description: "The album title directly references the colour red, which Taylor Swift uses throughout the album to represent the intensity of love, passion and heartbreak.",
        specialEdition: false
    },
    {
        searchTerm: "Red Deluxe Edition",
        album: "Red",
        description: "The deluxe edition retains the Red title and visual identity, continuing the album's exploration of intense emotions and the many shades of love.",
        specialEdition: true
    },
    {
        searchTerm: "Red Taylor's Version",
        album: "Red (Taylor's Version)",
        description: "The re-recorded version revisits the original Red era, bringing its themes of love, heartbreak and emotional intensity into a new release.",
        specialEdition: false
    }
    ],

    songTitles: [
        {
        title: "Red",
        album: "Red",
        year: "2012"
    },
    {
        title: "Maroon",
        album: "Midnights",
        year: "2022"
    }
],

    lyrics: [
        {
            excerpt: "You're a redneck heartbreak who's really bad at lying",
            song: "Picture to Burn",
            album: "Taylor Swift",
            year: "2006"
        },
        {
            excerpt: "You sit in class next to a redhead named Abigail",
            song: "Fifteen",
            album: "Fearless",
            year: "2008"
        },
        {
            excerpt: "'Cause you were Romeo, I was a scarlet letter",
            song: "Love Story",
            album: "Fearless",
            year: "2008"
        },
        {
            excerpt: "But loving him was red",
            song: "Red",
            album: "Red",
            year: "2012"
        },
        {
            excerpt: "Comes back to me, burning red",
            song: "Red",
            album: "Red",
            year: "2012"
        },
        {
            excerpt: "You almost ran the red 'cause you were looking over at me",
            song: "All Too Well",
            album: "Red",
            year: "2012"
        },
        {
            excerpt: "Photo album on the counter, your cheeks were turning red",
            song: "All Too Well",
            album: "Red",
            year: "2012"
        },
        {
            excerpt: "Standing there in my party dress in red lipstick with no one to impress",
            song: "The Moment I Knew",
            album: "Red",
            year: "2012"
        },
        {
            excerpt: "And my cheeks are growing tired of turning red and faking smiles",
            song: "Nothing New",
            album: "Red (Taylor's Version)",
            year: "2021"
        },
        {
            excerpt: "Cherry lips, crystal skies",
            song: "Blank Space",
            album: "1989",
            year: "2014"
        },
        {
            excerpt: "And I got that red lip classic thing that you like",
            song: "Style",
            album: "1989",
            year: "2014"
        },
        {
            excerpt: "Red lips and rosy cheeks",
            song: "Wildest Dreams",
            album: "1989",
            year: "2014"
        },
        {
            excerpt: "You're still all over me like a wine-stained dress I can't wear anymore",
            song: "Clean",
            album: "1989",
            year: "2014"
        },
        {
            excerpt: "We show off our different scarlet letters",
            song: "New Romantics",
            album: "1989",
            year: "2014"
        },
        {
            excerpt: "You part the crowd like the Red Sea",
            song: "Now That We Don't Talk",
            album: "1989 (Taylor's Version)",
            year: "2023"
        },
        {
            excerpt: "When you lost control, red blood, white snow",
            song: "Is It Over Now?",
            album: "1989 (Taylor's Version)",
            year: "2023"
        },
        {
            excerpt: "So here's the truth from my red lips",
            song: "End Game",
            album: "Reputation",
            year: "2017"
        },
        {
            excerpt: "Crimson red paint on my lips",
            song: "I Did Something Bad",
            album: "Reputation",
            year: "2017"
        },
        {
            excerpt: "I've got a list of names and yours is in red underlined",
            song: "Look What You Made Me Do",
            album: "Reputation",
            year: "2017"
        },
        {
            excerpt: "I once believed love would be burning red, but it's golden",
            song: "Daylight",
            album: "Lover",
            year: "2019"
        },
        {
            excerpt: "A red rose grew up out of ice frozen ground with no one around to tweet it",
            song: "the lakes",
            album: "folklore",
            year: "2020"
        },
        {
            excerpt: "I don't like anticipating my face in a red flush",
            song: "gold rush",
            album: "evermore",
            year: "2020"
        },
        {
            excerpt: "The burgundy on my t-shirt when you splashed your wine into me",
            song: "Maroon",
            album: "Midnights",
            year: "2022"
        },
        {
            excerpt: "And how the blood rushed into my cheeks, so scarlet, it was",
            song: "Maroon",
            album: "Midnights",
            year: "2022"
        },
        {
            excerpt: "The rust that grew between telephones",
            song: "Maroon",
            album: "Midnights",
            year: "2022"
        },
        {
            excerpt: "The lips I used to call home, so scarlet, it was maroon",
            song: "Maroon",
            album: "Midnights",
            year: "2022"
        },
        {
            excerpt: "I feel you no matter what, the rubies that I gave up",
            song: "Maroon",
            album: "Midnights",
            year: "2022"
        },
        {
            excerpt: "It was maroon, it was maroon",
            song: "Maroon",
            album: "Midnights",
            year: "2022"
        },
        {
            excerpt: "I looked around in a blood-soaked gown",
            song: "You're on Your Own, Kid",
            album: "Midnights",
            year: "2022"
        },
        {
            excerpt: "All that bloodshed, crimson clover, uh huh",
            song: "The Great War",
            album: "Midnights (3am Edition)",
            year: "2022"
        },
        {
            excerpt: "And we will never go back to that bloodshed, crimson clover, uh huh",
            song: "The Great War",
            album: "Midnights (3am Edition)",
            year: "2022"
        },
        {
            excerpt: "I'm not even sorry, nights are so starry, blood moonlit",
            song: "Glitch",
            album: "Midnights (3am Edition)",
            year: "2022"
        },
        {
            excerpt: "Will that make your memory fade from this scarlet maroon like it never happened?",
            song: "Chloe or Sam or Sophia or Marcus",
            album: "The Tortured Poets Department: The Anthology",
            year: "2024"
        }
    ]
},
   
    blue: {
    title: "Blue",
    image: "images/blue.jpg",

    description: "The colour blue is often associated with sadness, longing, romance and nostalgia throughout Taylor Swift's music. It can also represent beauty, memory and emotional connection.",

    physicalReleases: 
    [
         {
    searchTerm: "Clear Skies Blue",
    album: "1989 (Taylor's Version)",
    description: "This variant gets its name from the aesthetic shift for the TV version of this album.",
    specialEdition: false
        }
    ],

    songTitles: [],

    lyrics: [
        {
            excerpt: "He said the way my blue eyes shined put those Georgia stars to shame that night",
            song: "Tim McGraw",
            album: "Taylor Swift",
            year: "2006"
        },
        {
            excerpt: "Think of my head on your chest and my old faded blue jeans",
            song: "Tim McGraw",
            album: "Taylor Swift",
            year: "2006"
        },
        {
            excerpt: "Got the radio on, my old blue jeans",
            song: "A Place in This World",
            album: "Taylor Swift",
            year: "2006"
        },
        {
            excerpt: "I came out alive but I'm black and blue",
            song: "I Heart ?",
            album: "Taylor Swift",
            year: "2006"
        },
        {
            excerpt: "Every sky was your own kind of blue",
            song: "Crazier",
            album: "Hannah Montana: The Movie Soundtrack",
            year: "2009"
        },
        {
            excerpt: "You paint me a blue sky and go back and turn it to rain",
            song: "Dear John",
            album: "Speak Now",
            year: "2010"
        },
        {
            excerpt: "I remember your blue eyes looking into mine",
            song: "Ronan",
            album: "Single",
            year: "2012"
        },
        {
            excerpt: "Just twin fire signs, four blue eyes",
            song: "State of Grace",
            album: "Red",
            year: "2012"
        },
        {
            excerpt: "Losing him was blue like I'd never known",
            song: "Red",
            album: "Red",
            year: "2012"
        },
        {
            excerpt: "And all my walls stood tall, painted blue",
            song: "Everything Has Changed",
            album: "Red",
            year: "2012"
        },
        {
            excerpt: "You'll spend your whole life singing the blues if you keep thinking that way",
            song: "Starlight",
            album: "Red",
            year: "2012"
        },
        {
            excerpt: "I could see this view a hundred times, pale blue sky reflected in your eyes",
            song: "Run",
            album: "Red (Taylor's Version)",
            year: "2021"
        },
        {
            excerpt: "And did the twin flame bruise paint you blue?",
            song: "All Too Well (10 Minute Version)",
            album: "Red (Taylor's Version)",
            year: "2021"
        },
        {
            excerpt: "Clear blue water, high tide came and brought you in",
            song: "This Love",
            album: "1989",
            year: "2014"
        },
        {
            excerpt: "Aquamarine moonlit swimming pool",
            song: "\"Slut!\"",
            album: "1989 (Taylor's Version)",
            year: "2023"
        },
        {
            excerpt: "Blue dress on a boat, your new girl is my clone",
            song: "Is It Over Now?",
            album: "1989 (Taylor's Version)",
            year: "2023"
        },
        {
            excerpt: "If she's got blue eyes, I will surmise that you'll probably date her",
            song: "Is It Over Now?",
            album: "1989 (Taylor's Version)",
            year: "2023"
        },
        {
            excerpt: "Oh damn, never seen that color blue",
            song: "Delicate",
            album: "Reputation",
            year: "2017"
        },
        {
            excerpt: "Ocean blue eyes looking in mine",
            song: "Gorgeous",
            album: "Reputation",
            year: "2017"
        },
        {
            excerpt: "My, my love had been frozen deep blue, but you painted me golden",
            song: "Dancing with Our Hands Tied",
            album: "Reputation",
            year: "2017"
        },
        {
            excerpt: "And it's blue, the feeling I've got",
            song: "Cruel Summer",
            album: "Lover",
            year: "2019"
        },
        {
            excerpt: "My heart's been borrowed and yours has been blue",
            song: "Lover",
            album: "Lover",
            year: "2019"
        },
        {
            excerpt: "Lyrical smile, indigo eyes, hand on my thigh",
            song: "I Think He Knows",
            album: "Lover",
            year: "2019"
        },
        {
            excerpt: "We're so sad, we paint the town blue",
            song: "Miss Americana & The Heartbreak Prince",
            album: "Lover",
            year: "2019"
        },
        {
            excerpt: "I'm with you even if it makes me blue, which takes me back to the color that we painted your brother's wall",
            song: "Paper Rings",
            album: "Lover",
            year: "2019"
        },
        {
            excerpt: "And you know I love Springsteen, faded blue jeans, Tennessee whiskey",
            song: "London Boy",
            album: "Lover",
            year: "2019"
        },
        {
            excerpt: "I blew things out of proportion, now you're blue",
            song: "Afterglow",
            album: "Lover",
            year: "2019"
        },
        {
            excerpt: "Teal was the color of your shirt when you were sixteen at the yogurt shop",
            song: "invisible string",
            album: "folklore",
            year: "2020"
        },
        {
            excerpt: "Time, wondrous time gave me the blues and then purple-pink skies",
            song: "invisible string",
            album: "folklore",
            year: "2020"
        },
        {
            excerpt: "If your cascade ocean wave blues come",
            song: "peace",
            album: "folklore",
            year: "2020"
        },
        {
            excerpt: "Don't want no other shade of blue but you",
            song: "hoax",
            album: "folklore",
            year: "2020"
        },
        {
            excerpt: "Did I paint your bluest skies the darkest gray a universe away?",
            song: "coney island",
            album: "evermore",
            year: "2020"
        },
        {
            excerpt: "Indelible scars, pivotal marks, blue as the life she fled",
            song: "Carolina",
            album: "Where the Crawdads Sing Soundtrack",
            year: "2022"
        },
        {
            excerpt: "Sapphire tears on my face, sadness became my whole sky",
            song: "Bejeweled",
            album: "Midnights",
            year: "2022"
        },
        {
            excerpt: "Looked up at me with honor and truth, broken and blue",
            song: "The Great War",
            album: "Midnights (3am Edition)",
            year: "2022"
        },
        {
            excerpt: "Catastrophic blues, moving on was always easy for me to do",
            song: "Hits Different",
            album: "Midnights",
            year: "2022"
        },
        {
            excerpt: "You sacrificed us to the gods of your bluest days",
            song: "So Long, London",
            album: "The Tortured Poets Department",
            year: "2024"
        },
        {
            excerpt: "Gray and blue and fights and tunnels",
            song: "Fresh Out the Slammer",
            album: "The Tortured Poets Department",
            year: "2024"
        },
        {
            excerpt: "Drowning in the Blue Nile, he sent me 'Downtown Lights'",
            song: "Guilty as Sin?",
            album: "The Tortured Poets Department",
            year: "2024"
        },
        {
            excerpt: "And maybe you've reframed it and in your mind, you never beat my spirit black and blue",
            song: "thanK you aIMee",
            album: "The Tortured Poets Department: The Anthology",
            year: "2024"
        }
    ]
},


    pink: {
        title: "Pink",
        image: "images/mall1.jpg",

        description:
            "Taylor Swift often uses this colour to symbolize romance or the idea of 'rose coloured glasses'.",

        physicalReleases: [
           
             {
        searchTerm: "Rose Garden Pink",
        album: "1989 (Taylor's Version)",
        description: "This variant gets its name from the song Blank Space, which features the line about a rose garden filled with thorns.",
        specialEdition: null
            }

        ],

        songTitles: [
               {
        title: "Pink Clouding",
        album: "The life of a Showgirl (Encore)",
        year: "2026"
            }
        ],

        lyrics: 
        [
             
            {
            excerpt: "Flamingo pink, Sunrise Boulevard",
        song: "Slut!",
        album: "1989 (TV)",
        year: "2023"
            },
              {
            excerpt: "Light pink skies up on the roof",
        song: "It’s Nice To Have A Friend",
        album: "Lover",
        year: "2019"
            },
               {
            excerpt: "Time, wondrous time gave me the blues and then purple-pink skies",
        song: "Invisible String",
        album: "Folklore",
        year: "2020"
            },
               {
            excerpt: "Cheeks pink in the twinkling lights",
        song: "So High School",
        album: "The Tortured Poets Department",
        year: "2024"
            },
           
                {
            excerpt: "But I was pink (Pink) clouding from the thrill of it",
        song: "Pink Clouding",
        album: "The Life of a Showgirl (Encore)",
        year: "2026"
            },

               {
            excerpt: "I didn't wanna let you down (Pink cloud, pink cloud) So I left you up there on a pink cloud (Pink cloud)",
        song: "Pink Clouding",
        album: "The Life of a Showgirl (Encore)",
        year: "2026"
            }
        ]
    },

   green: {
        title: "Green",
        image: "images/mall1.jpg",

        description:
            "Taylor Swift often uses this colour to symbolize something that is new, fresh or naive. In other cases it can refer to something that lasts forever.",

        physicalReleases: [
            {
    searchTerm: "Jade Green",
    album: "Midnights",
    description: "Most of the other album variants are named after crystals named in the album. This is one of the exceptions and is likely named based on the vinyl's appearance.",
    specialEdition: true
},
{
    searchTerm: "Aquamarine Green",
    album: "1989 (Taylor's Version)",
    description: "This variant gets its name from the song Slut!, which features the line referencing an aquamarine, moonlit swimming pool.",
    specialEdition: true
}
        ],

        songTitles: [],

        lyrics: 
        [
              {
        excerpt: "Get me with those green eyes, baby, as the lights go down",
        song: "Sparks Fly",
        album: "Speak Now",
        year: "2010"
            },
              {
        excerpt: "Took off faster than a green light go",
        song: "Holy Ground",
        album: "Red",
        year: "2012"
            },
              {
        excerpt: "And all I’ve seen since eighteen hours ago is green eyes and freckles and your smile",
        song: "Everything Has Changed",
        album: "Red",
        year: "2012"
            },
            {
            excerpt: "In the dead of night, your eyes so green",
        song: "I Know Places",
        album: "1989",
        year: "2014"
            },
              {
            excerpt: "Didn’t you flash your green eyes at me?",
        song: "Wonderland",
        album: "1989",
        year: "2014"
            },
               {
            excerpt: "Green was the color of the grass where I used to read at Centennial Park",
        song: "Invisible String",
        album: "Folklore",
        year: "2020"
            },
               {
            excerpt: "All you want from me now is the green light of forgiveness",
        song: "Happiness",
        album: "Evermore",
        year: "2020"
            },
              {
            excerpt: "How evergreen, our group of friends don’t think we’ll say that word again",
        song: "Champagne Problems",
        album: "Evermore",
        year: "2020"
            },
                {
            excerpt: "I searched aurora borealis green",
        song: "Snow On The Beach",
        album: "Midnights",
        year: "2020"
            }
        ]
    },
   
   
    "1950s": {
        title: "The 1950s",
        image: "images/mall1.jpg",

        description:
            "Taylor Swift often uses this decade as a metaphor for strict societal rules and expectations placed on her due to gender.",

        physicalReleases: [
          
        ],

        songTitles: [],

        lyrics: 
        [
              {
        excerpt: "Holding hands on the way to a dance and the date on the back said 1958",
        song: "Timeless",
        album: "Speak Now (TV)",
        year: "2023"
            },
              {
        excerpt: " I am standing in a 1950s gymnasium and I can still see you now",
        song: "Suburban Legends",
        album: "1989 (TV)",
        year: "2023"
            },
              {
        excerpt: "No deal, the 1950s shit they want from me",
        song: "Lavender Haze",
        album: "Midnights",
        year: "2022"
            }

        ]
    },

       "3am": {
        title: "3 am",
        image: "images/mall1.jpg",

        description:
            "Taylor Swift often uses this time to reference staying up late, being haunted by old memories",

        physicalReleases: [
            {
    searchTerm: "Midnights (3am Edition)",
    album: "Midnights",
    description: "This album is based on stories from her past that haunt her to this day. The 3am Edition includes additional songs that kept her up for longer.",
    specialEdition: true
}
        ],

        songTitles: [],

        lyrics: 
        [
              {
        excerpt: "3 AM and I’m still awake, I bet you’re just fine",
        song: "I Bet You Think About Me",
        album: "Red (TV)",
        year: "2021"
            },
              {
        excerpt: "I call, just checking up on him, he’s up, 3 AM, pacing",
        song: "Forever Winter",
        album: "Red",
        year: "2012"
            },
              {
        excerpt: "I’ll be your summer sun forever, at 3 AM, pacing",
        song: "Forever Winter",
        album: "Red",
        year: "2012"
            }

        ]
    },
   
    mall: {
        title: "The Mall",
        image: "images/mall1.jpg",

        description:
            "Taylor Swift often uses a mall to convey themes of teenage nostalgia and innocence. The mall was a common place for teenagers to hang out.",

        physicalReleases: [
           {
    searchTerm: "Meet Me Behind The Mall",
    album: "Folklore",
    description: "Named after the song August, referencing the lyric 'meet me behind the mall'. The phrase connects the physical release to the themes of nostalgia and youth explored in the album.",
    specialEdition: true
}
        ],

        songTitles: [],

        lyrics: 
        [
              {
        excerpt: "Cancel plans just in case you'd call and say \"Meet me behind the mall\"",
        song: "August",
        album: "Folklore",
        year: "2020"
            },
              {
        excerpt: "Cause we were like the mall before the Internet, it was the one place to be",
        song: "Coney Island",
        album: "Evermore",
        year: "2020"
            },
              {
        excerpt: "Your hand-me-down sweaters should've been from the mall",
        song: "Babylon",
        album: "The Life Of A Showgirl (Encore)",
        year: "2026"
            }

        ]
    },


    woods: {
        title: "The Woods",
        image: "images/woods.png",

        description:
            "The woods are a location used in 2 main ways. Firstly as a place to find refuge/escape, and secondly as a place you physically cannot escape from.",

        physicalReleases: 
        [
             {
    searchTerm: "In The Trees",
    album: "Folklore",
    description: "Named after the song Seven, referencing the lyric 'please picture me in the trees'. The phrase connects the physical release to the fictional location of the Folklorian Forest explored in the album.",
    specialEdition: null
}
        ],
        songTitles: 
        [
              {
        title: "Out of the Woods",
        album: "1989",
        year: "2014"
            },
              {
        title: "Wood",
        album: "The Life Of A Showgirl",
        year: "2025"
            }
        ],
        lyrics: 
        [
              {
        excerpt: "Are we out of the woods yet? Are we out of the woods? Are we in the clear yet?",
        song: "Out of the Woods",
        album: "1989",
        year: "2014"
            },
             {
        excerpt: "Please picture me in the trees. I hit my peak at seven.",
        song: "Seven",
        album: "Folklore",
        year: "2020"
            },
            {
        excerpt: "Honey when im above the trees, i see this for what it is.",
        song: "Happiness",
        album: "Evermore",
        year: "2020"
            },
         {
        excerpt: "Red wood tree, it ain't hard to see.",
        song: "Wood",
        album: "The Life of a Showgirl",
        year: "2025"
            }

        ]
    },


    resturaunt: {
        title: "The Resturaunt",
        image: "images/house.png",

        description:
            "The Resturaunt is used as a primary location for dates. Often used in hindsight to reflect on the positives the relationship once had.",

        physicalReleases: [],
        songTitles: [],
        lyrics: 
        [
            {
                excerpt: "Help, I'm still at the resturaunt.",
        song: "Right where you left me",
        album: "Evermore (Deluxe)",
        year: "2021"
            },
          {
                excerpt: "I see your profile and your smile on unsuspecting waiters.",
        song: "Is It Over Now?",
        album: "1989 (TV)",
        year: "2023"
            },
            {
            excerpt: "Bold was the waitress on our three-year trip getting lunch down by the Lakes",
            song: "Invisible String",
             album: "Folklore",
            year: "2020"
            },
            {
            excerpt: "When the dinner is cold and the chatter gets old, you ask for the tab",
            song: "it’s time to go",
             album: "Evermore (Deluxe)",
            year: "2021"
            },
            {
            excerpt: "At dinner, you take my ring off my middle finger and put it on the one people put wedding rings on.",
            song: "The Tortured Poets Department",
             album: "The Tortured Poets Department",
            year: "2024"
            }
        ]
    },


    hallway: {
        title: "The Hallway",
        image: "images/hallway.png",

        description:
            "This location is often used to indicate reflection, delusion of wanting someoneto come back or the breaking down of a relationship.",

        physicalReleases: [],
        songTitles: [],
        lyrics: [
            {
            excerpt: "Got to the hallway, well, on my way to my loving bed",
            song: "Our Song",
             album: "Taylor Swift",
            year: "2006"
            },
             {
            excerpt: "You brush past me in the hallway and you don’t think I, I, I can see you, do you?",
            song: "I Can See You",
             album: "Speak Now (TV)",
            year: "2023"
            },
             {
            excerpt: "But your close friends always seem to know when there's something really wrong so they follow me down the hall",
            song: "The Moment I Knew",
             album: "Red",
            year: "2012"
            },
             {
            excerpt: "Danced in the kitchen, chased me down through the hallway",
            song: "The Very First Night",
             album: "Red (TV)",
            year: "2021"
            },
             {
            excerpt: "Holding all this love out here in the hall",
            song: "Exile",
             album: "Folklore",
            year: "2020"
            },
             {
            excerpt: "And soon they’ll have the nerve to deck the halls that we once walked through",
            song: "Champagne Problems",
             album: "Evermore",
            year: "2020"
            },
             {
            excerpt: "Were you standing in the hallway with a big cake, happy birthday",
            song: "Coney Island",
             album: "Evermore",
            year: "2020"
            },
             {
            excerpt: "You were standing hallow-eyed in the hallway",
            song: "Maroon",
             album: "Midnights",
            year: "2022"
            },
              {
            excerpt: "I heard your key turn in the door down the hallway",
            song: "Hits Different",
             album: "Midnights",
            year: "2022"
            },
              {
            excerpt: " Now you’re running down the hallway",
            song: "You’re Losing Me",
             album: "Midnights",
            year: "2022"
            }
        ]
    },


    beach: {
        title: "The Beach",
        image: "images/beach.png",

        description:
            "Beaches are often used to describe something that is beautiful but dangerous at the same time.",

        physicalReleases: [],
        songTitles: 
        [
            {
             title: "Snow At The Beach",
             album: "Midnights",
            year: "2022"
            },
        ],
        lyrics: 
        [
              {
            excerpt: "Are we falling like snow at the beach, weird but it was beautiful",
            song: "Snow At The Beach",
             album: "Midnights",
            year: "2022"
            },
              {
            excerpt: "Freedom felt like summer then on the coast. Now the sun burns my heart and the sand hurts my feelings",
            song: "Hits Different",
             album: "Midnights",
            year: "2022"
            },
              {
            excerpt: "Drinking on a beach with you all over me",
            song: "End Game",
             album: "Reputation",
            year: "2017"
            },
              {
            excerpt: "Fifty years is a long time Holiday House sat quietly on that beach",
            song: "the last great american dynasty",
             album: "Folklore",
            year: "2020"
            },
              {
            excerpt: " Crawling up the beaches, now, Sir, I think he's bleeding out",
            song: "Epiphany",
             album: "Folklore",
            year: "2020"
            }
        ]
    }

};

async function fetchDiscogsRelease(release) {

    // Search Discogs
    const params = new URLSearchParams({
        searchTerm: release.searchTerm,
        album: release.album
    });

    const searchResponse = await fetch(
        `${API_BASE_URL}/api/discogs/search?${params}`
    );

    if (!searchResponse.ok) {
        throw new Error("Discogs search failed");
    }

    const searchData = await searchResponse.json();

    if (!searchData.results || searchData.results.length === 0) {
        return null;
    }

    // Find the closest matching result
    const searchTerm = release.searchTerm.toLowerCase();

    const match = searchData.results.find(result =>
        result.title.toLowerCase().includes(searchTerm)
    ) || searchData.results[0];

    // Retrieve full release details
    const detailResponse = await fetch(
        `${API_BASE_URL}/api/discogs/releases/${match.id}`
    );

    if (!detailResponse.ok) {
        throw new Error("Could not retrieve release details");
    }

    const details = await detailResponse.json();

    // Find the primary release image
    const primaryImage = details.images?.find(
        image => image.type === "primary"
    ) || details.images?.[0];

    // Return combined information
    return {
        ...release,

        image: primaryImage?.uri || match.cover_image || "",

        releaseDate: details.released || details.year || "Not specified",

        formats: details.formats?.map(format => format.name) || []
    };
}

async function loadPhysicalReleases() {

    const container = document.getElementById("physical-releases");

    container.textContent = "Loading physical releases...";

    const searches = motif.physicalReleaseSearch || [];

    if (searches.length === 0) {
        displayEmptyMessage(container);
        return;
    }

    // Search for all releases
    const results = await Promise.allSettled(
        searches.map(release => fetchDiscogsRelease(release))
    );

    const successfulReleases = [];
    let failedCount = 0;

    results.forEach(result => {

        if (result.status === "fulfilled" && result.value) {
            successfulReleases.push(result.value);
        } else if (result.status === "rejected") {
            failedCount++;
            console.error(result.reason);
        }

    });

    if (successfulReleases.length === 0) {

        if (failedCount > 0) {
            container.textContent =
                "Unable to load physical releases. Please try again later.";
        } else {
            displayEmptyMessage(container);
        }

        return;
    }

    // Display successful results
    motif.physicalReleases = successfulReleases;

    displayPhysicalReleases();

    // Show partial failure information
    if (failedCount > 0) {
        const message = document.createElement("p");

        message.className = "empty-message";
        message.textContent =
            `${failedCount} release(s) could not be loaded.`;

        container.appendChild(message);
    }
}


// ==========================================
// GET SELECTED MOTIF
// ==========================================

const params = new URLSearchParams(window.location.search);
const motifName = params.get("motif");

const motif = motifs[motifName];


// ==========================================
// LOAD MOTIF
// ==========================================

function loadMotif() {

    if (!motif) {
        document.querySelector(".motif-page").innerHTML = `
            <h1 class="empty-message">Motif not found</h1>
        `;

        document.title = "Motif Not Found";
        return;
    }

    // Update page title
    document.title = `${motif.title} | Taylor Swift Thematic Music Archive`;

    // Update hero
    document.getElementById("motif-title").textContent = motif.title;

    document.getElementById("motif-description").textContent =
        motif.description;

    const heroImage = document.getElementById("motif-hero-image");

    heroImage.src = motif.image;
    heroImage.alt = motif.title;


    // Load sections
    loadPhysicalReleases();
displaySongTitles();
displayLyrics();

}


// ==========================================
// EMPTY SECTION MESSAGE
// ==========================================

function displayEmptyMessage(container) {

    container.innerHTML = `
        <p class="empty-message">
            No information for this section
        </p>
    `;

}


// ==========================================
// PHYSICAL RELEASES
// ==========================================

function displayPhysicalReleases() {

    const container = document.getElementById("physical-releases");

    if (!motif.physicalReleases || motif.physicalReleases.length === 0) {
        displayEmptyMessage(container);
        return;
    }

    container.innerHTML = motif.physicalReleases.map(release => {

        const specialEdition =
            release.specialEdition === null
                ? "Not specified"
                : release.specialEdition
                    ? "Yes"
                    : "No";

        const formats =
            release.formats && release.formats.length > 0
                ? release.formats.join(" / ")
                : "Not specified";

        return `
            <article class="physical-release-card">

                <img
                    src="${release.image}"
                    alt="${release.name}"
                >

                <div class="physical-release-info">

                    <h3>${release.name}</h3>

                    <p class="release-album">
                        ${release.album}
                    </p>

                    <p class="release-description">
                        ${release.description}
                    </p>

                    <div class="release-details">

                        <p>
                            Release date:
                            ${release.releaseDate || "Not specified"}
                        </p>

                        <p>
                            Special edition:
                            ${specialEdition}
                        </p>

                        <p>
                            Format:
                            ${formats}
                        </p>

                    </div>

                </div>

            </article>
        `;

    }).join("");

}


// ==========================================
// SONG TITLES
// ==========================================

function displaySongTitles() {

    const container = document.getElementById("song-titles");

    if (!motif.songTitles || motif.songTitles.length === 0) {
        displayEmptyMessage(container);
        return;
    }

    container.innerHTML = motif.songTitles.map(song => {

        return `
            <article class="song-title-item">

                <h3>${song.title}</h3>

                <p>
                    ${song.album} · ${song.year}
                </p>

            </article>
        `;

    }).join("");

}


// ==========================================
// LYRICS
// ==========================================

function displayLyrics() {

    const container = document.getElementById("lyrics-list");

    if (!motif.lyrics || motif.lyrics.length === 0) {
        displayEmptyMessage(container);
        return;
    }

    container.innerHTML = motif.lyrics.map(lyric => {

        return `
            <article class="lyric-item">

                <p>
                    "${lyric.excerpt}"
                </p>

                <p class="lyric-source">
                    ${lyric.song} · ${lyric.album} · ${lyric.year}
                </p>

            </article>
        `;

    }).join("");

}


// ==========================================
// INITIALISE
// ==========================================

loadMotif();
