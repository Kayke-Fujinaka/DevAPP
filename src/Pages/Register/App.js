import React, { useRef, useState } from "react";

import People from '../../assets/RegisterImage.svg'
import Arrow from '../../assets/Arrow.svg'
import Trash from '../../assets/Trash.svg'

import * as S from "./styles";

const App = () => {

  const [ users, setUsers ] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();

  function addNewUser() {
    setUsers([
      ...users,
      { 
        id: Math.random(), 
        name: inputName.current.value, 
        age: inputAge.current.value 
      }
    ]);
  }

  function deleteUser(userId) {
    const newUsers = users.filter( (user) => user.id !== userId);
    setUsers(newUsers); 
  }

  return (
    <>
      <S.ContainerMain>
        <S.Image src={People} alt="Two people talking in a Round Puff." />
        <S.ContainerItems>

          <S.H1>Olá!</S.H1>

          <S.Label>Name</S.Label>
          <S.Input ref={inputName} placeholder="Ex: Kayke" />

          <S.Label>Age</S.Label>
          <S.Input ref={inputAge} placeholder="Ex: 17" />

          <S.Button onClick={addNewUser}>
            Register
            <img src={Arrow} alt="arrow" />
          </S.Button>

          <ul>
            {users.map(user => (
              <S.User key={user.id}>
                <p className="paragraphName">{user.name}</p>
                <p>{user.age}</p>
                <button onClick={() => deleteUser(user.id)}>
                  <img src={Trash} />
                </button>
              </S.User>
            ))}
          </ul>
        </S.ContainerItems>
      </S.ContainerMain>
    </>
  )
}

export default App