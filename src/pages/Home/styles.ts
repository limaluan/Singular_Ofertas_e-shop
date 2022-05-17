import styled from "styled-components";

export const Container = styled.main`
    width: 80vw;
    margin: auto;
    
    div {
        position: relative;
    }
    
    img {
        display:block;
        width: 100%;
        margin: auto;

        cursor: pointer;
    }

    svg {
        min-width: 2.5rem;
        width: 3vw;
        cursor: pointer;
        
        position: absolute;
        top: 1%;
        right: 1%;
    }
`;
