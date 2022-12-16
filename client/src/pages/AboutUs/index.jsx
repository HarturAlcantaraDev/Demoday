import React from 'react'
import Nav from '../../assets/components/Nav/Nav'
import { Container, HeaderLogo, HeaderTitle, HeaderContent, MainContent, MainImage, TextContainer, Title, Paragraph, TeamContainer, PeopleContainer, PeopleCard } from './AboutUs'
import Logo from "../../assets/images/AboutUsLogo.png"
import Image from "../../assets/images/AboutMainImage.png"
import People from "../../assets/images/nathan 1 (1).png"
import CardPeople from '../../assets/components/PeopleCard'
import Footer from '../../assets/components/Footer'
import Amanda from "../../assets/images/amanda 1.png"
import Marcelo from "../../assets/images/marcelo 1.png"
import Mayara from "../../assets/images/mayara 1.png"
import Tainy from "../../assets/images/Tainy_Eduardo_Leite_de_Souza 2.png"
import Hartur from "../../assets/images/Hartur_Alcantara_Pereira 1.png"
import Wesley from "../../assets/images/wes 1 (1).png"
import Johnny from "../../assets/images/johnny 1.png"

export default function AboutUs() {
  return (
    <>
        <Nav/>
        <Container>
            <HeaderContent>
                <HeaderTitle>
                    Sobre Nós
                </HeaderTitle>
                <HeaderLogo src={Logo} />
            </HeaderContent>
            <MainContent>
                <MainImage src={Image}/>
                <TextContainer>
                    <Title>
                        Pequenos projetos, grandes mudanças
                    </Title>
                    <Paragraph>
                        As ongs possibilitam o desenvolvimento social
                        da sociedade em geral, dando oportunidade e
                        capacitando pessoas a ajudarem mais grupos.
                        Com a Conest você pode acompanhar os projetos
                        e fazer parte dessa grande história.
                    </Paragraph>
                </TextContainer>
            </MainContent>
            <TeamContainer>
                <Title>
                    Nossa Equipe de Especialistas
                </Title>
                <PeopleContainer>
                    <CardPeople image={People} nome="Nathan Menezes" funcao="Desenvolvedor Full-Stack"/>
                    <CardPeople image={Marcelo} nome="Marcelo Oliveira" funcao="Desenvolvedor Full-Stack"/>
                    <CardPeople image={Mayara} nome="Amanda Vitoria" funcao="Banco de Dados (P.O)"/>
                    <CardPeople image={Amanda} nome="Mayara Prado" funcao="Banco de Dados (Scrum)"/>
                </PeopleContainer>
                <PeopleContainer>
                    <CardPeople image={Tainy} nome="Tainy Souza" funcao="Desenvolvedor Full-Stack"/>
                    <CardPeople image={Hartur} nome="Hartur Alcantara" funcao="Desenvolvedor Back-End"/>
                    <CardPeople image={Wesley} nome="Wesley Wilson" funcao="Desenvolvedor Front-End"/>
                    <CardPeople image={Johnny} nome="Johnny Alexandre" funcao="Banco de Dados"/>
                </PeopleContainer>
            </TeamContainer>
            <Footer/>
        </Container>
    </>
  )
}
