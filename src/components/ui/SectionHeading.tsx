import React from "react";
import { Badge } from "./Badge";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  isDark?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = "center",
  isDark = false,
  className
}) => {
  return (
    <div
      className={cn(
        "space-y-3",
        align === "center" ? "text-center mx-auto max-w-3xl" : "text-left max-w-2xl",
        className
      )}
    >
      {eyebrow && (
        <div>
          <Badge
            variant={isDark ? "electric" : "primary"}
            className={isDark ? "bg-indigo-950/70 text-indigo-300 border-indigo-800" : ""}
          >
            {eyebrow}
          </Badge>
        </div>
      )}
      <h2
        className={cn(
          "text-3xl sm:text-4xl font-extrabold tracking-tight",
          isDark ? "text-white" : "text-slate-900"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-base sm:text-lg leading-relaxed",
            isDark ? "text-slate-400" : "text-slate-600"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};
