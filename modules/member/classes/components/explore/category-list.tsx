'use client'

import { useClasses } from "../../hooks/use-classes"
import { ClassCard } from "./category-card"


export function ClassList({ date }: { date: string }) {
  const { data, isLoading } = useClasses(date)

  if (isLoading) return <div>Loading...</div>

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {data?.map((item) => (
        <ClassCard key={item.id} item={item} />
      ))}
    </div>
  )
}