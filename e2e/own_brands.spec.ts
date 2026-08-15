import { expect, test } from "@playwright/test";

/* Marcas propias: la sección de la landing y la página de detalle de cada producto. */

test.describe("marcas propias", () => {
  test("la landing muestra la sección con la tarjeta de Axi Connect", async ({
    page,
  }) => {
    await page.goto("/");
    const section = page.locator("#marcas");
    await expect(section).toBeVisible();
    await expect(
      section.getByRole("heading", { name: /también construimos lo nuestro/i }),
    ).toBeVisible();
    await expect(section.getByText("Axi Connect")).toBeVisible();
    await expect(section.getByText("El futuro es")).toBeVisible();
  });

  test("la tarjeta lleva a la página de la marca", async ({ page }) => {
    await page.goto("/");
    await page
      .locator("#marcas")
      .getByRole("link", { name: /Axi Connect/i })
      .click();
    await expect(page).toHaveURL(/\/marcas\/axi-connect$/);
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      "Axi Connect",
    );
  });

  test("la página de la marca trae su contenido y sus dos salidas", async ({
    page,
  }) => {
    await page.goto("/marcas/axi-connect");

    /* Las secciones que solo existen aquí: el criterio de ingeniería */
    await expect(page.getByText(/el dato no pasa por ahí/i)).toBeVisible();
    await expect(page.getByText("88")).toBeVisible();
    await expect(page.getByText(/Joao's Burguer/)).toBeVisible();

    /* Cierre a dos puertas: una al producto, otra a Kodecol */
    const to_product = page.getByRole("link", { name: "Conocer Axi Connect" });
    await expect(to_product).toHaveAttribute("href", "https://axi-connect.co");
    await expect(to_product).toHaveAttribute("target", "_blank");
    await expect(
      page.getByRole("link", { name: "Construyamos el tuyo" }),
    ).toHaveAttribute("href", "/#cotizaciones");
  });

  test("la página aplica el tema de la marca, no el de Kodecol", async ({
    page,
  }) => {
    await page.goto("/marcas/axi-connect");
    /* El tema entra como variables CSS acotadas al árbol de la plantilla */
    const accent = await page.evaluate(() => {
      const root = document.querySelector<HTMLElement>("[style*='--brand-accent']");
      return root ? getComputedStyle(root).getPropertyValue("--brand-accent").trim() : null;
    });
    expect(accent).toBe("#fb7185");
  });

  test("la top bar vuelve a marcas propias de la landing", async ({ page }) => {
    await page.goto("/marcas/axi-connect");
    await page
      .getByRole("link", { name: "Volver a marcas propias" })
      .click();
    await expect(page).toHaveURL(/\/#marcas$/);
  });

  test("un slug desconocido responde 404", async ({ page }) => {
    const response = await page.goto("/marcas/no-existe");
    expect(response?.status()).toBe(404);
  });
});
