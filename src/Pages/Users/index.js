import React, { useEffect, useRef, useState } from "react";

import axios from "axios";

import People from "../../assets/RegisterImage.svg";
import Arrow from "../../assets/Arrow.svg";
import Trash from "../../assets/Trash.svg";

import * as S from "./styles";

const App = () => {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();

  async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3000/users", {
      name: inputName.current.value,
      age: inputAge.current.value
    });

    setUsers([...users, newUser]);
  }

  useEffect(() => {
    async function fetchUsers() {
      const { data: newUsers } = await axios.get("http://localhost:3000/users")

      setUsers(newUsers)
    }
    fetchUsers()
  }, [users])



  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3000/users/${userId}`)

    const newUser = users.filter((user) => user.id !== userId);

    setUsers(newUser);
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
            {users.map((user) => (
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
  );
};

export default App;
