import styled from "styled-components";

export const PeopleCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    &&:hover{
        transform: scale(1.1);
    }
`

export const PeopleImg = styled.img`
    width: 250px;
    height: 250px;
`

export const PeopleName = styled.p`
    font-size: 18px;
    font-weight: bold;
`

export const PeopleFuntion = styled.p`
    font-size: 16px;
`