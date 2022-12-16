import React from "react";
import {
  Barra,
  Container,
  Content,
  LtText,
  Text,
  Title,
  TitleGreen,
} from "../../../assets/styles/SectionDoacao";

export const SectionDoacao = () => {
  return (
    <Container>
      <Content>
        <Title>
          Doe e <TitleGreen>salve.</TitleGreen> <br />
          Transforme vidas<TitleGreen>.</TitleGreen>
        </Title>
        <LtText>
          <Barra />
          <p>
            SEJA A <TitleGreen>MUDANÇA</TitleGreen> QUE VOCÊ QUER NO MUNDO.
          </p>
        </LtText>
        <Text>
          Faça do mundo um lugar perfeito para as ONG' s, ajudando cada vez mais e mais pessoas. Saiba o impacto que as Ong' s têm no mundo, e como as pessoas são ajudadas por elas.
        </Text>
      </Content>
    </Container>
  );
};
