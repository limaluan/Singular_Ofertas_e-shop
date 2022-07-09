import styled from "styled-components";

export default styled.main`
    > h2 {
        text-align: center;
        padding: 1rem 0;
    }

    ul {
        width: 100%;
        overflow: hidden;
    }

    li {
        display: flex;
        padding: 1rem 0;

        div {
            padding-left: 1rem;
            
            h2 {
                font-size: 1.5rem;
            }

            h3 {
                font-size: 1.2rem;
            }
        }
    }
    
    img {
        height: 8rem;
        width: 8rem;
        object-fit: contain
    }

    hr {
        width: 80%;
        margin: auto;
    }
`;
