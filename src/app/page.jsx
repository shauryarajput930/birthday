"use client"

import { useState, useEffect, useRef } from "react"
import { AnimatePresence, motion } from "framer-motion"
import LoaderScreen from "@/components/screens/LoaderScreen"
import IntroScreen from "@/components/screens/IntroScreen"
import CakeScreen from "@/components/screens/CakeScreen"
import PhotosScreen from "@/components/screens/PhotosScreen"
import MessageScreen from "@/components/screens/MessageScreen"
import ParticleEffects from "@/components/ParticleEffects"

export default function HomePage() {
  const [currentScreen, setCurrentScreen] = useState(0)
  const audioRef = useRef(null)

  useEffect(() => {
    // Try to play audio with user interaction fallback
    if (audioRef.current) {
      audioRef.current.volume = 0.5
      audioRef.current.loop = true
      // Trigger play on first user interaction
      const playAudio = () => {
        audioRef.current?.play().catch(err => console.log("Audio play failed:", err))
        document.removeEventListener("click", playAudio)
        document.removeEventListener("touchstart", playAudio)
      }
      
      // Try to autoplay
      audioRef.current.play().catch(() => {
        // If autoplay fails, wait for user interaction
        document.addEventListener("click", playAudio)
        document.addEventListener("touchstart", playAudio)
      })
    }
  }, [])

  const screens = [
    <LoaderScreen key="loader" onDone={() => setCurrentScreen(1)} />,
    <IntroScreen key="intro" onNext={() => setCurrentScreen(2)} />,
    <CakeScreen key="cake" onNext={() => setCurrentScreen(3)} />,
    <PhotosScreen key="photos" onNext={() => setCurrentScreen(4)} />,
    <MessageScreen key="message" onNext={() => setCurrentScreen(5)} />,
  ]

  return (
    <main className="min-h-screen bg-gradient-to-tr from-rose-950/40 via-black to-rose-950/40 overflow-hidden relative">

      {/* Particle Effects */}
      <ParticleEffects 
        type="mixed" 
        density="medium" 
        enabled={currentScreen >= 1 && currentScreen <= 4}
      />

      <div className="relative z-10 flex min-h-screen items-center justify-center p-2 sm:p-4 md:p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
            transition={{ duration: 0.8 }}
            className={`w-full ${currentScreen === 4 ? "max-w-6xl lg:max-w-7xl" : "max-w-2xl sm:max-w-3xl md:max-w-4xl"}`}
          >
            {screens[currentScreen]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Watermark */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1,
          delay: 1,
        }}
        className="fixed bottom-2 right-2 sm:bottom-4 sm:right-4 text-xs sm:text-sm text-white/40 pointer-events-none z-50 font-light">
        @Shaurya Rajput
      </motion.div>

      {/* Background Audio using video tag for mp4 support */}
      <video
        ref={audioRef}
        src="/happy_birthday_song.mp4"
        loop
        preload="auto"
        style={{ display: "none" }}
      />
    </main>
  )
}
