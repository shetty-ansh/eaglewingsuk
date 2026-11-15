"use client";

import Link from "next/link";

export default function About() {
  return (
    <div className="hero__about" id="about" aria-label="About Eagles Wings UK">
      {/* ── Fullscreen Card Container ── */}
      <div className="about__card">
        {/* Top Header & Copy */}
        <div className="about__content">
          {/* Top muted paragraph */}
          <p className="about__intro">
            Inspired by Isaiah 40:31, Eagle’s Wings Ministries UK is driven by a
            passion to encourage, guide, and equip church leaders with spiritual
            renewal and vision.
          </p>
          <p className="about__intro">
            Founded by Mike and Angie following Mike’s miraculous healing from chronic pain in 2003, Eagle’s Wings Ministries UK grew out of their personal experience of God’s restoring power and faithfulness. Their journey inspired a deep desire to support not only ordained ministers but all those serving in church leadership, helping them overcome challenges, find fresh strength in the Lord, and fulfil His calling with renewed purpose and confidence.
          </p>

          {/* Underlined category / link */}
          <div className="about__link-wrap">
            <Link href="/what-we-do" className="about__link">
              What we do?
            </Link>
          </div>

          {/* Main prominent heading */}
          <h2 className="about__heading">
            We encourage and equip church leaders to become strong, Christ-like
            servant leaders.
          </h2>
        </div>

        {/* Rounded image taking the lower screen area */}
        <div className="about__image-wrap">
          <img
            src="https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ca/Tabernacle_of_OP_Edit_1.jpg/500px-Tabernacle_of_OP_Edit_1.jpg"
            alt="Eagles Wings UK ministry journey"
            className="about__image"
            loading="lazy"
          />
        </div>
      </div>

      <style>{`
        /* ── Fullscreen Overlay ─────────────────────────────────────── */
        .hero__about {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          height: 100svh;
          z-index: 20;
          background: #fbf7ef;
          display: flex;
          align-items: stretch;
          justify-content: center;
          /* Controlled by ABOUT_FADE_START and ABOUT_FADE_END from Hero */
          opacity: clamp(0, calc((var(--p) - var(--about-start)) / (var(--about-end) - var(--about-start))), 1);
          will-change: opacity;
          pointer-events: none;
          overflow: hidden;
        }
        .hero--about-on .hero__about {
          pointer-events: auto;
        }

        /* ── Fullscreen Card Canvas ────────────────────────────────── */
        .about__card {
          width: 100%;
          height: 100%;
          max-width: 1120px;
          max-width: 1240px;
          margin: 0 auto;
          padding: 6rem 2.5rem 2.25rem;
          padding: 6.5rem 3rem 3rem;
          display: flex;
          flex-direction: column;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          text-align: left;
          box-sizing: border-box;
          gap: 1.5rem;
          gap: 4rem;
        }

        .about__content {
          max-width: 780px;
          flex: 1;
          max-width: 580px;
          display: flex;
          flex-direction: column;
        }

        /* ── Top intro text ────────────────────────────────────────── */
        .about__intro {
          font-family: var(--font-manrope), -apple-system, sans-serif;
          font-size: clamp(0.85rem, 1.4vw, 1rem);
          line-height: 1.55;
          font-size: clamp(0.88rem, 1.1vw, 1.02rem);
          line-height: 1.6;
          color: #786550;
          margin: 0 0 1.25rem;
          font-weight: 400;
        }

        /* ── Underlined Link ───────────────────────────────────────── */
        .about__link-wrap {
          margin-bottom: 0.75rem;
          margin-bottom: 0.85rem;
        }
        .about__link {
          font-family: var(--font-manrope), -apple-system, sans-serif;
          font-size: clamp(0.95rem, 1.6vw, 1.1rem);
          font-size: clamp(0.95rem, 1.2vw, 1.1rem);
          font-weight: 500;
          color: #24190e;
          text-decoration: underline;
          text-underline-offset: 4px;
          text-decoration-thickness: 1.5px;
          text-decoration-color: #24190e;
          transition: color 0.2s, text-decoration-color 0.2s;
        }
        .about__link:hover {
          color: #c8973a;
          text-decoration-color: #c8973a;
        }

        /* ── Heading ───────────────────────────────────────────────── */
        .about__heading {
          font-family: var(--font-manrope), -apple-system, sans-serif;
          font-size: clamp(1.4rem, 2.8vw, 2.2rem);
          font-size: clamp(1.6rem, 2.4vw, 2.35rem);
          font-weight: 600;
          line-height: 1.22;
          line-height: 1.25;
          letter-spacing: -0.02em;
          color: #1f160d;
          margin: 0;
        }

        /* ── Full Bottom image ─────────────────────────────────────── */
        /* ── Right image on laptop ─────────────────────────────────── */
        .about__image-wrap {
          flex: 1;
          width: 100%;
          flex: 1;
          min-height: 180px;
          max-width: 560px;
          height: auto;
          aspect-ratio: 16 / 11;
          min-height: 340px;
          max-height: 480px;
          border-radius: 24px;
          overflow: hidden;
          background: #eadfc9;
          box-shadow: 0 16px 40px -15px rgba(60, 45, 20, 0.12);
          box-shadow: 0 20px 45px -15px rgba(60, 45, 20, 0.14);
          border: 1px solid rgba(200, 151, 58, 0.15);
        }
        .about__image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }

        /* ── Mobile adjustments ────────────────────────────────────── */
        @media (max-width: 640px) {
        /* ── Mobile & Tablet view: Text on top, Image on bottom ───── */
        @media (max-width: 900px) {
          .about__card {
            padding: 5.25rem 1.25rem 1.25rem;
            gap: 1rem;
            flex-direction: column;
            justify-content: space-between;
            align-items: stretch;
            padding: 5.5rem 1.5rem 1.5rem;
            gap: 1.25rem;
          }
          .about__content {
            max-width: 100%;
          }
          .about__intro {
            font-size: 0.82rem;
            margin-bottom: 0.85rem;
            line-height: 1.45;
          }
          .about__link-wrap {
            margin-bottom: 0.5rem;
          }
          .about__heading {
            font-size: 1.25rem;
            line-height: 1.25;
          }
          .about__image-wrap {
            flex: 1;
            max-width: 100%;
            border-radius: 18px;
            min-height: 160px;
            max-height: 400px;
            aspect-ratio: 16 / 10;
          }
        }

        @media (max-height: 720px) {
        @media (max-width: 480px) {
          .about__card {
            padding: 5.25rem 1.25rem 1.25rem;
            gap: 1rem;
          }
        }

        @media (max-width: 900px) and (max-height: 720px) {
          .about__card {
            padding-top: 4.75rem;
            padding-bottom: 1rem;
            gap: 0.75rem;
          }
          .about__intro {
            margin-bottom: 0.5rem;
          }
          .about__image-wrap {
            min-height: 140px;
          }
        }
      `}</style>
    </div>
  );
}
