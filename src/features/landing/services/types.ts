export type ServiceIcon =
  | "automation"
  | "mobile"
  | "desktop"
  | "web"
  | "ai"
  | "custom";

export interface ServiceItem {
  icon: ServiceIcon;
  title: string;
  description: string;
  /** La celda estrella ocupa 2×2 con gradiente de marca y badge. */
  featured: boolean;
  badge?: string;
}

export interface ServicesContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  services: readonly ServiceItem[];
  cta_lead: string;
  cta_emphasis: string;
  cta_tail: string;
  cta_link_label: string;
}
