"use client";

import Link from "next/link";

const FOOTER_LINKS = [
  { label: "About", href: "/about" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Covenant", href: "/covenant" },
  { label: "Visit Israel", href: "/visit-israel" },
  { label: "Events", href: "/events" },
  { label: "Media", href: "/media" },
];

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__container">
        {/* Main Row */}
        <div className="footer__main">
          {/* Logo */}
          <Link href="/" className="footer__logo" aria-label="Eagles Wings UK — home">
            <span className="footer__logo-text">Eagles Wings UK</span>
          </Link>

        </div>

        {/* Bottom Metadata Bar */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {new Date().getFullYear()} Eagle’s Wings Ministries UK. All rights reserved.
          </p>

          <div className="footer__meta">
            <a href="mailto:contact@eagleswingsministries.org.uk" className="footer__email">
              contact@eagleswingsministries.org.uk
            </a>
            <span className="footer__dot">•</span>
            <Link href="/privacy" className="footer__meta-link">
              Privacy
            </Link>
            <span className="footer__dot">•</span>
            <Link href="/terms" className="footer__meta-link">
              Terms
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        /* ── Compact Solid Black Footer ────────────────────────────── */
        .footer {
          background-color: #000000;
          color: #ffffff;
          padding: 2.25rem 1.5rem 1.75rem;
          border-top: 1px solid #1a1a1a;
          position: relative;
          z-index: 10;
        }

        .footer__container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        /* ── Main Streamlined Row ── */
        .footer__main {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.5rem;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footer__logo {
          text-decoration: none;
        }

        .footer__logo-text {
          font-family: var(--font-primary), 'Georgia', serif;
          font-size: 1.2rem;
          font-weight: 600;
          font-style: italic;
          color: #ffffff;
          letter-spacing: 0.04em;
        }

        .footer__nav {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 1.75rem;
        }

        .footer__link {
          font-family: var(--font-manrope), sans-serif;
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer__link:hover {
          color: #c8973a;
        }

        .footer__actions {
          display: flex;
          align-items: center;
        }

        .footer__donate-btn {
          font-family: var(--font-manrope), sans-serif;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #ffffff;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.4);
          border-radius: 2px;
          padding: 0.42rem 1.25rem;
          text-decoration: none;
          transition: all 0.2s;
        }
        .footer__donate-btn:hover {
          border-color: #c8973a;
          color: #c8973a;
          background: rgba(200, 151, 58, 0.08);
        }

        /* ── Compact Bottom Bar ── */
        .footer__bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .footer__copyright {
          font-family: var(--font-manrope), sans-serif;
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.45);
          margin: 0;
        }

        .footer__meta {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .footer__email,
        .footer__meta-link {
          font-family: var(--font-manrope), sans-serif;
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.5);
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer__email:hover,
        .footer__meta-link:hover {
          color: #ffffff;
        }

        .footer__dot {
          color: rgba(255, 255, 255, 0.2);
          font-size: 0.75rem;
        }

        /* ── Mobile Responsive ── */
        @media (max-width: 768px) {
          .footer {
            padding: 2rem 1.25rem 1.5rem;
          }
          .footer__main {
            flex-direction: column;
            align-items: flex-start;
            gap: 1.25rem;
          }
          .footer__nav {
            gap: 1.15rem;
          }
          .footer__bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
        }
      `}</style>
    </footer>
  );
}
