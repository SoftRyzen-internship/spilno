import type { Metadata } from 'next';
import { Suspense } from 'react';

import { PortfolioHero, PortfolioCases, Reviews, ContactUs } from '@/sections';

import meta from '@/data/meta.json';

export const metadata: Metadata = meta.portfolio;

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHero />

      <PortfolioCases />

      <Reviews />

      <Suspense>
        <ContactUs />
      </Suspense>
    </>
  );
}
