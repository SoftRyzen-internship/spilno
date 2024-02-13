import { request } from 'graphql-request';

import { fetchMainPageCases } from '@/actions/queries/fetchMainPageCases';

import { CasesResponse } from '@/types';

export const getMainPageCases = async () => {
  try {
    const { cases } = await request<CasesResponse>(
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
