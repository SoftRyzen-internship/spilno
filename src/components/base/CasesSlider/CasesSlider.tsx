'use client';

import { Slider } from '@/components/ui/Slider';
import { SliderControls } from '@/components/ui/SliderControls';
import { CaseCard } from '@/components/ui/CaseCard';

import { Props } from './types';

export const CasesSlider: React.FC<Props> = ({ slidesData }) => {
  return (
    <>
      <Slider
        section="cases"
        slideComponent={CaseCard}
        slidesData={slidesData}
        wrapClassName="mb-6 smOnly:max-w-[328px] md:mb-12 xl:mb-16"
      />

      <SliderControls
        wrapClassName="mb-8 flex justify-center md:absolute md:top-[4px] right-[42px] md:mb-0 xl:right-[32px] xl:top-[29px]"
        section="cases"
      />
    </>
  );
};
