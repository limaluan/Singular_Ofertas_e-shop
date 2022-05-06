import styled from "styled-components";

export const SectionBody = styled.article`
    width: 100%;
    height: 40rem;
    background-color: white;

    padding: 3.5rem;
    margin: 5rem auto;

    border: solid 1px var(--gray-light);
    border-radius: 10px;
    
    :hover {
        box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.3);
        transition: all 500ms;
    }
`;

export const Title = styled.h2`
    font-size: 2.5rem;
`;

export const Products = styled.section`
    width: 100%;
    height: 90%;
    margin-top: 1rem;
`;
