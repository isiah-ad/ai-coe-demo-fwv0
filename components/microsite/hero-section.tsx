"use client";

import { VideoPlayer } from "./video-player";
import { Globe, Zap, Sparkles } from "lucide-react";

interface HeroSectionProps {
  onTimeUpdate: (time: number) => void;
  seekTo: number | null;
}

export function HeroSection({ onTimeUpdate, seekTo }: HeroSectionProps) {
  return (
    <section className="py-8 md:py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-foreground mb-4 text-balance">
          AI PDF Monitor for FormsWorkflow
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-center text-muted-foreground max-w-2xl mx-auto mb-6 text-pretty">
          Replace manual website watching and legacy monitoring tools. Coral uses AI to
          automatically track, extract, and compare PDF forms across court and government
          websites, saving time and reducing errors.
        </p>

        {/* Quick stats */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Globe className="w-4 h-4 text-accent" />
            <span>Multi-domain support</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Zap className="w-4 h-4 text-accent" />
            <span>Real-time processing</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Sparkles className="w-4 h-4 text-accent" />
            <span>LLM-powered extraction</span>
          </div>
        </div>

        {/* Video player */}
        <div className="relative">
          <div className="absolute -inset-1 bg-accent/10 rounded-xl blur-xl opacity-50" />
          <div className="relative border border-border rounded-lg overflow-hidden shadow-lg">
            <VideoPlayer onTimeUpdate={onTimeUpdate} seekTo={seekTo} />
          </div>
        </div>

        {/* Video caption */}
        <p className="text-center text-sm text-muted-foreground mt-4">
          Watch the full demo above, or explore individual features in the timeline below
        </p>
      </div>
    </section>
  );
}
