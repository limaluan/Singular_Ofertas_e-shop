import styled from "styled-components";

export default styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border: 1px solid var(--gray-light);

    .products-section {
        background-color: #fff;
        border-radius: 1rem;
        width: 100%;
    }

    .products-carousel {
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: auto auto auto;
        gap: 1rem;
        row-gap: 1.5rem;
        
        width: 100vw;
        padding: 1rem;
        
        font-size: 1.1rem;
        overflow-x: hidden;

        article {
            display: flex;
            flex-direction: column;
            justify-content: end;
            align-items: center;

            gap: 0.5rem;
        }
        
        img {
            width: 5rem;
            height: auto;
            object-fit: contain;
        }
        
        button {
            font-size: 1.1rem;
        }

        svg {
            display: none;
        }
    }
`;