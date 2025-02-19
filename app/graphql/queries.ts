import { gql } from "@apollo/client";

export const GET_ARTICLES = gql`
  {
    articles(
      last: 10
      isDeleted: false
      magazine: "/api/magazines/01HNYR569W518KPYFW36FNXM44"
    ) {
      edges {
        node {
          id
          title
          url
          mainImageAsset {
            url
            alt
          }
        }
      }
    }
  }
`;
