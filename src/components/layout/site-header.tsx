"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { label: "Home", href: "/" },
  { label: "The Journal", href: "/journal" },
  { label: "Buy Property", href: "/buy-property" },
  { label: "Shortlets", href: "/shortlets" },
  { label: "Locations", href: "/locations" },
  { label: "Developers", href: "/developers" },
];

function isCurrentPage(pathname: string, href: string) {
  return href === "/"
    ? pathname === "/"
    : pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();

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

        <nav aria-label="Main navigation" className="hidden items-center gap-6 xl:flex">
          {navigation.map((item) => {
            const active = isCurrentPage(pathname, item.href);
            return (
              <Link
                key={item.label}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className="journal-nav-link text-[12px] font-medium tracking-[0.015em]"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <Link
            href="/contact"
            aria-current={isCurrentPage(pathname, "/contact") ? "page" : undefined}
            className="journal-nav-link hidden text-[12px] font-semibold sm:inline-flex"
          >
            Get in touch
          </Link>
          <Link
            href="/locations"
            aria-current={isCurrentPage(pathname, "/locations") ? "page" : undefined}
            className="journal-nav-action inline-flex min-h-11 items-center justify-center gap-2 px-5 text-[11px] font-semibold tracking-wide sm:px-6"
          >
            Explore Lagos
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>

      <nav
        aria-label="Mobile navigation"
        className="flex gap-6 overflow-x-auto border-t border-[var(--brand-sand)]/50 px-5 py-2 xl:hidden sm:px-8"
      >
        {navigation.map((item) => {
          const active = isCurrentPage(pathname, item.href);
          return (
            <Link
              key={item.label}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className="journal-nav-link journal-nav-link--mobile shrink-0 text-[11px] font-medium"
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
