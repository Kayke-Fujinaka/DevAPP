import styled from "styled-components";

import Background from '../../assets/SingUpBackground.svg'

export const ContainerMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    gap: 40px;
    background-image: url("${Background}");
    background-size: cover;
`;

export const Image = styled.img`
    margin-top: 30px;
`;

export const User = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 342px;
    gap: 5px;
    margin-top: 30px;
    padding: 10px 25px;
    font-size: 20px;
    font-weight: 400;
    color: #FFFFFF;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: none;
    border-radius: 14px;
    outline: none;
    .paragraphName {
        word-break: break-all;
    }
    button {
        background: none;
        border: none;
        cursor: pointer;
    }
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 342px;
    height: 74px;
    gap: 10px;
    margin-top: 100px;
    padding-right: 20px;
    font-size: 17px;
    color: #FFFFFF;
    background: none;
    border: 1px solid #FFFFFF;
    border-radius: 14px;
    outline: none;
    text-decoration: none;
    cursor: pointer;
    img {
        opacity: 0;
        transition: ease-in 0.1s
    }
    :hover {
        img {
            opacity: 1;
        }
    }
    :active {
        filter: brightness(0.7);
    }
`;