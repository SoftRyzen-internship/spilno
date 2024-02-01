'use client';

import { SwiperSlide, Swiper } from 'swiper/react';

import { getSliderConfig } from '@/utils/getSliderConfig';

import 'swiper/css';
import 'swiper/css/navigation';

import { Props } from './types';

export const Slider: React.FC<Props> = ({
  slideClassName,
  slidesData,
  slideComponent: SlideComponent,
  ...restProps
}) => {
  return (
    <Swiper {...getSliderConfig(restProps)}>
      {slidesData.map((card, idx) => (
        <SwiperSlide className={slideClassName} key={card.id ? card.id : idx}>
          <SlideComponent card={card} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
