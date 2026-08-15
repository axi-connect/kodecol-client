import type { TeamContent } from "./types";

/* Copy fiel al mockup (sección #equipo, "LA CREW"). */
export const TEAM_CONTENT = {
  eyebrow: "La crew",
  title: "Las personas que construyen futuro.",
  subtitle:
    "Detrás de cada solución hay un equipo humano. Cada desarrollador tiene su propio espacio: su historia, su experiencia y los proyectos que ha hecho realidad.",
  members: [
    {
      slug: "cristian-velasquez",
      name: "Cristian David Velásquez",
      role: "Full Stack · Líder técnico",
      bio: "Automatización, IA y arquitectura cloud. 4+ años construyendo sistemas que importan.",
      chips: ["Python", "Node / TS", "React", "IA", "Cloud"],
      photo_src: "/images/team/cristian_hero.png",
    },
    {
      slug: "juan",
      name: "Juan David Herrera",
      role: "Desarrollador Web · Front-End",
      bio: "Front-end con Angular y back-end robusto. Scrum Master certificado, enfocado en la mejora continua.",
      chips: ["Angular", "Laravel", "PHP", "Node", "SQL"],
      photo_src: null,
    },
  ],
  join_lead: "¿Eres desarrollador/a y compartes el crecimiento consciente? ",
  join_emphasis: "Únete a la crew →",
} as const satisfies TeamContent;
