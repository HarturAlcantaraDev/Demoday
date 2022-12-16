import React from 'react'
import { PeopleImg, PeopleCard, PeopleName, PeopleFuntion } from './PeopleCard'

export default function CardPeople({image, nome, funcao}) {
  return (
    <>
        <PeopleCard>
            <PeopleImg src={image}/>
            <PeopleName>{nome}</PeopleName>
            <PeopleFuntion>{funcao}</PeopleFuntion>
        </PeopleCard>
    </>
  )
}
