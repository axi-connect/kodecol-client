import { Reveal } from "@/shared/ui/reveal";
import { TRUST_BAR_CONTENT } from "./trust_bar_content";

/**
 * Barra de confianza (prueba social) al pie del héroe: logos como texto Sora,
 * apagados en verde-gris y que se iluminan al hover (fiel al mockup).
 */
export function TrustBar() {
  return (
    <div className="relative mx-auto mt-16 max-w-[1200px] border-t border-border-subtle py-10 md:mt-24">
      <Reveal>
        <p className="text-center text-xs font-semibold uppercase tracking-[0.14em] text-text-muted">
          {TRUST_BAR_CONTENT.heading}
        </p>
        <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {TRUST_BAR_CONTENT.brands.map((brand) => (
            <li
              key={brand}
              className="font-sora text-[17px] font-semibold text-text-brandmark opacity-80 transition-[color,opacity] duration-fast hover:text-text-primary hover:opacity-100 md:text-[19px]"
            >
              {brand}
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}
