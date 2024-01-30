/* eslint-disable @typescript-eslint/no-explicit-any */
export type Props = {
  slideComponent: React.FC<any>;
  slidesData: Record<string, any>[];
  section: 'cases' | 'reviews' | 'partners' | 'advantages';
  wrapClassName?: string;
  slideClassName?: string;
};
