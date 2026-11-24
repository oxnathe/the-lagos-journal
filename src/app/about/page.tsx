import type { Metadata } from "next";
import { AboutPage } from "@/components/about/about-page";

export const metadata: Metadata = {
  title: "About The Lagos Journal",
  description:
    "Discover The Lagos Journal — a considered guide to Lagos real estate, property opportunities, neighbourhoods and the people shaping the city.",
};

export default function AboutRoute() {
  return <AboutPage />;
}
