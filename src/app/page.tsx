import { Advantages } from '@/sections/Advantages';
import { ContactUs } from '@/sections/ContactUs';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Offer } from '@/sections/Offer';
import { Reviews } from '@/sections/Reviews';
import { FAQ } from '@/sections/FAQ';
import { Problems } from '@/sections/Problems';
import { Partners } from '@/sections/Partners';

export default function Home() {
  return (
    <>
      <Hero />

      <Problems />

      <Offer />

      <Advantages />

      <About />

      <Reviews />

      <Partners />

      <FAQ />

      <ContactUs />
    </>
  );
}
