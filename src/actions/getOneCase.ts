import { request } from 'graphql-request';

import { fetchOneCase } from '@/actions/queries/fetchOneCase';

export const getOneCase = async (slug: string) => {
  const variables = {
    case: slug,
  };

  try {
    const data = await request(
      process.env.API_BASE_URL as string,
      fetchOneCase,
      variables,
    );

    console.log(data);
    // console.log(data.cases.data[0].attributes.slug);
    return;
  } catch (error) {
    console.log(error);
  }
};
