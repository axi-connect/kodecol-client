import type { Metadata } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import "../globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kodecol | Ingenieria para la Evolución Consciente",
  description: "Crecimiento con Propósito. Diseñamos software que respira, evoluciona y prioriza el impacto humano por encima del código.",
  icons: {
    icon: "/favicon.ico",
  },
};

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <html
      lang={lang}
      className={`${spaceGrotesk.variable} ${manrope.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col relative overflow-x-hidden bg-surface text-on-surface">
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  );
}
