export type TabsProps = {
  children: React.ReactNode;
  questionsData?: FAQData[];
  reviewsData?: reviewsDataProps[] | undefined;
};

type FAQData = {
  label: string;
  aria: string;
  questions: QuestionsData[];
};

type QuestionsData = {
  question: string;
  answer: string;
};

type reviewsDataProps = {
  data: Review[];
  label: string;
};

type Review = {
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

export type FAQItemsType = {
  question: string;
  answer: string;
};
