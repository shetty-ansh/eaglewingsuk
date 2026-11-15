"use client";

import { useState, FormEvent } from "react";

export default function ReachOut() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    church: "",
    interest: "Leadership Consultation",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simulate successful submission
    setSubmitted(true);
  };

  return (
    <section id="reach-out" className="reach-out">
      <div className="reach-out__container">
        {/* Left Column: Context & Information */}
        <div className="reach-out__info">
          <span className="reach-out__eyebrow">Connect With Us</span>
          <h2 className="reach-out__title">
            Reach out to Eagle’s Wings Ministries
          </h2>
          <p className="reach-out__subtitle">
            Whether you are seeking personal consultation, leadership team
            encouragement, spiritual renewal, or prayer, we would be honored to
            stand with you.
          </p>

          <div className="reach-out__details">
            <div className="reach-out__detail-item">
              <span className="reach-out__detail-label">Confidential & Supportive</span>
              <p className="reach-out__detail-val">
                All consultations and pastoral discussions are treated with the
                highest level of discretion, prayer, and care.
              </p>
            </div>

            <div className="reach-out__detail-item">
              <span className="reach-out__detail-label">Ministry Location</span>
              <p className="reach-out__detail-val">
                Serving churches and leadership teams across the United Kingdom.
              </p>
            </div>

            <div className="reach-out__detail-item">
              <span className="reach-out__detail-label">Direct Contact</span>
              <p className="reach-out__detail-val">
                <a href="mailto:contact@eagleswingsministries.org.uk" className="reach-out__email-link">
                  contact@eagleswingsministries.org.uk
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="reach-out__form-card">
          {submitted ? (
            <div className="reach-out__success" role="alert">
              <div className="reach-out__success-icon" aria-hidden="true">✓</div>
              <h3 className="reach-out__success-title">Thank you for reaching out</h3>
              <p className="reach-out__success-text">
                Your message has been received with prayerful care. A member of
                our team will connect with you shortly.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: "", email: "", church: "", interest: "Leadership Consultation", message: "" });
                }}
                className="reach-out__reset-btn"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="reach-out__form">
              <div className="reach-out__form-header">
                <h3 className="reach-out__form-title">Send a message</h3>
                <p className="reach-out__form-desc">
                  Fill out the details below and we will get back to you promptly.
                </p>
              </div>

              <div className="reach-out__field">
                <label htmlFor="reachout-name" className="reach-out__label">
                  Your Name <span className="reach-out__req">*</span>
                </label>
                <input
                  id="reachout-name"
                  type="text"
                  required
                  placeholder="e.g. Pastor David Smith"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="reach-out__input"
                />
              </div>

              <div className="reach-out__field">
                <div className="reach-out__field">
                  <label htmlFor="reachout-email" className="reach-out__label">
                    Email Address <span className="reach-out__req">*</span>
                  </label>
                  <input
                    id="reachout-email"
                    type="email"
                    required
                    placeholder="david@example.org"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="reach-out__input"
                  />
                </div>


              </div>


              <div className="reach-out__field">
                <label htmlFor="reachout-message" className="reach-out__label">
                  How can we support you? <span className="reach-out__req">*</span>
                </label>
                <textarea
                  id="reachout-message"
                  required
                  rows={4}
                  placeholder="Share a brief note about what you or your ministry are walking through..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="reach-out__textarea"
                />
              </div>

              <button type="submit" className="reach-out__submit-btn">
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>

      <style>{`
        .reach-out {
          background-color: #f7f1e6;
          color: #17120b;
          padding: 6.5rem 1.5rem;
          border-top: 1px solid rgba(200, 151, 58, 0.18);
        }

        .reach-out__container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 4rem;
          align-items: start;
        }

        /* ── Info Column ── */
        .reach-out__info {
          display: flex;
          flex-direction: column;
        }

        .reach-out__eyebrow {
          font-family: var(--font-manrope), sans-serif;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #b08a4a;
          margin-bottom: 0.75rem;
        }

        .reach-out__title {
          font-family: var(--font-primary), 'Georgia', serif;
          font-size: clamp(2rem, 3.2vw, 2.85rem);
          font-weight: 600;
          line-height: 1.18;
          color: #17120b;
          margin: 0 0 1.25rem;
          letter-spacing: -0.01em;
        }

        .reach-out__subtitle {
          font-family: var(--font-manrope), sans-serif;
          font-size: 1.02rem;
          line-height: 1.65;
          color: #6d5b47;
          margin: 0 0 2.5rem;
        }

        .reach-out__details {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(200, 151, 58, 0.2);
        }

        .reach-out__detail-label {
          font-family: var(--font-manrope), sans-serif;
          font-size: 0.82rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #17120b;
          display: block;
          margin-bottom: 0.35rem;
        }

        .reach-out__detail-val {
          font-family: var(--font-manrope), sans-serif;
          font-size: 0.92rem;
          line-height: 1.55;
          color: #6b5845;
          margin: 0;
        }

        .reach-out__email-link {
          color: #17120b;
          text-decoration: underline;
          text-underline-offset: 4px;
          text-decoration-color: #b08a4a;
          transition: color 0.2s;
        }
        .reach-out__email-link:hover {
          color: #b08a4a;
        }

        /* ── Form Card ── */
        .reach-out__form-card {
          background: #ffffff;
          border: 1px solid rgba(200, 151, 58, 0.35);
          border-radius: 2px;
          padding: 2.75rem 2.5rem;
          box-shadow: 0 12px 36px -10px rgba(60, 45, 20, 0.06);
        }

        .reach-out__form-header {
          margin-bottom: 2rem;
        }

        .reach-out__form-title {
          font-family: var(--font-manrope), sans-serif;
          font-size: 1.35rem;
          font-weight: 700;
          color: #17120b;
          margin: 0 0 0.4rem;
        }

        .reach-out__form-desc {
          font-family: var(--font-manrope), sans-serif;
          font-size: 0.9rem;
          color: #786550;
          margin: 0;
        }

        .reach-out__form {
          display: flex;
          flex-direction: column;
          gap: 1.35rem;
        }

        .reach-out__field-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }

        .reach-out__field {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .reach-out__label {
          font-family: var(--font-manrope), sans-serif;
          font-size: 0.82rem;
          font-weight: 600;
          color: #24190e;
        }

        .reach-out__req {
          color: #b08a4a;
        }
        .reach-out__opt {
          font-weight: 400;
          color: #9c8a77;
          font-size: 0.78rem;
        }

        .reach-out__input,
        .reach-out__select,
        .reach-out__textarea {
          font-family: var(--font-manrope), sans-serif;
          font-size: 0.92rem;
          color: #17120b;
          background: #ffffff;
          border: 1px solid rgba(200, 151, 58, 0.4);
          border-radius: 2px;
          padding: 0.75rem 0.95rem;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .reach-out__input:hover,
        .reach-out__select:hover,
        .reach-out__textarea:hover {
          border-color: rgba(200, 151, 58, 0.75);
        }

        .reach-out__input:focus,
        .reach-out__select:focus,
        .reach-out__textarea:focus {
          border-color: #c8973a;
          box-shadow: 0 0 0 2px rgba(200, 151, 58, 0.22);
        }

        .reach-out__textarea {
          resize: vertical;
          min-height: 105px;
        }

        .reach-out__submit-btn {
          margin-top: 0.5rem;
          font-family: var(--font-manrope), sans-serif;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          background-color: #17120b;
          color: #ffffff;
          border: 1px solid #17120b;
          border-radius: 2px;
          padding: 0.95rem 2rem;
          cursor: pointer;
          transition: background-color 0.25s, border-color 0.25s;
        }
        .reach-out__submit-btn:hover {
          background-color: #c8973a;
          border-color: #c8973a;
        }
        .reach-out__submit-btn:active {
          transform: scale(0.99);
        }

        /* ── Success State ── */
        .reach-out__success {
          text-align: center;
          padding: 2.5rem 1rem;
        }
        .reach-out__success-icon {
          width: 48px;
          height: 48px;
          border-radius: 2px;
          background: #17120b;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.35rem;
          margin: 0 auto 1.25rem;
          font-weight: bold;
        }
        .reach-out__success-title {
          font-family: var(--font-manrope), sans-serif;
          font-size: 1.4rem;
          font-weight: 700;
          color: #17120b;
          margin: 0 0 0.5rem;
        }
        .reach-out__success-text {
          font-family: var(--font-manrope), sans-serif;
          font-size: 0.95rem;
          color: #6b5845;
          max-width: 420px;
          margin: 0 auto 1.75rem;
          line-height: 1.6;
        }
        .reach-out__reset-btn {
          font-family: var(--font-manrope), sans-serif;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #17120b;
          background: transparent;
          border: 1px solid #17120b;
          border-radius: 2px;
          padding: 0.65rem 1.6rem;
          cursor: pointer;
          transition: all 0.2s;
        }
        .reach-out__reset-btn:hover {
          background: #17120b;
          color: #ffffff;
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .reach-out__container {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .reach-out__form-card {
            padding: 2rem 1.5rem;
            border-radius: 2px;
          }
          .reach-out__field-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
