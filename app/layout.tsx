import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/lib/utils/providers";
import Navbar from "@/components/layout/navbar";
import { montserrat } from "@/lib/utils/fonts";
import Footer from "@/components/layout/footer";
import { energyKeywords } from "@/lib/store/lists";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL || "https://getenergy.ng"),
  title: {
    default: "GetEnergy - Energy Products & Services",
    template: `%s | GetEnergy`,
  },
  description:
    "Discover sustainable energy solutions and products at your convenience which includes energy equipments, commodities and services",
  keywords: energyKeywords,
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
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
