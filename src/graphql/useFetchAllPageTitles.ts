import { graphql, useStaticQuery } from "gatsby";

export const useFetchAllPageTitles = () => {
  const data = useStaticQuery(graphql`
    query {
      allPrismicPage {
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
