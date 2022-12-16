import React from 'react'
import NFTNav from '../../assets/components/NFTNav'
import { CollectionContainer } from './NFTCollection';
import bg from "../../assets/images/bgCollection.png"
import collectionImg from "../../assets/images/amanda 1.png"
import { Card } from '../../assets/components/Card';
import Footer from './../../assets/components/Footer/index';
import {} from "react-icons";

export default function NFTCollection() {
  return (
    <>
        <NFTNav />
        <CollectionContainer>
            <div className="collection-content">
                <img src={bg} alt="" srcset="" />
                <div className="collection">
                    <div className="collection-info">
                        <img src={collectionImg} alt="" srcset="" />
                        <p>Educação</p>
                        <button>Compartilhar</button>
                    </div>
                    <div className="collections-actions">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias sint dolorem reprehenderit, incidunt sunt cum a magnam ipsum cupiditate rem non deserunt id, repudiandae aspernatur? Labore, expedita eaque? Obcaecati, perferendis.</p>
                        
                    </div>
                </div>
            </div>
            <div className="collection-cards">
                <Card image="https://artart-uploads.s3.amazonaws.com/2021/11/featured-artist-slimesunday-header_1024x1024.webp" tipo="diwjandijnwaj" nome='feia' valor='10'/>
                <Card image="https://artart-uploads.s3.amazonaws.com/2021/11/featured-artist-slimesunday-header_1024x1024.webp" tipo="diwjandijnwaj" nome='feia' valor='10'/>
                <Card image="https://artart-uploads.s3.amazonaws.com/2021/11/featured-artist-slimesunday-header_1024x1024.webp" tipo="diwjandijnwaj" nome='feia' valor='10'/>
                <Card image="https://artart-uploads.s3.amazonaws.com/2021/11/featured-artist-slimesunday-header_1024x1024.webp" tipo="diwjandijnwaj" nome='feia' valor='10'/>
                <Card image="https://artart-uploads.s3.amazonaws.com/2021/11/featured-artist-slimesunday-header_1024x1024.webp" tipo="diwjandijnwaj" nome='feia' valor='10'/>
                <Card image="https://artart-uploads.s3.amazonaws.com/2021/11/featured-artist-slimesunday-header_1024x1024.webp" tipo="diwjandijnwaj" nome='feia' valor='10'/>
                <Card image="https://artart-uploads.s3.amazonaws.com/2021/11/featured-artist-slimesunday-header_1024x1024.webp" tipo="diwjandijnwaj" nome='feia' valor='10'/>
                <Card image="https://artart-uploads.s3.amazonaws.com/2021/11/featured-artist-slimesunday-header_1024x1024.webp" tipo="diwjandijnwaj" nome='feia' valor='10'/>
                <Card image="https://artart-uploads.s3.amazonaws.com/2021/11/featured-artist-slimesunday-header_1024x1024.webp" tipo="diwjandijnwaj" nome='feia' valor='10'/>
                <Card image="https://artart-uploads.s3.amazonaws.com/2021/11/featured-artist-slimesunday-header_1024x1024.webp" tipo="diwjandijnwaj" nome='feia' valor='10'/>
                <Card image="https://artart-uploads.s3.amazonaws.com/2021/11/featured-artist-slimesunday-header_1024x1024.webp" tipo="diwjandijnwaj" nome='feia' valor='10'/>
                <Card image="https://artart-uploads.s3.amazonaws.com/2021/11/featured-artist-slimesunday-header_1024x1024.webp" tipo="diwjandijnwaj" nome='feia' valor='10'/>

            </div>
        </CollectionContainer>
        <Footer />
    </>


    
  )

}
