# architecture.md — Kodecol Web

> Reglas del proyecto. **Leer siempre antes de desarrollar cualquier feature.**
> Documentación en español · código técnico (funciones, variables, archivos, clases) en inglés.

---

## 1. Mapa del proyecto

```
src/app/          Composition root de Next.js (App Router). Solo orquesta: cada page.tsx importa
                  secciones de features/ y las apila. Aquí viven layout, globals.css, rutas y SEO.
src/core/         Hexágono — dominio y puertos. TypeScript puro: CERO imports de React/Next/zod.
  domain/         Modelos de dominio (ej. DeveloperProfile, ProductBrand).
  ports/          Interfaces de repositorio (ej. DeveloperProfileRepository).
src/adapters/     Implementaciones de puertos (lado driven). Conocen zod y la fuente de datos
                  (hoy JSON local; mañana un CMS). Exportan una factoría por puerto.
src/features/     Vertical slices. Cada slice = componentes + content.ts + types.ts propios.
  landing/        Un slice por sección de la landing (hero — incluye la trust bar —, services,
                  why_kodecol, own_brands, team, final_cta).
  portfolio/      UNA plantilla polimórfica que recibe DeveloperProfile por props.
  product/        UNA plantilla polimórfica que recibe ProductBrand por props (marcas propias).
src/shared/       Design system y utilidades transversales. No conoce el negocio.
  ui/             Componentes reutilizables (glass_card, button, reveal, navbar, ...).
                  También el destino de las primitivas de shadcn (ver §9).
  config/         site_config.ts (WhatsApp, nav, metadata base).
  lib/            Helpers puros (cn, build_whatsapp_url).
content/          Datos, no código.
  developers/     JSON de perfiles de desarrolladores.
  products/       JSON de marcas propias (Axi Connect, ...).
public/           Assets estáticos (images/, cv/).
scripts/          Utilidades de repo que no forman parte del bundle (ej. generación de assets
                  de marca derivados con sharp). Se ejecutan a mano vía pnpm.
e2e/              Tests end-to-end con Playwright.
docker/           Dockerfile multi-stage + compose.yaml.
docs/             DESIGN-SYSTEM.md (valores exactos de tokens).
```

## 2. Regla de dependencia

```
app ──────────► features ──► core ◄── adapters
 │                  │          ▲
 └──► adapters      └──► shared┘  (shared puede usar tipos de core; nunca al revés)
```

1. `core` no importa **nada** (ni React, ni Next, ni zod).
2. `adapters` solo importa de `core` + libs de infraestructura (zod).
3. `features` importa de `core` y `shared`. **Nunca** de `adapters` ni de otros slices.
   Si dos slices necesitan lo mismo → se promueve a `shared` o `core`.
4. `app` es el único que conoce `adapters`, siempre vía la factoría
   (`get_developer_profile_repository()`); pasa datos de dominio ya validados como props.
5. `shared` no importa de `features` ni `adapters`.

## 3. Naming

| Qué | Convención | Ejemplo |
|---|---|---|
| Archivos y carpetas | `snake_case` | `hero_section.tsx`, `why_kodecol/` |
| Funciones y variables | `snake_case` | `get_by_slug()`, `nav_links` |
| Componentes React | `PascalCase` (requisito JSX) | `HeroSection` |
| Tipos e interfaces | `PascalCase` | `DeveloperProfile` |
| Constantes de contenido | `SCREAMING_SNAKE_CASE` | `HERO_CONTENT` |
| Documentación/comentarios | Español | — |
| Código técnico | Inglés | — |

**Excepciones (nombres reservados de Next.js):** `page.tsx`, `layout.tsx`, `not-found.tsx`,
`sitemap.ts`, `robots.ts`, carpetas de ruta como `[slug]`. Se aceptan tal cual.

## 4. Cómo añadir un slice (receta)

1. Crear carpeta en `src/features/<area>/<slice>/`.
2. Definir `types.ts` con las interfaces del contenido.
3. Crear `content.ts` con el copy tipado (`satisfies`), nunca copy hardcodeado en JSX.
4. Implementar `<slice>_section.tsx` como **server component**, usando `shared/ui`.
5. Componer la sección en el `page.tsx` correspondiente de `src/app/`.

## 5. Server vs Client

**Server component por defecto.** `"use client"` solo se permite por estas razones:
estado local, event handlers, IntersectionObserver, APIs del navegador (mouse, matchMedia).

Regla: **el client component es la hoja, nunca la sección.** Una sección server envuelve
la hoja client mínima (ej. `hero_section.tsx` server → `hero_visual.tsx` client).

Hojas client existentes: `reveal`, `hero_visual`, `living_gradient`, `experience_timeline`,
`navbar_client`.

## 6. Contenido

