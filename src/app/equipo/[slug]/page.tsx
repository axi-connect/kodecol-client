import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { get_developer_profile_repository } from "@/adapters/content";
import { PortfolioTemplate } from "@/features/portfolio/portfolio_template";

/*
  Composition root del portafolio: único punto donde app conoce el adaptador.
  Rutas 100% estáticas (SSG); un slug desconocido responde 404.
*/

interface PortfolioPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams(): { slug: string }[] {
  const repository = get_developer_profile_repository();
  return repository.get_all_slugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PortfolioPageProps): Promise<Metadata> {
  const { slug } = await params;
  const profile = get_developer_profile_repository().get_by_slug(slug);
  if (!profile) return {};
  return {
    title: profile.seo.title,
    description: profile.seo.description,
  };
}

export default async function PortfolioPage({ params }: PortfolioPageProps) {
  const { slug } = await params;
  const profile = get_developer_profile_repository().get_by_slug(slug);
  if (!profile) notFound();

  return <PortfolioTemplate profile={profile} />;
}
