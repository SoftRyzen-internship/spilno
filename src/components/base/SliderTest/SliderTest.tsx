import { Slider } from '@/components/ui/Slider';
import { SliderControls } from '@/components/ui/SliderControls';

import { SliderTestCard } from './SliderTestCard';

import sliderData from './slider-test.json';

export const SliderTest = () => {
  return (
    <div className="container">
      <p className="text-[30px] font-medium">advantages</p>
      <Slider
        section="advantages"
        slidesData={sliderData}
        slideComponent={SliderTestCard}
      />
      <SliderControls section="advantages" />

      <p className="text-[30px] font-medium">cases</p>
      <Slider
        section="cases"
        slidesData={sliderData}
        slideComponent={SliderTestCard}
      />
      <SliderControls section="cases" />

      <p className="mt-[50px] text-[30px] font-medium">reviews</p>
      <Slider
        section="reviews"
        slidesData={sliderData}
        slideComponent={SliderTestCard}
      />
      <SliderControls section="reviews" />

      <p className="mt-[50px] text-[30px] font-medium">partners</p>
      <Slider
        section="partners"
        slidesData={sliderData}
        slideComponent={SliderTestCard}
      />
    </div>
  );
};
