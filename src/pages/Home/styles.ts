import styled from "styled-components";

export const Container = styled.main`
    width: 80vw;
    height: 100%;
    margin: auto;

    > section {
        position: relative;

        > img {
        display:block;
        width: 100%;
        margin: auto;

        cursor: pointer;
        }
        
        > svg {
        min-width: 2.5rem;
        width: 3vw;
        cursor: pointer;
        
        position: absolute;
        top: 1%;
        right: 1%;
        }
    }

    .addSection {
        border: 1rem dashed var(--subtext);
        border-radius: 30px;
        background-color: var(--gray-light);

        width: 100%;
        height: 35rem;
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        margin: 4rem 0;

        button {
            background: none;
            padding: 0;
            margin: 0;

            width: 20%;
            
            :hover {
                text-decoration: underline;
            }
            
            h2 {
                font-size: 3rem;
                color: var(--text);
            }

            svg {
                width: 50%;
                filter: invert(46%) sepia(8%) saturate(504%) hue-rotate(202deg) brightness(96%) contrast(85%);
            }
        }
    }
`;
