import { gql } from "@apollo/client";

export const GET_ARTICLES = gql`
  {
    articles(
      first: 10
      isDeleted: false
      magazine: "/api/magazines/01HNYR569W518KPYFW36FNXM44"
    ) {
      edges {
        node {
          id
          title
          path
          categoryList {
            edges {
              node {
                name
              }
            }
          }
          categoryName
          authorList {
            edges {
              node {
                fullname
              }
            }
          }
          cms {
            name
          }
          magazine {
            name
          }
          body
          jsonBody
          previewAsset {
            path
            author
            source
          }
        }
      }
    }
  }
`;
