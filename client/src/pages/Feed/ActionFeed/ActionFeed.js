import styled from "styled-components";

// let preto = "#333333"
let branco = "#fff"
// let verde = "#34AA55"
let verdeClaro = "#3FE86E"

export const Container = styled.div`
    width: 20%;
    height: 500px;
    background: #ffffff;
    border: 1px solid #d4d4d4;
    border-radius: 5px;
    overflow: hidden;
`

export const Button = styled.button`
    width: 100%;
    height: 55px;
    border: none;
    border-bottom: 1px solid transparent;
    background: transparent;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 30px;

    &:hover{
        background: #e6e6e6;
    }

    span{
        margin-left: 10px;
    }
`

export const CountInfo = styled.span`
    background: ${verdeClaro};
    padding: 2px 5px;
    position: relative;
    left: 40px;
    color: ${branco};
    font-weight: 600;
    font-size: 12px;
    border-radius: 50%;
`