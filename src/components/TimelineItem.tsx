import React from "react";

interface TimelineItemProps {
  title: string;
  subtitle: string;
  period: string;
  description?: string;
  achievements?: string[];
}

export function TimelineItem({
  title,
  subtitle,
  period,
  description,
  achievements,
}: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-12 last:pb-0">
      {/* Timeline line */}
      <div className="absolute left-0 top-2 bottom-0 w-px bg-zinc-800 last:hidden" />
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-[#3b82f6] -translate-x-[3.5px]" />
      
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
          <h3>{title}</h3>
          <span className="text-sm text-zinc-500">{period}</span>
        </div>
        <p className="text-zinc-400 mb-3">{subtitle}</p>
        {description && <p className="text-zinc-300 mb-3">{description}</p>}
        {achievements && achievements.length > 0 && (
          <ul className="space-y-2">
            {achievements.map((achievement, index) => (
              <li key={index} className="text-zinc-300 flex items-start">
                <span className="text-[#3b82f6] mr-2">•</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
