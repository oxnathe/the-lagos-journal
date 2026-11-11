import Link from "next/link";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

import { BuyPropertyHero } from "@/components/property/buy-property-hero";
import { PropertySearch } from "@/components/property/property-search";
import { PropertyCategories } from "@/components/property/property-categories";
import { PropertyLocationHighlights } from "@/components/property/property-location-highlights";
import { PropertyBuyingGuidance } from "@/components/property/property-buying-guidance";

type SearchFilters = {
  location?: string;
  type?: string;
  bedrooms?: string;
  minPrice?: string;
  maxPrice?: string;
};

export function BuyPropertyPage({
  filters,
}: {
  filters: SearchFilters;
}) {
  const hasFilters = Object.values(filters).some(
    (value) => typeof value === "string" && value.trim().length > 0,
  );

  return (
    <div className="flex min-h-screen flex-col bg-[var(--brand-ivory)]">
      <SiteHeader />

      <main className="flex-1">
        <BuyPropertyHero />

        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
          <div className="relative z-10 -mt-8 sm:-mt-12">
            <PropertySearch filters={filters} />
          </div>

          <PropertyCategories />

          <section
            id="property-results"
            className="scroll-mt-8 border-y border-[var(--brand-sand)] py-16 sm:py-20"
          >
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[var(--brand-gold)]">
                The property collection
              </p>

              <h2 className="mt-3 font-editorial text-4xl tracking-[-0.04em] text-[var(--brand-navy)] sm:text-5xl">
                {hasFilters ? "Your property search" : "Considered properties. Clear information."}
              </h2>

              {hasFilters && (
                <p className="mt-4 text-xs leading-6 text-[var(--brand-charcoal)]/60">
                  Your selected preferences are reflected in the search form above.
                </p>
              )}

              <div className="mt-9 border border-[var(--brand-sand)] bg-white px-6 py-12 sm:px-12">
                <span className="mx-auto flex h-12 w-12 items-center justify-center border border-[var(--brand-gold)]/50 font-editorial text-2xl text-[var(--brand-gold)]">
                  TLJ
                </span>

                <h3 className="mt-6 font-editorial text-2xl text-[var(--brand-navy)]">
                  Our property collection is being prepared.
                </h3>

                <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-[var(--brand-charcoal)]/65">
                  Verified property listings will appear here as they are
                  reviewed and added. We will not display invented properties,
                  prices or availability.
                </p>

                <Link
                  href="/contact"
                  className="mt-7 inline-flex min-h-12 items-center justify-center gap-3 bg-[var(--brand-navy)] px-6 text-xs font-semibold text-white transition-colors hover:bg-[var(--brand-orange)]"
                >
                  Make a property enquiry
                  <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>
          </section>
        </div>

        <PropertyLocationHighlights />

        <PropertyBuyingGuidance />

        <section className="bg-[var(--brand-ivory)] px-5 py-20 sm:px-8 sm:py-24 lg:px-14">
          <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-8 border-b border-[var(--brand-sand)] pb-12 sm:flex-row sm:items-center">
            <div className="max-w-2xl">
              <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[var(--brand-gold)]">
                Developers and property partners
              </p>

              <h2 className="mt-3 font-editorial text-4xl leading-tight tracking-[-0.04em] text-[var(--brand-navy)]">
                Have a property worth presenting?
              </h2>

              <p className="mt-4 text-sm leading-7 text-[var(--brand-charcoal)]/65">
                Connect with The Lagos Journal about property listings,
                developments and partnership enquiries.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 bg-[var(--brand-orange)] px-7 text-xs font-semibold text-white transition-colors hover:bg-[var(--brand-navy)]"
            >
              Talk to our team
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}