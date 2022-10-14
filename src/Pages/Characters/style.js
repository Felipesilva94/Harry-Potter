import styled from "styled-components";
import Border from '../../Assets/border.png'

export const Container = styled.section`
    max-width: 1920px;
    margin: 0 auto;
    padding: 2rem 0.5rem;

    @media screen and (max-width:45em){
        padding: 1rem 0.5rem;
    }
`;

export const Wrapper = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    padding-block: 2rem;
    display: flex;
    flex-wrap: wrap;
    row-gap: 1rem;
    position: relative;

    ::before{
        content: '';
        position: absolute;
        inset: 0;
        background-color: var(--bg-light);
        filter: blur(10px);
        opacity: 0.7;
    }

    @media screen and (max-width:45em){
        width: 100%;
        padding-block: 1rem;

        ::before{
        filter: blur(200px);
        opacity: 0.5;
    }
    }
`;

export const CharBox = styled.div`
    width: 40%;
    margin: 0 auto;
    border: 20px solid;
    border-image-source: url(${Border});
    border-image-slice: 60;
    border-image-repeat: stretch stretch;
    overflow: hidden;
    position: relative;

    @media screen and (max-width:45em){
        width: 80%;
    }

    img{
        width: 100%;
        min-height: 100%;
    }

    div{
        width: 100%;
        padding-block: 0.2rem 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        transition: transform 0.3s ease-in-out;
        transform: translateY(70%);
        position: absolute;
        z-index: 50;
        bottom: 0;
    }

    img:hover ~ div,
    img:focus ~ div{
        transform: translateY(0);
    }
    
    @media screen and (max-width:45em){
        
        div{
            padding-block: 0.2rem;
        }
    }

    div::before{
        content: '';
        position: absolute;
        inset: 0;
        z-index: -1;
        background-color: var(--bg-dark);
        opacity: 0.7;
    }

    h2{
        font-family: var(--ff-logo);
        font-size: clamp(1rem, 2vw, 2rem);
        color: var(--cor-light);
        text-shadow: 2px 0 blueviolet, -2px 0 blueviolet, 0 2px blueviolet, 0 -2px blueviolet,
             1px 1px blueviolet, -1px -1px blueviolet, 1px -1px blueviolet, -1px 1px blueviolet;
        text-align: center;
    }

    p{
        font-family: var(--ff-txt);
        font-size: clamp(0.8rem, 1.2vw, 1.5rem);
        font-weight: var(--fw-400);
        color: var(--cor-light);
        text-align: center;
    }

    span{
        font-family: var(--ff-logo);     
        font-weight: var(--fw-600);
    }
`;