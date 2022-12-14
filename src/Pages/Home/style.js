import styled from "styled-components";

export const Container = styled.section`
    max-width: 1920px;
    min-height: 75vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2{
        font-size: clamp(2rem, 3vw, 4rem);
        font-family: var(--ff-logo);
        font-weight: var(--fw-600);
        text-transform: uppercase;
        text-shadow: 2px 0 blueviolet, -2px 0 blueviolet, 0 2px blueviolet, 0 -2px blueviolet,
             1px 1px blueviolet, -1px -1px blueviolet, 1px -1px blueviolet, -1px 1px blueviolet;
        color: var(--cor-light);
    }

    p{
        font-size: clamp(1rem, 1.5vw, 2rem);
        font-family: var(--ff-logo);
        font-weight: var(--fw-600);
        text-transform: uppercase;
        text-shadow: 2px 0 blueviolet, -2px 0 blueviolet, 0 2px blueviolet, 0 -2px blueviolet,
             1px 1px blueviolet, -1px -1px blueviolet, 1px -1px blueviolet, -1px 1px blueviolet;
        color: var(--cor-light);
    }
`;