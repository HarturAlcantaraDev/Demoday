import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  height: 280px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: -20px 0px 20px 0px;
  padding: 0px 10px;
`;

export const Card = styled.div`
  width: 280px;
  height: 250px;
  overflow: hidden;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;

  &:hover{
    transform: scale(1.02);
  }
`;
export const CardImg = styled.img`
  width: 100%;
  height: 50%;

`;

export const CardInfo = styled.div`
  background: #fff;
  width: 100%;
  height: 50% ;
  border-top: transparent;
  border: 1px solid #d4d4d4;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: visible; 
  border-radius: 0px 0px 10px 10px;
`;
export const IconCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: #Fff;
  transform: translateY(-20px);
  z-index: 99;
`;
export const CardTitle = styled.h4`
  font-size: 18px;
  transform: translateY(-20px);
  overflow: hidden;
`
export const CardText = styled.p`
  transform: translateY(-10px);
  text-align: center;
  width: 80%;
  overflow: hidden;
`

export const Tour = styled.div`
   position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  
    background-color: #55555560;
`

export const TourBox = styled.iframe`
    width: 70%;
    height: 70%;
    background: #fff;
    border-radius: 10px;
`
export const CloseBtn = styled.div`
   position: fixed;
    top: 20px;
    right: 50px;
`