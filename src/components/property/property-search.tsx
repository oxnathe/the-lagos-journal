type SearchFilters = {
  location?: string;
  type?: string;
  bedrooms?: string;
  minPrice?: string;
  maxPrice?: string;
};

const fieldClass =
  "mt-2 min-h-12 w-full border border-[var(--brand-sand)] bg-white px-3 text-sm text-[var(--brand-charcoal)] outline-none transition-colors focus:border-[var(--brand-orange)]";

export function PropertySearch({
  filters,
}: {
  filters: SearchFilters;
}) {
  return (
    <section
      id="property-search"
      aria-labelledby="property-search-title"
      className="scroll-mt-8"
    >
      <div className="border border-[var(--brand-sand)] bg-white p-5 shadow-[0_18px_55px_rgba(23,35,45,0.07)] sm:p-7 lg:p-8">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[var(--brand-gold)]">
              Begin your search
            </p>
            <h2
              id="property-search-title"
              className="mt-2 font-editorial text-3xl tracking-tight text-[var(--brand-navy)]"
            >
              What are you looking for?
            </h2>
          </div>

          <p className="text-xs text-[var(--brand-charcoal)]/60">
            Refine your property preferences.
          </p>
        </div>

        <form action="/buy-property" method="get">
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
              Property type
              <select
                name="type"
                defaultValue={filters.type ?? ""}
                className={fieldClass}
              >
                <option value="">All property types</option>
                <option value="apartment">Apartments</option>
                <option value="house">Houses</option>
                <option value="luxury">Luxury residences</option>
                <option value="land">Land</option>
                <option value="off-plan">Off-plan developments</option>
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
              Minimum price (₦)
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
              Maximum price (₦)
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
              Search preferences will be reflected in the page address.
              Verified property inventory will be connected as listings become available.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="/buy-property"
                className="inline-flex min-h-12 items-center justify-center border border-[var(--brand-sand)] px-5 text-xs font-semibold text-[var(--brand-charcoal)] transition-colors hover:border-[var(--brand-navy)]"
              >
                Clear filters
              </a>

              <button
                type="submit"
                className="inline-flex min-h-12 items-center justify-center gap-3 bg-[var(--brand-navy)] px-7 text-xs font-semibold text-white transition-colors hover:bg-[var(--brand-orange)]"
              >
                Search properties
                <span aria-hidden="true">↗</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}