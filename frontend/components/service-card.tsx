import Link from 'next/link';

type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
  cta: string;
};

export function ServiceCard({ title, description, href, cta }: ServiceCardProps) {
  return (
    <article className="group flex h-full min-h-[220px] flex-col items-center border border-[var(--line)] bg-[color:var(--surface)] p-5 text-center text-[var(--foreground)] transition-[transform,border-color,background-color] duration-200 ease-out hover:-translate-y-0.5 hover:border-[var(--foreground)] hover:bg-[var(--background)] focus-within:-translate-y-0.5 focus-within:border-[var(--foreground)] focus-within:bg-[var(--background)]">
      <div className="flex flex-1 flex-col items-center justify-center">
        <h2 className="max-w-[11ch] text-2xl font-medium leading-[0.96] tracking-[-0.05em] sm:text-[1.7rem]">
          {title}
        </h2>
        <p className="mt-4 max-w-xs text-sm leading-6 text-[var(--muted)]">{description}</p>
      </div>

      <Link
        href={href}
        aria-label={`${cta} ${title}`}
        className="group mt-6 inline-flex w-fit items-center gap-2 border border-[var(--line)] px-5 py-2.5 text-sm font-medium transition-[background-color,color,border-color,transform] duration-200 ease-out hover:-translate-y-0.5 hover:bg-[var(--foreground)] hover:text-[var(--background)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--foreground)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)]"
      >
        <span>{cta}</span>
        <span aria-hidden className="transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-focus-visible:translate-x-0.5">
          →
        </span>
      </Link>
    </article>
  );
}