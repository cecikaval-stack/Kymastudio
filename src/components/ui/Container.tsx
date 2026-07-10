import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "header" | "footer";
  narrow?: boolean;
}

export function Container({
  children,
  className,
  as: Component = "div",
  narrow = false,
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto w-full",
        narrow ? "max-w-narrow" : "max-w-editorial",
        className
      )}
    >
      {children}
    </Component>
  );
}
