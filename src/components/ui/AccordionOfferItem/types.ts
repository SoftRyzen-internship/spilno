export type AccordionOfferItemProps = {
  data: OfferItemsType;
  index: number;
  aria: string;
};

type OfferItemsType = {
  title: string;
  description: string;
  image: string;
};
