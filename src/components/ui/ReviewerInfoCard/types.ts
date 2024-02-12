export type ReviewerInfoCardProps = {
  author: AuthorReview;

  className?: string;
  isVideoReview: boolean;
};

type AuthorReview = {
  avatar: string | null;
  name: string;
  position: string;
  company: string | null;
};
