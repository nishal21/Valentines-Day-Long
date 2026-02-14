/* ============================================================
   ❤️ VALENTINE'S WEBSITE — CONFIGURATION FILE ❤️
   ============================================================
   
   ✏️ EDIT THIS FILE TO PERSONALIZE YOUR VALENTINE'S WEBSITE!
   
   Simply change the values below to make it your own.
   No coding knowledge needed — just replace the text between quotes.
   
   💡 BILINGUAL SUPPORT:
   Every text has "primary" (English) and "secondary" (your partner's language).
   If you don't need a second language, just copy the primary text into secondary.
   
   ============================================================ */

const CONFIG = {

    // =============================================
    // 👤 YOUR DETAILS
    // =============================================
    yourName: "Your Name",           // Your name (used in the love letter)
    yourLocation: "Your City",       // Your city/region
    yourCountry: "Your Country",     // Your country name
    yourCountryFlag: "🏳️",          // Your country flag emoji (find yours at emojipedia.org)

    // =============================================
    // 💕 YOUR PARTNER'S DETAILS
    // =============================================
    partnerName: "My Love",          // Their name or pet name
    partnerLocation: "Their City",   // Their city/region  
    partnerCountry: "Their Country", // Their country name
    partnerCountryFlag: "🏳️",       // Their country flag emoji

    // =============================================
    // 📅 YOUR RELATIONSHIP
    // =============================================
    // When did your love story begin? (used for the "days counter")
    relationshipStartDate: "2025-02-01",  // Format: YYYY-MM-DD

    // =============================================
    // 🎵 BACKGROUND MUSIC
    // =============================================
    // Paste a YouTube video ID here (the part after ?v= in a YouTube URL)
    // Example: For https://www.youtube.com/watch?v=Rr7Gduv0aaY → use "Rr7Gduv0aaY"
    youtubeVideoId: "Rr7Gduv0aaY",

    // =============================================
    // 🌍 LANGUAGE SETTINGS
    // =============================================
    // Primary language (English by default)
    primaryLangCode: "en",
    primaryLangLabel: "EN",       // Button label for primary language

    // Secondary language — change to your partner's language!
    // Examples: "FR" (French), "ES" (Spanish), "DE" (German), "ID" (Indonesian),
    //           "JP" (Japanese), "KR" (Korean), "AR" (Arabic), "HI" (Hindi), etc.
    secondaryLangCode: "xx",
    secondaryLangLabel: "XX",     // Button label for secondary language

    // =============================================
    // 📝 WEBSITE CONTENT
    // =============================================
    // Each text has "primary" (English) and "secondary" (your partner's language).
    // Replace the "secondary" values with translations in your chosen language.
    // If you only need English, copy the primary text into secondary.

    // --- Page 1: Welcome ---
    hero: {
        greeting: { primary: "Hey there,", secondary: "Hey there," },
        petName: { primary: "my beautiful girl", secondary: "my beautiful girl" },
        subtitle: { primary: "I made something special just for you...", secondary: "I made something special just for you..." },
        description: {
            primary: "Every love story is beautiful, but ours is my favourite.<br><span class='highlight-text'>What you're about to see comes straight from my heart.</span>",
            secondary: "Every love story is beautiful, but ours is my favourite.<br><span class='highlight-text'>What you're about to see comes straight from my heart.</span>"
        },
        distanceBadge: {
            primary: "", // Auto-generated from your locations above
            secondary: ""
        },
        distanceQuote: {
            primary: "Distance means nothing when someone means everything",
            secondary: "Distance means nothing when someone means everything"
        },
        ctaButton: { primary: "Begin Our Story", secondary: "Begin Our Story" },
    },

    // --- Page 2: Our Story Timeline ---
    // Add, remove, or edit events to tell YOUR story!
    timeline: {
        sectionTag: { primary: "Chapter One", secondary: "Chapter One" },
        sectionTitle: { primary: "Our Story So Far", secondary: "Our Story So Far" },
        sectionSubtitle: { primary: "Every moment with you is a memory I treasure forever", secondary: "Every moment with you is a memory I treasure forever" },
        nextButton: { primary: "See What I Love About You 💖", secondary: "See What I Love About You 💖" },

        events: [
            {
                icon: "fab fa-instagram",  // Font Awesome icon class — change to match how you met!
                // Other options: "fas fa-school" (school), "fas fa-briefcase" (work),
                //                "fas fa-users" (friends), "fas fa-coffee" (café), etc.
                date: { primary: "About 1 Year Ago", secondary: "About 1 Year Ago" },
                title: { primary: "The Day It All Started", secondary: "The Day It All Started" },
                text: {
                    primary: "I came across your profile and something told me I should send you a message. That one simple DM changed everything. I didn't know it then, but I was about to meet the most amazing person in my world. ✨",
                    secondary: "I came across your profile and something told me I should send you a message. That one simple DM changed everything. I didn't know it then, but I was about to meet the most amazing person in my world. ✨"
                }
            },
            {
                icon: "fas fa-comments",
                date: { primary: "The Early Days", secondary: "The Early Days" },
                title: { primary: "When Chatting Became the Best Part of My Day", secondary: "When Chatting Became the Best Part of My Day" },
                text: {
                    primary: "From casual conversations to late-night talks, every message from you made my heart skip a beat. Waiting for your reply became my favourite thing. You made ordinary days feel extraordinary. 💬",
                    secondary: "From casual conversations to late-night talks, every message from you made my heart skip a beat. Waiting for your reply became my favourite thing. You made ordinary days feel extraordinary. 💬"
                }
            },
            {
                icon: "fas fa-globe-asia",
                date: { primary: "Across the Distance", secondary: "Across the Distance" },
                title: { primary: "Our Bond Grew Stronger", secondary: "Our Bond Grew Stronger" },
                text: {
                    primary: "No matter the distance between us, our connection only grew deeper. Every conversation, every shared moment brought us closer together. 🌏",
                    secondary: "No matter the distance between us, our connection only grew deeper. Every conversation, every shared moment brought us closer together. 🌏"
                }
            },
            {
                icon: "fas fa-heart",
                date: { primary: "Somewhere Along the Way", secondary: "Somewhere Along the Way" },
                title: { primary: "When I Knew You Were Special", secondary: "When I Knew You Were Special" },
                text: {
                    primary: "It wasn't one big moment — it was all the little ones. Your kindness, your laugh, the way you understand me like no one else. Somewhere between \"hello\" and a million messages, I fell for you completely. 💕",
                    secondary: "It wasn't one big moment — it was all the little ones. Your kindness, your laugh, the way you understand me like no one else. Somewhere between \"hello\" and a million messages, I fell for you completely. 💕"
                }
            }
        ]
    },

    // --- Page 3: Reasons I Love You ---
    // Add, remove, or edit reasons! You can have as many as you want.
    reasons: {
        sectionTag: { primary: "Chapter Two", secondary: "Chapter Two" },
        sectionTitle: { primary: "Why You're My Everything", secondary: "Why You're My Everything" },
        sectionSubtitle: { primary: "Just a few of the infinite reasons", secondary: "Just a few of the infinite reasons" },
        counterLabel: { primary: "Days since you stole my heart", secondary: "Days since you stole my heart" },
        counterSub: { primary: "...and counting forever", secondary: "...and counting forever" },
        nextButton: { primary: "Now, The Big Question... 💝", secondary: "Now, The Big Question... 💝" },

        list: [
            {
                emoji: "🦋",
                title: { primary: "Your Beautiful Soul", secondary: "Your Beautiful Soul" },
                text: {
                    primary: "Your kindness and warmth light up even the darkest days. The way you care about others makes me fall for you a little more every day.",
                    secondary: "Your kindness and warmth light up even the darkest days. The way you care about others makes me fall for you a little more every day."
                }
            },
            {
                emoji: "😊",
                title: { primary: "Your Smile", secondary: "Your Smile" },
                text: {
                    primary: "When you smile, the whole world stops for a moment. That smile is the most beautiful thing I've ever seen, and I'd cross any ocean to see it.",
                    secondary: "When you smile, the whole world stops for a moment. That smile is the most beautiful thing I've ever seen, and I'd cross any ocean to see it."
                }
            },
            {
                emoji: "🧠",
                title: { primary: "You Understand Me", secondary: "You Understand Me" },
                text: {
                    primary: "No one gets me the way you do. You read between my words, feel my silence, and know exactly what I need before I even say it.",
                    secondary: "No one gets me the way you do. You read between my words, feel my silence, and know exactly what I need before I even say it."
                }
            },
            {
                emoji: "💪",
                title: { primary: "You Make Me Better", secondary: "You Make Me Better" },
                text: {
                    primary: "Because of you, I want to be the best version of myself. You inspire me, challenge me, and make me believe that anything is possible.",
                    secondary: "Because of you, I want to be the best version of myself. You inspire me, challenge me, and make me believe that anything is possible."
                }
            },
            {
                emoji: "🌙",
                title: { primary: "Every Late Night Chat", secondary: "Every Late Night Chat" },
                text: {
                    primary: "Those nights we stayed up talking for hours, forgetting about time zones and sleep — those are the moments I treasure the most.",
                    secondary: "Those nights we stayed up talking for hours, forgetting about time zones and sleep — those are the moments I treasure the most."
                }
            },
            {
                emoji: "♾️",
                title: { primary: "Everything About You", secondary: "Everything About You" },
                text: {
                    primary: "Your voice, your laugh, your thoughts, your dreams — every single thing about you is perfect to me, and I wouldn't change a thing.",
                    secondary: "Your voice, your laugh, your thoughts, your dreams — every single thing about you is perfect to me, and I wouldn't change a thing."
                }
            }
        ]
    },

    // --- Page 4: The Big Question ---
    question: {
        pretext: [
            { primary: "From across the oceans,", secondary: "From across the oceans," },
            { primary: "through every timezone,", secondary: "through every timezone," },
            { primary: "with all of my heart...", secondary: "with all of my heart..." }
        ],
        // The big question — each word appears one by one
        questionWords: { primary: ["Will", "You", "Be", "My", "Valentine?"], secondary: ["Will", "You", "Be", "My", "Valentine?"] },
        // Which word to highlight (0-indexed) — typically the last word
        highlightIndex: { primary: 4, secondary: 4 },
        locationLine: "",  // Auto-generated from your/partner locations
        connectedBy: { primary: "Connected by love", secondary: "Connected by love" },
        promise: {
            primary: "I promise to love you endlessly, across every distance and every tomorrow 💕",
            secondary: "I promise to love you endlessly, across every distance and every tomorrow 💕"
        },
        yesButton: { primary: "YES! 💖", secondary: "YES! 💖" },
        yesSub: { primary: "I'd love to be your Valentine!", secondary: "I'd love to be your Valentine!" },
        noButton: { primary: "Hmm, let me think... 🤔", secondary: "Hmm, let me think... 🤔" },

        // Funny messages when they click "No" — the button runs away! 😄
        noMessages: {
            primary: [
                "Are you sure? My heart is waiting for you... 🥺",
                "Please reconsider! I promise to make you the happiest! 💕",
                "My heart can't take this! Give me one chance? 🌹",
                "Wait... just imagine us together — beautiful, right? ✨",
                "You know you want to say yes! I can feel it! 💖",
                "I'll wait forever for your yes... but please don't make me! 😭",
                "Every love story needs a yes... let this be ours! 💝",
                "My heart beats only for you... say yes? Please? 🥹",
                "Think about it... our love story could be legendary! 💖",
                "I promise I'll always make you smile! Say yes! 🙏"
            ],
            secondary: [
                "Are you sure? My heart is waiting for you... 🥺",
                "Please reconsider! I promise to make you the happiest! 💕",
                "My heart can't take this! Give me one chance? 🌹",
                "Wait... just imagine us together — beautiful, right? ✨",
                "You know you want to say yes! I can feel it! 💖",
                "I'll wait forever for your yes... but please don't make me! 😭",
                "Every love story needs a yes... let this be ours! 💝",
                "My heart beats only for you... say yes? Please? 🥹",
                "Think about it... our love story could be legendary! 💖",
                "I promise I'll always make you smile! Say yes! 🙏"
            ]
        }
    },

    // --- Page 5: Celebration ---
    celebration: {
        title: { primary: "YOU SAID YES!", secondary: "YOU SAID YES!" },
        subtitle: { primary: "This is the happiest moment of my life!", secondary: "This is the happiest moment of my life!" },
        message: {
            primary: "",  // Auto-generated from your location
            secondary: ""
        },
        futureTitle: { primary: "Our Beautiful Future Together", secondary: "Our Beautiful Future Together" },

        dreams: [
            {
                emoji: "✈️",
                title: { primary: "The Day We Finally Meet", secondary: "The Day We Finally Meet" },
                text: {
                    primary: "The moment I get to hold your hand for real, see your smile in person — it'll be the greatest day of my life",
                    secondary: "The moment I get to hold your hand for real, see your smile in person — it'll be the greatest day of my life"
                }
            },
            {
                emoji: "🌅",
                title: { primary: "Exploring Together", secondary: "Exploring Together" },
                text: {
                    primary: "The whole world is waiting for us to explore it together — beautiful sunsets and adventures await",
                    secondary: "The whole world is waiting for us to explore it together — beautiful sunsets and adventures await"
                }
            },
            {
                emoji: "📱",
                title: { primary: "Every Video Call", secondary: "Every Video Call" },
                text: {
                    primary: "Until we close the distance, every call with you is a moment I live for",
                    secondary: "Until we close the distance, every call with you is a moment I live for"
                }
            },
            {
                emoji: "♾️",
                title: { primary: "Forever & Always", secondary: "Forever & Always" },
                text: {
                    primary: "This is only the beginning. Our love story is writing itself, and every chapter gets more beautiful",
                    secondary: "This is only the beginning. Our love story is writing itself, and every chapter gets more beautiful"
                }
            }
        ],
        letterButton: { primary: "Read My Letter To You", secondary: "Read My Letter To You" },
        replayButton: { primary: "Experience Again 💕", secondary: "Experience Again 💕" },
    },

    // --- Page 6: Love Letter ---
    loveLetter: {
        sectionTag: { primary: "From My Heart", secondary: "From My Heart" },
        sectionTitle: { primary: "A Letter Just for You", secondary: "A Letter Just for You" },

        // Write your love letter here! Each item in the array is a paragraph.
        // The first paragraph is styled as a greeting.
        letterParagraphs: {
            primary: [
                "To my dearest love,",
                "Do you remember when we first connected? I had no idea that a simple message would lead to the most beautiful thing that's ever happened to me. You.",
                "We may be separated by distance, time zones, and thousands of kilometres. But honestly? Not a single mile has ever made me feel distant from you. Every message, every voice note, every late-night conversation has only pulled me closer to your heart.",
                "You know what amazes me the most? How perfectly you understand me. You listen when no one else does. You care in ways that make my soul feel at home. You're the first person I want to talk to when I wake up and the last thought on my mind before I sleep.",
                "I know we haven't met in person yet, but when I close my eyes, I can see us — walking together, laughing together, building something incredible together. And I promise you, no matter how long it takes or how far the distance, I will find my way to you.",
                "You are my dream, my peace, and my favourite hello. Thank you for saying yes to being my Valentine. This is just the first of a million beautiful moments I want to share with you.",
                "I love you — across every ocean, timezone and border. 🤍"
            ],
            secondary: [
                "To my dearest love,",
                "Do you remember when we first connected? I had no idea that a simple message would lead to the most beautiful thing that's ever happened to me. You.",
                "We may be separated by distance, time zones, and thousands of kilometres. But honestly? Not a single mile has ever made me feel distant from you. Every message, every voice note, every late-night conversation has only pulled me closer to your heart.",
                "You know what amazes me the most? How perfectly you understand me. You listen when no one else does. You care in ways that make my soul feel at home. You're the first person I want to talk to when I wake up and the last thought on my mind before I sleep.",
                "I know we haven't met in person yet, but when I close my eyes, I can see us — walking together, laughing together, building something incredible together. And I promise you, no matter how long it takes or how far the distance, I will find my way to you.",
                "You are my dream, my peace, and my favourite hello. Thank you for saying yes to being my Valentine. This is just the first of a million beautiful moments I want to share with you.",
                "I love you — across every ocean, timezone and border. 🤍"
            ]
        },

        signoff: { primary: "Forever and always yours,", secondary: "Forever and always yours," },
        // Signature — auto-generated from yourName and yourLocation if left empty
        signatureName: { primary: "", secondary: "" },
        signatureDate: { primary: "Valentine's Day 2026 • February 14", secondary: "Valentine's Day 2026 • February 14" },

        backButton: { primary: "Back to Celebration", secondary: "Back to Celebration" },
        restartButton: { primary: "Start Over 💕", secondary: "Start Over 💕" },
        finalMessage: { primary: "Made with all my love, just for you 💖", secondary: "Made with all my love, just for you 💖" },
    }
};
