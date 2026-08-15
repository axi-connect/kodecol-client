"use client";

import { useEffect, useRef } from "react";

interface RevealProps {
  children: React.ReactNode;
  /** Retardo escalonado en ms (60–320 en el mockup). */
  delay?: number;
  className?: string;
}

/**
 * Entrada de sección al hacer scroll (fade + translateY 24px), fiel al mockup:
 * IntersectionObserver con threshold .1 y rootMargin -6%, red de seguridad a los 900 ms
 * y revelado inmediato con prefers-reduced-motion (el estado inicial vive en globals.css).
 */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const show = () => node.setAttribute("data-reveal", "visible");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      show();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            show();
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" },
    );
    observer.observe(node);

    /* Red de seguridad: nada queda oculto si el observer no dispara */
    const fallback = window.setTimeout(show, 900);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <div
      ref={ref}
      data-reveal=""
      className={className}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
