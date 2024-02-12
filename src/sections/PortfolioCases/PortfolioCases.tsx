import { CaseCard } from '@/components/ui/CaseCard';

import { getAllCases } from '@/actions/getAllCases';

import content from '@/data/advantages.json';

export const PortfolioCases: React.FC = async () => {
  const { id, title } = content;

  const slidesData = await getAllCases();

  return (
    <section id={id} className="section">
      <div className="container">
        <h2 className="sr-only">{title}</h2>

        <ul className="grid justify-center md:grid-cols-2 xl:gap-x-[88px] xl:gap-y-[100px] smOnly:space-y-12 mdOnly:gap-x-6 mdOnly:gap-y-[60px]">
          {slidesData?.map(slide => <CaseCard key={slide.slug} {...slide} />)}
        </ul>
      </div>
    </section>
  );
};