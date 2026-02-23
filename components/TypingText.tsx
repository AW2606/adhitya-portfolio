"use client"
import { useEffect, useState } from "react"

interface Props {
  text: string
  speed?: number
}

export default function TypingText({ text, speed = 50 }: Props) {
  const [displayed, setDisplayed] = useState("")

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1))
      i++
      if (i === text.length) clearInterval(interval)
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed])

  return (
    <p className="mt-4 text-lg text-gray-400 font-mono">
      {displayed}
      <span className="animate-pulse">|</span>
    </p>
  )
}