import { request } from 'graphql-request';

import { fetchReviews } from '@/actions/queries/fetchReviews';

import commonData from '@/data/common.json';

import { Review, ReviewData, ReviewsData, ReviewsResponse } from '@/types';

export const getReviews = async () => {
  try {
    const {
      reviews: { data },
    } = await request<ReviewsResponse>(
      process.env.API_BASE_URL as string,
      fetchReviews,
    );

    const formattedReviewsData: ReviewData[] =
      data &&
      data.map(({ attributes }: { attributes: Review }) => {
        const {
          from,
          type,
          url,
          preview,
          text,
          avatar,
          name,
          position,
          company,
        } = attributes;

        return {
          from,
          type,

          text,

          video: {
            url,
            preview: preview.data ? preview.data.attributes.url : null,
          },

          author: {
            avatar: avatar?.data ? avatar?.data?.attributes.url : null,
            name,
            position,
            company,
          },
        };
      });

    const fromBusinessData = formattedReviewsData.filter(
      ({ from }) => from === 'business',
    );
    const fromTraineeData = formattedReviewsData.filter(
      ({ from }) => from === 'trainee',
    );

    const reviewsData: ReviewsData = [
      {
        data: fromBusinessData,
        label: commonData.reviewTabs.business,
      },
      {
        data: fromTraineeData,
        label: commonData.reviewTabs.trainee,
      },
    ];

    return reviewsData;
  } catch (error) {
    return undefined;
  }
};
