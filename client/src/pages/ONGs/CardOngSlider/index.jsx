import React from 'react';
import CardOng from '../../../assets/components/CardOng';
import { Container, Slider, Title } from './CardOngSlider';

// import { Container } from './styles';

function CardOngssSlider() {
  return(
    <Container>
        <Title>ONGs Recomendadas</Title>
        <Slider>
          <CardOng image="https://i.pinimg.com/originals/bf/d8/67/bfd867d85dcf30b0de9844cd9a0f156e.jpg"/>
          <CardOng image="https://i.pinimg.com/550x/1a/01/4f/1a014f29bacc473d159af634f726d33c.jpg"/>
          <CardOng image="https://static.vecteezy.com/ti/vetor-gratis/p1/10110136-design-de-logotipo-de-tecnologia-de-letras-em-fundo-branco-e-iniciais-criativos-design-de-logotipo-conceito-de-letras-vetor.jpg"/>
          <CardOng image="https://www.cosemsba.org.br/wp-content/uploads/2019/04/logo-Abra%C3%A7o-a-Microcefalia.jpg"/>
          <CardOng image="https://fongc.org/wp-content/uploads/2016/10/Logo-FONGC-Tipo-icono.png"/>
          <CardOng image="https://mir-s3-cdn-cf.behance.net/project_modules/disp/3c2ee6113723863.602d7af606936.png"/>
          <CardOng image=""/>
          <CardOng image=""/>
          <CardOng image=""/>
          <CardOng image=""/>

        </Slider>
    </Container>
  );
}

export default CardOngssSlider;