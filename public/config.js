/* ============================================================
   ❤️ VALENTINE'S WEBSITE — CONFIGURATION FILE ❤️
   ============================================================
   
   ✏️ EDIT THIS FILE TO PERSONALIZE YOUR VALENTINE'S WEBSITE!
   
   Simply change the values below to make it your own.
   No coding knowledge needed — just replace the text between quotes.
   
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
    primaryLangLabel: "EN",

    // Secondary language (for your partner — set to their language!)
    secondaryLangCode: "id",
    secondaryLangLabel: "ID",

    // =============================================
    // 📝 WEBSITE CONTENT
    // =============================================
    // All text content is below. Each section has a primary language
    // version and a secondary language version.
    // If you don't need a second language, just leave the secondary fields
    // the same as the primary ones.

    // --- Page 1: Welcome ---
    hero: {
        greeting: { primary: "Hey there,", secondary: "Hai sayang," },
        petName: { primary: "my beautiful girl", secondary: "gadis cantikku" },
        subtitle: { primary: "I made something special just for you...", secondary: "Aku membuat sesuatu yang spesial hanya untukmu..." },
        description: {
            primary: "Every love story is beautiful, but ours is my favourite.<br><span class='highlight-text'>What you're about to see comes straight from my heart.</span>",
            secondary: "Setiap kisah cinta itu indah, tapi kisah kita adalah favoritku.<br><span class='highlight-text'>Yang akan kamu lihat ini datang langsung dari hatiku.</span>"
        },
        distanceBadge: {
            primary: "", // Will be auto-generated from locations
            secondary: ""
        },
        distanceQuote: {
            primary: "Distance means nothing when someone means everything",
            secondary: "Jarak tidak berarti apa-apa ketika seseorang berarti segalanya"
        },
        ctaButton: { primary: "Begin Our Story", secondary: "Mulai Kisah Kita" },
    },

    // --- Page 2: Our Story Timeline ---
    timeline: {
        sectionTag: { primary: "Chapter One", secondary: "Bab Pertama" },
        sectionTitle: { primary: "Our Story So Far", secondary: "Kisah Kita Sejauh Ini" },
        sectionSubtitle: { primary: "Every moment with you is a memory I treasure forever", secondary: "Setiap momen bersamamu adalah kenangan yang aku hargai selamanya" },
        nextButton: { primary: "See What I Love About You 💖", secondary: "Lihat Apa yang Aku Suka dari Kamu 💖" },

        events: [
            {
                icon: "fab fa-instagram",  // Font Awesome icon class (change if you didn't meet on Instagram)
                date: { primary: "About 1 Year Ago", secondary: "Sekitar 1 Tahun Lalu" },
                title: { primary: "The Day It All Started", secondary: "Hari Ketika Semuanya Dimulai" },
                text: {
                    primary: "I came across your profile and something told me I should send you a message. That one simple DM changed everything. I didn't know it then, but I was about to meet the most amazing person in my world. ✨",
                    secondary: "Aku menemukan profilmu dan sesuatu memberitahuku bahwa aku harus mengirimmu pesan. Satu DM sederhana itu mengubah segalanya. Saat itu aku belum tahu, tapi aku akan bertemu orang paling luar biasa di duniaku. ✨"
                }
            },
            {
                icon: "fas fa-comments",
                date: { primary: "The Early Days", secondary: "Hari-Hari Awal" },
                title: { primary: "When Chatting Became the Best Part of My Day", secondary: "Ketika Chat Menjadi Bagian Terbaik dari Hariku" },
                text: {
                    primary: "From casual conversations to late-night talks, every message from you made my heart skip a beat. Waiting for your reply became my favourite thing. You made ordinary days feel extraordinary. 💬",
                    secondary: "Dari obrolan biasa hingga percakapan larut malam, setiap pesanmu membuat jantungku berdebar. Menunggu balasanmu menjadi hal favoritku. Kamu membuat hari-hari biasa terasa luar biasa. 💬"
                }
            },
            {
                icon: "fas fa-globe-asia",
                date: { primary: "Across the Distance", secondary: "Melintasi Jarak" },
                title: { primary: "Distance Made Our Bond Stronger", secondary: "Jarak Membuat Ikatan Kita Semakin Kuat" },
                text: {
                    primary: "Thousands of kilometres apart, yet so close in heart. Every time zone difference, every \"goodnight\" while the other says \"good morning\" only made me want you more. 🌏",
                    secondary: "Ribuan kilometer jauhnya, namun begitu dekat di hati. Setiap perbedaan zona waktu, setiap \"selamat tidur\" saat yang lain berkata \"selamat pagi\" hanya membuatku semakin menginginkanmu. 🌏"
                }
            },
            {
                icon: "fas fa-heart",
                date: { primary: "Somewhere Along the Way", secondary: "Di Suatu Titik Perjalanan" },
                title: { primary: "When I Knew You Were Special", secondary: "Ketika Aku Tahu Kamu Istimewa" },
                text: {
                    primary: "It wasn't one big moment — it was all the little ones. Your kindness, your laugh, the way you understand me like no one else. Somewhere between \"hello\" and a million messages, I fell for you completely. 💕",
                    secondary: "Bukan satu momen besar — tapi semua momen-momen kecilnya. Kebaikanmu, tawamu, caramu memahami aku seperti tidak ada orang lain. Di antara \"halo\" dan sejuta pesan, aku jatuh cinta padamu sepenuhnya. 💕"
                }
            }
        ]
    },

    // --- Page 3: Reasons I Love You ---
    reasons: {
        sectionTag: { primary: "Chapter Two", secondary: "Bab Kedua" },
        sectionTitle: { primary: "Why You're My Everything", secondary: "Mengapa Kamu Segalanya Bagiku" },
        sectionSubtitle: { primary: "Just a few of the infinite reasons", secondary: "Hanya beberapa dari alasan yang tak terhingga" },
        counterLabel: { primary: "Days since you stole my heart", secondary: "Hari sejak kamu mencuri hatiku" },
        counterSub: { primary: "...and counting forever", secondary: "...dan terus menghitung selamanya" },
        nextButton: { primary: "Now, The Big Question... 💝", secondary: "Sekarang, Pertanyaan Besar... 💝" },

        list: [
            {
                emoji: "🦋",
                title: { primary: "Your Beautiful Soul", secondary: "Jiwamu yang Indah" },
                text: {
                    primary: "Your kindness and warmth light up even the darkest days. The way you care about others makes me fall for you a little more every day.",
                    secondary: "Kebaikan dan kehangatanmu menerangi bahkan hari-hari tergelap. Caramu peduli pada orang lain membuatku jatuh cinta padamu sedikit lebih banyak setiap hari."
                }
            },
            {
                emoji: "😊",
                title: { primary: "Your Smile", secondary: "Senyumanmu" },
                text: {
                    primary: "When you smile, the whole world stops for a moment. That smile is the most beautiful thing I've ever seen, and I'd cross any ocean to see it.",
                    secondary: "Ketika kamu tersenyum, seluruh dunia berhenti sejenak. Senyumanmu adalah hal terindah yang pernah aku lihat, dan aku rela menyeberangi lautan apapun untuk melihatnya."
                }
            },
            {
                emoji: "🧠",
                title: { primary: "You Understand Me", secondary: "Kamu Memahami Aku" },
                text: {
                    primary: "No one gets me the way you do. You read between my words, feel my silence, and know exactly what I need before I even say it.",
                    secondary: "Tidak ada yang memahami aku seperti kamu. Kamu membaca di antara kata-kataku, merasakan diamku, dan tahu persis apa yang aku butuhkan sebelum aku mengatakannya."
                }
            },
            {
                emoji: "💪",
                title: { primary: "You Make Me Better", secondary: "Kamu Membuatku Lebih Baik" },
                text: {
                    primary: "Because of you, I want to be the best version of myself. You inspire me, challenge me, and make me believe that anything is possible.",
                    secondary: "Karenamu, aku ingin menjadi versi terbaik dari diriku. Kamu menginspirasi aku, menantang aku, dan membuatku percaya bahwa segalanya mungkin."
                }
            },
            {
                emoji: "🌙",
                title: { primary: "Every Late Night Chat", secondary: "Setiap Obrolan Larut Malam" },
                text: {
                    primary: "Those nights we stayed up talking for hours, forgetting about time zones and sleep — those are the moments I treasure the most.",
                    secondary: "Malam-malam ketika kita begadang mengobrol berjam-jam, melupakan zona waktu dan tidur — itulah momen-momen yang paling aku hargai."
                }
            },
            {
                emoji: "♾️",
                title: { primary: "Everything About You", secondary: "Segalanya Tentang Kamu" },
                text: {
                    primary: "Your voice, your laugh, your thoughts, your dreams — every single thing about you is perfect to me, and I wouldn't change a thing.",
                    secondary: "Suaramu, tawamu, pikiranmu, mimpimu — setiap hal tentangmu sempurna bagiku, dan aku tidak akan mengubah apapun."
                }
            }
        ]
    },

    // --- Page 4: The Big Question ---
    question: {
        pretext: [
            { primary: "From across the oceans,", secondary: "Dari seberang lautan," },
            { primary: "through every timezone,", secondary: "melewati setiap zona waktu," },
            { primary: "with all of my heart...", secondary: "dengan sepenuh hatiku..." }
        ],
        // The big question — each word appears one by one
        questionWords: { primary: ["Will", "You", "Be", "My", "Valentine?"], secondary: ["Maukah", "Kamu", "Jadi", "Valentine-ku?"] },
        // The last word is highlighted — index from 0
        highlightIndex: { primary: 4, secondary: 3 },
        locationLine: "",  // Auto-generated from your/partner locations
        connectedBy: { primary: "Connected by love", secondary: "Terhubung oleh cinta" },
        promise: {
            primary: "I promise to love you endlessly, across every distance and every tomorrow 💕",
            secondary: "Aku berjanji untuk mencintaimu tanpa akhir, melewati setiap jarak dan setiap hari esok 💕"
        },
        yesButton: { primary: "YES! 💖", secondary: "YA! 💖" },
        yesSub: { primary: "I'd love to be your Valentine!", secondary: "Aku mau jadi Valentine-mu!" },
        noButton: { primary: "Hmm, let me think... 🤔", secondary: "Hmm, biar aku pikir... 🤔" },

        // Funny messages that appear when they click "No"
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
                "Think about it... our love story could be legendary! 🌏💖",
                "I promise I'll always make you smile! Say yes! 🙏"
            ],
            secondary: [
                "Kamu yakin? Hatiku menunggumu... 🥺",
                "Tolong pikirkan lagi! Aku janji akan membuatmu paling bahagia! 💕",
                "Hatiku tidak kuat! Berikan aku satu kesempatan? 🌹",
                "Tunggu... bayangkan kita bersama — indah kan? ✨",
                "Kamu tahu kamu ingin bilang ya! Aku bisa merasakannya! 💖",
                "Aku akan menunggu selamanya untuk jawaban ya-mu... tapi jangan buat aku menunggu! 😭",
                "Setiap kisah cinta butuh jawaban ya... biarkan ini jadi kisah kita! 💝",
                "Hatiku berdetak hanya untukmu... bilang ya? Please? 🥹",
                "Pikirkanlah... kisah cinta kita bisa jadi legendaris! 🌏💖",
                "Aku janji akan selalu membuatmu tersenyum! Bilang ya! 🙏"
            ]
        }
    },

    // --- Page 5: Celebration ---
    celebration: {
        title: { primary: "YOU SAID YES!", secondary: "KAMU BILANG YA!" },
        subtitle: { primary: "This is the happiest moment of my life!", secondary: "Ini adalah momen paling bahagia dalam hidupku!" },
        message: {
            primary: "",  // Auto-generated from your location
            secondary: ""
        },
        futureTitle: { primary: "Our Beautiful Future Together", secondary: "Masa Depan Indah Kita Bersama" },

        dreams: [
            {
                emoji: "✈️",
                title: { primary: "The Day We Finally Meet", secondary: "Hari Kita Akhirnya Bertemu" },
                text: {
                    primary: "The moment I get to hold your hand for real, see your smile in person — it'll be the greatest day of my life",
                    secondary: "Saat aku bisa menggenggam tanganmu sungguhan, melihat senyummu secara langsung — itu akan menjadi hari terbaik dalam hidupku"
                }
            },
            {
                emoji: "🌅",
                title: { primary: "Exploring Together", secondary: "Menjelajah Bersama" },
                text: {
                    primary: "The whole world is waiting for us to explore it together — beautiful sunsets and adventures await",
                    secondary: "Seluruh dunia menunggu kita untuk menjelajahinya bersama — sunset indah dan petualangan menanti"
                }
            },
            {
                emoji: "📱",
                title: { primary: "Every Video Call", secondary: "Setiap Video Call" },
                text: {
                    primary: "Until we close the distance, every call with you is a moment I live for",
                    secondary: "Sampai kita menutup jarak, setiap panggilan denganmu adalah momen yang aku nantikan"
                }
            },
            {
                emoji: "♾️",
                title: { primary: "Forever & Always", secondary: "Selamanya & Selalu" },
                text: {
                    primary: "This is only the beginning. Our love story is writing itself, and every chapter gets more beautiful",
                    secondary: "Ini baru permulaan. Kisah cinta kita menulis dirinya sendiri, dan setiap bab menjadi lebih indah"
                }
            }
        ],
        letterButton: { primary: "Read My Letter To You", secondary: "Baca Suratku Untukmu" },
        replayButton: { primary: "Experience Again 💕", secondary: "Rasakan Lagi 💕" },
    },

    // --- Page 6: Love Letter ---
    loveLetter: {
        sectionTag: { primary: "From My Heart", secondary: "Dari Hatiku" },
        sectionTitle: { primary: "A Letter Just for You", secondary: "Surat Hanya Untukmu" },

        // Write your love letter here! Use <br> for line breaks within paragraphs
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
                "Untuk cintaku yang tersayang,",
                "Kamu ingat ketika kita pertama kali terhubung? Aku tidak pernah menyangka bahwa sebuah pesan sederhana akan membawaku ke hal terindah yang pernah terjadi dalam hidupku. Kamu.",
                "Kita mungkin dipisahkan oleh jarak, zona waktu, dan ribuan kilometer. Tapi jujur? Tidak satu kilometer pun yang pernah membuatku merasa jauh darimu. Setiap pesan, setiap voice note, setiap percakapan larut malam hanya menarikku lebih dekat ke hatimu.",
                "Kamu tahu apa yang paling membuatku kagum? Betapa sempurnanya kamu memahami aku. Kamu mendengarkan ketika tidak ada orang lain yang melakukannya. Kamu peduli dengan cara yang membuat jiwaku merasa seperti di rumah. Kamu adalah orang pertama yang ingin aku ajak bicara saat aku bangun dan pikiran terakhirku sebelum tidur.",
                "Aku tahu kita belum pernah bertemu langsung, tapi ketika aku menutup mata, aku bisa melihat kita — berjalan bersama, tertawa bersama, membangun sesuatu yang luar biasa bersama. Dan aku berjanji padamu, tidak peduli berapa lama waktu yang dibutuhkan atau seberapa jauh jaraknya, aku akan menemukan jalanku menuju kamu.",
                "Kamu adalah mimpiku, kedamaianku, dan sapaan favoritku. Terima kasih sudah mau menjadi Valentine-ku. Ini hanyalah yang pertama dari sejuta momen indah yang ingin aku bagikan denganmu.",
                "Aku mencintaimu — melewati setiap lautan, zona waktu, dan perbatasan. 🤍"
            ]
        },

        signoff: { primary: "Forever and always yours,", secondary: "Selamanya dan selalu milikmu," },
        // Signature — auto-generated from yourName and yourLocation
        signatureName: { primary: "", secondary: "" },
        signatureDate: { primary: "Valentine's Day 2026 • February 14", secondary: "Hari Valentine 2026 • 14 Februari" },

        backButton: { primary: "Back to Celebration", secondary: "Kembali ke Perayaan" },
        restartButton: { primary: "Start Over 💕", secondary: "Mulai Lagi 💕" },
        finalMessage: { primary: "Made with all my love, just for you 💖", secondary: "Dibuat dengan sepenuh cintaku, hanya untukmu 💖" },
    }
};
