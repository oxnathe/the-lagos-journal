import type { Metadata } from "next";
import { LocationsPage } from "@/components/location/locations-page";

export const metadata: Metadata = {
  title: "Explore Lagos Locations | The Lagos Journal",
  description:
    "Explore Lagos neighbourhoods, discover property destinations and understand the character of different areas across Lagos.",
};

export default function LocationsRoute() {
  return <LocationsPage />;
}
