import { FormInput, FormSelect, FormTextArea } from "@/components/FormField";

export function SupportRequestForm() {
  return (
    <form className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="grid gap-5 sm:grid-cols-2">
        <FormInput label="Full Name" name="fullName" placeholder="Enter full name" required />
        <FormInput label="Email" name="email" type="email" placeholder="Enter email address" required />
        <FormInput label="Phone" name="phone" type="tel" placeholder="Enter phone number" />
        <FormSelect
          label="Type of Support Needed"
          name="supportType"
          required
          options={[
            "Refugee sponsorship",
            "Family reunification support",
            "Settlement support",
            "Humanitarian aid",
            "Youth and family support",
            "Prayer or pastoral care",
            "Other support"
          ]}
        />
        <div className="sm:col-span-2">
          <FormTextArea label="Message" name="message" placeholder="Describe the support needed" required />
        </div>
      </div>
      <button
        type="button"
        className="mt-6 inline-flex min-h-11 items-center justify-center rounded-md bg-navy-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-navy-800"
      >
        Submit Support Request
      </button>
    </form>
  );
}
