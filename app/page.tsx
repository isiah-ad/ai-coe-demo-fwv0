"use client";

import { useState } from "react";
import Image from "next/image";
import { HeroSection } from "@/components/microsite/hero-section";
import { FeatureTimeline } from "@/components/microsite/feature-timeline";

export default function Home() {
  const [currentVideoTime, setCurrentVideoTime] = useState(0);
  const [seekTo, setSeekTo] = useState<number | null>(null);

  const handleTimeUpdate = (time: number) => {
    setCurrentVideoTime(time);
  };

  const handleSeekToTimestamp = (seconds: number) => {
    setSeekTo(seconds);
    // Reset after seeking
    setTimeout(() => setSeekTo(null), 100);
    // Scroll to video
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Logo */}
      <header className="py-8 px-4">
        <div className="max-w-6xl mx-auto flex justify-center">
          <Image
            src="/images/aderant-a-logo-full-white.png"
            alt="Aderant Logo"
            width={200}
            height={52}
            className="h-10 w-auto invert"
            priority
          />
        </div>
      </header>

      {/* Main content */}
      <main>
        <HeroSection onTimeUpdate={handleTimeUpdate} seekTo={seekTo} />

        <div id="features">
          <FeatureTimeline
            currentVideoTime={currentVideoTime}
            onSeekToTimestamp={handleSeekToTimestamp}
          />
        </div>

      </main>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            2026 Copyright All Rights Reserved Aderant Holdings, Inc.
          </p>
        </div>
      </footer>
    </div>
  );
}
