# DESIGN.md — Kodecol

> Reglas y dirección de diseño del proyecto.
> Este documento define **cómo pensamos el diseño** (filosofía, principios y reglas de uso).
> Los valores exactos (hex, escalas, tokens, componentes) viven en `DESIGN-SYSTEM.md`.

---

## 1. Filosofía de diseño

El diseño de Kodecol es la traducción visual de su SOUL: **tecnología con proposito, consciente y humana**. No diseñamos para impresionar por impresionar; diseñamos para transmitir **confianza, criterio y futuro**.

Tres ideas guían cada decisión visual:

- **Premium sin ostentación.** Inspiración iOS/Apple: la elegancia nace del espacio, la jerarquía y la contención, no de la acumulación de efectos.
- **Profundidad con propósito.** El glassmorphism y la profundidad existen para organizar información y crear jerarquía, nunca como adorno.
- **Calidez tecnológica.** Somos una fábrica de software, pero humana. El diseño debe sentirse sofisticado *y* cercano, alineado con un tono cálido en español.

> Regla de oro: si un elemento no comunica, no guía o no genera confianza, sobra.

---

## 2. Principios rectores

1. **Menos, pero mejor.** Cada sección defiende su existencia. Antes de añadir, preguntar qué se puede quitar.
2. **El espacio es un elemento de diseño.** El aire (espaciado generoso) es lo que hace que algo se sienta premium. No rellenar por miedo al vacío.
3. **Una jerarquía clara por pantalla.** En cada vista debe quedar obvio qué es lo más importante, qué es secundario y cuál es la acción principal.
4. **Consistencia sobre creatividad puntual.** Es mejor un sistema coherente que una pantalla brillante y diez incoherentes.
5. **El verde manda, pero con disciplina.** El color de marca domina el ambiente; el acento luminoso se reserva para guiar la acción.
6. **Profundidad legible.** Glass, blur y glow se usan solo si mejoran la lectura y la jerarquía. Si compiten con el contenido, se eliminan.
7. **Accesible por defecto.** Contraste, tamaños y áreas táctiles no son opcionales; son parte de “premium”.

---

## 3. Dirección visual

### 3.1 Tema: Oscuro premium
- El tema base es **oscuro**, con un fondo casi-negro de matiz verde (no negro puro, no gris frío).
- El fondo oscuro hace que el verde esmeralda **brille** y que el acento menta funcione como “luz”.
- El blanco se usa con cuidado: superficies de vidrio translúcidas y tipografía off-white, nunca grandes bloques blancos planos.

### 3.2 Estética general
- **Minimalismo iOS/Apple:** composiciones limpias, tipografía protagonista, mucho aire.
- **Glassmorphism:** superficies de vidrio esmerilado para tarjetas, navbar y módulos destacados.
- **Bento design:** secciones clave organizadas en cuadrícula modular tipo “bento box”, donde cada celda cuenta una idea.

---

## 4. Reglas de Glassmorphism

El vidrio es la firma visual de Kodecol. Para que se sienta premium y no “de plantilla”:

**Sí:**
- Usar glass en **navbar, tarjetas destacadas, módulos del bento y modales**.
- Combinar tres ingredientes siempre juntos: **fondo translúcido + desenfoque (blur) + borde sutil luminoso** (hairline claro al 1px).
- Apoyar el vidrio sobre un fondo con textura/gradiente verde para que el desenfoque tenga “algo que difuminar”.
- Añadir un brillo interior muy leve en el borde superior (luz cenital) para dar sensación de cristal.

**No:**
- Nada de glass sobre fondos planos sin nada detrás (se ve sucio, no translúcido).
- No apilar muchas capas de vidrio una sobre otra (genera ruido y baja el contraste del texto).
- No abusar del blur al punto de perder legibilidad del contenido detrás.
- El texto largo de lectura **no** va sobre vidrio muy transparente: si hay párrafos, subir la opacidad de la superficie.

**Regla de capas (profundidad):**
`Fondo (gradiente verde + textura) → Vidrio de superficie → Contenido → Acento/Glow`

---

## 5. Reglas de Bento

El bento organiza la información en módulos de distinto peso, como una caja japonesa: cada compartimento es autónomo pero pertenece a un todo.

