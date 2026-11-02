"use client";

// import { useGymStore } from "@/stores/gym-store";

export default function HeroRight() {
  //   const { currentGym, liveClasses } = useGymStore();
  const currentGym = {
    name: "afasfd",
    density: 30,
  };

  const liveClasses = [
    {
      name: "dafas",
      availableSlots: 3,
    },
  ];

  if (!currentGym) return null;

  return (
    <div className="flex flex-col gap-4 w-[320px]">
      {/* 🏢 GYM STATUS */}
      <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
        <p className="text-white/60 text-sm">Current gym</p>

        <div className="flex justify-between items-center mt-1">
          <h4 className="text-white font-medium">{currentGym.name}</h4>

          <DensityBadge value={currentGym.density} />
        </div>

        {/* Density bar */}
        <div className="mt-3 h-2 w-full bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-700"
            style={{ width: `${currentGym.density}%` }}
          />
        </div>
      </div>

      {/* 🔴 LIVE CLASSES */}
      <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
        <div className="flex items-center justify-between">
          <p className="text-white font-medium">Live now</p>

          <span className="text-xs text-red-400 animate-pulse">● LIVE</span>
        </div>

        <div className="mt-3 flex flex-col gap-3">
          {liveClasses.length === 0 ? (
            <p className="text-white/50 text-sm">No classes right now</p>
          ) : (
            liveClasses.map((cls) => (
              <div key={cls.id} className="flex items-center justify-between">
                <div>
                  <p className="text-white text-sm font-medium">{cls.name}</p>
                  <p className="text-white/50 text-xs">
                    {cls.availableSlots} slots left
                  </p>
                </div>

                <button className="text-xs px-3 py-1 rounded-full bg-primary/20 text-primary hover:bg-primary/30 transition">
                  Join
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

function DensityBadge({ value }: { value: number }) {
  let color = "text-green-400";
  let label = "Empty";

  if (value > 70) {
    color = "text-red-400";
    label = "Crowded";
  } else if (value > 40) {
    color = "text-yellow-400";
    label = "Normal";
  }

  return (
    <span className={`text-xs font-medium ${color}`}>
      {label} ({value}%)
    </span>
  );
}
