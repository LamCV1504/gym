export type GymClass = {
  id: string
  name: string
  trainer: string
  time: string
  capacity: number
  booked: number
}

import { useQuery } from "@tanstack/react-query"

export function useClasses(date: string) {
  return useQuery({
    queryKey: ["classes", date],
    queryFn: async () => {
      // mock API
      return [
        {
          id: "1",
          name: "Yoga",
          trainer: "Chou Chou",
          time: "08:00",
          capacity: 10,
          booked: 6,
        },
        {
          id: "2",
          name: "HIIT",
          trainer: "Chou Chou",
          time: "10:00",
          capacity: 12,
          booked: 12,
        },
      ]
    },
  })
}