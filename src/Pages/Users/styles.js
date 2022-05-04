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

export const ContainerItems = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding: 50px 35px;
    background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
    border-radius: 61px 61px 0px 0px;
`;

export const H1 = styled.h1`
    text-align: center;
    margin-bottom: 60px;
    font-size: 34px;
    font-weight: 700;
    color: #FFFFFF;
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