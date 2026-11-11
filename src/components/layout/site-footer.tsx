import Link from "next/link";

const footerGroups = [
  {
    title: "Discover",
    links: [
      { label: "Buy Property", href: "/buy-property" },
      { label: "Explore Shortlets", href: "/shortlets" },
      { label: "Lagos Locations", href: "/locations" },
      { label: "The Journal", href: "/journal" },
    ],
  },
  {
    title: "The Journal",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Editorial", href: "/journal" },
      { label: "Developers", href: "/developers" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-[var(--brand-navy)] text-white">
      <div className="mx-auto max-w-[1440px] px-5 pb-10 pt-16 sm:px-8 lg:px-14 lg:pt-20">
        <div className="grid gap-12 border-b border-white/15 pb-14 md:grid-cols-[1.5fr_1fr_1fr]">
          <div className="max-w-md">
            <Link href="/" className="inline-block font-editorial text-[34px] tracking-[-0.055em] text-white">
              The Lagos Journal
            </Link>

            <p className="mt-3 max-w-sm text-sm leading-7 text-white/65">
              Lagos real estate investment in focus. Discover opportunities,
              explore the city and connect with the people shaping its property market.
            </p>

            <p className="mt-7 font-editorial text-xl italic text-[var(--brand-gold)]">
              Buy Nigeria. Explore Nigeria.
            </p>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--brand-gold)]">
                {group.title}
              </h3>

              <ul className="mt-6 space-y-4">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 pt-7 text-[10px] tracking-wide text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 The Lagos Journal. All rights reserved.</p>
          <p>Property. Perspective. Possibility.</p>
        </div>
      </div>
    </footer>
  );
}