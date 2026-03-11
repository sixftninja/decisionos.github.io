"use client";

import { useState, useEffect, useCallback, useRef } from "react";

type ContentBlock =
  | { type: "para"; text: string }
  | { type: "list"; label: string; items: string[] }
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
        text: "What's actually happening inside your business? Not the version that made it into the deck.",
      },
      {
        type: "para",
        text: "We connect to your systems and surface what's real — without documentation, interviews, or lengthy onboarding.",
      },
      {
        type: "list",
        label: "You get:",
        items: [
          "Operational map — processes, decisions, data flows as they actually are",
          "Data quality audit: duplicates, orphans, broken logic",
          "Gaps between stated process and actual behaviour",
          "Custom scope: point us at any part of your business and we'll dig in",
        ],
      },
      { type: "note", text: "Delivered in days, not months." },
      {
        type: "footnote",
        text: "Schema gets you a free snapshot. Full X-Ray requires data access.",
      },
    ],
  },
  {
    step: "TIER 02",
    title: "Live Intelligence",
    blocks: [
      {
        type: "para",
        text: "Your X-Ray comes alive. Real-time operational visibility — plus the Adaptive Interface: Decision OS agents that observe how your team works and surface custom UI suggestions based on your usage patterns.",
      },
      {
        type: "list",
        label: "You get:",
        items: [
          "Real-time operational dashboard — your data, your patterns",
          "Anomaly detection surfaced before they become crises",
          "Institutional knowledge captured and searchable",
          "The Adaptive Interface — custom UI suggestions surfaced by agents as they learn",
        ],
      },
    ],
  },
  {
    step: "TIER 03",
    title: "Operational Brain",
    blocks: [
      {
        type: "para",
        text: "Decision OS becomes the intelligence layer your other tools report to.",
      },
      {
        type: "para",
        text: "Describe a new workflow and watch it get built. Every decision carries context, history, and precedent. Your ERP still runs. Your CRM still runs.",
      },
      {
        type: "list",
        label: "You get:",
        items: [
          "Decision OS becomes your operating system — SaaS tools become the plumbing",
          "Every decision tracked with full context and history",
          "What-if scenarios and predictive modelling before you commit",
          "Conversational workflow creation — describe it, validate it, deploy it",
        ],
      },
      {
        type: "note",
        text: "Currently delivered as a consulting engagement.",
      },
    ],
  },
  {
    step: "TIER 04",
    title: "The Final Boss",
    comingSoon: true,
    blocks: [
      { type: "para", text: "The last enterprise software you'll need." },
      {
        type: "para",
        text: "Everything Decision OS has learned about your business becomes the foundation to replace the vendor tools you've been paying for. One by one. At your pace.",
      },
      {
        type: "para",
        text: "Until the only system that knows your business is the one built entirely around it.",
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
    case "note":
      return (
        <p key={i} className="text-white/70 text-sm">
          {block.text}
        </p>
      );
    case "footnote":
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
            Four engagement tiers. Enter at any level. Each builds on the last.
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
          {/* CTA — JS scroll avoids anchor/inner-scroll conflict */}
          <button
            onClick={() =>
              document
                .getElementById("proof")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="font-[family-name:var(--font-geist-mono)] text-xs text-orange-400 hover:text-orange-300 transition-colors duration-200 tracking-widest"
          >
            RECENT WORK ↓
          </button>
        </div>
      </div>
    </section>
  );
}
