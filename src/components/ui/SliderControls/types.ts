export type SliderControlsProps = {
  section: 'cases' | 'reviews' | 'advantages';
  wrapClassName?: string;
};

export enum Sections {
  CASES = 'cases',
  REVIEWS = 'reviews',
  ADVANTAGES = 'advantages',
}
