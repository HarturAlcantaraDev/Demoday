import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import GlobalStyles from './assets/styles/GlobalStyles';
import FeedOngs from './pages/Feed';
import ONGs from './pages/ONGs';
import NFTPage from './pages/NFTPage';
import NFT from './pages/NFT';
import OngPage from './pages/OngPage';
import Login from './pages/Login';
import AboutUs from './pages/AboutUs';
import ERP from './pages/ERP/index';
import Marketplace from './pages/Marketplace/index';
import NFTCollection from './pages/NFTCollection/index';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path="/login" element={<Login />} />
            <Route path='/ongs' element={<ONGs />} />
            <Route path='/ongs/feed' element={<FeedOngs />} />
            <Route path='/ongs/ongpage' element={<OngPage />} />
            <Route path='/nftpage' element={<NFTPage />}/>
            <Route path='/nft' element={<NFT />}/>
            <Route path='/sobrenos' element={<AboutUs/>}/>
            <Route path='/erp' element={<ERP/>}/>
            <Route path='/marketplace' element={<Marketplace/>}/>
            <Route path='/nft-collection' element={<NFTCollection />}/>

        </Routes>
      </BrowserRouter>
      <GlobalStyles />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

