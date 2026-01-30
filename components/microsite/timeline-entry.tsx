"use client";

import React from "react"
import Image from "next/image";
import { useState } from "react";
import type { Feature } from "@/lib/features-data";
import { ChevronRight, Play, Monitor, FileText } from "lucide-react";

interface TimelineEntryProps {
  feature: Feature;
  index: number;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
  onSeekToTimestamp: (seconds: number) => void;
}

export function TimelineEntry({
  feature,
  index,
  isActive,
  onHover,
  onLeave,
  onSeekToTimestamp,
}: TimelineEntryProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleJumpToVideo = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSeekToTimestamp(feature.timestampSeconds);
  };

  return (
    <div
      className="relative group"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Timeline connector line */}
      <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />

      {/* Entry container */}
      <div
        className={`relative pl-16 pr-4 py-4 cursor-pointer transition-all duration-300 ${
          isActive || isExpanded
            ? "bg-card border border-border rounded-lg ml-2 mr-2"
            : "hover:bg-card/50"
        }`}
        onClick={handleClick}
      >
        {/* Timeline dot */}
        <div
          className={`absolute left-4 top-6 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
            isActive || isExpanded
              ? "bg-accent border-accent scale-110"
              : "bg-background border-border"
          }`}
        >
          <div
            className={`w-2 h-2 rounded-full transition-all ${
              isActive || isExpanded ? "bg-accent-foreground" : "bg-muted-foreground/50"
            }`}
          />
        </div>

        {/* Header row */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            {/* Title */}
            <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
              {feature.title}
            </h3>

            {/* Short description */}
            <p className="text-base text-muted-foreground">
              {feature.description}
            </p>
          </div>

          {/* Expand indicator */}
          <ChevronRight
            className={`w-5 h-5 text-muted-foreground flex-shrink-0 mt-1 transition-transform duration-300 ${
              isExpanded ? "rotate-90" : ""
            }`}
          />
        </div>

        {/* Expanded content */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isExpanded ? "max-h-[800px] opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col lg:flex-row gap-4 pt-4 border-t border-border">
            {/* Screenshot */}
            <div className="lg:w-1/2 bg-muted rounded-lg overflow-hidden relative group/screenshot border border-border">
              {feature.screenshotUrl ? (
                <Image
                  src={feature.screenshotUrl || "/placeholder.svg"}
                  alt={feature.screenshotPlaceholder}
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain"
                />
              ) : (
                <div className="aspect-video flex flex-col items-center justify-center">
                  <Monitor className="w-12 h-12 text-muted-foreground/40 mb-2" />
                  <p className="text-sm text-muted-foreground">{feature.screenshotPlaceholder}</p>
                </div>
              )}
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover/screenshot:opacity-100 transition-opacity pointer-events-none" />
            </div>

            {/* Transcript excerpt */}
            <div className="lg:w-1/2 flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <FileText className="w-4 h-4 text-accent" />
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  Feature Explanation
                </span>
              </div>
              <p className="text-sm text-foreground/90 leading-relaxed mb-4">
                {feature.transcriptExcerpt}
              </p>

              {/* Highlights */}
              {'highlights' in feature && feature.highlights && (
                <div className="mt-auto">
                  <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2">Highlights</h4>
                  <ul className="space-y-1.5">
                    {feature.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-foreground/80 flex items-start gap-2">
                        <span className="text-accent mt-0.5">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
