import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root{
    --main-color00:#DFA7EC;
    --main-color01:#C76EC9;
    --main-color02:#7E55BF;
    --main-color03:#48257D;
    --main-color04:#1b0a40;
    --error:rgb(205, 8, 8);
}

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');


* {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }
  body,html{
    width: 100vw;
    height: 100vh;
  }
  body {
    background: var(--color-font);
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    margin: 0;
  }
  body, input, button, textarea {
    font-size: 1rem;
  }
  
  h1{
    font-family: "Inter", sans-serif;
  font-style: bold;
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  }
  
  h2, h3, h4, h5, h6, strong {
    font-weight: 400;
    font-size: 1rem;
  }
  button {
    font-size: 1rem;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    }

  ul, ol, li{
    list-style: none;
  }

  img{
    max-width: 100%;
  }

  .mainContainer{
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
    padding: 0.8rem;
  }



  /* width */

  /* Track */
  ::-webkit-scrollbar-track {
    background: var(--color-text-light);
    margin: 1rem;
    border-radius: 1.6rem;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--color-primary-dark);
    border-radius: 1.6rem;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-primary);
  }
`