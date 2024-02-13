export type CasesResponse = {
  cases: {
    data: {
      attributes: {
        slug: string;
        text: string;
        alt: string;
        img: {
          data: {
            attributes: {
              url: string;
            };
          };
        };
        types: {
          data: {
            attributes: {
              name: string;
            };
          }[];
        };
      };
    }[];
  };
};

export type CaseCardType = {
  slug: string;
  text: string;
  alt: string;
  url: string;
  tags: {
    attributes: {
      name: string;
    };
  }[];
};