- **Landing:** copy estático tipado co-locado en cada slice (`content.ts`). El compilador es la validación.
- **Portafolios:** JSON en `content/developers/*.json`, validado con zod en el adaptador
  (`developer_profile_schema.ts`, anclado al tipo de dominio con `z.ZodType<DeveloperProfile>`).
  La validación es fail-fast: un JSON inválido **rompe el build** — es un gate de calidad, no un bug.
- **Marcas propias:** JSON en `content/products/*.json`, mismo patrón que los portafolios
  (`product_brand_schema.ts`, anclado con `z.ZodType<ProductBrand>`).
- Prohibido hardcodear copy en JSX o duplicar datos de contacto: usar `site_config.ts`.
- Añadir un desarrollador nuevo = crear un JSON + foto. Cero cambios de código.
- Añadir una marca propia = crear un JSON + assets + una línea en el adaptador.

### Marca invitada: dónde manda cada color

Una marca propia tiene identidad propia (Axi Connect es coral, no verde). La frontera es dura:

- **Fuera de su página de detalle manda Kodecol.** La sección `#marcas` usa el acento menta;
  la imaginería del producto se pinta en duotono corporativo (`mix-blend-mode: color`, que
  conserva la luminancia y deja leer la captura). Lo único que conserva su color es el isotipo,
  porque es identidad, no una decisión cromática de la sección.
- **Dentro de `/marcas/[slug]` manda el producto.** Su paleta es **contenido**: vive en el JSON,
  la valida zod y se aplica como variables CSS (`--brand-*`) acotadas al árbol de la plantilla
  (`features/product/brand_theme.ts`). Los componentes las consumen como `var(--brand-*)`, así
  que **siguen sin llevar un hex dentro** y la plantilla sirve para cualquier marca futura.
  Es la única excepción a §7, y es acotada: color de marca ≠ design system.

## 7. Design system

- Solo tokens del `@theme` de `globals.css` (vía clases Tailwind). **Nunca hex sueltos en componentes.**
- Reutilizar `shared/ui` antes de crear componentes nuevos.
- **Mobile-first**: estilos base para móvil, `md:`/`lg:` para escalar.
- `prefers-reduced-motion` obligatorio: toda animación debe desactivarse.
- Valores exactos y filosofía: `docs/DESIGN-SYSTEM.md` y `DESIGN.md`.

## 8. Definición de terminado (DoD)

Antes de cerrar cualquier feature:

1. `pnpm build` sin errores (rutas de portfolio como SSG).
2. `pnpm lint` limpio.
3. `pnpm e2e` verde (desktop + mobile).
4. Revisión responsive en 360 px, 768 px y 1280 px.
5. Un solo `<h1>` por página, jerarquía de headings correcta, `alt` en imágenes.

## 9. shadcn/ui

Se puede usar shadcn, **como fuente de primitivas, no como arquitectura**. El repo no adopta su
estructura (`components/ui`, `@/lib/utils`): esa carpeta viviría fuera del hexágono y competiría
con `shared/ui`. En su lugar, `components.json` redirige el CLI a las rutas de este proyecto:

```jsonc
"aliases": {
  "ui":    "@/shared/ui",       // los componentes caen en shared/ui
  "utils": "@/shared/lib/cn",   // `cn` es el nuestro, no se duplica
  "lib":   "@/shared/lib"
}
```

Así, `pnpm dlx shadcn@latest add <componente>` escribe directamente en `src/shared/ui/`.

**Reglas al vendorizar un componente:**

1. **Renombrar el archivo a `snake_case`** (`alert-dialog.tsx` → `alert_dialog.tsx`). El componente
   React se queda en `PascalCase`, como el resto (§3).
2. **Pasarlo por el design system.** Los colores de shadcn ya resuelven a la marca gracias al
   *puente* de `globals.css` (`--color-primary`, `--color-muted`…, alias de los tokens de Kodecol).
   Cualquier valor suelto que traiga —radios, sombras, tamaños— se sustituye por tokens del
   `@theme`. Sigue vigente §7: **nunca hex sueltos en componentes.**
3. **Revisar `"use client"`.** Muchas primitivas de Radix lo traen. Aplica §5: el componente client
   es la hoja; la sección que lo usa sigue siendo server.
4. **Sin lógica de negocio dentro.** Un componente vendorizado es design system: no conoce
   `core`, ni `features`, ni datos. Si necesita comportamiento del negocio, se envuelve desde
   `features/`.
5. **Antes de añadir, mirar si ya existe.** `shared/ui` ya tiene `button`, `glass_card`,
   `bento_cell`, `chip`, `eyebrow`, `navbar`, `reveal`… Vale más extender lo propio que traer un
   equivalente de shadcn y quedarse con dos botones (§7).
6. **Cada componente nuevo trae dependencias** (`@radix-ui/*`, a veces `lucide-react`). Que el CLI
   las instale está bien; revisarlas en el PR también.
