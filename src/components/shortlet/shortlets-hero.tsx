import Image from "next/image";

export function ShortletsHero() {
  return (
    <section className="overflow-hidden bg-[var(--brand-navy)] text-white">
      <div className="mx-auto grid max-w-[1440px] lg:min-h-[570px] lg:grid-cols-[1.02fr_0.98fr]">
        <div className="flex flex-col justify-center px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-24">
          <p className="mb-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--brand-gold)]">
            <span className="h-px w-8 bg-[var(--brand-gold)]" />
            The Lagos short-stay collection
          </p>

          <h1 className="max-w-[650px] font-editorial text-[clamp(3.2rem,6.2vw,5.8rem)] leading-[1.02] tracking-[-0.055em]">
            Stay a little
            <span className="block italic text-[var(--brand-gold)]">
              closer to Lagos.
            </span>
          </h1>

          <p className="mt-7 max-w-lg text-sm leading-8 text-white/70 sm:text-base">
            Find a stay that fits the way you experience the city. Explore
            Lagos neighbourhoods, consider the details that matter and connect
            directly to make your enquiry.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <a
              href="#shortlet-search"
              className="inline-flex min-h-12 items-center justify-center gap-3 bg-[var(--brand-orange)] px-6 text-xs font-semibold text-white transition-colors hover:bg-[var(--brand-gold)]"
            >
              Explore shortlets
              <span aria-hidden="true">↗</span>
            </a>

            <a
              href="#the-right-stay"
              className="text-xs font-medium text-white/75 transition-colors hover:text-white"
            >
              Find the right kind of stay
            </a>
          </div>

          <div className="mt-14 border-t border-white/15 pt-6">
            <p className="font-editorial text-xl italic text-white/80">
              Buy Nigeria. Explore Nigeria.
            </p>
          </div>
        </div>

        <div className="relative min-h-[340px] overflow-hidden sm:min-h-[460px] lg:min-h-full">
          <Image
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85"
            alt="Editorial image of a thoughtfully designed contemporary living space"
            fill
            priority
            unoptimized
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-navy)]/50 via-transparent to-transparent" />

          <div className="absolute bottom-7 left-6 border-l border-[var(--brand-gold)] pl-4 sm:bottom-10 sm:left-10">
            <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/75">
              Space. Comfort. Connection.
            </p>
            <p className="mt-2 font-editorial text-2xl text-white">
              Make Lagos feel like home.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
