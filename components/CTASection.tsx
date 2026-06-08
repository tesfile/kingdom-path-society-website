import type { ReactNode } from "react";
import { ButtonLink } from "@/components/ButtonLink";

type CTAAction = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "outline" | "light";
  icon?: ReactNode;
};

type CTASectionProps = {
  title: string;
  text?: string;
  actions: CTAAction[];
};

export function CTASection({ title, text, actions }: CTASectionProps) {
  return (
    <section className="bg-navy-950 text-white">
      <div className="container-page py-14 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="eyebrow text-gold-300">Faith in action</p>
            <h2 className="mt-3 text-3xl font-black tracking-normal sm:text-4xl">{title}</h2>
            {text ? <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-200">{text}</p> : null}
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            {actions.map((action) => (
              <ButtonLink
                key={action.href + action.label}
                href={action.href}
                variant={action.variant ?? "primary"}
                icon={action.icon}
              >
                {action.label}
              </ButtonLink>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
