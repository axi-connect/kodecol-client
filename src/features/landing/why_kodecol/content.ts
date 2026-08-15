import type { WhyKodecolContent } from "./types";

/* Copy fiel al mockup (sección #nosotros). */
export const WHY_KODECOL_CONTENT = {
  eyebrow: "Aliados de crecimiento consciente",
  title_line_1: "No vendemos software.",
  title_line_2: "Construimos futuro.",
  subtitle:
    "Creemos en empresas que crecen sin destruir, que innovan sin olvidar y que avanzan sin perder humanidad. Cada solución busca hacerte más eficiente, más responsable y más sostenible.",
  differentiators: [
    {
      icon: "target",
      title: "Tecnología con propósito",
      description:
        "Construimos pensando en el mañana: soluciones que optimizan recursos y reducen desperdicios.",
    },
    {
      icon: "leaf",
      title: "Automatización consciente",
      description:
        "Automatizamos para liberar a las personas, no para reemplazarlas sin criterio.",
    },
    {
      icon: "star",
      title: "Calidad que se siente",
      description:
        "Software útil, inteligente y bien hecho, con diseño premium y pensamiento estratégico.",
    },
    {
      icon: "people",
      title: "Aliado, no proveedor",
      description:
        "Nos involucramos en tu crecimiento. Tu resultado es nuestro objetivo.",
    },
  ],
} as const satisfies WhyKodecolContent;
