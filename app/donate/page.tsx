import type { Metadata } from "next";
import { Gift, HeartHandshake, ShieldCheck } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Donation placeholder page for Kingdom Path Society. Online donation integration coming soon."
};

export default function DonatePage() {
  return (
    <>
      <PageHeader
        eyebrow="Donate"
        title="Give toward compassionate support and practical hope."
        description="Your generosity can help Kingdom Path Society serve refugees, newcomers, displaced families, and vulnerable communities."
      />

      <section className="section-y bg-white">
        <div className="container-page grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="eyebrow">Donation Placeholder</p>
            <h2 className="mt-3 text-3xl font-black text-navy-950 sm:text-4xl">
              Online donation integration coming soon.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Online donation integration coming soon. For now, please contact Kingdom Path
              Society to learn how to give.
            </p>
            <p className="mt-4 rounded-lg border border-gold-200 bg-gold-50 p-4 text-sm font-semibold leading-6 text-navy-950">
              This placeholder page does not collect bank information, card numbers, or payment
              details.
            </p>
            <div className="mt-7">
              <ButtonLink href="/contact" variant="secondary">
                Contact Kingdom Path Society
              </ButtonLink>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                title: "Refugee and Newcomer Support",
                text: "Help provide practical care, welcome, and settlement support.",
                icon: <HeartHandshake className="size-6" />
              },
              {
                title: "Humanitarian Aid",
                text: "Support essential needs and compassionate community response.",
                icon: <Gift className="size-6" />
              },
              {
                title: "Family Stability",
                text: "Help families move toward safety, belonging, and hope.",
                icon: <ShieldCheck className="size-6" />
              }
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-slate-200 bg-mist-50 p-6 last:sm:col-span-2"
              >
                <div className="text-gold-700">{item.icon}</div>
                <h3 className="mt-4 text-lg font-black text-navy-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
