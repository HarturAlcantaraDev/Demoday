import React from "react";
import {Container} from "../../assets/styles/NFTPage"
import NFTNav from "../../assets/components/NFTNav"
import NFTItem from "../../assets/components/NFTItem"
import Footer from "../../assets/components/Footer"

function NFTPage(){
    return(
        <Container>
            <NFTNav />
            <NFTItem />
            <Footer/>
        </Container>
    )
}

export default NFTPage;