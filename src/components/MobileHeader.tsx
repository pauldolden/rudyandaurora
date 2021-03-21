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
  padding-top: 7rem;
  align-items: center;
  position: relative;
  -webkit-tap-highlight-color: transparent;
  border-bottom: 5px solid var(--peach-dark);

  .follow-me {
    display: flex;
    align-items: center;
    background-color: var(--peach-dark);
    color: var(--black-base);
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    padding: 1rem;
    font-size: var(--size-content-s);
    svg {
      fill: var(--black-base);
      margin-left: 1rem;
    }
  }

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
  top: calc(50% + 1rem);
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
        Remembering Rudy & Aurora
      </Link>
      <a
        href="https://instagram.com/rememberingrudydolden"
        className="follow-me"
        target="_blank"
      >
        <div>Follow Me</div>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 32 32"
        >
          <title>instagram</title>
          <path d="M16 2.881c4.275 0 4.781 0.019 6.462 0.094 1.563 0.069 2.406 0.331 2.969 0.55 0.744 0.288 1.281 0.638 1.837 1.194 0.563 0.563 0.906 1.094 1.2 1.838 0.219 0.563 0.481 1.412 0.55 2.969 0.075 1.688 0.094 2.194 0.094 6.463s-0.019 4.781-0.094 6.463c-0.069 1.563-0.331 2.406-0.55 2.969-0.288 0.744-0.637 1.281-1.194 1.837-0.563 0.563-1.094 0.906-1.837 1.2-0.563 0.219-1.413 0.481-2.969 0.55-1.688 0.075-2.194 0.094-6.463 0.094s-4.781-0.019-6.463-0.094c-1.563-0.069-2.406-0.331-2.969-0.55-0.744-0.288-1.281-0.637-1.838-1.194-0.563-0.563-0.906-1.094-1.2-1.837-0.219-0.563-0.481-1.413-0.55-2.969-0.075-1.688-0.094-2.194-0.094-6.463s0.019-4.781 0.094-6.463c0.069-1.563 0.331-2.406 0.55-2.969 0.288-0.744 0.638-1.281 1.194-1.838 0.563-0.563 1.094-0.906 1.838-1.2 0.563-0.219 1.412-0.481 2.969-0.55 1.681-0.075 2.188-0.094 6.463-0.094zM16 0c-4.344 0-4.887 0.019-6.594 0.094-1.7 0.075-2.869 0.35-3.881 0.744-1.056 0.412-1.95 0.956-2.837 1.85-0.894 0.888-1.438 1.781-1.85 2.831-0.394 1.019-0.669 2.181-0.744 3.881-0.075 1.713-0.094 2.256-0.094 6.6s0.019 4.887 0.094 6.594c0.075 1.7 0.35 2.869 0.744 3.881 0.413 1.056 0.956 1.95 1.85 2.837 0.887 0.887 1.781 1.438 2.831 1.844 1.019 0.394 2.181 0.669 3.881 0.744 1.706 0.075 2.25 0.094 6.594 0.094s4.888-0.019 6.594-0.094c1.7-0.075 2.869-0.35 3.881-0.744 1.050-0.406 1.944-0.956 2.831-1.844s1.438-1.781 1.844-2.831c0.394-1.019 0.669-2.181 0.744-3.881 0.075-1.706 0.094-2.25 0.094-6.594s-0.019-4.887-0.094-6.594c-0.075-1.7-0.35-2.869-0.744-3.881-0.394-1.063-0.938-1.956-1.831-2.844-0.887-0.887-1.781-1.438-2.831-1.844-1.019-0.394-2.181-0.669-3.881-0.744-1.712-0.081-2.256-0.1-6.6-0.1v0z"></path>
          <path d="M16 7.781c-4.537 0-8.219 3.681-8.219 8.219s3.681 8.219 8.219 8.219 8.219-3.681 8.219-8.219c0-4.537-3.681-8.219-8.219-8.219zM16 21.331c-2.944 0-5.331-2.387-5.331-5.331s2.387-5.331 5.331-5.331c2.944 0 5.331 2.387 5.331 5.331s-2.387 5.331-5.331 5.331z"></path>
          <path d="M26.462 7.456c0 1.060-0.859 1.919-1.919 1.919s-1.919-0.859-1.919-1.919c0-1.060 0.859-1.919 1.919-1.919s1.919 0.859 1.919 1.919z"></path>
        </svg>
      </a>
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
