import { graphql, Link } from "gatsby";
import * as React from "react";
import styled from "styled-components";
import { useFetchAllPostTitles } from "../hooks/useFetchAllPostTitles";

const PageStyles = styled.aside`
  display: flex;
  flex-direction: column;
  width: 15%;
  border-right: 1px solid var(--peach-base);
  height: 100%;
  align-items: center;
  flex-wrap: wrap;
  color: var(--peach-base);
  background-color: var(--black-base);
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
    font-size: var(--size-nav);
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
      <Link key={edge.node.uid} to={`/${edge.node.uid}`}>
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
