"use client";

import { useState } from "react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

export default function BookingForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Agenda, setAgenda] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState(() =>
    new Date().toLocaleDateString("en-CA"),
  );

  const [phoneError, setPhoneError] = useState("");

  const validatePhone = (value: string) => {
    if (!value) {
      setPhoneError("Phone number is required");
      return false;
    }

    if (!isValidPhoneNumber(value)) {
      setPhoneError("Enter a valid phone number");
      return false;
    }

    setPhoneError("");
    return true;
  };

  return (
    <section className="mx-auto w-full max-w-3xl px-4 py-8 sm:px-6 sm:py-10 lg:px-0">
      <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] px-5 py-6 sm:px-6 sm:py-7">
        <div className="space-y-2">
          <h1 className="text-2xl font-medium tracking-[-0.04em] text-[var(--foreground)] sm:text-[2rem]">
            Book a Consultation
          </h1>
          <p className="text-sm leading-6 text-[var(--muted)] sm:text-[15px]">
            Choose a date and time for your consultation, then share the details
            of what you would like to discuss.
          </p>
        </div>

        <form className="mt-6 grid gap-5" aria-label="Consulting booking form">
          <div className="grid gap-5 md:grid-cols-2">
            <div className="grid gap-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-[var(--foreground)]"
              >
                Name{" "}
                <span aria-hidden className="text-red-500">
                  *
                </span>
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-11 rounded-lg border border-[var(--line)] bg-transparent px-3 text-sm outline-none transition-colors placeholder:text-[var(--muted)] focus:border-[var(--foreground)]"
              />
            </div>

            <div className="grid gap-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-[var(--foreground)]"
              >
                Email{" "}
                <span aria-hidden className="text-red-500">
                  *
                </span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-11 rounded-lg border border-[var(--line)] bg-transparent px-3 text-sm outline-none transition-colors placeholder:text-[var(--muted)] focus:border-[var(--foreground)]"
              />
            </div>

            <div className="grid gap-5 md:col-span-2 md:grid-cols-2">
              <div className="grid gap-2">
                <label
                  htmlFor="phone"
                  className="text-sm font-medium text-[var(--foreground)]"
                >
                  Phone{" "}
                  <span aria-hidden className="text-red-500">
                    *
                  </span>
                </label>

                <PhoneInput
                  id="phone"
                  name="phone"
                  required
                  defaultCountry="IN"
                  international
                  value={phone}
                  onChange={(value) => {
                    setPhone(value ?? "");

                    if (phoneError && value) {
                      setPhoneError(
                        isValidPhoneNumber(value)
                          ? ""
                          : "Enter a valid phone number",
                      );
                    }
                  }}
                  onBlur={() => validatePhone(phone)}
                  placeholder="Phone number"
                  className={`h-11 rounded-lg border bg-transparent px-3 text-sm outline-none transition-colors
                    focus-within:border-[var(--foreground)]
                    [&_.PhoneInputInput]:border-0
                    [&_.PhoneInputInput]:bg-transparent
                    [&_.PhoneInputInput]:outline-none
                    ${phoneError ? "border-red-500" : "border-[var(--line)]"}
                  `}
                />

                {phoneError && (
                  <p className="mt-1 text-sm text-red-500">{phoneError}</p>
                )}
              </div>

              <div className="grid gap-2">
                <label
                  htmlFor="consultation-date"
                  className="text-sm font-medium text-[var(--foreground)]"
                >
                  Consultation Date{" "}
                  <span aria-hidden className="text-red-500">
                    *
                  </span>
                </label>

                <input
                  id="consultation-date"
                  name="consultation-date"
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  min={date}
                  max={new Date(
                    Date.now() + 30 * 24 * 60 * 60 * 1000,
                  ).toLocaleDateString("en-CA")}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    e.currentTarget.showPicker();
                  }}
                  className="h-11 w-full cursor-pointer select-none rounded-lg border border-[var(--line)] bg-transparent px-3 text-sm outline-none transition-colors text-[var(--foreground)] focus:border-[var(--foreground)]"
                />
              </div>
            </div>
          </div>

          <div className="grid gap-2">
            <label
              htmlFor="meeting-agenda"
              className="text-sm font-medium text-[var(--foreground)]"
            >
              Meeting Agenda{" "}
              <span aria-hidden className="text-red-500">
                *
              </span>
            </label>

            <textarea
              id="meeting-agenda"
              name="meeting-agenda"
              required
              rows={4}
              placeholder="Briefly describe what you'd like to discuss"
              value={Agenda}
              onChange={(e) => setAgenda(e.target.value)}
              className="min-h-[110px] rounded-lg border border-[var(--line)] bg-transparent px-3 py-3 text-sm outline-none transition-colors placeholder:text-[var(--muted)] focus:border-[var(--foreground)]"
            />
          </div>

          <div className="pt-1">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-lg border border-[var(--line)] bg-[var(--foreground)] px-5 py-3 text-sm font-medium text-[var(--background)] transition-[opacity] duration-200 ease-out hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--foreground)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface)]"
            >
              Continue to Payment
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}