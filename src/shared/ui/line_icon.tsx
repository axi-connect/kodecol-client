export type LineIconName =
  | "automation"
  | "mobile"
  | "desktop"
  | "web"
  | "ai"
  | "custom"
  | "target"
  | "leaf"
  | "star"
  | "people"
  | "arrow_right"
  | "download"
  | "mail"
  | "pin"
  | "shield_check";

interface LineIconProps {
  name: LineIconName;
  size?: number;
  className?: string;
}

const icon_paths: Record<LineIconName, React.ReactNode> = {
  automation: (
    <>
      <path d="M21 12a9 9 0 1 1-3-6.7" />
      <path d="M21 3v5h-5" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  mobile: (
    <>
      <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
      <path d="M11 18.5h2" />
    </>
  ),
  desktop: (
    <>
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <path d="M9 21h6M12 17v4" />
    </>
  ),
  web: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </>
  ),
  ai: (
    <>
      <path d="M12 3l1.8 4.8L18.6 9.6l-4.8 1.8L12 16.2l-1.8-4.8L5.4 9.6l4.8-1.8Z" />
      <path d="M18.5 15.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8Z" />
    </>
  ),
  custom: (
    <>
      <path d="M12 2.5 21 7l-9 4.5L3 7Z" />
      <path d="M3 12l9 4.5L21 12" />
      <path d="M3 17l9 4.5L21 17" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  leaf: (
    <>
      <path d="M5 19C5 9 11 4 20 4c0 9-5 15-15 15Z" />
      <path d="M5 19c3-5 7-9 11-11" />
    </>
  ),
  star: (
    <path d="M12 3l2.5 6.1 6.5.5-5 4.3 1.6 6.4L12 16.8 6.4 20.3 8 13.9 3 9.6l6.5-.5Z" />
  ),
  people: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <path d="M16 5a3.5 3.5 0 0 1 0 6.7M17.5 14.5c2.1.8 3.5 2.9 3.5 5.5" />
    </>
  ),
  arrow_right: <path d="M4 12h16m-6-6 6 6-6 6" />,
  download: (
    <>
      <path d="M12 3v12m0 0 4-4m-4 4-4-4" />
      <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  shield_check: (
    <>
      <path d="M12 2.8 19.5 5.6v5.9c0 4.3-3 8.2-7.5 9.7-4.5-1.5-7.5-5.4-7.5-9.7V5.6Z" />
      <path d="m8.9 11.9 2.2 2.2 4.1-4.2" />
    </>
  ),
};

/** Iconografía lineal del sistema (outline ~1.8px, esquinas redondeadas). */
export function LineIcon({ name, size = 24, className }: LineIconProps) {
  return (
    <svg
      aria-hidden
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {icon_paths[name]}
    </svg>
  );
}
