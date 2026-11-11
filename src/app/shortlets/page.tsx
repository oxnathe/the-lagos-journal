import { Suspense } from "react";
import type { Metadata } from "next";
import { ShortletsPage } from "@/components/shortlet/shortlets-page";

type SearchFilters = {
  location?: string;
  type?: string;
  bedrooms?: string;
  minPrice?: string;
  maxPrice?: string;
};

export const metadata: Metadata = {
  title: "Explore Lagos Shortlets",
  description:
    "Discover considered short-stay accommodation across Lagos with The Lagos Journal. Explore locations, compare your preferences and enquire directly.",
};

async function ShortletsContent({
  searchParams,
}: {
  searchParams: Promise<SearchFilters>;
}) {
  const filters = await searchParams;
  return <ShortletsPage filters={filters} />;
}

function ShortletsFallback() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[var(--brand-ivory)] px-5">
      <p className="text-sm text-[var(--brand-charcoal)]/65">
        Preparing the Lagos shortlet collection...
      </p>
    </main>
  );
}

export default function ShortletsRoute({
  searchParams,
}: {
  searchParams: Promise<SearchFilters>;
}) {
  return (
    <Suspense fallback={<ShortletsFallback />}>
      <ShortletsContent searchParams={searchParams} />
    </Suspense>
  );
}
