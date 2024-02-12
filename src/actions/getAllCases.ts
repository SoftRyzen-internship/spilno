import { request } from 'graphql-request';

import { fetchCasesAll } from '@/actions/queries/fetchCasesAll';

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

export const getAllCases = async () => {
  try {
    const { cases }: Data = await request(
      process.env.API_BASE_URL as string,
      fetchCasesAll,
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
