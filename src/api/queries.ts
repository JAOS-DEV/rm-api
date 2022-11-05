import { gql } from '@apollo/client';

export const GET_BULK_DATA = gql`
  {
    characters {
      info {
        count
        pages
        next
        prev
        __typename
      }
      results {
        id
        name
        status
        species
        type
        gender
        origin {
          id
          name
          dimension
          residents {
            name
            species
            image
          }
        }
        location {
          id
          name
          type
          dimension
          residents {
            id
            name
            species
          }
        }
        image
        episode {
          id
          name
          air_date
          episode
          characters {
            id
            name
            image
          }
        }
        created
        __typename
      }
      __typename
    }
  }
`;
