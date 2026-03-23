import Image from "next/image";

interface SoulProps {
  dict: {
    title_start: string;
    title_accent: string;
    description: string;
    efficiency_value: string;
    efficiency_label: string;
    items: {
      title: string;
      description: string;
      icon: string;
    }[];
  };
}

export function Soul({ dict }: SoulProps) {
  return (
    <section id="soul" className="py-32 bg-surface-container-low relative">
      <div className="container mx-auto px-8 grid md:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div className="w-full aspect-square rounded-lg bg-surface-container-highest overflow-hidden relative">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeyn8-DsqYUlItHxiSvp28u3BPO39iYKTv4u3wZ0T3TTjT3MGUeieM-wd_ErhUFJtl2zhw6y53FhI8-Goasa5uSvxYEm4LqXANyrqikkhe7ldjEUbzJr3imeZvIEY8ifv3Fej2B2UhCv5gHZAh8YYJD4sriXhsH5ntjMCr_BHgi1zXQtFsYAtnEqRfrhZF3lmzr2e5MmtF-4HFsXfsBwGo2Gb1OPkDY2gmEjfjM9OST2YxAemYoaJm3te9Vk2p5zDouGDrYdo_XMrR"
              alt="Futuristic digital network"
              fill
              className="object-cover mix-blend-overlay opacity-60"
            />
            <div className="absolute inset-0 bg-linear-to-t from-surface-container-low to-transparent"></div>
          </div>
          <div className="absolute -bottom-10 -right-10 glass-panel p-8 rounded-lg max-w-xs hidden lg:block border border-primary/10">
            <p className="text-primary font-headline text-3xl font-bold mb-2">{dict.efficiency_value}</p>
            <p className="text-sm text-on-surface-variant font-medium">{dict.efficiency_label}</p>
          </div>
        </div>
        <div>
          <h2 className="text-4xl md:text-6xl font-headline font-bold mb-8 leading-tight">
            {dict.title_start}<span className="text-primary">{dict.title_accent}</span>
          </h2>
          <p className="text-lg text-on-surface-variant leading-relaxed mb-10">
            {dict.description}
          </p>
          <ul className="space-y-6">
            {dict.items.map((item, index) => (
              <li key={index} className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary mt-1">{item.icon}</span>
                <div>
                  <h4 className="font-headline font-bold text-xl">{item.title}</h4>
                  <p className="text-on-surface-variant text-sm">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
