import { Link } from "gatsby";
import * as React from "react";
import styled from "styled-components";
import { useFetchAllPostTitles } from "../graphql/useFetchAllPostTitles";

const PageStyles = styled.aside`
  display: flex;
  flex-direction: column;
  width: 15%;
  align-items: center;
  flex-wrap: wrap;
  color: var(--black-base);
  background-color: var(--peach-base);
  text-align: center;

  div {
    display: flex;
    flex: 1;
    flex-direction: column;
  }

  h2 {
    padding: 2rem 3rem;
    font-family: var(--logo-font);
    font-size: var(--size-subtitle);
  }

  & > * {
    width: 100%;
  }

  a {
    color: inherit;
    font-size: var(--size-content);
    padding: 1rem 3rem;
    width: 100%;
    font-family: var(--nav-font);
  }
`;

const PostsSidebar = () => {
  const posts = useFetchAllPostTitles();
  const edges = posts.allPrismicPost.edges;
  const links = edges.map((edge: any) => {
    return (
      <Link key={edge.node.uid} to={`/post/${edge.node.uid}`}>
        {edge.node.data.title.text}
      </Link>
    );
  }) as Symbol[];
  return (
    <PageStyles>
      <h2>Latest Posts</h2>
      <div>{links}</div>
    </PageStyles>
  );
};

export default PostsSidebar;
