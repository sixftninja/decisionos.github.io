import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "DecisionOS — The Last Enterprise Software You'll Need",
  description:
    "DecisionOS extracts your company's intelligence from fragmented systems, unifies it, and makes it actionable. Replace your analytics stack with a single platform that truly understands your business.",
  keywords: ["enterprise software", "business intelligence", "operational analytics", "decision support", "AI analytics"],
  openGraph: {
    title: "DecisionOS — The Last Enterprise Software You'll Need",
    description:
      "Extract, unify, and act on your company's intelligence. Then eliminate the systems you don't need.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
