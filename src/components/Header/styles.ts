import styled from "styled-components";

export const HeaderContainer = styled.header`
    background-color: var(--yellow);
    width: 100vw;
    height: 17rem;

    display: flex;
    flex-direction: column;
    
    .logo {
        width: 25rem;
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
    /* background-color: green; */
    
    .avatar {
        width: 5rem;
        margin-right: 1rem;
    }
`;

export const BarMenu = styled.nav`
    width: 100vw;
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
        font-size: 1.4rem;
        
        li {
            cursor: pointer;
        }
    }
`;
