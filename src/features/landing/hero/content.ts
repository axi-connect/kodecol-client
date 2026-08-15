import { SITE_CONFIG } from "@/shared/config/site_config";
import type { HeroContent } from "./types";

/* Copy fiel al mockup Kodecol Landing (sección #inicio). */
export const HERO_CONTENT = {
  // eyebrow: "Tecnología con propósito",
  title_lead: "El software que tu empresa necesita para ",
  title_accent: "crecer de verdad.",
  description_lead:
    "Diseñamos y desarrollamos productos digitales con inteligencia artificial y pensamiento estratégico para resolver problemas reales. No construimos software para que exista: lo construimos para que ",
  description_emphasis: "impacte",
  description_tail: ".",
  primary_cta: {
    label: "Hablemos por WhatsApp",
    href: SITE_CONFIG.whatsapp_url,
    external: true,
  },
  secondary_cta: {
    label: "Ver servicios",
    href: "/#servicios",
    external: false,
  },
  microcopy:
    "Fábrica de software en Colombia · Aliados de crecimiento consciente.",
} as const satisfies HeroContent;
