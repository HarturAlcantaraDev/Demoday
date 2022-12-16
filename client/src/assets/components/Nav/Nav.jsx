import React, { useState } from "react";
import logo from "../../images/conest.png";
import {
  Container,
  Logo,
  NavItens,
  NavItem,
  NavButton,
  MobileMenu,
} from "../../styles/Nav";
import { Link } from "react-router-dom/";
import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai";

const Nav = () => {
  const [showModal, setShowModal] = useState(false);
  var url = window.location.href;
  var homeAct, ongsAct, nftAct, sobreNosAct;

  switch (url) {
    case "http://localhost:3000/":
      homeAct = "active";
      break;
    case "http://localhost:3000/ongs":
      ongsAct = "active";
      break;
    case "http://localhost:3000/sobrenos":
      sobreNosAct = "active";
      break;
    default:
      break;
  }

  let screenSize = window.screen.width;

  return (
    <>
      <Container>
        <div className="box">
          {screenSize < 700 ? (
            <AiOutlineMenu
              size={"26px"}
              onClick={() => setShowModal(!showModal)}
              className="menuBtn"
            />
          ) : (
            ""
          )}
          <div>
            <Link to={"/"}>
              <Logo src={logo} />
            </Link>
          </div>
        </div>

        <NavItens className="links">
          <Link to="/">
            <NavItem className={homeAct}>Home</NavItem>
          </Link>
          <Link to="/ongs">
            <NavItem className={ongsAct}>ONGs</NavItem>
          </Link>
          <Link to="/nft">
            <NavItem className={nftAct}>NFT</NavItem>
          </Link>
          <Link to="/sobrenos">
            <NavItem className={sobreNosAct}>Sobre Nós</NavItem>
          </Link>
        </NavItens>

        <Link to="/login">
          <NavButton>Login</NavButton>
        </Link>
      </Container>
      {showModal && (
        <MobileMenu className="mobileMenu">
          <div className="mobile-links">
            <Link to="/">
              <button className={homeAct}>Home</button>
            </Link>
            <Link to="/ongs">
              <button className={ongsAct}>ONGs</button>
            </Link>
            <Link to="/nft">
              <button className={nftAct}>NFT</button>
            </Link>
            <Link to="/">
              <button className={sobreNosAct}>Sobre Nós</button>
            </Link>
          </div>
        </MobileMenu>
      )}
    </>
  );
};

export default Nav;
