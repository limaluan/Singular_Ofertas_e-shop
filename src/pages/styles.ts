import styled from "styled-components";

export default styled.main`
    .banners {
        position: relative;
        overflow: hidden;
        display: grid;
        place-items: center;

        button {
            width: auto;
            position: absolute;
            color: white;
            opacity: 0.3;
            background-color: rgba(0,0,0,0.6);
            z-index: 1;
        }

        button:hover,
        button:focus {
            opacity: 1;
            transition: all 200ms;
        }

        [class^=prev] {
            left: 1rem;
        }

        [class^=next] {
            right: 1rem;
        }
    }

    #banners-content {
        display: flex;
        transition: all 1s;
    }

    .banners img {
        width: 100vw;
    }

    @media (min-width: 768px) {
        .banners {
            max-width: 90vw;
            margin: auto;
        }
    }
`;
