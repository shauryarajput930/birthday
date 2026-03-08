"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

const Particle = ({ type, delay, duration, size }) => {
  const getEmoji = () => {
    switch (type) {
      case "heart":
        return "❤️"
      case "star":
        return "⭐"
      case "confetti":
        return ["🎉", "🎊", "✨", "🌟"][Math.floor(Math.random() * 4)]
      default:
        return "✨"
    }
  }

  return (
    <motion.div
      className="absolute pointer-events-none z-10"
      initial={{ 
        opacity: 0,
        y: 0,
        x: Math.random() * 100 - 50,
        rotate: 0
      }}
      animate={{
        opacity: [0, 1, 1, 0],
        y: [-20, -window.innerHeight - 100],
        x: [0, Math.random() * 200 - 100],
        rotate: [0, Math.random() * 360 - 180]
      }}
      transition={{
        duration: duration,
        delay: delay,
        ease: "linear",
        repeat: Infinity,
        repeatDelay: Math.random() * 2
      }}
      style={{
        fontSize: `${size}px`,
        left: `${Math.random() * 100}%`,
        bottom: "-20px"
      }}
    >
      {getEmoji()}
    </motion.div>
  )
}

export default function ParticleEffects({ 
  type = "mixed", 
  density = "medium", 
  enabled = true 
}) {
  const containerRef = useRef(null)

  if (!enabled) return null

  const getParticleCount = () => {
    switch (density) {
      case "low":
        return 5
      case "medium":
        return 10
      case "high":
        return 15
      default:
        return 10
    }
  }

  const getParticleTypes = () => {
    switch (type) {
      case "hearts":
        return ["heart"]
      case "stars":
        return ["star"]
      case "confetti":
        return ["confetti"]
      case "mixed":
        return ["heart", "star", "confetti"]
      default:
        return ["heart", "star", "confetti"]
    }
  }

  const particles = Array.from({ length: getParticleCount() }, (_, i) => {
    const types = getParticleTypes()
    return {
      id: i,
      type: types[Math.floor(Math.random() * types.length)],
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 4,
      size: 16 + Math.random() * 12
    }
  })

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 5 }}
    >
      {particles.map((particle) => (
        <Particle
          key={particle.id}
          type={particle.type}
          delay={particle.delay}
          duration={particle.duration}
          size={particle.size}
        />
      ))}
    </div>
  )
}
