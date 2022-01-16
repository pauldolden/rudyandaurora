import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/Layout";
import styled from "styled-components";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const PageStyles = styled.section`
  padding: 5rem 5%;
  flex: 1;
  flex-direction: column;
  display: flex;
  align-items: center;

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
  console.log(prismicPost);

  return (
    <Layout title={data.title.text}>
      <PageStyles>
        <h1>{data.title.text}</h1>
        <h4>Posted: {dayjs(first_publication_date).fromNow()}</h4>
        <div dangerouslySetInnerHTML={{ __html: data.content.html }} />
        <div>
          <img src={data.post_image.url} alt={data.title.text} />
        </div>
      </PageStyles>
    </Layout>
  );
};
export default Post;

export const postQuery = graphql`
  query PostBySlug($uid: String!) {
    prismicPost(uid: { eq: $uid }) {
      uid
      first_publication_date
      data {
        title {
          text
        }
        content {
          html
        }
        post_image {
          url
        }
      }
    }
  }
`;
