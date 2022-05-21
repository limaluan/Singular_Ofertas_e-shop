import styled from "styled-components";

// Refatorar!
export const SectionBody = styled.article`
    width: 100%;
    background-color: white;

    padding: 3.5rem 11rem;;
    margin: 5rem auto;

    border: solid 1px var(--gray-light);
    border-radius: 10px;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    
    > h2 {
        font-size: 2.5rem;
    }
    
    :hover {
        box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.3);
        transition: all 500ms;
    }
`;

export const Products = styled.section`
    width: 100%;
    margin-top: 2rem;

    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 25% 25% 25% 25%;

    row-gap: 10px;
    column-gap: 10px;
`;

export const Item = styled.div`
    width: 100%;
    
    display: flex;
    flex-direction: column;
    position: relative;
    
    svg {
        width: 10%;
        position: absolute;
        right: 1rem;

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
        }

        h2:hover, h3:hover {
            cursor: pointer;
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
