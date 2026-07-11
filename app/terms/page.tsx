import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Passage",
  description: "Terms of Service for Passage, the iOS reading companion.",
};

const EFFECTIVE_DATE = "July 11, 2026";
const CONTACT_EMAIL = "support@aiyan.tech";
const APP_NAME = "Passage";

export default function TermsPage() {
  return (
    <>
      <nav style={{ padding: "20px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid var(--border)" }}>
        <Link href="/" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "22px", fontWeight: 600, letterSpacing: "-0.02em", color: "var(--ink)", textDecoration: "none" }}>
          Passage
        </Link>
        <Link href="/" style={{ fontFamily: "system-ui, -apple-system, sans-serif", fontSize: "14px", color: "var(--stone)", textDecoration: "none" }}>
          ← Back
        </Link>
      </nav>

      <main style={{ maxWidth: "720px", margin: "0 auto", padding: "72px 40px 120px" }}>
        <div style={{ marginBottom: "56px" }}>
          <div style={{ fontFamily: "system-ui, -apple-system, sans-serif", fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--brass)", fontWeight: 600, marginBottom: "16px" }}>
            Legal
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(40px, 6vw, 58px)", fontWeight: 600, color: "var(--ink)", lineHeight: 1.0, marginBottom: "16px", letterSpacing: "-0.03em" }}>
            Terms of Service
          </h1>
          <p style={{ fontFamily: "system-ui, -apple-system, sans-serif", fontSize: "14px", color: "var(--stone)" }}>
            Effective date: {EFFECTIVE_DATE}
          </p>
        </div>

        <div style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: "16px", lineHeight: 1.9, color: "var(--ink)" }}>
          <p style={{ color: "var(--stone)", marginBottom: "48px" }}>
            These Terms of Service govern your use of {APP_NAME} and its associated services. By downloading or using the app, you agree to these terms. If you do not agree, do not use {APP_NAME}.
          </p>

          <S title="1. Acceptance of terms">
            <p>By accessing or using {APP_NAME} (&ldquo;the App&rdquo;, &ldquo;the Service&rdquo;), you agree to be bound by these Terms of Service and our <Link href="/privacy" style={{ color: "var(--brass)", textDecoration: "none" }}>Privacy Policy</Link>. These terms apply to all users of the App, including free and premium subscribers.</p>
            <p>We reserve the right to modify these terms at any time. We will notify you of material changes through the App. Continued use after changes constitutes acceptance.</p>
          </S>

          <S title="2. Use of the app">
            <p>Subject to these terms, we grant you a limited, non-exclusive, non-transferable, revocable license to download and use {APP_NAME} on devices you own or control, solely for personal, non-commercial reading purposes.</p>
            <p>You agree not to:</p>
            <ul style={{ paddingLeft: "24px", marginTop: "8px" }}>
              <li style={{ marginBottom: "8px" }}>Reverse engineer, decompile, or disassemble any part of the App</li>
              <li style={{ marginBottom: "8px" }}>Use the App to upload, transmit, or distribute illegal, harmful, or infringing content</li>
              <li style={{ marginBottom: "8px" }}>Attempt to gain unauthorized access to any part of the App or its backend systems</li>
              <li style={{ marginBottom: "8px" }}>Use automated tools to scrape, crawl, or abuse the App&rsquo;s API</li>
              <li style={{ marginBottom: "8px" }}>Resell, sublicense, or exploit the App commercially without our written consent</li>
            </ul>
          </S>

          <S title="3. Premium subscriptions and billing">
            <p><strong>Subscription plans.</strong> {APP_NAME} offers optional Premium subscriptions that unlock AI-powered features. Subscriptions are available on a monthly ($0.99/month) or annual ($9.99/year) basis.</p>
            <p><strong>Billing.</strong> Subscriptions are processed through Apple&rsquo;s In-App Purchase system. Your Apple ID account will be charged upon confirmation of purchase. All billing, refunds, and payment disputes are governed by Apple&rsquo;s terms — we do not have access to your payment information.</p>
            <p><strong>Auto-renewal.</strong> Subscriptions automatically renew unless cancelled at least 24 hours before the end of the current period. Your account will be charged for renewal within 24 hours prior to the end of the current period. You can manage and cancel subscriptions in your Apple ID Account Settings at any time.</p>
            <p><strong>Free trial.</strong> If a free trial is offered, unused portions of any free trial will be forfeited upon purchasing a subscription.</p>
            <p><strong>Price changes.</strong> We may change subscription pricing at any time. Price changes will take effect at the start of the next renewal period. We will give you reasonable notice of any price changes through the App or by email.</p>
            <p><strong>Refunds.</strong> All purchases are final and non-refundable except as required by applicable law or at Apple&rsquo;s discretion through their standard refund process.</p>
          </S>

          <S title="4. Content and intellectual property">
            <p><strong>Your content.</strong> Books you import into {APP_NAME} remain your property. We claim no rights to documents you upload. By using AI features on your imported books, you grant us a temporary, limited license to process that content solely to generate your requested AI response.</p>
            <p><strong>Our content.</strong> The {APP_NAME} name, logo, interface design, and all original content created by us are protected by copyright and trademark law. You may not use our brand assets without prior written permission.</p>
            <p><strong>Third-party content.</strong> Book metadata and catalog data is sourced from Open Library (Internet Archive) under open licenses. AI responses are generated by OpenAI and are provided &ldquo;as is.&rdquo; We do not claim ownership of AI-generated text.</p>
          </S>

          <S title="5. AI features and limitations">
            <p>{APP_NAME}&rsquo;s AI features (book chat, character lookup, recommendations) are powered by large language models and are provided for informational and entertainment purposes only. AI responses:</p>
            <ul style={{ paddingLeft: "24px", marginTop: "8px" }}>
              <li style={{ marginBottom: "8px" }}>May be inaccurate, incomplete, or outdated</li>
              <li style={{ marginBottom: "8px" }}>Should not be relied upon as a substitute for reading the actual text</li>
              <li style={{ marginBottom: "8px" }}>Are scoped to the page you have read, but may occasionally reference content beyond your current page</li>
              <li style={{ marginBottom: "8px" }}>Do not constitute professional literary analysis or criticism</li>
            </ul>
            <p>We are not responsible for decisions made based on AI-generated content.</p>
          </S>

          <S title="6. Third-party services">
            <p>{APP_NAME} integrates with third-party services including Supabase (authentication), OpenAI (AI responses), and Open Library (book catalog). Your use of these services through {APP_NAME} is also subject to their respective terms of service. We are not responsible for the availability, accuracy, or conduct of third-party services.</p>
          </S>

          <S title="7. Availability and changes">
            <p>We reserve the right to modify, suspend, or discontinue the App or any feature at any time, with or without notice. We will make reasonable efforts to provide advance notice of significant changes. We are not liable for any modification, suspension, or discontinuation of the Service.</p>
            <p>The App requires an internet connection for AI features, catalog search, and account sync. We are not responsible for any limitation of features due to lack of internet access.</p>
          </S>

          <S title="8. Disclaimers">
            <p>THE APP IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</p>
            <p>We do not warrant that the App will be uninterrupted, error-free, or free of viruses or other harmful components. We do not warrant the accuracy or completeness of any information provided through the App, including AI-generated content.</p>
          </S>

          <S title="9. Limitation of liability">
            <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL {APP_NAME.toUpperCase()} OR ITS OPERATORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION LOSS OF PROFITS, DATA, OR GOODWILL, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF OR INABILITY TO USE THE APP.</p>
            <p>Our total liability to you for all claims arising from your use of the App shall not exceed the amount you paid for the App in the 12 months preceding the claim, or $10, whichever is greater.</p>
          </S>

          <S title="10. Governing law">
            <p>These terms are governed by the laws of the United States, without regard to conflict of law principles. Any disputes shall be resolved in the courts located in the United States. If any provision of these terms is found unenforceable, the remaining provisions will remain in full force.</p>
          </S>

          <S title="11. Termination">
            <p>We may terminate or suspend your access to the App immediately, without prior notice or liability, if you breach these terms. Upon termination, your right to use the App ceases immediately. Sections on intellectual property, disclaimers, limitations of liability, and governing law survive termination.</p>
          </S>

          <S title="12. Contact">
            <p>Questions about these terms:</p>
            <p>
              <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: "var(--brass)", textDecoration: "none" }}>
                {CONTACT_EMAIL}
              </a>
            </p>
          </S>
        </div>
      </main>

      <footer style={{ borderTop: "1px solid var(--border)", padding: "36px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
        <Link href="/" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "18px", fontWeight: 600, color: "var(--ink)", letterSpacing: "-0.02em", textDecoration: "none" }}>Passage</Link>
        <span style={{ fontFamily: "system-ui", fontSize: "13px", color: "var(--stone)" }}>© {new Date().getFullYear()} Passage</span>
      </footer>
    </>
  );
}

function S({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "44px" }}>
      <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "26px", fontWeight: 600, color: "var(--ink)", marginBottom: "20px", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
        {title}
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>{children}</div>
    </div>
  );
}
