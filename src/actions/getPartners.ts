import { request } from 'graphql-request';

import { fetchPartners } from '@/actions/queries/fetchPartners';

type TImage = {
  partners: {
    data: {
      attributes: {
        alt: string;
        img: {
          data: {
            attributes: {
              url: string;
            };
          };
        };
      };
    }[];
  };
};

export const getPartners = async () => {
  try {
    const { partners }: TImage = await request(
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
