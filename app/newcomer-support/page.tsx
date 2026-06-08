import type { Metadata } from "next";
import { CalendarDays, Home, Sprout, Users } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { PageHeader } from "@/components/PageHeader";
import { SupportRequestForm } from "@/components/SupportRequestForm";

export const metadata: Metadata = {
  title: "Newcomer Support",
  description:
    "Settlement support, community connection, youth support, and family care for newcomers."
};

export default function NewcomerSupportPage() {
  return (
    <>
      <PageHeader
        eyebrow="Newcomer Support"
        title="Helping newcomers build stability, confidence, and belonging."
        description="Kingdom Path Society offers welcoming support for families and individuals beginning a new chapter in the community."
      />

      <section className="section-y bg-white">
        <div className="container-page grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Settlement Orientation",
              text: "General guidance for community resources, appointments, and next steps.",
              icon: <CalendarDays className="size-6" />
            },
            {
              title: "Housing Readiness",
              text: "Supportive referrals and practical preparation for safe housing needs.",
              icon: <Home className="size-6" />
            },
            {
              title: "Community Connection",
              text: "Welcoming relationships that help newcomers feel known and supported.",
              icon: <Users className="size-6" />
            },
            {
              title: "Youth and Family Support",
              text: "Encouragement for children, youth, and caregivers adjusting together.",
              icon: <Sprout className="size-6" />,
              id: "family-support"
            }
          ].map((item) => (
            <article
              id={item.id}
              key={item.title}
              className="rounded-lg border border-slate-200 bg-mist-50 p-6"
            >
              <div className="text-gold-700">{item.icon}</div>
              <h2 className="mt-4 text-lg font-black text-navy-950">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-700">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-y bg-mist-50">
        <div className="container-page grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="eyebrow">Support Request</p>
            <h2 className="mt-3 text-3xl font-black text-navy-950 sm:text-4xl">
              Share a newcomer support need.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              This placeholder form captures the basic information future intake teams may need to
              respond with care and clarity.
            </p>
          </div>
          <SupportRequestForm />
        </div>
      </section>

      <CTASection
        title="Welcome begins with practical care."
        text="Join Kingdom Path Society in helping newcomers find safety, hope, belonging, and a new beginning."
        actions={[
          { label: "Become a Volunteer", href: "/volunteer" },
          { label: "Contact Us", href: "/contact", variant: "outline" }
        ]}
      />
    </>
  );
}
