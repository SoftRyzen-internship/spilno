import type { Metadata } from 'next';

import { Advantages } from '@/sections/Advantages';
import { ContactUs } from '@/sections/ContactUs';
import { Cases } from '@/sections/Cases';
import { FAQ } from '@/sections/FAQ';
import { Hero } from '@/sections/Hero';
import { Partners } from '@/sections/Partners';
import { BusinessClients } from '@/sections/BusinessClients';

import data from '@/data/business.json';

export const metadata: Metadata = data.meta;

const BusinessPage = () => {
  const { hero, advantages } = data;

  return (
    <>
      <Hero
        {...hero}
        className="xl:w-[699px]"
        descClassName="xl:text-[18px]/[1.5] xl:w-[493px]"
      />

      <Advantages {...advantages} />

      <BusinessClients />

      {/* Collaboration */}

      <Cases className="!p-0" />

      <Partners />

      <FAQ tags={['business']} />

      <ContactUs />
    </>
  );
};

export default BusinessPage;
