import { cn } from '@/utils/cn';

import content from '@/data/portfolio.json';

import css from './PortfolioHero.module.css';

export const PortfolioHero: React.FC = () => {
  const { id, title, desc } = content.hero;

  return (
    <section
      id={id}
      className="overflow-hidden bg-darkBg pb-[60px] pt-[114px] md:pb-28 md:pt-[155px] xl:pb-[200px] xl:pt-[258px]"
    >
      <div className={cn('container text-white', css.circle)}>
        <div className="ml-0 mr-auto max-w-[328px] xl:max-w-[493px]">
          <h1 className="mb-4 text-left font-geologica text-2xl/[1.15] font-light md:text-[32px] xl:mb-6 xl:text-[56px]">
            {title}
          </h1>

          <p className="text-xs/[1.5] md:text-sm/[1.4] xl:text-lg/[1.5]">
            {desc}
          </p>
        </div>
      </div>
    </section>
  );
};
