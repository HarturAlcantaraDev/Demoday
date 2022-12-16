import React from 'react'
import { Container, NFTBtn, NFTDesc, NFTFooter, NFTImage, NFTText, NFTCategory } from './NFTCard'
import NFTCardImage from "../../images/NFTCardImage.png"

export default function NFTCard() {
  return (
    <>
        <Container>
            <NFTImage src={NFTCardImage}/>
            <NFTDesc>
                <NFTText>
                    Cat
                </NFTText>
                <NFTText>
                    2.23ETH
                </NFTText>
            </NFTDesc>
            <NFTFooter>
                <NFTCategory>
                    Categoria: PETS
                </NFTCategory>
                <NFTBtn>
                    Comprar NFT
                </NFTBtn>
            </NFTFooter>
        </Container>
    </>
  )
}
