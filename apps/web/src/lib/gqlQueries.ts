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

export const GET_POST_BY_ID = gql`
  query PostById($id: Int!) {
    postById(id: $id) {
      id
      title
      thumbnail
      content
      slug
      createdAt
      author {
        name
      }
      tags {
        id
        name
      }
    }
  }
`;
