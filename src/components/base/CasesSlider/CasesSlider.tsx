'use client';

import { Slider } from '@/components/ui/Slider';
import { CaseCard } from '@/components/ui/CaseCard';

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
