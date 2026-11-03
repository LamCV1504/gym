"use client";

import { useState } from "react";
import { ClassList } from "../explore/category-list";
import { WeeklyCalendar } from "../calendar/weekly-calendar";

export function ClassesTabs() {
  const [tab, setTab] = useState<"my" | "explore">("my");

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="flex gap-6 border-b">
        <button
          onClick={() => setTab("my")}
          className={`pb-2 ${
            tab === "my"
              ? "border-b-2 border-black font-medium"
              : "text-gray-400"
          }`}
        >
          My Classes
        </button>

        <button
          onClick={() => setTab("explore")}
          className={`pb-2 ${
            tab === "explore"
              ? "border-b-2 border-black font-medium"
              : "text-gray-400"
          }`}
        >
          Others
        </button>
      </div>

      {/* Content */}
      {tab === "my" ? <WeeklyCalendar /> : <ClassList date={"2023-10-10"} />}
    </div>
  );
}
