import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://danryuzaki.is-a.dev"),
  title: "DANRYUZAKI",
  description:
    "DanRyuzaki. Freelance Software Developer. Soli Deo Code. Building soon.",
  openGraph: {
    title: "DANRYUZAKI",
    description:
      "DanRyuzaki. Freelance Software Developer. Soli Deo Code. Building soon.",
    url: "https://danryuzaki.is-a.dev",
    siteName: "danryuzaki.is-a.dev",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "DANRYUZAKI",
    description: "Freelance Software Developer. Soli Deo Code.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jetbrainsMono.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0b] text-[#ededec]">
        {children}
      </body>
    </html>
  );
}
