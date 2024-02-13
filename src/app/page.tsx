import { Advantages } from '@/sections/Advantages';
import { ContactUs } from '@/sections/ContactUs';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Offer } from '@/sections/Offer';
import { Reviews } from '@/sections/Reviews';
import { FAQ } from '@/sections/FAQ';
import { Problems } from '@/sections/Problems';
import { Partners } from '@/sections/Partners';
import { Cases } from '@/sections/Cases';

import data from '@/data/main.json';

export default function Home() {
  const { advantages } = data;

  return (
    <>
      <Hero />

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
