import { Navigation, Autoplay } from 'swiper/modules';

import { Props as SliderProps } from '@/components/ui/Slider/types';

enum Sections {
  CASES = 'cases',
  REVIEWS = 'reviews',
  PARTNERS = 'partners',
  ADVANTAGES = 'advantages',
}

export const getSliderConfig = ({
  section,
  wrapClassName,
}: Partial<SliderProps>) => {
  const slidesPerViewBase = section === Sections.PARTNERS ? 3 : 1;
  const spaceBetweenBase = section === Sections.PARTNERS ? 20 : 16;
  const autoplayBase =
    section === Sections.PARTNERS
      ? { delay: 2000, disableOnInteraction: false }
      : false;

  let loopBase: boolean;

  let spaceBetweenTab: number;
  let slidesPerViewTab: number;

  let slidesPerViewDesk: number;
  let spaceBetweenDesk: number;

  switch (section) {
    case Sections.ADVANTAGES:
      loopBase = false;

      spaceBetweenTab = 32;
      slidesPerViewTab = 3;

      slidesPerViewDesk = 4;
      spaceBetweenDesk = 48;
      break;
    case Sections.CASES:
      loopBase = false;

      spaceBetweenTab = 24;
      slidesPerViewTab = 2;

      slidesPerViewDesk = 2;
      spaceBetweenDesk = 24;
      break;
    case Sections.REVIEWS:
      loopBase = true;

      spaceBetweenTab = 24;
      slidesPerViewTab = 2;

      slidesPerViewDesk = 1;
      spaceBetweenDesk = 32;
      break;
    default:
      loopBase = true;

      spaceBetweenTab = 21;
      slidesPerViewTab = 5;

      slidesPerViewDesk = 6;
      spaceBetweenDesk = 24;
  }

  return {
    className: wrapClassName,
    updateOnWindowResize: true,
    wrapperTag: 'ul',
    modules: [Navigation, Autoplay],
    speed: 800,
    lazyPreloadPrevNext: 1,
    navigation: {
      prevEl: `.slider-prev-btn-${section}`,
      nextEl: `.slider-next-btn-${section}`,
    },
    allowTouchMove: true,
    loop: loopBase,
    spaceBetween: spaceBetweenBase,
    slidesPerView: slidesPerViewBase,
    autoplay: autoplayBase,

    breakpoints: {
      768: {
        spaceBetween: spaceBetweenTab,
        slidesPerView: slidesPerViewTab,
      },
      1280: {
        slidesPerView: slidesPerViewDesk,
        spaceBetween: spaceBetweenDesk,
      },
    },
  };
};
