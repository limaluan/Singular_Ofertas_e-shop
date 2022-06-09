import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --yellow: #FFCA05;
        --background: #F0F0F5;
        --title: #13131A;
        --subtitle: #41414D;
        --text: #737380;
        --subtext: #A8A8B3;
        --gray-light: #DCDCE6;
    }

    * {
        padding: 0;
        margin: 0;
        text-decoration: none;
        list-style: none;
        box-sizing: border-box;
    }

    a {
        color: inherit;
    }
    
    html {
        font-size: 62.5%;
    }

    body {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1.6rem;
        -webkit-font-smoothing: antialiased;
    }

    button {
        border: none;
        background-color: var(--yellow);
        border-radius: 3rem;
        padding: 0.5rem;
        width: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
        color: var(--title);

        transition: filter 0.2s;
        &:hover {
            cursor: pointer;
            filter: brightness(0.9);
        }
    }
`;
