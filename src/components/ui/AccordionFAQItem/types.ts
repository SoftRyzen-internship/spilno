export type AccordionFAQItemProps = {
  data: ItemsType;
  index: number;
  aria: string;
};

type ItemsType = {
  question: string;
  answer: string;
};
