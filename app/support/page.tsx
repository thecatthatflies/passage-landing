import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support — Passage",
  description: "Get help with Passage, the iOS reading companion.",
};

const CONTACT_EMAIL = "support@aiyan.tech";

const faqs = [
  {
    q: "How do I add a book to my library?",
    a: "Tap the Search tab, type any title or author, and tap the + button on any result. The book is added to your library instantly. You can also import your own PDFs or EPUBs using the Import button."
  },
  {
    q: "How do I update my reading progress?",
    a: "Open any book from your library, then use the page controls to set your current page. Your progress syncs locally and updates your streak automatically."
  },
  {
    q: "What AI features are available?",
    a: "Premium subscribers get unlimited AI chat (ask anything about a book, scoped to what you've read), character lookup (instant profiles without spoilers), and AI-powered book recommendations."
  },
  {
    q: "How do I subscribe to Premium?",
    a: "From any AI feature, tap the paywall and choose monthly ($0.99) or annual ($9.99). Subscriptions are managed through your Apple ID and can be cancelled anytime in Settings → Apple ID → Subscriptions."
  },
  {
    q: "How do I cancel my subscription?",
    a: "Open the Settings app on your iPhone → tap your name → Subscriptions → Passage → Cancel Subscription. Your Premium access continues until the end of the current billing period."
  },
  {
    q: "How do I restore my purchase after reinstalling?",
    a: "Open Passage and tap any Premium feature. On the paywall, tap Restore Purchases. Your subscription will be restored if it is still active."
  },
  {
    q: "Are my books stored in the cloud?",
    a: "No. Passage is local-first: your library, progress, and reading history are stored on your device. Your data is not uploaded to our servers. Books you import stay on your device only."
  },
  {
    q: "Why does the AI not know about events later in the book?",
    a: "This is intentional. Passage scopes every AI response to your current page number to prevent spoilers. If you want answers about later events, update your page number first."
  },
  {
    q: "Why did my reading streak reset?",
    a: "Streaks count consecutive days where you advanced your page number in at least one book. If you did not read on a given day, the streak resets to 1 on your next reading session."
  },
  {
    q: "What file formats can I import?",
    a: "Passage supports PDF and EPUB files. Tap the Import button in Search or Library to pick a file from the Files app."
  },
  {
    q: "The app is not connecting to AI features. What do I do?",
    a: "AI features require an internet connection. Check that you are online and try again. If the problem persists, force-quit the app and reopen it. Contact support if the issue continues."
  },
  {
    q: "How do I delete a book from my library?",
    a: "In your Library, swipe left on any book and tap Delete. This removes the book and all associated progress from your device permanently."
  },
];

export default function SupportPage() {
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
        <div style={{ marginBottom: "64px" }}>
          <div style={{ fontFamily: "system-ui, -apple-system, sans-serif", fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--brass)", fontWeight: 600, marginBottom: "16px" }}>
            Help
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(40px, 6vw, 58px)", fontWeight: 600, color: "var(--ink)", lineHeight: 1.0, marginBottom: "20px", letterSpacing: "-0.03em" }}>
            Support
          </h1>
          <p style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: "17px", color: "var(--stone)", lineHeight: 1.75 }}>
            Quick answers below. If you need anything else, email us — we read every message.
          </p>
        </div>

        {/* Contact card */}
        <div style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)", borderRadius: "20px", padding: "28px 32px", marginBottom: "72px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px", flexWrap: "wrap" }}>
          <div>
            <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "20px", fontWeight: 600, color: "var(--ink)", marginBottom: "6px" }}>
              Email support
            </div>
            <p style={{ fontFamily: "system-ui, -apple-system, sans-serif", fontSize: "14px", color: "var(--stone)", margin: 0, lineHeight: 1.6 }}>
              We respond to every support request, usually within 48 hours.
            </p>
          </div>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "var(--ink)", color: "var(--paper)", padding: "12px 22px", borderRadius: "12px", fontFamily: "system-ui, -apple-system, sans-serif", fontSize: "14px", fontWeight: 600, textDecoration: "none", whiteSpace: "nowrap" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            Send email
          </a>
        </div>

        {/* FAQ */}
        <div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "34px", fontWeight: 600, color: "var(--ink)", marginBottom: "40px", letterSpacing: "-0.02em" }}>
            Frequently asked questions
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
            {faqs.map((item, i) => (
              <div
                key={i}
                style={{ borderTop: "1px solid var(--border)", paddingTop: "28px", paddingBottom: "28px" }}
              >
                <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "20px", fontWeight: 600, color: "var(--ink)", marginBottom: "12px", lineHeight: 1.3, letterSpacing: "-0.01em" }}>
                  {item.q}
                </h3>
                <p style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: "15px", color: "var(--stone)", lineHeight: 1.8, margin: 0 }}>
                  {item.a}
                </p>
              </div>
            ))}
            <div style={{ borderTop: "1px solid var(--border)" }} />
          </div>
        </div>

        {/* Policies */}
        <div style={{ marginTop: "72px", paddingTop: "48px", borderTop: "1px solid var(--border)" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "28px", fontWeight: 600, color: "var(--ink)", marginBottom: "24px", letterSpacing: "-0.02em" }}>
            Legal
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              { href: "/privacy", label: "Privacy Policy", desc: "How we handle your data" },
              { href: "/terms", label: "Terms of Service", desc: "Usage rules and subscription terms" },
              { href: "/eula", label: "End User License Agreement", desc: "App license terms for Apple App Store" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", backgroundColor: "var(--card)", borderRadius: "12px", border: "1px solid var(--border)", textDecoration: "none", transition: "background-color 0.15s" }}
              >
                <div>
                  <div style={{ fontFamily: "system-ui, -apple-system, sans-serif", fontSize: "15px", fontWeight: 600, color: "var(--ink)", marginBottom: "2px" }}>{link.label}</div>
                  <div style={{ fontFamily: "system-ui, -apple-system, sans-serif", fontSize: "13px", color: "var(--stone)" }}>{link.desc}</div>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--stone)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <footer style={{ borderTop: "1px solid var(--border)", padding: "36px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
        <Link href="/" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "18px", fontWeight: 600, color: "var(--ink)", letterSpacing: "-0.02em", textDecoration: "none" }}>Passage</Link>
        <span style={{ fontFamily: "system-ui", fontSize: "13px", color: "var(--stone)" }}>© {new Date().getFullYear()} Passage</span>
      </footer>
    </>
  );
}
