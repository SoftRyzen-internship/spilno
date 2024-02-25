import { request } from 'graphql-request';

import { fetchAllPagesSlug } from '@/actions/queries/fetchAllPagesSlug';

import { getAllPagesSlugResponse } from '@/types';

export const getAllPagesSlug = async () => {
  try {
    const { pages } = await request<getAllPagesSlugResponse>(
      process.env.API_BASE_URL as string,
      fetchAllPagesSlug,
    );

    return pages.data;
  } catch (error) {
    return null;
  }
};
