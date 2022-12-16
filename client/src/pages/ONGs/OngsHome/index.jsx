import React from "react";
import { Container, Title, Text, Explorar, HomeContent, OngsImg } from "./OngsHome";
// import {AiOutlineArrowRight} from "react-icons/ai";
import HomeOng from "../../../assets/images/OngsHome.png";
import {} from "react-icons"
import { Link } from "react-router-dom";

// import { Container } from './styles';

function OngsHome() {
  return (
    <Container>
      <HomeContent>
      <Title>Conheça <br/> as ONGs Parceiras</Title>
      
      <Text>
        Conheça as ONG' s que fazem parte do nosso ninho, conheça suas motivações, causas que apoiam e seus sonhos.
      </Text>
      <Link to="/ongs/feed">
        <button className="btn">Explorar</button>
      </Link>
      </HomeContent>
      <OngsImg src={HomeOng} />
    </Container>
  );
}

export default OngsHome;
