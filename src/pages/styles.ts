import styled from "styled-components";

export default styled.main`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .add-section {
        background-color: var(--gray-light);
        border: 3px dashed var(--subtext);
        border-radius: 1.5rem;
        
        color: var(--text);
        
        position: relative;
        padding: 1rem;

        display: grid;
        place-items: center;
        
        svg {
            width: 5rem;
            filter: invert(46%) sepia(13%) saturate(306%) hue-rotate(201deg) brightness(94%) contrast(87%);
            cursor: pointer;
        }
    }

    @media (min-width: 768px) {
        .add-section {
            width: 80vw;
            margin: auto;
        }
    }
`;
