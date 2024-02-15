'use client';

import { Slider, CaseCard } from '@/components/ui';

import { Props } from './types';

export const CasesSlider: React.FC<Props> = ({ slidesData }) => {
  return (
    <Slider
      section="cases"
      slideComponent={CaseCard}
      slidesData={slidesData}
      wrapClassName="mb-6 md:mb-12 xl:mb-16"
    />
  );
};
