import React from "react";
import {
  Button,
  Container,
  Content,
  Text,
  Title,
  Image,
  Divider,
  Info,
  Box,
  Number,
} from "../../../assets/styles/SliderHome";
import { Link } from "react-router-dom";
import ImageURL from "../../../assets/images/SliderHome.png";

function SliderHome() {
  return (
    <>
      <Container>
        <Divider>
          <Content>
            <Title>Conheça A Nossa Plataforma</Title>
            <Text>
              Conheça o grande ninho que é a  CoNest, mostrando nossas motivações, sonhos e metas com a plataforma.
              Saiba como foi criada e nosso efeito na sociedade.
            </Text>
            <Link to="/ongs"><Button>Conheça as ONGs</Button></Link>
            
          </Content>
          <Content>
            <Image src={ImageURL} />
          </Content>
        </Divider>
        <Info>
          <Box>
            <Number>
              <span>1</span>
            </Number>
            <h3>Escolha a ONG de sua preferência</h3>
            <p>Você escolhe qual ONG você deseja contribuir ou conhecer</p>
          </Box>
          <Box>
            <Number>
              <span>2</span>
            </Number>
            <h3>Conheça a ONG</h3>
            <p>Faça um passeio virtual para conhecer o espaço das ONGs</p>
          </Box>
          <Box>
            <Number>
              <span>3</span>
            </Number>
            <h3>Contribua</h3>
            <p>Ajude ONGs e faça do mundo um lugar melhor</p>
          </Box>
        </Info>
      </Container>
    </>
  );
}

export default SliderHome;
