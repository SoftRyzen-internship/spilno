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

import businessPageData from '@/data/business-page.json';
import meta from '@/data/meta.json';
import commonData from '@/data/common.json';

export const metadata: Metadata = meta.business;

export default function BusinessPage() {
  const { hero, advantages } = businessPageData;
  const { cases } = commonData;

  return (
    <>
      <Hero {...hero} className="xl:w-[699px]" descClassName="xl:w-[493px]" />

      <Advantages {...advantages} />

      <BusinessClients />

      <Cooperation />

      <Cases {...cases} />

      <Partners />

      <FAQ tags={['business']} />

      <ContactUs />
    </>
  );
}
