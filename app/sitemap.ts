import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const BASE_URL = process.env.BASE_URL || "http://localhost:3000";

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${BASE_URL}/about-us`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact-us`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/get-electricity`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/careers`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/faq`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/our-team`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/pay-bills`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/quick-buy`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/our-services`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/energy-ecommerce`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/invest`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/get-fuel`,
      lastModified: new Date(),
      priority: 0.8,
    },
  ];
}
