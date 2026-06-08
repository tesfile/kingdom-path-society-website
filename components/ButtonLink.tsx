import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "light";
  icon?: ReactNode;
  className?: string;
};

const variants = {
  primary:
    "bg-gold-400 text-navy-950 hover:bg-gold-300 focus-visible:ring-gold-200",
  secondary:
    "bg-navy-950 text-white hover:bg-navy-800 focus-visible:ring-navy-200",
  outline:
    "border border-white/70 bg-white/10 text-white hover:bg-white hover:text-navy-950 focus-visible:ring-white/40",
  light:
    "border border-slate-200 bg-white text-navy-950 hover:border-gold-300 hover:bg-gold-50 focus-visible:ring-gold-100"
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  icon,
  className = ""
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-bold transition focus-visible:outline-none focus-visible:ring-4 ${variants[variant]} ${className}`}
    >
      <span>{children}</span>
      <span aria-hidden="true" className="shrink-0">
        {icon ?? <ArrowRight className="size-4" />}
      </span>
    </Link>
  );
}
