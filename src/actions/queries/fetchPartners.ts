import { gql } from 'graphql-request';

export const fetchPartners = gql`
  {
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