- **Una idea por celda.** Cada módulo comunica un solo mensaje (un servicio, una métrica, un beneficio).
- **Jerarquía por tamaño.** La celda más grande contiene lo más importante; las pequeñas, apoyos.
- **Ritmo visual.** Alternar tamaños y proporciones para evitar la monotonía (1 grande + 2 medianas + varias pequeñas).
- **Radios y espacios uniformes.** Todas las celdas comparten el mismo radio de esquina y el mismo gap; la variedad está en el tamaño, no en el estilo.
- **Glass + bento juntos:** las celdas son superficies de vidrio; el conjunto se siente como un panel de control elegante.
- **Mobile:** el bento se reordena a una sola columna, manteniendo la jerarquía de mayor a menor.

---

## 6. Espacio y composición

- **Respiración generosa:** márgenes y paddings amplios. Es preferible que “sobre” espacio a que falte.
- **Cuadrícula:** layout sobre una grilla de 12 columnas con un ancho de contenido máximo (contenedor centrado) para que en pantallas grandes no se estire de borde a borde.
- **Alineación disciplinada:** todo se alinea a la grilla. Nada “flotando” sin razón.
- **Escala vertical (ritmo):** el espacio entre secciones debe ser notablemente mayor que el espacio dentro de una sección, para que el ojo agrupe correctamente.

---

## 7. Uso del color (proporción y rol)

El color no se usa “a gusto”; cada tono tiene un rol.

**Regla 60 / 30 / 10:**
- **60 % — Fondo oscuro** (negro-verde y superficies): el ambiente.
- **30 % — Verdes de marca** (esmeralda / petróleo): identidad, superficies de vidrio teñidas, gradientes.
- **10 % — Acento menta luminoso:** **solo** para guiar — botones primarios (CTA), enlaces activos, glows, indicadores y micro-detalles.

**Reglas:**
- El **acento menta es un recurso escaso.** Si todo brilla, nada brilla. Un CTA principal por sección.
- Los gradientes verdes (esmeralda → petróleo) se usan para fondos de héroe y celdas destacadas, siempre suaves.
- El **glow** (resplandor) se permite alrededor del acento y de elementos focales, sutil, nunca tipo neón saturado.
- Texto siempre en off-white o verdes claros desaturados; nunca verde saturado para párrafos largos.

---

## 8. Tipografía (principios)

- **Dos familias, roles claros:** una para **titulares** (display, con carácter) y **Poppins** para cuerpo y UI.
- **Contraste de jerarquía:** los titulares son grandes y con peso; el cuerpo es ligero y legible. La diferencia de tamaño debe ser evidente, no tímida.
- **Pocos tamaños, bien definidos.** Una escala tipográfica fija (ver `DESIGN-SYSTEM.md`); no inventar tamaños sueltos.
- **Líneas de lectura cómodas:** ancho de párrafo controlado (no líneas larguísimas), interlineado holgado.
- **Mayúsculas con criterio:** se permiten en etiquetas/eyebrows pequeñas con tracking amplio; nunca en párrafos.

---

## 9. Profundidad, sombras y luz

En un tema oscuro, la profundidad **no** se logra con sombras negras (no se ven), sino con **luz**:

- **Elevación = luz.** Cuanto más “elevado” un elemento, más claro su borde superior y más presente su glow.
- **Sombras:** suaves, oscuras y difusas, solo para despegar tarjetas del fondo; nunca sombras duras.
- **Luz focal:** un punto de luz/gradiente detrás del contenido principal del héroe para crear foco (como un foco de escenario).
- **Bordes hairline:** líneas de 1px semitransparentes (claras) que definen las superficies de vidrio.

---

## 10. Movimiento y animación (principios)

- **Sutil y con propósito.** La animación confirma acciones y guía la atención; no entretiene.
- **Suave y natural:** transiciones con curvas tipo *ease-out*, duraciones cortas (sensación iOS).
- **Micro-interacciones:** hover/press en botones y tarjetas (leve elevación, brillo del borde, cambio de glow).
- **Entrada de secciones:** aparición/desplazamiento leve al hacer scroll, escalonado y discreto.
- **Respetar accesibilidad:** soportar “reducir movimiento”. El sitio debe funcionar perfecto sin animación.

---

## 11. Imágenes, iconografía e ilustración

- **Iconografía:** lineal, fina y uniforme (estilo SF Symbols / outline), coherente en grosor. Acentuada en menta solo cuando aporta jerarquía.
- **Imágenes:** tratamiento oscuro/teñido en verde para que se integren al ambiente; evitar fotos planas tipo stock genérico.
- **Render 3D / abstracto:** el isotipo 3D y elementos abstractos de “cristal/líquido verde” encajan con la estética; usarlos como piezas focales, no como ruido de fondo.
- **Logo:** respetar área de protección y nunca colocarlo sobre fondos que bajen su legibilidad. Versión clara del isotipo sobre fondos oscuros.

