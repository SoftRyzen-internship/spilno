import { request } from 'graphql-request';

import { fetchOneCase } from '@/actions/queries/fetchOneCase';

import { PageResponse } from '@/types';

export const getOnePage = async (slug: string) => {
  const variables = {
    case: slug,
  };

  try {
    const { pages } = await request<PageResponse>(
      process.env.API_BASE_URL as string,
      fetchOneCase,
      variables,
    );

    const {
      title,
      description,
      types,
      heroImg,
      alt,
      problems,
      analysis,
      decision,
      result,
    } = pages.data[0].attributes;

    const {
      data: {
        attributes: { url },
      },
    } = heroImg;

    const { data: tags } = types;

    const formattedResult = {
      title,
      description,
      tags,
      url,
      alt,
      problems,
      analysis,
      decision,
      result,
    };

    return formattedResult;
  } catch (error) {
    return undefined;
  }
};
