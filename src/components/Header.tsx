import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const HeaderStyles = styled.header`
  padding: 5rem 10%;
  font-family: var(--header-font);
  display: flex;
  justify-content: space-between;
  background-color: var(--black-base);

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
  return (
    <HeaderStyles>
      <Link to="/" className="logo">
        Remembering Rudy & Aurora
      </Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/rudys-story">Rudy's Story</Link>
        <Link to="/auroras-story">Aurora's Story</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </HeaderStyles>
  );
};
