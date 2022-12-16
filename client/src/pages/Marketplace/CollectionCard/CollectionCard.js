import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 180px;
    height: 100%;
    border-radius: 10px;
    border: 1px solid #d4d4d4;
    text-align: center;
    position: relative;

    .titleName{
        position: absolute;
        bottom: 10px;
        font-weight: 600;
        display: flex;
        font-size: 20px;
        background: #34AA55;
        border-radius: 10px;
        color: #fff;
        padding: 10px;
    }
`