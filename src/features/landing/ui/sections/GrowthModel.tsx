interface GrowthModelProps {
  dict: {
    title: string;
    subtitle: string;
    cards: {
      title: string;
      description: string;
      icon: string;
    }[];
  };
}

export function GrowthModel({ dict }: GrowthModelProps) {
  return (
    <section id="growth" className="py-32 bg-surface">
      <div className="container mx-auto px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-6xl font-headline font-bold mb-6">{dict.title}</h2>
          <p className="text-on-surface-variant">{dict.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Grow without destroying */}
          <div className="bg-surface-container-high p-10 rounded-lg hover:translate-y-[-10px] transition-transform duration-500 border border-outline-variant/10 flex flex-col justify-between h-[450px]">
            <div>
              <div className="w-16 h-16 bg-primary-container rounded-full flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-on-primary-container text-3xl">{dict.cards[0].icon}</span>
              </div>
              <h3 className="text-3xl font-headline font-bold mb-4">{dict.cards[0].title}</h3>
              <p className="text-on-surface-variant">{dict.cards[0].description}</p>
            </div>
            <div className="h-24 w-full bg-surface-container rounded-lg relative overflow-hidden">
              <div className="absolute inset-y-0 left-0 bg-primary/20 w-3/4 blur-xl"></div>
              <div className="flex items-center h-full px-6 gap-2">
                <div className="h-12 w-2 bg-primary rounded-full"></div>
                <div className="h-8 w-2 bg-primary/60 rounded-full"></div>
                <div className="h-16 w-2 bg-primary rounded-full"></div>
                <div className="h-10 w-2 bg-primary/40 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Card 2: Innovate without forgetting */}
          <div className="bg-primary-container p-10 rounded-lg hover:translate-y-[-10px] transition-transform duration-500 text-on-primary-container flex flex-col justify-between h-[450px]">
            <div>
              <div className="w-16 h-16 bg-surface-container-highest rounded-full flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-primary text-3xl">{dict.cards[1].icon}</span>
              </div>
              <h3 className="text-3xl font-headline font-bold mb-4">{dict.cards[1].title}</h3>
              <p className="opacity-80">{dict.cards[1].description}</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-5xl font-black font-headline opacity-30">01</span>
              <div className="h-px grow bg-on-primary-container/20"></div>
              <span className="material-symbols-outlined">api</span>
            </div>
          </div>

          {/* Card 3: Advance without losing humanity */}
          <div className="bg-surface-container-high p-10 rounded-lg hover:translate-y-[-10px] transition-transform duration-500 border border-outline-variant/10 flex flex-col justify-between h-[450px]">
            <div>
              <div className="w-16 h-16 bg-secondary-container rounded-full flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-on-secondary-container text-3xl">{dict.cards[2].icon}</span>
              </div>
              <h3 className="text-3xl font-headline font-bold mb-4">{dict.cards[2].title}</h3>
              <p className="text-on-surface-variant">{dict.cards[2].description}</p>
            </div>
            <div className="flex -space-x-4">
              <div className="w-12 h-12 rounded-full border-4 border-surface bg-primary/20"></div>
              <div className="w-12 h-12 rounded-full border-4 border-surface bg-primary/40"></div>
              <div className="w-12 h-12 rounded-full border-4 border-surface bg-primary/60"></div>
              <div className="w-12 h-12 rounded-full border-4 border-surface bg-primary flex items-center justify-center text-on-primary">
                <span className="material-symbols-outlined text-sm">add</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
