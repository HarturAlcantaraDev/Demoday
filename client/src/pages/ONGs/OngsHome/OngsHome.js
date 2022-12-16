import styled from "styled-components";

let preto = "#333333"
// let branco = "#fff"
let verde = "#34AA55"
let verdeClaro = "rgba(63, 232, 110, 0.25);"

export const Container = styled.main`
    background: ${verdeClaro};
    width: 90%;
    height: 60%;
    padding: 10px 90px;
    margin: 30px auto;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    button{
        width: 50%;
        height: 50px;
        margin: 10px 0px;
        border-radius: 10px;
        background: ${verde};
        border: 2px solid transparent;
        color: #fff;
        font-size: 18px;
        transition: .3s all;

        &:hover{
            border: 2px solid ${verde};
            background-color: transparent;
            color: ${verde};
        }
    }
`

export const HomeContent = styled.div`
    display: flex;
    flex-direction: column;
`

export const Title = styled.h1`
    color: ${preto};
    font-weight: 600;
    font-size: 48px;
`

export const Text = styled.p`
    width: 80%;
    font-weight: 400;
    font-size: 16px;
    color: ${preto};
`

export const Explorar = styled.p`
    margin-top: 30px;
    font-weight: 400;
    font-size: 22px;
    color: #000000;
    cursor: pointer;
`

export const OngsImg = styled.img`
    width: 800px;
    overflow: hidden;
`