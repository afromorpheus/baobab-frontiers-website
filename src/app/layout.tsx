import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Baobab Frontiers - Sourcing Yellow Maize You Can Rely On",
  description: "We connect trusted Ghanaian farmers and aggregators with feed producers, processors, and exporters who need consistent, high-quality yellow maize. Quality-tested grain delivered on time — every time.",
  keywords: "yellow maize, Ghana, agricultural commodities, feed manufacturers, grain exporters, quality maize, agricultural trading",
  authors: [{ name: "Baobab Frontiers" }],
  openGraph: {
    title: "Baobab Frontiers - Sourcing Yellow Maize You Can Rely On",
    description: "Connecting Ghana's agricultural excellence with global markets through quality yellow maize sourcing and delivery.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Baobab Frontiers - Sourcing Yellow Maize You Can Rely On",
    description: "Connecting Ghana's agricultural excellence with global markets through quality yellow maize sourcing and delivery.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-nunito-light">{children}</body>
    </html>
  );
}
