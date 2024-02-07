'use client';

import { Slider } from '@/components/ui/Slider';
import { SliderControls } from '@/components/ui/SliderControls';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { CaseCard } from '@/components/ui/CaseCard';
import { Button } from '@/components/ui/Button';

import data from '@/data/cases.json';

import ArrowIcon from '~/icons/arrow.svg';

export const Cases: React.FC = () => {
  const { title, link } = data;

  return (
    <section className="py-[60px] md:py-[80px] xl:py-[120px]" id="cases">
      <div className="container relative text-center">
        <SectionTitle
          className="mb-8 w-[258px] text-start md:mb-12 md:w-[448px] xl:mb-16 xl:w-[596px]"
          isCentered={false}
        >
          {title}
        </SectionTitle>

        <Slider
          section="cases"
          slideComponent={CaseCard}
          // Временная заглушка
          slidesData={[{}]}
          wrapClassName="mb-6 smOnly:max-w-[328px] md:mb-12 xl:mb-16"
        />

        <SliderControls
          wrapClassName="mb-8 flex justify-center md:absolute md:top-[4px] right-[42px] md:mb-0 xl:right-[32px] xl:top-[29px]"
          section="cases"
        />

        <Button
          btnStyle="accent"
          className="smOnly:w-full"
          link={link.path}
          text={link.text}
        >
          <ArrowIcon className="xl:w-6" width="20" height="20" />
        </Button>
      </div>
    </section>
  );
};
