"use client";

import { useState } from "react";
import type { ExperienceEntry } from "@/core/domain/developer_profile";
import { cn } from "@/shared/lib/cn";

interface ExperienceTimelineProps {
  entries: readonly ExperienceEntry[];
}

interface TimelineItemProps {
  entry: ExperienceEntry;
  is_first: boolean;
}

function TimelineItem({ entry, is_first }: TimelineItemProps) {
  return (
    <li className="relative pb-10 pl-8 last:pb-0">
      {/* Línea vertical del timeline */}
      <span
        aria-hidden
        className="absolute left-[5px] top-2 h-full w-px bg-border-subtle"
      />
      {/* Punto: el primero (actual) en menta con glow, el resto en verde */}
      <span
        aria-hidden
        className={cn(
          "absolute left-0 top-1.5 size-[11px] rounded-full",
          is_first
            ? "bg-mint-500 shadow-glow-accent-strong"
            : "bg-green-500/70",
        )}
      />
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h3 className="font-sora text-base font-semibold text-text-primary">
          {entry.role}
        </h3>
        <span className="text-sm text-mint-300">· {entry.company}</span>
      </div>
      <p className="mt-1 font-mono text-xs text-text-muted">
        {entry.period}
        {entry.location ? ` · ${entry.location}` : ""}
      </p>
      <p className="mt-3 max-w-[640px] text-sm leading-relaxed text-text-secondary">
        {entry.description}
      </p>
    </li>
  );
}

/**
 * Timeline de experiencia con toggle "Ver X experiencias más" / "Ver menos"
 * (fiel al mockup: las entradas antiguas se colapsan).
 */
export function ExperienceTimeline({ entries }: ExperienceTimelineProps) {
  const [expanded, set_expanded] = useState(false);
  const visible = entries.filter((entry) => entry.initially_visible);
  const hidden = entries.filter((entry) => !entry.initially_visible);
  const shown = expanded ? entries : visible;

  return (
    <div>
      <ol className="mt-10">
        {shown.map((entry, index) => (
          <TimelineItem
            key={`${entry.company}-${entry.period}`}
            entry={entry}
            is_first={index === 0}
          />
        ))}
      </ol>

      {hidden.length > 0 ? (
        <button
          type="button"
          aria-expanded={expanded}
          onClick={() => set_expanded(!expanded)}
          className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-full border border-border-default bg-glass-fill px-6 py-2.5 text-sm font-semibold text-text-primary backdrop-blur-[16px] transition-[border-color,background-color] duration-fast ease-kodecol hover:border-border-accent"
        >
          {expanded
            ? "Ver menos"
            : `Ver ${hidden.length} experiencia${hidden.length === 1 ? "" : "s"} más`}
          <span aria-hidden>{expanded ? "↑" : "↓"}</span>
        </button>
      ) : null}
    </div>
  );
}
