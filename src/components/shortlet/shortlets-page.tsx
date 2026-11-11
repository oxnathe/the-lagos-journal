import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ShortletsHero } from "@/components/shortlet/shortlets-hero";
import { ShortletSearch } from "@/components/shortlet/shortlet-search";
import { ShortletCategories } from "@/components/shortlet/shortlet-categories";
import { getWhatsAppUrl } from "@/lib/contact";

type SearchFilters = {
  location?: string;
  type?: string;
  bedrooms?: string;
  minPrice?: string;
  maxPrice?: string;
};

export function ShortletsPage({
  filters,
}: {
  filters: SearchFilters;
}) {
  const enquiryUrl = getWhatsAppUrl(
    "Hello The Lagos Journal, I am interested in Lagos shortlet accommodation. Please let me know when reviewed listings become available."
  );

  const hostUrl = getWhatsAppUrl(
    "Hello The Lagos Journal, I would like to enquire about listing my shortlet property."
  );

  return (
    <>
      <SiteHeader />

      <main className="min-h-screen bg-[var(--brand-ivory)]">
        <ShortletsHero />

        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
          <div className="relative z-10 -mt-8 sm:-mt-10">
            <ShortletSearch filters={filters} />
          </div>

          <ShortletCategories />

          <section
            aria-labelledby="collection-status-title"
            className="border-y border-[var(--brand-sand)] py-16 sm:py-20"
          >
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[var(--brand-gold)]">
                The collection is taking shape
              </p>

              <h2
                id="collection-status-title"
                className="mt-4 font-editorial text-4xl leading-tight tracking-[-0.04em] text-[var(--brand-navy)] sm:text-5xl"
              >
                Good stays begin with the right details.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-[var(--brand-charcoal)]/65">
                Our shortlet collection is being prepared. We are working
                towards a considered directory where guests can review
                accommodation details and contact hosts directly. We will not
                display invented properties, prices, host information or
                availability.
              </p>

              <div className="mt-9 border border-[var(--brand-sand)] bg-white px-6 py-8 text-left sm:px-9">
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-orange)]">
                  Listings coming soon
                </p>
                <h3 className="mt-3 font-editorial text-2xl text-[var(--brand-navy)]">
                  The Lagos shortlet collection is being reviewed.
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--brand-charcoal)]/65">
                  Speak with our team if you are looking for a shortlet or
                  would like to introduce a property for consideration.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={enquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center justify-center bg-[var(--brand-navy)] px-6 text-xs font-semibold text-white transition-colors hover:bg-[var(--brand-orange)]"
                  >
                    Enquire about a stay
                    <span aria-hidden="true" className="ml-3">↗</span>
                  </a>
                  <a
                    href={hostUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center justify-center border border-[var(--brand-sand)] px-6 text-xs font-semibold text-[var(--brand-navy)] transition-colors hover:border-[var(--brand-gold)]"
                  >
                    List your property
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="grid gap-8 py-16 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[var(--brand-gold)]">
                For property owners and hosts
              </p>
              <h2 className="mt-3 font-editorial text-4xl leading-tight tracking-[-0.04em] text-[var(--brand-navy)]">
                Have a Lagos stay worth discovering?
              </h2>
            </div>

            <div className="border-l-2 border-[var(--brand-orange)] pl-6">
              <p className="text-sm leading-8 text-[var(--brand-charcoal)]/70">
                Introduce your shortlet to The Lagos Journal. Our team can
                discuss the property information, photographs, location and
                details needed for consideration. An enquiry does not
                automatically publish or verify a property.
              </p>
              <a
                href={hostUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex min-h-12 items-center justify-center bg-[var(--brand-orange)] px-6 text-xs font-semibold text-white transition-colors hover:bg-[var(--brand-navy)]"
              >
                Speak to our team
                <span aria-hidden="true" className="ml-3">↗</span>
              </a>
            </div>
          </section>

          <section className="mb-20 bg-[var(--brand-navy)] px-6 py-10 text-white sm:px-10 sm:py-12">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[var(--brand-gold)]">
                  Need assistance?
                </p>
                <h2 className="mt-2 font-editorial text-3xl">
                  Let’s help you plan your Lagos stay.
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-7 text-white/65">
                  Tell us what you are looking for. Our team will respond
                  directly on WhatsApp.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex min-h-12 shrink-0 items-center justify-center border border-white/30 px-6 text-xs font-semibold text-white transition-colors hover:border-[var(--brand-gold)] hover:bg-[var(--brand-orange)]"
              >
                All enquiries
                <span aria-hidden="true" className="ml-3">↗</span>
              </Link>
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
