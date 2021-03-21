import { graphql, useStaticQuery } from "gatsby";

export const useFetchHomePageContent = () => {
  const data = useStaticQuery(graphql`
    query {
      prismicHomePageContent {
        data {
          page_text {
            text
          }
          page_title {
            text
          }
        }
      }
    }
  `);
  return data;
};
