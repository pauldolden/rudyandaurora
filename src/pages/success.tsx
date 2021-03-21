import { Link } from "gatsby";
import * as React from "react";
import styled from "styled-components";
import { Layout } from "../components/Layout";

const PageStyles = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  padding: 2rem 0;

  a {
    color: var(--peach-med-dark);

    &:hover {
      color: var(--peach-dark);
    }
  }

  h1 {
    font-size: 4rem;
    padding: 3rem 0;
    color: var(--peach-med-dark);
  }
`;

const SuccessPage = () => {
  return (
    <Layout>
      <PageStyles>
        <h1>Success!</h1>
        <Link to="/"> Back to the blog &raquo;</Link>
      </PageStyles>
    </Layout>
  );
};

export default SuccessPage;
