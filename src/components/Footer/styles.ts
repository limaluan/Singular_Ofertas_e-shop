import styled from "styled-components";

export default styled.footer`
    height: fit-content;
    width: 100%;
    background-color: var(--yellow);
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    margin-top: 5rem;
    
    hr {
        width: 80%;
        color: white;
        border: 1px white solid;
    }
    
    p {
        font-size: 1.3rem;
        margin-bottom: 1rem;
    }

    .payment-methods {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;

        ul {
            display: flex;
            width: 90%;
            justify-content: space-between;
        }
            
        h3 {
            margin: 1rem;
            font-size: 1.8rem;
        }

        li {
            img {
                width: 4.5rem;
            }
        }
    }

    .footer-menu {
        display: flex;
        justify-content: space-around;
        width: 100%;
        
        padding: 2rem 0;

        h3 {
            font-size: 1.5rem;
        }

        li {
            font-size: 1.2rem;
        }
    }

    @media (min-width: 768px) {
        .payment-methods {
            max-width: 40vw;
        }
        
        .footer-menu {
            max-width: 40vw;
        }
    }
`;
