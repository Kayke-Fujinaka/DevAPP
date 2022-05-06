import styled from "styled-components";

export const ContainerMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    gap: 40px;
    background: linear-gradient(180deg, rgba(56,148,255,1) 0%, rgba(10,78,209,1) 38%, rgba(75,37,171,1) 94%);
    background-size: cover;
`;

export const Image = styled.img`
    margin-top: 30px;
    max-height: 175px;
`;

export const Label = styled.p`
    padding-left: 25px;
    font-size: 18px;
    font-weight: 500;
    color: #FFF;
    letter-spacing: -0.408px;
`;

export const Input = styled.input`
    width: 345px;
    height: 50px;
    margin-bottom: 30px;
    padding: 0 25px;
    font-size: 20px;
    font-weight: 400;
    color: #FFFFFF;
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: none;
    border-radius: 14px;
    outline: none;
    &::placeholder {
        font-size: 20px;
        font-weight: 500;
        color: #FFFFFF;
    }
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 342px;
    height: 74px;
    gap: 10px;
    margin-top: 74px;
    padding-left: 20px;
    font-size: 17px;
    color: #FFFFFF;
    background: rgba(0, 0, 0, 1);
    border: none;
    border-radius: 14px;
    outline: none;
    text-decoration: none;
    cursor: pointer;
    img {
        opacity: 0;
        transform: scale(-1);
        transition: ease-in 0.2s
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