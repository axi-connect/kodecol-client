import { Button } from "@/shared/ui/Button";

interface HeroProps {
  dict: {
    badge: string;
    title_start: string;
    title_accent: string;
    description: string;
    cta_primary: string;
    cta_secondary: string;
  };
}

export function Hero({ dict }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-linear-to-br from-surface via-primary-container/20 to-surface"></div>
      <div className="container mx-auto px-8 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="max-w-2xl">
          <span className="inline-block px-4 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label text-xs uppercase tracking-[0.2em] mb-6">
            {dict.badge}
          </span>
          <h1 className="text-5xl md:text-8xl font-headline font-bold leading-tight tracking-tighter text-glow mb-8">
            {dict.title_start}<span className="text-primary">{dict.title_accent}</span>
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant font-light leading-relaxed mb-12">
            {dict.description}
          </p>
          <div className="flex flex-wrap gap-6">
            <Button variant="primary" className="px-8 py-5 text-lg group">
              {dict.cta_primary}
              <span className="material-symbols-outlined align-middle ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Button>
            <Button variant="outline" className="px-8 py-5 text-lg">
              {dict.cta_secondary}
            </Button>
          </div>
        </div>
        <div className="relative flex justify-center">
          <div className="w-72 h-72 md:w-[500px] md:h-[500px] bg-linear-to-tr from-primary/30 to-emerald-400/10 rounded-xl glass-panel flex items-center justify-center transform rotate-12 shadow-2xl relative">
            <div className="absolute inset-0 border border-primary/20 rounded-xl -rotate-6"></div>
            <div className="text-[12rem] md:text-[20rem] font-headline font-black text-primary/80 select-none opacity-50 blur-[2px]">K</div>
            <div className="absolute text-[12rem] md:text-[20rem] font-headline font-black text-primary drop-shadow-2xl">K</div>
          </div>
        </div>
      </div>
    </section>
  );
}
