import * as React from "react";
import styled from "styled-components";
import { Layout } from "../components/Layout";
import { useFetchContactPageContent } from "../graphql/useFetchContactPageContent";

interface Paragraph {
  text: string;
}

const PageStyles = styled.section`
  padding: 5rem 10%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    background-color: var(--peach-base);
    padding: 2rem;
    display: flex;
    flex-direction: column;
    margin: 5rem 0;
    width: 100%;

    @media (max-width: 1300px) {
      width: 100%;
    }

    button {
      font-family: var(--logo-font);
      padding: 1rem 2rem;
      cursor: pointer;
      font-size: 2rem;
      background-color: var(--peach-med-dark);
      color: var(--black-base);
      border: none;
    }

    textarea,
    input {
      background-color: var(--black-base);
      border: none;
      padding: 1rem;
      margin: 1rem 0;
      background-color: var(--black-base);
      color: var(--peach-base);
      font-family: var(--header-font);
      font-size: var(--size-content);

      &::placeholder {
        color: var(--peach-base);
        font-family: var(--header-font);
        font-size: var(--size-content);
      }
    }

    textarea {
      resize: none;
      height: 20rem;
    }
  }

  h1 {
    font-size: var(--size-title);
    font-family: var(--logo-font);
    color: var(--peach-med-dark);
    padding-bottom: 3rem;
    text-align: center;
  }
`;

const Contact = () => {
  const content = useFetchContactPageContent();
  const data = content.prismicContactPageContent.data;
  return (
    <Layout title="Contact">
      <PageStyles>
        <h1>{data.page_title.text}</h1>
        <div className="content">
          <p>{data.page_text.text}</p>
        </div>
        <form
          name="Contact"
          method="POST"
          netlify-honeypot="bot-field"
          data-netlify="true"
          action="/success"
        >
          <input type="hidden" name="form-name" value="Contact" />
          <input type="hidden" name="bot-field" />
          <input placeholder="Name" type="text" name="name" />
          <input placeholder="Email" type="email" name="email" />
          <textarea placeholder="Message" name="message" />
          <button type="submit">Send</button>
        </form>
      </PageStyles>
    </Layout>
  );
};

export default Contact;
