import type { Metadata } from "next";
import { CheckCircle2, HeartHandshake, ShieldCheck } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { PageHeader } from "@/components/PageHeader";
import { site, values } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Kingdom Path Society, a Christian humanitarian organization serving refugees, newcomers, and vulnerable communities."
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="A Christian humanitarian organization serving with compassion and dignity."
        description="Kingdom Path Society exists to walk with refugees, displaced families, newcomers, and vulnerable communities through practical care, faithful service, and meaningful connection."
      />

      <section className="section-y bg-white">
        <div className="container-page grid gap-8 lg:grid-cols-2">
          <div className="rounded-lg border border-slate-200 bg-mist-50 p-6 sm:p-8">
            <ShieldCheck className="size-8 text-gold-700" aria-hidden="true" />
            <h2 className="mt-4 text-2xl font-black text-navy-950">Mission</h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">{site.mission}</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <HeartHandshake className="size-8 text-gold-700" aria-hidden="true" />
            <h2 className="mt-4 text-2xl font-black text-navy-950">Vision</h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">{site.vision}</p>
          </div>
        </div>
      </section>

      <section className="section-y bg-mist-50">
        <div className="container-page grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="eyebrow">Our Values</p>
            <h2 className="mt-3 text-3xl font-black text-navy-950 sm:text-4xl">
              Faithful service shaped by care.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Our values guide how we listen, serve, partner, and support families during moments
              of transition and need.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((value) => (
              <div key={value} className="flex gap-3 rounded-lg border border-slate-200 bg-white p-5">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-gold-700" aria-hidden="true" />
                <p className="font-bold text-navy-950">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-page">
          <div className="max-w-3xl">
            <p className="eyebrow">How We Serve</p>
            <h2 className="mt-3 text-3xl font-black text-navy-950 sm:text-4xl">
              A steady path of welcome, support, and hope.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Listen",
                text: "We begin with respectful listening so families can share needs, concerns, and goals."
              },
              {
                title: "Coordinate",
                text: "We connect people with practical resources, volunteers, partners, and community support."
              },
              {
                title: "Walk Alongside",
                text: "We offer ongoing encouragement as families build stability, belonging, and a new beginning."
              }
            ].map((item) => (
              <div key={item.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-black text-navy-950">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Faith in Action. Hope for All."
        text="Connect with Kingdom Path Society to learn more about service, partnership, and community care."
        actions={[
          { label: "Contact Us", href: "/contact" },
          { label: "Volunteer", href: "/volunteer", variant: "outline" }
        ]}
      />
    </>
  );
}
