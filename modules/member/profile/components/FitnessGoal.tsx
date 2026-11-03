"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useProfileStore } from "../hooks/useProfile";
import type { FitnessGoal } from "../typpe";

export function FitnessGoals() {
  const { profile, setProfile } = useProfileStore();
  const [isEditing, setIsEditing] = useState(false);

  const [form, setForm] = useState({
    goal: profile?.goal || "maintain",
    targetWeight: profile?.targetWeight || "",
  });

  if (!profile) return null;

  const handleSave = () => {
    setProfile({
      ...profile,
      goal: form.goal as FitnessGoal,
      targetWeight: Number(form.targetWeight),
    });
    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
      {/* 🎯 GOAL CARD */}
      <div className="p-4 rounded-xl border bg-white space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold">Your Goal</h3>

          {!isEditing ? (
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </Button>
          ) : (
            <Button size="sm" onClick={handleSave}>
              Save
            </Button>
          )}
        </div>

        {/* VIEW MODE */}
        {!isEditing ? (
          <>
            <div className="flex justify-between">
              <span className="text-gray-500">Goal</span>
              <span className="font-medium capitalize">
                {profile.goal?.replace("_", " ") || "--"}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Current</span>
              <span className="font-medium">{profile.weight || "--"} kg</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Target</span>
              <span className="font-medium">
                {profile.targetWeight || "--"} kg
              </span>
            </div>

            {/* progress */}
            {profile.weight && profile.targetWeight && (
              <div>
                <p className="text-sm text-gray-500 mb-1">
                  Progress: {profile.weight} → {profile.targetWeight}
                </p>

                <div className="w-full bg-gray-200 h-2 rounded">
                  <div
                    className="bg-black h-2 rounded"
                    style={{
                      width: `${Math.min(
                        (profile.weight / profile.targetWeight) * 100,
                        100,
                      )}%`,
                    }}
                  />
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            {/* EDIT MODE */}

            {/* Goal type */}
            <div className="grid grid-cols-3 gap-2">
              {[
                { label: "🔥 Lose", value: "lose_weight" },
                { label: "💪 Gain", value: "gain_muscle" },
                { label: "⚖️ Maintain", value: "maintain" },
              ].map((g) => (
                <button
                  key={g.value}
                  onClick={() =>
                    setForm({ ...form, goal: g.value as FitnessGoal })
                  }
                  className={`p-2 rounded-lg border text-sm ${
                    form.goal === g.value ? "bg-black text-white" : "bg-white"
                  }`}
                >
                  {g.label}
                </button>
              ))}
            </div>

            {/* Target weight */}
            <input
              type="number"
              className="w-full border rounded-lg p-2"
              placeholder="Target weight (kg)"
              value={form.targetWeight}
              onChange={(e) =>
                setForm({ ...form, targetWeight: e.target.value })
              }
            />
          </>
        )}
      </div>

      {/* 📸 INBODY IMAGES */}
      <div className="space-y-3">
        <h3 className="font-semibold">InBody History</h3>

        <div className="grid grid-cols-7 gap-2">
          {/* mock images */}
          {["/inboy.jpg", "/inboy.jpg", "/inboy.jpg", "/inboy.jpg"].map(
            (src, index) => (
              <div
                key={index}
                className="aspect-square rounded-lg overflow-hidden border"
              >
                <img src={src} className="w-full h-full object-cover" />
              </div>
            ),
          )}
          <div className="aspect-square rounded-lg overflow-hidden border">
            <Button variant="outline" className="w-full h-full">
              +
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
