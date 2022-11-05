import { gql } from '@apollo/client';

// graphql typedefs - not sure about these
export const typeDefs = gql`
  type Character {
    id: ID!
    created: String!
    episode: [Episode!]!
    gender: String!
    image: String!
    location: Location!
    origin: Location!
    name: String!
    status: String!
    species: String!
    type: String!
  }

  type Episode {
    id: ID!
    air_date: String!
    characters: [Character!]!
    created: String!
    episode: String!
    name: String!
  }

  type Location {
    id: ID!
    created: String!
    dimension: String!
    name: String!
    residents: [Character!]!
    type: String!
  }

  type Info {
    count: Int!
    next: Int
    pages: Int!
    prev: Int
  }

  type Query {
    characters: [Character]
  }
`;
