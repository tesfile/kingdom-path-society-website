import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
  icon: ReactNode;
};

export function ServiceCard({ title, description, href, icon }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group block rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-gold-300 hover:shadow-soft"
    >
      <div className="grid size-12 place-items-center rounded-md bg-gold-50 text-gold-700">
        {icon}
      </div>
      <h3 className="mt-5 text-lg font-black text-navy-950">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-navy-800">
        Learn more
        <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden="true" />
      </span>
    </Link>
  );
}
