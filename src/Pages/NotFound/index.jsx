import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './style'

export default function NotFound() {
    return (
        <>
        <main>
            <S.Container>
                <h2>Error 404</h2>
                <p>Desculpe o transtorno ¯\_(ツ)_/¯</p>
                <Link to='/'><button>Voltar a Home</button></Link>
            </S.Container>
        </main>
        </>
    );
}