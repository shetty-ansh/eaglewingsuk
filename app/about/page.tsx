import Link from "next/link";
import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us | Eagles Wings UK",
  description:
    "Learn about the heart, story, and mission of Eagle’s Wings Ministries UK — encouraging and equipping church leaders across the nation.",
};

export default function AboutPage() {
  return (
    <>
      <main className="min-h-screen bg-[#f7f1e6] text-[#24190e] pt-32 pb-24 px-6 sm:px-12">
      <div className="max-w-[1040px] mx-auto">
        {/* Eyebrow & Category */}
        <div className="mb-6">
          <Link
            href="/"
            className="text-[0.8rem] font-[family-name:var(--font-manrope)] uppercase tracking-[0.16em] text-[#8c6f45] hover:text-[#24190e] transition-colors"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Page Title */}
        <div className="max-w-[800px] mb-12 sm:mb-16">
          <span className="inline-block text-[0.85rem] font-semibold tracking-[0.18em] uppercase text-[#b08a4a] mb-4 font-[family-name:var(--font-manrope)]">
            Our Story & Mission
          </span>
          <h1 className="text-[2.2rem] sm:text-[3.2rem] lg:text-[3.75rem] font-semibold leading-[1.12] tracking-tight font-[family-name:var(--font-primary)] italic text-[#1c150c]">
            Encouraging and equipping church leaders for renewed vision.
          </h1>
        </div>

        {/* Hero Image Banner */}
        <div className="w-full aspect-[16/8] sm:aspect-[16/7] rounded-[24px] overflow-hidden mb-16 shadow-[0_20px_50px_-15px_rgba(60,45,20,0.12)] border border-[rgba(200,151,58,0.2)] bg-[#eadfc9]">
          <img
            src="/images/jesus-landscape.png"
            alt="Eagle's Wings Ministries UK"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 font-[family-name:var(--font-manrope)] mb-20">
          {/* Left Column: Core Purpose & Scripture */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-[24px] bg-[#fbf7ef] border border-[rgba(200,151,58,0.25)] shadow-[0_4px_24px_rgba(60,45,20,0.04)]">
              <span className="block text-[0.78rem] font-semibold tracking-[0.16em] uppercase text-[#b08a4a] mb-3">
                Our Foundation
              </span>
              <blockquote className="text-[1.2rem] italic font-[family-name:var(--font-primary)] text-[#1c150c] leading-relaxed mb-4">
                “Those who hope in the Lord will renew their strength. They will
                soar on wings like eagles; they will run and not grow weary, they
                will walk and not be faint.”
              </blockquote>
              <cite className="block text-[0.85rem] font-medium text-[#786550] not-italic">
                — Isaiah 40:31
              </cite>
            </div>

            <div className="p-8 rounded-[24px] bg-[#fbf7ef] border border-[rgba(200,151,58,0.25)] shadow-[0_4px_24px_rgba(60,45,20,0.04)]">
              <h3 className="text-[1.15rem] font-semibold text-[#1c150c] mb-3">
                Leadership Support
              </h3>
              <p className="text-[0.95rem] text-[#6d5b47] leading-relaxed mb-4">
                We believe resilient, healthy church leaders cultivate flourishing
                congregations. Through dedicated personal consultations, we walk
                alongside ministers and teams in every season.
              </p>
              <Link
                href="/what-we-do"
                className="text-[0.88rem] font-semibold text-[#1c150c] underline underline-offset-4 decoration-[#c8973a] hover:text-[#c8973a] transition-colors"
              >
                Explore what we do →
              </Link>
            </div>
          </div>

          {/* Right Column: Narrative Story */}
          <div className="lg:col-span-7 space-y-6 text-[#524130] text-[1.05rem] leading-[1.8]">
            <p className="font-medium text-[#1c150c] text-[1.2rem] leading-relaxed">
              Eagle’s Wings Ministries UK (EWM UK) exists to encourage and equip
              church leaders to become strong, effective, Christ-like servant
              leaders.
            </p>

            <p>
              Through personal consultations and leadership team support, EWM UK
              offers encouragement, guidance, and spiritual renewal, helping
              leaders rediscover God’s vision for their lives and churches, grow
              in their walk with the Lord, and lead with renewed confidence in the
              power of the Gospel and the Holy Spirit. Inspired by Isaiah 40:31,
              our heart is to see leaders refreshed in Christ and renewed in
              mission.
            </p>

            <p>
              Founded by Mike and Angie following Mike’s miraculous healing from
              chronic pain in 2003, Eagle’s Wings Ministries UK grew out of their
              personal experience of God’s restoring power and faithfulness.
            </p>

            <p>
              Their journey inspired a deep desire to support not only ordained
              ministers but all those serving in church leadership, helping them
              overcome challenges, find fresh strength in the Lord, and fulfil His
              calling with renewed purpose and confidence.
            </p>
          </div>
        </div>

        {/* CTA Footer Section */}
        <div className="p-10 sm:p-14 rounded-[28px] bg-[#fbf7ef] border border-[rgba(200,151,58,0.3)] shadow-[0_16px_40px_-15px_rgba(60,45,20,0.08)] text-center max-w-[820px] mx-auto">
          <h2 className="text-[1.8rem] sm:text-[2.2rem] font-semibold font-[family-name:var(--font-primary)] italic text-[#1c150c] mb-4">
            Connect with Eagle’s Wings Ministries
          </h2>
          <p className="text-[1rem] text-[#6e5c49] font-[family-name:var(--font-manrope)] max-w-[560px] mx-auto mb-8 leading-relaxed">
            Whether you are looking for leadership consultation, team
            encouragement, or fellowship, we would love to journey with you.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 font-[family-name:var(--font-manrope)]">
            <Link
              href="/what-we-do"
              className="px-6 py-3 rounded-full text-[0.82rem] font-semibold uppercase tracking-[0.14em] bg-[#1c150c] text-white hover:bg-[#c8973a] transition-colors"
            >
              What We Do
            </Link>
            <Link
              href="/donate"
              className="px-6 py-3 rounded-full text-[0.82rem] font-semibold uppercase tracking-[0.14em] border border-[#1c150c] text-[#1c150c] hover:bg-[#1c150c] hover:text-white transition-colors"
            >
              Support Our Ministry
            </Link>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </>
  );
}
