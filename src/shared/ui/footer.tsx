import Link from "next/link";
import { SITE_CONFIG } from "@/shared/config/site_config";
import { KodecolLogo } from "@/shared/ui/kodecol_mark";
import { LegalBadge } from "@/shared/ui/legal_badge";

const FOOTER_NAV = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Nosotros", href: "/#nosotros" },
  { label: "Cotizaciones", href: "/#cotizaciones" },
];

/** Footer global: marca + navegación + contacto + copyright (fiel al mockup). */
export function Footer() {
  return (
    <footer className="bg-surface-1 px-6 pb-10 pt-16">
      <div className="mx-auto max-w-[1200px] border-t border-border-subtle pt-12">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <KodecolLogo />
            <p className="text-sm leading-relaxed text-text-muted">
              {SITE_CONFIG.tagline}
              <br />
              {SITE_CONFIG.sub_tagline}
            </p>
          </div>

          <nav aria-label="Navegación del footer" className="flex flex-col gap-3">
            <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-text-muted">
              Navegación
            </h2>
            {FOOTER_NAV.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-text-secondary transition-colors duration-fast hover:text-mint-500"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-text-muted">
              Contacto
            </h2>
            <a
              href={SITE_CONFIG.whatsapp_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-secondary transition-colors duration-fast hover:text-mint-500"
            >
              WhatsApp · {SITE_CONFIG.whatsapp_display}
            </a>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="text-sm text-text-secondary transition-colors duration-fast hover:text-mint-500"
            >
              {SITE_CONFIG.email}
            </a>
            <span className="text-sm text-text-secondary">
              {SITE_CONFIG.location}
            </span>
          </div>
        </div>

        <div className="mt-12">
          <LegalBadge />
        </div>

        <p className="mt-8 border-t border-border-subtle pt-6 text-center text-[13px] text-text-disabled">
          © {new Date().getFullYear()} Kodecol. Todos los derechos reservados. ·{" "}
          <em>Construimos futuro.</em>
        </p>
      </div>
    </footer>
  );
}
