import { Button } from "@base-ui/react";

export function ActionButton({
  icon,
  badge,
}: {
  icon: React.ReactNode;
  badge?: boolean;
}) {
  return (
    <Button
      className="relative w-10 h-10 flex items-center justify-center 
      rounded-2xl overflow-hidden
      bg-white/5 backdrop-blur-2xl
      border border-white/20
      text-white/80 hover:text-white
      transition-all duration-300
      hover:scale-105 active:scale-95"
    >
      {/* Glass reflection */}
      <div
        className="absolute inset-0 rounded-2xl 
        bg-gradient-to-br from-white/10 via-transparent to-transparent 
        opacity-40 pointer-events-none"
      />

      {/* Inner glow */}
      <div
        className="absolute inset-0 rounded-2xl 
        shadow-[inset_0_1px_2px_rgba(255,255,255,0.4)]"
      />

      {/* Icon */}
      <div className="relative z-10">{icon}</div>

      {/* Badge */}
      {badge && (
        <span
          className="absolute top-1 right-1 w-2 h-2 
          bg-red-500 rounded-full shadow-[0_0_6px_rgba(255,0,0,0.8)]"
        />
      )}
    </Button>
  );
}
