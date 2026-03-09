export default function Home() {
  return (
    <main className="bg-black text-white font-[family-name:var(--font-geist-sans)]">
      {/* ─── NAV ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-[family-name:var(--font-geist-mono)] text-sm tracking-widest uppercase text-white">
            DecisionOS
          </span>
          <a
            href="#contact"
            className="text-sm border border-white/30 px-4 py-2 hover:bg-white hover:text-black transition-colors duration-200"
          >
            Get in Touch
          </a>
        </div>
      </nav>

      {/* ─── SECTION 1: HERO ─── */}
      <section
        id="hero"
        className="min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 max-w-5xl mx-auto"
      >
        <div className="mb-8">
          <span className="font-[family-name:var(--font-geist-mono)] text-xs tracking-widest text-white/40 uppercase">
            v1.0
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight mb-6 leading-none">
          DecisionOS
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl text-white/60 mb-16 max-w-2xl leading-snug">
          The Last Enterprise Software You&apos;ll Need
        </p>

        <div className="border-l-2 border-white/20 pl-6 mb-16 space-y-3">
          <p className="text-base sm:text-lg text-white/70">
            Your company&apos;s intelligence is trapped in dozens of systems.
          </p>
          <p className="text-base sm:text-lg">
            We extract it. Unify it. Make it actionable.
          </p>
          <p className="text-base sm:text-lg text-white/70">
            Then help you eliminate the systems you don&apos;t need.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            className="inline-block bg-white text-black px-8 py-4 text-sm font-semibold hover:bg-white/90 transition-colors duration-200 text-center"
          >
            Get in Touch →
          </a>
          <a
            href="#problem"
            className="inline-block border border-white/20 text-white/60 px-8 py-4 text-sm hover:border-white/60 hover:text-white transition-colors duration-200 text-center"
          >
            See How It Works
          </a>
        </div>

        <div className="mt-24 pt-8 border-t border-white/10">
          <p className="font-[family-name:var(--font-geist-mono)] text-xs text-white/20 tracking-widest">
            SCROLL TO EXPLORE ↓
          </p>
        </div>
      </section>

      {/* ─── SECTION 2: PROBLEM ─── */}
      <section
        id="problem"
        className="min-h-screen flex flex-col justify-center px-6 py-24 max-w-5xl mx-auto"
      >
        <div className="mb-12">
          <span className="font-[family-name:var(--font-geist-mono)] text-xs tracking-widest text-white/30 uppercase">
            01 / The Problem
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-16 leading-tight">
          You&apos;re Paying for Redundancy
        </h2>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <p className="text-white/70 text-base sm:text-lg leading-relaxed">
              Enterprise software sold you tools. You bought CRM, ERP,
              analytics, project management, data warehouses.
            </p>
            <p className="text-white text-base sm:text-lg leading-relaxed font-medium">
              The value was always in YOUR data. The software was just expensive
              UI around it.
            </p>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed">
              Now your intelligence is fragmented. Your analysts spend{" "}
              <span className="text-white font-semibold">40 hours/week</span>{" "}
              just getting data into usable format.
            </p>
          </div>

          <div className="space-y-6">
            <div className="border border-white/10 p-6 space-y-4">
              <p className="font-[family-name:var(--font-geist-mono)] text-sm text-white/40 uppercase tracking-widest mb-4">
                Your current stack
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="font-[family-name:var(--font-geist-mono)] text-green-400 text-sm mt-0.5">
                    ✓
                  </span>
                  <p className="text-white/70 text-sm">
                    Shows <span className="text-white">WHAT</span> happened
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-[family-name:var(--font-geist-mono)] text-red-400 text-sm mt-0.5">
                    ✗
                  </span>
                  <p className="text-white/70 text-sm">
                    Can&apos;t tell you <span className="text-white">WHY</span>
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-[family-name:var(--font-geist-mono)] text-red-400 text-sm mt-0.5">
                    ✗
                  </span>
                  <p className="text-white/70 text-sm">
                    Can&apos;t tell you{" "}
                    <span className="text-white">WHAT TO DO</span> about it
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-white p-6 space-y-4">
              <p className="font-[family-name:var(--font-geist-mono)] text-sm text-white/40 uppercase tracking-widest mb-4">
                DecisionOS
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="font-[family-name:var(--font-geist-mono)] text-green-400 text-sm mt-0.5">
                    ✓
                  </span>
                  <p className="text-white/70 text-sm">
                    Explains <span className="text-white">WHY</span> it happened
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-[family-name:var(--font-geist-mono)] text-green-400 text-sm mt-0.5">
                    ✓
                  </span>
                  <p className="text-white/70 text-sm">
                    Prescribes <span className="text-white">WHAT TO DO</span>
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-[family-name:var(--font-geist-mono)] text-green-400 text-sm mt-0.5">
                    ✓
                  </span>
                  <p className="text-white/70 text-sm">
                    Models{" "}
                    <span className="text-white">WHAT HAPPENS IF</span> you do
                    it
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: VISION ─── */}
      <section
        id="vision"
        className="min-h-screen flex flex-col justify-center px-6 py-24 border-t border-white/10"
      >
        <div className="max-w-5xl mx-auto w-full">
          <div className="mb-12">
            <span className="font-[family-name:var(--font-geist-mono)] text-xs tracking-widest text-white/30 uppercase">
              02 / How It Works
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-20 leading-tight">
            How DecisionOS Works
          </h2>

          <div className="space-y-20">
            {/* Step 1 */}
            <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16">
              <div>
                <span className="font-[family-name:var(--font-geist-mono)] text-5xl font-bold text-white/10">
                  01
                </span>
                <h3 className="text-xl sm:text-2xl font-semibold mt-2">
                  Company X-Ray
                </h3>
              </div>
              <div className="space-y-4">
                <p className="text-white/70 leading-relaxed">
                  Connect your datasources. Our agents reverse engineer your
                  operational reality.
                </p>
                <p className="text-white font-medium">
                  You get insights that don&apos;t exist anywhere else:
                </p>
                <ul className="space-y-2 font-[family-name:var(--font-geist-mono)] text-sm">
                  <li className="flex gap-3 text-white/60">
                    <span className="text-white/30">—</span>
                    Your actual business processes (not documented ones)
                  </li>
                  <li className="flex gap-3 text-white/60">
                    <span className="text-white/30">—</span>
                    Decision patterns (stated policy vs actual behavior)
                  </li>
                  <li className="flex gap-3 text-white/60">
                    <span className="text-white/30">—</span>
                    Hidden bottlenecks (where work actually stalls)
                  </li>
                  <li className="flex gap-3 text-white/60">
                    <span className="text-white/30">—</span>
                    Data quality issues (duplicates, orphans, inconsistencies)
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-white/5" />

            {/* Step 2 */}
            <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16">
              <div>
                <span className="font-[family-name:var(--font-geist-mono)] text-5xl font-bold text-white/10">
                  02
                </span>
                <h3 className="text-xl sm:text-2xl font-semibold mt-2">
                  Operational Reality Dashboard
                </h3>
              </div>
              <div className="space-y-4">
                <p className="text-white/70 leading-relaxed">
                  Real-time view of your business. Not dashboards you have to
                  build. Intelligence that emerges from your data.
                </p>
                <p className="text-white font-medium">
                  See what your current stack can&apos;t show you:
                </p>
                <ul className="space-y-2 font-[family-name:var(--font-geist-mono)] text-sm">
                  <li className="flex gap-3 text-white/60">
                    <span className="text-white/30">—</span>
                    Process flows with actual cycle times
                  </li>
                  <li className="flex gap-3 text-white/60">
                    <span className="text-white/30">—</span>
                    Decision traces (who approved what, when, why)
                  </li>
                  <li className="flex gap-3 text-white/60">
                    <span className="text-white/30">—</span>
                    Anomalies flagged before they become crises
                  </li>
                  <li className="flex gap-3 text-white/60">
                    <span className="text-white/30">—</span>
                    Predictions based on YOUR patterns, not industry averages
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-white/5" />

            {/* Step 3 */}
            <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16">
              <div>
                <span className="font-[family-name:var(--font-geist-mono)] text-5xl font-bold text-white/10">
                  03
                </span>
                <h3 className="text-xl sm:text-2xl font-semibold mt-2">
                  Natural Language Interface
                </h3>
              </div>
              <div className="space-y-4">
                <p className="text-white/70 leading-relaxed">
                  Ask questions in plain English. Get visual answers
                  immediately.
                </p>
                <div className="border border-white/10 p-4 space-y-3 font-[family-name:var(--font-geist-mono)] text-sm">
                  <p className="text-white/40 text-xs tracking-widest uppercase mb-3">
                    Example queries
                  </p>
                  <p className="text-white/70">
                    &ldquo;Which customers are high churn risk?&rdquo;
                  </p>
                  <p className="text-white/70">
                    &ldquo;Where are our biggest process inefficiencies?&rdquo;
                  </p>
                  <p className="text-white/70">
                    &ldquo;What if we reduced approval time by 50%?&rdquo;
                  </p>
                </div>
                <p className="text-white/50 text-sm">
                  No SQL. No pivot tables. No waiting for analysts.
                </p>
              </div>
            </div>

            <div className="border-t border-white/5" />

            {/* Step 4 */}
            <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16">
              <div>
                <span className="font-[family-name:var(--font-geist-mono)] text-5xl font-bold text-white/10">
                  04
                </span>
                <h3 className="text-xl sm:text-2xl font-semibold mt-2">
                  The Complete Intelligence Platform
                </h3>
              </div>
              <div className="space-y-4">
                <p className="text-white/70 leading-relaxed">
                  Your operational brain. Built on your data, your processes,
                  your decisions.
                </p>
                <ul className="space-y-2 font-[family-name:var(--font-geist-mono)] text-sm">
                  <li className="flex gap-3 text-white/60">
                    <span className="text-white/30">—</span>
                    Replaces analytics tools (we ARE the intelligence layer)
                  </li>
                  <li className="flex gap-3 text-white/60">
                    <span className="text-white/30">—</span>
                    Enables what-if scenarios (model before you execute)
                  </li>
                  <li className="flex gap-3 text-white/60">
                    <span className="text-white/30">—</span>
                    Supports decisions with context and precedent
                  </li>
                  <li className="flex gap-3 text-white/60">
                    <span className="text-white/30">—</span>
                    Evolves with your business (conversational feature
                    development)
                  </li>
                </ul>
                <div className="pt-4 border-t border-white/10 space-y-2">
                  <p className="text-white/50 text-sm">
                    Then we help you eliminate redundant vendor systems.{" "}
                    <span className="text-white/70">
                      One module at a time. At your pace.
                    </span>
                  </p>
                  <p className="text-white font-medium text-sm">
                    What remains: Only what&apos;s truly necessary.
                  </p>
                  <p className="text-white font-medium text-sm">
                    What you gain: One platform that understands your business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: PROOF ─── */}
      <section
        id="proof"
        className="min-h-screen flex flex-col justify-center px-6 py-24 border-t border-white/10"
      >
        <div className="max-w-5xl mx-auto w-full">
          <div className="mb-12">
            <span className="font-[family-name:var(--font-geist-mono)] text-xs tracking-widest text-white/30 uppercase">
              03 / Recent Work
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-20 leading-tight">
            Recent Work
          </h2>

          <div className="space-y-16">
            {/* Case 1 */}
            <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16">
              <div>
                <p className="font-[family-name:var(--font-geist-mono)] text-xs text-white/30 uppercase tracking-widest mb-2">
                  Manufacturing
                </p>
                <h3 className="text-lg font-semibold leading-snug">
                  Manufacturing Company
                </h3>
                <p className="text-white/40 text-sm mt-1">West Africa</p>
              </div>
              <div className="space-y-4">
                <p className="text-white/70 leading-relaxed">
                  440-table production database. Zero documentation. Decade-old
                  custom ERP that nobody understood.
                </p>
                <p className="text-white/70 leading-relaxed">
                  We reverse engineered the entire sales and dispatch workflow,
                  extracted all business logic, built working replacement, and
                  delivered live demo to management.
                </p>
                <div className="flex flex-wrap gap-8 pt-2">
                  <div>
                    <p className="font-[family-name:var(--font-geist-mono)] text-2xl font-bold text-white">
                      24hrs
                    </p>
                    <p className="text-white/40 text-xs mt-1">First insights</p>
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-geist-mono)] text-2xl font-bold text-white">
                      24hrs
                    </p>
                    <p className="text-white/40 text-xs mt-1">Working system</p>
                  </div>
                </div>
                <p className="text-white/50 text-sm border-l-2 border-white/20 pl-4 leading-relaxed">
                  Post-delivery: Conversational feature development. Management
                  requests changes in plain English. Agents implement with human
                  validation.
                </p>
              </div>
            </div>

            <div className="border-t border-white/5" />

            {/* Case 2 */}
            <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16">
              <div>
                <p className="font-[family-name:var(--font-geist-mono)] text-xs text-white/30 uppercase tracking-widest mb-2">
                  Chemical
                </p>
                <h3 className="text-lg font-semibold leading-snug">
                  Chemical Manufacturing
                </h3>
                <p className="text-white/40 text-sm mt-1">India</p>
              </div>
              <div className="space-y-4">
                <p className="text-white/70 leading-relaxed">
                  Process manufacturing with high recipe variability. Multiple
                  systems (ERP, custom applications, spreadsheets).
                </p>
                <p className="text-white/70 leading-relaxed">
                  Currently integrating fragmented data sources, building
                  operational intelligence layer, enabling what-if scenario
                  analysis for production optimization.
                </p>
                <div className="inline-block font-[family-name:var(--font-geist-mono)] text-xs border border-white/20 px-3 py-1 text-white/40">
                  IN PROGRESS
                </div>
              </div>
            </div>

            <div className="border-t border-white/5" />

            {/* Case 3 */}
            <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16">
              <div>
                <p className="font-[family-name:var(--font-geist-mono)] text-xs text-white/30 uppercase tracking-widest mb-2">
                  Public Sector
                </p>
                <h3 className="text-lg font-semibold leading-snug">
                  Civic Intelligence Platform
                </h3>
                <p className="text-white/40 text-sm mt-1">Municipal</p>
              </div>
              <div className="space-y-4">
                <p className="text-white/70 leading-relaxed">
                  Municipal analytics for city officials. Multi-source data
                  integration, prescriptive recommendations. Plain English
                  querying for operational decision support.
                </p>
                <div className="inline-block font-[family-name:var(--font-geist-mono)] text-xs border border-white/20 px-3 py-1 text-white/40">
                  IN PROGRESS
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <a
              href="#contact"
              className="text-sm text-white/50 hover:text-white transition-colors duration-200 underline underline-offset-4"
            >
              Get in Touch for Details →
            </a>
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: CTA / CONTACT ─── */}
      <section
        id="contact"
        className="min-h-screen flex flex-col justify-center px-6 py-24 border-t border-white/10"
      >
        <div className="max-w-5xl mx-auto w-full">
          <div className="mb-12">
            <span className="font-[family-name:var(--font-geist-mono)] text-xs tracking-widest text-white/30 uppercase">
              04 / Get Started
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight max-w-2xl">
            Ready to See Your Company Differently?
          </h2>

          <p className="text-white/50 text-lg mb-20 max-w-xl">
            Currently taking 2–3 implementation projects per quarter.
          </p>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <p className="font-[family-name:var(--font-geist-mono)] text-xs text-white/30 uppercase tracking-widest mb-3">
                  Founder
                </p>
                <p className="text-xl font-semibold">Anand Altekar</p>
                <p className="text-white/40 text-sm mt-1">DecisionOS</p>
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
                  <p className="font-[family-name:var(--font-geist-mono)] text-white/50">
                    +91 [available on request]
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-8">
              <div className="space-y-4">
                <a
                  href="mailto:anand@decisionos.dev?subject=DecisionOS%20%E2%80%94%20Schedule%20Call&body=Hi%20Anand%2C%0A%0AI%27d%20like%20to%20schedule%20a%20call%20to%20discuss%20DecisionOS.%0A%0A"
                  className="block bg-white text-black px-8 py-5 text-sm font-semibold hover:bg-white/90 transition-colors duration-200 text-center"
                >
                  Schedule a Call →
                </a>
                <p className="text-white/30 text-xs text-center font-[family-name:var(--font-geist-mono)]">
                  Opens your email client
                </p>
              </div>

              <div className="border border-white/10 p-6">
                <p className="font-[family-name:var(--font-geist-mono)] text-xs text-white/30 uppercase tracking-widest mb-4">
                  What to expect
                </p>
                <ul className="space-y-3 text-sm text-white/60">
                  <li className="flex gap-3">
                    <span className="font-[family-name:var(--font-geist-mono)] text-white/30">
                      01
                    </span>
                    30-minute discovery call
                  </li>
                  <li className="flex gap-3">
                    <span className="font-[family-name:var(--font-geist-mono)] text-white/30">
                      02
                    </span>
                    Free initial data assessment
                  </li>
                  <li className="flex gap-3">
                    <span className="font-[family-name:var(--font-geist-mono)] text-white/30">
                      03
                    </span>
                    24-hour proof of concept
                  </li>
                  <li className="flex gap-3">
                    <span className="font-[family-name:var(--font-geist-mono)] text-white/30">
                      04
                    </span>
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
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <span className="font-[family-name:var(--font-geist-mono)] text-xs text-white/20 tracking-widest">
            © 2025 DECISIONOS
          </span>
          <div className="flex gap-8">
            <a
              href="#hero"
              className="font-[family-name:var(--font-geist-mono)] text-xs text-white/20 hover:text-white/50 transition-colors duration-200 tracking-widest"
            >
              TOP ↑
            </a>
            <a
              href="mailto:anand@decisionos.dev"
              className="font-[family-name:var(--font-geist-mono)] text-xs text-white/20 hover:text-white/50 transition-colors duration-200 tracking-widest"
            >
              CONTACT
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
