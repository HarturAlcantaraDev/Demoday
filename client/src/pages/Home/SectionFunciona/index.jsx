import React from "react";
import img1 from "../../../assets/images/SectionFunciona - img1.png";
import img2 from "../../../assets/images/SectionFunciona - img2.png";
import img3 from "../../../assets/images/SectionFunciona - img3.png";
import img4 from "../../../assets/images/SectionFunciona - img4.png";

import {
  Section,
  SectionCard,
  Card,
  CardImage,
  CardTitle,
  CardParagraph,
  SectionTitle,
  SectionParagraph,
  ImageBox,
} from "./SectionFunciona";

export const SectionFunciona = () => {
  return (
    <Section>
      <SectionTitle>Como nossa plataforma funciona?</SectionTitle>
      <SectionParagraph>
        Nossa plataforma contém diversas funcionalidades para cada vez mais abranger mais pessoas que precisam de auxílio para crescer.
      </SectionParagraph>
      <SectionCard>
        <Card>
          <ImageBox>
            <CardImage src={img1} alt="" />
          </ImageBox>
          <CardTitle>Pesquisa ONGs Próximas</CardTitle>
          <CardParagraph>
            Nessa aba, é possível pesquisar por ONG's de seu interesse,e perto da sua casa, para gerar conforto e acessibilidade para os usuários. 
          </CardParagraph>
        </Card>

        <Card>
          <ImageBox>
            <CardImage src={img2} alt="" />
          </ImageBox>
          <CardTitle>ONGs Confiaveis</CardTitle>
          <CardParagraph>
            Saiba que na nossa plataforma todas as ONG' s passam por uma verificação de segurança, fazendo com que todas as ONG ' s do nosso site sejam reais e que você tenha certeza que seu dinheiro está indo para uma causa e fazendo efeito'
          </CardParagraph>
        </Card>

        <Card>
          <ImageBox>
            <CardImage src={img3} height={'60%'}alt="" />
          </ImageBox>
          <CardTitle>Doe Seguramente</CardTitle>
          <CardParagraph>
            Temos um sistema que verifica a procedencia das ongs.
            Tornando um ambiente seguro para os colaboradores conseguirem doarem sem se preocuparem.
          </CardParagraph>
        </Card>
        <Card>
          <ImageBox>
            <CardImage src={img4} height={'70%'} alt="" />
          </ImageBox>
          <CardTitle>Todo Mundo Feliz</CardTitle>
          <CardParagraph>
            Com a ajuda dos colaboradores é possível que muitas causas que são apoiadas por organizações continuem a funcionar e ajudar diversas áreas.
          </CardParagraph>
        </Card>
      </SectionCard>
    </Section>
  );
};
