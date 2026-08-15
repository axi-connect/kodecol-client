interface WhatsappIconProps {
  size?: number;
  className?: string;
}

/** Ícono lineal de WhatsApp (outline, coherente con la iconografía del sistema). */
export function WhatsappIcon({ size = 22, className }: WhatsappIconProps) {
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
      <path d="M21 11.5a8.5 8.5 0 0 1-12.3 7.6L3 21l1.9-5.7A8.5 8.5 0 1 1 21 11.5Z" />
      <path d="M9.2 8.9c.2-.5.4-.5.7-.5h.5c.2 0 .4 0 .5.4.2.5.6 1.6.6 1.7 0 .1.1.3 0 .4-.1.2-.2.3-.3.5-.2.2-.3.3-.2.5.1.2.6 1 1.3 1.6.9.8 1.6 1 1.9 1.1.2.1.4 0 .5-.1l.7-.8c.2-.2.3-.2.6-.1l1.5.7c.2.1.4.2.4.3 0 .2 0 .7-.3 1.2-.2.5-1.2 1-1.7 1-.4 0-1 .2-3.3-.8-2.8-1.2-4.5-4-4.6-4.2-.1-.2-1-1.4-1-2.7 0-1.2.6-1.8.8-2.2Z" />
    </svg>
  );
}
