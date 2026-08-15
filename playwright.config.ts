import { defineConfig, devices } from "@playwright/test";

/*
  Configuración E2E: el webServer construye y sirve el sitio real (build + start),
  y los tests corren en desktop y mobile (Pixel 7) para validar el responsive.
  Con E2E_BASE_URL definido se usa un servidor ya levantado (útil para correr
  la suite dentro del contenedor de Playwright contra el host).
*/
const external_base_url = process.env.E2E_BASE_URL;

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: process.env.CI ? "github" : "list",
  use: {
    baseURL: external_base_url ?? "http://localhost:3000",
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "desktop-chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "mobile-chromium",
      use: { ...devices["Pixel 7"] },
    },
  ],
  webServer: external_base_url
    ? undefined
    : {
        command: "pnpm build && pnpm start",
        url: "http://localhost:3000",
        reuseExistingServer: !process.env.CI,
        timeout: 180_000,
      },
});
