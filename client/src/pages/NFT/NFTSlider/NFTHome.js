import styled from "styled-components";

// let preto = "#333333"
let branco = "#fff"
let verde = "#34AA55"
//let verdeClaro = "#3FE86E"

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 50px 20px;
`

export const HomeTexts = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
    gap: 30px;
`

export const HomeTitle = styled.h2`
    font-weight: 600;
    font-size: 44px;
    text-align: center;
    color: #232323;
`

export const HomeBtn = styled.button`
    width: 200px;
    height: 40px;
    background: #34AA55;
    border-radius: 8px;
    border: 2px solid transparent;
    border-radius: 5px;
    color: ${branco};
    font-weight: 600;
    font-size:17fpx;
    transition: all .3s;

    &:hover{
        border: 2px solid ${verde};
        background: transparent;
        color: ${verde};
    }
`

export const HomeImages = styled.div`

`

export const HomeImage = styled.img`
    width: 100%;
    height: 400px;
`