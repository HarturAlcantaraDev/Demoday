import styled from "styled-components";

let preto = "#333333"
let branco = "#fff"
let verde = "#34AA55"
//let verdeClaro = "#3FE86E"

export const Container = styled.nav`
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-shadow: 0px -1px 24px rgba(0, 0, 0, 0.25);

    .box{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media (max-width: 700px){
        .links{
            display: none;
        }
    }
    
    @media (max-width: 700px){
        .mobileMenu{
             display: none;
         }

    } 
`

export const Logo = styled.img`
    width: 7.5rem;
    margin-left: 20px;
`

export const NavItens = styled.ul`
    display: flex;
    gap: 55px;

`

export const NavItem = styled.li`
    cursor: pointer;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    padding: 0px 5px;
    color: ${preto};

    
    &.active{
        border-bottom: 2px solid ${verde};
    }
    &:hover{
        border-bottom: 2px solid ${verde};
    }
`

export const NavButton = styled.button`
    border: 2px solid ${verde};
    border-radius: 10px;
    width: 125px;
    height: 38px;
    background: none;
    font-weight: 600;
    font-size: 16px;

    &:hover{
        background: ${verde};
        color: #fff;
    }
`

export const MobileMenu = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;

    .mobile-links{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;

        button{
            width: 100%;
            height: 70px;
            background: ${verde};
            border-radius: 0px;   
            border: none; 
            border-bottom: 1px solid #fff;
            color: ${branco};
            font-weight: 600;
        }
    }
`
