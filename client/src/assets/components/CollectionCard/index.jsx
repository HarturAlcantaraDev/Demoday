import React from "react";
import { Container, CollectionCardBanner, CollectionCardLogo, CollectionTitle, ColletionCardParagraph, CollectionCardTitle } from "./CollectionCard";
import CardLogo from "../../images/CollectionLogo.png"
import CardBanner from "../../images/CollectionBanner.png"


function CollectionCard({image}){
    return(
        <>
            <Container>
                <CollectionCardBanner src={image}/>
                <CollectionCardLogo src={CardLogo}/>
                <CollectionCardTitle>
                    Cat Collection
                </CollectionCardTitle>
                <ColletionCardParagraph>
                    Compre NFTs dessa coleção e apoie 32 ONGs de gatinhos. 
                </ColletionCardParagraph>
            </Container>
        </>
    )
}

export default CollectionCard;