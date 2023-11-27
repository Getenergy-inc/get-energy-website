import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/lib/utils/providers";
import Header from "@/components/layout/header";
import { montserrat, satoshi } from "@/lib/utils/fonts";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "GetEnergy - Energy Products & Services",
  description:
    "Discover sustainable energy solutions and products at your convenience which includes energy equipments, commodities and services",
  keywords: [
    "get energy",
    "getEnergy",
    "energy products",
    "renewable energy",
    "solar power",
    "wind power",
    "energy efficiency",
    "sustainability",
    "energy consulting",
    "clean energy",
    "Energy Management",
  ],
  openGraph: {
    title: "GetEnergy - Energy Products & Services",
    description:
      "Discover sustainable energy solutions and products at your convenience which includes energy equipments, commodities and services",
    url: "https://getenergy.ng",
    type: "website",
    images: ["https://res.cloudinary.com/dhol1zstd/image/upload/v1700052287/opengraph-image_qrkp80.jpg "],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
