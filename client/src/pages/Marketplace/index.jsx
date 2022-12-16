import React from 'react'
import NFTNav from '../../assets/components/NFTNav'
import { Container } from './Marketplace';
import { Banner } from './Banner/index';
import Collection from './Collection';
import { BestsNFTs } from './BestsNFTs';
import Footer from '../../assets/components/Footer';

const Marketplace = () => {
  return (
    <>
        <NFTNav />
        <Container>
          <Banner />
          <Collection />
          <BestsNFTs />
        </Container>
        <Footer />
    </>
  )
}

export default Marketplace