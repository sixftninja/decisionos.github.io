export default function AnandProfile() {
  return (
    <main className="bg-black text-white font-[family-name:var(--font-geist-sans)] min-h-screen">
      {/* ── Nav ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="/"
            className="font-[family-name:var(--font-geist-mono)] text-xs text-white/40 hover:text-white transition-colors duration-200 tracking-widest"
          >
            ← DECISION OS
          </a>
          <span className="font-[family-name:var(--font-geist-mono)] text-xs tracking-widest uppercase text-white/30">
            ANAND ALTEKAR
          </span>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-6 pt-24 pb-20">

        {/* ── Header ── */}
        <div className="mb-12 pb-10 border-b border-white/10">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-3">
            Anand Altekar
          </h1>
          <p className="text-white/60 text-base leading-relaxed max-w-2xl mb-6">
            I build systems that make operational intelligence tractable —
            before most organizations knew they needed it, and before most tooling existed to support it.
          </p>
          <div className="flex flex-wrap gap-6">
            <a
              href="mailto:anand@decisionos.dev"
              className="font-[family-name:var(--font-geist-mono)] text-sm text-white/50 hover:text-white transition-colors duration-200"
            >
              anand@decisionos.dev
            </a>
            <a
              href="/"
              className="font-[family-name:var(--font-geist-mono)] text-sm text-white/50 hover:text-white transition-colors duration-200"
            >
              decisionos.dev →
            </a>
          </div>
        </div>

        {/* ── Education ── */}
        <section className="mb-12">
          <p className="font-[family-name:var(--font-geist-mono)] text-xs tracking-widest text-green-400 uppercase mb-5">
            Education
          </p>
          <div className="space-y-3">
            <div>
              <p className="text-white font-medium">MS · Courant Institute, New York University</p>
            </div>
            <div>
              <p className="text-white font-medium">BSc Statistics · Fergusson College, Pune</p>
            </div>
          </div>
        </section>

        {/* ── Experience ── */}
        <section className="mb-12">
          <p className="font-[family-name:var(--font-geist-mono)] text-xs tracking-widest text-green-400 uppercase mb-6">
            Experience
          </p>
          <div className="space-y-10">

            {/* Citi */}
            <div className="border-l-2 border-white/20 pl-5">
              <div className="flex items-center gap-3 mb-1">
                <p className="font-[family-name:var(--font-geist-mono)] text-xs text-white/70 uppercase tracking-widest">Citi</p>
                <span className="font-[family-name:var(--font-geist-mono)] text-xs border border-white/30 px-2 py-0.5 text-white/50">INTERNSHIP</span>
              </div>
              <h3 className="text-base font-semibold mb-2">Reinforcement Learning &amp; Deep Learning</h3>
              <p className="text-white/60 leading-relaxed text-sm">
                Built a reinforcement learning trading system — custom Gym-style environments,
                reward design, backtesting loops, experiment tracking.
              </p>
            </div>

            {/* Policygenius */}
            <div className="border-l-2 border-white/20 pl-5">
              <div className="flex items-center gap-3 mb-1">
                <p className="font-[family-name:var(--font-geist-mono)] text-xs text-white/70 uppercase tracking-widest">Policygenius</p>
                <span className="font-[family-name:var(--font-geist-mono)] text-xs border border-white/30 px-2 py-0.5 text-white/50">INTERNSHIP</span>
              </div>
              <h3 className="text-base font-semibold mb-2">Deep Learning at Scale</h3>
              <p className="text-white/60 leading-relaxed text-sm">
                Pre-LLM, pre-ChatGPT: deep learning system to generate SEO content at scale from structured
                and unstructured inputs. End-to-end data pipelines, automated research, generation and
                quality assurance loops. The same architecture LLM applications now claim to have invented.
              </p>
            </div>

            {/* Axiom */}
            <div className="border-l-2 border-white/20 pl-5">
              <div className="mb-1">
                <p className="font-[family-name:var(--font-geist-mono)] text-xs text-white/70 uppercase tracking-widest">ControllerView · Axiom (now Nasdaq / Adenza)</p>
              </div>
              <h3 className="text-base font-semibold mb-2">Regulatory Reporting</h3>
              <p className="text-white/60 leading-relaxed text-sm mb-2">
                Implemented regulatory reporting platforms for global banks — FFIEC 031, FR Y-9C, and others.
                Years inside the machinery made the path forward obvious: remove the manual abstractions,
                make the business logic explicit, automate reconciliation and audit steps.
              </p>
              <p className="text-white/60 leading-relaxed text-sm">
                Pushed the product in that direction. The organization wouldn&apos;t commit. I left.
              </p>
            </div>

            {/* LLM / Independent */}
            <div className="border-l-2 border-orange-400/40 pl-5">
              <div className="mb-1">
                <p className="font-[family-name:var(--font-geist-mono)] text-xs text-white/70 uppercase tracking-widest">Independent · Last 2 Years</p>
              </div>
              <h3 className="text-base font-semibold mb-2">LLM Systems &amp; Reliability Infrastructure</h3>
              <p className="text-white/60 leading-relaxed text-sm mb-4">
                Off-the-shelf agent and RAG stacks hit their limits fast — reliability gaps, no real debuggability,
                broken state management, no eval framework. Built my own, early, before most libraries
                offered robust patterns.
              </p>
              <ul className="space-y-1.5 font-[family-name:var(--font-geist-mono)] text-xs">
                {[
                  "RAG with provenance tracking and knowledge graphs",
                  "Tool-calling agents: planning, routing, state, retries, fallbacks",
                  "Tool layer: SQL/DB, REST APIs, documents, web search, schema grounding",
                  "Guardrails and ops: permissions, audit trails, policy checks, deterministic checkpoints, monitoring, cost/latency instrumentation",
                  "Evals: test sets, regression harness, automated graders; Docker-first deployment",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-white/50">
                    <span className="text-white/25 flex-shrink-0">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </section>

        {/* ── Decision OS ── */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <p className="font-[family-name:var(--font-geist-mono)] text-xs tracking-widest text-green-400 uppercase">
              Decision OS
            </p>
            <span className="font-[family-name:var(--font-geist-mono)] text-xs border border-green-400/30 px-2 py-0.5 text-green-400/70">
              ACTIVE
            </span>
          </div>

          <p className="text-white/60 leading-relaxed text-sm">
            Everything above led here. Decision OS is the system I kept wishing existed —
            built engagement by engagement, shaped by real enterprise complexity.
          </p>
        </section>

        {/* ── Contact ── */}
        <section className="border-t border-white/10 pt-10">
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:anand@decisionos.dev?subject=Decision%20OS%20%E2%80%94%20Schedule%20Call&body=Hi%20Anand%2C%0A%0AI%27d%20like%20to%20schedule%20a%20call%20to%20discuss%20Decision%20OS.%0A%0A"
              className="inline-block bg-white text-black px-8 py-4 text-sm font-semibold hover:bg-white/90 transition-colors duration-200 text-center"
            >
              Schedule a Call →
            </a>
            <a
              href="/"
              className="inline-block border border-orange-400/40 px-8 py-4 text-sm text-orange-400 hover:text-orange-300 hover:border-orange-400/60 transition-colors duration-200 text-center font-[family-name:var(--font-geist-mono)] tracking-widest"
            >
              VIEW DECISION OS →
            </a>
          </div>
          <p className="text-white/50 text-sm font-[family-name:var(--font-geist-mono)] mt-4">
            Currently taking 2–3 engagements per quarter.
          </p>
        </section>

      </div>

      {/* ── Footer ── */}
      <footer className="border-t border-white/10 px-6 py-6">
        <div className="max-w-3xl mx-auto">
          <span className="font-[family-name:var(--font-geist-mono)] text-xs text-white/20 tracking-widest">
            © 2025 DECISION OS
          </span>
        </div>
      </footer>
    </main>
  );
}
