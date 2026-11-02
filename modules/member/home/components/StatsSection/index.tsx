"use client";

import { useTranslation } from "react-i18next";
import { StreakCard } from "./StreakCard";
import { BodyStatsCard } from "./StatsOverview";

export function AnalysisSection() {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col h-full min-h-0 w-full ">
      <div className="flex gap-2 items-center justify-left">
        <div className="mb-5">
          <h2 className="text-3xl font-medium tracking-[0.2em] text-primary">
            {t("home.analysis.eyebrow", "Your progress")}
          </h2>

          <p className="mt-1.5 text-sm text-secondary-foreground/70">
            {t(
              "home.analysis.description",
              "Track your progress and stay on top of your condition.",
            )}
          </p>
        </div>
        <div>
          <StreakCard />
        </div>
      </div>

      <div className="grid w-full grid-cols-2 gap-4">
        <BodyStatsCard />
      </div>
    </section>
  );
}
