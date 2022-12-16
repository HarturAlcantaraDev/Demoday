import React from 'react';
import logo from '../../../assets/images/conest.png';
import { Container, InputSearch, Logo, SearchBox, User, UserImage, UserName } from './FeedNavBar';
import {BiSearchAlt2} from "react-icons/bi";
import {IoIosArrowDown} from "react-icons/io";
import UserImg from "../../../assets/images/image 7.png"
import { Link } from 'react-router-dom';

const FeedNavBar = (() => {
  return (
    <Container>
        <Link to={'/'}>
          <Logo src={logo}/>
        </Link>
        <SearchBox>
          <BiSearchAlt2  size="20px" color="#4c4c4c"/>
          <InputSearch type="text" placeholder="Pesquise por ONGs"/>
        </SearchBox>
        <User>
          <UserImage src={UserImg} />
          <UserName>UserName</UserName>
          <IoIosArrowDown size={'15px'}/>
        </User>
    </Container>
  )
})

export default FeedNavBar;