import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { useFetchAllPageTitles } from "../graphql/useFetchAllPageTitles";

const HeaderStyles = styled.header`
  padding: 5rem 5%;
  font-family: var(--header-font);
  display: flex;
  justify-content: space-between;
  background-color: var(--black-base);
  border-bottom: 5px solid var(--peach-base);
  .logo {
    font-family: var(--logo-font);
    font-size: var(--size-logo);
    color: var(--peach-base);
  }

  nav {
    display: flex;

    a {
      padding: 1rem;
      font-size: var(--size-nav);
      color: var(--peach-base);
      font-weight: 600;
      transition: all 0.3s;

      &:first-child {
        padding-left: 0;
      }
      &:last-child {
        padding-right: 0;
      }

      &:hover {
        color: var(--lilac-base);
      }
    }
  }
`;

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  const pages = useFetchAllPageTitles();
  const edges = pages.allPrismicPage.edges;
  const links = edges.map((edge: any) => {
    return (
      <Link key={edge.node.uid} to={`/${edge.node.uid}`}>
        {edge.node.data.title.text}
      </Link>
    );
  }) as Symbol[];
  return (
    <HeaderStyles>
      <Link to="/" className="logo">
        Remembering Rudy & Aurora Dolden
      </Link>
      <nav>
        <Link to="/">Home</Link>
        {links}
        <Link to="/contact">Contact</Link>
      </nav>
    </HeaderStyles>
  );
};
