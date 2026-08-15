import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { get_product_brand_repository } from "@/adapters/content";
import { ProductTemplate } from "@/features/product/product_template";

/*
  Composition root de las marcas propias: único punto donde app conoce el adaptador.
  Rutas 100% estáticas (SSG); un slug desconocido responde 404.
*/

interface BrandPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams(): { slug: string }[] {
  const repository = get_product_brand_repository();
  return repository.get_all_slugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BrandPageProps): Promise<Metadata> {
  const { slug } = await params;
  const brand = get_product_brand_repository().get_by_slug(slug);
  if (!brand) return {};
  return {
    title: brand.seo.title,
    description: brand.seo.description,
  };
}

export default async function BrandPage({ params }: BrandPageProps) {
  const { slug } = await params;
  const brand = get_product_brand_repository().get_by_slug(slug);
  if (!brand) notFound();

  return <ProductTemplate brand={brand} />;
}
