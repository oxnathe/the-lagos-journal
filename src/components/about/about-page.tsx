import Image from "next/image";
import Link from "next/link";

import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

const editorialPillars = [
  {
    number: "01",
    title: "Property",
    description:
      "Discover residential property opportunities, developments and locations across Lagos. Our aim is to bring relevant information together to help you begin your property journey with greater clarity.",
    link: "/buy-property",
    linkText: "Explore properties",
  },
  {
    number: "02",
    title: "Places",
    description:
      "Explore the neighbourhoods, communities and experiences that make Lagos what it is. From established addresses to evolving districts, every location has a story worth understanding.",
    link: "/locations",
    linkText: "Discover Lagos",
  },
  {
    number: "03",
    title: "Perspective",
    description:
      "Through our journal, we explore real estate, development, lifestyle and the ideas shaping the city's future, offering a deeper perspective on Lagos beyond the listings.",
    link: "/journal",
    linkText: "Read the journal",
  },
];

const principles = [
  {
    number: "01",
    title: "Clarity before complexity",
    description:
      "Property decisions deserve information that is easy to understand, thoughtfully presented and relevant to the decision at hand.",
  },
  {
    number: "02",
    title: "A perspective rooted in place",
    description:
      "Lagos is more than a property market. Its neighbourhoods, people, culture and changing landscape all contribute to the experience of living and investing here.",
  },
  {
    number: "03",
    title: "Discovery with intention",
    description:
      "We bring property discovery, neighbourhood exploration and editorial perspective together in one place.",
  },
];

