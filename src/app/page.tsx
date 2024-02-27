import {
  Hero,
  Problems,
  Offer,
  Advantages,
  About,
  Cases,
  ContactUs,
  Reviews,
  Partners,
  FAQ,
} from '@/sections';

import mainPageData from '@/data/main-page.json';
import commonData from '@/data/common.json';

export default function Home() {
  const { hero, advantages } = mainPageData;
  const { cases } = commonData;

  return (
    <>
      <Hero {...hero} />

      <Problems />

      <Offer />

      <Advantages {...advantages} />

      <About />

      <Cases {...cases} />

      <Reviews />

      <Partners />

      <FAQ />

      <ContactUs />
    </>
  );
}
