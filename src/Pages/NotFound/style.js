import styled from "styled-components";

export const Container = styled.section`
    max-width: 1920px;
    min-height: 74vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: clamp(1rem, 2vw, 2.5rem);

    h2{
        font-size: clamp(2.5rem, 4vw, 5rem);
        font-family: var(--ff-logo);
        line-height: 1;
        color: red;
    }

    p{
        font-size: clamp(1rem, 2vw, 3rem);
        font-family: var(--ff-txt);
        font-weight: var(--fw-600);
        color: red;
    }

    button{
        padding: 0.5em 1em;
        border-radius: 10px;
        font-family: var(--ff-txt);
        font-weight: var(--fw-600);
        background-color: var(--bg-light);
        color: red;
        cursor: pointer;
        border: none;
    }

    button:hover,
    button:focus{
        background-color: red;
        color: var(--cor-light);

    }
`;