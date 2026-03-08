# 🎂 Birthday Surprise Website

A beautiful, interactive birthday surprise website built using **Next.js + Framer Motion** — perfect for celebrating someone special on their birthday! 🎉💖

---

## ✨ Features

- 🎬 **Loader Screen** – Eye-catching intro animation to start the journey
- 📝 **Introduction Screen** – Personalized birthday greeting message
- 🎂 **Interactive Cake Screen** – Click the cake for a delightful surprise
- 📸 **Photos Gallery** – Beautiful slideshow to relive memories
- 💌 **Special Message** – Heartfelt personalized message with typewriter effect
- 🎵 **Background Music** – Birthday song playing throughout the experience
- ✨ **Smooth Animations** – Framer Motion for stunning transitions
- 📱 **Fully Responsive** – Works perfectly on desktop, tablet, and mobile

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

### Installation

```bash
# Navigate into the project folder
cd "d:\PSIT\Sem 4\Birthday"

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

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
Update the message in [src/components/screens/MessageScreen.jsx](src/components/screens/MessageScreen.jsx):
```jsx
const fullMessage = `Your personalized birthday message here...`;
```

### 2. Add Photos
1. Place your photos in `public/images/`
2. Update the photo references in [src/components/screens/PhotosScreen.jsx](src/components/screens/PhotosScreen.jsx)

### 3. Change Background Music
Replace `happy_birthday_song.mp4` in the `public/` folder with your own audio/video file.

### 4. Customize Colors
Edit Tailwind color classes in the component files. Look for gradient classes like:
```jsx
className="bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400"
```

### 5. Update Creator Attribution
Change the watermark in [src/app/page.jsx](src/app/page.jsx):
```jsx
@Shaurya Rajput
```

---

## 🎬 Screen Breakdown

| Screen | Purpose | Interactive |
|--------|---------|-------------|
| **Loader Screen** | Builds anticipation | Auto-progresses |
| **Intro Screen** | Sets the mood | Button to continue |
| **Cake Screen** | Main surprise | Click cake for effect |
| **Photos Screen** | Memory gallery | Swipe through photos |
| **Message Screen** | Personal message | Typewriter animation |

---

## 🎵 Audio Setup

The background music plays automatically (or on first user click if autoplay is blocked). The audio file:
- Loops continuously throughout the experience
- Plays at 50% volume for comfort
- Supports `.mp4` video files with audio tracks

---

## 📱 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

---

## 🐛 Troubleshooting

### Audio not playing?
- Ensure `happy_birthday_song.mp4` exists in `public/` folder
- Check browser console for errors
- Allow autoplay permissions in browser settings

### Photos not showing?
- Verify image files are in `public/images/`
- Check file paths in PhotosScreen component
- Ensure image formats are supported (jpg, png, webp)

### Animations not smooth?
- Update Framer Motion: `npm install framer-motion@latest`
- Disable browser extensions that modify the DOM
- Try a different browser

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Deploy to Other Platforms
- Netlify
- GitHub Pages

---

## 📝 License

This project is free to use and customize for personal celebrations and special occasions.

---

## 🎉 Made with ❤️

Perfect for birthdays, anniversaries, and special celebrations! 

**Happy Birthday!** 🎂✨
