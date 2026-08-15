/** Construye una URL de WhatsApp (wa.me) a partir de un número, con mensaje opcional. */
export function build_whatsapp_url(number: string, message?: string): string {
  const base = `https://wa.me/${number.replace(/\D/g, "")}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
