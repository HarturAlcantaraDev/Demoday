import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    
    * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    text-decoration: none;
    font-family: "Poppins", roboto;
    overflow-x: hidden;
  }

  body, input, button {
    font: 14px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }


::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
    background: #DDDDDD; 
}

::-webkit-scrollbar-thumb {
    background: #34AA55; 
}

::-webkit-scrollbar-thumb:active {
    background: #288642; 
}
`