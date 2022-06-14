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

    input {
        border: none;
        border-radius: 1rem;
        
        font-family: 'Roboto', sans-serif;
        font-weight: 400;

        font-size: 1.6rem;
        padding: 1.2rem;
    }

    .invisible {
        visibility: hidden;
        position: absolute;
    }
    .visible {
        visibility: initial;
        position: initial;
    }
    
    /* Modal Global Styles */
    @keyframes onModalOpen {
        0% {
            margin-top: 60rem
        }
        ;
        100% {
            margin: 0rem
        }
        ;
    }
    .overlay {
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.4);
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
    }
    .content {
        width: 100%;
        max-width: 33rem;
        padding: 3rem;
        background-color: var(--background);
        
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        
        position: relative;
        border-radius: 5px;
        animation: onModalOpen;
        animation-duration: 0.3s;
        animation-fill-mode: forwards;
        z-index: 10000;
    }
    .content p {
        text-align: center;
        font-size: 1.2rem;
    }
    .content p > b {
        color: red;
    }
    .content .closeModalImg {
        position: absolute;
        top: 20px;
        right: 20px;
        cursor: pointer;
    }
    .content .singularLogo {
        width: 10vh;
    }
    .content .title {
        text-align: center;
        font-size: 2.5rem;
    }
    
    .content form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 95%;
    }
    .content form > svg {
        position: absolute;
        width: 2rem;
        top: 1rem;
        right: 1rem;
        cursor: pointer;
    }
    
    .content input {
        width: 100%;
    }
    .content button {
        padding: 1.5rem 0;
    }
`;
