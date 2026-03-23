import { getDictionary, Locale, hasLocale } from "@/features/landing/infrastructure/get-dictionary";
import { LandingPage } from "@/features/landing/ui/LandingPage";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  
  if (!hasLocale(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang as Locale);

  return <LandingPage dict={dict} lang={lang as Locale} />;
}
