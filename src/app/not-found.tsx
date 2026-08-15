import Link from "next/link";
import { Button } from "@/shared/ui/button";
import { KodecolMark } from "@/shared/ui/kodecol_mark";

/** Página 404 con la estética del sistema (nombre reservado de Next; excepción al snake_case). */
export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-6">
      <div className="flex flex-col items-center gap-6 text-center">
        <KodecolMark size={52} glow className="opacity-80" />
        <h1 className="font-sora text-4xl font-bold text-text-primary">
          Página no encontrada
        </h1>
        <p className="max-w-[420px] text-base text-text-secondary">
          La ruta que buscas no existe o fue movida. Volvamos a construir futuro
          desde el inicio.
        </p>
        <Button href="/">Volver al inicio</Button>
        <Link
          href="/#equipo"
          className="text-sm text-mint-500 hover:text-mint-400"
        >
          Conocer a la crew →
        </Link>
      </div>
    </main>
  );
}
