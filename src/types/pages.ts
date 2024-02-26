export type PageResponse = {
  pages: {
    data: [
      {
        attributes: {
          slug: {
            data: {
              attributes: {
                slug: string;
              };
            };
          };

          title: string;

          description: string;

          types: {
            data: {
              attributes: {
                name: string;
              };
            }[];
          };

          heroImg: TImage;
          alt: string;
          problems: TProblems;
          analysis: TAnalysis;
          decision: TDecision;
          result: TResult;
        };
      },
    ];
  };
};

export type getAllPagesSlugResponse = {
  pages: {
    data: {
      attributes: {
        slug: {
          data: {
            attributes: { slug: string };
          };
        };
      };
    }[];
  };
};

export type TOneCaseData =
  | {
      title: string;
      description: string;
      tags: {
        attributes: {
          name: string;
        };
      }[];
      url: string;
      alt: string;
      problems: TProblems;
      analysis: TAnalysis;
      decision: TDecision;
      result: TResult;
    }
  | undefined;

type TImage = {
  data: {
    attributes: {
      url: string;
    };
  };
};

type TDecision = {
  title: string;
  description: string;
  decisionList: decisionList[];
  decisionImgFirst: TImage;
  altFirst: string;
  decisionImgSecond: TImage;
  altSecond: string;
  decisionImgThird: TImage;
  altThird: string;
};

type TResult = {
  title: string;
  description: string;
  link: string;
};

type TAnalysis = {
  title: string;
  description: string;
  img: TImage;
  alt: string;
};
type TProblems = {
  title: string;
  description: string;
  problemsImgFirst: TImage;
  altFirst: string;
  problemsImgSecond: TImage;
  altSecond: string;
};

type decisionList = {
  title: string;
  description: string;
};
