import styled from "styled-components";

export const Container = styled.header`
    width: 100vw;
    height: 15vh;
    background-color: var(--yellow);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    position: relative;
    
    .logoImg {
        height: 80%;
    }

    .user {
        display: none;
    }
    
    .user.on {
        display: flex;
        justify-content: center;
        align-items: center;
        
        position: absolute;
        z-index: 1;

        color: var(--background);

        img {
            width: 4.5rem;
            height: 4.5rem;
            border-radius: 3rem;
            
            margin-right: 1rem;
            object-fit: cover;
        }
    }
    
    .nav-menu {
        position: absolute;
        display: none;
    }
    
    .nav-menu.on {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        gap: 1rem;
        text-align: center;
        color: var(--background);
        
        width: 100vw;
        height: 100vh;
        transform: translateY(42.5vh);
        background-color: var(--yellow);
    }

    .nav-menu.on ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        height: 75%;
    }
    
    .menu-mobile-icon {
        position: absolute;
        top: 1rem;
        right: 1rem;

        display: flex;
        flex-direction: column;
        gap: 3px;

        z-index: 10;
    }
    
    [class^='bar'] {
        width: 20px;
        height: 2px;
        background-color: #fff;

        transition-duration: 0.3s;
    }

    .bar-one.on {
        transform: rotate(45deg) translate(6px, 6px);
    }

    .bar-two.on {
        opacity: 0;
    }
    
    .bar-three.on {
        transform: rotate(-45deg) translate(1px,-1px);
    }
`;
