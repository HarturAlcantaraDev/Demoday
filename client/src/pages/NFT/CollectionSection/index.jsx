import React from 'react'
import CollectionCard from '../../../assets/components/CollectionCard'
import { SectionTitle, Container, CardContainer } from './CollectionSection'
import AmbientalCollection from "../../../assets/images/AmbientalCollection.png";
import CatCollection from "../../../assets/images/CatCollection.png";
import DogCollection from "../../../assets/images/DogCollection.png";


export default function CollectionSection() {
  return (
    <>
    <Container>
        <SectionTitle>
          Coleções Recomendadas
        </SectionTitle>
      <CardContainer>
        <CollectionCard image={CatCollection}/>
        <CollectionCard image={DogCollection}/>
        <CollectionCard image={AmbientalCollection}/>
      </CardContainer>
    </Container>
    </>
  )
}
