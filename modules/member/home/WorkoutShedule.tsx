"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, Circle, Plus } from "lucide-react";

/* 🔥 MOCK DATA */
const exercises = [
  { name: "Squat", sets: 4, reps: 10, weight: 80, completedSets: 4 },
  { name: "Leg Press", sets: 3, reps: 12, weight: 120, completedSets: 3 },
  { name: "Lunges", sets: 3, reps: 10, weight: 20, completedSets: 0 },
  { name: "Leg Curl", sets: 3, reps: 12, weight: 40, completedSets: 0 },
  { name: "Calf Raise", sets: 4, reps: 15, weight: 30, completedSets: 0 },
  { name: "Hip Thrust", sets: 3, reps: 10, weight: 70, completedSets: 0 },
  { name: "Plank", sets: 3, reps: 60, weight: 0, completedSets: 0 },
];

export function WorkoutSchedule() {
  const doneCount = exercises.filter((e) => e.completedSets === e.sets).length;
  const progress = (doneCount / exercises.length) * 100;

  return (
    <Card className="h-full flex flex-col overflow-hidden min-h-0 p-3">
      <div className="p-2 flex items-center justify-between border-b">
        <div>
          <h2 className="font-semibold text-base">Today Workout</h2>
          <p className="text-xs text-muted-foreground">Leg Day • 7 exercises</p>
        </div>

        <div className="flex gap-2">
          <Button variant="secondary" size="sm">
            <Plus size={14} />
          </Button>
          <Button size="sm">Start Workout</Button>
        </div>
      </div>

      <div className="flex-1 flex flex-col overflow-hidden min-h-0">
        <div className="pb-3 px-2 space-y-1">
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Progress</span>
            <span>
              {doneCount}/{exercises.length}
            </span>
          </div>
          <Progress value={progress} />
        </div>

        <div className="flex-1 overflow-y-auto min-h-0 p-2">
          <div className="space-y-2">
            {exercises.map((ex, i) => (
              <ExerciseItem
                key={i}
                exercise={ex}
                onUpdate={(updated) => updateExercise(i, updated)}
              />
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}

function ExerciseItem({
  exercise,
  onUpdate,
}: {
  exercise: {
    name: string;
    sets: number;
    reps: number;
    weight: number;
    completedSets: number;
  };
  onUpdate: (updated: any) => void;
}) {
  const isDone = exercise.completedSets === exercise.sets;

  const handleLog = () => {
    if (exercise.completedSets < exercise.sets) {
      onUpdate({
        ...exercise,
        completedSets: exercise.completedSets + 1,
      });
    }
  };

  return (
    <div
      className={`flex items-center justify-between px-3 py-1.5 rounded-xl border transition ${
        isDone ? "bg-green-50 border-green-200" : "hover:bg-muted"
      }`}
    >
      <div>
        <p className="font-medium text-sm">{exercise.name}</p>
        <p className="text-xs text-muted-foreground">
          {exercise.sets} × {exercise.reps} •{" "}
          {exercise.weight > 0 ? `${exercise.weight}kg` : "Bodyweight"}
        </p>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-3 justify-between">
        <div className="flex items-center gap-1 flex-1">
          {Array.from({ length: exercise.sets }).map((_, i) => {
            const done = i < exercise.completedSets;

            const Icon = done ? CheckCircle2 : Circle;

            return (
              <Icon
                key={i}
                className={`w-5 h-5 ${
                  done ? "text-green-500" : "text-muted-foreground/40"
                }`}
              />
            );
          })}
        </div>

        <div className="w-11">
          {!isDone && (
            <Button
              size="sm"
              variant={isDone ? "secondary" : "default"}
              onClick={handleLog}
            >
              Log
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
