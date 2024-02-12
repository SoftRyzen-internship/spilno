import { request } from 'graphql-request';

import { fetchContacts } from '@/actions/queries/fetchContacts';

type Data = {
  contact: {
    data: {
      attributes: {
        instagram: string;
        linkedin: string;
        facebook: string;
      };
    };
  };
};

export const getContacts = async () => {
  try {
    const { contact }: Data = await request(
      process.env.API_BASE_URL as string,
      fetchContacts,
    );

    return contact.data.attributes;
  } catch (error) {
    return null;
  }
};
