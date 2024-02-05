export type TabsProps = {
  data: (ReviewsData | FAQData)[];
  children: React.ReactNode;
  title: string;
  label: string;
};

type FAQData = {
  name: string;
  aria: string;
  questions: QuestionsData[];
};

type QuestionsData = {
  question: string;
  answer: string;
};

type ReviewsData = {
  name: string;
  reviews: Reviews[];
};

type Reviews = {
  review: string | null;
  video: ReviewVideo | null;
  author: ReviewAuthor;
};

type ReviewVideo = {
  path: string;
  preview: string;
};

type ReviewAuthor = {
  photo: string;
  name: string;
  activity: string;
  project: string;
};
