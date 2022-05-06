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

    html {
        font-size: 62.5%;
    }
    
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        list-style: none;
    }

    body {
        background-color: var(--background);
        -webkit-font-smoothing: antialiased;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }

    input, textarea {
        background-color: #FFFFFF;
        
        border: 1px solid var(--gray-light);
        border-radius: 8px;
        padding: 1.8rem 0 1.8rem 2.3rem;
        color: var(--subtitle);
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1.6rem;
        resize: none;
    }

    button {
        font-size: 1.6rem;
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        color: var(--title);
        border: none;
        border-radius: 8px;
        padding: 1.8rem 0;
        
        background-color: var(--yellow);
        transition: filter 0.2s;
        &:hover {
            cursor: pointer;
            filter: brightness(0.9);
        }
    }
`;
