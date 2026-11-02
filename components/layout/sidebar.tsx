"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSidebar } from "@/context/sidebar-context";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LogoLiquid } from "@/components/layout/logo";
import { useAuthStore } from "@/stores/auth-store";
import { CurrentPlanCard } from "@/modules/member/components/current-plan-card";
import {
  Dumbbell,
  CalendarDays,
  User,
  Home,
  Newspaper,
  Compass,
  IdCard,
} from "lucide-react";
import { locales } from "@/i18n/types";

type SidebarItem = {
  label: string;
  href: string;
  icon: React.ElementType;
  permission?: string;
};

type SidebarProps = {
  menu: SidebarItem[];
  footer?: React.ReactNode;
};

export function Sidebar() {
  const user = useAuthStore((s) => s.user);

  if (!user) return null;

  const menu = [
    {
      label: "Home",
      href: "/home",
      icon: Home,
    },
    {
      label: "Profile",
      href: "/profile",
      icon: User,
    },
    {
      label: "Membership",
      href: "/membership",
      icon: IdCard,
    },
    {
      label: "Classes",
      href: "/classes",
      icon: CalendarDays,
    },
    {
      label: "Progress",
      href: "/progress",
      icon: Dumbbell,
    },
    {
      label: "Feeds",
      href: "/feeds",
      icon: Newspaper,
    },
    {
      label: "Explore",
      href: "/explore",
      icon: Compass,
    },
  ];

  return (
    <SidebarRole
      menu={menu}
      footer={user.role === "member" ? <CurrentPlanCard /> : null}
    />
  );
}

export function SidebarRole({ menu, footer }: SidebarProps) {
  const pathname = usePathname();
  const { collapsed, toggle } = useSidebar();

  return (
    <aside className="p-4">
      <div
        className={cn(
          "h-[calc(100vh-2rem)] rounded-2xl flex flex-col relative transition-all duration-300",
          collapsed ? "w-16" : "w-56",
          " backdrop-blur-4xl",
          "border border-primary/4",
          "shadow-[0_20px_60px_rgba(0,0,0,0.1)]",
        )}
      >
        <div className="pointer-events-none absolute left-0 top-0 h-full w-px">
          <div className="w-full h-full bg-linear-to-b from-primary via-primary/60 to-transparent opacity-80 blur-sm" />
        </div>

        <div className="pointer-events-none absolute -left-10 top-0 h-full w-32 bg-[radial-gradient(circle_at_left,rgba(250,204,21,0.1),transparent_70%)] blur-xl" />

        <Button
          onClick={toggle}
          className="text-primary absolute -right-3 top-6 z-20 w-7 h-7 rounded-full bg-white/3 backdrop-blur-md shadow-lg flex items-center justify-center hover:scale-110 transition"
        >
          {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
        </Button>

        <div
          className={cn(
            "px-4 pt-6 pb-4 flex items-center",
            collapsed ? "justify-center" : "justify-start",
          )}
        >
          <LogoLiquid />
          {!collapsed && (
            <span className="ml-3 font-bold text-lg text-white/80">
              Faliz Gym
            </span>
          )}
        </div>

        <nav className="flex-1 px-2 flex flex-col gap-1">
          {menu.map((item) => {
            const normalizedPathname = pathname.replace(
              new RegExp(`^/(${locales.join("|")})(?=/|$)`),
              "",
            );

            const isActive = normalizedPathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative flex items-center gap-3 py-2 rounded-xl text-sm transition-all duration-300",

                  collapsed ? "justify-center px-0" : "px-3",

                  "hover:bg-primary/3",

                  isActive &&
                    "bg-linear-to-r from-primary/5 via-primary/4 to-transparent",
                )}
              >
                {isActive && (
                  <div className="absolute inset-0 rounded-xl border-r border-primary/7 pointer-events-none" />
                )}

                {isActive && (
                  <div className="absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_left,rgba(250,204,21,0.05),transparent_70%)] pointer-events-none" />
                )}

                <item.icon
                  className={cn(
                    "w-4 h-4 shrink-0 transition-colors",
                    isActive ? "text-primary" : "text-white/70",
                  )}
                />

                {!collapsed && (
                  <span
                    className={cn(
                      "transition-colors",
                      isActive ? "text-primary" : "text-white/80",
                    )}
                  >
                    {item.label}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
        {!collapsed && footer}
      </div>
    </aside>
  );
}
