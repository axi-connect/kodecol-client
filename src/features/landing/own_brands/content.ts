import type { OwnBrandsContent } from "./types";

/* Copy de la sección #marcas. Los datos de cada producto viven en content/products/. */
export const OWN_BRANDS_CONTENT = {
  eyebrow: "Marcas propias",
  title_lead: "No solo construimos para otros. También construimos ",
  title_accent: "lo nuestro",
  description:
    "Parte de lo que sabemos hacer lo probamos primero en nuestros propios productos. Nacen aquí, los operamos nosotros y salen al mercado con marca propia.",
} as const satisfies OwnBrandsContent;
