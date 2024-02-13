import { request } from 'graphql-request';

import { fetchContacts } from '@/actions/queries/fetchContacts';

import { ContactsResponse } from '@/types';

export const getContacts = async () => {
  try {
    const { contact } = await request<ContactsResponse>(
      process.env.API_BASE_URL as string,
      fetchContacts,
    );

    return contact.data.attributes;
  } catch (error) {
    return null;
  }
};
