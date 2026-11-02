"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  User,
  Ruler,
  VenusAndMars,
  Scale,
  Activity,
  Droplet,
} from "lucide-react";

type Metric = {
  label: string;
  current: number;
  target: number;
  unit: string;
  icon: any;
};

const user = {
  age: 25,
  height: 170,
  gender: "Male",
};

const metrics: Metric[] = [
  {
    label: "Weight",
    current: 64,
    target: 69, // ~94%
    unit: "kg",
    icon: Scale,
  },
  {
    label: "BMI",
    current: 18.5,
    target: 22, // >100%
    unit: "",
    icon: Activity,
  },
  {
    label: "BDF",
    current: 20,
    target: 13, // ~133%
    unit: "%",
    icon: Droplet,
  },
];

export function BodyStatsCard() {
  return (
    <div className="rounded-2xl shadow-sm py-3 space-y-1 gap-1 h-full">
      <div className="grid grid-cols-3 gap-2 h-full flex-1">
        {metrics.map((m) => {
          const percent =
            m.current - m.target < 0
              ? (m.current / m.target) * 100
              : (m.target / m.current) * 100;
          const clamped = Math.min(percent, 100);

          const diff = m.current - m.target;
          const diffPercent = (diff / m.target) * 100;

          const isGood =
            m.label === "Weight" || m.label === "Body Fat"
              ? diff <= 0
              : diff >= 0;

          const Icon = m.icon;

          return (
            <div key={m.label} className="p-1.5 rounded-xl h-full">
              <CardContent className="p-0">
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  {/* <Icon size={14} /> */}
                  {m.label}
                </div>

                <div className="grid grid-cols-2 items-center">
                  <div className="flex flex-col justify-center items-end">
                    <p className="text-xl font-bold">
                      {m.current}
                      {m.unit}
                    </p>
                    <div
                      className={`flex justify-end text-[10px] -mt-1 ${
                        isGood ? " text-green-700" : " text-red-600"
                      }`}
                    >
                      {diff > 0 ? "+" : ""}
                      {diff}
                      {m.unit}
                    </div>
                  </div>

                  <div className="flex justify-center items-center">
                    <div className="w-12 h-12 flex items-center justify-center">
                      <CircularProgress
                        percent={clamped}
                        raw={percent}
                        isGood={isGood}
                        goal={m.target}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function CircularProgress({
  percent,
  raw,
  isGood,
  goal,
}: {
  percent: number;
  raw: number;
  isGood: boolean;
  goal: number;
}) {
  const radius = 20;
  const stroke = 5;
  const normalizedRadius = radius - stroke;
  const circumference = normalizedRadius * 2 * Math.PI;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="#e5e7eb"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />

        <circle
          stroke={isGood ? "#22c55e" : "#ef4444"}
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={offset}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          transform={`rotate(-90 ${radius} ${radius})`}
        />

        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="11"
          fill="#111"
        >
          {goal}
        </text>
      </svg>
    </div>
  );
}

function Info({ icon: Icon, value }: { icon: any; value: any }) {
  return (
    <div className="flex items-center gap-1">
      <Icon size={16} />
      <span className="font-semibold">{value}</span>
    </div>
  );
}

function Divider() {
  return <span>|</span>;
}
