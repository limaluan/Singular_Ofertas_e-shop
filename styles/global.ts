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
        font-weight: bold;
    }
    
    html {
        font-size: 62.5%;
    }

    body {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1.6rem;
        background-color: var(--background);
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
        text-align: center;
        
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
    .content svg {
        position: absolute;
        right: 3rem;
        top: 3rem;
        cursor: pointer;
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

    .content .products-available {
        display: grid;
        grid-gap: 1rem;
        padding: 0.5rem;
        grid-template-columns: repeat(auto-fill,minmax(100px,1fr));
        grid-auto-flow: column;
        grid-auto-columns: minmax(100px,1fr);
        overflow-x: auto;

        border: 1px solid var(--gray-light);
        border-radius: 0.5rem;
        background-color: #fff;

        .item {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            position: relative;
            
            border: 1px solid var(--gray-light);
            cursor: pointer;
            
            width: 100%;
            height: 100%;
            gap: 0.5rem;

            svg {
                position: absolute;
                width: 1.5rem;
                right: 0;
                top: 0;
            }
            
            img {
                width: 5rem;
                object-fit: cover;
            }

            h3 {
                font-size: 1.2rem;
            }

            h4 {
                font-size: 1.1rem;
            }
        }
    }

    section svg.close,
    article svg.close {
        display: block;
        position: absolute;
        width: 2rem;
        top: 0;
        right: 0;
        filter: invert(21%) sepia(96%) saturate(4997%) hue-rotate(353deg) brightness(101%) contrast(105%);
        cursor: pointer;
        margin: 1rem;
    }
    
    @media (min-width: 768px) {
        .content {
            max-width: 30vw;
        }

        section svg.close,
        article svg.close {
            height: 2rem;
        }
    }
`;
