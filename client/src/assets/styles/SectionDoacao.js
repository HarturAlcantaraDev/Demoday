import styled from "styled-components";
import bg from '../images/doeimage.png'

let preto = "#333333"
// let branco = "#fff"
let verde = "#34AA55"

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    padding: 50px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Content = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-image: url(${bg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right;
`

export const Title = styled.h2`
    color: ${preto};    
    font-size: 42px;
`

export const TitleGreen = styled.span`
    color: ${verde};
`

export const LtText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0px;
    font-weight: 600;

    p{

    }
`
export const Barra = styled.div`
    width: 100px;
    height: 4px;
    border-radius: 2px;
    background-color: ${verde};
    margin-right: 5px;
`

export const Text = styled.p`
    width: 400px;
`