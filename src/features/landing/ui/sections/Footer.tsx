interface FooterProps {
  dict: {
    description: string;
    foundation: {
      title: string;
      links: string[];
    };
    capabilities: {
      title: string;
      links: string[];
    };
    contact: {
      title: string;
      email: string;
      phone: string;
    };
    copyright: string;
  };
}

export function Footer({ dict }: FooterProps) {
  return (
    <footer className="bg-[#001712] w-full rounded-t-[2rem] mt-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 py-20 max-w-7xl mx-auto">
        <div className="col-span-1 md:col-span-1">
          <div className="text-xl font-bold text-emerald-50 mb-4 font-headline">Kodecol</div>
          <p className="font-manrope text-sm text-emerald-100/60 leading-relaxed mb-6">
            {dict.description}
          </p>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-primary hover:opacity-100 opacity-60 cursor-pointer">share</span>
            <span className="material-symbols-outlined text-primary hover:opacity-100 opacity-60 cursor-pointer">public</span>
            <span className="material-symbols-outlined text-primary hover:opacity-100 opacity-60 cursor-pointer">terminal</span>
          </div>
        </div>
        <div>
          <h5 className="font-headline font-bold text-primary mb-6">{dict.foundation.title}</h5>
          <ul className="space-y-4 font-manrope text-sm text-emerald-100/60">
            {dict.foundation.links.map((link, i) => (
              <li key={i}><a className="hover:text-emerald-400 hover:translate-x-1 transition-all inline-block" href="#">{link}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="font-headline font-bold text-primary mb-6">{dict.capabilities.title}</h5>
          <ul className="space-y-4 font-manrope text-sm text-emerald-100/60">
            {dict.capabilities.links.map((link, i) => (
              <li key={i}><a className="hover:text-emerald-400 hover:translate-x-1 transition-all inline-block" href="#">{link}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="font-headline font-bold text-primary mb-6">{dict.contact.title}</h5>
          <p className="font-manrope text-sm text-emerald-100/60 mb-2">{dict.contact.email}</p>
          <p className="font-manrope text-sm text-emerald-100/60">{dict.contact.phone}</p>
          <div className="mt-8 pt-8 border-t border-emerald-500/10">
            <p className="font-manrope text-xs text-emerald-100/40">{dict.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
