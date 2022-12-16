import React from 'react';
import { Button, Container, CountInfo } from './ActionFeed';

import {BsBookmarkFill} from "react-icons/bs";
import {HiBuildingOffice2} from "react-icons/hi2";
import {BsCartCheckFill} from "react-icons/bs";
import {MdAccountCircle} from "react-icons/md";
import {RiSettings3Fill} from "react-icons/ri";
import {IoExitOutline} from "react-icons/io5";
// import { Container } from './styles';

function ActionFeed() {
  return(
    <Container>
        <Button>
          <BsBookmarkFill color='#333333'/>         
          <span>Novas Postagens</span>
          <CountInfo>10</CountInfo>
        </Button>
        <Button>
          <HiBuildingOffice2 color='#333333'/>         
          <span>ONGs</span>
        </Button>
        <Button>
          <BsCartCheckFill color='#333333'/>         
          <span>Marketplace NFT</span>
        </Button>
        <Button>
          <MdAccountCircle color='#333333'/>          
          <span>Meu Perfil</span>
        </Button>
        <Button>
          <RiSettings3Fill color='#333333'/>          
          <span>Configurações</span>
        </Button>
        <Button>
          <IoExitOutline color='#333333'/>
          <span>Sair</span>
        </Button>
    </Container>
  );
}

export default ActionFeed;