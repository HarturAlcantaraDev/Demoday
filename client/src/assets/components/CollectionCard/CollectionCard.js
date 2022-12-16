import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    width: 380px;
    border-radius: 25px;
    height: 90%;
    margin: 20px 0px;
    box-shadow: 0px 1px 12px 0px rgba(0,0,0,0.75);
    background: #fff;
    position: relative;
`

export const CollectionCardTitle = styled.h4`
    margin-top: 30px;
    font-weight: 700;
    font-size: 16px;
`

export const CollectionCardBanner = styled.img`
    width: 400px;
    height: 100px;
`

export const CollectionCardLogo = styled.img`
    width: 50px;
    height: 50px;
    border: 100%;
    position: absolute;
    bottom:50%;
`

export const ColletionCardParagraph = styled.p`
    width: 90%;
    font-weight: 400;
    font-size: 16px;
    text-align: center;
`