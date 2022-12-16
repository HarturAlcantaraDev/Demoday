import React from 'react';
import CardCategorias from '../CardCategorias';
import { Container, Slider, Title } from './CardCategoriaSlider';

import Animais from "../../../assets/images/animais.png"
import Ambiental from "../../../assets/images/ambiental.png"
import Crianca from "../../../assets/images/kids.png"
import Educacao from "../../../assets/images/educacao.png"
import Idosos from "../../../assets/images/idosos.png"
import Deficientes from "../../../assets/images/deficiente.png"
import Esporte from "../../../assets/images/esporte.png"

function CardOngssSlider() {
  return(
    <Container>
        <Title>Categoria</Title>
        <Slider>
          <CardCategorias nomeCategoria="Animais" imagemCategoria={Animais}/>
          <CardCategorias nomeCategoria="Ambientais" imagemCategoria={Ambiental}/>
          <CardCategorias nomeCategoria="Crianças" imagemCategoria={Crianca}/>
          <CardCategorias nomeCategoria="Educação" imagemCategoria={Educacao}/>
          <CardCategorias nomeCategoria="Idosos" imagemCategoria={Idosos}/>
          <CardCategorias nomeCategoria="Deficientes" imagemCategoria={Deficientes}/>
          <CardCategorias nomeCategoria="Esporte" imagemCategoria={Esporte}/>
          <CardCategorias nomeCategoria="" imagemCategoria=""/>
          <CardCategorias nomeCategoria="" imagemCategoria=""/>
        </Slider>
    </Container>
  );
}

export default CardOngssSlider;