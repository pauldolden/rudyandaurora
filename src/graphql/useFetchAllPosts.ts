import { graphql, useStaticQuery } from "gatsby";

export const useFetchAllPosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allPrismicPost {
        edges {
          node {
            uid
            data {
              post_image {
                url
              }
              short_content {
                html
              }
              title {
                text
              }
            }
            first_publication_date
          }
        }
      }
    }
  `);
  return data;
};
