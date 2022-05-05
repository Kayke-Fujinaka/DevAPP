import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import People from "../../assets/RegisterImage.svg";
import Arrow from "../../assets/Arrow.svg";

import H1 from '../../components/Title'
import ContainerItems from '../../components/ContainerItems'

import * as S from "./styles";

const Register = () => {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();
  const navigate = useNavigate();

  async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3000/users", {
      name: inputName.current.value,
      age: inputAge.current.value
    });

    setUsers([...users, newUser]);

    navigate("/users")
  }

  return (
    <>
      <S.ContainerMain>
        <S.Image src={People} alt="Two people talking in a Round Puff." />
        <ContainerItems>
          <H1>Olá!</H1>

          <S.Label>Name</S.Label>
          <S.Input ref={inputName} placeholder="Ex: Kayke" />

          <S.Label>Age</S.Label>
          <S.Input ref={inputAge} placeholder="Ex: 17" />

          <S.Button onClick={addNewUser}>
            Register
            <img src={Arrow} alt="arrow" />
          </S.Button>
        </ContainerItems>
      </S.ContainerMain>
    </>
  );
};

export default Register;
