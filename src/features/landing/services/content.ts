import type { ServicesContent } from "./types";

/* Copy fiel al mockup (sección #servicios, bento A: estrella + apoyos). */
export const SERVICES_CONTENT = {
  eyebrow: "Lo que construimos",
  title: "Soluciones que se sienten, que se usan y que generan resultados.",
  subtitle:
    "Desde una automatización puntual hasta un producto digital completo. Diseñamos cada solución para resolver un problema real y generar valor tangible.",
  services: [
    {
      icon: "automation",
      title: "Automatización de procesos",
      description:
        "Eliminamos tareas repetitivas y conectamos tus herramientas para que tu operación fluya sola — menos tiempo perdido, menos errores, más resultados.",
      featured: true,
      badge: "Servicio estrella",
    },
    {
      icon: "mobile",
      title: "Aplicaciones móviles",
      description:
        "Apps nativas e híbridas para iOS y Android, pensadas en la experiencia.",
      featured: false,
    },
    {
      icon: "desktop",
      title: "Apps de escritorio",
      description:
        "Software robusto para operaciones internas, productividad y control.",
      featured: false,
    },
    {
      icon: "web",
      title: "Desarrollo web",
      description:
        "Landing, e-commerce y más: sitios que convierten, con rendimiento sólido.",
      featured: false,
    },
    {
      icon: "ai",
      title: "IA a la medida",
      description:
        "Chatbots, agentes, IA generativa y análisis predictivo para tu negocio.",
      featured: false,
    },
    {
      icon: "custom",
      title: "Software a la medida",
      description:
        "ERP, CRM, portales y plataformas internas hechos a tu necesidad.",
      featured: false,
    },
  ],
  cta_lead: "¿No ves lo que buscas? ",
  cta_emphasis: "Cuéntanos tu idea",
  cta_tail: " y la construimos contigo.",
  cta_link_label: "Hablemos →",
} as const satisfies ServicesContent;
