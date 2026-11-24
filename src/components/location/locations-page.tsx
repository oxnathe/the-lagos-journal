import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { getGeneralEnquiryUrl } from "@/lib/contact";

const locations = [
  {
    name: "Ikoyi",
    category: "Luxury & residential",
    description:
      "Discover one of Lagos' most recognised residential destinations, known for its established neighbourhoods, private residences and premium property offerings.",
    image:
      "/images/locations/ikoyi.jpg",
    number: "01",
  },
  {
    name: "Victoria Island",
    category: "Business & lifestyle",
    description:
      "Explore a district where commercial activity, hospitality, residential developments and city life intersect.",
    image:
      "/images/locations/victoria-island.jpg",
    number: "02",
  },
  {
    name: "Lekki",
    category: "Residential & lifestyle",
    description:
      "Explore the Lekki corridor, from established residential communities to newer developments and lifestyle destinations.",
    image:
      "/images/locations/lekki.jpg",
    number: "03",
  },
  {
    name: "Ajah",
    category: "Residential discovery",
    description:
      "Discover residential communities along the Lekki-Epe corridor and explore the different property options available across the area.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
    number: "04",
  },
  {
    name: "Ikeja",
    category: "Urban & commercial",
    description:
      "Explore Lagos Mainland's capital district, with residential, commercial and hospitality opportunities within its wider urban landscape.",
    image:
      "/images/locations/ikeja.jpg",
    number: "05",
  },
  {
    name: "Epe",
    category: "Emerging destinations",
    description:
      "Explore the eastern side of Lagos and discover locations attracting interest in residential development and longer-term property exploration.",
    image:
      "/images/locations/epe.jpg",
    number: "06",
  },
  {
    name: "Lagos Island",
    category: "Heritage & city life",
    description:
      "Discover the historic commercial heart of Lagos, where the city's heritage, markets, business districts and urban character meet.",
    image:
      "/images/locations/lagos-island.jpg",
    number: "07",
  },
  {
    name: "Banana Island",
    category: "Premium residences",
    description:
      "Explore an exclusive residential destination within the Ikoyi area, recognised for its luxury residential environment.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
    number: "08",
  },
];

const discoveryCategories = [
  {
    number: "01",
    title: "Luxury living",
    description:
      "Explore premium residential destinations, private estates and high-end property environments.",
  },
  {
    number: "02",
    title: "Urban lifestyle",
    description:
      "Discover neighbourhoods shaped by business, culture, restaurants, entertainment and everyday city life.",
  },
  {
    number: "03",
    title: "Residential communities",
    description:
      "Explore locations suited to different lifestyles, property preferences and residential needs.",
  },
  {
    number: "04",
    title: "Emerging destinations",
    description:
      "Discover areas across Lagos that deserve further exploration as the city continues to expand.",
  },
];

