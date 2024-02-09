import { request } from 'graphql-request';

import { fetchMainPageCases } from '@/actions/queries/fetchMainPageCases';

type Data = {
  cases: {
    data: {
      attributes: {
        slug: string;
        text: string;
        alt: string;
        img: {
          data: {
            attributes: {
              url: string;
            };
          };
        };
        types: {
          data: {
            attributes: {
              name: string;
            };
          }[];
        };
      };
    }[];
  };
};

export const getMainPageCases = async () => {
  try {
    const { cases }: Data = await request(
      process.env.API_BASE_URL as string,
      fetchMainPageCases,
    );

    const result = cases.data.map(({ attributes }) => {
      const { slug, text, alt, img, types } = attributes;
      const {
        data: {
          attributes: { url },
        },
      } = img;
      const { data: tags } = types;

      return {
        slug,
        text,
        alt,
        url,
        tags,
      };
    });

    return result;
  } catch (e) {
    return null;
  }
};
