import { gql } from 'graphql-request';

export const fetchCasesAll = gql`
  {
    cases(sort: "id") {
      data {
        attributes {
          slug
          title
          text
          alt
          img {
            data {
              attributes {
                url
              }
            }
          }
          types {
            data {
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`;
