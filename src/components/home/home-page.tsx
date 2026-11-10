import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

const locations = [
  {
    name: "Ikoyi",
    description: "Refined living and prime residential addresses.",
    image: "photo-1600607687939-ce8a6c25118c",
  },
  {
    name: "Victoria Island",
    description: "Business, lifestyle and contemporary city living.",
    image: "photo-1600607687920-4e2a09cf159d",
  },
  {
    name: "Lekki",
    description: "A changing landscape of residential opportunities.",
    image: "photo-1600566753086-00f18fb6b3ea",
  },
  {
    name: "Eko Atlantic",
    description: "A distinctive new chapter in Lagos development.",
    image: "photo-1600607687644-c7171b42498f",
  },
];

function ArrowIcon() {
  return <span aria-hidden="true" className="text-lg leading-none">↗</span>;
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--brand-gold)]">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-editorial text-4xl leading-[1.12] tracking-[-0.045em] text-[var(--brand-navy)] sm:text-5xl lg:text-[56px]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--brand-charcoal)]/70 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

export function HomePage() {
  return (
    <>
      <SiteHeader />

      <main>
        {/* HERO */}
        <section className="overflow-hidden bg-[var(--brand-ivory)]">
          <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 pb-14 pt-14 sm:px-8 md:pb-20 md:pt-20 lg:grid-cols-[0.88fr_1.12fr] lg:gap-12 lg:px-14 lg:py-24">
            <div className="relative z-10">
              <div className="flex items-center gap-3">
                <span className="h-px w-9 bg-[var(--brand-gold)]" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--brand-gold)]">
                  A Lagos property perspective
                </p>
              </div>

              <h1 className="mt-7 max-w-[650px] font-editorial text-[54px] leading-[0.99] tracking-[-0.06em] text-[var(--brand-navy)] sm:text-[68px] lg:text-[76px] xl:text-[88px]">
                Invest in Lagos.
                <span className="mt-2 block italic text-[var(--brand-gold)]">
                  Experience the city.
                </span>
              </h1>

              <p className="mt-7 max-w-[470px] text-[14px] leading-8 text-[var(--brand-charcoal)]/75 sm:text-base">
                A considered guide to Lagos real estate, exceptional places to stay
                and the people shaping the city&apos;s property landscape.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#buy-property"
                  className="inline-flex min-h-14 items-center justify-center gap-5 bg-[var(--brand-orange)] px-7 text-xs font-semibold text-white transition-all hover:bg-[var(--brand-navy)]"
                >
                  Discover properties <ArrowIcon />
                </Link>
                <Link
                  href="#shortlets"
                  className="inline-flex min-h-14 items-center justify-center gap-5 border border-[var(--brand-navy)]/20 px-7 text-xs font-semibold text-[var(--brand-navy)] transition-all hover:border-[var(--brand-navy)] hover:bg-white"
                >
                  Explore shortlets <ArrowIcon />
                </Link>
              </div>

              <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-[var(--brand-sand)] pt-6">
                <div>
                  <p className="font-editorial text-xl text-[var(--brand-navy)]">Property</p>
                  <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-[var(--brand-charcoal)]/55">Sales & investment</p>
                </div>
                <span className="h-9 w-px bg-[var(--brand-sand)]" />
                <div>
                  <p className="font-editorial text-xl text-[var(--brand-navy)]">Places</p>
                  <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-[var(--brand-charcoal)]/55">Shortlet experiences</p>
                </div>
                <span className="h-9 w-px bg-[var(--brand-sand)]" />
                <div>
                  <p className="font-editorial text-xl text-[var(--brand-navy)]">Perspective</p>
                  <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-[var(--brand-charcoal)]/55">Independent insight</p>
                </div>
              </div>
            </div>

            <div className="relative min-h-[420px] sm:min-h-[540px] lg:min-h-[650px]">
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=88"
                  alt="Contemporary luxury residential architecture"
                  fill
                  priority
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-navy)]/45 via-transparent to-transparent" />
              </div>

              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 sm:bottom-8 sm:left-8 sm:right-8">
                <div className="max-w-xs text-white">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/75">
                    The Lagos perspective
                  </p>
                  <p className="mt-2 font-editorial text-2xl leading-tight sm:text-3xl">
                    A city of possibility.
                  </p>
                </div>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/60 text-white">
                  <ArrowIcon />
                </span>
              </div>

              <div className="absolute -left-5 top-12 hidden border border-[var(--brand-gold)]/50 bg-[var(--brand-ivory)] px-5 py-4 shadow-xl md:block">
                <p className="font-editorial text-lg text-[var(--brand-navy)]">The Lagos Journal</p>
                <p className="mt-1 text-[8px] uppercase tracking-[0.2em] text-[var(--brand-gold)]">
                  Property. Perspective. Possibility.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* DISCOVERY */}
        <section id="property-discovery" className="bg-white px-5 py-16 sm:px-8 lg:px-14 lg:py-20">
          <div className="mx-auto max-w-[1440px]">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <SectionHeading
                eyebrow="Find your place in Lagos"
                title="Two ways to experience the city."
                description="Whether you are looking to own a property or find somewhere exceptional to stay, begin with the experience that matters to you."
              />
              <p className="max-w-xs text-xs leading-6 text-[var(--brand-charcoal)]/60 md:pb-2">
                Thoughtful discovery for buyers, investors, visitors and returning Nigerians.
              </p>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              <Link
                id="buy-property"
                href="#locations"
                className="group relative min-h-[360px] overflow-hidden bg-[var(--brand-navy)] sm:min-h-[430px]"
              >
                <Image
                  src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85"
                  alt="Elegant contemporary residential interior"
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101820]/90 via-[#101820]/15 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-7 text-white sm:p-10">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[var(--brand-gold)]">
                    Property sales
                  </p>
                  <h3 className="mt-3 font-editorial text-4xl sm:text-5xl">Find a place to own.</h3>
                  <p className="mt-4 max-w-md text-sm leading-6 text-white/75">
                    Explore Lagos property opportunities, locations and the developers behind them.
                  </p>
                  <span className="mt-7 inline-flex items-center gap-3 border-b border-white/60 pb-2 text-xs font-semibold">
                    Discover properties <ArrowIcon />
                  </span>
                </div>
              </Link>

              <Link
                id="shortlets"
                href="#shortlet-experience"
                className="group relative min-h-[360px] overflow-hidden bg-[var(--brand-navy)] sm:min-h-[430px]"
              >
                <Image
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85"
                  alt="Beautifully furnished contemporary shortlet interior"
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101820]/90 via-[#101820]/15 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-7 text-white sm:p-10">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[var(--brand-gold)]">
                    Shortlet experiences
                  </p>
                  <h3 className="mt-3 font-editorial text-4xl sm:text-5xl">Stay and explore.</h3>
                  <p className="mt-4 max-w-md text-sm leading-6 text-white/75">
                    Discover welcoming places for holidays, business trips and time back home.
                  </p>
                  <span className="mt-7 inline-flex items-center gap-3 border-b border-white/60 pb-2 text-xs font-semibold">
                    Explore shortlets <ArrowIcon />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* LOCATIONS */}
        <section id="locations" className="bg-[var(--brand-ivory)] px-5 py-16 sm:px-8 lg:px-14 lg:py-24">
          <div className="mx-auto max-w-[1440px]">
            <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
              <SectionHeading
                eyebrow="Explore the neighbourhoods"
                title="Get to know Lagos."
                description="Every neighbourhood has its own character, pace and possibilities. Start exploring the places that make Lagos distinctive."
              />
              <Link href="#buy-property" className="inline-flex items-center gap-3 self-start border-b border-[var(--brand-gold)] pb-2 text-xs font-semibold text-[var(--brand-navy)] md:mb-2">
                Explore property opportunities <ArrowIcon />
              </Link>
            </div>

            <div className="mt-11 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {locations.map((location, index) => (
                <Link
                  href="#buy-property"
                  key={location.name}
                  className="group block"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-[var(--brand-sand)]">
                    <Image
                      src={`https://images.unsplash.com/${location.image}?auto=format&fit=crop&w=800&q=85`}
                      alt={`Architectural inspiration representing ${location.name}`}
                      fill
                      unoptimized
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center border border-white/70 bg-black/15 text-[10px] text-white backdrop-blur-sm">
                      0{index + 1}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5 text-white">
                      <h3 className="font-editorial text-3xl">{location.name}</h3>
                      <p className="mt-2 text-xs leading-5 text-white/80">{location.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* SHORTLET EXPERIENCE */}
        <section id="shortlet-experience" className="overflow-hidden bg-white">
          <div className="mx-auto grid max-w-[1440px] lg:grid-cols-2">
            <div className="relative min-h-[400px] lg:min-h-[650px]">
              <Image
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=88"
                alt="Warm, thoughtfully designed luxury living space"
                fill
                unoptimized
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center px-6 py-16 sm:px-12 lg:px-16 xl:px-24">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--brand-gold)]">
                Your Lagos stay, considered
              </p>
              <h2 className="mt-5 font-editorial text-5xl leading-[1.08] tracking-[-0.05em] text-[var(--brand-navy)] sm:text-6xl">
                Come home to a different kind of stay.
              </h2>
              <p className="mt-6 max-w-lg text-sm leading-8 text-[var(--brand-charcoal)]/70">
                Discover shortlet spaces that make room for the way you travel.
                From a weekend in the city to an extended visit home, find a place
                that feels right.
              </p>

              <ul className="mt-8 space-y-4 text-sm text-[var(--brand-charcoal)]/80">
                <li className="flex items-center gap-3"><span className="text-[var(--brand-gold)]">✦</span> Explore places by location and stay type</li>
                <li className="flex items-center gap-3"><span className="text-[var(--brand-gold)]">✦</span> Review amenities, house rules and host information</li>
                <li className="flex items-center gap-3"><span className="text-[var(--brand-gold)]">✦</span> Enquire directly and confirm availability with the host</li>
              </ul>

              <Link href="#contact" className="mt-9 inline-flex min-h-14 w-fit items-center gap-6 bg-[var(--brand-orange)] px-7 text-xs font-semibold text-white transition-colors hover:bg-[var(--brand-navy)]">
                Discover your next stay <ArrowIcon />
              </Link>
              <p className="mt-4 text-[10px] leading-5 text-[var(--brand-charcoal)]/50">
                All shortlet enquiries are subject to host availability and confirmation.
              </p>
            </div>
          </div>
        </section>

        {/* JOURNAL */}
        <section id="journal" className="bg-[var(--brand-navy)] px-5 py-16 text-white sm:px-8 lg:px-14 lg:py-24">
          <div className="mx-auto max-w-[1440px]">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--brand-gold)]">
                  Beyond the property
                </p>
                <h2 className="mt-4 font-editorial text-4xl leading-tight tracking-[-0.04em] sm:text-5xl lg:text-[58px]">
                  A deeper perspective on Lagos.
                </h2>
                <p className="mt-5 max-w-xl text-sm leading-7 text-white/65">
                  A monthly publication exploring the people, places, developments
                  and ideas shaping the Lagos real estate market.
                </p>
              </div>
              <span className="font-editorial text-xl italic text-[var(--brand-gold)]">
                The Lagos Journal
              </span>
            </div>

            <div className="mt-12 grid gap-px bg-white/15 md:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Market intelligence",
                  text: "Understand the forces, opportunities and considerations influencing the property market.",
                },
                {
                  number: "02",
                  title: "Location focus",
                  text: "Explore Lagos neighbourhoods, their character and their investment context.",
                },
                {
                  number: "03",
                  title: "Developer spotlight",
                  text: "Meet the developers and projects contributing to the city's changing landscape.",
                },
              ].map((item) => (
                <article key={item.number} className="bg-[var(--brand-navy)] p-7 sm:p-9">
                  <p className="font-editorial text-2xl italic text-[var(--brand-gold)]">{item.number}</p>
                  <h3 className="mt-7 font-editorial text-2xl sm:text-3xl">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/60">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* DEVELOPERS */}
        <section id="developers" className="bg-[var(--brand-ivory)] px-5 py-16 sm:px-8 lg:px-14 lg:py-24">
          <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <SectionHeading
                eyebrow="The people behind the places"
                title="Meet the developers shaping Lagos."
                description="Discover property developers, explore their projects and find a more informed way to start a conversation about your next investment."
              />
              <Link href="#contact" className="mt-8 inline-flex min-h-14 items-center gap-6 bg-[var(--brand-navy)] px-7 text-xs font-semibold text-white transition-colors hover:bg-[var(--brand-orange)]">
                Connect with our team <ArrowIcon />
              </Link>
            </div>
            <div className="relative min-h-[340px] overflow-hidden sm:min-h-[440px]">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85"
                alt="Modern city architecture and high-rise development"
                fill
                unoptimized
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-navy)]/45 to-transparent" />
              <p className="absolute bottom-6 left-6 font-editorial text-2xl text-white sm:bottom-9 sm:left-9 sm:text-3xl">
                Built on vision. Shaped by place.
              </p>
            </div>
          </div>
        </section>

        {/* DIASPORA */}
        <section id="about" className="relative overflow-hidden bg-[var(--brand-navy)] px-5 py-20 text-center text-white sm:px-8 lg:py-28">
          <div className="pointer-events-none absolute -right-24 -top-40 h-[430px] w-[430px] rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-8 -top-24 h-[300px] w-[300px] rounded-full border border-white/10" />
          <div className="relative mx-auto max-w-3xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--brand-gold)]">
              Wherever you call home
            </p>
            <h2 className="mt-6 font-editorial text-5xl leading-[1.08] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Closer to home.
              <span className="mt-2 block italic text-[var(--brand-gold)]">
                Closer to opportunity.
              </span>
            </h2>
            <p className="mx-auto mt-7 max-w-xl text-sm leading-8 text-white/65 sm:text-base">
              For Nigerians at home and across the world, The Lagos Journal
              brings property discovery, local perspective and the Lagos experience
              closer together.
            </p>
            <p className="mt-8 font-editorial text-2xl italic text-white sm:text-3xl">
              Buy Nigeria. Explore Nigeria.
            </p>
            <Link href="#property-discovery" className="mt-9 inline-flex min-h-14 items-center gap-6 bg-[var(--brand-orange)] px-8 text-xs font-semibold text-white transition-colors hover:bg-white hover:text-[var(--brand-navy)]">
              Begin exploring <ArrowIcon />
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
