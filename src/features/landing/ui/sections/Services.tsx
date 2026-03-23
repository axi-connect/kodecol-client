import Image from "next/image";

interface ServicesProps {
  dict: {
    title: string;
    subtitle: string;
    manifest_cta: string;
    list: {
      title: string;
      description: string;
      image: string;
    }[];
  };
}

export function Services({ dict }: ServicesProps) {
  return (
    <section id="services" className="py-32">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-6xl font-headline font-bold mb-4">{dict.title}</h2>
            <p className="text-on-surface-variant">{dict.subtitle}</p>
          </div>
          <button className="text-primary font-headline font-bold underline decoration-2 underline-offset-8 hover:decoration-primary-container transition-all cursor-pointer">
            {dict.manifest_cta}
          </button>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {dict.list.map((service, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-lg mb-8 aspect-video">
                <Image 
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                />
              </div>
              <h4 className="text-2xl font-headline font-bold mb-4">{service.title}</h4>
              <p className="text-on-surface-variant leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
