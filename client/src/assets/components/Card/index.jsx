import React from 'react'
import { CardBox } from './Card';

export const Card = ({title, image, nome, tipo, valor}) => {
  return (
    <CardBox>
        <img src={image} alt="Ong Image"  />
        <div className="boxDivider">
            <div className="divider">
                <p>{tipo}</p>
                <h4>{nome}</h4>
            </div>
            <span>ETH</span>
        </div>
        <div className="boxDivider">
            <p>Preço</p>
            <span>{valor}</span>
        </div>
    </CardBox>
  )
}
