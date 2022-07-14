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
    z-index: 1000;
    
    .cart {
        filter: invert(97%) sepia(0%) saturate(11%) hue-rotate(213deg) brightness(102%) contrast(106%);
        position: absolute;
        top: 1rem;
        left: 1rem;
        height: 2rem;
    }
    
    .logoImg {
        cursor: pointer;
        height: 80%;
    }
    
    .user-area {
        justify-content: center;
        align-items: center;

        color: var(--background);

        img {
            width: 4.5rem;
            height: 4.5rem;
            border-radius: 3rem;
            
            margin-right: 1rem;
            object-fit: cover;
            cursor: pointer;
        }
    }
    
    .user-area.on {
        display: flex;
        position: absolute;
        z-index: 1;
        width: 100%;
        
        svg {
            display: none;
        }
    }
    
    .user {
        display: none;
        justify-content: center;
        align-items: center;

        color: var(--background);

        img {
            width: 4.5rem;
            height: 4.5rem;
            border-radius: 3rem;
            
            margin-right: 1rem;
            object-fit: cover;
            cursor: pointer;
        }
    }
    
    .user.on {
        display: flex;
        position: absolute;
        z-index: 1;
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

        padding-top: 1rem;
        gap: 1rem;
        text-align: center;
        color: var(--background);
        
        width: 100vw;
        height: 100vh;
        transform: translateY(42.5vh);
        background-color: var(--yellow);
    }

    .nav-menu ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        height: 75%;
    }
    
    a {
        font-weight: bold;
    }
    
    .menu-mobile-icon {
        position: absolute;
        top: 1rem;
        right: 1rem;

        display: flex;
        flex-direction: column;
        gap: 3px;

        z-index: 10;

        :hover {
            cursor: pointer;
        }
    }
    
    [class^='bar'] {
        width: 25px;
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

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 15vh 5vh;
        grid-template-areas: 'logo user'
                             'nav nav';
        height: 20vh;
        width: 100%;
        
        .user-area {
            display: flex;
            justify-content: end;
            width: 80%;
            align-items: center;
        }
        
        .cart {
            position: static;
            cursor: pointer;
        }
        
        .logoImg {
            grid-area: logo;
            padding-left: 10vw;
        }
        
        .user {
            grid-area: user;
            justify-content: right;
            
            display: flex;
            font-size: 1.3rem;
            padding-right: 2vw;
        }

        .nav-menu {
            position: initial;
            max-width: 100%;
            height: 100%;
            
            grid-area: nav;
            display: flex;
            justify-content: center;
            align-items: center;
            
            font-size: 1.6rem;
            background-color: var(--gray-light);
        }

        .nav-menu ul {
            flex-direction: row;
            align-items: center;
            gap: 3.5rem;
        }
        
        .menu-mobile-icon {
            display: none;
        }
    }
`;
