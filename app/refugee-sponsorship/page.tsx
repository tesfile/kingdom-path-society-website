import type { Metadata } from "next";
import { ClipboardList, FileText, HeartHandshake, ShieldCheck } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { PageHeader } from "@/components/PageHeader";
import { SupportRequestForm } from "@/components/SupportRequestForm";

export const metadata: Metadata = {
  title: "Refugee Sponsorship",
  description:
    "Refugee sponsorship support and community coordination from Kingdom Path Society."
};

export default function RefugeeSponsorshipPage() {
  return (
    <>
      <PageHeader
        eyebrow="Refugee Sponsorship"
        title="Helping families pursue safety, stability, and belonging."
        description="Kingdom Path Society provides generic sponsorship guidance, preparation support, and compassionate community care for refugees and displaced families."
      />

      <section className="section-y bg-white">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">Sponsorship Support</p>
            <h2 className="mt-3 text-3xl font-black text-navy-950 sm:text-4xl">
              Practical help for a complex journey.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Sponsorship can involve documents, coordination, settlement planning, and community
              support. Our role is to help families understand next steps and connect with care.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                title: "Initial Guidance",
                text: "General information about sponsorship pathways and preparation.",
                icon: <ClipboardList className="size-6" />
              },
              {
                title: "Document Readiness",
                text: "Support with organizing records, forms, and required materials.",
                icon: <FileText className="size-6" />
              },
              {
                title: "Community Care",
                text: "Volunteer teams and partners helping families feel welcomed.",
                icon: <HeartHandshake className="size-6" />
              },
              {
                title: "Settlement Planning",
                text: "Planning for practical needs before and after arrival.",
                icon: <ShieldCheck className="size-6" />
              }
            ].map((item) => (
              <div key={item.title} className="rounded-lg border border-slate-200 bg-mist-50 p-6">
                <div className="text-gold-700">{item.icon}</div>
                <h3 className="mt-4 text-lg font-black text-navy-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="support-request" className="section-y bg-mist-50">
        <div className="container-page grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="eyebrow">Request Support</p>
            <h2 className="mt-3 text-3xl font-black text-navy-950 sm:text-4xl">
              Tell us what support is needed.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Use this placeholder form to share a general request. A secure backend can be
              connected later for intake, case notes, and private document handling.
            </p>
          </div>
          <SupportRequestForm />
        </div>
      </section>

      <CTASection
        title="Support families on the path to safety."
        text="Volunteer, give, or contact Kingdom Path Society to learn how to help with refugee sponsorship support."
        actions={[
          { label: "Volunteer", href: "/volunteer" },
          { label: "Donate", href: "/donate", variant: "outline" },
          { label: "Contact Us", href: "/contact", variant: "outline" }
        ]}
      />
    </>
  );
}
