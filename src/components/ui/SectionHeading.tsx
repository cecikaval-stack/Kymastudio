import { cn } from "@/lib/utils";
import { WaveLine } from "./WaveLine";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 sm:mb-16 md:mb-20",
        align === "center" && "text-center",
        className
      )}
    >
      {label && (
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-mediterranean">
          {label}
        </p>
      )}
      <h2 className="font-serif text-[1.75rem] leading-[1.12] tracking-tight text-charcoal sm:text-4xl md:text-5xl lg:text-[3.5rem] text-balance">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-6 max-w-2xl text-base leading-[1.75] text-charcoal/65 md:text-lg",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
      <div className={cn("mt-8", align === "center" && "flex justify-center")}>
        <WaveLine color="#3F78A8" />
      </div>
    </div>
  );
}
