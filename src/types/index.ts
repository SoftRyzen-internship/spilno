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

export type Review = {
  from: string;
  type: string;
  url: string | null;
  preview: {
    data: {
      attributes: {
        url: string | null;
      };
    } | null;
  };
  text: string | null;
  avatar: {
    data: {
      attributes: {
        url: string | null;
      };
    } | null;
  };
  name: string;
  position: string;
  company: string | null;
};

export type ReviewsResponse = {
  reviews: {
    data: {
      attributes: Review;
    }[];
  };
};

export type ReviewData = {
  from: string;
  type: string;
  text: string | null;
  video: {
    url: string | null;
    preview: string | null;
  };
  author: {
    avatar: string | null;
    name: string;
    position: string;
    company: string | null;
  };
};

export type ReviewsData = { data: ReviewData[]; label: string }[];
