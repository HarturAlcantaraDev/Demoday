import styled from 'styled-components';

export const Container = styled.div`
    width: 15%;
    width: 250px;
    height: 100%;
    background: #fff;
    border-radius: 5px;
    border: 1px solid #d4d4d4;
`

export const AdsTitle = styled.h3`
    font-weight: 700;
    font-size: 16px;
    color: #6C6C6C;
    border-bottom: 1px solid #ECECEC;
    padding: 15px;
`

export const AdsItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    gap: 10px;
`

export const AdsItemImg = styled.img`
    width: 100%;
    height: 150px;
`

export const AdsItemTitle = styled.h4`
    font-weight: 600;
    font-size: 14px;
    color: #6C6C6C;
    width: 100%;
    margin-bottom: 5px;
`

export const AdsItemText = styled.p`
    font-weight: 400;
    font-size: 13px;
    color: #878787;
    width: 100%;
`