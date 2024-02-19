import type { Metadata } from 'next';

import { PortfolioHero, PortfolioCases, Reviews, ContactUs } from '@/sections';

import data from '@/data/portfolio.json';

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;

  const { title, description } = data.meta;

  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}portfolio/`,
    },
  };
}

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHero />

      <PortfolioCases />

      <Reviews />

      <ContactUs />
    </>
  );
}
