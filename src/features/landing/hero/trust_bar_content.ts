interface TrustBarContent {
  heading: string;
  brands: readonly string[];
}

/* Marcas fieles al mockup (texto, no logos de imagen). */
export const TRUST_BAR_CONTENT = {
  heading: "Empresas que ya construyen futuro con Kodecol",
  brands: ["MEGAGUAY", "Quántica", "Fedegolf", "Terpel", "Acertemos"],
} as const satisfies TrustBarContent;
