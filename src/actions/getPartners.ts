import { request } from 'graphql-request';

import { fetchPartners } from '@/actions/queries/fetchPartners';

import { TImage } from '@/types';

export const getPartners = async () => {
  try {
    const { partners } = await request<TImage>(
      process.env.API_BASE_URL as string,
      fetchPartners,
    );

    const result = partners.data.map(({ attributes }) => {
      const { alt, img } = attributes;
      const {
        data: {
          attributes: { url },
        },
      } = img;

      return {
        alt,
        url,
      };
    });

    return result;
  } catch (e) {
    return null;
  }
};
