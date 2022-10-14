import React from 'react';
import Logo from '../../Assets/logo.png'
import Linkedin from '../../Assets/linkedin.png'
import Github from '../../Assets/github.png'
import * as S from './style'

export default function Footer() {
    return (
        <>
        <footer>
            <S.Container>
                <img src={Logo} alt='Logo' title='Logo' />
                <S.SocialBox>
                    <a href='https://www.linkedin.com/in/felipesilva94/' target='_blank' rel="noreferrer"><img src={Linkedin} alt='Linkedin' title='Linkedin' /></a>
                    <a href='https://github.com/Felipesilva94' target='_blank' rel="noreferrer"><img src={Github} alt='Github' title='Github' /></a>
                </S.SocialBox>
            </S.Container>
        </footer>
        </>
    );
}