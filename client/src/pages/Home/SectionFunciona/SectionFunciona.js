import styled from "styled-components";

let preto = "#333333"

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    gap: 30px;
`

export const SectionTitle = styled.h1`
    font-weight: 600;
    font-size: 42px;
    color: ${preto};
`
export const SectionParagraph = styled.p`
    font-weight: 400;
    font-size: 20px;
    text-align: center;
    width: 700px;
    height: 100px;
`

export const SectionCard = styled.div`
    display: flex;
    height: 530px;
    gap: 40px;
`

export const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    border: 1px solid #EAEAEA;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);
    border-radius: 15px;
    width: 280px;
    height: 430px;
    padding: 10px;
    margin: 10px;
    
    &:hover{
        transform: scale(1.02);
    }

`
export const ImageBox = styled.div`
    width: 100%;
    height: 190px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CardImage = styled.img`
    width: 70%;
`

export const CardTitle = styled.h3`
    font-weight: 500;
    font-size: 18px;
    margin: 10px 0px;
`

export const CardParagraph = styled.p`
    font-weight: 400;
    font-size: 12px;
    text-align: center;
`

