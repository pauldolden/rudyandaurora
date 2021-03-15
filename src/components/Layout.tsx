import React from "react";
import { Head } from "./Head";
import { Header } from "./Header";
import styled from "styled-components";
import GlobalStyles from "../styles/globals";

const LayoutStyles = styled.main``;

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head />
      <GlobalStyles />
      <Header />
      <LayoutStyles>{children}</LayoutStyles>
    </>
  );
};
