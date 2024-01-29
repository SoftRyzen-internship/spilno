import { Navigation, Autoplay } from 'swiper/modules';

enum Sections {
  CASES = 'cases',
  REVIEWS = 'reviews',
  PARTNERS = 'partners',
}

import { Props as SliderProps } from '@/components/ui/Slider/types';

export const getSliderConfig = ({
  section,
  swiperClassName,
}: Partial<SliderProps>) => {
  const slidesPerViewAndGroupDefault = section === Sections.PARTNERS ? 3 : 1;
  const allowTouchMoveDefault = section === Sections.PARTNERS ? false : true;
  const autoplayDefault =
    section === Sections.PARTNERS
      ? { delay: 3000, disableOnInteraction: false }
      : false;
  let loopDefault: boolean;
  let spaceBetweenDefault: number;

  let slidesPerViewTab: number;

  switch (section) {
    case Sections.CASES:
      loopDefault = false;
      spaceBetweenDefault = 24;
      slidesPerViewTab = 2;

      break;
    case Sections.REVIEWS:
      loopDefault = true;
      spaceBetweenDefault = 0;
      slidesPerViewTab = 1;

      break;
    default:
      loopDefault = true;
      spaceBetweenDefault = 20;
      slidesPerViewTab = 5;
  }

  const spaceBetweenDesktop =
    section === Sections.PARTNERS ? 24 : spaceBetweenDefault;

  return {
    className: swiperClassName,
    updateOnWindowResize: true,
    wrapperTag: 'ul',
    modules: [Navigation, Autoplay],
    speed: 800,
    spaceBetween: spaceBetweenDefault,
    lazyPreloadPrevNext: 1,
    navigation: {
      nextEl: `.button-next-${section}`,
      prevEl: `.button-prev-${section}`,
    },
    loop: loopDefault,
    slidesPerView: slidesPerViewAndGroupDefault,
    slidesPerGroup: slidesPerViewAndGroupDefault,
    autoplay: autoplayDefault,
    allowTouchMove: allowTouchMoveDefault,
    breakpoints: {
      768: {
        slidesPerView: slidesPerViewTab,
        spaceBetween: 4,
        allowTouchMove: false,
      },
      1280: {
        slidesPerView: section === Sections.PARTNERS ? 6 : slidesPerViewTab,
        spaceBetween: spaceBetweenDesktop,
      },
    },
  };
};
