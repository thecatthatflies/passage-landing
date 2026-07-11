import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "End User License Agreement — Passage",
  description: "EULA for Passage iOS app. Apple App Store license terms.",
};

const EFFECTIVE_DATE = "July 11, 2026";
const CONTACT_EMAIL = "harunur.chowdhury@gmail.com";

export default function EulaPage() {
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
          <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(38px, 6vw, 56px)", fontWeight: 600, color: "var(--ink)", lineHeight: 1.0, marginBottom: "16px", letterSpacing: "-0.03em" }}>
            End User License Agreement
          </h1>
          <p style={{ fontFamily: "system-ui, -apple-system, sans-serif", fontSize: "14px", color: "var(--stone)" }}>
            Effective date: {EFFECTIVE_DATE}
          </p>
        </div>

        <div style={{ backgroundColor: "rgba(184,150,62,0.07)", border: "1px solid rgba(184,150,62,0.2)", borderRadius: "12px", padding: "20px 24px", marginBottom: "48px" }}>
          <p style={{ fontFamily: "system-ui, -apple-system, sans-serif", fontSize: "14px", color: "var(--stone)", margin: 0, lineHeight: 1.7 }}>
            This End User License Agreement (&ldquo;EULA&rdquo;) is between you and Passage (&ldquo;Licensor&rdquo;) for the Passage iOS application (&ldquo;App&rdquo;), distributed through Apple&rsquo;s App Store. Apple is not a party to this EULA and bears no responsibility for the App or its content.
          </p>
        </div>

        <div style={{ fontFamily: "'Libre Baskerville', Georgia, serif", fontSize: "16px", lineHeight: 1.9, color: "var(--ink)" }}>

          <S title="1. Scope of license">
            <p>Licensor grants you a non-transferable, non-exclusive license to use the App on any Apple-branded product that you own or control, subject to the Usage Rules set forth in Apple&rsquo;s App Store Terms of Service. This license does not allow you to use the App on any device you do not own or control, and you may not distribute or make the App available over a network where it could be used by multiple devices at the same time.</p>
            <p>You may not rent, lease, lend, sell, redistribute, or sublicense the App. You may not copy (except as expressly permitted by this license), decompile, reverse-engineer, disassemble, attempt to derive the source code of, modify, or create derivative works of the App or any services provided by the App.</p>
          </S>

          <S title="2. Consent to use of data">
            <p>You agree that Licensor may collect and use technical data and related information — including but not limited to technical information about your device, system and application software, and peripherals — that is gathered periodically to facilitate software updates, product support, and other services to you (if any) related to the App.</p>
            <p>Licensor may use this information, as long as it is in a form that does not personally identify you, to improve its products or to provide services or technologies to you. Refer to our <Link href="/privacy" style={{ color: "var(--brass)", textDecoration: "none" }}>Privacy Policy</Link> for full details on data collection and use.</p>
          </S>

          <S title="3. Termination">
            <p>This license is effective until terminated by you or Licensor. Your rights under this license will terminate automatically without notice from Licensor if you fail to comply with any term(s) of this license. Upon termination of the license, you shall cease all use of the App and destroy all copies, full or partial, of the App.</p>
          </S>

          <S title="4. External services">
            <p>The App may enable access to Licensor&rsquo;s and/or third-party services and websites (collectively and individually, &ldquo;External Services&rdquo;). You agree to use the External Services at your sole risk. Licensor is not responsible for examining or evaluating the content or accuracy of any third-party External Services, and shall not be liable for any third-party External Services.</p>
            <p>You understand that by using any of the External Services, you may encounter content that may be deemed offensive, indecent, or objectionable, which content may or may not be identified as having explicit language. Nevertheless, you agree to use the External Services at your sole risk.</p>
          </S>

          <S title="5. No warranty">
            <p>YOU EXPRESSLY ACKNOWLEDGE AND AGREE THAT USE OF THE APP IS AT YOUR SOLE RISK AND THAT THE ENTIRE RISK AS TO SATISFACTORY QUALITY, PERFORMANCE, ACCURACY, AND EFFORT IS WITH YOU.</p>
            <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE APP AND ANY SERVICES PERFORMED OR PROVIDED BY THE APP ARE PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE,&rdquo; WITH ALL FAULTS AND WITHOUT WARRANTY OF ANY KIND, AND LICENSOR HEREBY DISCLAIMS ALL WARRANTIES AND CONDITIONS WITH RESPECT TO THE APP AND ANY SERVICES, EITHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES AND/OR CONDITIONS OF MERCHANTABILITY, OF SATISFACTORY QUALITY, OF FITNESS FOR A PARTICULAR PURPOSE, OF ACCURACY, OF QUIET ENJOYMENT, AND OF NONINFRINGEMENT OF THIRD PARTY RIGHTS.</p>
          </S>

          <S title="6. Limitation of liability">
            <p>TO THE EXTENT NOT PROHIBITED BY LAW, IN NO EVENT SHALL LICENSOR BE LIABLE FOR PERSONAL INJURY OR ANY INCIDENTAL, SPECIAL, INDIRECT, OR CONSEQUENTIAL DAMAGES WHATSOEVER, INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF PROFITS, LOSS OF DATA, BUSINESS INTERRUPTION, OR ANY OTHER COMMERCIAL DAMAGES OR LOSSES, ARISING OUT OF OR RELATED TO YOUR USE OF OR INABILITY TO USE THE APP, HOWEVER CAUSED, REGARDLESS OF THE THEORY OF LIABILITY (CONTRACT, TORT, OR OTHERWISE) AND EVEN IF LICENSOR HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>
            <p>SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR PERSONAL INJURY, OR OF INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THIS LIMITATION MAY NOT APPLY TO YOU.</p>
          </S>

          <S title="7. Apple-specific terms">
            <p>You and Licensor acknowledge that this EULA is concluded between you and Licensor only, and not with Apple. Licensor, not Apple, is solely responsible for the App and its content.</p>
            <p><strong>Maintenance and support.</strong> Licensor is solely responsible for providing maintenance and support services with respect to the App, as specified in this EULA. Apple has no obligation to furnish any maintenance and support services with respect to the App.</p>
            <p><strong>Warranty.</strong> In the event of any failure of the App to conform to any applicable warranty, you may notify Apple, and Apple may refund the purchase price for the App to you (if any). To the maximum extent permitted by applicable law, Apple will have no other warranty obligation with respect to the App.</p>
            <p><strong>Product claims.</strong> Licensor, not Apple, is responsible for addressing any claims by you or any third party relating to the App or your possession and/or use of the App, including: (i) product liability claims; (ii) any claim that the App fails to conform to any applicable legal or regulatory requirement; and (iii) claims arising under consumer protection, privacy, or similar legislation.</p>
            <p><strong>Intellectual property.</strong> In the event of any third-party claim that the App or your possession and use of the App infringes that third party&rsquo;s intellectual property rights, Licensor, not Apple, will be solely responsible for the investigation, defense, settlement, and discharge of any such intellectual property infringement claim.</p>
            <p><strong>Third-party beneficiary.</strong> You and Licensor acknowledge and agree that Apple, and Apple&rsquo;s subsidiaries, are third-party beneficiaries of this EULA, and that, upon your acceptance of the terms of this EULA, Apple will have the right (and will be deemed to have accepted the right) to enforce this EULA against you as a third-party beneficiary thereof.</p>
          </S>

          <S title="8. Governing law">
            <p>This EULA will be governed by the laws of the United States, excluding its conflicts of law rules. Your use of the App may also be subject to other local, state, national, or international laws.</p>
          </S>

          <S title="9. Contact">
            <p>Questions about this EULA:</p>
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
