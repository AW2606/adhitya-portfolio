"use client"
import { useEffect } from "react"

export default function CursorGlow() {
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--cursor-x", `${e.clientX}px`)
      document.documentElement.style.setProperty("--cursor-y", `${e.clientY}px`)
    }

    window.addEventListener("mousemove", moveCursor)
    return () => window.removeEventListener("mousemove", moveCursor)
  }, [])

  return <div className="cursor-glow" />
}