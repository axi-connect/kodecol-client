import type { MetadataRoute } from "next";
import {
  get_developer_profile_repository,
  get_product_brand_repository,
} from "@/adapters/content";
import { SITE_CONFIG } from "@/shared/config/site_config";

/* Se generan en build: obligatorio para la exportación estática (output: "export"). */
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const profiles = get_developer_profile_repository();
  const brands = get_product_brand_repository();
  return [
    { url: SITE_CONFIG.base_url, priority: 1 },
    ...brands.get_all_slugs().map((slug) => ({
      url: `${SITE_CONFIG.base_url}/marcas/${slug}`,
      priority: 0.9,
    })),
    ...profiles.get_all_slugs().map((slug) => ({
      url: `${SITE_CONFIG.base_url}/equipo/${slug}`,
      priority: 0.8,
    })),
  ];
}
