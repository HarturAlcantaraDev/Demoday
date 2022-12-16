import styled from "styled-components";

let preto = "#333333"
let branco = "#fff"
let verde = "#34AA55"

export const Container = styled.main`
    width: 100vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Divider = styled.div`
    width: 100%;
    height: calc(100vh - 80px);
    display: flex;
    justify-content: center;
    align-items: center;
`


export const Content = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`

export const Title = styled.h1`
    font-size: 42px;
    color: ${preto};
    `

export const Text = styled.p`
    width: 450px;
    margin: 20px 0px;
    font-weight: 400;
    font-family: "Poppins";
`

export const Button = styled.button`
    width: 150px;
    height: 40px;
    border-radius: 10px;
    color: ${branco};
    font-weight: 600;
    background: ${verde};
    border: 2px solid ${verde};
    
    &:hover{
        border: 2px solid ${verde};
        background: transparent;
        color: ${verde};

    }
`

export const Image = styled.img`
    width: 100%;
    height: 60%;
`

export const Info = styled.div`
    width: 80%;
    height: 30%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Box = styled.div`
    width: 300px;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    
    h3{
        margin: 10px 0px;
    }
    p{
        font-weight: 400;
    }
`

export const Number = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 100%;
    background: ${verde};
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${branco};

    span{
        transform: translateY(1px);
    }
`
