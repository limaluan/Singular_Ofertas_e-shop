import styled from "styled-components";

export const Container = styled.footer`
    height: fit-content;
    width: 100%;
    background-color: var(--yellow);

    display: flex;
    flex-direction: column;
    align-items: center;

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
`;

export const PaymentMethods = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20%;

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
`;

export const FooterMenu = styled.div`
    display: flex;
    justify-content: space-around;
    width: 30%;
    
    padding: 2rem 0;

    h3 {
        font-size: 1.5rem;
    }

    li {
        font-size: 1.2rem;
    }
    
`;
