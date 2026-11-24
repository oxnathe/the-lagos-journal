import type { Metadata } from "next";
import JournalComingSoon from "@/components/journal/journal-coming-soon";

export const metadata: Metadata = {
  title: "The Journal | The Lagos Journal",
  description:
    "A new perspective on Lagos real estate, property investment, architecture, development and the places shaping the city.",
};

export default function JournalPage() {
  return <JournalComingSoon />;
}
