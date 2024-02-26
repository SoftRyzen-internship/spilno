import { gql } from 'graphql-request';

export const fetchAllPagesSlug = gql`
  query {
    pages {
      data {
        attributes {
          slug {
            data {
              attributes {
                slug
              }
            }
          }
        }
      }
    }
  }
`;
