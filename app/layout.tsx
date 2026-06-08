import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.slogan}`,
    template: `%s | ${site.name}`
  },
  description:
    "Kingdom Path Society is a Christian humanitarian organization serving refugees, newcomers, displaced families, and vulnerable communities with compassion and practical support.",
  keywords: [
    "Kingdom Path Society",
    "refugee sponsorship",
    "newcomer support",
    "humanitarian services",
    "Christian humanitarian organization",
    "volunteer",
    "donate"
  ],
  openGraph: {
    title: `${site.name} | ${site.slogan}`,
    description: site.faithLine,
    url: site.url,
    siteName: site.name,
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-white text-slate-900">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
