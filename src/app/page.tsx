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

import data from '@/data/main.json';

export default function Home() {
  const { hero, advantages } = data;

  return (
    <>
      <Hero {...hero} />

      <Problems />

      <Offer />

      <Advantages {...advantages} />

      <About />

      <Cases />

      <Reviews />

      <Partners />

      <FAQ />

      <ContactUs />
    </>
  );
}
