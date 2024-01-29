import { Advantages } from '@/sections/Advantages';
import { CaseCard } from '@/components/ui/CaseCard';
import { ContactUs } from '@/sections/ContactUs';
import { About } from '@/sections/About';

import { Reviews } from '@/sections/Reviews';
import { FAQ } from '@/sections/FAQ';
import { Offer } from '@/sections/Offer';

import data from '@/data/cases.json';

export default function Home() {
  return (
    <div>
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
    </div>
  );
}
