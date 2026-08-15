import type { LineIconName } from "@/shared/ui/line_icon";

export interface Differentiator {
  icon: LineIconName;
  title: string;
  description: string;
}

export interface WhyKodecolContent {
  eyebrow: string;
  title_line_1: string;
  title_line_2: string;
  subtitle: string;
  differentiators: readonly Differentiator[];
}
