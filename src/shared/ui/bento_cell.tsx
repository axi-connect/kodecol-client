import { cn } from "@/shared/lib/cn";
import { GlassCard } from "@/shared/ui/glass_card";

type BentoSpan = "1x1" | "2x1" | "1x2" | "2x2" | "full";

interface BentoCellProps {
  children: React.ReactNode;
  /** Peso de la celda en la grilla (jerarquía por tamaño, DESIGN.md §5). */
  span?: BentoSpan;
  className?: string;
}

const span_classes: Record<BentoSpan, string> = {
  "1x1": "",
  "2x1": "md:col-span-2",
  "1x2": "md:row-span-2",
  "2x2": "md:col-span-2 md:row-span-2",
  full: "md:col-span-3",
};

/** Celda de bento: tarjeta glass pensada para la grilla modular. En mobile colapsa a 1 columna. */
export function BentoCell({ children, span = "1x1", className }: BentoCellProps) {
  return (
    <GlassCard
      interactive
      className={cn("rounded-xl p-6", span_classes[span], className)}
    >
      {children}
    </GlassCard>
  );
}
