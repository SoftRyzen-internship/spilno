export type ReviewProps = {
  card: {
    review: string | null;
    video: VideoReview | null;
    author: AuthorReview;
  };
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
