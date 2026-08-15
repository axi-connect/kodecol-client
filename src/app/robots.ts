import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/shared/config/site_config";

/* Se generan en build: obligatorio para la exportación estática (output: "export"). */
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_CONFIG.base_url}/sitemap.xml`,
  };
}
