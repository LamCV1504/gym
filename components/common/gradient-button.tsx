import { cn } from "@/lib/utils";
import { Surface } from "./surface";

type ButtonVariant = "ghost" | "filled" | "soft";
type Size = "sm" | "md";

export function GradientButton({
  children,
  variant = "ghost",
  size = "md",
  active,
  className,
}: {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: Size;
  active?: boolean;
  className?: string;
}) {
  const sizes = {
    sm: "h-8 px-2 text-sm",
    md: "h-9 px-3 text-sm",
  };

  const variants = {
    ghost: "bg-transparent hover:bg-white/10",
    soft: "bg-white/10 hover:bg-white/20",
    filled: "bg-white text-black hover:bg-white/90",
  };

  return (
    <Surface
      active={active}
      className={cn(
        "flex items-center justify-center rounded-xl",
        sizes[size],
        variants[variant],
        "transition-all",
        className,
      )}
    >
      {children}
    </Surface>
  );
}
