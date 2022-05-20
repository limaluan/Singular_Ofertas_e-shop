import styled from "styled-components";

export const HeaderContainer = styled.header`
    background-color: var(--yellow);
    width: 100%;
    height: 17rem;

    display: flex;
    flex-direction: column;
    
    img {
        width: 25rem;
        cursor: pointer;
    }
`;

export const Container = styled.div`
    width: 80vw;
    max-height: 12rem;
    margin: auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const User = styled.div`
    display: flex;
    align-items: center;

    p {
        font-size: 1.3rem;
        margin-right: 1rem;
    }

    b {
        cursor: pointer;
    }
    
    img {
        width: 5rem;
        margin-right: 1rem;

        border-radius: 30px;
    }

    button {
        padding: 0.2rem 0.5rem;
        font-size: 1.5rem;
        background-color: var(--background);
    }
`;

export const BarMenu = styled.nav`
    width: 100%;
    height: 5rem;
    background-color: var(--gray-light);

    ul {
        display: flex;
        justify-content: space-around;
        align-items: center;

        width: 60vw;
        height: 100%;
        margin: auto;
        
        font-weight: 500;
        font-size: 1.6rem;
        
        li {
            cursor: pointer;
        }
    }
`;
