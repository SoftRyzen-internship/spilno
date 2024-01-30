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
  const slidesPerViewAndGroupDefault = section === Sections.PARTNERS ? 3 : 1;
  const allowTouchMoveDefault = section === Sections.PARTNERS ? false : true;
  const spaceBetweenDefault = section === Sections.PARTNERS ? 20 : 0;
  const autoplayDefault =
    section === Sections.PARTNERS
      ? { delay: 3000, disableOnInteraction: false }
      : false;

  let spaceBetweenTab: number;
  let slidesPerViewTab: number;

  let slidesPerViewDesk: number;
  let spaceBetweenDesk: number;

  let loopTabAndDesk: boolean;

  switch (section) {
    case Sections.ADVANTAGES:
      spaceBetweenTab = 32;
      slidesPerViewTab = 3;

      slidesPerViewDesk = 4;
      spaceBetweenDesk = 48;

      loopTabAndDesk = false;
      break;
    case Sections.CASES:
      spaceBetweenTab = 24;
      slidesPerViewTab = 2;

      slidesPerViewDesk = 2;
      spaceBetweenDesk = 24;

      loopTabAndDesk = false;
      break;
    case Sections.REVIEWS:
      spaceBetweenTab = 24;
      slidesPerViewTab = 2;

      slidesPerViewDesk = 1;
      spaceBetweenDesk = 0;

      loopTabAndDesk = true;
      break;
    default:
      spaceBetweenTab = 21;
      slidesPerViewTab = 5;

      slidesPerViewDesk = 6;
      spaceBetweenDesk = 24;

      loopTabAndDesk = true;
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
    loop: true,
    spaceBetween: spaceBetweenDefault,
    slidesPerView: slidesPerViewAndGroupDefault,
    slidesPerGroup: slidesPerViewAndGroupDefault,
    autoplay: autoplayDefault,
    allowTouchMove: allowTouchMoveDefault,
    breakpoints: {
      768: {
        spaceBetween: spaceBetweenTab,
        slidesPerView: slidesPerViewTab,
        allowTouchMove: false,
        loop: loopTabAndDesk,
      },
      1280: {
        slidesPerView: slidesPerViewDesk,
        spaceBetween: spaceBetweenDesk,
        allowTouchMove: false,
        loop: loopTabAndDesk,
      },
    },
  };
};
