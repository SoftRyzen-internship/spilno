import { gql } from 'graphql-request';

export const fetchOneCase = gql`
  query ($case: String) {
    cases(filters: { slug: { eq: $case } }) {
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