---

## 12. Accesibilidad (no negociable)

- **Contraste:** texto principal y elementos de acción deben cumplir contraste AA sobre el fondo oscuro. Ojo con el acento menta sobre superficies claras de vidrio.
- **Tamaño mínimo de toque:** áreas interactivas cómodas para mobile.
- **No depender solo del color:** estados (error, éxito, activo) se refuerzan con icono o texto, no solo con color.
- **Jerarquía semántica:** un solo H1 por página, jerarquía de encabezados correcta.

---

## 13. Do's & Don'ts (resumen rápido)

**Hacer ✅**
- Mucho aire y una jerarquía clara por pantalla.
- Verde de marca como ambiente; menta solo para guiar la acción.
- Glass con fondo, blur y borde luminoso, siempre los tres.
- Bento modular, una idea por celda.
- Animación sutil que confirma y guía.

**Evitar ❌**
- Saturar de acento menta o de glows tipo neón.
- Glass sobre fondos planos o texto largo sobre vidrio muy transparente.
- Bloques blancos grandes y planos (rompen el dark premium).
- Sombras duras y negras como recurso de profundidad.
- Mezclar muchos tamaños tipográficos o radios distintos sin sistema.
- Rellenar el espacio “porque se ve vacío”.

---

## 14. La estética en una frase

> **Un panel de control de cristal verde, oscuro y luminoso: sobrio como Apple, cálido como Kodecol, y con la luz justa para que el visitante sepa exactamente hacia dónde mirar.**

---

## 15. Implementación técnica (mapa concepto → código)

> Sección propia de este repositorio. Los valores exactos viven en `docs/DESIGN-SYSTEM.md`
> y están materializados como tokens en `src/app/globals.css` (`@theme` de Tailwind 4).

| Concepto de diseño | Implementación |
|---|---|
| Tokens de color/espaciado/radios | `@theme` en `src/app/globals.css` — nunca hex sueltos en componentes |
| Tipografías Sora + Poppins | `next/font/google` en `src/app/layout.tsx` → variables `--font-sora` / `--font-poppins` |
| Glass estándar (fondo + blur + borde + luz) | componente `shared/ui/glass_card.tsx` |
| Celdas bento (1×1, 2×1, 2×2) | `shared/ui/bento_cell.tsx` |
| CTA primario / secundario glass / ghost | `shared/ui/button.tsx` (variantes × tamaños) |
| Eyebrow de sección | `shared/ui/eyebrow.tsx` + `shared/ui/section_heading.tsx` |
| Entrada de secciones al hacer scroll | `shared/ui/reveal.tsx` (IntersectionObserver + `data-delay`) |
| Keyframes de marca | `kc-pulse`, `kc-float`, `kc-spin`, `kc-rise` en `globals.css` |
| Gradiente vivo de ambiente (hero) | `shared/ui/living_gradient.tsx` — ruido simplex en WebGL; los colores salen de tokens del `@theme`, no de hex |
| Campo 3D de capturas (marcas propias) | `features/landing/own_brands/brand_marquee.tsx` — plano inclinado en CSS puro, sin JS; keyframes `kc-drift-*` |
| Paleta de una marca invitada | `features/product/brand_theme.ts` → variables `--brand-*` acotadas a `/marcas/[slug]`. Fuera de esa página manda el verde corporativo |
| Navbar pill glass flotante | `shared/ui/navbar.tsx` (+ `navbar_client.tsx` para menú mobile) |
| Botón flotante de WhatsApp | `shared/ui/whatsapp_float.tsx` |
| Reducir movimiento | bloque global `@media (prefers-reduced-motion: reduce)` en `globals.css` |
| Datos de contacto / navegación | `shared/config/site_config.ts` (única fuente) |

**Reglas de oro al codificar:**
- El acento menta (`mint-500`) es escaso: un CTA principal por sección.
- Glass siempre con los tres ingredientes (fondo translúcido + blur + borde hairline) y sobre un fondo con gradiente/textura.
- No apilar capas de `backdrop-filter` (coste GPU + ruido visual).
- Mobile-first: el bento colapsa a 1 columna manteniendo jerarquía de mayor a menor.
