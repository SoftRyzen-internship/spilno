import type { Metadata } from 'next';

import { Advantages } from '@/sections/Advantages';
import { ContactUs } from '@/sections/ContactUs';
import { Cases } from '@/sections/Cases';
import { FAQ } from '@/sections/FAQ';
import { Hero } from '@/sections/Hero';
import { Partners } from '@/sections/Partners';

import data from '@/data/business.json';

export const metadata: Metadata = data.meta;

const BusinessPage = () => {
  const { advantages } = data;

  return (
    <>
      <Hero />

      <Advantages {...advantages} />

      {/* OurClients */}

      {/* Collaboration */}

      <Cases className="!p-0" />

      <Partners />

      <FAQ />

      <ContactUs />
    </>
  );
};

export default BusinessPage;
