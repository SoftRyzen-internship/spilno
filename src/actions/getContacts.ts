import { request } from 'graphql-request';

import { fetchContacts } from '@/actions/queries/fetchContacts';

export const getContacts = async () => {
  try {
    const data = await request(
      process.env.API_BASE_URL as string,
      fetchContacts,
    );

    console.log(data);
    return;
  } catch (error) {
    console.log(error);
  }
};
