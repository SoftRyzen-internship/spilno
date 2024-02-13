import { gql } from 'graphql-request';

export const fetchMainPageCases = gql`
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
          types(sort: "id") {
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
