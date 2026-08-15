import type { ProductBrand } from "../domain/product_brand";

/**
 * Puerto (hexágono): contrato de acceso a las marcas propias.
 * Hoy lo implementa un adaptador local (JSON); mañana podría implementarlo un CMS
 * sin tocar features ni app (solo cambia la factoría del adaptador).
 */
export interface ProductBrandRepository {
  get_all(): readonly ProductBrand[];
  get_all_slugs(): readonly string[];
  get_by_slug(slug: string): ProductBrand | null;
}
