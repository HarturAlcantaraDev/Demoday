import React from 'react'
import { PostContainer, PostHeader, OngLogo, PostInfo, PostTitle, PostText, PostImage, PostFooter, OngNome ,TempoPost, PostContent, PostFooterContent, PostFooterText } from './FeedPost'
import LogoOng from '../../../assets/images/OngLogo1.png'
import {AiOutlineHeart} from 'react-icons/ai'
import {BiCommentDetail, BiCoinStack, BiShare} from 'react-icons/bi'

function FeedPost({image}){
    return(
        <PostContainer>
            <PostHeader>
                <OngLogo src={LogoOng} alt="" />
                <PostInfo>
                    <OngNome>Salva Cão</OngNome>
                    <TempoPost>1 dia atrás</TempoPost>
                </PostInfo>
            </PostHeader>
            <PostContent>
                <PostTitle>Gratidão</PostTitle>
                <PostText>Graças ao apoio que recebemos da plataforma @CoNest, conseguimos tirar vários dos nossos anjinhos das ruas, garantindo um lar com pessoas que com certeza irão amá-los ❤️</PostText>
                <PostImage src={image} alt="" />
                <PostFooter>
                    <PostFooterContent>
                        <AiOutlineHeart size="24px"/>
                        <PostFooterText>
                            Curtir
                        </PostFooterText>
                    </PostFooterContent>
                    <PostFooterContent>
                        <BiCommentDetail size="24px"/>
                        <PostFooterText>
                            Comentar
                        </PostFooterText>
                    </PostFooterContent>
                    <PostFooterContent>
                        <BiCoinStack size="24px"/>
                        <PostFooterText>
                            Apoiar
                        </PostFooterText>
                    </PostFooterContent>
                    <PostFooterContent>
                        <BiShare size="24px"/>
                        <PostFooterText>
                            34
                        </PostFooterText>
                    </PostFooterContent>
                </PostFooter>
            </PostContent>
        </PostContainer>
    )
}

export default FeedPost