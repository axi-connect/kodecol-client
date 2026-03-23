import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  className?: string;
  onClick?: () => void;
}

export function Button({ children, variant = "primary", className = "", onClick }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center px-6 py-2 rounded-full font-headline font-bold uppercase tracking-widest text-sm transition-all duration-300 active:scale-95 cursor-pointer";
  
  const variants = {
    primary: "bg-primary text-on-primary hover:shadow-[0px_0px_30px_rgba(130,215,186,0.4)]",
    secondary: "bg-primary-container text-on-primary-container shadow-emerald-glow hover:scale-105",
    outline: "border border-outline-variant text-on-surface hover:bg-surface-container-high",
    ghost: "text-on-surface hover:text-primary",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
