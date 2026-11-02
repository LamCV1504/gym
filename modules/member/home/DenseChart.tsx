"use client";

import { BarChart, Bar, XAxis, ResponsiveContainer, Cell } from "recharts";

const data = Array.from({ length: 24 }, (_, i) => ({
  hour: i,
  value: Math.floor(Math.random() * 100),
}));

const getColor = (value: number) => {
  if (value < 30) return "#636363"; // xanh
  if (value < 70) return "#323232"; // vàng
  return "#030303"; // đỏ
};

export function GymCrowd24hChart() {
  const currentHour = new Date().getHours();

  return (
    <div className="h-40 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis
            dataKey="hour"
            tick={{ fontSize: 9 }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(h) => `${h}`}
            interval={2}
          />

          <Bar dataKey="value" radius={[4, 4, 0, 0]}>
            {data.map((entry, index) => {
              const isNow = entry.hour === currentHour;

              return (
                <Cell
                  key={index}
                  fill={getColor(entry.value)}
                  stroke={isNow ? "#000" : "none"}
                  strokeWidth={isNow ? 2 : 0}
                />
              );
            })}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
