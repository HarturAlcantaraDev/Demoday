import React from 'react'
import { Container } from "./Banner"
import image from "../../../assets/images/mktBanner.png"

export const Banner = () => {
  return (
    <Container>
      <div className="box">
        <h1>NFT INCLUINDO VALOR A TODOS</h1>
        <p>Gera valor a sua carteira, e em troca beneficie ongs por uma vida inteira</p>
      </div>
      <div className="box">
        <img src={image} alt="" />
      </div>
    </Container>
  )
}
