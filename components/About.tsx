export default function About() {
  return (
    <section id="about" className="about">
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

        <a href="/about" className="about__cta">
          Learn more
        </a>
      </div>

      <style>{`
        .about {
          background: #f7f1e6;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 7rem 2rem;
        }

        .about__inner {
          max-width: 680px;
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
          font-size: clamp(2rem, 5vw, 3.2rem);
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
          font-size: 1.05rem;
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
      `}</style>
    </section>
  );
}

