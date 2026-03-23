import { Button } from "@/shared/ui/Button";

interface CTAProps {
  dict: {
    title_start: string;
    title_accent: string;
    description: string;
    social_badge: string;
    form: {
      first_name: string;
      company: string;
      email: string;
      submit: string;
    };
  };
}

export function CTA({ dict }: CTAProps) {
  return (
    <section className="py-32 container mx-auto px-8">
      <div className="bg-linear-to-r from-primary-container to-surface-container-highest rounded-lg p-12 md:p-24 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[100px] -mr-48 -mt-48"></div>
        <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl md:text-7xl font-headline font-bold mb-8 leading-tight">
              {dict.title_start}<br/><span className="text-primary">{dict.title_accent}</span>
            </h2>
            <p className="text-xl text-on-surface-variant max-w-md mb-12">
              {dict.description}
            </p>
            <div className="flex gap-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full border-2 border-surface bg-surface-container"></div>
                <div className="w-10 h-10 rounded-full border-2 border-surface bg-surface-container"></div>
                <div className="w-10 h-10 rounded-full border-2 border-surface bg-surface-container"></div>
              </div>
              <p className="text-sm font-label uppercase tracking-widest text-primary pt-2">{dict.social_badge}</p>
            </div>
          </div>
          <div className="glass-panel p-8 rounded-lg border border-primary/10">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-label uppercase tracking-widest mb-2 opacity-60">{dict.form.first_name}</label>
                  <input className="w-full bg-surface-container-lowest border-0 rounded-md focus:ring-2 focus:ring-primary/50 py-3 text-on-surface px-4" type="text" />
                </div>
                <div>
                  <label className="block text-xs font-label uppercase tracking-widest mb-2 opacity-60">{dict.form.company}</label>
                  <input className="w-full bg-surface-container-lowest border-0 rounded-md focus:ring-2 focus:ring-primary/50 py-3 text-on-surface px-4" type="text" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-label uppercase tracking-widest mb-2 opacity-60">{dict.form.email}</label>
                <input className="w-full bg-surface-container-lowest border-0 rounded-md focus:ring-2 focus:ring-primary/50 py-3 text-on-surface px-4" type="email" />
              </div>
              <Button variant="primary" className="w-full py-4 rounded-md flex items-center justify-center gap-2 group">
                {dict.form.submit}
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">bolt</span>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
