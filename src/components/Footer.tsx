import React from "react";
import styled from "styled-components";

const FooterStyles = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: var(--black-base);

  h2 {
    font-size: var(--size-content);
    padding-right: 3rem;
  }

  input.button {
    border-radius: 7px;
    font-family: var(--logo-font);
    padding: 1rem 2rem;
    cursor: pointer;
    font-size: 2rem;
    background-color: var(--white-base);
    color: var(--black-base);
    border: 2px solid var(--black-base);
  }

  input {
    border-radius: 5px;
    padding: 1rem 1rem;
    outline: none;
    border: none;
    margin: 0 1rem;
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

  .mc-field-group,
  form {
    display: flex;
    align-items: center;
  }

  .footer-top {
    background-color: var(--peach-base);
    display: flex;
    justify-content: center;
    padding: 2rem 15%;
    width: 100%;
    border-top: 1px solid var(--peach-med-dark);
  }

  .footer-main {
    padding: 2rem 15%;
    width: 100%;
    background-color: var(--peach-med-dark);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a {
    color: var(--black-base);
    font-weight: 700;
  }
`;

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <FooterStyles>
      <section className="footer-top">
        <div id="mc_embed_signup">
          <form
            action="https://rudyandaurora.us1.list-manage.com/subscribe/post?u=f4a0aff6b728cb2ee606c5453&amp;id=96356e4060"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
            noValidate
          >
            <h2>Subscribe To My Mailing List</h2>
            <div className="mc-field-group">
              <input
                type="text"
                name="MMERGE1"
                className=""
                id="mce-MMERGE1"
                placeholder="Name"
              />
            </div>
            <div className="mc-field-group">
              <input
                type="email"
                name="EMAIL"
                className="required email"
                id="mce-EMAIL"
                placeholder="Email"
              />
            </div>
            <div id="mce-responses" className="clear">
              <div
                className="response"
                id="mce-error-response"
                style={{ display: "none" }}
              ></div>
              <div
                className="response"
                id="mce-success-response"
                style={{ display: "none" }}
              ></div>
            </div>
            <div hidden aria-hidden="true">
              <input
                type="text"
                name="b_f4a0aff6b728cb2ee606c5453_96356e4060"
                value=""
              />
            </div>
            <div className="clear">
              <input
                type="submit"
                value="Subscribe"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="button"
              />
            </div>
          </form>
        </div>
      </section>
      <section className="footer-main">
        Made with 🧡 by &nbsp;<a href="https://dolden.dev">Paul Dolden</a>
      </section>
    </FooterStyles>
  );
};
