"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

type Membership = {
  name: string;
  status: "active" | "expired" | "pending";
  startDate: string;
  endDate: string;
  totalSessions?: number;
  usedSessions?: number;
  benefits: string[];
};

type Props = {
  data: Membership;
};

const mockMembership = {
  name: "Premium Plan",
  status: "active",
  startDate: "01/04/2026",
  endDate: "01/05/2026",
  totalSessions: 30,
  usedSessions: 12,
  benefits: [
    "Gym access",
    "Unlimited classes",
    "1 PT session/week",
    "Priority booking",
  ],
};

export default function CurrentMembershipCard({ data }: Props) {
  const {
    name,
    status,
    startDate,
    endDate,
    totalSessions,
    usedSessions,
    benefits,
  } = data;

  const progress =
    totalSessions && usedSessions
      ? Math.round((usedSessions / totalSessions) * 100)
      : 0;

  const statusColor = {
    active: "bg-green-500",
    expired: "bg-red-500",
    pending: "bg-yellow-500",
  };

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm space-y-6">
      {/* HEADER */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className="text-sm text-gray-500">
            {startDate} → {endDate}
          </p>
        </div>

        <Badge className={`${statusColor[status]} text-white capitalize`}>
          {status}
        </Badge>
      </div>

      {/* PROGRESS */}
      {totalSessions && usedSessions !== undefined && (
        <div className="space-y-2">
          <Progress value={progress} />
          <div className="flex justify-between text-sm text-gray-500">
            <span>
              {usedSessions} / {totalSessions} sessions
            </span>
            <span>{progress}%</span>
          </div>
        </div>
      )}

      {/* CONTENT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* BENEFITS */}
        <div>
          <h3 className="font-medium mb-2">Benefits</h3>
          <ul className="space-y-1 text-sm text-gray-600">
            {benefits.map((b, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="text-green-500">✔</span>
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* INFO */}
        <div className="flex flex-col justify-between">
          <div className="text-sm text-gray-600 space-y-1">
            <p>
              <span className="font-medium">Start:</span> {startDate}
            </p>
            <p>
              <span className="font-medium">Expires:</span> {endDate}
            </p>
          </div>

          {/* ACTIONS */}
          <div className="flex gap-2 w-full mt-4">
            <Button className="w-1/2">Upgrade</Button>
            <Button variant="outline" className="w-1/2">
              Renew
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
