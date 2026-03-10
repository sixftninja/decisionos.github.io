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
  title: "Decision OS — The Last Enterprise Software You'll Need",
  description:
    "Decision OS extracts the intelligence trapped in your systems, unifies it, and makes it actionable. Then helps you eliminate the SaaS tools you no longer need.",
  keywords: ["enterprise software", "business intelligence", "operational analytics", "decision support", "AI analytics"],
  openGraph: {
    title: "Decision OS — The Last Enterprise Software You'll Need",
    description:
      "Decision OS extracts the intelligence trapped in your systems, unifies it, and makes it actionable.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth md:snap-y md:snap-mandatory">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
