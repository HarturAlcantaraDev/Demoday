import styled from "styled-components";


// let preto = "#333333"
// let branco = "#fff"
// let verde = "#34AA55"
// let verdeClaro = "#3FE86E"

export const Container = styled.nav`
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-shadow: 0px -1px 24px rgba(0, 0, 0, 0.25);
`

export const Logo = styled.img`
    width: 7.5rem;
`

export const SearchBox = styled.div`
    height: 35px;
    width: 300px;
    background: #d4d4d4;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0px 0px 0px 10px;
    border-radius: 5px;
    overflow: hidden;
`

export const InputSearch = styled.input`
    width: 100%;
    height: 100%;
    border: none;
    background: transparent;
    padding-left: 10px;
`

export const User = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const UserImage = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
`

export const UserName = styled.p`
    margin: 0px 10px;
`


