export type SingleReviewCardProps = {
  review: {
    type: string;
    text: string | null;
    video: {
      url: string;
      preview: string;
    } | null;
    author: {
      name: string;
      position: string;
      company: string;
      avatar: string;
    };
  };
};
