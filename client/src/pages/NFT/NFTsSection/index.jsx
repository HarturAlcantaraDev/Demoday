import React from 'react'
import NFTCard from '../../../assets/components/NFTCard'
import { SectionTitle } from '../CollectionSection/CollectionSection'
import { Container, NFTCardContainer } from './NFTsSection'
import { Card } from '../../../assets/components/Card'

export default function NFTsSection() {
  return (
    <Container>
        <SectionTitle>
            NFTs Recomendadas
        </SectionTitle>
        <NFTCardContainer>
          <Card valor="1.23 ETH" nome="Purple Girl" tipo="Ambiental" image="https://i.seadn.io/gae/zckvMcR_iHuwMouNCkSiPl76NdpyIWciiJCqnXqawosHljzhZiLNm1MvsnTNYGQqq5yBlNOnxnDMDGTweQ7TuOWYo49eRUP48SK_JA?auto=format&w=384"/>
          <Card valor="2.54 ETH" nome="Alexia Torre" tipo="Animais" image="https://i.seadn.io/gae/8kBsoCMm7DQVT4F_OB5W1urWID77Ayd9FYPTZXUOWf5IJLMRucTpRicSFDGsg08c4T5yL3iGiaN_cF9T_Rw39kXKWoXydqL15Zb8RA?auto=format&w=384"/>
          <Card valor="3.64 ETH" nome="Astronaut Crystal" tipo="Crianças" image="https://static01.nyt.com/images/2021/03/11/arts/11nft-explain-1/11nft-explain-1-mediumSquareAt3X.jpg"/>
          <Card valor="1.41 ETH" nome="Fenix A." tipo="Educação" image="https://i.seadn.io/gae/x5e4Rnozcq57UN6jE0QlmuYZoASKT1vt1MJgWDtZtBWuGzJ7bwzMJWSA7ilcYJEjq7bsOY04FiAlYSn3-O7tN1SLzgXQgU8bmA3s?auto=format&w=384"/>
          <Card valor="0.46 ETH" nome="Fire Samurai" tipo="Deficiente" image="https://i.seadn.io/gae/memEYd6RBiWnjXznDwwZGzoQTMtvFLdfGeayrm3_JYbHJu9xvLAVrpRf6YaG6FD0sodfdIg5AiYgZPcerISmwVVyfCx4Fiyozz31?auto=format&w=384"/>
          <Card valor="0.24 ETH" nome="Jungle Girl" tipo="Idosos" image="https://i.seadn.io/gae/za3oaVYiCP9jp15jMOKGJfakvgaDswwNZs5bpaPirrGK4uf10s9fQD9FZElfR6gB48q1r1CXpQnmnuOrJnFlyDwj1wVxnR98Fbz0?auto=format&w=384"/>
          <Card valor="1.34 ETH" nome="Anime Boy" tipo="Alimentação" image="https://i.seadn.io/gae/75asdgKxsOxRtB94KxvlCSwlkhuf_4EXCIjEwk31H9K8_hs4UblwFQufEdclthRSzXwh3WGOBiszh3xBGWjAKGw2Y3n1g9xVrB2mVA?auto=format&w=384"/>
          <Card valor="2.23 ETH" nome="Cold Boy" tipo="Animais" image="https://i.seadn.io/gae/lEEl_sUPdlAn76WKCzT8tSQOZl_36SKQZLilYcPUaLvrC268G1eKELdfvhSNVv7IV-iBUw_Q2xg1CpzeLbLp3uaOKuwdGLIm87QAxg?auto=format&w=384"/>
          <Card valor="5.23 ETH" nome="Puch Ades" tipo="Ambiental" image="https://i.seadn.io/gae/IMla-TFxRP6rMDDJy9WUzOxuaXERwA2dSB3F9qf390z6_-EduDZ4gjwaqY68J-cViubH8tWKZvfzmadmTk1tOYaPctnVpJyPTCYR?auto=format&w=384"/>
          <Card valor="1.24 ETH" nome="Genji Face" tipo="Crianças" image="https://i.seadn.io/gae/glqUOopJOCDU5THzKWzf_mYWqN2Xs5byWO3RRWU2pVfHdqeqzvX8CbvQ4sRuIrCUnMtnN22P4RdQlxF2YVzJup7v_KCTWcOTQEDBCQ?auto=format&w=384"/>
        </NFTCardContainer>
    </Container>
  )
}
