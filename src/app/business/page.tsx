import type { Metadata } from 'next';

import {
  Hero,
  Advantages,
  BusinessClients,
  Cases,
  Partners,
  FAQ,
  ContactUs,
} from '@/sections';

import data from '@/data/business.json';

export const metadata: Metadata = data.meta;

export default function BusinessPage() {
  const { hero, advantages } = data;

  return (
    <>
      <Hero {...hero} className="xl:w-[699px]" descClassName="xl:w-[493px]" />

      <Advantages {...advantages} />

      <BusinessClients />

      {/* Collaboration */}

      <Cases />

      <Partners />

      <FAQ tags={['business']} />

      <ContactUs />
    </>
  );
}
