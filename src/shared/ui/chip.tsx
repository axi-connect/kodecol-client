import { cn } from "@/shared/lib/cn";

interface ChipProps {
  children: React.ReactNode;
  className?: string;
}

/** Chip pill para tecnologías/etiquetas: fondo glass tenue, texto verde claro. */
export function Chip({ children, className }: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border-subtle bg-surface-inset/50 px-3 py-1 text-xs font-medium text-green-200",
        className,
      )}
    >
      {children}
    </span>
  );
}
