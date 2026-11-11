import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { getWhatsAppUrl } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Contact The Lagos Journal",
  description:
    "Contact The Lagos Journal about property sales, shortlets, developers and general enquiries.",
};

const enquiryTypes = [
  {
    title: "Buy property",
    description: "Ask about residential property opportunities and developments.",
    message: "Hello The Lagos Journal, I would like to enquire about buying property in Lagos.",
  },
  {
    title: "Shortlets",
    description: "Tell us about the kind of short-stay accommodation you need.",
    message: "Hello The Lagos Journal, I would like to enquire about shortlet accommodation in Lagos.",
  },
  {
    title: "Developers and partnerships",
    description: "Discuss development listings, representation and partnerships.",
    message: "Hello The Lagos Journal, I would like to make a developer or partnership enquiry.",
  },
  {
    title: "General enquiry",
    description: "Reach our team about anything else.",
    message: "Hello The Lagos Journal, I have a general enquiry.",
  },
];

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-[70vh] bg-[var(--brand-ivory)]">
        <section className="bg-[var(--brand-navy)] px-5 py-20 text-white sm:px-8 lg:px-14 lg:py-24">
          <div className="mx-auto max-w-[1200px]">
            <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[var(--brand-gold)]">
              We would like to hear from you
            </p>
            <h1 className="mt-4 max-w-3xl font-editorial text-5xl leading-tight tracking-[-0.045em] sm:text-6xl">
              Start a conversation.
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-8 text-white/70">
              Choose the subject of your enquiry and continue directly with
              The Lagos Journal team on WhatsApp.
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1200px] gap-4 px-5 py-16 sm:grid-cols-2 sm:px-8 lg:px-14 lg:py-20">
          {enquiryTypes.map((item) => (
            <article
              key={item.title}
              className="flex min-h-[220px] flex-col justify-between border border-[var(--brand-sand)] bg-white p-7"
            >
              <div>
                <h2 className="font-editorial text-2xl text-[var(--brand-navy)]">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-[var(--brand-charcoal)]/65">
                  {item.description}
                </p>
              </div>
              <a
                href={getWhatsAppUrl(item.message)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex min-h-11 w-fit items-center justify-center bg-[var(--brand-orange)] px-5 text-xs font-semibold text-white transition-colors hover:bg-[var(--brand-navy)]"
              >
                Continue on WhatsApp
                <span aria-hidden="true" className="ml-3">↗</span>
              </a>
            </article>
          ))}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
