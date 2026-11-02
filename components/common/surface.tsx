import { cn } from "@/lib/utils";

type Variant = "default" | "soft" | "strong";

export function Surface({
  children,
  active,
  variant = "default",
  className,
}: {
  children: React.ReactNode;
  active?: boolean;
  variant?: Variant;
  className?: string;
}) {
  const variants = {
    default: "bg-white/5",
    soft: "bg-white/10",
    strong: "bg-white/20",
  };

  return (
    <div
      className={cn(
        "relative rounded-xl backdrop-blur-xl transition-all duration-300",
        variants[variant],
        active && "bg-linear-to-r from-primary/10 via-primary/5 to-transparent",
        "hover:bg-primary/5",
        className,
      )}
    >
      {active && (
        <>
          <div className="absolute inset-0 rounded-xl border-r border-primary/20 pointer-events-none" />
          <div className="absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_left,rgba(250,204,21,0.08),transparent_70%)] pointer-events-none" />
        </>
      )}

      {children}
    </div>
  );
}
