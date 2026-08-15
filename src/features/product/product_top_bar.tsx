import Link from "next/link";
import type { ProductBrand } from "@/core/domain/product_brand";
import { KodecolLogo } from "@/shared/ui/kodecol_mark";
import { LineIcon } from "@/shared/ui/line_icon";

interface ProductTopBarProps {
  brand: ProductBrand;
}

/**
 * Top bar de la página de producto. Sostiene el marco del anfitrión: aunque el
 * fondo ya sea el de la marca invitada, aquí sigue mandando Kodecol — logo,
 * miga de pan y salida hacia el sitio propio del producto.
 */
export function ProductTopBar({ brand }: ProductTopBarProps) {
  return (
    <header className="sticky top-0 z-[100] border-b border-[var(--brand-line)] bg-[var(--brand-ground)]/80 backdrop-blur-[18px]">
      <nav
        aria-label="Navegación de la marca"
        className="mx-auto flex w-[min(1160px,100%-48px)] items-center gap-4 py-3"
      >
        <Link
          href="/#marcas"
          className="inline-flex items-center gap-2.5 text-[var(--brand-ink-muted)] transition-colors duration-fast hover:text-[var(--brand-ink)]"
          aria-label="Volver a marcas propias"
        >
          <LineIcon name="arrow_right" size={15} className="rotate-180" />
          <KodecolLogo />
        </Link>

        <p className="hidden text-[13px] text-[var(--brand-ink-dim)] sm:block">
          Marcas propias /{" "}
          <span className="font-medium text-[var(--brand-ink-muted)]">
            {brand.name}
          </span>
        </p>

        <a
          href={brand.detail.primary_cta.href}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto inline-flex items-center gap-1.5 text-[13px] font-medium text-[var(--brand-accent)] transition-opacity duration-fast hover:opacity-80"
        >
          {brand.detail.primary_cta.href.replace(/^https?:\/\//, "")}
          <LineIcon name="arrow_right" size={12} className="-rotate-45" />
        </a>
      </nav>
    </header>
  );
}
