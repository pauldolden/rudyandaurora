import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/Layout";
import styled from "styled-components";
import parse from "html-react-parser";

const PageStyles = styled.section`
  padding: 5rem 10%;
  flex: 1;

  @media (max-width: 700px) {
    padding: 3rem 2rem;
  }

  .image-section {
    display: flex;

    .img-cont {
      padding: 0 2rem;
    }

    .img-cont:first-child {
      padding-left: 0;
    }

    .img-cont:last-child {
      padding-right: 0;
    }

    .img-cont img {
      aspect-ratio: 1 / 1;
    }

    @media (max-width: 1200px) {
      flex-direction: column;
      padding-bottom: 2rem;

      .img-cont {
        padding: 0;
      }

      .img-cont:first-child {
        padding-bottom: 2rem;
      }
    }
  }

  h1 {
    font-size: var(--size-title);
    font-family: var(--logo-font);
    color: var(--peach-med-dark);
    padding-bottom: 3rem;
    text-align: center;
  }
  h4 {
    font-size: var(--size-content-s);
    padding-bottom: 2rem;
  }

  div {
    font-size: var(--size-content);

    * {
      font-family: var(--body-font);
    }
  }
  .content-block {
    display: flex;
    flex-wrap: wrap;
    color: var(--black-base);
    * {
      width: 100%;
    }
  }
`;

interface ContentBlock {
  block_id: number;
  block_image_1: {
    dimensions: {
      height: number;
      width: number;
    };
    url: string;
  } | null;
  block_image_2: {
    dimensions: {
      height: number;
      width: number;
    };
    url: string;
  } | null;
  content_text: {
    html: string;
  };
}

const Page = ({ data: { prismicPage } }: any) => {
  const { data } = prismicPage;
  const blocks = data.content_block;
  const blocksDisplay = blocks.map((block: ContentBlock) => {
    return (
      <section key={block.block_id} className="content-block">
        {block.content_text.html && (
          <div className="content">{parse(block.content_text.html)}</div>
        )}
        {(block.block_image_1 || block.block_image_2) && (
          <div className="image-section">
            {block.block_image_1 && (
              <div className="img-cont">
                <img src={block.block_image_1.url} />
              </div>
            )}
            {block.block_image_2 && (
              <div className="img-cont">
                <img src={block.block_image_2.url} />
              </div>
            )}
          </div>
        )}
      </section>
    );
  });
  return (
    <Layout title={data.title.text}>
      <PageStyles>
        <h1>{data.title.text}</h1>
        <section>{blocksDisplay}</section>
      </PageStyles>
    </Layout>
  );
};
export default Page;

export const pageQuery = graphql`
  query PageBySlug($uid: String!) {
    prismicPage(uid: { eq: $uid }) {
      uid
      data {
        title {
          text
        }
        content_block {
          block_image_2 {
            dimensions {
              height
              width
            }
            url
          }
          content_text {
            html
          }
          block_image_1 {
            dimensions {
              height
              width
            }
            url
          }
          block_id
        }
      }
    }
  }
`;
