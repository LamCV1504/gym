"use client";

import { Button } from "@/components/ui/button";
import { ProfileTabs } from "@/modules/member/profile/components/ProfileTabs";
import { useProfileStore } from "@/modules/member/profile/hooks/useProfile";

export default function ProfilePage() {
  const { profile } = useProfileStore();

  if (!profile) {
    return <div className="p-4">Loading...</div>;
  }

  return (
    <div className="w-full mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="w-full flex justify-between items-end px-6 py-6 bg-black/5 rounded-2xl ">
        <div className="flex items-center gap-4">
          <img
            src={profile.avatar}
            className="w-20 h-20 rounded-full object-cover"
          />

          <div>
            <h1 className="text-xl font-semibold">{profile.name}</h1>
            <p className="text-gray-500">{profile.phone}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="secondary">+</Button>
          <Button>Edit Profile</Button>
        </div>
      </div>

      {/* Body Metrics Quick View */}
      {/* <div className="grid grid-cols-3 gap-4 text-center">
        <div className="p-3 rounded-xl bg-gray-100">
          <p className="text-sm text-gray-500">Weight</p>
          <p className="font-semibold">{profile.weight || "--"} kg</p>
        </div>

        <div className="p-3 rounded-xl bg-gray-100">
          <p className="text-sm text-gray-500">Height</p>
          <p className="font-semibold">{profile.height || "--"} cm</p>
        </div>

        <div className="p-3 rounded-xl bg-gray-100">
          <p className="text-sm text-gray-500">Goal</p>
          <p className="font-semibold capitalize">
            {profile.goal?.replace("_", " ") || "--"}
          </p>
        </div>
      </div> */}

      {/* Tabs */}
      <div>
        <ProfileTabs />
      </div>
    </div>
  );
}
