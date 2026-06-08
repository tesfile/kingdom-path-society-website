import type { Metadata } from "next";
import { BookOpen, HeartHandshake, LifeBuoy, PackageOpen, Users } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Humanitarian Services",
  description:
    "Humanitarian aid, community support, pastoral care, and practical assistance from Kingdom Path Society."
};

export default function HumanitarianServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Humanitarian Services"
        title="Compassionate care for urgent needs and long-term hope."
        description="Our humanitarian services are designed to respond with dignity, practical help, and faithful presence for vulnerable families and communities."
      />

      <section className="section-y bg-white">
        <div className="container-page">
          <div className="max-w-3xl">
            <p className="eyebrow">Care Areas</p>
            <h2 className="mt-3 text-3xl font-black text-navy-950 sm:text-4xl">
              Support that meets people with respect.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Kingdom Path Society uses generic placeholder program areas that can later be
              connected to real operations, partnerships, and reporting.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Humanitarian Aid",
                text: "General support for essential needs, basic supplies, and emergency referrals.",
                icon: <PackageOpen className="size-6" />
              },
              {
                title: "Community Support",
                text: "Care coordination, check-ins, referrals, and supportive local partnerships.",
                icon: <HeartHandshake className="size-6" />,
                id: "community-support"
              },
              {
                title: "Prayer and Pastoral Care",
                text: "Faith-centered encouragement and compassionate listening for those who request it.",
                icon: <BookOpen className="size-6" />,
                id: "pastoral-care"
              },
              {
                title: "Family Support",
                text: "Practical care for households adjusting to new circumstances and responsibilities.",
                icon: <Users className="size-6" />
              },
              {
                title: "Crisis Referrals",
                text: "Connections to appropriate services when urgent or specialized help is needed.",
                icon: <LifeBuoy className="size-6" />
              }
            ].map((item) => (
              <article
                id={item.id}
                key={item.title}
                className="rounded-lg border border-slate-200 bg-mist-50 p-6"
              >
                <div className="grid size-12 place-items-center rounded-md bg-white text-gold-700">
                  {item.icon}
                </div>
                <h3 className="mt-5 text-xl font-black text-navy-950">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-700">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-mist-50">
        <div className="container-page grid gap-8 lg:grid-cols-3">
          {[
            "We listen carefully and treat each request with dignity.",
            "We work through volunteers, partners, and practical referrals.",
            "We keep faith, hope, and compassion at the center of service."
          ].map((text, index) => (
            <div key={text} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-sm font-black text-gold-700">0{index + 1}</div>
              <p className="mt-4 text-lg font-bold leading-8 text-navy-950">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        title="Help extend practical care."
        text="Partner with Kingdom Path Society through volunteering, giving, prayer, and community connection."
        actions={[
          { label: "Volunteer", href: "/volunteer" },
          { label: "Contact Us", href: "/contact", variant: "outline" }
        ]}
      />
    </>
  );
}
