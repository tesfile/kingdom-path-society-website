"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { navigation, serviceLinks, site } from "@/data/site";
import { useState } from "react";

function isCurrent(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const servicesActive = serviceLinks.some((item) => isCurrent(pathname, item.href));

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="container-page">
        <div className="flex min-h-20 items-center justify-between gap-4">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center">
              <img
                src="/images/logo.png"
                alt="Kingdom Path Society"
                className="h-16 w-16 object-contain"
              />
            </div>

            <span className="min-w-0">
              <span className="block truncate text-sm font-black tracking-wide text-navy-950 sm:text-base">
                {site.name}
              </span>
              <span className="block truncate text-xs font-semibold text-slate-600">
                {site.slogan}
              </span>
            </span>
          </Link>

          <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
            {navigation.slice(0, 2).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-2 text-sm font-bold transition ${
                  isCurrent(pathname, item.href)
                    ? "bg-gold-50 text-navy-950"
                    : "text-slate-700 hover:bg-slate-100 hover:text-navy-950"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <div className="group relative">
              <button
                type="button"
                className={`inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-bold transition ${
                  servicesActive
                    ? "bg-gold-50 text-navy-950"
                    : "text-slate-700 hover:bg-slate-100 hover:text-navy-950"
                }`}
              >
                Services
                <ChevronDown className="size-4" aria-hidden="true" />
              </button>
              <div className="invisible absolute left-0 top-full w-64 pt-3 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                <div className="rounded-md border border-slate-200 bg-white p-2 shadow-soft">
                  {serviceLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded-md px-3 py-3 text-sm font-semibold text-slate-700 transition hover:bg-gold-50 hover:text-navy-950"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {navigation.slice(2).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-2 text-sm font-bold transition ${
                  isCurrent(pathname, item.href)
                    ? "bg-gold-50 text-navy-950"
                    : "text-slate-700 hover:bg-slate-100 hover:text-navy-950"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="grid size-11 place-items-center rounded-md border border-slate-200 text-navy-950 lg:hidden"
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {isOpen ? (
          <nav aria-label="Mobile navigation" className="border-t border-slate-200 py-4 lg:hidden">
            <div className="grid gap-1">
              {navigation.slice(0, 2).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-md px-3 py-3 text-base font-bold text-slate-800 hover:bg-slate-100"
                >
                  {item.label}
                </Link>
              ))}

              <div className="px-3 pb-1 pt-3 text-xs font-black uppercase tracking-[0.16em] text-gold-700">
                Services
              </div>
              {serviceLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-md px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-gold-50"
                >
                  {item.label}
                </Link>
              ))}

              {navigation.slice(2).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-md px-3 py-3 text-base font-bold text-slate-800 hover:bg-slate-100"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        ) : null}
      </div>
    </header>
  );
}