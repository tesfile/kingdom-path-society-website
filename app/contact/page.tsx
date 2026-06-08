import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { PageHeader } from "@/components/PageHeader";
import { SupportRequestForm } from "@/components/SupportRequestForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Kingdom Path Society for support requests, volunteer interest, donation questions, or general inquiries."
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Connect with Kingdom Path Society."
        description="Reach out for support, volunteering, giving, partnership, or general questions."
      />

      <section className="section-y bg-white">
        <div className="container-page grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="rounded-lg border border-slate-200 bg-mist-50 p-6">
            <h2 className="text-2xl font-black text-navy-950">Contact Information</h2>
            <div className="mt-6 space-y-4 text-slate-700">
              <a href={`mailto:${site.email}`} className="flex gap-3 font-semibold hover:text-navy-950">
                <Mail className="mt-0.5 size-5 shrink-0 text-gold-700" aria-hidden="true" />
                {site.email}
              </a>
              <p className="flex gap-3 font-semibold">
                <Phone className="mt-0.5 size-5 shrink-0 text-gold-700" aria-hidden="true" />
                Phone contact placeholder
              </p>
              <p className="flex gap-3 font-semibold">
                <MapPin className="mt-0.5 size-5 shrink-0 text-gold-700" aria-hidden="true" />
                Service area placeholder
              </p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <section id="support-request" className="section-y bg-mist-50">
        <div className="container-page grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="eyebrow">Support Request Form</p>
            <h2 className="mt-3 text-3xl font-black text-navy-950 sm:text-4xl">
              Request Support
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Share a general support request and the type of help needed. Future secure intake
              features can be connected through the client portal.
            </p>
          </div>
          <SupportRequestForm />
        </div>
      </section>
    </>
  );
}
