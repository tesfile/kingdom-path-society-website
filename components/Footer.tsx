import Link from "next/link";
import { Mail, Globe2 } from "lucide-react";
import { allPageLinks, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="container-page py-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_1fr]">
          <div>
            <div className="text-xl font-black tracking-wide text-white">{site.name}</div>
            <p className="mt-3 max-w-md text-sm font-semibold text-gold-200">{site.slogan}</p>
            <p className="mt-2 max-w-md text-sm text-slate-300">{site.faithLine}</p>
          </div>

          <div>
            <div className="text-sm font-black uppercase tracking-[0.14em] text-gold-300">
              Pages
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {allPageLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-slate-300 transition hover:text-gold-200"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm font-black uppercase tracking-[0.14em] text-gold-300">
              Contact
            </div>
            <div className="mt-4 space-y-3 text-sm text-slate-300">
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-2 transition hover:text-gold-200"
              >
                <Mail className="size-4" aria-hidden="true" />
                Email: {site.email}
              </a>
              <a
                href={site.url}
                className="flex items-center gap-2 transition hover:text-gold-200"
              >
                <Globe2 className="size-4" aria-hidden="true" />
                Website: {site.website}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-slate-400">
          <p>{site.name} - {site.slogan} {site.faithLine}</p>
        </div>
      </div>
    </footer>
  );
}
