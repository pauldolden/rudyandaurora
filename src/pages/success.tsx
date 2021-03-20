import * as React from "react";
import styled from "styled-components";
import { Layout } from "../components/Layout";

const PageStyles = styled.section`
  display: flex;
  justify-content: center;
  flex: 1;
  padding: 2rem 0;

  h1 {
    font-size: 4rem;
    padding: 3rem 0;
  }
`;

const SuccessPage = () => {
  return (
    <Layout>
      <PageStyles>
        <h1>Success! Thanks for subscribing to my blog.</h1>
      </PageStyles>
    </Layout>
  );
};

export default SuccessPage;
