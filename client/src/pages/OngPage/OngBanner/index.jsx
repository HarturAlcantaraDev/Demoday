import React from 'react'
import { Container, Image, InfoBox, Title } from './OngBanner'
import imgBg from "../../../assets/images/image 8.png"

export default function OngBanner() {
  return (
    <Container>
        <InfoBox>
          <Image src={imgBg} alt="" />
          <Title>Projeto Emoção Emocionado</Title>
        </InfoBox>
    </Container>
  )
}
