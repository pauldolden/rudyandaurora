import * as React from "react";
import styled from "styled-components";
import { Layout } from "../components/Layout";
import { useFetchContactPageContent } from "../graphql/useFetchContactPageContent";
import { Formik, Form, Field } from "formik";

interface Paragraph {
  text: string;
}

const PageStyles = styled.section`
  padding: 5rem 10%;
  flex: 1;

  form {
    margin: 2rem 0;
    background-color: var(--peach-base);
    padding: 2rem;
    width: 90%;
    margin: 2rem auto;
    display: flex;
    flex-direction: column;

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
  const text = data.page_text.map((para: Paragraph) => {
    return <p key={para.text + Math.ceil(Math.random() * 100)}>{para.text}</p>;
  });
  return (
    <Layout>
      <PageStyles>
        <h1>{data.page_title[0].text}</h1>
        <div className="content">{text}</div>
        <form name="contact" data-netlify="true">
          <input placeholder="Name" name="name" />
          <input placeholder="Email" name="email" />
          <textarea placeholder="Message" name="message" />
          <button type="submit">Send</button>
        </form>
      </PageStyles>
    </Layout>
  );
};

export default Contact;
