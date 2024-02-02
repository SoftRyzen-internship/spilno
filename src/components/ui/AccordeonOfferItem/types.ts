export type AccordeonOfferItemProps = {
  data: OfferItemsType;
  index: number;
  aria: string;
};

type OfferItemsType = {
  title: string;
  description: string;
  image: string;
};
