import styled  from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 20px auto;

  .box{
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;

    h2{

    }
    p{
      text-align: center;
      width: 70%;
      font-size: 16px;
    }
    img{
      width: 60%;
      height: auto;
    }
  }
`


