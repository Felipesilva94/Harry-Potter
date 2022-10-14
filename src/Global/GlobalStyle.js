import { createGlobalStyle } from "styled-components";
import Background from '../Assets/wpp-body.jpg'

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    *::before,
    *::after{
        box-sizing: border-box;
    }

    :root{
        --ff-logo: 'Lemonada', cursive;
        --ff-txt: 'Montserrat', sans-serif;
        --cor-light: #FFFFFF;
        --cor-dark: #000000;
        --bg-light: #FFFFFF;
        --bg-dark: #000000;
        --fw-600: 600;
        --fw-400: 400;
    }

    body{
        min-height: 100vh;
        text-rendering: optimizeSpeed;
        background-image: url(${Background});
    }

    img,
    picture{
        max-width: 100%;
        display: block;
    }

    input,
    button,
    textarea,
    select{
        font: inherit;
    }
`;