import { request } from 'graphql-request';

import { fetchCasesAll } from '@/actions/queries/fetchCasesAll';

import { CasesResponse } from '@/types';

export const getAllCases = async () => {
  try {
    const { cases } = await request<CasesResponse>(
      process.env.API_BASE_URL as string,
      fetchCasesAll,
    );

    const result = cases.data.map(({ attributes }) => {
      const { slug, text, alt, img, types, title, link } = attributes;
      const {
        data: {
          attributes: { url },
        },
      } = img;
      const { data: tags } = types;

      return {
        title,
        slug,
        text,
        alt,
        url,
        tags,
        link,
      };
    });

    return result;
  } catch (e) {
    return null;
  }
};
