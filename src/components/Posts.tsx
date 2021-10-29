import React from "react";
import { useFetchAllPosts } from "../graphql/useFetchAllPosts";
import styled from "styled-components";
import { Link } from "gatsby";
import parse from "html-react-parser";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const PageStyles = styled.section`
  padding: 2rem 2rem;
  flex: 1;

  @media (max-width: 1200px) {
    padding: 4rem 0;
  }

  article {
    display: flex;
    flex-direction: column;
    padding: 2rem 2rem;
    margin-bottom: 3rem;
    border: 1px solid var(--peach-base);

    section {
      display: flex;

      @media (max-width: 1200px) {
        flex-direction: column;
        width: 100%;
      }
    }

    .left {
      padding: 0 1rem;
      margin-right: 2rem;
      max-width: 30rem;

      @media (max-width: 1200px) {
        max-width: 100%;
        margin: 0;
        margin-bottom: 2rem;
      }
    }

    .right {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .img-cont {
      width: 30rem;
      img {
        border: 3px solid var(--peach-base);
        width: 100%;
        display: block;
      }
    }

    .top {
      display: flex;
      align-items: center;
      padding: 1rem;
      padding-bottom: 3rem;

      @media (max-width: 700px) {
        flex-direction: column;
        width: 100%;

        h3 {
          padding: 0;
          padding-top: 1rem;
        }
      }
    }

    a {
      font-size: var(--size-subtitle);
      color: var(--peach-med-dark);
      transition: 0.3s all;
    }

    a.small {
      font-size: var(--size-content-s);
      color: var(--peach-med-dark);

      &:hover {
        color: var(--peach-dark);
      }
    }

    h3 {
      font-size: var(--size-content-s);
      padding-left: 2rem;
    }
  }
`;

interface Post {
  node: {
    uid: string;
    first_publication_date: string;
    data: {
      post_image: {
        url: string;
      };
      short_content: {
        html: string;
      };
      title: {
        text: string;
      };
    };
  };
}

interface PostsProps {}

export const Posts: React.FC<PostsProps> = ({}) => {
  const posts = useFetchAllPosts().allPrismicPost.edges;
  const postsMap = posts.map((post: Post) => {
    return (
      <article key={post.node.uid}>
        <div className="top">
          <Link to={`/post/${post.node.uid}`}>{post.node.data.title.text}</Link>
          <h3>Posted: {dayjs(post.node.first_publication_date).fromNow()}</h3>
        </div>
        <section>
          <div className="left">
            <Link to={`/post/${post.node.uid}`} className="img-cont">
              <img
                src={post.node.data.post_image.url}
                alt={post.node.data.title.text}
              />
            </Link>
          </div>
          <div className="right">
            <div className="content post-content">
              {parse(post.node.data.short_content.html)}
            </div>
            <Link className="small" to={`/post/${post.node.uid}`}>
              Read More &raquo;
            </Link>
          </div>
        </section>
      </article>
    );
  });
  return (
    <PageStyles>
      <h2 className="page-subtitle">Blog</h2>
      {postsMap}
    </PageStyles>
  );
};
