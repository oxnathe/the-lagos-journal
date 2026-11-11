import { Suspense } from "react"
import type { Metadata } from "next"

import { BuyPropertyPage } from "@/components/property/buy-property-page"

type SearchParams = {
  location?: string
  type?: string
  bedrooms?: string
  minPrice?: string
  maxPrice?: string
}

export const metadata: Metadata = {
  title: "Buy Property in Lagos",
  description:
    "Explore residential property categories and Lagos locations with The Lagos Journal. Discover property opportunities and make informed decisions.",
}

async function BuyPropertyContent({
  searchParams,
}: {
  searchParams: Promise<SearchParams>
}) {
  const filters = await searchParams

  return <BuyPropertyPage filters={filters} />
}

function BuyPropertyFallback() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[var(--brand-ivory)] px-5">
      <p className="text-sm text-[var(--brand-charcoal)]/65">
        Preparing the property collection...
      </p>
    </main>
  )
}

export default function BuyPropertyRoute({
  searchParams,
}: {
  searchParams: Promise<SearchParams>
}) {
  return (
    <Suspense fallback={<BuyPropertyFallback />}>
      <BuyPropertyContent searchParams={searchParams} />
    </Suspense>
  )
}