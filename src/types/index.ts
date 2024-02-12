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

export type TelegramData = Record<string, string>;

export type TelegramRes = { code: number };
