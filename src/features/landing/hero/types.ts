export interface HeroCta {
  label: string;
  href: string;
  external: boolean;
}

export interface HeroContent {
  // eyebrow: string;
  /** El titular se parte en dos: la cola lleva gradiente menta (clip a texto). */
  title_lead: string;
  title_accent: string;
  /** Párrafo con una palabra enfatizada en blanco. */
  description_lead: string;
  description_emphasis: string;
  description_tail: string;
  primary_cta: HeroCta;
  secondary_cta: HeroCta;
  microcopy: string;
}
