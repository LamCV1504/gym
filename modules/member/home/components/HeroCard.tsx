"use client";

import { useEffect, useState } from "react";
import { useAppStore } from "@/stores/app-store";
import { useTranslation } from "react-i18next";
import { StreakCard } from "./StatsSection/StreakCard";
import { BodyStatsCard } from "./StatsSection/StatsOverview";

export default function Hero() {
  const { userName, goal, currentProgress, message } = useAppStore();

  const [displayPercent, setDisplayPercent] = useState(0);

  const { t } = useTranslation();

  useEffect(() => {
    let start = 0;

    const step = () => {
      start += (currentProgress - start) * 0.1;
      if (Math.abs(currentProgress - start) < 0.5) {
        setDisplayPercent(currentProgress);
        return;
      }
      setDisplayPercent(Math.round(start));
      requestAnimationFrame(step);
    };

    step();
  }, [currentProgress]);

  return (
    <div className="w-full mt-15 h-full rounded-2xl bg-linear-to-r from-primary/15 to-secondary/10 p-4 flex gap-4">
      <div className="flex justify-between items-start gap-4 w-full h-full">
        <div className="h-full flex flex-col gap-2 w-full">
          <div className="flex gap-0.5 items-center justify-between">
            <h2 className="text-xl font-medium tracking-[0.2em] text-white w-1/2">
              {t("home.analysis.eyebrow", "Your progress")}
            </h2>
            <div className="text-white/70 text-sm border rounded-lg px-2 py-0.5 w-auto">
              {t("home.analysis.eyebrow", "15/08 - 23/08")}
            </div>
          </div>
          <div className="flex gap-1 items-center justify-between">
            <p className="text-xl text-white/90">
              {t("home.hero.goalProgress.prefix")}{" "}
              <span className="text-4xl text-white/95 font-semibold">
                {displayPercent}%
              </span>{" "}
              {t("home.hero.goalProgress.suffix")}{" "}
              <span className="text-white/50">
                {t("home.hero.goalProgress.separator", "-")}
              </span>{" "}
              <span className="text-primary text-xl font-medium">{goal}</span>
            </p>
            <BodyStatsCard />
            <StreakCard />
          </div>
        </div>
      </div>
    </div>
  );
}
