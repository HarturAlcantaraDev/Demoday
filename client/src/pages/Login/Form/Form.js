import styled from "styled-components";

export const Container = styled.div`
    width: 60%;
    height: 100%;
    background-color: #fff;
    border-radius: 0px 10px 10px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
`
export const Title = styled.h3`
    font-size: 32px;
    color: #3a3a3a;
`
export const Text = styled.p`
    margin-bottom: 40px;
`

export const InputText = styled.div`
    display: flex;
    margin: 10px 0px;
    justify-content: flex-start;
    align-items: center;
    width: 60%;
    height: 40px;
    background-color: #dfdfdf;
    border-radius: 5px;
    padding: 0px 10px;
    
    p{
        width: 50px;
        margin: 0px 10px;
        font-weight: 600;
        color: #4c4c4c;
    }

    input{
        font-size: 18px;
        width: 100%;
        height: 100%;
        border: none;
        background: transparent;
        padding: 20px;

        &::placeholder{
            color: #4c4c4c;
            font-weight: 500;
        }
    }
`

export const Button = styled.button`
    width: 60%;
    height: 40px;
    margin-top: 20px;
    background-color: #2A9548;
    border: 2px solid #2A9548;
    color: #fff;
    font-weight: 600;
    border-radius: 5px;
    transition: .3s ease-in;

    &:hover{
        background-color: transparent;
        border: 2px solid #2A9548;
        color: #2A9548;
    }
`