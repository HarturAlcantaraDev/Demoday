import React from "react";
import logo from "../../images/logo-branca.png";
import { AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";

import { FooterSection, Logo, SocialMedia, List, Column, LinkBtn } from "./Footer";

function Footer() {
  return (

    <FooterSection>
      <Column>
        <Logo src={logo} />
        <SocialMedia>
          <AiOutlineInstagram size="30px" color="#fff" />
          <p>www.instagram.com/conest</p>
        </SocialMedia>
        <SocialMedia>
          <AiOutlineLinkedin size="30px" color="#fff" />
          <p>www.linkedin.com/conest</p>
        </SocialMedia>
      </Column>
      <Column>
      </Column>
    </FooterSection>
  );
}

export default Footer;
