import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 
  "earned status",
  "",
  "";
  width: 100%;
  height: 100%;
  padding: 40px;
`

export const EarnedBox = styled.div`
        width: 60%;
        height: 250px;
        border-radius: 5px;
        background-color: #fff;
`

export const StatusBox = styled.div`
        width: 10%;
        height: 250px;
        background-color: #fff;
`