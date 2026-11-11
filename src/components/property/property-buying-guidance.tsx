import Link from "next/link";

const principles = [
  {
    number: "01",
    title: "Understand the property",
    description:
      "Review the property's location, description, ownership information and available documentation.",
  },
  {
    number: "02",
    title: "Ask the right questions",
    description:
      "Clarify the seller's authority, title documents, approvals, project status and any outstanding obligations.",
  },
  {
    number: "03",
    title: "Make an informed decision",
    description:
      "Seek independent professional legal and property advice before making a financial commitment.",
  },
];

export function PropertyBuyingGuidance() {
  return (
    <section
      id="buying-guidance"
      className="scroll-mt-10 bg-[var(--brand-navy)] py-20 text-white sm:py-24"
    >
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-14">
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[var(--brand-gold)]">
            Beyond the listing
          </p>

          <h2 className="mt-4 max-w-xl font-editorial text-4xl leading-[1.12] tracking-[-0.04em] sm:text-5xl">
            A property decision deserves more than a beautiful photograph.
          </h2>

          <p className="mt-6 max-w-md text-sm leading-8 text-white/65">
            Property discovery is only the beginning. Understand what is
            being offered, ask questions and carry out independent due
            diligence before committing.
          </p>

          <Link
            href="/journal"
            className="mt-8 inline-flex items-center gap-3 text-xs font-semibold text-[var(--brand-gold)] transition-colors hover:text-white"
          >
            Read The Journal
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className="divide-y divide-white/15 border-y border-white/15">
          {principles.map((principle) => (
            <article
              key={principle.number}
              className="grid gap-4 py-7 sm:grid-cols-[70px_1fr]"
            >
              <span className="font-editorial text-2xl text-[var(--brand-gold)]">
                {principle.number}
              </span>

              <div>
                <h3 className="font-editorial text-2xl">
                  {principle.title}
                </h3>

                <p className="mt-3 max-w-lg text-xs leading-7 text-white/60">
                  {principle.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}