import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import IconPeoples from "../../assets/SingUpImage.svg";
import Arrow from "../../assets/Arrow.svg";
import Trash from "../../assets/Trash.svg";

import * as S from "./styles";

const Users = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

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

  function goRegister() {
    navigate("/")
  }

  return (
    <>
      <S.ContainerMain>
        <S.Image src={IconPeoples} alt="Two people talking in a Round Puff." />
        <S.ContainerItems>
          <S.H1>Usuários</S.H1>
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
          <S.Button onClick={goRegister}>
            <img src={Arrow} alt="arrow" />
            Voltar
          </S.Button>
        </S.ContainerItems>
      </S.ContainerMain>
    </>
  );
};

export default Users;
