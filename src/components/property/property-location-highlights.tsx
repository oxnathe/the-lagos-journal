import Image from "next/image";
import Link from "next/link";

const locations = [
  {
    name: "Ikoyi",
    note: "Established residential character",
    image:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Victoria Island",
    note: "Residential and commercial district",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Lekki Phase 1",
    note: "A varied residential landscape",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",
  },
];

export function PropertyLocationHighlights() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col gap-5 px-5 sm:flex-row sm:items-end sm:justify-between sm:px-8 lg:px-14">
          <div className="max-w-2xl">
            <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[var(--brand-gold)]">
              The city, considered
            </p>

            <h2 className="mt-3 font-editorial text-4xl leading-tight tracking-[-0.04em] text-[var(--brand-navy)] sm:text-5xl">
              Explore Lagos by location.
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--brand-charcoal)]/65">
              Every neighbourhood has its own character. Explore the city
              and consider the setting behind your next property decision.
            </p>
          </div>

          <Link
            href="/locations"
            className="text-xs font-semibold text-[var(--brand-orange)] transition-colors hover:text-[var(--brand-navy)]"
          >
            Explore all locations ↗
          </Link>
        </div>

        <div className="mt-10 grid gap-5 px-5 sm:grid-cols-3 sm:px-8 lg:px-14">
          {locations.map((location, index) => (
            <Link
              key={location.name}
              href={`/buy-property?location=${encodeURIComponent(location.name)}`}
              className="group relative block min-h-[350px] overflow-hidden bg-[var(--brand-navy)]"
            >
              <Image
                src={location.image}
                alt={`Architectural inspiration for exploring ${location.name}`}
                fill
                unoptimized
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-navy)]/90 via-[var(--brand-navy)]/10 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-gold)]">
                  0{index + 1} / Lagos
                </span>

                <h3 className="mt-3 font-editorial text-3xl">
                  {location.name}
                </h3>

                <p className="mt-2 text-xs text-white/70">
                  {location.note}
                </p>

                <span className="mt-6 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.14em]">
                  Explore location
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}