"use client";

import { useState } from "react";
import { Bell, MessageCircle, Globe, Moon } from "lucide-react";
import { useAuthStore } from "@/stores/auth-store";

export function TopActions() {
  const [active, setActive] = useState<"message" | "notification" | null>(null);

  const { user } = useAuthStore();

  return (
    <div className="absolute top-4 max-w-full z-999 flex items-center gap-3">
      <div className="flex flex-col items-start">
        <span className="text-sm font-semibold text-primary/90">
          Hey, {user?.name} 👋
        </span>

        <p className="text-xs text-white/70">{user?.role}</p>
      </div>
      <div className="flex items-center gap-2">
        <SmallButton icon={<Globe size={16} />} />
        <SmallButton icon={<Moon size={16} />} />
      </div>

      {/* DIVIDER */}
      <div className="w-px h-6 bg-white/20" />

      {/* USER CONTROLS */}
      <div className="flex items-center gap-2">
        <IconButton
          icon={<MessageCircle size={18} />}
          color="primary"
          active={active === "message"}
          onClick={() => setActive(active === "message" ? null : "message")}
        ></IconButton>

        <IconButton
          icon={<Bell size={18} />}
          active={active === "notification"}
          onClick={() =>
            setActive(active === "notification" ? null : "notification")
          }
          badge
        />

        {/* ACCOUNT */}
        <div
          className="flex items-center gap-2 px-2 py-1 rounded-xl 
          bg-white/20 backdrop-blur-xl border border-white/30"
        >
          {/* <Image
            // src={user?.avatar}
            alt="avatar"
            width={28}
            height={28}
            className="rounded-full object-cover"
          /> */}

          <div className="text-left leading-tight">
            <p className="text-sm text-white font-medium">{user?.name}</p>
            <p className="text-[11px] text-white/60">{user?.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconButton({
  icon,
  active,
  onClick,
  badge,
}: {
  icon: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  badge?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`
        relative w-9 h-9 flex items-center justify-center rounded-xl transition
        ${
          active
            ? "bg-primary/40 text-primary shadow-md"
            : "text-white/80 hover:bg-primary/15"
        }
      `}
    >
      {icon}

      {badge && (
        <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
      )}
    </button>
  );
}

function SmallButton({ icon }: { icon: React.ReactNode }) {
  return (
    <button
      className="w-8 h-8 flex items-center justify-center rounded-lg
      bg-white/20 text-white/80 hover:bg-white/30 transition"
    >
      {icon}
    </button>
  );
}
