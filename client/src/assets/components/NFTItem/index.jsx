import React from "react";
import { Container, Image, Content, NFTName, NFTHeader, NFTActions, Price, Description, DescriptionTitle, DescriptionText, Column, Button} from "./NFTItem";
import NFTImg from "../../images/NFTImage.png"
import {SiEthereum} from 'react-icons/si'
import {AiOutlineHeart} from 'react-icons/ai';

function NFTItem(){
    return(
        <Container>
            <Content>
                <Column>
                    <Image src={NFTImg}/>
                </Column>
                <Column>
                    <NFTHeader>
                        <NFTName>LunarDog #0001</NFTName>
                        <NFTActions>
                            <AiOutlineHeart size={'22px'}/>
                            Gostei
                        </NFTActions>
                    </NFTHeader>

                    <Price><SiEthereum  color="#34AA55"/>   293810973 ETH</Price>

                    <Button>Comprar agora</Button>

                    <Description>
                        <DescriptionTitle>Descrição</DescriptionTitle>
                        <DescriptionText>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam aperiam quam consequuntur? Aliquam maxime asperiores voluptas expedita odio, quis nostrum labore blanditiis, ut quasi voluptatum totam sit officia? Impedit, illum.</DescriptionText>
                    </Description>
                
                </Column>


                
            </Content>
        </Container>
    )
}

export default NFTItem