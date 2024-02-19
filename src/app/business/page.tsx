import type { Metadata } from 'next';

import {
  Hero,
  Advantages,
  BusinessClients,
  Cases,
  Partners,
  FAQ,
  ContactUs,
  Cooperation,
} from '@/sections';

import data from '@/data/business.json';

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;

  const { title, description } = data.meta;

  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}business/`,
    },
  };
}

export default function BusinessPage() {
  const { hero, advantages } = data;

  return (
    <>
      <Hero {...hero} className="xl:w-[699px]" descClassName="xl:w-[493px]" />

      <Advantages {...advantages} />

      <BusinessClients />

      <Cooperation />

      <Cases />

      <Partners />

      <FAQ tags={['business']} />

      <ContactUs />
    </>
  );
}
