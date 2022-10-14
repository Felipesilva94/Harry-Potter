import React, {useState, useEffect} from 'react';
import axios from 'axios';
import * as S from './style'

export default function Characters() {

  let api = 'https://hp-api.herokuapp.com/api/characters';

  const [chars, setChars] = useState ([])

  useEffect (() => {
    axios.get(api).then((response) =>{
      console.log(response.data)
      setChars(response.data.slice(0, 25))
    })
  }, [api]);

    return (
        <>
        <main>
          <S.Container>
            <S.Wrapper>
              {chars.map((item, index) => (
                <S.CharBox key={index}>
                  <img src={item.image} alt={item.name} title={item.name} />
                  <div>
                    <h2>{item.actor}</h2>
                    <p>Papel: <span>{item.name}</span>!</p>
                    <p>Ancestral: <span>{item.ancestry !== "" ? item.ancestry : "Sem Info"}</span></p>
                    <p>Patronus: <span>{item.patronus !== "" ? item.patronus : "Sem Info"}</span></p>
                  </div>
                </S.CharBox>
              ))};
            </S.Wrapper>
          </S.Container>
        </main>
        </>
    );
}