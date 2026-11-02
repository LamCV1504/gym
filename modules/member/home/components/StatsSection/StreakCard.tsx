"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dumbbell } from "lucide-react";
import { CalendarPopover } from "../../Calendar";

/* 🔥 MOCK DATA */
const week = [
  { day: "Mon", done: true },
  { day: "Tue", done: true },
  { day: "Wed", done: false },
  { day: "Thu", done: true },
  { day: "Fri", done: true },
  { day: "Sat", done: false },
  { day: "Sun", done: false },
];

const stats = {
  experience: 2, // years
  joinedMonths: 8,
  totalWorkouts: 170,
};

export function StreakCard() {
  return (
    <div className="rounded-2xl shadow-sm space-y-1 gap-2">
      <CardContent className="space-y-2 p-4">
        <div className="flex justify-between items-center gap-2">
          {week.map((d) => (
            <div key={d.day} className="flex flex-col items-center gap-1">
              {/* Icon */}
              <div
                className={`p-1.5 rounded-full ${
                  d.done
                    ? "bg-primary/20 text-primary"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                <Dumbbell size={14} />
              </div>

              {/* Day */}
              <span className="text-[10px] text-muted-foreground">{d.day}</span>
            </div>
          ))}
        </div>

        {/* <div className="grid grid-cols-3 gap-2 text-center">
          <div className="bg-muted rounded-xl p-2">
            <p className="text-[10px] text-muted-foreground">Experience</p>
            <p className="font-semibold text-sm">{stats.experience} yrs</p>
          </div>

          <div className="bg-muted rounded-xl p-2">
            <p className="text-[10px] text-muted-foreground">Joined</p>
            <p className="font-semibold text-sm">{stats.joinedMonths} mo</p>
          </div>

          <div className="bg-muted rounded-xl p-2">
            <p className="text-[10px] text-muted-foreground">Total Workouts</p>
            <p className="font-semibold text-sm">{stats.totalWorkouts}</p>
          </div>
        </div> */}
      </CardContent>
    </div>
  );
}
