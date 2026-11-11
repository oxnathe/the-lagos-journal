import Link from "next/link";

const categories = [
  {
    number: "01",
    title: "Apartments",
    description: "Explore apartment opportunities across Lagos.",
    type: "apartment",
  },
  {
    number: "02",
    title: "Houses",
    description: "Discover homes for different lifestyles.",
    type: "house",
  },
  {
    number: "03",
    title: "Luxury residences",
    description: "Explore premium residential property.",
    type: "luxury",
  },
  {
    number: "04",
    title: "Land",
    description: "Consider land opportunities and their documentation.",
    type: "land",
  },
  {
    number: "05",
    title: "Off-plan developments",
    description: "Review developments at different construction stages.",
    type: "off-plan",
  },
];

export function PropertyCategories() {
  return (
    <section className="py-20 sm:py-24">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[var(--brand-gold)]">
            Find your property
          </p>

          <h2 className="mt-3 font-editorial text-4xl leading-tight tracking-[-0.04em] text-[var(--brand-navy)] sm:text-5xl">
            Explore by property type.
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--brand-charcoal)]/65">
            Different property decisions call for different considerations.
            Start with the type of property that fits your plans.
          </p>
        </div>

        <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--brand-charcoal)]/45">
          Five ways to explore
        </span>
      </div>

      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {categories.map((category) => (
          <Link
            key={category.type}
            href={`/buy-property?type=${category.type}`}
            className="group flex min-h-[225px] flex-col justify-between border border-[var(--brand-sand)] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--brand-gold)] hover:shadow-[0_16px_40px_rgba(23,35,45,0.07)]"
          >
            <div className="flex items-center justify-between">
              <span className="font-editorial text-2xl text-[var(--brand-gold)]">
                {category.number}
              </span>

              <span className="text-lg text-[var(--brand-charcoal)]/40 transition-all group-hover:translate-x-1 group-hover:text-[var(--brand-orange)]">
                ↗
              </span>
            </div>

            <div>
              <h3 className="font-editorial text-2xl leading-tight text-[var(--brand-navy)]">
                {category.title}
              </h3>

              <p className="mt-3 text-xs leading-6 text-[var(--brand-charcoal)]/60">
                {category.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}