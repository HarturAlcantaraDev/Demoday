import React from 'react'
import FeedNavBar from '../../assets/components/FeedNavBar';
import Footer from '../../assets/components/Footer';
import OngActions from './OngActions';
import OngBanner from './OngBanner';
import AdsFeed from "../../assets/components/AdsFeed";
import FeedPost from '../../assets/components/FeedPost';
import { Container, Content, Posts, PostTitle } from './OngPage';

function OngPage() {
  return (
    <>
      <FeedNavBar />
      <Container>
        <OngBanner />
        <OngActions />
        <Content>
          <Posts>
            <PostTitle>Publicações</PostTitle>
            <FeedPost image="https://img.freepik.com/fotos-gratis/aproxime-se-das-coisas-de-organizacao-voluntaria-para-doacao_23-2149134449.jpg?w=740&t=st=1669085135~exp=1669085735~hmac=98585b363026f7215b6498cb9459a78c721fb43d35cfacab0a303955cda9f532"/>
            <FeedPost image="https://img.freepik.com/fotos-gratis/aproxime-se-das-coisas-de-organizacao-voluntaria-para-doacao_23-2149134433.jpg?w=740&t=st=1669085258~exp=1669085858~hmac=680d680e846733c12c767f38b4b5139f63d34fde6dff0b300f55e9baf68fb21e"/>
            <FeedPost image="https://img.freepik.com/fotos-gratis/grupo-de-diferentes-pessoas-oferecendo-se-como-voluntario-em-um-banco-de-alimentos-para-pessoas-pobres_23-2149012209.jpg?w=740&t=st=1669085304~exp=1669085904~hmac=b77384dcad3f3a42444f6637f6a4a4785198c0446e2c32a5675a3da54218bbe4"/>
          </Posts>
          <AdsFeed />
        </Content>
        
      </Container>
      <Footer />
    </>
  )
}

export default OngPage;