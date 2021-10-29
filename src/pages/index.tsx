import * as React from "react";
import styled from "styled-components";
import { Layout } from "../components/Layout";
import { Posts } from "../components/Posts";
import { useFetchHomePageContent } from "../graphql/useFetchHomePageContent";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const PageStyles = styled.section`
  padding: 5rem 10%;
  flex: 1;

  .page-content {
    padding-bottom: 0;
  }

  @media (max-width: 700px) {
    padding: 5rem 2rem;
  }

  h1 {
    font-size: var(--size-title);
    font-family: var(--logo-font);
    color: var(--peach-med-dark);
    padding-bottom: 3rem;
    text-align: center;
  }
`;

const IndexPage = () => {
  const content = useFetchHomePageContent();
  const data = content.prismicHomePageContent.data;
  return (
    <Layout title="Home">
      <PageStyles>
        <h1>{data.page_title.text}</h1>
        <div className="content page-content">
          <p>{data.page_text.text}</p>
        </div>
        <Posts />
      </PageStyles>
    </Layout>
  );
};

export default IndexPage;
