import React from "react";
import CasoImg from "../../../assets/images/Casos - Image.png";
import DinheiroImg from "../../../assets/images/Dinheiro - Image.png";
import NFTImg from "../../../assets/images/NFT - Image.png";
import TourImg from "../../../assets/images/Tour - Image.png";
import {
  Card,
  CardImg,
  CardInfo,
  CardText,
  CardTitle,
  CloseBtn,
  Container,
  IconCard,
  Tour,
  TourBox,
} from "./OngActions";
import { useState } from "react";
import {IoMdClose} from "react-icons/io"
import {BiDonateHeart} from "react-icons/bi";
import {BsCurrencyBitcoin} from "react-icons/bs";
import {GiHeartPlus} from 'react-icons/gi';
import { TbAugmentedReality} from "react-icons/tb";

export default function OngActions() {
    //let url = "https://webobook.com/public/634cc6153c84be099d5fc732,en?ap=true&si=true&sm=false&sp=true&sfr=false&sl=false&sop=false&";
    let url = "https://tourmkr.com/F1vMN5eWoO/31021286p&122.29h&73.25t"
  const [showModal, setShowModal] = useState(false);

  const showTour = () => {
    showModal ? setShowModal(false) : setShowModal(true);
  };

  return (
    <>
      <Container>
        <Card
          onClick={showTour}
          imageBg={"../../../assets/images/Casos - Image.png"}
        >
          <CardImg src={TourImg} alt="" />
          <CardInfo>
            <IconCard><TbAugmentedReality size={"28px"} color={"#34AA55"}/></IconCard>
            <CardTitle>Tour Virtual</CardTitle>
            <CardText>Conheça a ONG sem sair de casa.</CardText>
          </CardInfo>
        </Card>
        <Card imageBg={"../../../assets/images/Casos - Image.png"}>
          <CardImg src={DinheiroImg} alt="" />
          <CardInfo>
            <IconCard><BiDonateHeart size={"28px"} color={"#34AA55"}/></IconCard>
            <CardTitle>Contribua Diretamente </CardTitle>
            <CardText>Compre NFTs dessa coleção e apoie 12 ONGs ambientais. </CardText>
          </CardInfo>
        </Card>
        <Card imageBg={"../../../assets/images/Casos - Image.png"}>
          <CardImg src={NFTImg} alt="" />
          <CardInfo>
            <IconCard><BsCurrencyBitcoin size={"28px"} color={"#34AA55"}/></IconCard>
            <CardTitle>Contribua com NFT </CardTitle>
            <CardText>Compre NFTs dessa coleção e apoie 12 ONGs ambientais. </CardText>
          </CardInfo>
        </Card>
        <Card imageBg={"../../../assets/images/Casos - Image.png"}>
          <CardImg src={CasoImg} alt="" />
          <CardInfo>
            <IconCard><GiHeartPlus size={"28px"} color={"#34AA55"}/></IconCard>
            <CardTitle>Casos da ONG</CardTitle>
            <CardText>Conheça nossos casos abertos e contribua para o sorriso de alguém.</CardText>
          </CardInfo>
        </Card>
      </Container>
      {showModal ? (
        <Tour>
            <CloseBtn onClick={showTour}>
                <IoMdClose size={"28px"} color={"#FFF"}/>
            </CloseBtn>
          <TourBox
            title="a"
            id="evrFrame"
            allowvr="yes"
            allow="xr-spatial-tracking;vr;gyroscope;accelerometer;fullscreen;"
            scrolling="no"
            allowfullscreen="true"
            frameborder="0"
            src={url}
          ></TourBox>
        </Tour>
      ) : (
        ""
      )}
    </>
  );
}
