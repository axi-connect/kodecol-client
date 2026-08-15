import { get_product_brand_repository } from "@/adapters/content";
import { FinalCtaSection } from "@/features/landing/final_cta/final_cta_section";
import { HeroSection } from "@/features/landing/hero/hero_section";
import { OwnBrandsSection } from "@/features/landing/own_brands/own_brands_section";
import { ServicesSection } from "@/features/landing/services/services_section";
import { TeamSection } from "@/features/landing/team/team_section";
import { WhyKodecolSection } from "@/features/landing/why_kodecol/why_kodecol_section";
import { Footer } from "@/shared/ui/footer";
import { Navbar } from "@/shared/ui/navbar";

/**
 * Landing de Kodecol: composición de los slices.
 * Único punto donde app conoce el adaptador; los slices reciben dominio por props.
 */
export default function LandingPage() {
  const brands = get_product_brand_repository().get_all();

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyKodecolSection />
        <OwnBrandsSection brands={brands} />
        <TeamSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}
