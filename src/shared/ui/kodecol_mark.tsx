import Image from "next/image";
import { cn } from "@/shared/lib/cn";

/**
 * Dimensiones nativas de public/images/logo/isotipo-white-trim.png (generado por
 * scripts/generate_brand_assets.mjs). El isotipo es algo más alto que ancho.
 */
const ISOTIPO_WIDTH = 511;
const ISOTIPO_HEIGHT = 534;

interface KodecolMarkProps {
  /** Altura del isotipo: número en px o cualquier longitud CSS (ej. "var(--mark)"). */
  size?: number | string;
  /** Resplandor menta alrededor de la silueta. Recurso escaso: solo en piezas focales. */
  glow?: boolean;
  className?: string;
}

/**
 * Isotipo oficial de Kodecol en su versión clara, para fondos oscuros
 * (docs/DESIGN-SYSTEM.md §6.9). Decorativo: el nombre accesible lo aporta
 * el texto o el aria-label del enlace que lo envuelve.
 * El ancho lo deriva el navegador del aspecto intrínseco, así que `size` acepta
 * una variable CSS y el lockup puede escalar por breakpoint sin recalcular nada.
 */
export function KodecolMark({ size = 30, glow, className }: KodecolMarkProps) {
  return (
    <Image
      src="/images/logo/isotipo-white-trim.png"
      alt=""
      aria-hidden
      width={ISOTIPO_WIDTH}
      height={ISOTIPO_HEIGHT}
      className={cn("w-auto", glow && "drop-shadow-glow-accent", className)}
      style={{ height: size }}
    />
  );
}

interface KodecolLogoProps {
  className?: string;
}

/**
 * Logo completo: isotipo + wordmark "Kodecol" en Sora 700, ópticamente alineados.
 *
 * La altura de mayúscula de Sora 700 es ~0.7em, así que igualar el font-size al
 * alto del isotipo dejaría la palabra mucho más pequeña. El tamaño se deriva:
 * `font-size = alto_isotipo × 0.9 / 0.7`. El 0.9 deja el isotipo un pelo más alto,
 * que es lo correcto: es una marca, no una letra.
 *
 * `--mark` gobierna el lockup entero, así que escala por breakpoint en un solo sitio.
 */
export function KodecolLogo({ className }: KodecolLogoProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 [--mark:17px] md:[--mark:20px]",
        className,
      )}
    >
      <KodecolMark size="var(--mark)" />
      <span
        className="font-sora font-bold leading-none text-text-primary"
        style={{ fontSize: "calc(var(--mark) * 0.9 / 0.9)" }}
      >
        Kodecol
      </span>
    </span>
  );
}
