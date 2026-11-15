"use client";

import { useEffect, useRef } from "react";
import About from "@/components/About";

/**
 * Put both images in /public:
 *   /public/jesus-potrait.png    (mobile, portrait)
 *   /public/jesus-landscape.png  (desktop, landscape)
 */
const MOBILE_SRC = "/images/jesus-potrait.png";
const DESKTOP_SRC = "/images/jesus-landscape.png";

// The soft golden yellow the light ends in. Match the next section to this.
const ACCENT = "#f7f1e6";
const ACCENT_SOFT = "#FBE7A6";
const ACCENT_GLOW = "#FFF3CF";

/**
 * Each orb is one soft bokeh circle.
 * x: horizontal position (%), size: px, travel: how far it drifts down (vh),
 * grow: extra scale at the end, blur: px, alpha: peak brightness,
 * float: seconds for the slow idle drift.
 */
const ORBS = [
  { x: 8, size: 180, travel: 70, grow: 2.2, blur: 18, alpha: 0.55, float: 11 },
  { x: 20, size: 90, travel: 95, grow: 1.6, blur: 8, alpha: 0.7, float: 8 },
  { x: 31, size: 240, travel: 60, grow: 2.6, blur: 26, alpha: 0.45, float: 14 },
  { x: 43, size: 120, travel: 85, grow: 1.9, blur: 12, alpha: 0.6, float: 9 },
  { x: 52, size: 300, travel: 50, grow: 3, blur: 34, alpha: 0.5, float: 16 },
  { x: 62, size: 70, travel: 105, grow: 1.5, blur: 6, alpha: 0.75, float: 7 },
  { x: 71, size: 200, travel: 75, grow: 2.3, blur: 20, alpha: 0.5, float: 12 },
  { x: 82, size: 110, travel: 90, grow: 1.8, blur: 10, alpha: 0.65, float: 10 },
  { x: 92, size: 220, travel: 65, grow: 2.4, blur: 24, alpha: 0.45, float: 13 },
  { x: 14, size: 140, travel: 120, grow: 1.7, blur: 14, alpha: 0.4, float: 15 },
  { x: 57, size: 160, travel: 115, grow: 2, blur: 16, alpha: 0.4, float: 12 },
  { x: 88, size: 80, travel: 125, grow: 1.5, blur: 8, alpha: 0.45, float: 9 },
];

export default function RootPage() {
  return (
    <>
      <HeroSection />
      <About />
    </>
  );
}

