import { cn } from "@/shared/lib/cn";
import { Eyebrow } from "@/shared/ui/eyebrow";

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  title_class_name?: string;
}

/** Encabezado de sección: eyebrow + H2 (Sora) + subtítulo opcional. */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
  title_class_name,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2
        className={cn(
          "font-sora text-3xl font-semibold leading-[1.18] tracking-[-0.01em] text-text-primary md:text-[34px]",
          title_class_name,
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p className="max-w-[680px] text-base leading-relaxed text-text-secondary">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
