import styled from "styled-components";

let preto = "#333333"
let branco = "#fff"
let verde = "#34AA55"
let verdeClaro = "#3FE86E";
let verdeEscuro = "#1D8139BF";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px;
    background: #F4F4F4;
    border-radius: 20px;
    margin-bottom: 20px;
`

export const NFTImage = styled.img`
    width: 300px;
    height: 240px;
    border-radius: 20px;
`

export const NFTDesc = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 10px;
`

export const NFTText = styled.p`
    color: ${verde};
    font-size: 24px;
    font-weight: 700;
`

export const NFTCategory = styled.p`
    color: ${verde};
    font-size: 16px;
    font-weight: 700;
`

export const NFTFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 10px;
`

export const NFTBtn = styled.button`
    width: 120px;
    height: 40px;
    border-radius: 20px;
    border: 1px solid ${branco};
    background: ${verdeEscuro};
    color: ${branco};
    font-size: 12px;
`