import { Locale } from "../infrastructure/get-dictionary";
import { Navbar } from "./sections/Navbar";
import { Hero } from "./sections/Hero";
import { Clients } from "./sections/Clients";
import { Soul } from "./sections/Soul";
import { GrowthModel } from "./sections/GrowthModel";
import { ProblemSolution } from "./sections/ProblemSolution";
import { Services } from "./sections/Services";
import { CTA } from "./sections/CTA";
import { Footer } from "./sections/Footer";

interface LandingPageProps {
  dict: any;
  lang: Locale;
}

export function LandingPage({ dict, lang }: LandingPageProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar dict={dict.nav} />
      <Hero dict={dict.hero} />
      <Clients />
      <Soul dict={dict.impact} />
      <GrowthModel dict={dict.growth} />
      <ProblemSolution dict={dict.problem_solution} />
      <Services dict={dict.services} />
      <CTA dict={dict.cta} />
      <Footer dict={dict.footer} />
    </div>
  );
}
