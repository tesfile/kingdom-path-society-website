import {
  BookOpen,
  Gift,
  HandHeart,
  HeartHandshake,
  Home,
  LifeBuoy,
  ShieldCheck,
  Sprout,
  Users
} from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { site, values } from "@/data/site";

const services = [
  {
    title: "Refugee Sponsorship",
    description: "Guidance and community coordination for sponsorship pathways and family support.",
    href: "/refugee-sponsorship",
    icon: <ShieldCheck className="size-6" />
  },
  {
    title: "Family Reunification Support",
    description: "Practical help for families navigating reunification needs and next steps.",
    href: "/contact#support-request",
    icon: <Home className="size-6" />
  },
  {
    title: "Newcomer Settlement Support",
    description: "Welcoming support for housing, community connection, orientation, and belonging.",
    href: "/newcomer-support",
    icon: <Users className="size-6" />
  },
  {
    title: "Humanitarian Aid",
    description: "Compassionate assistance for vulnerable individuals and families facing urgent needs.",
    href: "/humanitarian-services",
    icon: <Gift className="size-6" />
  },
  {
    title: "Community Support",
    description: "Local care, referrals, and supportive programs shaped around community needs.",
    href: "/humanitarian-services#community-support",
    icon: <HeartHandshake className="size-6" />
  },
  {
    title: "Volunteer Programs",
    description: "Meaningful opportunities for people of faith and goodwill to serve with care.",
    href: "/volunteer",
    icon: <HandHeart className="size-6" />
  },
  {
    title: "Prayer and Pastoral Care",
    description: "Faith-centered encouragement and compassionate listening for those who request it.",
    href: "/humanitarian-services#pastoral-care",
    icon: <BookOpen className="size-6" />
  },
  {
    title: "Youth and Family Support",
    description: "Supportive programs that help children, youth, and families feel safe and connected.",
    href: "/newcomer-support#family-support",
    icon: <Sprout className="size-6" />
  }
];

export default function HomePage() {
  return (
    <>
      <Hero
        title={site.name}
        subtitle={site.slogan}
        text={site.faithLine}
        imageSrc="/images/kingdom-path-hope.png"
        actions={[
          {
            label: "Request Support",
            href: "/contact#support-request",
            icon: <LifeBuoy className="size-4" />
          },
          {
            label: "Become a Volunteer",
            href: "/volunteer",
            variant: "outline",
            icon: <HandHeart className="size-4" />
          },
          {
            label: "Donate",
            href: "/donate",
            variant: "outline",
            icon: <Gift className="size-4" />
          }
        ]}
      />

      <section className="section-y bg-white">
        <div className="container-page grid gap-8 lg:grid-cols-2">
          <div className="rounded-lg border border-slate-200 bg-mist-50 p-6 sm:p-8">
            <p className="eyebrow">Mission</p>
            <h2 className="mt-3 text-2xl font-black text-navy-950 sm:text-3xl">Our Mission</h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">{site.mission}</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="eyebrow">Vision</p>
            <h2 className="mt-3 text-2xl font-black text-navy-950 sm:text-3xl">Our Vision</h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">{site.vision}</p>
          </div>
        </div>
      </section>

      <section className="section-y bg-mist-50">
        <div className="container-page">
          <div className="max-w-3xl">
            <p className="eyebrow">Services</p>
            <h2 className="mt-3 text-3xl font-black tracking-normal text-navy-950 sm:text-4xl">
              Walking with families through practical care.
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-700">
              Kingdom Path Society offers compassionate support through programs designed for
              refugees, newcomers, displaced families, and vulnerable communities.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow">Why Kingdom Path Society</p>
            <h2 className="mt-3 text-3xl font-black text-navy-950 sm:text-4xl">
              We walk alongside families with care, respect, and practical support.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Our work is grounded in Christian service and openhearted care for every person
              seeking safety, hope, belonging, and a new beginning.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {values.map((value) => (
                <span
                  key={value}
                  className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-navy-900"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-slate-200 bg-navy-50 p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                "Respectful intake and listening",
                "Community referrals and coordination",
                "Volunteer care teams",
                "Faith-informed encouragement"
              ].map((item) => (
                <div key={item} className="rounded-lg bg-white p-5 shadow-sm">
                  <ShieldCheck className="size-6 text-gold-700" aria-hidden="true" />
                  <p className="mt-3 text-sm font-bold leading-6 text-navy-950">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Join Us in Building Hope"
        text="Serve, give, or connect with Kingdom Path Society as we support families and communities with compassion."
        actions={[
          { label: "Volunteer", href: "/volunteer", icon: <HandHeart className="size-4" /> },
          { label: "Donate", href: "/donate", variant: "outline", icon: <Gift className="size-4" /> },
          { label: "Contact Us", href: "/contact", variant: "outline" }
        ]}
      />

      <section className="section-y bg-white">
        <div className="container-page rounded-lg border border-slate-200 bg-mist-50 p-6 sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="eyebrow">Need Support?</p>
              <h2 className="mt-3 text-2xl font-black text-navy-950 sm:text-3xl">
                Request compassionate support from our team.
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700">
                Share a support request so Kingdom Path Society can understand the need and help
                identify next steps.
              </p>
            </div>
            <ButtonLink href="/contact#support-request" variant="secondary">
              Request Support
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
