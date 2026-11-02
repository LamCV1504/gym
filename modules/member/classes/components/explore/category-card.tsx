'use client'

import { useBookClass } from "../../hooks/use-book-classes"
import { GymClass } from "../../hooks/use-classes"


export function ClassCard({ item }: { item: GymClass }) {
  const { mutate, isPending } = useBookClass()

  const full = item.booked >= item.capacity

  return (
    <div className="border rounded-xl p-4 bg-white shadow-sm space-y-2">

      <div className="flex justify-between">
        <h4 className="font-semibold">{item.name}</h4>
        <span className="text-sm">{item.time}</span>
      </div>

      <p className="text-sm text-gray-500">
        Trainer: {item.trainer}
      </p>

      <p className="text-xs">
        {item.booked}/{item.capacity} booked
      </p>

      <button
        disabled={full || isPending}
        onClick={() => mutate(item.id)}
        className={`w-full py-2 rounded-lg text-sm ${
          full
            ? "bg-gray-300"
            : "bg-black text-white"
        }`}
      >
        {full ? "Full" : isPending ? "Booking..." : "Book"}
      </button>
    </div>
  )
}