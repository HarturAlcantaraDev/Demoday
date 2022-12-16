import React from 'react';
import Nav from '../../assets/components/Nav/Nav';
import { SectionDoacao } from './SectionDoacao';
import { SectionFunciona } from './SectionFunciona';
import SliderHome from './SliderHome';
import Footer from '../../assets/components/Footer';

function Home() {
  return(
    <div>
        <Nav />
        <SliderHome />
        <SectionDoacao />
        <SectionFunciona />
        <Footer />
    </div>
  );
}

export default Home; 