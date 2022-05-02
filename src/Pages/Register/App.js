import React from "react";

import People from '../../assets/RegisterImage.svg'
import Arrow from '../../assets/Arrow.svg'

import * as S from "./styles";

const App = () => {

  const users = [
    { id: Math.random(), name:"Kayke", age: 17 }, 
    { id: Math.random(), name:"Sofia", age: 31 }
  ];

  return (
    <>
      <S.ContainerMain>
        <S.Image src={People} alt="Two people talking in a Round Puff." />
        <S.ContainerItems>

          <S.H1>Olá!</S.H1>

          <S.Label>Name</S.Label>
          <S.Input placeholder="Ex: Kayke" />

          <S.Label>Age</S.Label>
          <S.Input placeholder="Ex: 17"/>

          <S.Button>Register <img src={Arrow} alt="arrow" /></S.Button>

          <ul>
            { users.map( user => (
              <li key={user.id}>
                {user.name} - {user.age}
              </li>
            ))}
          </ul>

        </S.ContainerItems>
      </S.ContainerMain>
    </>
  )
}

export default App