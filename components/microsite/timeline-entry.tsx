"use client";

import React from "react"
import Image from "next/image";
import { useState } from "react";
import type { Feature } from "@/lib/features-data";
import {
  ChevronRight,
  Monitor,
  FileText,
  Radar,
  Brain,
  GitCompare,
  Tags,
  Search,
  ZoomIn
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const iconMap = {
  Radar,
  Brain,
  GitCompare,
  Tags,
  Search,
};

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
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleJumpToVideo = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSeekToTimestamp(feature.timestampSeconds);
  };

  const handleImageClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxOpen(true);
  };

  const FeatureIcon = iconMap[feature.icon];

  return (
    <>
      <div
        className="relative group"
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
      >
        {/* Timeline connector line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />

        {/* Entry container */}
        <div
          className={`relative pl-16 pr-4 py-4 cursor-pointer transition-all duration-300 ${isActive || isExpanded
            ? "bg-card border border-border rounded-lg ml-2 mr-2"
            : "hover:bg-card/50"
            }`}
          onClick={handleClick}
        >
          {/* Timeline dot */}
          <div
            className={`absolute left-4 top-6 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${isActive || isExpanded
              ? "bg-accent border-accent scale-110"
              : "bg-background border-border"
              }`}
          >
            <div
              className={`w-2 h-2 rounded-full transition-all ${isActive || isExpanded ? "bg-accent-foreground" : "bg-muted-foreground/50"
                }`}
            />
          </div>

          {/* Header row */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              {/* Title with icon */}
              <div className="flex items-center gap-2 mb-2">
                {FeatureIcon && (
                  <FeatureIcon className="w-5 h-5 text-accent flex-shrink-0" />
                )}
                <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                  {feature.title}
                </h3>
              </div>

              {/* Short description */}
              <p className="text-base text-muted-foreground mb-2">
                {feature.description}
              </p>

              {/* Highlights inline */}
              {feature.highlights && (
                <div className="flex flex-wrap gap-2">
                  {feature.highlights.map((highlight, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full">
                      {highlight}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Expand indicator */}
            <ChevronRight
              className={`w-5 h-5 text-muted-foreground flex-shrink-0 mt-1 transition-transform duration-300 ${isExpanded ? "rotate-90" : ""
                }`}
            />
          </div>

          {/* Expanded content */}
          <div
            className={`overflow-hidden transition-all duration-300 ${isExpanded ? "max-h-[800px] opacity-100 mt-4" : "max-h-0 opacity-0"
              }`}
          >
            <div className="flex flex-col lg:flex-row gap-4 pt-4 border-t border-border">
              {/* Screenshot */}
              <div
                className="lg:w-1/2 bg-muted rounded-lg overflow-hidden relative group/screenshot border border-border cursor-zoom-in"
                onClick={handleImageClick}
              >
                {feature.screenshotUrl ? (
                  <>
                    <Image
                      src={feature.screenshotUrl || "/placeholder.svg"}
                      alt={feature.screenshotPlaceholder}
                      width={800}
                      height={600}
                      className="w-full h-auto object-contain"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover/screenshot:bg-black/20 transition-all flex items-center justify-center">
                      <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover/screenshot:opacity-100 transition-opacity" />
                    </div>
                  </>
                ) : (
                  <div className="aspect-video flex flex-col items-center justify-center">
                    <Monitor className="w-12 h-12 text-muted-foreground/40 mb-2" />
                    <p className="text-sm text-muted-foreground">{feature.screenshotPlaceholder}</p>
                  </div>
                )}
              </div>

              {/* Transcript excerpt */}
              <div className="lg:w-1/2 flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <FileText className="w-4 h-4 text-accent" />
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    Feature Explanation
                  </span>
                </div>
                {/* Mobile/Tablet text */}
                <p className="text-sm text-foreground/90 leading-relaxed lg:hidden">
                  {feature.transcriptExcerpt}
                </p>
                {/* Desktop text */}
                <p className="text-sm text-foreground/90 leading-relaxed hidden lg:block">
                  {feature.transcriptExcerptDesktop}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center gap-2">
              {FeatureIcon && (
                <FeatureIcon className="w-5 h-5 text-accent flex-shrink-0" />
              )}
              <DialogTitle>{feature.title}</DialogTitle>
            </div>
            <DialogDescription>{feature.description}</DialogDescription>
          </DialogHeader>

          {/* Large Image */}
          {feature.screenshotUrl && (
            <div className="rounded-lg overflow-hidden border border-border">
              <Image
                src={feature.screenshotUrl}
                alt={feature.screenshotPlaceholder}
                width={1200}
                height={900}
                className="w-full h-auto object-contain"
              />
            </div>
          )}

          {/* Feature Overview */}
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <FileText className="w-4 h-4 text-accent" />
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  Feature Explanation
                </span>
              </div>
              <p className="text-sm text-foreground/90 leading-relaxed">
                {feature.transcriptExcerptDesktop}
              </p>
            </div>

            {/* Highlights */}
            {feature.highlights && (
              <div>
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  Highlights
                </span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {feature.highlights.map((highlight, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full">
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
