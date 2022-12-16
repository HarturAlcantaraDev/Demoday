import styled from "styled-components";

let preto = "#333333"
// let branco = "#fff"
let verde = "#34AA55"
// let verdeClaro = "#3FE86E"

export const Container = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 50px;
    height: 80px;
    background: #fff;
    filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25));
`

export const Logo = styled.img`
    width: 120px;
`

export const NavItens = styled.ul`
    display: flex;
    gap: 45px;
`
export const NavItem = styled.li`
    cursor: pointer;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    padding: 0px 5px;
    color: ${preto};
    border-bottom: 2px solid transparent;

    
    &.active{
        border-bottom: 2px solid ${verde};
    }
    &:hover{
        border-bottom: 2px solid ${verde};
    }
`

export const User = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`
export const UserPic = styled.img`

`

export const UserName = styled.p`
    
`
