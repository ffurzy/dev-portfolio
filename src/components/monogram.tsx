// The only graphic mark in the system: a rounded rectangle outline with the initials.
export function Monogram() {
  return (
    <svg
      width="60"
      height="40"
      viewBox="0 0 30 20"
      aria-hidden="true"
      className="text-ink"
    >
      <rect
        x="0.75"
        y="0.75"
        width="28.5"
        height="18.5"
        rx="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <text
        x="15"
        y="13.6"
        textAnchor="middle"
        fontSize="9.5"
        letterSpacing="0.2"
        fontFamily="system-ui, -apple-system, sans-serif"
        fill="currentColor"
      >
        DM
      </text>
    </svg>
  );
}
