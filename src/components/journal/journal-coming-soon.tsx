import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export default function JournalComingSoon() {
  return (
    <>
      <SiteHeader />

      <main className="flex min-h-[65vh] items-center justify-center bg-[#17232D] px-6 text-center text-white">
        <h1 className="font-editorial text-4xl leading-tight tracking-[-0.025em] sm:text-5xl md:text-6xl">
          Next Edition
          <br />
          <span className="italic text-[#D8B982]">Coming Soon.</span>
        </h1>
      </main>

      <SiteFooter />
    </>
  );
}
