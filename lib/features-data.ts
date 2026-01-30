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
    description: "Never miss a form update again—automatically.",
    transcriptExcerpt:
      "Coral continuously monitors court and government websites across states and jurisdictions, tracking form PDFs at scale. Every form is captured, versioned, and compared over time, so teams are alerted the moment something changes. Instead of manually checking websites or relying on basic uptime monitors, Coral proactively surfaces updated, missing, or relocated forms—before they cause downstream issues.",
    screenshotPlaceholder: "Form Monitoring Dashboard",
    screenshotUrl: "/images/demo-0.jpg",
    highlights: [
      "Continuous monitoring of form URLs",
      "Versioned storage of original vs. latest PDFs",
      "Dashboard view of recently changed forms"
    ],
  },
  {
    id: "ai-understanding",
    timestamp: "0:20",
    timestampSeconds: 20,
    title: "AI-Powered Form Understanding",
    description: "Turn raw court PDFs into structured, searchable data.",
    transcriptExcerpt:
      "When a new or updated form is detected, Coral doesn't just flag it—it understands it. Using OCR and large language models, Coral automatically extracts form titles, form codes, and key metadata from unstructured PDFs. This removes the need for manual tagging and creates a clean, searchable foundation for automation and review. If needed, metadata can be re-extracted in seconds—no reprocessing pipelines required.",
    screenshotPlaceholder: "AI Form Understanding",
    screenshotUrl: "/images/demo-2.jpg",
    highlights: [
      "OCR-powered text extraction",
      "AI-generated form titles and identifiers",
      "Structured metadata from unstructured PDFs"
    ],
  },
  {
    id: "change-comparison",
    timestamp: "1:16",
    timestampSeconds: 76,
    title: "Visual & Textual Change Comparison",
    description: "See exactly what changed—down to the line and pixel.",
    transcriptExcerpt:
      "Coral makes form changes immediately clear with side-by-side visual and text comparisons. Teams can instantly see what was added, removed, or modified between versions—whether it's updated instructions, revised language, or new processing fees. No more guessing if a change matters. This makes reviews faster, clearer, and defensible.",
    screenshotPlaceholder: "Change Comparison View",
    screenshotUrl: "/images/demo-3.jpg",
    highlights: [
      "Side-by-side PDF comparisons",
      "Line-level text change summaries",
      "Visual highlights for added and removed content"
    ],
  },
  {
    id: "change-classification",
    timestamp: "2:07",
    timestampSeconds: 127,
    title: "Intelligent Change Classification",
    description: "Not all changes are equal—Coral tells you which ones matter.",
    transcriptExcerpt:
      "Beyond detecting differences, Coral classifies the type of change automatically. Whether a form was updated with the same name, renamed entirely, or relocated to a new URL, Coral categorizes the change so teams can prioritize review and response. This intelligence replaces manual triage and reduces noise across large form libraries.",
    screenshotPlaceholder: "Change Classification Dashboard",
    screenshotUrl: "/images/demo-1.jpg",
    highlights: [
      "Updated form (same name) detection",
      "Renamed form identification",
      "Relocated link discovery"
    ],
  },
  {
    id: "search-filtering",
    timestamp: "3:30",
    timestampSeconds: 210,
    title: "Search, Filtering & Jurisdiction Intelligence",
    description: "Find the right form instantly—by state, jurisdiction, or topic.",
    transcriptExcerpt:
      "Coral is built for scale. Teams can search across thousands of forms using keywords, categories, jurisdictions, or form types. Whether you're looking for a specific document or monitoring an entire practice area like family law, Coral makes form discovery fast and intuitive.",
    screenshotPlaceholder: "Search & Filtering Interface",
    screenshotUrl: "/images/demo-4.jpg",
    highlights: [
      "Search by keyword or form type",
      "Filter by state and jurisdiction",
      "Scales across large form libraries"
    ],
  },
];
