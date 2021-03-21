import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { useFetchAllPageTitles } from "../graphql/useFetchAllPageTitles";
import classNames from "classnames";
import { useState } from "react";

const PageStyles = styled.header`
  display: none;
  background-color: var(--black-base);
  padding: 5rem 0;
  align-items: center;
  position: relative;
  -webkit-tap-highlight-color: transparent;
  border-bottom: 5px solid var(--peach-dark);

  &.open {
    height: 100vh;
    border: none;
    position: unset;
  }

  nav {
    display: none;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: var(--black-base);
    z-index: 100;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    a {
      color: var(--peach-base);
      font-size: var(--size-nav);
      padding: 2rem 0;
    }
  }

  .logo {
    font-family: var(--logo-font);
    font-size: 3.6rem;
    color: var(--peach-base);
    align-self: center;
    margin: 0 auto;
    display: flex;
    align-items: center;

    @media (max-width: 850px) {
      margin: 0;
      padding-left: 4rem;
      padding-right: 5rem;
    }

    @media (max-width: 700px) {
      margin: 0;
      padding-left: 4rem;
      font-size: 3rem;
      padding-right: 10rem;
    }
  }

  @media (max-width: 1023px) {
    display: flex;
  }
`;

const Span = styled.span`
  position: absolute;
  display: block;
  background-color: var(--peach-base);
  width: 4rem;
  height: 5px;
  border-radius: 100px;
  transition: transform 0.2s;
  user-select: none;
`;

const Top = styled(Span)`
  top: 0rem;

  &.open {
    top: 1rem;
    transform: rotate(135deg);
  }
`;

const Middle = styled(Span)`
  top: 1.5rem;

  &.open {
    transform: translateX(-2rem);
    opacity: 0;
  }
`;

const Bottom = styled(Span)`
  top: 3rem;

  &.open {
    top: 1rem;
    transform: rotate(-135deg);
  }
`;
const Box = styled.div`
  width: 4rem;
  height: 4rem;
  z-index: 150;
  user-select: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 4rem;

  &.open {
    top: 10%;
  }

  &.open + nav {
    display: flex;
  }

  &:hover {
    cursor: pointer;
  }
`;

interface MobileHeaderProps {}

export const MobileHeader: React.FC<MobileHeaderProps> = ({}) => {
  const [open, setOpen] = useState(false);
  const openClass = classNames({
    open: open,
  });
  const openMenu = () => {
    setOpen(!open);
    const body = document.querySelector("body")!.classList;
    if (body.contains("disable-scroll")) {
      body.remove("disable-scroll");
    } else {
      body.add("disable-scroll");
    }
  };
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
    <PageStyles className={openClass}>
      <Link to="/" className="logo">
        Remembering Rudy & Aurora Dolden
      </Link>
      <Box onClick={openMenu} className={openClass}>
        <Top className={openClass}>&nbsp;</Top>
        <Middle className={openClass}>&nbsp;</Middle>
        <Bottom className={openClass}>&nbsp;</Bottom>
      </Box>
      <nav>
        <Link to="/">Home</Link>
        {links}
        <Link to="/contact">Contact</Link>
      </nav>
    </PageStyles>
  );
};
