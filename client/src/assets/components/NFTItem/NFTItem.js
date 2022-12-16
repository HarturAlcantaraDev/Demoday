import styled from "styled-components";

// let preto = "#333333"
let branco = "#fff"
let verde = "#34AA55"
//let verdeClaro = "#3FE86E"

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 0px;
    height: 80vh;
    gap: 100px;
`

export const Content = styled.div`
    width: 70%;
    display: flex;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 50%;
    height: 100%;
`

export const Image = styled.img`
    width: 350px;
    height: 350px;
    border-radius: 20px;
    margin-top: 20px;
`
export const NFTHeader = styled.div`
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const NFTName = styled.h2`
    font-size: 26px;
`

export const NFTActions = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
`

export const Price = styled.h5`
    width: 100%;
    font-size: 22px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 10px 0px;
`

export const Button = styled.button`
    height: 40px;
    width: 200px;
    margin: 30px 0px;
    background: ${verde};
    color: ${branco};
    border: 2px solid transparent;
    border-radius: 5px;
    font-weight: 600;
    transition: all .3s;

    &:hover{
        border: 2px solid ${verde};
        background: transparent;
        color: ${verde};
    }
`

export const Description = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const DescriptionTitle = styled.h6`
    font-size: 18px;
`

export const DescriptionText = styled.p`
    font-size: 16px;
`