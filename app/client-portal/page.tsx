import type { Metadata } from "next";
import { FileText, LockKeyhole, MessageCircle, UploadCloud } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Client Portal",
  description:
    "Client portal placeholder for secure login, document upload, case updates, and private messages."
};

export default function ClientPortalPage() {
  return (
    <>
      <PageHeader
        eyebrow="Client Portal"
        title="Client portal coming soon."
        description="This placeholder page is prepared for future secure client services."
      />

      <section className="section-y bg-white">
        <div className="container-page">
          <div className="rounded-lg border border-slate-200 bg-mist-50 p-6 sm:p-8">
            <h2 className="text-2xl font-black text-navy-950">Future Portal Features</h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              Client portal coming soon. Future features will include secure login, document
              upload, case updates, and private messages.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "Secure login", icon: <LockKeyhole className="size-6" /> },
                { title: "Document upload", icon: <UploadCloud className="size-6" /> },
                { title: "Case updates", icon: <FileText className="size-6" /> },
                { title: "Private messages", icon: <MessageCircle className="size-6" /> }
              ].map((item) => (
                <div key={item.title} className="rounded-lg border border-slate-200 bg-white p-5">
                  <div className="text-gold-700">{item.icon}</div>
                  <h3 className="mt-4 font-black text-navy-950">{item.title}</h3>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <ButtonLink href="/contact" variant="secondary">
                Contact Us
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
