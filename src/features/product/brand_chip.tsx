import { cn } from "@/shared/lib/cn";

interface BrandChipProps {
  children: React.ReactNode;
  /** Añade el punto pulsante de "en producción". */
  live?: boolean;
  className?: string;
}

/**
 * Chip en la paleta de la marca invitada. No reutiliza `shared/ui/chip` porque
 * aquel está atado al verde corporativo; este consume las variables `--brand-*`
 * y sirve para cualquier marca.
 */
export function BrandChip({ children, live = false, className }: BrandChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium",
        live
          ? "border-[var(--brand-accent)]/40 bg-[var(--brand-accent)]/10 text-[var(--brand-accent-soft)]"
          : "border-[var(--brand-line)] bg-[var(--brand-surface)] text-[var(--brand-ink-muted)]",
        className,
      )}
    >
      {live ? (
        <span
          aria-hidden
          className="size-1.5 animate-kc-pulse rounded-full bg-current"
        />
      ) : null}
      {children}
    </span>
  );
}
