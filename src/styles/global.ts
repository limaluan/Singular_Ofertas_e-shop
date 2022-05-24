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
        text-decoration: none;

        a {
            color: var(--title);
        }
    }
    
    body {
        background-color: var(--background);
        -webkit-font-smoothing: antialiased;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;

        width: 100%;
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

    /* Modal Global Style */
    
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
    }

    .content {
        width: 100%;
        max-width: 33rem;
        padding: 3rem;

        background-color: var(--background);

        display: flex;
        flex-direction: column;
        align-items: center;

        position: relative;
        border-radius: 5px;

        animation: onModalOpen;
        animation-duration: 0.3s;
        animation-fill-mode: forwards;
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
        margin: 10px 0px;
    }

    .content .title {
        text-align: center;
        font-size: 2.5rem;
        margin: 10px 0px;
    }
    
    .content form {
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;

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
        margin-bottom: 5px;
    }

    .content button {
        margin: 5px 0px;
        padding: 1.5rem 0;
    }

    .content .switchLogin {
        margin-top: 10px;
        text-align: center;
        font-size: 1.2rem;
    }

    .invisible {
        visibility: hidden;
        position: absolute;
    }

    .visible {
        visibility: initial;
        position: initial;
    }
`;
