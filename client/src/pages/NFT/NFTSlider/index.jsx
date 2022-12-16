import React from 'react'
import { Container, HomeBtn, HomeImages, HomeTexts, HomeTitle, HomeImage } from './NFTHome';
import Img from "../../../assets/images/HomeNFTSlider.png"

function NFTSlider(){
  return (
    <Container>
        <HomeTexts>
            <HomeTitle>
                Conheça as NFTs da Generosidade
            </HomeTitle>
            <HomeBtn>
                Saiba Mais
            </HomeBtn>
        </HomeTexts>
        <HomeImages>        
            <HomeImage src={Img}/>
        </HomeImages>
    </Container>
  )
}

export default NFTSlider;