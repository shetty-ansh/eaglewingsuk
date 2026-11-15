"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Covenant", href: "/covenant" },
  { label: "Visit Israel", href: "/visit-israel" },
  { label: "Events", href: "/events" },
  { label: "Media", href: "/media" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── Header ───────────────────────────────────────────────────── */}
      <header
        role="banner"
        className={[
          "fixed inset-x-0 top-0 z-[100] h-[72px] border-b",
          "transition-[background,border-color,box-shadow,backdrop-filter] duration-[400ms] ease-[cubic-bezier(.25,.46,.45,.94)]",
          scrolled
            ? "bg-[rgba(255,248,232,0.92)] backdrop-blur-[18px] saturate-[1.4] border-[rgba(200,151,58,0.25)] shadow-[0_1px_28px_rgba(190,140,50,0.10)]"
            : "bg-transparent border-transparent",
        ].join(" ")}
      >
        <div className="max-w-[1280px] mx-auto h-full px-8 flex items-center gap-8">

          {/* Logo */}
          <Link
            href="/"
            aria-label="Eagles Wings UK — home"
            className="shrink-0 mr-auto no-underline"
          >
            <span
              className={[
                "font-[family-name:var(--font-primary)] text-[1.15rem] font-medium italic tracking-[0.06em]",
                "transition-[color,text-shadow] duration-[400ms]",
                scrolled
                  ? "text-[#3d2e18] [text-shadow:none]"
                  : "text-white [text-shadow:0_1px_3px_rgba(100,70,20,0.6),0_0_18px_rgba(243,207,114,0.5)]",
              ].join(" ")}
            >
              Eagles Wings UK
            </span>
          </Link>

          {/* Desktop nav links – hidden below 900 px */}
          <nav
            className="hidden min-[901px]:flex items-center gap-0.5"
            aria-label="Primary navigation"
          >
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={[
                  "relative group no-underline",
                  "font-[family-name:var(--font-manrope)] text-[0.72rem] font-medium tracking-[0.13em] uppercase",
                  "px-3 py-1.5 transition-[color,text-shadow] duration-300",
                  scrolled
                    ? "text-[#6b5433] hover:text-[#c8973a] [text-shadow:none]"
                    : "text-white/90 hover:text-white [text-shadow:0_1px_4px_rgba(80,50,10,0.55)] hover:[text-shadow:0_0_12px_rgba(243,207,114,0.8)]",
                ].join(" ")}
              >
                {label}
                {/* Grow-from-centre underline on hover */}
                <span className="absolute bottom-[-1px] left-3 right-3 h-px bg-[#e6b96a] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3 shrink-0">

            {/* Donate button */}
            <Link
              href="/donate"
              className={[
                "no-underline font-[family-name:var(--font-manrope)] text-[0.72rem] font-semibold tracking-[0.16em] uppercase",
                "px-5 py-[0.45rem] rounded-sm border-[1.5px]",
                "transition-[background,border-color,color,box-shadow] duration-300",
                scrolled
                  ? [
                    "text-[#c8973a] border-[#c8973a] bg-transparent",
                    "hover:bg-[#c8973a] hover:text-white hover:shadow-[0_0_14px_rgba(200,151,58,0.3)]",
                  ].join(" ")
                  : [
                    "text-white border-white/65 bg-white/[0.08] backdrop-blur-sm",
                    "[text-shadow:0_1px_3px_rgba(80,50,10,0.5)]",
                    "hover:bg-white/[0.22] hover:border-white/90 hover:shadow-[0_0_16px_rgba(243,207,114,0.4)]",
                  ].join(" "),
              ].join(" ")}
            >
              Donate
            </Link>

            {/* Hamburger – visible below 900 px */}
            <button
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="min-[901px]:hidden flex flex-col justify-center gap-[5px] w-8 h-8 p-1 bg-transparent border-none cursor-pointer"
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className={[
                    "block h-[1.5px] rounded-sm transition-colors duration-300",
                    scrolled ? "bg-[#3d2e18]" : "bg-white/85",
                  ].join(" ")}
                />
              ))}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile drawer ────────────────────────────────────────────── */}
      {menuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="fixed inset-x-0 top-[72px] bottom-0 z-[99] flex flex-col px-6 pt-8 bg-[rgba(255,248,232,0.97)] backdrop-blur-[20px] border-t border-[rgba(200,151,58,0.25)] animate-[drawer-in_0.28s_cubic-bezier(.25,.46,.45,.94)_both]"
        >
          <nav>
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block no-underline font-[family-name:var(--font-manrope)] text-[0.85rem] tracking-[0.12em] uppercase text-[#6b5433] hover:text-[#c8973a] py-4 border-b border-[rgba(200,151,58,0.15)] transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
            <Link
              href="/donate"
              onClick={() => setMenuOpen(false)}
              className="inline-block mt-6 no-underline font-[family-name:var(--font-manrope)] text-[0.75rem] font-semibold tracking-[0.16em] uppercase text-[#c8973a] border-[1.5px] border-[#c8973a] px-8 py-[0.65rem] rounded-full text-center transition-[background,color] duration-200 hover:bg-[#c8973a] hover:text-white"
            >
              Donate
            </Link>
          </nav>
        </div>
      )}

      {/* Keyframe only — cannot be expressed in Tailwind without globals.css */}
      <style>{`
        @keyframes drawer-in {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
