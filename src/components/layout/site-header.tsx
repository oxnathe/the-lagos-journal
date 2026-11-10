import Link from "next/link";

const navigation = [
  { label: "The Journal", href: "#journal" },
  { label: "Buy Property", href: "#buy-property" },
  { label: "Shortlets", href: "#shortlets" },
  { label: "Locations", href: "#locations" },
  { label: "Developers", href: "#developers" },
];

export function SiteHeader() {
  return (
    <header className="relative z-30 border-b border-[var(--brand-sand)]/60 bg-[var(--brand-ivory)]">
      <div className="mx-auto flex min-h-[82px] max-w-[1440px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-14">
        <Link href="/" aria-label="The Lagos Journal homepage" className="group shrink-0">
          <span className="block font-editorial text-[25px] leading-none tracking-[-0.055em] text-[var(--brand-navy)] sm:text-[29px]">
            The Lagos Journal
          </span>
          <span className="mt-2 block text-[8px] font-semibold uppercase tracking-[0.24em] text-[var(--brand-gold)] sm:text-[9px]">
            Lagos Real Estate Investment in Focus
          </span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-7 xl:flex">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[12px] font-medium tracking-[0.015em] text-[var(--brand-charcoal)] transition-colors hover:text-[var(--brand-orange)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <Link
            href="#contact"
            className="hidden text-[12px] font-semibold text-[var(--brand-navy)] transition-colors hover:text-[var(--brand-orange)] sm:block"
          >
            Get in touch
          </Link>
          <Link
            href="#property-discovery"
            className="inline-flex min-h-11 items-center justify-center gap-2 bg-[var(--brand-navy)] px-4 text-[11px] font-semibold tracking-wide text-white transition-all hover:bg-[var(--brand-orange)] sm:px-5"
          >
            Explore Lagos
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>

      <nav
        aria-label="Mobile navigation"
        className="flex gap-6 overflow-x-auto border-t border-[var(--brand-sand)]/50 px-5 py-3 xl:hidden sm:px-8"
      >
        {navigation.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="shrink-0 text-[11px] font-medium text-[var(--brand-charcoal)] transition-colors hover:text-[var(--brand-orange)]"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
