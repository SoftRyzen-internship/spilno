import { SectionTitle, ProblemCard } from '@/components/ui';

import data from '@/data/main-page.json';

export const Problems: React.FC = () => {
  const { title, cards } = data.problems;

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
