import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Passage",
  description: "Passage privacy policy. We believe your reading life is private.",
};

const EFFECTIVE_DATE = "July 11, 2026";
const CONTACT_EMAIL = "support@aiyan.tech";

export default function PrivacyPage() {
  return (
    <>
      {/* Nav */}
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
            Privacy Policy
          </h1>
          <p style={{ fontFamily: "system-ui, -apple-system, sans-serif", fontSize: "14px", color: "var(--stone)" }}>
            Effective date: {EFFECTIVE_DATE}
          </p>
        </div>

        <div style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: "16px", lineHeight: 1.9, color: "var(--ink)" }}>

          <p style={{ color: "var(--stone)", marginBottom: "48px" }}>
            Passage is built on the belief that your reading life is private. This policy explains exactly what data we collect, what we do with it, and what we don&apos;t do. Plain language, no legalese.
          </p>

          <Section title="1. What we collect">
            <p><strong>On your device (local-first):</strong> Your library, book metadata, reading progress, page numbers, notes, reading streaks, and all app state are stored exclusively on your device using SwiftData. We have no access to this data.</p>
            <p>
              <strong>Account data (if you sign in):</strong> If you create an account with email and password or sign in with Apple or Google, we store your email address and a hashed identifier in our authentication provider (Supabase). We do not store your password in plaintext.
            </p>
            <p>
              <strong>AI feature usage:</strong> When you use AI features (book chat, character lookup, recommendations), your question and limited book context are sent to our backend and forwarded to OpenAI to generate a response. We do not persistently store your questions or OpenAI&apos;s responses on our servers — they are processed in transit and discarded.
            </p>
            <p>
              <strong>Crash and error data:</strong> We may collect anonymized crash reports to improve stability. These contain no personally identifiable information and no book content.
            </p>
          </Section>

          <Section title="2. What we don't collect">
            <ul>
              <li>We do not collect your reading history or reading behavior for advertising</li>
              <li>We do not sell your data to any third party, ever</li>
              <li>We do not read the contents of books you import</li>
              <li>We do not track your location</li>
              <li>We do not use behavioral analytics or cross-app tracking</li>
            </ul>
          </Section>

          <Section title="3. How we use your data">
            <p>Data we collect is used exclusively to:</p>
            <ul>
              <li>Authenticate your account and maintain your session</li>
              <li>Process AI requests and return responses to your device</li>
              <li>Verify Premium subscription status via Apple&apos;s StoreKit</li>
              <li>Investigate and fix crashes when reported</li>
            </ul>
          </Section>

          <Section title="4. Third-party services">
            <p><strong>Supabase:</strong> Authentication provider. Stores your email and user ID. Privacy policy: supabase.com/privacy</p>
            <p><strong>OpenAI:</strong> Used to generate AI responses. Your questions and book context are sent to OpenAI per their API terms. OpenAI&apos;s privacy policy: openai.com/policies/privacy-policy. We do not use OpenAI&apos;s API in training mode.</p>
            <p><strong>Apple StoreKit:</strong> In-app purchases and subscription management. Apple handles all payment processing — we never receive your payment information.</p>
            <p><strong>Open Library (Internet Archive):</strong> Book search and catalog data. Queries include only book titles and authors. No personal information is sent.</p>
          </Section>

          <Section title="5. Data retention">
            <p>Account data (email and user ID) is retained for as long as your account exists. You may delete your account at any time by contacting us at the email below, and we will remove all associated data within 30 days.</p>
            <p>AI query data is not retained — it is processed in transit and not stored on our servers.</p>
          </Section>

          <Section title="6. Children">
            <p>Passage is not directed at children under 13 and we do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal information, please contact us and we will delete it promptly.</p>
          </Section>

          <Section title="7. Security">
            <p>We use industry-standard measures to protect your data in transit (TLS) and at rest. Account credentials are managed by Supabase, which maintains its own security certifications. Your on-device data is protected by iOS device encryption.</p>
          </Section>

          <Section title="8. Your rights">
            <p>You have the right to access, correct, or delete your personal data at any time. To exercise any of these rights, email us at the address below. We will respond within 30 days.</p>
            <p>If you are in the European Economic Area, you have additional rights under GDPR including the right to data portability and the right to lodge a complaint with your local supervisory authority.</p>
          </Section>

          <Section title="9. Changes to this policy">
            <p>If we make material changes to this policy, we will update the effective date above and notify you through the app. Continued use of Passage after changes constitutes acceptance of the updated policy.</p>
          </Section>

          <Section title="10. Contact">
            <p>Questions about this policy? We&apos;re a small team and we actually read our email.</p>
            <p>
              <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: "var(--brass)", textDecoration: "none" }}>
                {CONTACT_EMAIL}
              </a>
            </p>
          </Section>
        </div>
      </main>

      <footer style={{ borderTop: "1px solid var(--border)", padding: "36px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
        <Link href="/" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "18px", fontWeight: 600, color: "var(--ink)", letterSpacing: "-0.02em", textDecoration: "none" }}>
          Passage
        </Link>
        <span style={{ fontFamily: "system-ui", fontSize: "13px", color: "var(--stone)" }}>© {new Date().getFullYear()} Passage</span>
      </footer>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "44px" }}>
      <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "26px", fontWeight: 600, color: "var(--ink)", marginBottom: "20px", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
        {title}
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {children}
      </div>
    </div>
  );
}
