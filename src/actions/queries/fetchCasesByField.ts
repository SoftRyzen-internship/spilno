import { gql } from 'graphql-request';

export const fetchCasesByField = gql`
  {
    cases(filters: { mainPage: { eq: true } }, sort: "id") {
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
        }
      }
    }
  }
`;
