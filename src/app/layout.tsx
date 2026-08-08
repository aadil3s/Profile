import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ThemeScript from "@/components/ThemeScript";
import { profile } from "@/data/portfolio";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = `${profile.name} - ${profile.role} ${profile.roleAccent}`;

export const metadata: Metadata = {
  title,
  description: profile.tagline,
  keywords: [
    "SOC analyst",
    "cybersecurity",
    "threat detection",
    "incident response",
    "SIEM",
    "Wazuh",
    "MITRE ATT&CK",
    "Sydney",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title,
    description: profile.tagline,
    type: "profile",
    locale: "en_AU",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
