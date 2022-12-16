import React from 'react';
import { Container, AdsTitle,AdsItem ,AdsItemImg ,AdsItemTitle ,AdsItemText } from './AdsFeed';
import adsImg from '../../../assets/images/adsFeedIMG.png'

// import { Container } from './styles';

function ActionFeed() {
  return(
    <Container>
        <AdsTitle>
          Anúncios ONGs
        </AdsTitle>
        <AdsItem>
          <AdsItemImg src={adsImg}/>
          <AdsItemTitle>
            Organização Mocahp
          </AdsItemTitle>
          <AdsItemText>
          Semana da inscrição de crianças em creche, prorrogação até 17/11/2022
          </AdsItemText>
        </AdsItem>
        <AdsItem>
          <AdsItemImg src={adsImg}/>
          <AdsItemTitle>
            Organização Mocahp
          </AdsItemTitle>
          <AdsItemText>
          Semana da inscrição de crianças em creche, prorrogação até 17/11/2022
          </AdsItemText>
        </AdsItem>
    </Container>
  );
}

export default ActionFeed;