import { gql } from 'graphql-request';

export const fetchOneCase = gql`
  query ($case: String) {
    pages(filters: { slug: { slug: { eq: $case } } }) {
      data {
        attributes {
          slug {
            data {
              attributes {
                slug
              }
            }
          }
          title
          description
          types(sort: "id") {
            data {
              attributes {
                name
              }
            }
          }
          heroImg {
            data {
              attributes {
                url
              }
            }
          }
          alt
          problems {
            title
            description
            problemsImgFirst {
              data {
                attributes {
                  url
                }
              }
            }
            altFirst
            problemsImgSecond {
              data {
                attributes {
                  url
                }
              }
            }
            altSecond
          }
          analysis {
            title
            description
            img {
              data {
                attributes {
                  url
                }
              }
            }
            alt
          }
          decision {
            title
            description
            decisionList {
              title
              description
            }
            decisionImgFirst {
              data {
                attributes {
                  url
                }
              }
            }
            altFirst
            decisionImgSecond {
              data {
                attributes {
                  url
                }
              }
            }
            altSecond
            decisionImgThird {
              data {
                attributes {
                  url
                }
              }
            }
            altThird
          }
          result {
            title
            description
            link
          }
        }
      }
    }
  }
`;
