"use client";

import { useProfileStore } from "../hooks/useProfile";

function InfoItem({
  label,
  value,
}: {
  label: string;
  value?: string | number;
}) {
  return (
    <div className="flex justify-between items-center py-2 border-b">
      <span className="text-sm text-gray-500">{label}</span>
      <span className="font-medium">{value || "--"}</span>
    </div>
  );
}

export function PersonalInfo() {
  const { profile } = useProfileStore();

  if (!profile) return null;

  return (
    <div className="space-y-6">
      {/* 👤 Personal Info */}
      <div className="p-4 rounded-xl border bg-white">
        <h3 className="font-semibold mb-3">Personal Info</h3>

        <InfoItem label="Name" value={profile.name} />
        <InfoItem label="Phone" value={profile.phone} />
        <InfoItem label="Year of Birth" value={profile.yearOfBirth} />
        <InfoItem label="Gender" value={profile.gender} />
      </div>

      {/* 💪 Body & Fitness */}
      <div className="p-4 rounded-xl border bg-white">
        <h3 className="font-semibold mb-3">Body Metrics</h3>

        <InfoItem label="Height" value={`${profile.height || "--"} cm`} />
        <InfoItem label="Weight" value={`${profile.weight || "--"} kg`} />
        <InfoItem label="Body Fat" value={`${profile.bodyFat || "--"} %`} />
      </div>

      {/* 🏋️ Measurements */}
      <div className="p-4 rounded-xl border bg-white">
        <h3 className="font-semibold mb-3">Measurements</h3>

        <InfoItem label="Chest" value={`${profile.chest || "--"} cm`} />
        <InfoItem label="Waist" value={`${profile.waist || "--"} cm`} />
        <InfoItem label="Hip" value={`${profile.hip || "--"} cm`} />
        <InfoItem label="Arm" value={`${profile.arm || "--"} cm`} />
        <InfoItem label="Thigh" value={`${profile.thigh || "--"} cm`} />
      </div>

      {/* Action */}
      {/* <Button className="w-full">Edit Profile</Button> */}
    </div>
  );
}
