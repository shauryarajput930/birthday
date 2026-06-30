# 🎂 Birthday Surprise Website — For Anshika (Friendship Edition)

An elegant, friendship-themed birthday surprise website built with **Next.js + Framer Motion** — made to celebrate Anshika in a warm, platonic way. The site focuses on smooth animations, thoughtful micro-interactions, and accessibility.

---

## ✨ Features

- 🎬 **Loader Screen** – Eye-catching intro that builds anticipation
- 📝 **Introduction Screen** – Personalized, friendship-focused greeting for Anshika
- 🎂 **Interactive Cake Screen** – Light the candle to trigger a subtle celebration
- 📸 **Photos Gallery** – Touch-friendly, swipeable memory cards
- 💌 **Special Message** – A platonic, heartfelt message revealed with a typewriter effect
- 🎵 **Background Music** – Optional background audio with user-friendly controls
- ✨ **Accessible Animations** – Animations respect `prefers-reduced-motion` and can be throttled for mobile
- 📱 **Responsive by Design** – Optimized for mobile and desktop with graceful degradation

---

## 🛠 Tech Stack

- ⚛️ **Next.js 15** – React Framework for fast, modern UI
- 🎨 **Tailwind CSS** – Utility-first CSS for responsive design
- 🎞️ **Framer Motion** – Smooth animations and page transitions
- 🖼️ **Swiper.js** – Touch-friendly image gallery slider
- 📦 **Lucide React** – Beautiful, customizable icons
- 🎭 **Heroicons** – Premium icon set

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation & Run (development)

```bash
# From the project root
npm install

# Start the development server (Next will pick an available port if 3000 is in use)
npm run dev
```

Open the local URL shown in the terminal (for example: `http://localhost:3000` or `http://localhost:3001`).

---

## 📁 Project Structure

```
Birthday/
├── public/
│   ├── images/              # Place birthday photos here
│   ├── gifs/                # GIFs for animations
│   └── happy_birthday_song.mp4  # Background music file
│
├── src/
│   ├── app/
│   │   ├── page.jsx         # Main page with screen navigation
│   │   ├── layout.js        # Root layout & metadata
│   │   └── globals.css      # Global styles
│   │
│   └── components/
│       ├── GradientButton.jsx        # Reusable button component
│       │
│       └── screens/
│           ├── LoaderScreen.jsx      # Initial loading animation
│           ├── IntroScreen.jsx       # Birthday greeting
│           ├── CakeScreen.jsx        # Interactive cake
│           ├── PhotosScreen.jsx      # Photo gallery slider
│           └── MessageScreen.jsx     # Personalized message
│
├── package.json             # Project dependencies
├── next.config.mjs          # Next.js configuration
├── tailwind.config.js       # Tailwind CSS config
└── README.md               # This file
```

---

## 🎨 Customization Guide

### 1. Edit the Birthday Message
Update the message in `src/components/screens/MessageScreen.jsx`:
```jsx
const fullMessage = `Your personalized birthday message here...`;
```

### 2. Add Photos
1. Place your photos in `public/images/`
2. `PhotosScreen` now uses `next/image` for optimized loading — keep sizes reasonable (e.g., 1200px longest side) to save bandwidth.

### 3. Change Background Music
Replace `happy_birthday_song.mp4` in the `public/` folder with your audio/video file. The app uses `preload="metadata"` so the browser loads minimal info up front; playback will start on interaction if autoplay is blocked.

### 4. Customize Colors & Typography
Modify Tailwind classes in components or adjust `globals.css` variables for global style tokens.

### 5. Update Creator Attribution
Change the watermark in `src/app/page.jsx`.

---

## 🎬 Screen Breakdown

| Screen | Purpose | Interactive |
|--------|---------|-------------|
| **Loader Screen** | Builds anticipation | Auto-progresses |
| **Intro Screen** | Sets the mood | Button to continue |
| **Cake Screen** | Main surprise | Light candle to reveal celebration |
| **Photos Screen** | Memory gallery | Swipe the cards (touch-friendly) |
| **Message Screen** | Personal message | Typewriter animation (ARIA-friendly) |

---

## 🎵 Audio Setup

Background audio behavior:
- Attempts autoplay, but will start on first user interaction if blocked by the browser.
- Volume is set to a comfortable level by default; consider adding a UI control if you want users to toggle audio.

The audio file lives in `public/happy_birthday_song.mp4` and supports common container formats.

---

## 📱 Browser & Accessibility Notes

- Tested on modern Chrome, Firefox, Edge, and Safari.
- Animations respect `prefers-reduced-motion` and particle density is throttled on small viewports for performance.
- Images are optimized with `next/image` and the large GIFs are lazy/controlled to reduce CPU and memory use on mobile.

---

## 🐛 Troubleshooting

### Audio not playing?
- Ensure `public/happy_birthday_song.mp4` exists.
- Check the browser console for autoplay or network errors.

### Photos not showing?
- Verify image files exist in `public/images/` and are referenced with correct names.

### Animations feel heavy on mobile?
- The app respects `prefers-reduced-motion`. You can toggle animation settings via the UI (if enabled) or reduce particle density by using smaller `density` in `ParticleEffects`.
- Consider using `next/image`-friendly image sizes to lower memory usage.

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI (optional)
npm install -g vercel

# Deploy from project root
vercel
```

### Other platforms
- Netlify, Cloudflare Pages, or a static hosting solution that supports Next.js builds.

---

## 📝 License

This project is free to use and customize for personal celebrations.

---

## 🎉 Made with friendship

Designed for a warm, platonic celebration for Anshika. Keep it kind and friendly. 🎈
