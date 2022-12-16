import styled from 'styled-components';

export const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  width: 230px;
  border-radius: 10px;
  border: 1px solid #d4d4d4;

  img{
    width: 100%;
    height: 200px;
  }

  .boxDivider{
    padding: 5px 10px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .boxDivider:last-child{
    margin-top: 10px;
  }
`