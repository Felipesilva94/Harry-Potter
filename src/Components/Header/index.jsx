import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './menu'
import * as S from './style'
import Logo from '../../Assets/logo.png'

export default function Header() {
    return (
        <>
        <header>
            <S.Container>
                <S.LogoBox>
                    <img src={Logo} alt="logo" title='logo' />
                    <h1>Harry Potter FS</h1>
                </S.LogoBox>
                <Menu /> 
                <S.Nav>
                    <ul>
                        <Link to='/'><li>Home</li></Link>
                        <Link to='/chars'><li>Characters</li></Link>
                    </ul>
                </S.Nav>
            </S.Container>
        </header>
        </>
    );
}