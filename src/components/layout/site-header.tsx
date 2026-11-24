"use client";

import { useState } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <header className="journal-site-header relative z-30 border-b border-[var(--brand-sand)]/60 bg-[var(--brand-ivory)]">
      <div className="mx-auto flex min-h-[82px] max-w-[1440px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-14">

        <Link
          href="/"
          aria-label="The Lagos Journal homepage"
          className="group min-w-0 shrink-0"
        >
          <span className="block font-editorial text-[23px] leading-none tracking-[-0.055em] text-[var(--brand-navy)] sm:text-[29px]">
            The Lagos Journal
          </span>
          <span className="mt-2 block text-[7px] font-semibold uppercase tracking-[0.18em] text-[var(--brand-gold)] sm:text-[9px] sm:tracking-[0.24em]">
            Lagos Real Estate Investment in Focus
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-6 xl:flex"
        >
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

        {/* Desktop actions */}
        <div className="hidden shrink-0 items-center gap-3 xl:flex">
          <Link
            href="/contact"
            aria-current={isCurrentPage(pathname, "/contact") ? "page" : undefined}
            className="journal-nav-link text-[12px] font-semibold"
          >
            Get in touch
          </Link>

          <Link
            href="/locations"
            aria-current={isCurrentPage(pathname, "/locations") ? "page" : undefined}
            className="journal-nav-action inline-flex min-h-11 items-center justify-center gap-2 px-6 text-[11px] font-semibold tracking-wide"
          >
            Explore Lagos
            <span aria-hidden="true">
              {String.fromCharCode(8599)}
            </span>
          </Link>
        </div>

        {/* Mobile and tablet hamburger button */}
        <button
          type="button"
          className={`journal-menu-toggle xl:hidden ${menuOpen ? "is-open" : ""}`}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="journal-mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile and tablet dropdown */}
      {menuOpen && (
        <div
          id="journal-mobile-menu"
          className="journal-mobile-menu xl:hidden"
        >
          <nav aria-label="Mobile navigation">
            <div className="journal-mobile-links">
              {navigation.map((item) => {
                const active = isCurrentPage(pathname, item.href);

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setMenuOpen(false)}
                    className="journal-nav-link journal-mobile-link"
                  >
                    {item.label}
                    <span aria-hidden="true">
                      {String.fromCharCode(8599)}
                    </span>
                  </Link>
                );
              })}
            </div>

            <div className="journal-mobile-actions">
              <Link
                href="/locations"
                onClick={() => setMenuOpen(false)}
                aria-current={isCurrentPage(pathname, "/locations") ? "page" : undefined}
                className="journal-nav-action journal-mobile-explore"
              >
                Explore Lagos
                <span aria-hidden="true">
                  {String.fromCharCode(8599)}
                </span>
              </Link>

              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                aria-current={isCurrentPage(pathname, "/contact") ? "page" : undefined}
                className="journal-mobile-contact"
              >
                Get in Touch
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}