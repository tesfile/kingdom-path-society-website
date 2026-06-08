import type { Metadata } from "next";
import { Newspaper } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Stories & Updates",
  description:
    "Placeholder stories and updates for Kingdom Path Society programs and community service."
};

const updates = [
  {
    category: "Community Update",
    title: "Welcoming support for newcomer families",
    text: "A placeholder update about community welcome efforts, volunteer coordination, and practical support."
  },
  {
    category: "Program Spotlight",
    title: "Faith in action through humanitarian service",
    text: "A placeholder story highlighting compassionate care, essential referrals, and local partnerships."
  },
  {
    category: "Volunteer Reflection",
    title: "Serving with respect and consistency",
    text: "A placeholder update about volunteer pathways, care teams, and the importance of steady presence."
  }
];

export default function StoriesUpdatesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Stories & Updates"
        title="Stories of hope, service, and community care."
        description="This page is ready for future stories, ministry updates, program announcements, and community reflections."
      />

      <section className="section-y bg-white">
        <div className="container-page">
          <div className="grid gap-5 md:grid-cols-3">
            {updates.map((update) => (
              <article key={update.title} className="rounded-lg border border-slate-200 bg-mist-50 p-6">
                <Newspaper className="size-7 text-gold-700" aria-hidden="true" />
                <p className="mt-5 text-xs font-black uppercase tracking-[0.14em] text-gold-700">
                  {update.category}
                </p>
                <h2 className="mt-3 text-xl font-black leading-7 text-navy-950">{update.title}</h2>
                <p className="mt-4 leading-7 text-slate-700">{update.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="More updates are coming soon."
        text="Kingdom Path Society can use this page to publish real updates, announcements, and stories as the organization grows."
        actions={[
          { label: "Contact Us", href: "/contact" },
          { label: "Volunteer", href: "/volunteer", variant: "outline" }
        ]}
      />
    </>
  );
}
