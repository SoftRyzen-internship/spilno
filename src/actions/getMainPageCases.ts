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
