import { gql } from 'graphql-request';

export const fetchCasesAll = gql`
  query FetchPartners {
    partners {
      data {
        attributes {
          alt
          img {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;
