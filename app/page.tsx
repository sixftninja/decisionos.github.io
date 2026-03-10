import VisionCarousel from "./components/VisionCarousel";
import WorkCarousel from "./components/WorkCarousel";

export default function Home() {
  return (
    <main className="bg-black text-white font-[family-name:var(--font-geist-sans)]">
      {/* ─── NAV ─── */}
      {/* Centered, all-caps, monospace */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-center">
          <span className="font-[family-name:var(--font-geist-mono)] text-sm tracking-widest uppercase text-white">
            DECISION OS
          </span>
        </div>
      </nav>

      {/* ─── SECTION 1: HERO ─── */}
      {/* h-screen + snap-start = one full page snap point */}
      <section
        id="hero"
        className="min-h-[100svh] md:h-screen snap-start md:overflow-hidden flex flex-col justify-center px-6 pt-20 pb-12 max-w-5xl mx-auto"
      >
        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-5 md:mb-8 leading-tight">
          You bought the software.
          <br />
          You never got the intelligence.
        </h1>

        {/* Body copy — problem statement */}
        <div className="border-l-2 border-white/15 pl-4 md:pl-6 mb-5 md:mb-8 space-y-2 max-w-2xl">
          <p className="text-sm leading-relaxed text-white/60">
            CRM. ERP. Analytics. Project management.
            Each one promised clarity. Instead: fragmented data, buried intelligence, decisions made blind.
          </p>
          <p className="text-sm leading-relaxed text-white/60">
            Your systems show what happened. Never why. Never what to do next.
          </p>
        </div>

        {/* Subline — solution */}
        <p className="text-sm sm:text-base font-medium leading-relaxed mb-8 md:mb-10 text-white max-w-xl">
          Decision OS extracts the intelligence trapped in your systems, unifies it, and makes it actionable.
          Then helps you eliminate the SaaS tools you no longer need.
        </p>

        {/* CTA */}
        <div>
          <a
            href="#vision"
            className="block sm:inline-block text-center border border-white/30 px-8 py-4 text-sm hover:bg-white hover:text-black transition-colors duration-200"
          >
            See How It Works ↓
          </a>
        </div>
      </section>

      {/* ─── SECTION 2: HOW IT WORKS (carousel) ─── */}
      <VisionCarousel />

      {/* ─── SECTION 3: RECENT WORK (carousel) ─── */}
      <WorkCarousel />

      {/* ─── SECTION 4: CTA / CONTACT ─── */}
      <section
        id="contact"
        className="min-h-[100svh] snap-start flex flex-col justify-center px-6 py-16 md:py-24 border-t border-white/10"
      >
        <div className="max-w-5xl mx-auto w-full">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight max-w-2xl">
            Ready to see your business differently?
          </h2>

          <div className="max-w-xl mb-8 md:mb-16 space-y-3 md:space-y-4">
            <p className="text-white/60 text-base leading-relaxed">
              Decision OS is in active consulting mode.
              The platform is being built engagement by engagement —
              each client shapes what it becomes.
            </p>
            <p className="text-white/60 text-base leading-relaxed">
              Manufacturing. Healthcare. Regulatory reporting.
              Or somewhere else entirely — if this resonates, reach out.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            <div className="space-y-8">
              <div>
                <p className="font-[family-name:var(--font-geist-mono)] text-xs text-white/30 uppercase tracking-widest mb-3">
                  Founder
                </p>
                <p className="text-xl font-semibold">Anand Altekar</p>
                <p className="text-white/40 text-sm mt-1">Decision OS</p>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="font-[family-name:var(--font-geist-mono)] text-xs text-white/30 uppercase tracking-widest mb-2">
                    Email
                  </p>
                  <a
                    href="mailto:anand@decisionos.dev"
                    className="font-[family-name:var(--font-geist-mono)] text-white hover:text-white/70 transition-colors duration-200"
                  >
                    anand@decisionos.dev
                  </a>
                </div>
                <div>
                  <p className="font-[family-name:var(--font-geist-mono)] text-xs text-white/30 uppercase tracking-widest mb-2">
                    Phone
                  </p>
                  <p className="font-[family-name:var(--font-geist-mono)] text-white/70">
                    +1 929 391 3898
                  </p>
                </div>
              </div>

              <p className="text-white/40 text-sm">
                Currently taking 2–3 engagements per quarter.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <a
                href="mailto:anand@decisionos.dev?subject=Decision%20OS%20%E2%80%94%20Schedule%20Call&body=Hi%20Anand%2C%0A%0AI%27d%20like%20to%20schedule%20a%20call%20to%20discuss%20Decision%20OS.%0A%0A"
                className="block bg-white text-black px-8 py-5 text-sm font-semibold hover:bg-white/90 transition-colors duration-200 text-center"
              >
                Schedule a Call →
              </a>

              <a
                href="/anand"
                className="block border border-orange-400/40 px-8 py-4 text-sm text-orange-400 hover:text-orange-300 hover:border-orange-400/60 transition-colors duration-200 text-center font-[family-name:var(--font-geist-mono)] tracking-widest"
              >
                MORE ABOUT ANAND →
              </a>

              <p className="text-white/40 text-sm italic">
                First snapshot (Tier 01) available at no cost for qualified engagements.
              </p>

              <div className="border border-white/10 p-6">
                <p className="font-[family-name:var(--font-geist-mono)] text-xs text-white/30 uppercase tracking-widest mb-4">
                  What to expect
                </p>
                <ul className="space-y-3 text-sm text-white/60">
                  <li className="flex gap-3">
                    <span className="font-[family-name:var(--font-geist-mono)] text-white/30">01</span>
                    30-minute discovery call
                  </li>
                  <li className="flex gap-3">
                    <span className="font-[family-name:var(--font-geist-mono)] text-white/30">02</span>
                    Free initial data assessment
                  </li>
                  <li className="flex gap-3">
                    <span className="font-[family-name:var(--font-geist-mono)] text-white/30">03</span>
                    Proof of concept in days, not weeks
                  </li>
                  <li className="flex gap-3">
                    <span className="font-[family-name:var(--font-geist-mono)] text-white/30">04</span>
                    Implementation proposal
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-white/10 px-6 py-8">
        <div className="max-w-5xl mx-auto">
          <span className="font-[family-name:var(--font-geist-mono)] text-xs text-white/20 tracking-widest">
            © 2025 DECISION OS
          </span>
        </div>
      </footer>
    </main>
  );
}
