"use client";

import React from "react";
import { Clock, MapPin, User } from "lucide-react";
import { Card } from "@/components/ui/card";

export type ClassItem = {
  id: string;
  title: string;
  time: string;
  teacher: string;
  location?: string;
};

const mockClasses: ClassItem[] = [
  {
    id: "1",
    title: "Yoga Basics",
    time: "07:00 - 08:00",
    teacher: "Anna",
    location: "Room A",
  },
  {
    id: "2",
    title: "HIIT Training",
    time: "10:00 - 11:00",
    teacher: "John",
    location: "Room B",
  },
  {
    id: "3",
    title: "Zumba Dance",
    time: "18:00 - 19:00",
    teacher: "Maria",
    location: "Studio 1",
  },
];

export default function TodayClassesCard({
  classes = mockClasses,
}: {
  classes?: ClassItem[];
}) {
  return (
    <div className="bg-white rounded-xl w-full h-full ">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-sm font-semibold">Ongoing Classes</h2>
        <span className="text-sm text-gray-500">{classes.length} classes</span>
      </div>

      {/* List */}
      <div className="space-y-1 overflow-y-auto max-h-60 h-full">
        {classes.length === 0 ? (
          <div className="text-center text-gray-400 py-6">No classes today</div>
        ) : (
          classes.map((item) => (
            <div
              key={item.id}
              className="border rounded-xl p-2 hover:shadow-sm transition flex flex-col gap-1"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-medium">{item.title}</h3>
                <span className="text-xs text-gray-500 flex items-center gap-1">
                  <Clock size={14} /> {item.time}
                </span>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <User size={14} /> {item.teacher}
                </div>

                {item.location && (
                  <div className="flex items-center gap-1">
                    <MapPin size={14} /> {item.location}
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      <button className="mt-4 w-full text-sm font-medium text-blue-600 hover:underline">
        View full schedule
      </button>
    </div>
  );
}
