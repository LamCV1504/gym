'use client'

import { ClassEventCard } from "./class-event-card"

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

const mockData = {
  Mon: [
    { id: "1", name: "Yoga", room: "YOGA-1", time: "08:00", trainer: "Chou Chou" },
  ],
  Wed: [
    { id: "2", name: "Gym", room: "GYM-1", time: "18:00", trainer: "Chou Chou" },
  ],
}

export function WeeklyCalendar() {
  return (
    <div className="grid grid-cols-7 gap-4">

      {days.map((day) => (
        <div key={day} className="bg-gray-50 p-3 rounded-xl min-h-[200px]">

          <p className="text-sm font-medium mb-2">{day}</p>

          <div className="space-y-2">
            {mockData[day as keyof typeof mockData]?.map((item) => (
              <ClassEventCard key={item.id} item={item} />
            ))}
          </div>

        </div>
      ))}
    </div>
  )
}