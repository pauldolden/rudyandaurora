import React from "react";
import { Head } from "./Head";
import { Header } from "./Header";
import styled from "styled-components";
import GlobalStyles from "../styles/globals";
import PostsSidebar from "./PostsSidebar";
import { Footer } from "./Footer";
import { MobileHeader } from "./MobileHeader";

const LayoutStyles = styled.section`
  display: flex;
  min-height: 100vh;

  @media (max-width: 700px) {
    flex-direction: column;
  }

  main {
    display: flex;
    flex: 1;
    border-left: 1px solid var(--peach-med-dark);
  }
`;

interface LayoutProps {
  children: React.ReactNode;
  title: String;
}

export const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head title={title} />
      <GlobalStyles />
      <MobileHeader />
      <Header />
      <LayoutStyles>
        <PostsSidebar />
        <main>{children}</main>
      </LayoutStyles>
      <Footer />
    </>
  );
};
