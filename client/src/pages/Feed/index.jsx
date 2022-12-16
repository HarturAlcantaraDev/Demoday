import React from 'react';
import ActionFeed from './ActionFeed';
import FeedNavBar from '../../assets/components/FeedNavBar';
import FeedPost from '../../assets/components/FeedPost';
import AdsFeed from '../../assets/components/AdsFeed'
import { Container, Posts } from '../../assets/styles/Feed';
import Footer from '../../assets/components/Footer';

// import { Container } from './styles';

function FeedOngs() {
  return(
    <>
        <FeedNavBar />
        <Container>
          <ActionFeed />
          <Posts>
            <FeedPost image={'https://img.freepik.com/fotos-gratis/close-up-de-uma-mulher-abracando-seu-cachorro-de-estimacao_23-2149202494.jpg?w=740&t=st=1669085386~exp=1669085986~hmac=b2c32f6f703f0183d5e40d3010c43c332e53f1f17bd98e53a336b51a16127a72'}/>
            <FeedPost image={'https://img.freepik.com/fotos-gratis/close-up-no-lindo-basse-comendo_23-2149202496.jpg?w=740&t=st=1669085589~exp=1669086189~hmac=0bb14524291e698959c17bfee94943940225bac42db108e4184fba4294766ca6'} />
          </Posts>
          <AdsFeed />

        </Container>
        
        <Footer />
    </>
  );
}

export default FeedOngs;