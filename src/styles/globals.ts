import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    :root {
        // Font Families
        --header-font: "Cormorant Garamond", serif;
        --logo-font: "Great Vibes", serif;
        --body-font: "Merriweather", sans-serif;
        // Font Sizes
        --size-base: 1rem;
        --size-content-s: 1.4rem;
        --size-content: 1.6rem;
        --size-nav: 2.2rem;
        --size-subtitle: 2.6rem;
        --size-title: 4.5rem;
        --size-logo: 5rem;
        // Colours
        --peach-light: #FFFFCC;
        --peach-med-light: #FFE6B3;
        --peach-base: #FFCC99;
        --peach-med-dark: #E6B380;
        --peach-dark: #CC9966;
        --lilac-base: #CC99FF;
        --teal-base: #99FFCC;
        --white-base: #FFF7ED;
        --black-base: #37323E;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
    }

    html {
        font-size: 62.50%;
    }

    body {
        font-size: var(--size-content);
        color: var(--black-base);
        background-color: var(--white-base);
        font-family: var(--body-font);
    }

    .img-cont img {
        width: 100%;
        display: block;
    }
    .image-section {
        display: flex;
        padding-top: 2rem;
    }
    .image-section > .img-cont {
        padding: 0 5rem;
        width: 50%;
    }

    .content p {
        padding-bottom: 1rem;
        line-height: 1.8;
    }
`;
