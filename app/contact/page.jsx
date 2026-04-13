"use client";

import { useState } from "react";
import { PageWrap, SiteFooter, SiteHeader } from "../../components/SiteShell";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(event) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader compact />
      <main className="flex-1 py-12">
        <PageWrap>
          <section className="panel mx-auto max-w-2xl rounded-3xl p-8">
            <p className="kicker">Contact</p>
            <h1 className="font-title mt-2 text-4xl text-[color:var(--navy)]">Talk to Team NyayaSetu</h1>
            {!sent ? (
              <form className="mt-6 space-y-4" onSubmit={onSubmit}>
                <input
                  required
                  placeholder="Name"
                  className="w-full rounded-xl border border-[color:var(--navy)]/20 bg-white px-4 py-3 text-sm"
                />
                <input
                  required
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-xl border border-[color:var(--navy)]/20 bg-white px-4 py-3 text-sm"
                />
                <textarea
                  required
                  rows={5}
                  placeholder="Message"
                  className="w-full rounded-xl border border-[color:var(--navy)]/20 bg-white px-4 py-3 text-sm"
                />
                <button type="submit" className="rounded-full bg-[color:var(--saffron)] px-6 py-2 text-sm font-semibold text-white">
                  Send Message
                </button>
              </form>
            ) : (
              <p className="mt-5 rounded-xl bg-green-100 px-4 py-3 text-sm text-green-800">
                Message received. We will get back soon.
              </p>
            )}
          </section>
        </PageWrap>
      </main>
      <SiteFooter />
    </div>
  );
}
