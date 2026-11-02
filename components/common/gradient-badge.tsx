import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "success" | "warning" | "danger";

export function GradientBadge({
  children,
  variant = "default",
}: {
  children: React.ReactNode;
  variant?: BadgeVariant;
}) {
  const variants = {
    default: "bg-white/10 text-white",
    success: "bg-green-400/20 text-green-300",
    warning: "bg-yellow-400/20 text-yellow-300",
    danger: "bg-red-400/20 text-red-300",
  };

  return (
    <span className={cn("px-2 py-0.5 rounded-full text-xs", variants[variant])}>
      {children}
    </span>
  );
}
