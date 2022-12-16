import React from 'react';
import { Content, Text,Image } from './CardCategorias';

// import { Container } from './styles';

function CardCategorias({nomeCategoria, imagemCategoria}) {
  return(
    <Content>
      <Image src={imagemCategoria}/>
      <Text>
        {nomeCategoria}
      </Text>
    </Content>
  );
}

export default CardCategorias;