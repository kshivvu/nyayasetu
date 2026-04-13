import Link from "next/link";
import { PageWrap, SiteFooter, SiteHeader } from "../components/SiteShell";

const voices = [
  {
    icon: "⚖",
    title: "Vakil",
    subtitle: "The Lawyer",
    text: "Spots one-sided clauses, legal traps, and points you can challenge under Indian law.",
  },
  {
    icon: "🧑‍🌾",
    title: "Aam Aadmi",
    subtitle: "The Common Person",
    text: "Translates legal jargon into simple Hindi that a Class 10 student can understand.",
  },
  {
    icon: "🏛",
    title: "Nyayaadheesh",
    subtitle: "The Judge",
    text: "Gives a final verdict, a risk score out of 10, and the top 3 steps to take next.",
  },
];

const useCases = [
  "Internship bond in an offer letter",
  "Rent agreement with unclear penalty terms",
  "Employment contract with non-compete",
  "Government notice or RTI response",
  "Long terms and conditions before payment",
  "Loan or lease document in Hindi",
];

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative overflow-hidden pb-24 pt-16 md:pt-24">
          <div className="pointer-events-none absolute -right-16 top-10 h-56 w-56 rounded-full bg-[color:var(--mustard)]/25 blur-3xl" />
          <div className="pointer-events-none absolute -left-10 top-1/2 h-48 w-48 rounded-full bg-[color:var(--saffron)]/25 blur-3xl" />
          <PageWrap>
            <div className="reveal grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="kicker">AI-Powered Legal Aid for Every Indian</p>
                <h1 className="font-title mt-4 text-4xl leading-tight text-[color:var(--navy)] md:text-6xl">
                  90% of Indians sign documents they cannot understand.
                  <span className="block text-[color:var(--saffron)]">NyayaSetu fixes that.</span>
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-[color:var(--ink)]/85">
                  Paste or speak any legal text. Your three-voice AI Sabha analyses it in parallel,
                  flags risky clauses in red, explains in plain Hindi and English, and gives your
                  next action plan in under 12 seconds.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/app"
                    className="rounded-full bg-[color:var(--saffron)] px-6 py-3 text-sm font-bold tracking-wide text-white transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    Analyse Document Now
                  </Link>
                  <Link
                    href="/about"
                    className="rounded-full border border-[color:var(--navy)]/40 px-6 py-3 text-sm font-semibold text-[color:var(--navy)]"
                  >
                    See How It Works
                  </Link>
                </div>
              </div>

              <div className="panel rounded-3xl p-6 md:p-8">
                <p className="kicker">Live Outcome</p>
                <div className="mt-4 rounded-2xl bg-[color:var(--navy)] px-5 py-6 text-white">
                  <p className="text-sm text-[color:var(--mustard)]">Risk Score</p>
                  <p className="font-title mt-2 text-5xl">7.3/10</p>
                  <p className="mt-3 text-sm text-white/80">Recommendation: Negotiate before signing.</p>
                </div>
                <ul className="mt-5 space-y-3 text-sm text-[color:var(--ink)]/85">
                  <li>Clause 5 penalty is one-sided and financially harsh.</li>
                  <li>No clear exit process for tenant in emergency cases.</li>
                  <li>The Unseen: hidden auto-renewal lock-in detected.</li>
                </ul>
              </div>
            </div>
          </PageWrap>
        </section>

        <section className="pb-16">
          <PageWrap>
            <div className="stagger grid gap-5 md:grid-cols-3">
              {voices.map((voice) => (
                <article key={voice.title} className="panel rounded-2xl p-6">
                  <div className="mb-4 inline-flex size-12 items-center justify-center rounded-full bg-[color:var(--saffron)]/15 text-2xl">
                    {voice.icon}
                  </div>
                  <h3 className="font-title text-2xl text-[color:var(--navy)]">{voice.title}</h3>
                  <p className="text-sm font-semibold text-[color:var(--saffron)]">{voice.subtitle}</p>
                  <p className="mt-3 text-sm leading-relaxed text-[color:var(--ink)]/80">{voice.text}</p>
                </article>
              ))}
            </div>
          </PageWrap>
        </section>

        <section className="pb-16">
          <PageWrap>
            <div className="panel rounded-3xl p-6 md:p-10">
              <p className="kicker">Where people use NyayaSetu</p>
              <h2 className="font-title mt-4 text-3xl text-[color:var(--navy)] md:text-4xl">Real-world legal confusion, solved in one flow</h2>
              <div className="mt-7 grid gap-3 md:grid-cols-2">
                {useCases.map((item) => (
                  <div key={item} className="rounded-xl border border-[color:var(--navy)]/15 bg-white/70 px-4 py-3 text-sm text-[color:var(--ink)]/85">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </PageWrap>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
