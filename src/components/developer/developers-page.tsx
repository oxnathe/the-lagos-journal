import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { getWhatsAppUrl } from "@/lib/contact";

const developmentCategories = [
  {
    number: "01",
    title: "Residential",
    description:
      "The homes, apartments and residential communities responding to the way Lagos lives.",
    detail: "Homes & communities",
  },
  {
    number: "02",
    title: "Luxury",
    description:
      "Premium residences, considered architecture and developments shaped around elevated living.",
    detail: "Premium living",
  },
  {
    number: "03",
    title: "Commercial",
    description:
      "Spaces for business, retail, hospitality and the enterprises contributing to the city's growth.",
    detail: "Business & enterprise",
  },
  {
    number: "04",
    title: "Mixed-use",
    description:
      "Places where residential, commercial and lifestyle experiences come together.",
    detail: "Integrated destinations",
  },
];

const developerEnquiryUrl = getWhatsAppUrl(
  "Hello The Lagos Journal, I represent a real estate development company and would like to enquire about being featured in your developers directory."
);

const generalEnquiryUrl = getWhatsAppUrl(
  "Hello The Lagos Journal, I would like to enquire about real estate developers and projects in Lagos."
);

export function DevelopersPage() {
  return (
    <>
      <SiteHeader />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-[var(--brand-navy)] text-white">
          <div className="grid min-h-[620px] lg:grid-cols-[1.02fr_0.98fr]">
            <div className="relative z-10 flex flex-col justify-center px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
              <p className="mb-7 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--brand-gold)]">
                <span className="h-px w-8 bg-[var(--brand-gold)]" />
                The people behind the places
              </p>

              <h1 className="max-w-3xl font-editorial text-5xl leading-[1.06] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
                The people
                <span className="mt-1 block italic text-[var(--brand-gold)]">
                  building Lagos.
                </span>
              </h1>

              <p className="mt-8 max-w-lg text-sm leading-8 text-white/65 sm:text-base">
                Every development begins with a vision. Discover the companies
                and ideas shaping Lagos&apos;s residential, commercial and
                lifestyle landscape.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="#directory"
                  className="inline-flex items-center justify-center bg-[var(--brand-orange)] px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[var(--brand-gold)]"
                >
                  Explore the directory
                  <span aria-hidden="true" className="ml-4 text-base">
                    ↗
                  </span>
                </Link>

                <Link
                  href="/buy-property"
                  className="inline-flex items-center justify-center border border-white/25 px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:border-white hover:bg-white/5"
                >
                  Discover properties
                </Link>
              </div>

              <div className="mt-16 border-t border-white/15 pt-6">
                <p className="font-editorial text-xl italic text-white/65">
                  People. Projects. Perspective.
                </p>
                <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-white/35">
                  Lagos real estate investment in focus
                </p>
              </div>
            </div>

            <div className="relative min-h-[420px] lg:min-h-full">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=90"
                alt="Contemporary high-rise architecture"
                fill
                priority
                unoptimized
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-navy)]/65 via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-[var(--brand-navy)]/10 lg:to-[var(--brand-navy)]/45" />

              <div className="absolute bottom-8 left-7 right-7 border-l border-[var(--brand-gold)] pl-5 sm:bottom-12 sm:left-12">
                <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/70">
                  Lagos · Development in focus
                </p>
                <p className="mt-3 font-editorial text-3xl text-white sm:text-4xl">
                  Shaping the future.
                </p>
              </div>

              <div className="absolute right-7 top-7 hidden border border-white/30 px-4 py-3 text-[9px] uppercase tracking-[0.2em] text-white/80 sm:block">
                The Lagos Journal
              </div>
            </div>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="bg-[var(--brand-ivory)] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
          <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-20">
            <div>
              <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--brand-orange)]">
                <span className="h-px w-7 bg-[var(--brand-orange)]" />
                Development in focus
              </p>

              <h2 className="mt-7 max-w-2xl font-editorial text-4xl leading-[1.12] tracking-[-0.04em] text-[var(--brand-navy)] sm:text-5xl lg:text-6xl">
                Behind every property is a vision.
              </h2>
            </div>

            <div className="max-w-xl lg:pb-2">
              <p className="text-sm leading-8 text-[var(--brand-charcoal)]/75">
                A property tells only part of the story. The people and
                organisations behind its development matter too. This
                directory is being built to help readers discover the
                companies shaping Lagos and learn more about their work.
              </p>
              <p className="mt-5 border-l-2 border-[var(--brand-gold)] pl-5 font-editorial text-xl italic leading-relaxed text-[var(--brand-navy)]">
                Better property discovery begins with better information.
              </p>
            </div>
          </div>
        </section>

        {/* DEVELOPMENT CATEGORIES */}
        <section className="bg-white px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
          <div className="mx-auto max-w-[1440px]">
            <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
              <div className="max-w-2xl">
                <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--brand-orange)]">
                  <span className="h-px w-7 bg-[var(--brand-orange)]" />
                  Explore development
                </p>

                <h2 className="mt-6 font-editorial text-4xl leading-tight tracking-[-0.04em] text-[var(--brand-navy)] sm:text-5xl">
                  Different visions.
                  <span className="block italic text-[var(--brand-gold)]">
                    Different destinations.
                  </span>
                </h2>
              </div>

              <p className="max-w-md text-sm leading-8 text-[var(--brand-charcoal)]/65">
                From private residences to commercial destinations, explore
                the broad areas of real estate development across Lagos.
              </p>
            </div>

            <div className="mt-14 grid gap-px border border-[var(--brand-sand)] bg-[var(--brand-sand)] sm:grid-cols-2">
              {developmentCategories.map((category) => (
                <article
                  key={category.number}
                  className="group relative min-h-[260px] overflow-hidden bg-[var(--brand-ivory)] p-8 transition-colors duration-300 hover:bg-white sm:p-10 lg:p-12"
                >
                  <div className="flex items-start justify-between">
                    <span className="font-editorial text-2xl italic text-[var(--brand-gold)]">
                      {category.number}
                    </span>
                    <span className="text-[9px] uppercase tracking-[0.18em] text-[var(--brand-charcoal)]/45">
                      {category.detail}
                    </span>
                  </div>

                  <h3 className="mt-12 font-editorial text-3xl tracking-[-0.025em] text-[var(--brand-navy)] sm:text-4xl">
                    {category.title}
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-7 text-[var(--brand-charcoal)]/70">
                    {category.description}
                  </p>

                  <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[var(--brand-gold)] transition-all duration-300 group-hover:w-full" />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* DIRECTORY */}
        <section
          id="directory"
          className="scroll-mt-24 bg-[var(--brand-ivory)] px-5 py-20 sm:px-8 lg:px-14 lg:py-28"
        >
          <div className="mx-auto max-w-[1440px]">
            <div className="flex flex-col justify-between gap-7 border-b border-[var(--brand-sand)] pb-8 sm:flex-row sm:items-end">
              <div>
                <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--brand-orange)]">
                  <span className="h-px w-7 bg-[var(--brand-orange)]" />
                  The directory
                </p>

                <h2 className="mt-5 font-editorial text-4xl tracking-[-0.04em] text-[var(--brand-navy)] sm:text-5xl">
                  Developers in focus.
                </h2>
              </div>

              <p className="max-w-md text-sm leading-7 text-[var(--brand-charcoal)]/65">
                A considered directory of real estate development companies
                and the projects they bring to Lagos.
              </p>
            </div>

            <div className="relative mt-10 overflow-hidden border border-[var(--brand-sand)] bg-white">
              <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
                <div className="relative min-h-[260px] bg-[var(--brand-navy)] p-8 text-white sm:p-12 lg:min-h-[430px]">
                  <div className="absolute right-8 top-8 size-24 rounded-full border border-white/10 sm:right-12 sm:top-12 sm:size-36" />
                  <div className="absolute right-14 top-14 size-12 rounded-full border border-[var(--brand-gold)]/50 sm:right-20 sm:top-20 sm:size-24" />

                  <p className="relative text-[9px] font-semibold uppercase tracking-[0.25em] text-[var(--brand-gold)]">
                    The Lagos Journal
                  </p>

                  <div className="relative mt-20 sm:mt-28">
                    <p className="font-editorial text-6xl leading-none text-white sm:text-7xl">
                      TJ<span className="text-[var(--brand-gold)]">.</span>
                    </p>
                    <p className="mt-5 max-w-[200px] text-[10px] uppercase leading-6 tracking-[0.18em] text-white/55">
                      A growing record of the people shaping our city
                    </p>
                  </div>
                </div>

                <div className="flex flex-col justify-center px-7 py-12 sm:px-12 lg:px-16 lg:py-16">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[var(--brand-orange)]">
                    An evolving directory
                  </p>

                  <h3 className="mt-5 max-w-xl font-editorial text-3xl leading-tight tracking-[-0.035em] text-[var(--brand-navy)] sm:text-4xl">
                    A good directory starts with information worth sharing.
                  </h3>

                  <p className="mt-6 max-w-xl text-sm leading-8 text-[var(--brand-charcoal)]/70">
                    We are preparing developer profiles and project
                    information for publication. Profiles will be introduced
                    as information is received, reviewed and prepared. We
                    would rather publish carefully than fill this space with
                    details that have not been established.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      href={developerEnquiryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-[var(--brand-navy)] px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-[var(--brand-orange)]"
                    >
                      Submit your company
                      <span aria-hidden="true" className="ml-4 text-base">
                        ↗
                      </span>
                    </Link>

                    <Link
                      href={generalEnquiryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center border border-[var(--brand-sand)] px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--brand-navy)] transition-colors hover:border-[var(--brand-navy)]"
                    >
                      Make an enquiry
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EDITORIAL STANDARDS */}
        <section className="bg-white px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
          <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            <div className="relative min-h-[420px] overflow-hidden bg-[var(--brand-sand)]">
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85"
                alt="Contemporary residential architecture and interior design"
                fill
                unoptimized
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
               loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-navy)]/45 to-transparent" />
              <p className="absolute bottom-7 left-7 text-[9px] font-semibold uppercase tracking-[0.22em] text-white">
                Clarity · Context · Perspective
              </p>
            </div>

            <div className="lg:py-8">
              <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--brand-orange)]">
                <span className="h-px w-7 bg-[var(--brand-orange)]" />
                Our editorial approach
              </p>

              <h2 className="mt-6 max-w-xl font-editorial text-4xl leading-[1.12] tracking-[-0.04em] text-[var(--brand-navy)] sm:text-5xl">
                Perspective before promotion.
              </h2>

              <p className="mt-7 text-sm leading-8 text-[var(--brand-charcoal)]/70">
                The Lagos Journal aims to make property discovery more
                informed. Our developer directory is a place to explore
                companies and their work, with a clear distinction between
                information supplied for publication and information
                independently established.
              </p>

              <div className="mt-9 space-y-7">
                <div className="border-l-2 border-[var(--brand-gold)] pl-5">
                  <h3 className="font-editorial text-2xl text-[var(--brand-navy)]">
                    Context matters
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[var(--brand-charcoal)]/65">
                    Company profiles and project details should be presented
                    with relevant context and clear attribution.
                  </p>
                </div>

                <div className="border-l-2 border-[var(--brand-gold)] pl-5">
                  <h3 className="font-editorial text-2xl text-[var(--brand-navy)]">
                    Transparency matters
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[var(--brand-charcoal)]/65">
                    A directory listing or editorial feature is not, by
                    itself, a guarantee of a developer&apos;s credentials,
                    property quality or investment performance.
                  </p>
                </div>

                <div className="border-l-2 border-[var(--brand-gold)] pl-5">
                  <h3 className="font-editorial text-2xl text-[var(--brand-navy)]">
                    Independent judgement matters
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[var(--brand-charcoal)]/65">
                    Readers should make their own enquiries and seek
                    appropriate professional advice before making property
                    decisions.
                  </p>
                </div>
              </div>

              <Link
                href="/journal"
                className="mt-9 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--brand-orange)] transition-colors hover:text-[var(--brand-navy)]"
              >
                Read the journal
                <span aria-hidden="true" className="text-base">
                  ↗
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* PROPERTY DISCOVERY CTA */}
        <section className="relative overflow-hidden bg-[var(--brand-navy)] px-5 py-20 text-white sm:px-8 lg:px-14 lg:py-28">
          <div className="pointer-events-none absolute -right-24 -top-32 size-96 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-10 -top-16 size-64 rounded-full border border-[var(--brand-gold)]/20" />

          <div className="relative mx-auto max-w-[1440px] text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--brand-gold)]">
              Discover what is being built
            </p>

            <h2 className="mx-auto mt-7 max-w-3xl font-editorial text-4xl leading-[1.12] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Your next property story starts here.
            </h2>

            <p className="mx-auto mt-7 max-w-xl text-sm leading-8 text-white/65">
              Explore properties and locations across Lagos. Get to know the
              places, projects and possibilities shaping the city.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link
                href="/buy-property"
                className="inline-flex items-center bg-[var(--brand-orange)] px-8 py-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[var(--brand-gold)]"
              >
                Explore properties
                <span aria-hidden="true" className="ml-4 text-base">
                  ↗
                </span>
              </Link>

              <Link
                href="/locations"
                className="inline-flex items-center border border-white/25 px-8 py-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:border-white hover:bg-white/5"
              >
                Explore Lagos
              </Link>
            </div>
          </div>
        </section>

        {/* DEVELOPER ENQUIRY */}
        <section className="bg-[var(--brand-ivory)] px-5 py-16 sm:px-8 lg:px-14 lg:py-20">
          <div className="mx-auto flex max-w-[1440px] flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--brand-orange)]">
                <span className="h-px w-7 bg-[var(--brand-orange)]" />
                For developers
              </p>

              <h2 className="mt-5 font-editorial text-3xl leading-tight text-[var(--brand-navy)] sm:text-4xl">
                Have a project worth discovering?
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--brand-charcoal)]/70">
                Speak with our team about developer profiles, project
                submissions and editorial opportunities with The Lagos
                Journal.
              </p>
            </div>

            <Link
              href={developerEnquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center bg-[var(--brand-navy)] px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-[var(--brand-orange)]"
            >
              Contact our team
              <span aria-hidden="true" className="ml-4 text-base">
                ↗
              </span>
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
