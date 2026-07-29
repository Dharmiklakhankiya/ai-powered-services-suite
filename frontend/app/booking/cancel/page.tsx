import Link from 'next/link';

export default function BookingCancelPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] px-4 py-6 text-[var(--foreground)] sm:px-6 sm:py-8 lg:px-8 flex items-center justify-center">
      <section className="mx-auto w-full max-w-lg px-4 py-8 sm:px-6 sm:py-10 lg:px-0">
        <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] px-5 py-8 sm:px-8 sm:py-10 text-center flex flex-col items-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-500/10 mb-6 border border-red-500/20">
            <svg
              className="h-8 w-8 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-medium tracking-[-0.04em] text-[var(--foreground)] sm:text-[2rem] mb-3">
            Booking Cancelled
          </h1>
          <p className="text-sm leading-6 text-[var(--muted)] sm:text-[15px] mb-8">
            Your payment was cancelled and your booking has not been finalized. Please try again if you would still like to schedule a consultation.
          </p>
          <Link
            href="/consulting-booking"
            className="w-full inline-flex items-center justify-center rounded-lg border border-[var(--line)] bg-[var(--foreground)] px-5 py-3 text-sm font-medium text-[var(--background)] transition-[opacity] duration-200 ease-out hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--foreground)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)]"
          >
            Try Again
          </Link>
        </div>
      </section>
    </main>
  );
}
