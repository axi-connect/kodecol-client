import type { ProductBrand } from "@/core/domain/product_brand";
import type { ProductBrandRepository } from "@/core/ports/product_brand_repository";
import axi_connect_raw from "@content/products/axi_connect.json";
import { product_brand_schema } from "./product_brand_schema";

/*
  Adaptador local: importa los JSON estáticamente (compatible con SSG) y los valida
  al cargar el módulo. Un JSON inválido rompe `pnpm build` con el error de zod
  señalando el campo — gate de calidad de contenido, no un bug.

  Añadir una marca propia = un JSON + sus assets + una línea en `raw_brands`.
*/

const raw_brands: readonly unknown[] = [axi_connect_raw];

const brands: readonly ProductBrand[] = raw_brands.map((raw) =>
  product_brand_schema.parse(raw),
);

const by_slug: ReadonlyMap<string, ProductBrand> = new Map(
  brands.map((brand) => [brand.slug, brand]),
);

export class LocalProductBrandRepository implements ProductBrandRepository {
  get_all(): readonly ProductBrand[] {
    return brands;
  }

  get_all_slugs(): readonly string[] {
    return [...by_slug.keys()];
  }

  get_by_slug(slug: string): ProductBrand | null {
    return by_slug.get(slug) ?? null;
  }
}
