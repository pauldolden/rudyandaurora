import * as React from "react";
import styled from "styled-components";
import { Layout } from "../components/Layout";
import { Posts } from "../components/Posts";
import { useFetchHomePageContent } from "../graphql/useFetchHomePageContent";

interface Paragraph {
  text: string;
}

const PageStyles = styled.section`
  padding: 5rem 10%;
  flex: 1;

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
  const text = data.page_text.map((para: Paragraph) => {
    return <p key={para.text + Math.ceil(Math.random() * 100)}>{para.text}</p>;
  });
  return (
    <Layout title="Home">
      <PageStyles>
        <h1>{data.page_title[0].text}</h1>
        <div className="content">{text}</div>
        <Posts />
      </PageStyles>
    </Layout>
  );
};

export default IndexPage;
