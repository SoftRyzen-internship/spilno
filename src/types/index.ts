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

export type TContacts = {
  instagram: string;
  linkedin: string;
  facebook: string;
};
