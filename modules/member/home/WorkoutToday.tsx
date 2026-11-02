export function WorkoutToday() {
  return (
    <div className="bg-white p-4 rounded-xl border shadow-sm">
      <h3 className="font-semibold mb-4">Today Workout</h3>

      <div className="space-y-3">
        <div className="flex justify-between text-sm">
          <span>Bench Press</span>
          <span>4 x 10</span>
        </div>

        <div className="flex justify-between text-sm">
          <span>Squat</span>
          <span>3 x 12</span>
        </div>

        <div className="flex justify-between text-sm">
          <span>Deadlift</span>
          <span>3 x 8</span>
        </div>
      </div>
    </div>
  )
}