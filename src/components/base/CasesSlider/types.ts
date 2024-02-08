export type Props = {
  slidesData: {
    slug: string;
    text: string;
    alt: string;
    url: string;
    tags: {
      attributes: {
        name: string;
      };
    }[];
  }[];
};
