import styled from "styled-components";

export default styled.main`
    height: max-content;
    margin-bottom: 10rem;

    > h2 {
        text-align: center;
        padding: 1rem 0;
    }

    ul {
        width: 100%;
        overflow: hidden;
    }

    li {
        display: flex;
        justify-content: flex-start;
        padding: 1rem 0;
        max-width: 80vw;
        margin: auto;

        div {
            padding-left: 1rem;
            position: relative;

            h2 {
                font-size: 1.5rem;
            }

            h3 {
                font-size: 1.3rem;
                padding-top: 1rem;
            }
        }
    }
    
    p {
        text-decoration: underline;
    }
    
    .buttons {
        padding: 0;
        display: flex;
        width: 8rem;

        button {
            margin: 0;
            margin: 1rem 0;
        }
    }
    
    img {
        height: 8rem;
        width: 8rem;
        object-fit: contain;
    }

    hr {
        width: 80%;
        margin: auto;
    }

    button {
        padding: 1rem 0; 
        max-width: 80%;
        margin: 2rem auto;
        margin-bottom: 5rem;
    }
    
    svg {
        height: 1.3rem;
    }

    p {
        text-align: center;
    }
    
    @media (min-width: 768px) {
        ul {
            max-width: 40vw;
            margin: auto;
        }

        ul + button {
            max-width: 40vw;
        }
        
        hr {
            width: 100%;
        }
    }
`;
