"use client"
import { motion, AnimatePresence } from "framer-motion"

interface Props {
  isOpen: boolean
  onClose: () => void
  title: string
  content: string
}

export default function ProjectModal({ isOpen, onClose, title, content }: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="fixed top-1/2 left-1/2 w-[90%] max-w-2xl bg-slate-900 p-8 rounded-xl border border-slate-700 z-50"
            initial={{ opacity: 0, scale: 0.8, x: "-50%", y: "-50%" }}
            animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">
              {title}
            </h3>
            <p className="text-gray-400 mb-6">
              {content}
            </p>

            <button
              onClick={onClose}
              className="bg-cyan-500 px-4 py-2 rounded-lg text-black font-semibold hover:bg-cyan-400"
            >
              Close
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}