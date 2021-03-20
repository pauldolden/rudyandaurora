import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/Layout";
import styled from "styled-components";

const PageStyles = styled.section`
  padding: 5rem 5%;
  flex: 1;

  h1 {
    color: var(--peach-med-dark);
    font-size: var(--size-title);
    font-family: var(--logo-font);
    padding-bottom: 3rem;
    text-align: center;
  }
  h4 {
    font-size: var(--size-content-s);
    padding-bottom: 2rem;
    text-align: center;
  }

  div {
    font-size: var(--size-content);

    * {
      font-family: var(--body-font);
    }
  }
`;

const Post = ({ data: { prismicPost } }: any) => {
  const { data, first_publication_date } = prismicPost;
  return (
    <Layout>
      <PageStyles>
        <h1>{data.title.text}</h1>
        <h4>Posted {first_publication_date}</h4>
        <div dangerouslySetInnerHTML={{ __html: data.content.html }} />
      </PageStyles>
    </Layout>
  );
};
export default Post;

export const postQuery = graphql`
  query PostBySlug($uid: String!) {
    prismicPost(uid: { eq: $uid }) {
      uid
      first_publication_date(fromNow: true)
      data {
        title {
          text
        }
        content {
          html
        }
      }
    }
  }
`;
