/* eslint-disable @typescript-eslint/no-explicit-any */
export type SliderProps = {
  slideComponent: React.FC<any>;
  slidesData: Record<string, any>[] | [];
  section: 'cases' | 'reviews' | 'partners' | 'advantages';
  wrapClassName?: string;
  slideClassName?: string;
};
