import { FormInput, FormSelect, FormTextArea } from "@/components/FormField";

export function VolunteerForm() {
  return (
    <form className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="grid gap-5 sm:grid-cols-2">
        <FormInput label="Full Name" name="fullName" placeholder="Enter full name" required />
        <FormInput label="Email" name="email" type="email" placeholder="Enter email address" required />
        <FormInput label="Phone" name="phone" type="tel" placeholder="Enter phone number" />
        <FormSelect
          label="Area of Interest"
          name="areaOfInterest"
          required
          options={[
            "Refugee sponsorship support",
            "Newcomer settlement",
            "Humanitarian aid",
            "Youth and family support",
            "Prayer and pastoral care",
            "Administration"
          ]}
        />
        <FormSelect
          label="Availability"
          name="availability"
          required
          options={[
            "Weekdays",
            "Evenings",
            "Weekends",
            "Occasional events",
            "Flexible"
          ]}
        />
        <div className="sm:col-span-2">
          <FormTextArea label="Message" name="message" placeholder="Tell us how you would like to serve" />
        </div>
      </div>
      <button
        type="button"
        className="mt-6 inline-flex min-h-11 items-center justify-center rounded-md bg-gold-400 px-5 py-3 text-sm font-bold text-navy-950 transition hover:bg-gold-300"
      >
        Submit Volunteer Interest
      </button>
    </form>
  );
}
