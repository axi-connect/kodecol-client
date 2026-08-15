/** Configuración global del sitio: única fuente de datos de contacto y navegación. */

export interface NavLink {
  label: string;
  href: string;
}

/**
 * Registro mercantil. Los valores son los del RUES: se muestran para acreditar
 * que la empresa está legalmente constituida, así que solo se tocan si cambia
 * el registro real — y el enlace debe seguir llevando al RUES para que
 * cualquiera pueda comprobarlo por su cuenta.
 */
export interface LegalRegistry {
  business_name: string;
  /** NIT con dígito de verificación. */
  tax_id: string;
  category: string;
  chamber: string;
  registration_number: string;
  // status: string;
  rues_url: string;
}

export const SITE_CONFIG = {
  name: "Kodecol",
  title: "Kodecol — Tecnología con propósito",
  description:
    "Fábrica de software en Colombia. Diseñamos y desarrollamos productos digitales con inteligencia artificial y pensamiento estratégico para resolver problemas reales.",
  base_url: "https://kodecol.com",
  tagline: "Tecnología con propósito.",
  sub_tagline: "Fábrica de software · Crecimiento consciente.",
  whatsapp_number: "573224970950",
  whatsapp_url: "https://wa.me/573224970950",
  whatsapp_display: "322 497 0950",
  email: "gestion.proyectos.axi@gmail.com",
  location: "Colombia",
  legal: {
    business_name: "KODECOL S.A.S",
    tax_id: "902095005-6",
    category: "Sociedad o persona jurídica principal o ESAL",
    chamber: "Cámara de Comercio de Bogotá",
    registration_number: "4140238",
    // status: "Activa",
    rues_url: "https://www.rues.org.co/buscar/RM/kodecol",
  } satisfies LegalRegistry,
  /* Orden fiel al mockup: Inicio · Cotizaciones · Servicios · Nosotros · Equipo */
  nav_links: [
    { label: "Inicio", href: "/#inicio" },
    { label: "Cotizaciones", href: "/#cotizaciones" },
    { label: "Servicios", href: "/#servicios" },
    { label: "Marcas propias", href: "/#marcas" },
    { label: "Nosotros", href: "/#nosotros" },
    { label: "Equipo", href: "/#equipo" },
  ] satisfies NavLink[],
} as const;
