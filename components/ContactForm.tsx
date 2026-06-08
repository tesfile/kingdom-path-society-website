import { Mail } from "lucide-react";
import { FormInput, FormSelect, FormTextArea } from "@/components/FormField";
import { site } from "@/data/site";

export function ContactForm() {
  return (
    <form className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="grid gap-5 sm:grid-cols-2">
        <FormInput label="Full Name" name="fullName" placeholder="Enter full name" required />
        <FormInput label="Email" name="email" type="email" placeholder="Enter email address" required />
        <FormInput label="Phone" name="phone" type="tel" placeholder="Enter phone number" />
        <FormSelect
          label="Reason for Contact"
          name="reason"
          required
          options={[
            "Request support",
            "Volunteer",
            "Donate",
            "Partnership",
            "General question"
          ]}
        />
        <div className="sm:col-span-2">
          <FormTextArea label="Message" name="message" placeholder="Write your message" required />
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-4 border-t border-slate-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-center gap-2 text-sm text-slate-600">
          <Mail className="size-4 text-gold-700" aria-hidden="true" />
          For urgent needs, email {site.email}.
        </p>
        <button
          type="button"
          className="inline-flex min-h-11 items-center justify-center rounded-md bg-navy-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-navy-800"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}
