"use client";

import Link from "next/link";

export default function About() {
  return (
    <div className="hero__about" id="about" aria-label="About Eagles Wings UK">
      {/* ── Left Half (Laptop) / Top Half (Mobile): Text ── */}
      <div className="about__text-wrap">
        <div className="about__content">
          {/* One big bold title */}
          <h2 className="about__title">
            Encouraging and equipping church leaders across the nation.
          </h2>

          {/* 2 small lines */}
          <div className="about__lines">
            <p>
              Inspired by Isaiah 40:31, we offer personal consultations and
              spiritual renewal for church leaders.
            </p>
            <p>
              Helping ministers rediscover God’s vision and lead with renewed
              confidence in the Gospel.
            </p>
          </div>

          {/* Underlined "Know more" linking to /about */}
          <div className="about__action">
            <Link href="/about" className="about__link">
              Know more
            </Link>
          </div>
        </div>
      </div>

      {/* ── Right Half (Laptop) / Bottom Half (Mobile): Frameless Image ── */}
      <div className="about__image-wrap">
        <img
          src="https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ca/Tabernacle_of_OP_Edit_1.jpg/500px-Tabernacle_of_OP_Edit_1.jpg"
          alt="Eagles Wings UK ministry journey"
          className="about__image"
          loading="lazy"
        />
      </div>

      <style>{`
        /* ── Fullscreen Overlay ─────────────────────────────────────── */
        .hero__about {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100vh;
          height: 100svh;
          z-index: 20;
          background: #f7f1e6;
          display: flex;
          flex-direction: row; /* Horizontal on laptop */
          align-items: stretch;
          justify-content: stretch;
          /* Controlled by ABOUT_FADE_START and ABOUT_FADE_END from Hero */
          opacity: clamp(0, calc((var(--p) - var(--about-start)) / (var(--about-end) - var(--about-start))), 1);
          will-change: opacity;
          pointer-events: none;
          overflow: hidden;
        }
        .hero--about-on .hero__about {
          pointer-events: auto;
        }

        /* ── Left Half: Text Container (Laptop) ─────────────────────── */
        .about__text-wrap {
          width: 50%;
          height: 100%;
          height: 100vh;
          height: 100svh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 6.5rem 4rem 3rem;
          box-sizing: border-box;
        }

        .about__content {
          width: 100%;
          max-width: 560px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }

        /* ── One Big Bold Title ────────────────────────────────────── */
        .about__title {
          font-family: var(--font-manrope), -apple-system, sans-serif;
          font-size: clamp(1.85rem, 2.7vw, 2.85rem);
          font-weight: 800;
          line-height: 1.18;
          letter-spacing: -0.025em;
          color: #17120b;
          margin: 0 0 1rem;
        }

        /* ── 2 Small Lines ─────────────────────────────────────────── */
        .about__lines {
          font-family: var(--font-manrope), -apple-system, sans-serif;
          font-size: clamp(0.88rem, 1.1vw, 1.05rem);
          line-height: 1.6;
          color: #6b5845;
          font-weight: 400;
          margin: 0 0 1.5rem;
          max-width: 500px;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .about__lines p {
          margin: 0;
        }

        /* ── Underlined "Know more" ────────────────────────────────── */
        .about__action {
          margin-top: 0.25rem;
        }

        .about__link {
          font-family: var(--font-manrope), -apple-system, sans-serif;
          font-size: clamp(0.95rem, 1.2vw, 1.12rem);
          font-weight: 600;
          color: #17120b;
          text-decoration: underline;
          text-underline-offset: 5px;
          text-decoration-thickness: 1.5px;
          text-decoration-color: #17120b;
          transition: color 0.2s, text-decoration-color 0.2s;
        }

        .about__link:hover {
          color: #c8973a;
          text-decoration-color: #c8973a;
        }

        /* ── Right Half: Frameless Edge-to-Edge Image (Laptop) ──────── */
        .about__image-wrap {
          width: 50%;
          height: 100%;
          height: 100vh;
          height: 100svh;
          margin: 0;
          padding: 0;
          border-radius: 0;
          border: none;
          box-shadow: none;
          overflow: hidden;
          background: #eadfc9;
        }

        .about__image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          border-radius: 0;
          border: none;
        }

        /* ── Mobile View: Vertical Split (50vh text / 50vh image) ─── */
        @media (max-width: 900px) {
          .hero__about {
            flex-direction: column;
          }
          .about__text-wrap {
            width: 100%;
            height: 50vh;
            height: 50svh;
            padding: 4.5rem 1.75rem 1.5rem;
          }
          .about__content {
            max-width: 100%;
          }
          .about__title {
            font-size: clamp(1.4rem, 5.2vw, 1.95rem);
            margin-bottom: 0.65rem;
          }
          .about__lines {
            font-size: 0.82rem;
            line-height: 1.45;
            margin-bottom: 0.85rem;
            gap: 0.25rem;
          }
          .about__image-wrap {
            width: 100%;
            height: 50vh;
            height: 50svh;
          }
        }

        @media (max-width: 480px) {
          .about__text-wrap {
            padding: 4.25rem 1.25rem 1.25rem;
          }
          .about__title {
            font-size: clamp(1.3rem, 5.5vw, 1.75rem);
          }
        }

        @media (max-width: 900px) and (max-height: 680px) {
          .about__text-wrap {
            padding-top: 3.75rem;
            padding-bottom: 0.75rem;
          }
          .about__title {
            margin-bottom: 0.45rem;
          }
          .about__lines {
            margin-bottom: 0.65rem;
          }
        }
      `}</style>
    </div>
  );
}
