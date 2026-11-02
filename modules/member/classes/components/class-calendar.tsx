'use client'

import { useState } from "react"

export function ClassCalendar({
  onChange,
}: {
  onChange: (date: string) => void
}) {
  const [date, setDate] = useState("2026-04-05")

  return (
    <input
      type="date"
      value={date}
      onChange={(e) => {
        setDate(e.target.value)
        onChange(e.target.value)
      }}
      className="border rounded-lg px-3 py-2"
    />
  )
}