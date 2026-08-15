import Link from "next/link";
import { SITE_CONFIG } from "@/shared/config/site_config";
import { KodecolLogo } from "@/shared/ui/kodecol_mark";
import { NavbarClient } from "@/shared/ui/navbar_client";

/**
 * Navbar pill glass flotante (fija, top 18px), fiel al mockup.
 * Desktop: logo · enlaces · CTA. Mobile: logo · CTA compacto · hamburguesa (NavbarClient).
 */
export function Navbar() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-[18px] z-[100] flex justify-center px-6">
      <nav
        aria-label="Navegación principal"
        className="pointer-events-auto flex w-[min(1160px,100%)] items-center gap-2 rounded-full border border-glass-border bg-[rgba(8,26,22,.62)] py-[11px] pl-6 pr-3 shadow-glass backdrop-blur-[20px]"
      >
        <Link href="/#inicio" className="mr-auto flex justify-center" aria-label="Kodecol — inicio">
          <KodecolLogo />
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {SITE_CONFIG.nav_links.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                index === 0
                  ? "text-sm font-medium text-mint-500"
                  : "text-sm text-text-secondary transition-colors duration-fast hover:text-text-primary"
              }
            >
              {link.label}
            </Link>
          ))}
          <a
            href={SITE_CONFIG.whatsapp_url}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex min-h-11 items-center gap-1 rounded-full bg-mint-500 px-6 py-2.5 text-sm font-semibold text-text-on-accent shadow-glow-accent-strong transition-[background-color,transform] duration-fast ease-kodecol hover:-translate-y-0.5 hover:bg-mint-400"
          >
            Contáctanos <span aria-hidden>→</span>
          </a>
        </div>

        <NavbarClient />
      </nav>
    </header>
  );
}
