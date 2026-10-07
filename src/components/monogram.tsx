// The only graphic mark in the system: a 16px circle outline with the initial.
export function Monogram() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      aria-hidden="true"
      className="text-ink"
    >
      <circle cx="9" cy="9" r="8.25" fill="none" stroke="currentColor" strokeWidth="1" />
      <text
        x="9"
        y="12.4"
        textAnchor="middle"
        fontSize="9.5"
        fontFamily="system-ui, -apple-system, sans-serif"
        fill="currentColor"
      >
        D
      </text>
    </svg>
  );
}
