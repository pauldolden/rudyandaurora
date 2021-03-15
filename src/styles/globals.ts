import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    :root {
        // Font Families
        --header-font: "Cormorant Garamond", serif;
        --logo-font: "Great Vibes", serif;
        // Font Sizes
        --size-base: 1rem;
        --size-content-s: 1.4rem;
        --size-content: 1.6rem;
        --size-nav: 2.2rem;
        --size-subtitle: 2.6rem;
        --size-title: 3rem;
        --size-logo: 3.6rem;
        // Colours
        --peach-base: #FFCC99;
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
        background-color: var(--white-base);
    }
`;