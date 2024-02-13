import type { Metadata } from 'next';

import { ContactUs } from '@/sections/ContactUs';
import { PortfolioCases } from '@/sections/PortfolioCases';
import { PortfolioHero } from '@/sections/PortfolioHero';
import { Reviews } from '@/sections/Reviews';

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
