import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "secondary" | "electric" | "outline" | "success";
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "primary",
  className,
  ...props
}) => {
  const variantStyles = {
    primary: "bg-blue-50 text-blue-700 border-blue-200",
    secondary: "bg-slate-100 text-slate-700 border-slate-200",
    electric: "bg-indigo-50 text-indigo-700 border-indigo-200",
    outline: "bg-transparent text-slate-700 border-slate-300",
    success: "bg-emerald-50 text-emerald-700 border-emerald-200"
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
