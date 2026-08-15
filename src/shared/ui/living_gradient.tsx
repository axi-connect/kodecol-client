"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/shared/lib/cn";

/**
 * Gradiente vivo en WebGL: ruido simplex animado, mezcla de color, viñeta y grano.
 * Pensado como capa de ambiente detrás del contenido, nunca como protagonista
 * (DESIGN.md §10: "sutil y con propósito").
 *
 * Degrada con elegancia: si no hay WebGL o el usuario reduce movimiento, no anima
 * y deja ver el fondo CSS que haya debajo.
 */

const VERTEX_SHADER = `
attribute vec2 position;
varying vec2 vUv;
void main() {
  vUv = position * 0.5 + 0.5;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const FRAGMENT_SHADER = `
precision highp float;
varying vec2 vUv;

uniform vec2  u_resolution;
uniform float u_time;
uniform float u_grain;
uniform vec3  u_colors[4];
uniform vec3  u_bg;

vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

float snoise(vec2 v){
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
           -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
  + i.x + vec3(0.0, i1.x, 1.0 ));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
    dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

void main() {
  vec2 uv = vUv;
  float ratio = u_resolution.x / u_resolution.y;
  vec2 p = uv - 0.5;
  p.x *= ratio;

  float t = u_time * 0.1;

  float n1 = snoise(p * 0.4 + vec2(t * 0.2, -t * 0.3));
  float n2 = snoise(p * 0.55 + vec2(-t * 0.15, t * 0.25) + n1 * 0.25);
  float n3 = snoise(p * 0.75 + vec2(t * 0.1, -t * 0.2) + n2 * 0.2);

  vec3 col = u_bg;

  float dist = length(p) * 1.5;
  float vignette = 1.0 - smoothstep(0.3, 1.2, dist);

  col = mix(col, u_colors[0], smoothstep(-0.2, 0.5, n1) * 0.85);
  col = mix(col, u_colors[1], smoothstep(-0.1, 0.6, n2) * 0.7);
  col = mix(col, u_colors[2], smoothstep(-0.3, 0.4, n3) * 0.6);
  col = mix(col, u_colors[3], smoothstep(0.0, 0.7, n1 * n2) * 0.5);

  float glow = smoothstep(0.8, 0.0, dist) * 0.3;
  col += u_colors[1] * glow;

  col = mix(col * 0.2, col, vignette);

  float grain = fract(sin(dot(uv, vec2(12.9898, 78.233))) * 43758.5453 + u_time);
  col += (grain - 0.5) * u_grain * 0.1;

  gl_FragColor = vec4(col, 1.0);
}
`;

/**
 * El gradiente se pinta con tokens del @theme, no con hex sueltos
 * (architecture.md §7). Se resuelven en runtime desde las variables CSS.
 * Ojo: u_colors[1] es además el color del glow central, así que lleva el verde de marca.
 */
const DEFAULT_BG_TOKEN = "--color-bg";
const DEFAULT_COLOR_TOKENS = [
  "--color-green-800",
  "--color-green-600",
  "--color-green-900",
  "--color-green-400",
] as const;

/* Un fondo de ambiente no necesita nitidez: capar el DPR ahorra la mitad de fragmentos. */
const MAX_DPR = 1.5;

interface LivingGradientProps {
  /** Token o hex del color de fondo. */
  bg?: string;
  /** Cuatro tokens o hex que se mezclan sobre el fondo. */
  colors?: readonly string[];
  /**
   * Velocidad de la deriva. El shader vuelve a escalar el tiempo por 0.1, así que
   * por debajo de 1 el movimiento es prácticamente imperceptible.
   */
  speed?: number;
  /** Intensidad del grano de película (0–1). */
  grain?: number;
  className?: string;
  children?: React.ReactNode;
}

const hex_to_rgb = (value: string): [number, number, number] => {
  const hex = value.trim().replace("#", "");
  const full =
    hex.length === 3
      ? hex
          .split("")
          .map((c) => c + c)
          .join("")
      : hex;
  if (full.length < 6) return [0, 0, 0];
  return [
    parseInt(full.slice(0, 2), 16) / 255,
    parseInt(full.slice(2, 4), 16) / 255,
    parseInt(full.slice(4, 6), 16) / 255,
  ];
};

/** Acepta tanto un token del @theme (`--color-x`) como un hex literal. */
const resolve_color = (
  value: string,
  styles: CSSStyleDeclaration,
): [number, number, number] =>
  hex_to_rgb(
    value.startsWith("--") ? styles.getPropertyValue(value) || "#000" : value,
  );

export function LivingGradient({
  bg = DEFAULT_BG_TOKEN,
  colors = DEFAULT_COLOR_TOKENS,
  speed = 2.4,
  grain = 0.25,
  className,
  children,
}: LivingGradientProps) {
  const canvas_ref = useRef<HTMLCanvasElement>(null);
  const container_ref = useRef<HTMLDivElement>(null);

  /* Serializado: un array literal como dependencia recrearía el contexto WebGL
     en cada render del padre. */
  const colors_key = colors.join("|");

  useEffect(() => {
    const canvas = canvas_ref.current;
    const container = container_ref.current;
    if (!canvas || !container) return;

    const gl = canvas.getContext("webgl", {
      antialias: false,
      depth: false,
      stencil: false,
      powerPreference: "low-power",
    });
    if (!gl) return; /* Sin WebGL se ve el fondo CSS de debajo. */

    const compile = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertex = compile(gl.VERTEX_SHADER, VERTEX_SHADER);
    const fragment = compile(gl.FRAGMENT_SHADER, FRAGMENT_SHADER);
    const program = gl.createProgram();
    if (!vertex || !fragment || !program) return;

    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      gl.deleteProgram(program);
      return;
    }
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW,
    );

    const position = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    const uniforms = {
      resolution: gl.getUniformLocation(program, "u_resolution"),
      time: gl.getUniformLocation(program, "u_time"),
      grain: gl.getUniformLocation(program, "u_grain"),
      colors: gl.getUniformLocation(program, "u_colors"),
      bg: gl.getUniformLocation(program, "u_bg"),
    };

    /* Los tokens se leen una vez: el tema es estático (dark-only). */
    const styles = getComputedStyle(document.documentElement);
    const bg_rgb = resolve_color(bg, styles);
    const palette = new Float32Array(
      colors
        .slice(0, 4)
        .flatMap((color) => resolve_color(color, styles)),
    );

    gl.uniform1f(uniforms.grain, grain);
    gl.uniform3f(uniforms.bg, ...bg_rgb);
    gl.uniform3fv(uniforms.colors, palette);

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
      canvas.width = Math.max(1, Math.round(container.clientWidth * dpr));
      canvas.height = Math.max(1, Math.round(container.clientHeight * dpr));
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(uniforms.resolution, canvas.width, canvas.height);
    };

    const draw = (elapsed: number) => {
      gl.uniform1f(uniforms.time, elapsed * 0.001 * speed);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    };

    /* El tiempo se acumula excluyendo las pausas, para que al volver a la
       pestaña el gradiente no dé un salto. Se declara antes del ResizeObserver:
       su callback lo lee, y con movimiento reducido salimos antes de llegar al
       bucle — si se declarara después quedaría en la zona muerta temporal. */
    let elapsed_ms = 0;

    const observer = new ResizeObserver(() => {
      resize();
      draw(elapsed_ms);
    });
    observer.observe(container);
    resize();

    const reduce_motion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    /* Con movimiento reducido se pinta un solo fotograma: el ambiente se
       conserva, la animación no (DESIGN.md §10, architecture.md §7). */
    if (reduce_motion) {
      draw(0);
      return () => {
        observer.disconnect();
        gl.deleteProgram(program);
        gl.deleteShader(vertex);
        gl.deleteShader(fragment);
        gl.deleteBuffer(buffer);
      };
    }

    let last_stamp = 0;
    let frame = 0;
    let running = false;

    const tick = (stamp: number) => {
      elapsed_ms += stamp - (last_stamp || stamp);
      last_stamp = stamp;
      draw(elapsed_ms);
      frame = requestAnimationFrame(tick);
    };

    const start = () => {
      if (running) return;
      running = true;
      last_stamp = 0;
      frame = requestAnimationFrame(tick);
    };

    const stop = () => {
      if (!running) return;
      running = false;
      cancelAnimationFrame(frame);
    };

    /* Fuera de pantalla o con la pestaña oculta no se gasta GPU ni batería. */
    let on_screen = true;
    const visibility = new IntersectionObserver(
      ([entry]) => {
        on_screen = entry.isIntersecting;
        if (on_screen && !document.hidden) start();
        else stop();
      },
      { threshold: 0 },
    );
    visibility.observe(container);

    const on_visibility_change = () => {
      if (!document.hidden && on_screen) start();
      else stop();
    };
    document.addEventListener("visibilitychange", on_visibility_change);

    start();

    return () => {
      stop();
      observer.disconnect();
      visibility.disconnect();
      document.removeEventListener("visibilitychange", on_visibility_change);
      gl.deleteProgram(program);
      gl.deleteShader(vertex);
      gl.deleteShader(fragment);
      gl.deleteBuffer(buffer);
    };
  }, [bg, colors, colors_key, grain, speed]);

  return (
    <div ref={container_ref} className={cn("relative overflow-hidden", className)}>
      <canvas
        ref={canvas_ref}
        aria-hidden
        className="pointer-events-none absolute inset-0 size-full"
      />
      {children ? <div className="relative size-full">{children}</div> : null}
    </div>
  );
}
