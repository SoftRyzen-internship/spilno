import { Advantages } from '@/sections/Advantages';
import { CaseCard } from '@/components/ui/CaseCard';
import { ContactUs } from '@/sections/ContactUs';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';

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
    </>

  );
}
