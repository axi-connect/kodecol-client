interface ProblemSolutionProps {
  dict: {
    problem: {
      badge: string;
      title: string;
      items: string[];
    };
    solution: {
      badge: string;
      title: string;
      items: string[];
    };
  };
}

export function ProblemSolution({ dict }: ProblemSolutionProps) {
  return (
    <section id="solutions" className="py-32 bg-surface-container-lowest">
      <div className="container mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-px bg-outline-variant/20 rounded-xl overflow-hidden border border-outline-variant/20 shadow-2xl">
          {/* Problem */}
          <div className="bg-surface p-12 md:p-20">
            <span className="text-error font-label text-xs uppercase tracking-widest mb-6 block">{dict.problem.badge}</span>
            <h3 className="text-4xl font-headline font-bold mb-8">{dict.problem.title}</h3>
            <div className="space-y-6">
              {dict.problem.items.map((item, index) => (
                <div key={index} className={`flex items-center gap-4 p-4 rounded-lg bg-error-container/10 border border-error/10 ${index === 1 ? 'opacity-70' : index === 2 ? 'opacity-40' : ''}`}>
                  <span className="material-symbols-outlined text-error">dangerous</span>
                  <span className="text-on-surface-variant font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Solution */}
          <div className="bg-surface-container-highest p-12 md:p-20 relative">
            <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full"></div>
            <span className="text-primary font-label text-xs uppercase tracking-widest mb-6 block">{dict.solution.badge}</span>
            <h3 className="text-4xl font-headline font-bold mb-8">{dict.solution.title}</h3>
            <div className="space-y-6 relative z-10">
              {dict.solution.items.map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-primary/10 border border-primary/20">
                  <span className="material-symbols-outlined text-primary">auto_awesome</span>
                  <span className="text-on-surface font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
