"use client";

import { useState, useEffect, useCallback, useRef } from "react";

type ContentBlock =
  | { type: "para"; text: string }
  | { type: "list"; label: string; items: string[] }
  | { type: "quotes"; items: string[] }
  | { type: "note"; text: string }
  | { type: "footnote"; text: string };

type Screen = {
  step: string;
  title: string;
  comingSoon?: boolean;
  blocks: ContentBlock[];
};

const screens: Screen[] = [
  {
    step: "TIER 01",
    title: "Company X-Ray",
    blocks: [
      {
        type: "para",
        text: "What's actually happening inside your business? Not what the org chart says. What's actually happening.",
      },
      {
        type: "para",
        text: "We connect to your systems — ERP, databases, custom applications — and reverse engineer your operational reality.",
      },
      {
        type: "list",
        label: "You discover:",
        items: [
          "Actual process flows vs. documented fantasy",
          "Real decision patterns vs. stated policy",
          "Where work quietly stalls",
          "Data quality issues — duplicates, orphans, broken logic",
        ],
      },
      { type: "note", text: "Delivered in days, not months." },
      // Footnote: visually separated from main content — asterisk-style aside
      {
        type: "footnote",
        text: "A snapshot is available at no cost for qualified engagements.",
      },
    ],
  },
  {
    step: "TIER 02",
    title: "Operational Dashboard",
    blocks: [
      { type: "para", text: "Your X-Ray becomes a live instrument." },
      {
        type: "para",
        text: "Real-time intelligence from your own data — not benchmarks, not templates. Your patterns. Your anomalies.",
      },
      {
        type: "list",
        label: "You get:",
        items: [
          "Process flows with actual cycle times",
          "Decision traces — who approved what, when, and why",
          "Anomalies surfaced before they become crises",
          "Predictions from your historical patterns, not industry averages",
        ],
      },
    ],
  },
  {
    step: "TIER 03",
    title: "Adaptive Interface",
    blocks: [
      { type: "para", text: "Ask your business anything. In plain English." },
      {
        type: "quotes",
        items: [
          '"Which production lines are running behind?"',
          '"Show me compliance exceptions from last quarter."',
          '"What happens to yield if we increase batch size by 15%?"',
        ],
      },
      {
        type: "para",
        text: "Immediate answers. No SQL. No analyst. No waiting.",
      },
      {
        type: "para",
        text: "The interface doesn't just respond — it learns. Ask the same question twice and it builds a one-click report. Describe a new workflow and it creates the UI. Your tools evolve around how you actually work.",
      },
    ],
  },
  {
    step: "TIER 04",
    title: "Operational Brain",
    blocks: [
      {
        type: "para",
        text: "Decision OS becomes the intelligence layer your other tools report to — not the other way around.",
      },
      {
        type: "para",
        text: "Every decision carries context, history, and precedent. What-if scenarios run before you commit. New workflows emerge conversationally — describe what you need, watch it get built, validate it, deploy it.",
      },
      {
        type: "para",
        text: "Your ERP still runs. Your CRM still runs. Decision OS sits above them — extracting signal, surfacing decisions, making your team faster.",
      },
      {
        type: "note",
        text: "Currently delivered as a consulting engagement while the platform matures.",
      },
    ],
  },
  {
    step: "TIER 05",
    title: "The Final Boss",
    comingSoon: true,
    blocks: [
      { type: "para", text: "The last enterprise software you'll need." },
      {
        type: "para",
        text: "Everything Decision OS has learned about your business — your processes, your decisions, your data — becomes the foundation to replace the vendor abstractions you've been paying for.",
      },
      {
        type: "para",
        text: "One by one. At your pace. Until the only system that knows your business is the one built entirely around it.",
      },
      { type: "note", text: "This is where we're going." },
    ],
  },
];

