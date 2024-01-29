import { Slider } from '@/components/ui/Slider';

import { SliderTestCard } from './SliderTestCard';

import sliderData from './slider-test.json';

export const SliderTest = () => {
  return (
    <div className="container">
      <p>cases</p>
      <Slider
        section="cases"
        slidesData={sliderData}
        slideComponent={SliderTestCard}
      />

      <p>reviews</p>
      <Slider
        section="reviews"
        slidesData={sliderData}
        slideComponent={SliderTestCard}
      />

      <p>partners</p>
      <Slider
        section="partners"
        slidesData={sliderData}
        slideComponent={SliderTestCard}
      />
    </div>
  );
};
