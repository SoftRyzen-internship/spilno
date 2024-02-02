import { AdvantagesCard } from '@/components/ui/AdvantagesCard';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Slider } from '@/components/ui/Slider';
import { SliderControls } from '@/components/ui/SliderControls';

import content from '@/data/advantages.json';

export const Advantages: React.FC = () => {
  const { id, title, desc, features } = content;

  return (
    <section id={id} className="section bg-white">
      <div className="container">
        <SectionTitle className="mb-4 md:mb-7 xl:mb-6" isCentered>
          {title}
        </SectionTitle>
        <p className="mb-8 text-center text-sm/[1.5] md:text-base xl:text-lg/[1.5]">
          {desc}
        </p>

        <Slider
          section="advantages"
          slidesData={features}
          slideComponent={AdvantagesCard}
        />
        <SliderControls section="advantages" />
      </div>
    </section>
  );
};
