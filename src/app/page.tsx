import { Advantages } from '@/sections/Advantages';
import { ContactUs } from '@/sections/ContactUs';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Offer } from '@/sections/Offer';
import { Reviews } from '@/sections/Reviews';
import { FAQ } from '@/sections/FAQ';
import { CaseCard } from '@/components/ui/CaseCard';

import data from '@/data/cases.json';

export default function Home() {
  return (
    <>
      <Hero />

      <ul className="container my-[50px] flex flex-col gap-6">
        {data.caseCards.map(card => (
          <CaseCard key={card.id} {...card} />
        ))}
      </ul>

      <Advantages />

      <ContactUs />

      <About />

      <Offer />

      <Reviews />

      <FAQ />
    </>
  );
}
