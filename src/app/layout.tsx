import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RunAm4me Exchange | Crypto OTC Service Nigeria",
  description:
    "Buy and sell cryptocurrency instantly with a transparent 2% fixed fee. Instant Naira transfer. Trusted crypto OTC service in Abuja & Kaduna.",
  keywords: "crypto OTC Nigeria, buy USDT Nigeria, sell crypto Naira, RunAm4me Exchange",
  openGraph: {
    title: "RunAm4me Exchange | Only 2% Fee",
    description: "Nigeria's most transparent crypto OTC service. Flat 2% fee. Instant Naira transfer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
