interface CurvedDividerProps {
  flip?: boolean;
  color?: string;
  className?: string;
}

export function CurvedDivider({
  flip = false,
  color = "#FAF8F4",
  className,
}: CurvedDividerProps) {
  return (
    <div
      className={`relative h-16 w-full md:h-24 ${flip ? "rotate-180" : ""} ${className ?? ""}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <path
          d="M0 40 C 360 80, 720 0, 1080 40 S 1440 80, 1440 40 L 1440 80 L 0 80 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
