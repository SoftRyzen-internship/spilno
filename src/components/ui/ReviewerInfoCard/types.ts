export type ReviewerInfoCardProps = {
  author: AuthorReview;
  video: VideoReview | null;
  className?: string;
};

type VideoReview = {
  path: string;
  preview: string;
};

type AuthorReview = {
  name: string;
  activity: string;
  project: string;
  photo: string;
};
