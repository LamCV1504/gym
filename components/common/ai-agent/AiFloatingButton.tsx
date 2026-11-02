'use client'

import { useState } from "react"
import { Sparkles, X } from "lucide-react"
import AiPanel from "./AiPanel"

export function AiFloatingButton() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-black text-white flex items-center justify-center shadow-lg hover:scale-105 transition"
      >
        <Sparkles />
      </button>

      {/* Panel */}
      {open && <AiPanel onClose={() => setOpen(false)} />}
    </>
  )
}