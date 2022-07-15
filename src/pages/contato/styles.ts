import styled from "styled-components";

export default styled.main`
    margin: auto;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;

    h1 {
        margin: 2rem 0;
        color: var(--title);
        font-size: 2.5rem;
        text-align: center;
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

    .email {
        display: flex;
        align-items: center;
        gap: 0.3rem;

        svg {
            width: 1.8rem;
        }
    }
    
    .social {
        text-align: center;
        display: flex;
        align-items: center;
        
        a {
            width: 16rem;
            height: 4.5rem;
        }
        
        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
    
    @media (min-width: 768px) {
        padding: 0;
        max-width: 50vw;
        align-items: center;
        
        .social {
            width: max-content;
            margin: auto;
        }
        
        p {
            font-size: 1.6rem;
        }

        img {
            width: 15%;
        }

        h4 {
            font-size: 2rem;
        }
    }
`;
