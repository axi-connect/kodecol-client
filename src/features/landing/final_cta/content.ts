import { SITE_CONFIG } from "@/shared/config/site_config";

interface FinalCtaContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  primary_label: string;
  secondary_label: string;
  contact_line: string;
}

/* Copy fiel al mockup (sección #cotizaciones, CTA final). */
export const FINAL_CTA_CONTENT = {
  eyebrow: "Empecemos",
  title: "¿Listo para construir futuro?",
  subtitle:
    "En un mundo que exige más con menos, ayudamos a tu empresa a evolucionar con inteligencia, propósito y tecnología con propósito.",
  primary_label: "Hablemos por WhatsApp",
  secondary_label: "Solicitar cotización",
  contact_line: `wa.me/${SITE_CONFIG.whatsapp_number} · ${SITE_CONFIG.email}`,
} as const satisfies FinalCtaContent;
