import { graphql, useStaticQuery } from "gatsby";

export const useFetchContactPageContent = () => {
  const data = useStaticQuery(graphql`
    query {
      prismicContactPageContent {
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
