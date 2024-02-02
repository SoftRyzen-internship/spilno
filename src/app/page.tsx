import { SliderTest } from '@/components/base/SliderTest/SliderTest';
import { Logo } from '@/components/ui/Logo';
import { MainNav } from '@/components/ui/MainNav';
import { MobileMenu } from '@/components/base/MobileMenu';
import { CaseCard } from '@/components/ui/CaseCard';

import data from '@/data/cases.json';

export default function Home() {
  return (
    <div>
      <div className="container">
        <SliderTest />
      </div>

      <div className="container bg-darkBg">
        <div className="container flex items-center justify-between bg-darkBg">
          <Logo location="header" />
          <MainNav location="header" />
          <MobileMenu />
        </div>
      </div>

      <ul className="container flex flex-col gap-6">
        {data.caseCards.map(card => (
          <CaseCard key={card.id} {...card} />
        ))}
      </ul>
    </div>
  );
}
