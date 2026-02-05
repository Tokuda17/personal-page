import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Michael Tokuda | Software Engineer",
  description: "Software Engineer with experience at Meta and Palantir. Georgia Tech Computer Science student specializing in AI, full-stack development, and quantitative finance.",
  keywords: ["Michael Tokuda", "Software Engineer", "Georgia Tech", "Meta", "Palantir", "Full Stack Developer", "AI", "DeFi"],
  authors: [{ name: "Michael Tokuda" }],
  openGraph: {
    title: "Michael Tokuda | Software Engineer",
    description: "Software Engineer with experience at Meta and Palantir.",
    url: "https://michaeltokuda.com",
    siteName: "Michael Tokuda",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0f] text-[#f8fafc]`}
      >
        {children}
      </body>
    </html>
  );
}