export function LocationsPage() {
  const enquiryUrl = getGeneralEnquiryUrl("location enquiry");

  return (
    <>
      <SiteHeader />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-[var(--brand-navy)] text-white">
          <div className="grid min-h-[620px] lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative z-10 flex flex-col justify-center px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
              <p className="mb-7 text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--brand-gold)]">
                Discover the city
              </p>

              <h1 className="max-w-3xl font-editorial text-5xl leading-[1.08] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
                Find your place
                <span className="block italic text-[var(--brand-gold)]">
                  in Lagos.
                </span>
              </h1>

              <p className="mt-7 max-w-lg text-sm leading-8 text-white/65 sm:text-base">
                Every neighbourhood tells a different story. Explore the
                places, communities and destinations shaping Lagos real estate
                and discover where your next chapter could begin.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="#neighbourhoods"
                  className="inline-flex items-center bg-[var(--brand-orange)] px-7 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[var(--brand-gold)]"
                >
                  Explore locations
                </Link>

                <Link
                  href="/buy-property"
                  className="inline-flex items-center border border-white/25 px-7 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:border-white hover:bg-white/5"
                >
                  Discover properties
                </Link>
              </div>

              <div className="mt-16 border-t border-white/15 pt-6">
                <p className="font-editorial text-lg italic text-white/55">
                  Property. Place. Perspective.
                </p>
              </div>
            </div>

            <div className="relative min-h-[420px] lg:min-h-full">
              <Image
                src="https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1800&q=90"
                alt="Lagos city skyline"
                fill
                priority
                unoptimized
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-navy)]/55 via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-transparent lg:to-[var(--brand-navy)]/30" />

              <div className="absolute bottom-8 left-8 right-8 sm:bottom-12 sm:left-12">
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/75">
                  The Lagos Journal
                </p>
                <p className="mt-2 font-editorial text-3xl text-white sm:text-4xl">
                  Lagos, in perspective.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="bg-[var(--brand-ivory)] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
          <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--brand-orange)]">
                A city of possibilities
              </p>

              <h2 className="mt-6 max-w-2xl font-editorial text-4xl leading-tight tracking-[-0.035em] text-[var(--brand-navy)] sm:text-5xl">
                Lagos is not one destination.
                <span className="block italic text-[var(--brand-gold)]">
                  It is many worlds.
                </span>
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-8 text-[var(--brand-charcoal)]/75">
              From the established residential streets of Ikoyi to the
              commercial energy of Victoria Island, the expanding Lekki
              corridor and the historic heart of Lagos Island, the city offers
              a wide range of environments to explore. Understanding the
              character of each location is an important part of making
              informed property decisions.
            </p>
          </div>
        </section>

        {/* NEIGHBOURHOODS */}
        <section
          id="neighbourhoods"
          className="bg-white px-5 py-20 sm:px-8 lg:px-14 lg:py-28"
        >
          <div className="mx-auto max-w-[1440px]">
            <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--brand-orange)]">
                  Location guide
                </p>

                <h2 className="mt-5 font-editorial text-4xl tracking-[-0.04em] text-[var(--brand-navy)] sm:text-5xl">
                  Explore neighbourhoods
                </h2>
              </div>

              <p className="max-w-md text-sm leading-7 text-[var(--brand-charcoal)]/65">
                A starting point for discovering the different destinations
                that make up Lagos.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {locations.map((location) => (
                <article
                  key={location.name}
                  className="group overflow-hidden border border-[var(--brand-sand)]/70 bg-white transition-shadow hover:shadow-xl"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={location.image}
                      alt={`${location.name}, Lagos`}
                      fill
                      unoptimized
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                    <span className="absolute left-5 top-5 text-xs tracking-[0.15em] text-white/80">
                      {location.number}
                    </span>

                    <span className="absolute bottom-5 left-5 text-[10px] font-medium uppercase tracking-[0.2em] text-white">
                      {location.category}
                    </span>
                  </div>

                  <div className="p-6 sm:p-7">
                    <h3 className="font-editorial text-3xl text-[var(--brand-navy)]">
                      {location.name}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[var(--brand-charcoal)]/70">
                      {location.description}
                    </p>

                    <Link
                      href={enquiryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--brand-orange)] transition-colors hover:text-[var(--brand-navy)]"
                    >
                      Enquire about this area
                      <span aria-hidden="true">↗</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* DISCOVERY CATEGORIES */}
        <section className="bg-[var(--brand-ivory)] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
          <div className="mx-auto max-w-[1440px]">
            <div className="max-w-2xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--brand-orange)]">
                Find your perspective
              </p>

              <h2 className="mt-5 font-editorial text-4xl leading-tight tracking-[-0.035em] text-[var(--brand-navy)] sm:text-5xl">
                What kind of Lagos are you looking for?
              </h2>

              <p className="mt-6 text-sm leading-8 text-[var(--brand-charcoal)]/70">
                Whether you are searching for a home, considering an investment
                or planning a visit, the right location starts with
                understanding what matters to you.
              </p>
            </div>

            <div className="mt-14 grid gap-px bg-[var(--brand-sand)] sm:grid-cols-2">
              {discoveryCategories.map((category) => (
                <div
                  key={category.number}
                  className="bg-[var(--brand-ivory)] p-8 sm:p-10 lg:p-12"
                >
                  <p className="text-xs tracking-[0.2em] text-[var(--brand-gold)]">
                    {category.number}
                  </p>

                  <h3 className="mt-5 font-editorial text-3xl text-[var(--brand-navy)]">
                    {category.title}
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-7 text-[var(--brand-charcoal)]/70">
                    {category.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROPERTY DISCOVERY */}
        <section className="bg-white px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
          <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-2">
            <div className="relative min-h-[420px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85"
                alt="Contemporary residential property"
                fill
                unoptimized
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-center py-6 lg:pl-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--brand-orange)]">
                Your next destination
              </p>

              <h2 className="mt-6 font-editorial text-4xl leading-tight tracking-[-0.04em] text-[var(--brand-navy)] sm:text-5xl">
                Location is where the story begins.
              </h2>

              <p className="mt-6 max-w-lg text-sm leading-8 text-[var(--brand-charcoal)]/70">
                Explore properties across Lagos, discover shortlet
                destinations and begin conversations about the areas that
                interest you. The Lagos Journal brings location and property
                discovery together.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/buy-property"
                  className="inline-flex items-center bg-[var(--brand-navy)] px-7 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[var(--brand-orange)]"
                >
                  Explore properties
                </Link>

                <Link
                  href="/shortlets"
                  className="inline-flex items-center border border-[var(--brand-navy)]/20 px-7 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--brand-navy)] transition-colors hover:border-[var(--brand-orange)] hover:text-[var(--brand-orange)]"
                >
                  Discover shortlets
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ENQUIRY CTA */}
        <section className="bg-[var(--brand-navy)] px-5 py-20 text-white sm:px-8 lg:px-14 lg:py-28">
          <div className="mx-auto max-w-[1440px] text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--brand-gold)]">
              Let us help you explore
            </p>

            <h2 className="mx-auto mt-6 max-w-3xl font-editorial text-4xl leading-tight tracking-[-0.04em] sm:text-6xl">
              The right place begins with the right perspective.
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-white/65">
              Have a neighbourhood in mind? Start a conversation with The
              Lagos Journal and let us help you explore.
            </p>

            <Link
              href={enquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center bg-[var(--brand-orange)] px-8 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[var(--brand-gold)]"
            >
              Enquire on WhatsApp
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
