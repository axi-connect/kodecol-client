import { cn } from "@/shared/lib/cn";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Superficie más opaca para bloques con texto largo (regla de DESIGN.md §4). */
  strong?: boolean;
  /** Eleva la tarjeta en hover (borde menta + translateY). */
  interactive?: boolean;
}

/** Superficie de vidrio estándar: fondo translúcido + blur + borde hairline + luz cenital. */
export function GlassCard({
  strong = false,
  interactive = false,
  className,
  children,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border-default shadow-glass backdrop-blur-[18px]",
        strong ? "bg-glass-fill-strong" : "bg-glass-fill",
        interactive &&
          "transition-[transform,border-color,background-color] duration-base ease-kodecol hover:-translate-y-1 hover:border-border-accent hover:bg-surface-3/60",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
