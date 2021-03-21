import * as React from "react";
import styled from "styled-components";
import { Layout } from "../components/Layout";
import { useFetchContactPageContent } from "../graphql/useFetchContactPageContent";

interface Paragraph {
  text: string;
}

const PageStyles = styled.section`
  padding: 5rem 10%;
  flex: 1;

  h1 {
    font-size: var(--size-title);
    font-family: var(--logo-font);
    color: var(--peach-med-dark);
    padding-bottom: 3rem;
    text-align: center;
  }
`;

const Contact = () => {
  const content = useFetchContactPageContent();
  const data = content.prismicContactPageContent.data;
  const text = data.page_text.map((para: Paragraph) => {
    return <p key={para.text + Math.ceil(Math.random() * 100)}>{para.text}</p>;
  });
  return (
    <Layout>
      <PageStyles>
        <h1>{data.page_title[0].text}</h1>
        <div className="content">{text}</div>
      </PageStyles>
    </Layout>
  );
};

export default Contact;
