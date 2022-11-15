import styled from "styled-components"

export const HeaderContainer = styled.header`
width: 99%;
height: 70px;
z-index: 5;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
backdrop-filter: blur(10px);
position: fixed;
top: 0;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 50px;
overflow-x: hidden;

`

export const TopContainer = styled.div`
width: auto;
height: 80%;
display: flex;
align-items: center;
justify-content: space-around;
`

export const Logo = styled.div`
background-image: url(https://i.pinimg.com/564x/18/f1/cb/18f1cbeeee674cf0608d4264f3006390.jpg);
background-position: center;
background-size: 175%;
width: 60px;
height: 60px;
border-radius: 50px;
margin: 0 20px;
`