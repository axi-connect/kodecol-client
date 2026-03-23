import { Button } from "@/shared/ui/Button";

interface NavbarProps {
  dict: {
    soul: string;
    cause: string;
    growth: string;
    solutions: string;
    cta: string;
  };
}

export function Navbar({ dict }: NavbarProps) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-emerald-950/40 backdrop-blur-xl border-b border-emerald-500/15">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <div className="text-2xl font-black text-emerald-50 dark:text-emerald-400 tracking-tighter font-headline">
          Kodecol
        </div>
        <div className="hidden md:flex gap-10 items-center">
          <a className="font-headline font-bold tracking-tight uppercase text-emerald-100/70 hover:text-emerald-50 transition-colors" href="#soul">{dict.soul}</a>
          <a className="font-headline font-bold tracking-tight uppercase text-emerald-100/70 hover:text-emerald-50 transition-colors" href="#cause">{dict.cause}</a>
          <a className="font-headline font-bold tracking-tight uppercase text-emerald-100/70 hover:text-emerald-50 transition-colors" href="#growth">{dict.growth}</a>
          <a className="font-headline font-bold tracking-tight uppercase text-emerald-100/70 hover:text-emerald-50 transition-colors" href="#solutions">{dict.solutions}</a>
        </div>
        <Button variant="secondary">{dict.cta}</Button>
      </div>
    </nav>
  );
}
