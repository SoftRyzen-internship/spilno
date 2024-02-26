import { request } from 'graphql-request';

import { fetchOnePage } from '@/actions/queries/fetchOnePage';

import { FormattedReviewData, PageResponse } from '@/types';

export const getOnePage = async (slug: string) => {
  const variables = {
    case: slug,
  };

  try {
    const { pages } = await request<PageResponse>(
      process.env.API_BASE_URL as string,
      fetchOnePage,
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
      review,
    } = pages.data[0].attributes;

    const {
      data: {
        attributes: { url },
      },
    } = heroImg;

    const { data: tags } = types;

    const reviewData = review.data?.attributes;
    const formattedReview: FormattedReviewData = reviewData
      ? {
          type: reviewData.type,
          text: reviewData.text,
          video:
            reviewData.preview && reviewData.url
              ? {
                  url: reviewData.url,
                  preview: reviewData.preview.data.attributes.url,
                }
              : null,
          author: {
            name: reviewData.name,
            position: reviewData.position,
            company: reviewData.company,
            avatar: reviewData.avatar.data.attributes.url,
          },
        }
      : null;

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
      review: formattedReview,
    };

    return formattedResult;
  } catch (error) {
    return undefined;
  }
};
