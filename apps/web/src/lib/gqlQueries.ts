import gql from "graphql-tag";

export const GET_POSTS = gql`
  query Posts($skip: Float, $take: Float) {
    posts(skip: $skip, take: $take) {
      id
      title
      thumbnail
      content
      slug
      createdAt
    }
    postCount
  }
`;
