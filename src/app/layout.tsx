import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Acme Corp - AI Voice Solutions for Restaurants | Never Miss a Call",
  description:
    "Transform your restaurant's phone experience with AI voice agents. Handle unlimited calls, take orders, manage reservations 24/7. Get started in 30 minutes.",
  keywords:
    "AI voice agent, restaurant phone system, automated reservations, restaurant AI, voice automation, phone ordering system",
  openGraph: {
    title: "Acme Corp - AI Voice Solutions for Restaurants",
    description:
      "Never miss another reservation. Automate phone orders and customer inquiries with intelligent AI.",
    type: "website",
    url: "https://acmecorp.ai",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Acme Corp AI Voice Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Acme Corp - AI Voice Solutions for Restaurants",
    description:
      "Never miss another reservation. Automate phone orders and customer inquiries with intelligent AI.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
