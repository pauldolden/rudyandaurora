import * as React from "react";
import styled from "styled-components";
import { Layout } from "../components/Layout";

const PageStyles = styled.section``;

const NotFound = () => {
  return (
    <Layout title="404">
      <PageStyles>Sorry, there doesn't seem to be a page there.</PageStyles>
    </Layout>
  );
};

export default NotFound;
