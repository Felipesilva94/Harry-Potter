import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './style'

export default function Header() {
    return (
        <>
            <h2>header</h2>
            <Link to='/'><p>home</p></Link>
            <Link to='/chars'><p>home</p></Link>
        </>
    );
}