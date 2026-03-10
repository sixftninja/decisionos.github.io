"use client";

import { useState, useCallback, useEffect, useRef } from "react";

type WorkBlock =
  | { type: "para"; text: string }
  | { type: "stats"; items: { value: string; label: string }[] }
  | { type: "note"; text: string };

type CaseStudy = {
  tag: string;
  title: string;
  badge?: string;
  blocks: WorkBlock[];
};

const cases: CaseStudy[] = [
  {
    tag: "MANUFACTURING",
    title: "Manufacturing",
    blocks: [
      {
        type: "para",
        text: "440-table production ERP. Zero documentation. A decade of business logic locked inside a system nobody fully understood — including the people running it.",
      },
      {
        type: "para",
        text: "We reverse engineered the entire sales and dispatch workflow, extracted the logic, and delivered a working replacement.",
      },
      {
        type: "stats",
        items: [
          { value: "24 Hours", label: "First insights" },
          { value: "2 Days", label: "Working system" },
        ],
      },
      {
        type: "para",
        text: "We are now rebuilding their entire ERP using Decision OS agents.",
      },
    ],
  },
  {
    tag: "CHEMICAL MANUFACTURING",
    title: "Chemical Manufacturing",
    badge: "ACTIVE ENGAGEMENT",
    blocks: [
      {
        type: "para",
        text: "Complex recipe variability across production runs. Data fragmented across ERP, CRM, Slack, custom applications, and spreadsheets.",
      },
      {
        type: "para",
        text: "Currently: Building the operational intelligence layer. Integrating sources, surfacing anomalies, enabling what-if scenario modelling for production optimization.",
      },
      {
        type: "note",
        text: "Status: Tier 01 complete. Tier 02 in progress.",
      },
    ],
  },
  {
    tag: "REGULATORY REPORTING",
    title: "Regulatory Reporting",
    badge: "IN SCOPING",
    blocks: [
      {
        type: "para",
        text: "Regulatory submissions — FFIEC 031, FR Y-9C, and others — consume hundreds of analyst-hours per cycle.",
      },
      {
        type: "para",
        text: "The data exists. The business logic exists. It lives in spreadsheets, legacy systems, and undocumented tribal knowledge, hand-translated by implementation teams into reporting workflows.",
      },
      {
        type: "para",
        text: "After three years building and implementing regulatory reporting platforms at an institution serving global banks, one thing became clear: strip away the tooling abstractions and every report is one extraordinarily complex SQL query — written by humans, maintained by humans, re-written every time a rule changes.",
      },
      {
        type: "para",
        text: "Decision OS automates the mapping. Analysts define the logic once, in plain English. The system handles the rest — including rule updates.",
      },
      {
        type: "note",
        text: "Built a working demo for FFIEC 031. Actively scoping engagements in this space.",
      },
    ],
  },
];

