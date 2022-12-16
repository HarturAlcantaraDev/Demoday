import React from 'react';
import NFTSlider from './NFTSlider';
import NFTNav from './../../assets/components/NFTNav';
import CollectionSection from "./CollectionSection"
import NFTsSection from './NFTsSection';
import Footer from '../../assets/components/Footer';

function NFT(){
    return(
        <>
            <NFTNav />
            <NFTSlider />
            <CollectionSection />
            <NFTsSection/>
            <Footer/>
        </>
    )
}

export default NFT;