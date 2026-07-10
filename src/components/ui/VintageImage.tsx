import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/utils";

interface VintageImageProps extends Omit<ImageProps, "className"> {
  className?: string;
  imageClassName?: string;
}

export function VintageImage({
  className,
  imageClassName,
  alt,
  ...props
}: VintageImageProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image
        alt={alt}
        className={cn("vintage-photo object-cover", imageClassName)}
        {...props}
      />
      <div className="vintage-grain pointer-events-none absolute inset-0" aria-hidden="true" />
    </div>
  );
}
