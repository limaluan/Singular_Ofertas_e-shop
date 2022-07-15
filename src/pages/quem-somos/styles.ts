import styled from "styled-components";

export default styled.main`
    margin: auto;
    padding: 0.5rem;

    h1 {
        margin: 2rem 0;
        color: var(--title);
    }
    
    section {
        max-width: 100%;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    article {
        display: flex;
        gap: 1rem;
        align-items: center;
    }
    
    img {
        width: 25%;
        height: 25%;
    }

    p {
        padding-top: 0.5rem;
        font-size: 1.2rem;
        color: var(--subtitle);
    }

    a {
        text-decoration: underline;
    }
    
    .contact {
        display: flex;
        gap: 1rem;
        align-items: center;
        justify-content: center;

        margin-top: 2rem;
        margin-bottom: -3rem;
        cursor: pointer;
    }
    
    svg {
        width: 10%;
    }

    @media (min-width: 768px) {
        padding: 0;
        max-width: 80vw;
        
        .contact {
            width: max-content;
            margin-left: auto;
            margin-right: auto;
        }
        
        p {
            font-size: 1.6rem;
        }

        img {
            width: 10%;
        }

        h4 {
            font-size: 2rem;
        }
        
        svg {
            width: 5rem;
        }
    }
`;
