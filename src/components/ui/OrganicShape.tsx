interface OrganicShapeProps {
  className?: string;
  color?: string;
}

export function OrganicShape({
  className,
  color = "#E7DCCF",
}: OrganicShapeProps) {
  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M200 20 C 320 40, 380 140, 360 240 S 280 380, 180 360 S 40 280, 60 160 S 80 0, 200 20 Z"
        fill={color}
        opacity="0.4"
      />
    </svg>
  );
}
