# Design System Strategy: The Kinetic Monolith

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Kinetic Monolith."** 

This concept balances the heavy, architectural permanence of deep "steel green" tones with the weightless, fluid energy of futuristic software. We are moving away from the "flat web" by embracing a high-end editorial aesthetic characterized by intentional asymmetry, overlapping containers, and extreme typographic contrast. This system is designed to feel like a high-precision instrument—calculated, premium, and infinitely deep. 

To break the "template" look, layouts should avoid perfectly symmetrical grids. Instead, use the spacing scale to create "breathing pockets" and allow hero elements to bleed off the edges or overlap nested containers, creating a sense of three-dimensional space.

---

## 2. Colors & Tonal Depth
The palette is rooted in a "Steel Green" spectrum, moving from the abyssal depth of Forest Green to the electric vibrance of Emerald.

*   **Primary Accent (`#82d7ba` / `#006B54`):** Used for critical calls to action and "active" states. This represents the energy flowing through the system.
*   **Surface Hierarchy:** 
    *   **Base:** `surface` (`#001712`) is our canvas.
    *   **Nesting:** Use `surface_container_low` for secondary sections and `surface_container_highest` (`#003c33`) for high-interaction zones.
*   **The "No-Line" Rule:** 1px solid borders are strictly prohibited for defining sections. Structure must be achieved through tonal shifts (e.g., a `surface_container_low` card sitting on a `surface` background) or via vertical white space (Spacing `16` or `20`).
*   **The "Glass & Gradient" Rule:** Floating UI elements (modals, navigation bars) must utilize Glassmorphism. Use `surface_variant` at 40% opacity with a `backdrop-blur` of 20px. 
*   **Signature Textures:** Apply a global, subtle grain/noise texture (SVG filter or PNG overlay at 5% opacity) over all dark surfaces to simulate the tactile feel of brushed metal and eliminate digital banding.

---

## 3. Typography
The typography system uses a dual-font strategy to balance technical precision with editorial elegance.

*   **Display & Headlines (Space Grotesk):** This is our "Technical Edge." The geometric nature of Space Grotesk should be used at large scales (`display-lg` at 3.5rem) with tight letter-spacing (-0.02em) to command authority.
*   **Body & Titles (Manrope):** Manrope provides a clean, humanistic contrast. Use `body-lg` for long-form content to ensure readability against dark backgrounds.
*   **Editorial Contrast:** Create visual interest by pairing a `display-sm` headline in Space Grotesk with a `label-md` uppercase subtitle in Manrope, using a `3.5` (1.2rem) spacing gap.

---

## 4. Elevation & Depth
Depth in this design system is perceived through atmospheric layering rather than artificial light sources.

*   **The Layering Principle:** Instead of shadows, stack surface tiers. A `surface_container_lowest` element placed inside a `surface_container_high` creates an "etched" or "inset" look, perfect for input fields or data displays.
*   **Ambient Shadows:** For floating elements like the navigation bar or primary CTAs, use an "Emerald Glow." Shadows must be ultra-diffused: `0px 20px 40px`, using a 6% opacity of the `primary` token (`#82d7ba`).
*   **The "Ghost Border" Fallback:** If a container requires definition against a similar tone, use a "Ghost Border": `outline_variant` at 15% opacity. This provides a whisper of a boundary without breaking the fluid aesthetic.
*   **Fluidity:** All transitions between surface states must use a `400ms cubic-bezier(0.22, 1, 0.36, 1)` easing function to mimic the movement of liquid mercury.

---

## 5. Components

### Buttons
*   **Primary:** A "Steel Green" gradient (from `primary` to `primary_container`). Use `rounded-full` and `headline-sm` for the label.
*   **Tertiary:** No background. Use `on_surface` text with an underline that expands from the center on hover.

### Cards & Containers
*   **Style:** Use `rounded-lg` (2rem) for main cards. 
*   **Separation:** Forbid the use of divider lines. Separate content using `surface_container_low` backgrounds or Spacing `8` (2.75rem) gaps. 
*   **Glass Variant:** For hero overlays, use `surface_bright` at 20% opacity with heavy backdrop-blur.

### Input Fields
*   **State:** Default state is `surface_container_lowest`. On focus, the border transitions to a `primary` ghost border (20% opacity) with a subtle outer glow using the `surface_tint`.

### Chips & Tags
*   **Aesthetic:** Use `rounded-md` (1.5rem). Use `secondary_container` for the background and `on_secondary_container` for text. These should feel like "machined" components inset into the UI.

---

## 6. Do's and Don'ts

### Do:
*   **Do** use asymmetrical margins. If a container is centered, try offsetting the inner text to the left by Spacing `6` to create a custom, high-end feel.
*   **Do** use the `primary` emerald color sparingly. It should feel like a rare energy source, not a primary paint.
*   **Do** ensure all text on dark backgrounds maintains a contrast ratio of at least 4.5:1 using the `Light Grey` (`#D9DDE0`) tokens.

### Don't:
*   **Don't** use standard 4px or 8px "web-default" rounded corners. Stick to the provided `md`, `lg`, and `xl` scales to maintain the futuristic silhouette.
*   **Don't** use pure black (`#000000`) for shadows. Always tint shadows with the `background` or `primary` color to maintain the "steel green" atmosphere.
*   **Don't** use horizontal rules (HR tags) to separate sections. Use tonal "blocks" of color.