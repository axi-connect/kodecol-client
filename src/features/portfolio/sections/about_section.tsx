import type { DeveloperProfile } from "@/core/domain/developer_profile";
import { Eyebrow } from "@/shared/ui/eyebrow";
import { Reveal } from "@/shared/ui/reveal";

interface AboutSectionProps {
  profile: DeveloperProfile;
}

/** Sobre mí: eyebrow + párrafo grande directo, sin tarjeta (fiel al mockup). */
export function AboutSection({ profile }: AboutSectionProps) {
  return (
    <section className="px-6 py-16 md:py-20">
      <div className="mx-auto flex max-w-[820px] flex-col gap-6">
        <Reveal>
          <Eyebrow>Sobre mí</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <p className="text-lg font-medium leading-relaxed text-text-primary md:text-xl">
            {profile.about}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
