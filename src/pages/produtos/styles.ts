import styled from "styled-components";

export default styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h2 {
        padding: 2rem;
    }
    
    section {
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: auto auto auto;
        gap: 1rem;
        row-gap: 1.5rem;
        
        width: 100%;
        padding: 1rem;
        
        font-size: 1.1rem;

        article {
            display: flex;
            flex-direction: column;
            justify-content: end;
            align-items: center;

            gap: 0.5rem;
            position: relative;
        }
        
        img {
            width: 8rem;
            height: auto;
            object-fit: contain;
        }
        
        button {
            font-size: 1.1rem;
        }
        
        div > svg {
            display: block;
            width: 100%;
        }
        
        svg {
            display: none;
        }
    }

    svg.close {
        display: block;
        position: absolute;
        width: 2rem;
        top: 0;
        right: 0;
        filter: invert(21%) sepia(96%) saturate(4997%) hue-rotate(353deg) brightness(101%) contrast(105%);
        cursor: pointer;
        margin: 1rem;
    }

    @media (min-width: 768px) {
        section {
            font-size: 1.2rem;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            
            button {
                font-size: 1.2rem;
            }

            svg {
                display: block;
                height: 1.2rem;
            }

            > div {
                display: grid;
                place-items: center;
            }
            
            div > svg {
                display: block;
                width: 60%;
                height: 60%;
            }
        }

        svg.close {
            height: 2rem;
        }
    }

    @media (min-width: 1440px) {
       section {
           grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
           font-size: 1.6rem;
           column-gap: 1.5rem;
           padding: 0 10vw;

           img {
               width: 10rem;
           }
           
           button {
               font-size: 1.6rem;
               width: 100%;
               padding: 1rem 0;
           }
       }
    }
`;
