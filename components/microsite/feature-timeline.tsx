"use client";

import { useState } from "react";
import { features } from "@/lib/features-data";
import { TimelineEntry } from "./timeline-entry";
import { List } from "lucide-react";

interface FeatureTimelineProps {
  currentVideoTime: number;
  onSeekToTimestamp: (seconds: number) => void;
}

export function FeatureTimeline({
  currentVideoTime,
  onSeekToTimestamp,
}: FeatureTimelineProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Find which feature corresponds to current video time
  const getCurrentFeatureIndex = () => {
    for (let i = features.length - 1; i >= 0; i--) {
      if (currentVideoTime >= features[i].timestampSeconds) {
        return i;
      }
    }
    return 0;
  };

  const currentFeatureIndex = getCurrentFeatureIndex();

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
            <List className="w-5 h-5 text-accent" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-foreground">
              Feature Timeline
            </h2>
            <p className="text-sm text-muted-foreground">
              Click any feature to see details and jump to that section in the video
            </p>
          </div>
        </div>

        {/* Timeline entries */}
        <div className="relative">
          {features.map((feature, index) => (
            <TimelineEntry
              key={feature.id}
              feature={feature}
              index={index}
              isActive={activeIndex === index || currentFeatureIndex === index}
              onHover={() => setActiveIndex(index)}
              onLeave={() => setActiveIndex(null)}
              onSeekToTimestamp={onSeekToTimestamp}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
