export interface Feature {
  id: string;
  timestamp: string;
  timestampSeconds: number;
  title: string;
  description: string;
  transcriptExcerpt: string;
  transcriptExcerptDesktop: string;
  screenshotPlaceholder: string;
  screenshotUrl?: string;
  highlights: string[];
  icon: "Radar" | "Brain" | "GitCompare" | "Tags" | "Search";
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
    transcriptExcerptDesktop:
      "Coral continuously monitors court and government websites across states and jurisdictions, tracking form PDFs at scale. Every form is captured, versioned, and compared over time, so teams are alerted the moment something changes. Instead of manually checking websites or relying on basic uptime monitors, Coral proactively surfaces updated, missing, or relocated forms before they cause downstream issues. This replaces hours of manual work with automated, reliable monitoring.",
    screenshotPlaceholder: "Form Monitoring Dashboard",
    screenshotUrl: "/images/demo-0.jpg",
    highlights: [
      "Continuous URL monitoring",
      "Versioned PDF storage",
      "Change alerts"
    ],
    icon: "Radar",
  },
  {
    id: "ai-understanding",
    timestamp: "0:20",
    timestampSeconds: 20,
    title: "AI-Powered Form Understanding",
    description: "Turn raw court PDFs into structured, searchable data.",
    transcriptExcerpt:
      "Using OCR and large language models, Coral extracts form titles, codes, and metadata from unstructured PDFs automatically.",
    transcriptExcerptDesktop:
      "When a new or updated form is detected, Coral does not just flag it, it understands it. Using OCR and large language models, Coral automatically extracts form titles, form codes, and key metadata from unstructured PDFs. This removes the need for manual tagging and creates a clean, searchable foundation for automation and review. If needed, metadata can be re-extracted in seconds without reprocessing pipelines. The result is structured, actionable data from documents that were previously opaque.",
    screenshotPlaceholder: "AI Form Understanding",
    screenshotUrl: "/images/demo-2.jpg",
    highlights: [
      "OCR text extraction",
      "AI generated metadata",
      "Searchable foundation"
    ],
    icon: "Brain",
  },
  {
    id: "change-comparison",
    timestamp: "1:16",
    timestampSeconds: 76,
    title: "Visual & Textual Change Comparison",
    description: "See exactly what changed, down to the line and pixel.",
    transcriptExcerpt:
      "Side by side visual and text comparisons show what was added, removed, or modified between versions. No more guessing if a change matters.",
    transcriptExcerptDesktop:
      "Coral makes form changes immediately clear with side by side visual and text comparisons. Teams can instantly see what was added, removed, or modified between versions, whether it is updated instructions, revised language, or new processing fees. No more guessing if a change matters. This makes reviews faster, clearer, and defensible. The comparison view highlights differences at both the visual and textual level, giving reviewers complete confidence in understanding what changed.",
    screenshotPlaceholder: "Change Comparison View",
    screenshotUrl: "/images/demo-3.jpg",
    highlights: [
      "Side by side PDFs",
      "Text diff summaries",
      "Visual highlights"
    ],
    icon: "GitCompare",
  },
  {
    id: "change-classification",
    timestamp: "2:07",
    timestampSeconds: 127,
    title: "Intelligent Change Classification",
    description: "Not all changes are equal. Coral tells you which ones matter.",
    transcriptExcerpt:
      "Coral classifies change types automatically so teams can prioritize review and response. Replaces manual triage across large form libraries.",
    transcriptExcerptDesktop:
      "Beyond detecting differences, Coral classifies the type of change automatically. Whether a form was updated with the same name, renamed entirely, or relocated to a new URL, Coral categorizes the change so teams can prioritize review and response. This intelligence replaces manual triage and reduces noise across large form libraries. Teams can focus on the changes that matter most, with clear categorization that speeds up decision making and reduces the risk of missing critical updates.",
    screenshotPlaceholder: "Change Classification Dashboard",
    screenshotUrl: "/images/demo-1.jpg",
    highlights: [
      "Update detection",
      "Rename identification",
      "Relocation discovery"
    ],
    icon: "Tags",
  },
  {
    id: "search-filtering",
    timestamp: "3:30",
    timestampSeconds: 210,
    title: "Search, Filtering & Jurisdiction Intelligence",
    description: "Find the right form instantly by state, jurisdiction, or topic.",
    transcriptExcerpt:
      "Search across thousands of forms using keywords, categories, jurisdictions, or form types. Built for scale.",
    transcriptExcerptDesktop:
      "Coral is built for scale. Teams can search across thousands of forms using keywords, categories, jurisdictions, or form types. Whether you are looking for a specific document or monitoring an entire practice area like family law, Coral makes form discovery fast and intuitive. Advanced filtering options let users narrow down results by state, court type, or document category, ensuring the right form is always just a search away. The system handles large form libraries with ease.",
    screenshotPlaceholder: "Search & Filtering Interface",
    screenshotUrl: "/images/demo-4.jpg",
    highlights: [
      "Keyword search",
      "Jurisdiction filters",
      "Scales to thousands"
    ],
    icon: "Search",
  },
];
