import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BakoX Exchange | Crypto OTC Service Worldwide",
  description:
    "Buy and sell cryptocurrency instantly with a transparent 2% fixed fee. Instant Naira transfer. Trusted crypto OTC service serving clients worldwide.",
  keywords: "crypto OTC Nigeria, buy USDT Nigeria, sell crypto Naira, BakoX Exchange, crypto worldwide",
  openGraph: {
    title: "BakoX Exchange | Only 2% Fee",
    description: "Trusted crypto OTC service serving clients worldwide. Flat 2% fee. Instant Naira transfer.",
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
