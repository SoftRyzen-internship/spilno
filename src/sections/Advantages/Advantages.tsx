import {
  AdvantagesCard,
  SectionTitle,
  Slider,
  SliderControls,
} from '@/components/ui';

import data from '@/data/common.json';

import { AdvantagesProps } from './types';

export const Advantages: React.FC<AdvantagesProps> = ({ id, title, desc }) => (
  <section id={id} className="section bg-white">
    <div className="container mdOnly:relative">
      <SectionTitle
        className="mb-4 md:mb-7 xl:mb-6 mdOnly:text-left"
        isCentered
      >
        {title}
      </SectionTitle>

      <p className="mb-8 text-center text-sm/[1.5] md:max-w-[448px] md:text-base xl:mx-auto xl:mb-16 xl:max-w-[624px] xl:text-lg/[1.5] mdOnly:text-left">
        {desc}
      </p>

      <Slider
        section="advantages"
        slidesData={data.advantages}
        slideComponent={AdvantagesCard}
        wrapClassName="smOnly:max-w-[288px] smOnly:mb-8"
      />

      <SliderControls
        section="advantages"
        wrapClassName="justify-center mdOnly:absolute mdOnly:top-0 mdOnly:right-[42px]"
      />
    </div>
  </section>
);
