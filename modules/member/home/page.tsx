"use client";

import TodayClassesCard from "./TodayClassCard";
import { WorkoutSchedule } from "./WorkoutShedule";

import HeroRight from "./CurrentBranch";
import Hero from "./components/HeroCard";
import { AnalysisSection } from "./components/StatsSection";

export function MemberHome() {
  return (
    <div className="flex flex-col gap-8 h-full w-full min-h-0">
      <Hero />
      <AnalysisSection />

      <div className="w-full h-full flex items-center justify-between gap-4">
        <div className="w-3/5 h-full">
          <WorkoutSchedule />
        </div>
        <div className="w-2/5 p-4 h-full flex flex-col flex-1">
          <HeroRight />
          <TodayClassesCard />
        </div>
      </div>
    </div>
  );
}
