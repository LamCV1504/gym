import { Surface } from "./surface";

export function GradientCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Surface variant="soft" className={`p-4 ${className}`}>
      {children}
    </Surface>
  );
}
