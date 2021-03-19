import React from "react";
import { Head } from "./Head";
import { Header } from "./Header";
import styled from "styled-components";
import GlobalStyles from "../styles/globals";
import PostsSidebar from "./PostsSidebar";

const LayoutStyles = styled.section`
  display: flex;
  height: 100vh;

  main {
    display: flex;
    flex: 1;
  }
`;

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head />
      <GlobalStyles />
      <Header />
      <LayoutStyles>
        <PostsSidebar />
        <main>{children}</main>
      </LayoutStyles>
    </>
  );
};
