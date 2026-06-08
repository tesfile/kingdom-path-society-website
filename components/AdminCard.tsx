import type { ReactNode } from "react";

type AdminCardProps = {
  title: string;
  description: string;
  icon: ReactNode;
};

export function AdminCard({ title, description, icon }: AdminCardProps) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <div className="grid size-12 place-items-center rounded-md bg-navy-50 text-navy-800">
        {icon}
      </div>
      <h3 className="mt-5 text-lg font-black text-navy-950">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
    </div>
  );
}
