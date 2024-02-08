import { gql } from 'graphql-request';

export const fetchContacts = gql`
  {
    contact {
      data {
        attributes {
          instagram
          linkedin
          facebook
        }
      }
    }
  }
`;
