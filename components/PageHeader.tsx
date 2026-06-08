type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="bg-navy-950 text-white">
      <div className="container-page py-14 sm:py-16">
        {eyebrow ? <p className="eyebrow text-gold-300">{eyebrow}</p> : null}
        <h1 className="mt-3 max-w-4xl text-3xl font-black leading-tight tracking-normal sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">{description}</p>
      </div>
    </section>
  );
}