export function AboutPage() {
  return (
    <>
      <SiteHeader />

      <main className="flex-1 bg-[var(--brand-ivory)]">
        {/* HERO */}
        <section className="overflow-hidden bg-[var(--brand-navy)] text-white">
          <div className="mx-auto grid max-w-[1440px] lg:grid-cols-[0.9fr_1.1fr]">
            <div className="flex flex-col justify-center px-5 py-20 sm:px-8 sm:py-24 lg:px-14 lg:py-28">
              <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--brand-gold)]">
                <span className="h-px w-8 bg-[var(--brand-gold)]" />
                About The Lagos Journal
              </p>

              <h1 className="mt-7 max-w-2xl font-editorial text-[clamp(3.5rem,7vw,6.5rem)] leading-[0.98] tracking-[-0.06em]">
                A closer look
                <span className="mt-2 block italic text-[var(--brand-gold)]">
                  at Lagos.
                </span>
              </h1>

              <p className="mt-7 max-w-lg text-sm leading-8 text-white/70 sm:text-base">
                A considered guide to Lagos real estate, exceptional places,
                neighbourhoods and the people shaping the city&apos;s property
                landscape.
              </p>

              <p className="mt-8 font-editorial text-xl italic text-white/85 sm:text-2xl">
                Lagos real estate investment in focus.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="/buy-property"
                  className="inline-flex min-h-12 items-center justify-center gap-4 bg-[var(--brand-orange)] px-6 text-xs font-semibold text-white transition-colors hover:bg-white hover:text-[var(--brand-navy)]"
                >
                  Explore properties
                  <span aria-hidden="true">{"\u2197"}</span>
                </Link>

                <Link
                  href="/journal"
                  className="inline-flex min-h-12 items-center justify-center border border-white/25 px-6 text-xs font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
                >
                  Read our journal
                </Link>
              </div>
            </div>

            <div className="relative min-h-[380px] sm:min-h-[520px] lg:min-h-[650px]">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=88"
                alt="Modern Lagos-inspired urban architecture"
                fill
                priority
                unoptimized
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-navy)]/65 via-transparent to-transparent" />

              <div className="absolute bottom-8 left-6 right-6 sm:bottom-12 sm:left-12 sm:right-12">
                <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-white/70">
                  Property. Perspective. Possibility.
                </p>

                <p className="mt-3 max-w-md font-editorial text-3xl leading-tight text-white sm:text-4xl">
                  Discover the city beyond the address.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-14">
          <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--brand-gold)]">
                Our perspective
              </p>

              <h2 className="mt-5 font-editorial text-4xl leading-tight tracking-[-0.045em] text-[var(--brand-navy)] sm:text-5xl">
                Lagos is more than a market.
              </h2>
            </div>

            <div className="space-y-6 text-sm leading-8 text-[var(--brand-charcoal)]/75 sm:text-base">
              <p>
                Lagos is a city of movement, ambition, opportunity and
                possibility. Its property landscape continues to evolve,
                shaped by new developments, established neighbourhoods,
                changing lifestyles and the people who call the city home.
              </p>

              <p>
                The Lagos Journal was created to bring these perspectives
                together. We look at Lagos through the lens of real estate,
                but our interest extends beyond property itself to the places,
                people and experiences that make the city distinctive.
              </p>

              <p>
                We bring property discovery and editorial perspective into
                one experience, helping people explore Lagos, discover
                opportunities and start meaningful conversations.
              </p>
            </div>
          </div>
        </section>

        {/* EDITORIAL PILLARS */}
        <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-14">
          <div className="mx-auto max-w-[1440px]">
            <div className="max-w-2xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--brand-gold)]">
                What we bring together
              </p>

              <h2 className="mt-5 font-editorial text-4xl leading-tight tracking-[-0.045em] text-[var(--brand-navy)] sm:text-5xl">
                Three perspectives.
                <span className="block italic text-[var(--brand-gold)]">
                  One city.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--brand-charcoal)]/65">
                Explore Lagos through property, places and the stories
                that give the city its character.
              </p>
            </div>

            <div className="mt-12 grid gap-px border border-[var(--brand-sand)] bg-[var(--brand-sand)] md:grid-cols-3">
              {editorialPillars.map((pillar) => (
                <article
                  key={pillar.number}
                  className="flex flex-col bg-white p-7 sm:p-9 lg:p-10"
                >
                  <p className="font-editorial text-3xl italic text-[var(--brand-gold)]">
                    {pillar.number}
                  </p>

                  <h3 className="mt-7 font-editorial text-3xl text-[var(--brand-navy)]">
                    {pillar.title}
                  </h3>

                  <p className="mt-5 flex-1 text-sm leading-7 text-[var(--brand-charcoal)]/65">
                    {pillar.description}
                  </p>

                  <Link
                    href={pillar.link}
                    className="mt-8 inline-flex w-fit items-center gap-3 border-b border-[var(--brand-gold)] pb-2 text-xs font-semibold text-[var(--brand-navy)] transition-colors hover:text-[var(--brand-orange)]"
                  >
                    {pillar.linkText}
                    <span aria-hidden="true">{"\u2197"}</span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* MISSION */}
        <section className="overflow-hidden bg-[var(--brand-ivory)]">
          <div className="mx-auto grid max-w-[1440px] lg:grid-cols-2">
            <div className="relative min-h-[380px] sm:min-h-[500px] lg:min-h-[650px]">
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=88"
                alt="Contemporary residential architecture"
                fill
                unoptimized
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
               loading="lazy" />

              <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-navy)]/35 to-transparent" />
            </div>

            <div className="flex flex-col justify-center px-6 py-16 sm:px-12 lg:px-16 xl:px-24">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--brand-gold)]">
                Our mission
              </p>

              <h2 className="mt-5 font-editorial text-4xl leading-[1.1] tracking-[-0.045em] text-[var(--brand-navy)] sm:text-5xl lg:text-6xl">
                Bringing Lagos closer to you.
              </h2>

              <p className="mt-7 text-sm leading-8 text-[var(--brand-charcoal)]/70">
                Whether you are searching for a home, considering an investment,
                planning a stay or simply discovering Lagos from afar, we want
                to make the city easier to explore.
              </p>

              <p className="mt-5 text-sm leading-8 text-[var(--brand-charcoal)]/70">
                Our platform connects property discovery with local
                perspective, helping you navigate the city&apos;s opportunities
                and discover more about the places that interest you.
              </p>

              <p className="mt-8 font-editorial text-2xl italic text-[var(--brand-gold)]">
                Buy Nigeria. Explore Nigeria.
              </p>
            </div>
          </div>
        </section>

        {/* PRINCIPLES */}
        <section className="bg-[var(--brand-navy)] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-14">
          <div className="mx-auto max-w-[1440px]">
            <div className="max-w-2xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--brand-gold)]">
                How we approach Lagos
              </p>

              <h2 className="mt-5 font-editorial text-4xl leading-tight tracking-[-0.045em] sm:text-5xl">
                A more considered perspective.
              </h2>
            </div>

            <div className="mt-12 grid gap-px bg-white/15 md:grid-cols-3">
              {principles.map((principle) => (
                <article
                  key={principle.number}
                  className="bg-[var(--brand-navy)] p-7 sm:p-9"
                >
                  <p className="font-editorial text-3xl italic text-[var(--brand-gold)]">
                    {principle.number}
                  </p>

                  <h3 className="mt-7 font-editorial text-2xl sm:text-3xl">
                    {principle.title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-white/65">
                    {principle.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* DIASPORA */}
        <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-14">
          <div className="mx-auto grid max-w-[1280px] items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--brand-gold)]">
                Lagos, wherever you are
              </p>

              <h2 className="mt-5 font-editorial text-4xl leading-tight tracking-[-0.045em] text-[var(--brand-navy)] sm:text-5xl lg:text-6xl">
                Your connection to home.
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-8 text-[var(--brand-charcoal)]/70">
                For Nigerians living at home and across the world, Lagos
                remains a place of connection, opportunity and possibility.
              </p>

              <p className="mt-5 max-w-xl text-sm leading-8 text-[var(--brand-charcoal)]/70">
                The Lagos Journal brings property discovery, shortlet
                experiences, neighbourhood exploration and editorial
                perspective together, making it easier to stay connected
                to the city and explore what it has to offer.
              </p>

              <Link
                href="/locations"
                className="mt-8 inline-flex min-h-12 items-center gap-4 bg-[var(--brand-navy)] px-6 text-xs font-semibold text-white transition-colors hover:bg-[var(--brand-orange)]"
              >
                Explore Lagos
                <span aria-hidden="true">{"\u2197"}</span>
              </Link>
            </div>

            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=85"
                alt="Modern architectural landscape"
                fill
                unoptimized
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
               loading="lazy" />
            </div>
          </div>
        </section>

        {/* CLOSING CTA */}
        <section className="relative overflow-hidden bg-[var(--brand-ivory)] px-5 py-20 text-center sm:px-8 sm:py-24 lg:py-28">
          <div className="pointer-events-none absolute -right-28 -top-36 h-[420px] w-[420px] rounded-full border border-[var(--brand-gold)]/20" />

          <div className="pointer-events-none absolute -right-8 -top-20 h-[300px] w-[300px] rounded-full border border-[var(--brand-gold)]/20" />

          <div className="relative mx-auto max-w-3xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--brand-gold)]">
              Begin your Lagos experience
            </p>

            <h2 className="mt-6 font-editorial text-5xl leading-[1.08] tracking-[-0.05em] text-[var(--brand-navy)] sm:text-6xl lg:text-7xl">
              Discover the city.
              <span className="mt-2 block italic text-[var(--brand-gold)]">
                Find your perspective.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-xl text-sm leading-8 text-[var(--brand-charcoal)]/65">
              Explore properties, discover neighbourhoods, find your next stay
              and read the stories shaping Lagos.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/buy-property"
                className="inline-flex min-h-14 items-center justify-center gap-5 bg-[var(--brand-orange)] px-7 text-xs font-semibold text-white transition-colors hover:bg-[var(--brand-navy)]"
              >
                Explore properties
                <span aria-hidden="true">{"\u2197"}</span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex min-h-14 items-center justify-center gap-5 border border-[var(--brand-navy)]/20 px-7 text-xs font-semibold text-[var(--brand-navy)] transition-colors hover:border-[var(--brand-navy)] hover:bg-white"
              >
                Get in touch
                <span aria-hidden="true">{"\u2197"}</span>
              </Link>
            </div>

            <p className="mt-10 font-editorial text-xl italic text-[var(--brand-navy)]">
              Buy Nigeria. Explore Nigeria.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
