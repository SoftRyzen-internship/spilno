export type ReviewModalProps = {
  isOpen: boolean;
  closeModal: () => void;
  data: ReviewData;
  isVideoReview: boolean;
};

type ReviewData = {
  text: string | null;
  url: string;
  author: AuthorReview;
};

type AuthorReview = {
  name: string;
  position: string;
  company: string;
  avatar: string;
};
