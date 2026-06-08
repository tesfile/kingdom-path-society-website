import type { Metadata } from "next";
import { HandHeart, HeartHandshake, ShieldCheck, Users } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { VolunteerForm } from "@/components/VolunteerForm";

export const metadata: Metadata = {
  title: "Volunteer",
  description:
    "Become a volunteer with Kingdom Path Society and serve refugees, newcomers, and vulnerable communities."
};

export default function VolunteerPage() {
  return (
    <>
      <PageHeader
        eyebrow="Volunteer"
        title="Serve with compassion, consistency, and care."
        description="Volunteers help Kingdom Path Society welcome families, support practical needs, and build hope in the community."
      />

      <section className="section-y bg-white">
        <div className="container-page grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="eyebrow">Volunteer Pathways</p>
            <h2 className="mt-3 text-3xl font-black text-navy-950 sm:text-4xl">
              Use your gifts to support families with dignity.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Choose an area of interest and share your availability. A future volunteer workflow
              can connect this form to screening, scheduling, and team coordination.
            </p>
            <div className="mt-8 grid gap-4">
              {[
                { text: "Welcome and settlement support", icon: <HeartHandshake className="size-5" /> },
                { text: "Family and youth programs", icon: <Users className="size-5" /> },
                { text: "Practical aid and community events", icon: <HandHeart className="size-5" /> },
                { text: "Prayer, encouragement, and pastoral care", icon: <ShieldCheck className="size-5" /> }
              ].map((item) => (
                <div key={item.text} className="flex gap-3 rounded-lg border border-slate-200 bg-mist-50 p-4">
                  <span className="text-gold-700">{item.icon}</span>
                  <p className="font-bold text-navy-950">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <VolunteerForm />
        </div>
      </section>
    </>
  );
}
