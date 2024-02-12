import { gql } from 'graphql-request';

export const fetchReviews = gql`
  {
    reviews {
      data {
        attributes {
          from
          type
          url
          preview {
            data {
              attributes {
                url
              }
            }
          }
          text
          avatar {
            data {
              attributes {
                url
              }
            }
          }
          name
          position
          company
        }
      }
    }
  }
`;
