type SearchFilters = {
  location?: string;
  type?: string;
  bedrooms?: string;
  minPrice?: string;
  maxPrice?: string;
};

const fieldClass =
  "mt-2 min-h-12 w-full border border-[var(--brand-sand)] bg-white px-3 text-sm text-[var(--brand-charcoal)] outline-none transition-colors focus:border-[var(--brand-orange)]";

export function ShortletSearch({
  filters,
}: {
  filters: SearchFilters;
}) {
  return (
    <section
      id="shortlet-search"
      aria-labelledby="shortlet-search-title"
      className="scroll-mt-8"
    >
      <div className="border border-[var(--brand-sand)] bg-white p-5 shadow-[0_18px_55px_rgba(23,35,45,0.07)] sm:p-7 lg:p-8">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[var(--brand-gold)]">
              Plan your stay
            </p>
            <h2
              id="shortlet-search-title"
              className="mt-2 font-editorial text-3xl tracking-tight text-[var(--brand-navy)]"
            >
              What would make it feel right?
            </h2>
          </div>

          <p className="text-xs text-[var(--brand-charcoal)]/60">
            Set your preferred stay details.
          </p>
        </div>

        <form action="/shortlets" method="get">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            <label className="block text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--brand-charcoal)]">
              Location
              <select
                name="location"
                defaultValue={filters.location ?? ""}
                className={fieldClass}
              >
                <option value="">All Lagos locations</option>
                <option value="Ikoyi">Ikoyi</option>
                <option value="Victoria Island">Victoria Island</option>
                <option value="Lekki Phase 1">Lekki Phase 1</option>
                <option value="Banana Island">Banana Island</option>
                <option value="Eko Atlantic">Eko Atlantic</option>
                <option value="Oniru">Oniru</option>
                <option value="Ajah">Ajah</option>
                <option value="Ikeja">Ikeja</option>
              </select>
            </label>

            <label className="block text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--brand-charcoal)]">
              Stay type
              <select
                name="type"
                defaultValue={filters.type ?? ""}
                className={fieldClass}
              >
                <option value="">All stay types</option>
                <option value="serviced-apartment">Serviced apartments</option>
                <option value="private-home">Private homes</option>
                <option value="luxury-stay">Luxury stays</option>
                <option value="business-stay">Business stays</option>
              </select>
            </label>

            <label className="block text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--brand-charcoal)]">
              Bedrooms
              <select
                name="bedrooms"
                defaultValue={filters.bedrooms ?? ""}
                className={fieldClass}
              >
                <option value="">Any number</option>
                <option value="1">1 bedroom</option>
                <option value="2">2 bedrooms</option>
                <option value="3">3 bedrooms</option>
                <option value="4">4 bedrooms</option>
                <option value="5+">5+ bedrooms</option>
              </select>
            </label>

            <label className="block text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--brand-charcoal)]">
              Minimum nightly budget (₦)
              <input
                type="number"
                name="minPrice"
                min="0"
                inputMode="numeric"
                defaultValue={filters.minPrice ?? ""}
                placeholder="No minimum"
                className={fieldClass}
              />
            </label>

            <label className="block text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--brand-charcoal)]">
              Maximum nightly budget (₦)
              <input
                type="number"
                name="maxPrice"
                min="0"
                inputMode="numeric"
                defaultValue={filters.maxPrice ?? ""}
                placeholder="No maximum"
                className={fieldClass}
              />
            </label>
          </div>

          <div className="mt-6 flex flex-col gap-4 border-t border-[var(--brand-sand)]/70 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-lg text-[11px] leading-6 text-[var(--brand-charcoal)]/60">
              Your preferences will appear in the page address. They do not
              represent confirmed availability or live inventory.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="/shortlets"
                className="inline-flex min-h-12 items-center justify-center border border-[var(--brand-sand)] px-5 text-xs font-semibold text-[var(--brand-charcoal)] transition-colors hover:border-[var(--brand-navy)]"
              >
                Clear filters
              </a>

              <button
                type="submit"
                className="inline-flex min-h-12 items-center justify-center gap-3 bg-[var(--brand-navy)] px-7 text-xs font-semibold text-white transition-colors hover:bg-[var(--brand-orange)]"
              >
                Apply preferences
                <span aria-hidden="true">↗</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
