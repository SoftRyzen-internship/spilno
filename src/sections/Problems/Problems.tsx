import { SectionTitle } from '@/components/ui/SectionTitle';
import { ProblemCard } from '@/components/ui/ProblemCard';

import data from '@/data/problems.json';

export const Problems = () => {
  const { title, cards } = data;

  return (
    <section className="py-[60px] md:py-[80px] xl:py-[120px]" id="problems">
      <div className="container flex flex-col items-center gap-8 md:gap-12 xl:gap-16">
        <SectionTitle isCentered className="md:w-[448px] xl:w-[840px]">
          {title}
        </SectionTitle>

        <ul className="flex flex-col gap-6 md:flex-row xl:gap-[68px]">
          {cards.map((card, idx) => (
            <ProblemCard key={card.title} {...card} idx={idx} />
          ))}
        </ul>
      </div>
    </section>
  );
};
