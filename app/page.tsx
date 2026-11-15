"use client";

import { useEffect, useRef } from "react";

const MOBILE_SRC = "/images/jesus-potrait.png";
const DESKTOP_SRC = "/images/jesus-landscape.png";
const ACCENT = "#f7f1e6";

// ── Timing & Focus Controls (0.0 = top of hero, 1.0 = scroll complete) ───
// Adjust these values to control when the About section appears:
const ABOUT_FADE_START = 0.80; // Scroll point where About starts fading in
const ABOUT_FADE_END = 0.95;   // Scroll point where About reaches full opacity

const ORBS = [
  { x: 20, size: 90, travel: 95, grow: 1.6, blur: 8, alpha: 0.45, float: 8 },
  { x: 43, size: 120, travel: 85, grow: 1.9, blur: 12, alpha: 0.35, float: 9 },
  { x: 52, size: 280, travel: 50, grow: 2.8, blur: 32, alpha: 0.30, float: 16 },
  { x: 62, size: 70, travel: 105, grow: 1.5, blur: 6, alpha: 0.50, float: 7 },
  { x: 82, size: 110, travel: 90, grow: 1.8, blur: 10, alpha: 0.38, float: 10 },
];

export default function RootPage() {
  return <HeroSection />;
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
      const p = Math.min(1, Math.max(0, raw));

      // Cheap CSS write — no React re-render on every scroll frame
      section.style.setProperty("--p", p.toFixed(4));

      // As soon as the light starts engulfing (any scroll > 0.02), instantly drop text shadow
      section.classList.toggle("hero--engulfing", p > 0.02);

      // Enable pointer events on About once it reaches view
      section.classList.toggle("hero--about-on", p >= ABOUT_FADE_END * 0.95);

      // Notify Navbar to update color only when About comes into focus
      window.dispatchEvent(
        new CustomEvent("about-in-view", { detail: { inView: p >= ABOUT_FADE_START } })
      );
    };

    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };

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

        {/* ── Painting ─────────────────────────────────── */}
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

        {/* ── Soft ambient glow at the light source ────── */}
        <div className="hero__ambient" aria-hidden="true" />

        {/* ── Conical spotlight — soft outer halo ──────── */}
        <div className="hero__cone-halo" aria-hidden="true" />

        {/* ── Conical spotlight — main beam ────────────── */}
        <div className="hero__cone" aria-hidden="true" />

        {/* ── Bokeh orbs ───────────────────────────────── */}
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

        {/* ── Parchment fill — covers everything at p=1 ── */}
        <div className="hero__fill" aria-hidden="true" />

        {/* ── About — fades in from behind the light ────── */}
        {/* Sits above the fill (z:20). Pointer-events off   */}
        {/* until hero--about-on class is set by scroll JS. */}
        <div className="hero__about" id="about" aria-label="About Eagles Wings UK">
          <div className="about__inner">

            <p className="about__eyebrow">Who We Are</p>

            <h2 className="about__heading">
              Standing with Israel,<br />
              rooted in faith.
            </h2>

            <div className="about__divider" aria-hidden="true" />

            <p className="about__body">
              Eagles Wings UK is a Christian organisation dedicated to building
              bridges of friendship between the Church and the Jewish people.
              Grounded in the biblical covenant between God and Israel, we
              mobilise communities across the United Kingdom to pray, advocate,
              and journey alongside the nation of Israel.
            </p>

            <a href="/about" className="about__cta">Learn more</a>
          </div>
        </div>

        {/* ── Tagline — fades out as scroll begins ──────── */}
        <div className="hero__tagline" aria-label="Tagline">
          <p className="hero__tagline-l1">Encounter the God of the Bible.</p>
          <p className="hero__tagline-l2">Meet the people of the Bible.</p>
        </div>

      </div>

      <style>{`
        /* ── Section ───────────────────────────────────────────────── */
        .hero {
          --accent: ${ACCENT};
          --about-start: ${ABOUT_FADE_START};
          --about-end: ${ABOUT_FADE_END};
          position: relative;
          height: 115vh;
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

        /* ── Painting ──────────────────────────────────────────────── */
        .hero__image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          filter: brightness(calc(1 + var(--p) * 0.15)) saturate(calc(1 - var(--p) * 0.3));
          will-change: filter;
        }

        /* ── Ambient glow ──────────────────────────────────────────── */
        .hero__ambient {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            ellipse 40% 28% at 50% -4%,
            rgba(255, 252, 230, 0.65) 0%,
            transparent 100%
          );
          mix-blend-mode: screen;
          pointer-events: none;
        }

        /* ── Conical spotlight ─────────────────────────────────────── */
        /* No clip-path. Shape + soft edges come entirely from the     */
        /* radial-gradient ellipse. Rx grows with --p.                 */

        .hero__cone-halo {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            ellipse calc(18% + var(--p) * 76%) 130% at 50% -5%,
            rgba(255, 252, 215, 0.60)  0%,
            rgba(251, 231, 166, 0.38) 28%,
            rgba(247, 241, 230, 0.18) 58%,
            transparent 80%
          );
          mix-blend-mode: screen;
          filter: blur(28px);
          opacity: calc(0.45 + var(--p) * 0.50);
          will-change: opacity;
        }

        .hero__cone {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            ellipse calc(10% + var(--p) * 80%) 120% at 50% -5%,
            rgba(255, 255, 255, 0.96)  0%,
            rgba(255, 252, 230, 0.80) 14%,
            rgba(252, 237, 180, 0.52) 34%,
            rgba(248, 230, 158, 0.22) 54%,
            transparent 72%
          );
          mix-blend-mode: screen;
          filter: blur(10px);
          opacity: calc(0.50 + var(--p) * 0.50);
          will-change: opacity;
        }

        /* ── Bokeh ─────────────────────────────────────────────────── */
        .hero__bokeh {
          position: absolute;
          inset: 0;
          pointer-events: none;
          mix-blend-mode: screen;
          opacity: clamp(0, calc(0.25 + var(--p) * 1.4), 0.8);
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
          to   { transform: translate3d( 14px,  12px, 0); }
        }

        /* ── Parchment fill ────────────────────────────────────────── */
        .hero__fill {
          position: absolute;
          inset: 0;
          background: var(--accent);
          opacity: clamp(0, calc((var(--p) - 0.45) * 1.82), 1);
          will-change: opacity;
        }

        /* ── About overlay ─────────────────────────────────────────── */
        /* Fades in through the parchment once the light is complete.  */
        .hero__about {
          position: absolute;
          inset: 0;
          z-index: 20;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 7rem 2rem;
          /* Controlled by ABOUT_FADE_START and ABOUT_FADE_END */
          opacity: clamp(0, calc((var(--p) - var(--about-start)) / (var(--about-end) - var(--about-start))), 1);
          will-change: opacity;
          /* Not interactive until the scroll JS adds hero--about-on */
          pointer-events: none;
        }
        .hero--about-on .hero__about {
          pointer-events: auto;
        }

        .about__inner {
          max-width: 640px;
          text-align: center;
        }
        .about__eyebrow {
          font-family: var(--font-manrope), sans-serif;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #b08a4a;
          margin: 0 0 1.5rem;
        }
        .about__heading {
          font-family: var(--font-primary), 'Georgia', serif;
          font-size: clamp(1.9rem, 4.5vw, 3rem);
          font-weight: 500;
          line-height: 1.2;
          color: #2c1f0e;
          margin: 0 0 2rem;
          letter-spacing: -0.01em;
        }
        .about__divider {
          width: 48px;
          height: 1px;
          background: #c8973a;
          margin: 0 auto 2rem;
          opacity: 0.6;
        }
        .about__body {
          font-family: var(--font-manrope), sans-serif;
          font-size: 1rem;
          font-weight: 400;
          line-height: 1.8;
          color: #5a4228;
          margin: 0 0 2.5rem;
        }
        .about__cta {
          display: inline-block;
          text-decoration: none;
          font-family: var(--font-manrope), sans-serif;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #b08a4a;
          border-bottom: 1px solid rgba(176, 138, 74, 0.4);
          padding-bottom: 3px;
          transition: color 0.25s, border-color 0.25s;
        }
        .about__cta:hover {
          color: #8a6530;
          border-color: #8a6530;
        }

        /* ── Tagline ───────────────────────────────────────────────── */
        .hero__tagline {
          position: absolute;
          inset: 0;
          z-index: 30;
          pointer-events: none;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 0 1.5rem;
          padding-bottom: 22vh;
          opacity: 1;
          transform: translateY(0);
          will-change: opacity, transform;
          transition: opacity 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                      transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94);
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

        /* When light starts engulfing: instantly drop shadows and fade text out */
        .hero--engulfing .hero__tagline-l1,
        .hero--engulfing .hero__tagline-l2 {
          text-shadow: none !important;
        }
        .hero--engulfing .hero__tagline {
          opacity: 0;
          transform: translateY(-20px);
        }

        @media (prefers-reduced-motion: reduce) {
          .hero__orb i  { animation: none; }
          .hero__tagline { animation: none; }
        }
        @media (max-width: 767px) {
          .hero__orb { scale: 0.7; }
          .about__heading { font-size: clamp(1.6rem, 6vw, 2.4rem); }
        }
      `}</style>
    </section>
  );
}
