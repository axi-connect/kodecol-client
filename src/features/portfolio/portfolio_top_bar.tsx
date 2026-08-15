import Link from "next/link";
import type { DeveloperProfile } from "@/core/domain/developer_profile";
import { KodecolLogo } from "@/shared/ui/kodecol_mark";
import { LineIcon } from "@/shared/ui/line_icon";

interface PortfolioTopBarProps {
  profile: DeveloperProfile;
}

/** Top bar del portafolio: logo → landing, "← Equipo" → /#equipo, "Descargar CV" (fiel al mockup). */
export function PortfolioTopBar({ profile }: PortfolioTopBarProps) {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-[18px] z-[100] flex justify-center px-6">
      <nav
        aria-label="Navegación del portafolio"
        className="pointer-events-auto flex w-[min(1100px,100%)] items-center gap-4 rounded-full border border-glass-border bg-[rgba(8,26,22,.62)] py-[11px] pl-[22px] pr-3 shadow-glass backdrop-blur-[20px]"
      >
        <Link href="/" className="mr-auto flex justify-center" aria-label="Kodecol — inicio">
          <KodecolLogo />
        </Link>
        <Link
          href="/#equipo"
          className="text-sm text-text-secondary transition-colors duration-fast hover:text-text-primary"
        >
          ← Equipo
        </Link>
        <a
          href={profile.cv_src}
          download
          className="inline-flex min-h-11 items-center gap-2 rounded-full bg-mint-500 px-5 py-2.5 text-sm font-semibold text-text-on-accent shadow-glow-accent-strong transition-[background-color,transform] duration-fast ease-kodecol hover:-translate-y-0.5 hover:bg-mint-400"
        >
          <LineIcon name="download" size={16} />
          Descargar CV
        </a>
      </nav>
    </header>
  );
}
