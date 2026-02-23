"use client"
import { motion } from "framer-motion"
import { useRef } from "react"

interface Props {
  title: string
  description: string
  link?: string
}

export default function ProjectCard({ title, description, link }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = ref.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = -(y - centerY) / 15
    const rotateY = (x - centerX) / 15

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  }

  const handleMouseLeave = () => {
    if (ref.current) {
      ref.current.style.transform = "rotateX(0deg) rotateY(0deg)"
    }
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="bg-slate-900 p-6 rounded-xl border border-slate-800 transition-transform duration-200 ease-out hover:border-cyan-400"
      style={{ transformStyle: "preserve-3d" }}
    >
      <h3 className="text-xl font-semibold mb-2 text-cyan-400">
        {title}
      </h3>
      <p className="text-gray-400 mb-4">
        {description}
      </p>
      {link && (
        <a
          href={link}
          target="_blank"
          className="text-white hover:text-cyan-400 transition"
        >
          View Project →
        </a>
      )}
    </motion.div>
  )
}