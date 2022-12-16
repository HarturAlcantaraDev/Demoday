import React from 'react';
import CardOngSlider from './CardOngSlider';
import Nav from '../../assets/components/Nav/Nav';
import OngsHome from './OngsHome';
import Footer from '../../assets/components/Footer';
import CardCategoriasSlider from './CardCategoriasSlider' 


// import { Container } from './styles';

function ONGs() {
  return(
    <>
        <Nav />
        <OngsHome />
        <CardCategoriasSlider />
        <CardOngSlider />
        <Footer />
    </>
  );
}

export default ONGs;