/* eslint-disable @typescript-eslint/no-explicit-any */
export type Props = {
  slideComponent: React.FC<any>;
  slidesData: Record<string, unknown>[];
  section: 'cases' | 'reviews' | 'partners';
  swiperClassName?: string;
  slideClassName?: string;
};
