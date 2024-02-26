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

          heroImg: {
            data: {
              attributes: {
                url: string;
              };
            };
          };

          alt: string;

          problems: {
            title: string;
            description: string;
            problemsImgFirst: {
              data: {
                attributes: {
                  url: string;
                };
              };
            };
            altFirst: string;
            problemsImgSecond: {
              data: {
                attributes: {
                  url: string;
                };
              };
            };
            altSecond: string;
          };

          analysis: {
            title: string;
            description: string;
            img: {
              data: {
                attributes: {
                  url: string;
                };
              };
            };
            alt: string;
          };

          decision: {
            title: string;
            description: string;
            decisionList: {
              title: string;
              description: string;
            };
            decisionImgFirst: {
              data: {
                attributes: {
                  url: string;
                };
              };
            };
            altFirst: string;
            decisionImgSecond: {
              data: {
                attributes: {
                  url: string;
                };
              };
            };
            altSecond: string;
            decisionImgThird: {
              data: {
                attributes: {
                  url: string;
                };
              };
            };
            altThird: string;
          };

          result: {
            title: string;
            description: string;
            link: string;
          };
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
