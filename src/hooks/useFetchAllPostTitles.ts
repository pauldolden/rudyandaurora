import { graphql, useStaticQuery } from "gatsby";

export const useFetchAllPostTitles = () => {
  const data = useStaticQuery(graphql`
    query {
      allPrismicPost {
        edges {
          node {
            uid
            data {
              title {
                text
              }
            }
          }
        }
      }
    }
  `);
  return data;
};
