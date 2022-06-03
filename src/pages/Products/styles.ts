import styled from "styled-components";

// Refatorar!
export const SectionBody = styled.article`
    width: 100%;
    background-color: white;

    padding: 5.5rem 13rem;

    border: solid 1px var(--gray-light);
    border-radius: 10px;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    
    > h2 {
        font-size: 2.5rem;
        margin-bottom: 4rem;
    }
    
    :hover {
        box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.3);
        transition: all 500ms;
    }
`;

export const ProductsSection = styled.section`
    width: 100%;
    margin-top: 2rem;

    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 25% 25% 25% 25%;

    row-gap: 6rem;
    column-gap: 1rem;
`;

export const Item = styled.div`
    width: 100%;
    
    display: flex;
    flex-direction: column;
    position: relative;
    
    justify-content: flex-end;

    img {
        max-width: 100%;
        max-height: 25rem;
        object-fit: contain;
    }
    
    > svg {
        width: 10%;
        position: absolute;
        top: 1rem;
        right: 1rem;
        filter: invert(27%) sepia(86%) saturate(7019%) hue-rotate(355deg) brightness(105%) contrast(121%);

        :hover {
            cursor: pointer;
            transform: scale(1.2);
        }
    }

    div {
        display: flex;

        flex-direction: column;
        align-items: center;
        
        h2 {
            font-size: 2rem;
        }

        h3 {
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
        }

        h2:hover, h3:hover {
            cursor: pointer;
        }
    }

    button {
        display: flex;
        justify-content: center;
        
        svg {
            width: 2rem;
            margin-right: 0.5rem;
        }
    }
`;

export const AddProduct = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;

    width: 100%;
    
    :hover {
        transform: scale(1.1);
        transition: all 200ms;

        text-decoration: underline;
    }
    
    svg {
        width: 50%;
    }

    svg, h2 {
        cursor: pointer;
    }
`;
