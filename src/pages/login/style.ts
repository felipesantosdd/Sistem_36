import styled from "styled-components";

export const LoginForm = styled.form`
  border-radius: 10px;
  padding: 5%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  width: auto;
  height: auto;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  backdrop-filter: blur(10px);
`

export const FormInput = styled.input`
 padding: 1em 1em 1em 0.5em;
  margin: 1em 0em;
  border: none;
  background: none;
  border-bottom: solid 2px #524b6a;
  width: 100%;
  outline: 0px;
  background: none;
  color: black;
`;


export const Button = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 12px 33px;
gap: 10px;
width: 132px;
height: 48px;
background: #4B2E59;
color: white;
border: none;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  `;

