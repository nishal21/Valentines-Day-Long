# 💖 Valentine's Website Template

A stunning, interactive Valentine's Day website you can personalize and share with your special someone. Features animations, bilingual support, a love story timeline, and background music.

![Valentine Preview](https://img.shields.io/badge/Made%20with-Love-ff69b4)

## ✨ Features

- 🎬 **Cinematic page transitions** with smooth animations
- 💕 **Floating hearts & particles** background effects
- 📖 **Story timeline** — tell your love story
- 🧡 **Reasons I love you** — custom love list
- 💌 **Love letter** with envelope animation
- 🎵 **Background music** (YouTube)
- 🌍 **Bilingual support** — English + any second language
- 😤 **Runaway "No" button** — they can't say no!
- 🎉 **Confetti celebration** when they say yes!
- 📱 **Fully responsive** — works on mobile & desktop
- ⌨️ **Keyboard & swipe navigation**

## 🚀 Quick Setup

### 1. Clone or Download

```bash
git clone https://github.com/nishal21/Valentines-Day-Long.git
```

### 2. Customize Everything

Open **`public/config.js`** and edit the values:

```js
const CONFIG = {
    yourName: "Your Name",
    yourLocation: "Your City",
    yourCountry: "Your Country",
    yourCountryFlag: "🏳️",

    partnerName: "Their Name",
    partnerLocation: "Their City",
    partnerCountry: "Their Country",
    partnerCountryFlag: "🏳️",

    relationshipStartDate: "2025-02-01",
    youtubeVideoId: "Rr7Gduv0aaY",
    // ... and much more!
};
```

**That's it!** Every piece of text — the timeline, reasons, love letter, translations — is in this one file.

### 3. Preview Locally

Open `public/index.html` in your browser. For music to work, use a local server:

```bash
# Option 1: Node.js
npx -y http-server ./public -p 5500 -o

# Option 2: Python
python -m http.server 5500 --directory public

# Option 3: VS Code
# Install "Live Server" extension → right-click index.html → "Open with Live Server"
```

### 4. Deploy

**GitHub Pages (free):**
1. Push to GitHub
2. Go to Settings → Pages → Source: `main` → Folder: `/public`
3. Share the link! 💕

**Firebase (included config):**
```bash
npm install -g firebase-tools
firebase login
firebase deploy
```

**Netlify / Vercel:**
- Just drag & drop the `public` folder

## 📝 What You Can Customize

| Setting | Description |
|---|---|
| `yourName` | Your name (shown in love letter) |
| `yourLocation` | Your city/region |
| `yourCountry` | Your country |
| `partnerName` | Their name or nickname |
| `partnerCountry` | Their country |
| `relationshipStartDate` | Start date (for days counter) |
| `youtubeVideoId` | YouTube video ID for background music |
| `primaryLangLabel` / `secondaryLangLabel` | Language toggle labels (e.g. EN / FR) |
| `timeline.events[]` | Your story timeline (add/remove events) |
| `reasons.list[]` | Reasons you love them |
| `loveLetter.letterParagraphs` | Your love letter text |
| All `primary` / `secondary` fields | Bilingual text for everything |

## 🌍 Adding Your Language

In `config.js`, every text field has `primary` and `secondary` versions:

```js
greeting: { primary: "Hey there,", secondary: "Bonjour," }
```

Change `secondaryLangLabel` to your language code (e.g. `"FR"` for French), then translate all `secondary` fields.

## 📁 File Structure

```
public/
├── index.html   ← Main page (no need to edit)
├── config.js    ← ✏️ EDIT THIS FILE to personalize
├── script.js    ← Animations & logic (no need to edit)
└── style.css    ← Styles (no need to edit)
```

## 🎵 Changing the Music

1. Find a YouTube video
2. Copy the video ID (the part after `?v=` in the URL)
3. Paste it in `config.js`:
   ```js
   youtubeVideoId: "YOUR_VIDEO_ID_HERE"
   ```

## ❤️ License

Free to use. Made with love. Share the love.