function renderBlock(block: WorkBlock, i: number) {
  switch (block.type) {
    case "para":
      return (
        <p key={i} className="text-white/70 leading-relaxed">
          {block.text}
        </p>
      );
    case "stats":
      return (
        <div key={i} className="flex flex-wrap gap-8 py-2">
          {block.items.map((stat, j) => (
            <div key={j}>
              <p className="font-[family-name:var(--font-geist-mono)] text-2xl font-bold text-white">
                {stat.value}
              </p>
              <p className="text-white/40 text-xs mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      );
    case "note":
      return (
        <p key={i} className="text-white/50 text-sm font-[family-name:var(--font-geist-mono)]">
          {block.text}
        </p>
      );
  }
}

export default function WorkCarousel() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const prev = useCallback(() => setCurrent((c) => Math.max(0, c - 1)), []);
  const next = useCallback(
    () => setCurrent((c) => Math.min(cases.length - 1, c + 1)),
    []
  );

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [next, prev]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta < -50) next();
    if (delta > 50) prev();
    touchStartX.current = null;
  };

  return (
    // snap-start: this section is one vertical snap page
    <section id="proof" className="snap-start border-t border-white/10">
      {/* ── Sticky header ── */}
      <div className="sticky top-[57px] z-40 bg-black border-b border-white/10 px-6 py-4">
        <div className="max-w-5xl mx-auto">
          <span className="font-[family-name:var(--font-geist-mono)] text-xs tracking-widest text-green-400 uppercase">
            Recent Work
          </span>
          <p className="text-green-400 text-sm mt-1">
            Three engagements. Real data. Real outcomes.
          </p>
        </div>
      </div>

      {/* ── MOBILE: vertical stack ── */}
      <div className="md:hidden px-6 py-12 max-w-5xl mx-auto">
        <div className="space-y-16">
          {cases.map((c, i) => (
            <div key={i}>
              <div className="mb-6">
                {c.badge && (
                  <div className="mb-1">
                    <span className="font-[family-name:var(--font-geist-mono)] text-xs border border-white/20 px-2 py-0.5 text-white/40">
                      {c.badge}
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-semibold">{c.title}</h3>
              </div>
              <div className="space-y-4">
                {c.blocks.map((block, j) => renderBlock(block, j))}
              </div>
              {i < cases.length - 1 && (
                <div className="border-t border-white/5 mt-12" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ── DESKTOP: horizontal carousel ── */}
      <div
        className="hidden md:block relative h-[calc(100vh-5rem)]"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Overflow-clipped sliding track */}
        <div className="overflow-hidden h-[calc(100vh-5rem)]">
          <div
            className="flex h-[calc(100vh-5rem)] transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {cases.map((c, i) => (
              <div
                key={i}
                className="w-full flex-shrink-0 h-[calc(100vh-5rem)] flex flex-col justify-start px-16 pt-16 pb-20"
              >
                <div className="max-w-3xl mx-auto w-full space-y-8 overflow-y-auto max-h-[calc(100vh-14rem)]">
                  {/* Slide header */}
                  <div className="border-b border-white/20 pb-6">
                    {c.badge && (
                      <div className="mb-2">
                        <span className="font-[family-name:var(--font-geist-mono)] text-xs border border-white/30 px-2 py-0.5 text-white/50">
                          {c.badge}
                        </span>
                      </div>
                    )}
                    <h3 className="text-4xl lg:text-5xl font-bold leading-tight">
                      {c.title}
                    </h3>
                  </div>
                  {/* Content blocks */}
                  <div className="space-y-5">
                    {c.blocks.map((block, j) => renderBlock(block, j))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ← Arrow */}
        {current > 0 && (
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center border border-white text-white hover:bg-white hover:text-black transition-colors duration-200 font-[family-name:var(--font-geist-mono)] text-lg"
            aria-label="Previous case"
          >
            ←
          </button>
        )}
        {/* → Arrow */}
        {current < cases.length - 1 && (
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center border border-white text-white hover:bg-white hover:text-black transition-colors duration-200 font-[family-name:var(--font-geist-mono)] text-lg"
            aria-label="Next case"
          >
            →
          </button>
        )}

        {/* Bottom bar: dots + counter (center) · Get Started CTA (right) */}
        <div className="absolute bottom-6 left-0 right-0 flex items-center justify-between px-16">
          {/* Left spacer */}
          <div className="w-32" />
          {/* Center: pagination dots + counter */}
          <div className="flex items-center gap-3">
            {cases.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to case ${i + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  i === current
                    ? "w-5 h-2.5 bg-white"
                    : "w-2.5 h-2.5 bg-white/40 hover:bg-white/80"
                }`}
              />
            ))}
            <span className="font-[family-name:var(--font-geist-mono)] text-sm text-white/60 ml-3">
              {current + 1} / {cases.length}
            </span>
          </div>
          {/* Right: scroll to next section */}
          <div className="w-32 flex justify-end">
            <a
              href="#contact"
              className="font-[family-name:var(--font-geist-mono)] text-xs text-orange-400 hover:text-orange-300 transition-colors duration-200 tracking-widest"
            >
              GET STARTED ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
