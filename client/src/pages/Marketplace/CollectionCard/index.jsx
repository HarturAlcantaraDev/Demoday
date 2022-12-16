import React from 'react'
import { Card } from './CollectionCard'

export default function CollectionCard({title, image}) {
  return (
    <Card>
        <img src={image} alt="" />
        <h3 className='titleName'>{title}</h3>
    </Card>
  )
}
