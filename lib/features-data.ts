export interface Feature {
  id: string;
  timestamp: string;
  timestampSeconds: number;
  title: string;
  description: string;
  transcriptExcerpt: string;
  screenshotPlaceholder: string;
  screenshotUrl?: string;
  highlights: string[];
}

export const features: Feature[] = [
  {
    id: "form-monitoring",
    timestamp: "0:00",
    timestampSeconds: 0,
    title: "Automated Form Monitoring & Change Detection",
    description: "Never miss a form update again, automatically.",
    transcriptExcerpt:
      "Coral monitors court and government websites across jurisdictions, tracking form PDFs at scale. Teams are alerted the moment something changes.",
    screenshotPlaceholder: "Form Monitoring Dashboard",
    screenshotUrl: "/images/demo-0.jpg",
    highlights: [
      "Continuous URL monitoring",
      "Versioned PDF storage",
      "Change alerts"
    ],
  },
  {
    id: "ai-understanding",
    timestamp: "0:20",
    timestampSeconds: 20,
    title: "AI-Powered Form Understanding",
    description: "Turn raw court PDFs into structured, searchable data.",
    transcriptExcerpt:
      "Using OCR and large language models, Coral extracts form titles, codes, and metadata from unstructured PDFs automatically.",
    screenshotPlaceholder: "AI Form Understanding",
    screenshotUrl: "/images/demo-2.jpg",
    highlights: [
      "OCR text extraction",
      "AI generated metadata",
      "Searchable foundation"
    ],
  },
  {
    id: "change-comparison",
    timestamp: "1:16",
    timestampSeconds: 76,
    title: "Visual & Textual Change Comparison",
    description: "See exactly what changed, down to the line and pixel.",
    transcriptExcerpt:
      "Side by side visual and text comparisons show what was added, removed, or modified between versions. No more guessing if a change matters.",
    screenshotPlaceholder: "Change Comparison View",
    screenshotUrl: "/images/demo-3.jpg",
    highlights: [
      "Side by side PDFs",
      "Text diff summaries",
      "Visual highlights"
    ],
  },
  {
    id: "change-classification",
    timestamp: "2:07",
    timestampSeconds: 127,
    title: "Intelligent Change Classification",
    description: "Not all changes are equal. Coral tells you which ones matter.",
    transcriptExcerpt:
      "Coral classifies change types automatically so teams can prioritize review and response. Replaces manual triage across large form libraries.",
    screenshotPlaceholder: "Change Classification Dashboard",
    screenshotUrl: "/images/demo-1.jpg",
    highlights: [
      "Update detection",
      "Rename identification",
      "Relocation discovery"
    ],
  },
  {
    id: "search-filtering",
    timestamp: "3:30",
    timestampSeconds: 210,
    title: "Search, Filtering & Jurisdiction Intelligence",
    description: "Find the right form instantly by state, jurisdiction, or topic.",
    transcriptExcerpt:
      "Search across thousands of forms using keywords, categories, jurisdictions, or form types. Built for scale.",
    screenshotPlaceholder: "Search & Filtering Interface",
    screenshotUrl: "/images/demo-4.jpg",
    highlights: [
      "Keyword search",
      "Jurisdiction filters",
      "Scales to thousands"
    ],
  },
];
