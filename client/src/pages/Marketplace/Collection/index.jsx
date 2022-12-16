import React from 'react'
import CollectionCard from '../CollectionCard'
import { CollectionContainer } from './Collection'
import image from "../../../assets/images/mktBanner.png"

const Collection = () => {
  return (
    <CollectionContainer>
        <h3>Categoria de NFTs</h3>
        <div className="collectionSection">
            <CollectionCard title="Animais" image="https://chacarapet.com.br/blog/wp-content/uploads/2020/06/gato-e-cachorro-juntos-750x410.png"/>
            <CollectionCard title="Crianças" image="https://leiturinha.com.br/blog/wp-content/uploads/2018/01/iStock-1220730872-1.jpg"/>
            <CollectionCard title="Idosos" image="https://www.fbh.com.br/wp-content/uploads/2020/12/idosos.jpg"/>
            <CollectionCard title="Ambiental" image="https://smastr16.blob.core.windows.net/portaleducacaoambiental/sites/201/2021/01/futuroea.jpg"/>
            <CollectionCard title="Educação" image="https://diarioescola.com.br/wp-content/uploads/2022/01/novos_modelos_educacao_01-1030x541.jpg"/>
        </div>
    </CollectionContainer>
  )
}

export default Collection