function renderBlock(block: ContentBlock, i: number) {
  switch (block.type) {
    case "para":
      return (
        <p key={i} className="text-white/70 leading-relaxed">
          {block.text}
        </p>
      );
    case "list":
      return (
        <div key={i}>
          <p className="text-white font-medium mb-3 text-sm uppercase tracking-wide">
            {block.label}
          </p>
          <ul className="space-y-2 font-[family-name:var(--font-geist-mono)] text-sm">
            {block.items.map((item, j) => (
              <li key={j} className="flex gap-3 text-white/70">
                <span className="text-white/50 flex-shrink-0">·</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      );
    case "quotes":
      return (
        <div
          key={i}
          className="space-y-2 font-[family-name:var(--font-geist-mono)] text-sm pl-4 border-l-2 border-white/20"
        >
          {block.items.map((item, j) => (
            <p key={j} className="text-white/60">
              {item}
            </p>
          ))}
        </div>
      );
    case "note":
      return (
        <p key={i} className="text-white/70 text-sm">
          {block.text}
        </p>
      );
    case "footnote":
      // Visually separated footnote — asterisk prefix, dimmer, smaller, clear divider
      return (
        <div key={i} className="border-t border-white/10 pt-4 mt-2">
          <p className="font-[family-name:var(--font-geist-mono)] text-xs text-green-400/70">
            * {block.text}
          </p>
        </div>
      );
  }
}

export default function VisionCarousel() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const prev = useCallback(() => setCurrent((c) => Math.max(0, c - 1)), []);
  const next = useCallback(
    () => setCurrent((c) => Math.min(screens.length - 1, c + 1)),
    []
  );

  // Reset to Tier 1 whenever the user navigates to #vision
  useEffect(() => {
    const onHashChange = () => {
      if (window.location.hash === "#vision") setCurrent(0);
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [next, prev]);

  // Non-passive touchmove: lock to horizontal once intent is clear
  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    const onTouchMove = (e: TouchEvent) => {
      if (touchStartX.current === null || touchStartY.current === null) return;
      const dx = Math.abs(e.touches[0].clientX - touchStartX.current);
      const dy = Math.abs(e.touches[0].clientY - touchStartY.current);
      if (dx > dy && dx > 5) e.preventDefault();
    };
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    return () => el.removeEventListener("touchmove", onTouchMove);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta < -50) next();
    if (delta > 50) prev();
    touchStartX.current = null;
    touchStartY.current = null;
  };

  return (
    <section id="vision" className="snap-start border-t border-white/10">
      {/* ── Sticky header — sticks at nav bottom (nav measured at 57px) ── */}
      <div className="sticky top-[57px] z-40 bg-black border-b border-white/10 px-6 py-4">
        <div className="max-w-5xl mx-auto">
          <span className="font-[family-name:var(--font-geist-mono)] text-xs tracking-widest text-green-400 uppercase">
            How It Works
          </span>
          <p className="text-green-400 text-sm mt-1">
            Five tiers. Each builds on the last. Take what you need.
          </p>
        </div>
      </div>

      {/* ── Carousel: mobile + desktop ── */}
      <div
        ref={carouselRef}
        className="relative h-[calc(100svh-5rem)] md:h-[calc(100vh-5rem)]"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Overflow-clipped sliding track */}
        <div className="overflow-hidden h-full">
          <div
            className="flex h-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {screens.map((s, i) => (
              <div
                key={i}
                className="w-full flex-shrink-0 h-full flex flex-col justify-start px-5 pt-8 pb-20 md:px-16 md:pt-16 md:pb-20"
              >
                <div className="max-w-3xl md:mx-auto w-full space-y-5 md:space-y-8 overflow-y-auto max-h-[calc(100svh-13rem)] md:max-h-[calc(100vh-14rem)]">
                  {/* Slide header */}
                  <div className="border-b border-white/20 pb-4 md:pb-6">
                    <div className="flex items-center gap-3 md:gap-4 mb-2">
                      <span className="font-[family-name:var(--font-geist-mono)] text-xs text-white/60 uppercase tracking-widest">
                        {s.step}
                      </span>
                      {s.comingSoon && (
                        <span className="font-[family-name:var(--font-geist-mono)] text-xs bg-white text-black px-2 py-0.5 font-semibold tracking-widest">
                          COMING SOON
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
                      {s.title}
                    </h3>
                  </div>
                  {/* Content blocks */}
                  <div className="space-y-4 md:space-y-5">
                    {s.blocks.map((block, j) => renderBlock(block, j))}
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
            className="flex absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 items-center justify-center border border-white/50 md:border-white text-white hover:bg-white hover:text-black transition-colors duration-200 font-[family-name:var(--font-geist-mono)] text-base md:text-lg"
            aria-label="Previous step"
          >
            ←
          </button>
        )}
        {/* → Arrow */}
        {current < screens.length - 1 && (
          <button
            onClick={next}
            className="flex absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 items-center justify-center border border-white/50 md:border-white text-white hover:bg-white hover:text-black transition-colors duration-200 font-[family-name:var(--font-geist-mono)] text-base md:text-lg"
            aria-label="Next step"
          >
            →
          </button>
        )}

        {/* Bottom bar: dots + counter · Recent Work CTA */}
        <div className="absolute bottom-6 left-0 right-0 flex items-center justify-between px-5 md:px-16">
          {/* Left spacer — desktop only (balances arrow buttons) */}
          <div className="hidden md:block w-32" />
          {/* Dots + counter */}
          <div className="flex items-center gap-2 md:gap-3">
            {screens.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to tier ${i + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  i === current
                    ? "w-4 h-2 md:w-5 md:h-2.5 bg-white"
                    : "w-2 h-2 md:w-2.5 md:h-2.5 bg-white/40 hover:bg-white/80"
                }`}
              />
            ))}
            <span className="font-[family-name:var(--font-geist-mono)] text-xs md:text-sm text-white/60 ml-2 md:ml-3">
              {current + 1} / {screens.length}
            </span>
          </div>
          {/* CTA */}
          <a
            href="#proof"
            className="font-[family-name:var(--font-geist-mono)] text-xs text-orange-400 hover:text-orange-300 transition-colors duration-200 tracking-widest"
          >
            RECENT WORK ↓
          </a>
        </div>
      </div>
    </section>
  );
}
