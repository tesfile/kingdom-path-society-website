import Image from "next/image";
import type { ReactNode } from "react";
import { ButtonLink } from "@/components/ButtonLink";

type HeroAction = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "outline" | "light";
  icon?: ReactNode;
};

type HeroProps = {
  title: string;
  subtitle: string;
  text: string;
  imageSrc: string;
  actions: HeroAction[];
};

export function Hero({ title, subtitle, text, imageSrc, actions }: HeroProps) {
  return (
    <section className="relative isolate flex min-h-[76svh] items-center overflow-hidden bg-navy-950 text-white">
      <Image
        src={imageSrc}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,33,51,0.92),rgba(13,33,51,0.72)_44%,rgba(13,33,51,0.22))]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-navy-950/45 to-transparent" />

      <div className="container-page relative z-10 py-20 sm:py-24 lg:py-28">
        <div className="max-w-3xl">
          <p className="eyebrow text-gold-300">{text}</p>
          <h1 className="mt-5 text-4xl font-black leading-tight tracking-normal text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-xl font-semibold leading-8 text-gold-100 sm:text-2xl">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {actions.map((action) => (
              <ButtonLink
                key={action.href + action.label}
                href={action.href}
                variant={action.variant}
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
