"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "./ThemeProvider"

export default function SpatialBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window

      const xPercent = (clientX / innerWidth - 0.5) * 2
      const yPercent = (clientY / innerHeight - 0.5) * 2

      const shapes = containerRef.current.querySelectorAll(".floating-shape")
      shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.5
        const x = xPercent * speed * 10
        const y = yPercent * speed * 10
        const rotation = xPercent * speed * 5
        ;(shape as HTMLElement).style.transform =
          `translate3d(${x}px, ${y}px, 0) rotateX(${y}deg) rotateY(${rotation}deg)`
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const backgroundStyle =
    theme === "dark"
      ? "radial-gradient(ellipse at center, rgba(6, 182, 212, 0.1) 0%, rgba(15, 23, 42, 0.8) 50%, rgba(2, 6, 23, 1) 100%)"
      : "radial-gradient(ellipse at center, rgba(6, 182, 212, 0.05) 0%, rgba(248, 250, 252, 0.9) 50%, rgba(241, 245, 249, 1) 100%)"

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-none"
      style={{ background: backgroundStyle }}
    >
      <div className={`absolute inset-0 ${theme === "dark" ? "opacity-30" : "opacity-20"}`}>
        <div
          className={`absolute inset-0 bg-gradient-to-br ${theme === "dark" ? "from-cyan-500/20 via-transparent to-purple-500/20" : "from-cyan-500/10 via-transparent to-purple-500/10"} animate-pulse`}
        />
        <div
          className={`absolute inset-0 bg-gradient-to-tl ${theme === "dark" ? "from-blue-500/10 via-transparent to-emerald-500/10" : "from-blue-500/5 via-transparent to-emerald-500/5"} animate-pulse`}
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div
        className={`floating-shape absolute top-1/4 left-1/4 w-32 h-32 ${theme === "dark" ? "opacity-20" : "opacity-15"}`}
      >
        <div
          className={`w-full h-full bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg transform rotate-45 animate-spin-slow shadow-2xl ${theme === "dark" ? "shadow-cyan-500/50" : "shadow-cyan-500/30"}`}
        />
      </div>

      <div
        className={`floating-shape absolute top-3/4 right-1/4 w-24 h-24 ${theme === "dark" ? "opacity-25" : "opacity-18"}`}
      >
        <div
          className={`w-full h-full bg-gradient-to-br from-purple-400 to-pink-600 rounded-full animate-bounce-slow shadow-2xl ${theme === "dark" ? "shadow-purple-500/50" : "shadow-purple-500/30"}`}
        />
      </div>

      <div
        className={`floating-shape absolute top-1/2 left-3/4 w-20 h-20 ${theme === "dark" ? "opacity-30" : "opacity-20"}`}
      >
        <div
          className={`w-full h-full bg-gradient-to-br from-emerald-400 to-teal-600 transform rotate-12 animate-pulse shadow-2xl ${theme === "dark" ? "shadow-emerald-500/50" : "shadow-emerald-500/30"}`}
        />
      </div>

      <div
        className={`floating-shape absolute top-1/3 right-1/3 w-16 h-16 ${theme === "dark" ? "opacity-20" : "opacity-15"}`}
      >
        <div
          className={`w-full h-full bg-gradient-to-br from-orange-400 to-red-600 rounded-lg transform -rotate-45 animate-spin-reverse shadow-2xl ${theme === "dark" ? "shadow-orange-500/50" : "shadow-orange-500/30"}`}
        />
      </div>

      <div
        className={`floating-shape absolute bottom-1/4 left-1/2 w-28 h-28 ${theme === "dark" ? "opacity-25" : "opacity-18"}`}
      >
        <div
          className={`w-full h-full bg-gradient-to-br from-indigo-400 to-blue-600 rounded-full transform animate-float shadow-2xl ${theme === "dark" ? "shadow-indigo-500/50" : "shadow-indigo-500/30"}`}
        />
      </div>

      {Array.from({ length: 50 }).map((_, i) => (
        <div
          key={i}
          className={`floating-shape absolute w-1 h-1 bg-cyan-400 rounded-full ${theme === "dark" ? "opacity-40" : "opacity-25"} animate-twinkle`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
          }}
        />
      ))}

      <div className={`absolute inset-0 ${theme === "dark" ? "opacity-10" : "opacity-5"}`}>
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(${theme === "dark" ? "rgba(6, 182, 212, 0.3)" : "rgba(6, 182, 212, 0.2)"} 1px, transparent 1px),
              linear-gradient(90deg, ${theme === "dark" ? "rgba(6, 182, 212, 0.3)" : "rgba(6, 182, 212, 0.2)"} 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>
    </div>
  )
}
