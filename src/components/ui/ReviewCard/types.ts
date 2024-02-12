export type ReviewProps = {
  text: string | null;
  video: VideoReview | null;
  author: AuthorReview;
  type: string;
};

type VideoReview = {
  url: string;
  preview: string;
};

type AuthorReview = {
  name: string;
  position: string;
  company: string;
  avatar: string;
};
