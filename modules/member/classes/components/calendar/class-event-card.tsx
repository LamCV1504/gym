export function ClassEventCard({ item }: { item: any }) {
  return (
    <div className="bg-white p-2 rounded-lg shadow-sm border text-xs">

      <p className="font-medium">{item.name}</p>

      <p className="text-gray-500">{item.room}</p>

      <p>{item.time}</p>

      <p className="text-gray-400">{item.trainer}</p>

    </div>
  )
}