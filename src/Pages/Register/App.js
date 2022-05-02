import React from "react";

import * as S from "./styles";

const App = () => {

  const title = "Olá"

  return (
    <>
      <S.ContainerMain>
        <S.Image />
        <S.ContainerItems>

          <S.H1>{title}</S.H1>

          <S.Label>Name</S.Label>
          <S.Input placeholder="Ex: Kayke" />

          <S.Label>Age</S.Label>
          <S.Input placeholder="Ex: 17"/>

          <S.Button>Register</S.Button>

        </S.ContainerItems>
      </S.ContainerMain>
    </>
  )
}

export default App