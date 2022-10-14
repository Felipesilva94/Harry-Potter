import styled from "styled-components";

export const Container = styled.section`
    max-width: 1920px;
    margin: 0 auto;
    padding: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img{
        width: 50px;
        aspect-ratio: 1;
    }

    @media screen and (max-width:30em){
        gap: 1rem;
        flex-direction: column;
    }
`;

export const SocialBox = styled.nav`
    display: flex;
    gap: clamp(1rem, 1.5vw, 2rem);
`;