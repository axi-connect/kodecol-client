export interface TeamMemberCard {
  slug: string;
  name: string;
  role: string;
  bio: string;
  chips: readonly string[];
  /** Foto en public/ o null si aún no hay (se pinta placeholder de marca). */
  photo_src: string | null;
}

export interface TeamContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  members: readonly TeamMemberCard[];
  join_lead: string;
  join_emphasis: string;
}
