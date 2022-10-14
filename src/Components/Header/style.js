import styled from "styled-components";

export const Container = styled.section`
    max-width: 1920px;
    margin: 0 auto;
    padding: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    @media screen and (max-width:48em){
        padding: 1rem;
    }
`;

export const LogoBox = styled.div`
    display: flex;
    align-items: center;
    gap: clamp(1rem, 1.5vw, 2rem);
    
    img{
        width: 50px;
        aspect-ratio: 1;
    }

    h1{
        font-size: clamp(1rem, 1.5vw, 2rem);
        font-family: var(--ff-logo);
        font-weight: var(--fw-600);
        text-shadow: 2px 0 blueviolet, -2px 0 blueviolet, 0 2px blueviolet, 0 -2px blueviolet,
             1px 1px blueviolet, -1px -1px blueviolet, 1px -1px blueviolet, -1px 1px blueviolet;
        text-transform: uppercase;
        color: var(--cor-light);
    }

    @media screen and (max-width:48em){
        h1{
            display: none;
        }
    }
`;

export const Nav = styled.nav`

    ul{
        display: flex;
        gap: clamp(1rem, 4vw, 5rem);
        list-style: none;
    }

    a{
        text-decoration: none;
    }

    li{
        font-size: clamp(1rem, 1.4vw, 1.7rem);
        font-family: var(--ff-txt);
        font-weight: var(--fw-400);
        color: var(--cor-light);
        text-transform: uppercase;
    }

    @media screen and (max-width:48em){
        display: none;
    }
`;

export const Btn = styled.button`
    display: none;
    transform: translateY(-8px);
    border: none;
    cursor: pointer;
    position: fixed;
    z-index: 8000;
    right: 1rem;

    ::before,
    ::after{
        content: '';
        width: 40px;
        height: 4.5px;
        border-radius: 20px;
        background-color: var(--bg-light);
        transform-origin: 25px;
        transition: 0.4s all ease-in-out;
        display: block;
        position: absolute;
        right: 0;
    }

    ::before{
        top: 0.5em;
        transform: ${({open}) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    ::after{
        transform: ${({open}) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }

    @media screen and (max-width:48em){
        display: block;
    }
`;

export const MenuBG = styled.div`
    width: 5rem;
    aspect-ratio: 1;
    border-radius: 50px;
    position: fixed;
    top: 1.5rem;
    right: 1rem;
    z-index: 1000;
    transform: ${({open}) => (open ? 'scale(1000)' : 'scale(0)')};
    transition: transform 0.4s ease-in-out;
    background-image: linear-gradient( rgb(0, 0, 0, 0), rgb(0, 0, 0, 0.5) );
`;

export const Mobile = styled.nav`
    width: 90%;
    padding: 1rem 0.5rem;
    border-radius: 5px;
    display: none;
    background-color: var(--bg-dark);
    position: fixed;
    transform: ${({ open }) => (open ? 'scale(1)' : 'scale(0)')};
    transition: transform 0.3s ease-in-out;
    top: 12%;
    left: 5%;
    z-index: 2000;

    ul{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
        list-style: none;
    }

    li{
        padding: .5rem .5rem .5rem 0;
        font-family: var(--ff-txt);
        font-size: clamp(1rem, 1.05vw, 1.5rem);
        font-weight: var(--fw-400);
        color: var(--cor-light);
        text-transform: uppercase;
        transition: none;
        text-align: center;
    }

    a{
        width: 100%;
        border-radius: 5px;
        transition: none;
        text-decoration: none;
    }

    a:hover, 
    a:focus{
        background-color: var(--bg-light);
    }

    a:hover li, 
    a:focus li{
        font-weight: var(--fw-600);
        color: var(--cor-dark);
    }

    @media screen and (max-width:48em){
        display: block;
    }
`;