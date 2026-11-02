"use client";

import type { ComponentType, SVGProps } from "react";

import { Button } from "@/components/ui/button";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

interface IconButtonProps {
  outline: IconComponent;
  solid: IconComponent;
  active?: boolean;
  ariaLabel: string;
  onClick?: () => void;
}

export function IconButton({
  outline: Outline,
  solid: Solid,
  active = false,
  ariaLabel,
  onClick,
}: IconButtonProps) {
  const Icon = active ? Solid : Outline;

  return (
    <Button
      type="button"
      size="icon"
      variant="ghost"
      aria-label={ariaLabel}
      aria-pressed={active}
      onClick={onClick}
      className="rounded-full"
    >
      <Icon className="size-5 text-white/70" />
    </Button>
  );
}