function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = section.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const raw = scrollable > 0 ? -rect.top / scrollable : 0;
      const progress = Math.min(1, Math.max(0, raw));
      // Written straight to CSS, so React never re-renders while scrolling.
      section.style.setProperty("--p", progress.toFixed(4));
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Hero"
      className="hero"
      style={{ ["--p" as string]: 0 }}
    >
      <div className="hero__stage">
        {/* Painting: portrait on mobile, landscape on desktop */}
        <picture>
          <source media="(min-width: 768px)" srcSet={DESKTOP_SRC} />
          <img
            className="hero__image"
            src={MOBILE_SRC}
            alt="Jesus standing on a rocky hillside above a lake at golden hour, arms open"
            fetchPriority="high"
            decoding="async"
          />
        </picture>

        {/* Wide mist that spills in from above the screen */}
        <div className="hero__mist" aria-hidden="true" />

        {/* The main beam, centred above the top edge, growing as you scroll */}
        <div className="hero__beam" aria-hidden="true" />

        {/* Bokeh orbs drifting down out of the light */}
        <div className="hero__bokeh" aria-hidden="true">
          {ORBS.map((o, i) => (
            <span
              key={i}
              className="hero__orb"
              style={{
                left: `${o.x}%`,
                width: o.size,
                height: o.size,
                ["--travel" as string]: o.travel,
                ["--grow" as string]: o.grow,
                ["--alpha" as string]: o.alpha,
                ["--blur" as string]: `${o.blur}px`,
                ["--float" as string]: `${o.float}s`,
                ["--delay" as string]: `${-i * 1.3}s`,
              }}
            >
              <i />
            </span>
          ))}
        </div>

        {/* Final fill: the whole viewport settles into the accent colour */}
        <div className="hero__fill" aria-hidden="true" />

        {/* Two-line tagline — fades out as scroll progresses */}
        <div className="hero__tagline" aria-label="Tagline">
          <p className="hero__tagline-l1">Encounter the God of the Bible.</p>
          <p className="hero__tagline-l2">Meet the people of the Bible.</p>
        </div>
      </div>

      <style>{`
        .hero {
          --accent: ${ACCENT};
          --accent-soft: ${ACCENT_SOFT};
          --accent-glow: ${ACCENT_GLOW};
          position: relative;
          height: 140vh;
          background: var(--accent);
        }
        .hero__stage {
          position: sticky;
          top: 0;
          height: 100vh;
          height: 100svh;
          width: 100%;
          overflow: hidden;
          isolation: isolate;
        }
        .hero__image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          filter: brightness(calc(1 + var(--p) * 0.18)) saturate(calc(1 - var(--p) * 0.25));
          will-change: filter;
        }

        /* Mist: soft haze that thickens with scroll */
        .hero__mist {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(120% 70% at 50% -15%, var(--accent-glow) 0%, rgba(251,231,166,0.55) 35%, transparent 70%),
            radial-gradient(80% 50% at 15% 0%, rgba(255,243,207,0.6), transparent 70%),
            radial-gradient(80% 50% at 85% 0%, rgba(255,243,207,0.6), transparent 70%);
          filter: blur(30px);
          opacity: calc(0.25 + var(--p) * 0.75);
          mix-blend-mode: screen;
          transform: translateY(calc(var(--p) * 25vh)) scale(calc(1 + var(--p) * 0.6));
          transform-origin: 50% 0%;
          will-change: transform, opacity;
        }

        /* Beam: big glow whose centre sits above the screen */
        .hero__beam {
          position: absolute;
          left: 50%;
          top: 0;
          width: 160vmax;
          height: 160vmax;
          margin-left: -80vmax;
          margin-top: -80vmax;
          border-radius: 50%;
          background: radial-gradient(
            circle at 50% 50%,
            var(--accent-glow) 0%,
            rgba(255,243,207,0.9) 12%,
            rgba(251,231,166,0.7) 26%,
            rgba(243,207,114,0.35) 42%,
            transparent 62%
          );
          filter: blur(12px);
          mix-blend-mode: screen;
          transform: scale(calc(0.22 + var(--p) * 1.25));
          opacity: calc(0.45 + var(--p) * 0.55);
          will-change: transform, opacity;
        }

        /* Bokeh */
        .hero__bokeh {
          position: absolute;
          inset: 0;
          pointer-events: none;
          mix-blend-mode: screen;
          opacity: clamp(0, calc(0.4 + var(--p) * 2), 1);
        }
        .hero__orb {
          position: absolute;
          top: 0;
          margin-top: calc(var(--travel) * -0.5vh);
          transform:
            translateY(calc(var(--p) * var(--travel) * 1vh))
            scale(calc(0.6 + var(--p) * var(--grow)));
          will-change: transform;
        }
        .hero__orb i {
          display: block;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(255,248,220,calc(var(--alpha) + 0.1)) 0%,
            rgba(251,231,166,var(--alpha)) 45%,
            rgba(243,207,114,calc(var(--alpha) * 0.35)) 70%,
            transparent 100%
          );
          filter: blur(var(--blur));
          animation: hero-float var(--float) ease-in-out var(--delay) infinite alternate;
        }
        @keyframes hero-float {
          from { transform: translate3d(-14px, -10px, 0); }
          to   { transform: translate3d(14px, 12px, 0); }
        }

        /* Final golden fill, only in the last 30% of the scroll */
        .hero__fill {
          position: absolute;
          inset: 0;
          background: var(--accent);
          opacity: clamp(0, calc((var(--p) - 0.5) * 2), 1);
          will-change: opacity;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero__orb i { animation: none; }
        }
        @media (max-width: 767px) {
          .hero { height: 140vh; }
          .hero__orb { scale: 0.7; }
        }

        /* ── Tagline ─────────────────────────────────────────────────── */
        .hero__tagline {
          position: absolute;
          inset: 0;
          z-index: 10;
          pointer-events: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 0 1.5rem;
          padding-bottom: 22vh; /* shifts centre-point upward */
          opacity: clamp(0, calc(1 - var(--p) * 2.5), 1);
          transform: translateY(calc(var(--p) * -24px));
          will-change: opacity, transform;
          animation: tagline-in 1.1s cubic-bezier(.22,.61,.36,1) both;
        }
        @keyframes tagline-in {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero__tagline-l1 {
          font-family: var(--font-primary), 'Georgia', serif;
          font-size: clamp(2.1rem, 6.5vw, 4.2rem);
          font-weight: 700;
          font-style: italic;
          line-height: 1.15;
          letter-spacing: 0.01em;
          color: rgba(255, 255, 255, 0.96);
          text-shadow:
            0 2px 24px rgba(60, 35, 5, 0.55),
            0 0  60px rgba(243, 207, 114, 0.25);
          margin: 0 0 0.35em;
        }
        .hero__tagline-l2 {
          font-family: var(--font-primary), 'Georgia', serif;
          font-size: clamp(1.6rem, 5vw, 3.2rem);
          font-weight: 500;
          font-style: italic;
          line-height: 1.15;
          letter-spacing: 0.01em;
          color: rgba(255, 255, 255, 0.60);
          text-shadow: 0 2px 18px rgba(60, 35, 5, 0.45);
          margin: 0;
        }
      `}</style>
    </section>
  );
}
