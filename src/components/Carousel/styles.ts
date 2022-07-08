import styled from "styled-components";

export default styled.section`
    width: 100%;

    img {
        width: 100%;
    }

    .rec {
        position: relative;
        margin: 0;
    }

    .rec.rec-arrow {
        position: absolute;
        right: 0;
        z-index: 999;
    }

    .rec.rec-arrow-left {
        position: absolute;
        left: 0;
    }

    button.rec-dot {
        margin-top: -10px;
        margin-left: 5px;
        bottom: 5px;

        background-color: lightgray;
    }
    
    @media (min-width: 768px) {
        max-width: 80vw;
        margin: auto;
    }
`;
