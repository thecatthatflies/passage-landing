import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Passage — Read with intention",
  description: "The AI-powered reading companion for iOS. Track your library, chat about books, and build a daily reading habit.",
  openGraph: {
    title: "Passage — Read with intention",
    description: "The AI-powered reading companion for iOS. Track your library, chat about books, and build a daily reading habit.",
    type: "website",
    url: "https://passage.aiyan.tech",
  },
  twitter: {
    card: "summary_large_image",
    title: "Passage — Read with intention",
    description: "The AI-powered reading companion for iOS.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
