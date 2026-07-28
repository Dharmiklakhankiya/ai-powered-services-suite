import Link from "next/link";
import { ServiceCard } from "../components/service-card";

const services = [
  {
    title: "Consulting Booking",
    description:
      "Schedule a session with the right service expert in a few steps.",
    href: "/consulting-booking",
    cta: "Book",
  },
  {
    title: "AI Query Assistant",
    description:
      "Get fast answers from a focused assistant built for service workflows.",
    href: "/ai-query-assistant",
    cta: "Ask",
  },
  {
    title: "Resume Builder",
    description: "Create a clean, job-ready resume with a guided editing flow.",
    href: "/resume-builder",
    cta: "Build",
  },
] as const;

export default function Home() {
  return (
    <main className="flex min-h-screen items-center bg-[var(--background)] px-4 py-6 text-[var(--foreground)] sm:px-6 sm:py-8 lg:px-8">
      <section className="mx-auto flex w-full max-w-6xl flex-col border border-[var(--line)] bg-[var(--surface)] shadow-[0_18px_40px_rgba(0,0,0,0.08)]">
        <header className="flex items-center justify-between border-b border-[var(--line)] px-4 py-3 text-sm font-medium uppercase tracking-[0.18em] sm:px-6">
          <h1 className="text-[13px] sm:text-sm">AI Powered Services Suite</h1>
          <Link
            href="https://github.com/Dharmiklakhankiya"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile opens in a new tab"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-4 py-2 text-[11px] tracking-[0.14em] transition-[background-color,color,border-color,transform] duration-200 ease-out hover:-translate-y-0.5 hover:bg-[var(--foreground)] hover:text-[var(--background)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--foreground)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)]"
          >
            GitHub <span aria-hidden>↗</span>
          </Link>
        </header>

        <div className="p-4 sm:p-6 lg:p-8">
          <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
