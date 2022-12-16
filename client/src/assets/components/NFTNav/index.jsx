import React from "react";
import { Container, Logo, NavItem, UserName, UserPic, User, NavItens } from "./NFTNav";
import logo from "../../images/logo.png"
import Pic from "../../images/UserPic.png"
import { Link } from 'react-router-dom';


function NFTNav(){
    return(
        <Container>
            <Link to="/"><Logo src={logo}/></Link>

            <NavItens>
                <Link to="/"><NavItem>Home</NavItem></Link>
                <Link to="/marketplace"><NavItem>Marketplace</NavItem></Link>
                <Link to="/"><NavItem>Como Funciona</NavItem></Link>
            </NavItens>
            <User>
                <UserPic src={Pic}/>
                <UserName>
                    Ana Claudia
                </UserName>
            </User>
        </Container>
    )
}

export default NFTNav