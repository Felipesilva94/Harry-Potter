import React, {useState, useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import * as S from "./style";

export default function Menu(){

    const [open, setOpen] = useState (false)
    const btnRef = useRef()

    const toggleMenu = () => {
        setOpen(!open)
    }

    useEffect (() => {

        const closeMenu = e => {
            if(e.path[0] !== btnRef.current){
              setOpen(!true)
            }
          };

          document.body.addEventListener('click', closeMenu);
          return () => document.body.removeEventListener('click', closeMenu);
    }, [open]);

    return (
        <>
        <S.Btn open={open} ref={btnRef} onClick={() => {toggleMenu()}}></S.Btn>
        <S.MenuBG open={open}></S.MenuBG>
        <S.Mobile open={open} >
            <ul>
                <Link to='/'><li>Home</li></Link>
                <Link to='/chars'><li>Characters</li></Link>
            </ul>
        </S.Mobile>
        </>
    );
}