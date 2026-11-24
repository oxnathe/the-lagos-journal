import type { Metadata } from "next";
import { DevelopersPage } from "@/components/developer/developers-page";

export const metadata: Metadata = {
  title: "Real Estate Developers | The Lagos Journal",
  description:
    "Discover real estate development across Lagos and explore the companies shaping the city's residential and commercial property landscape.",
};

export default function DevelopersRoute() {
  return <DevelopersPage />;
}
