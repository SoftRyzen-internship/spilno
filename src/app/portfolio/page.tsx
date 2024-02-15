import type { Metadata } from 'next';

import { PortfolioHero, PortfolioCases, Reviews, ContactUs } from '@/sections';

import data from '@/data/portfolio.json';

export const metadata: Metadata = data.meta;

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
