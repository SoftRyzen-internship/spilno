'use client';

import { SwiperSlide, Swiper } from 'swiper/react';

import { getSliderConfig } from '@/utils/getSliderConfig';

import 'swiper/css';
import 'swiper/css/navigation';

import { Props } from './types';

export const Slider: React.FC<Props> = ({
  slidesData,
  slideComponent: SlideComponenet,
  ...restProps
}) => {
  return (
    <Swiper {...getSliderConfig(restProps)}>
      {slidesData.map((slide, idx) => (
        <SwiperSlide key={idx}>
          <SlideComponenet slide={slide} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
