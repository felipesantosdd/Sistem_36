import styled from "styled-components";

export const ModalContainer = styled.div`
padding: 3%;
border-radius: 50px;
display: flex;
align-items: center;
flex-direction: column;
backdrop-filter: blur(50px);
box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;


h2{
    color: white;
    font-size: 1.5rem;
    margin-bottom: 2rem;
};

input {
    width: 100%;
    padding: 0 1.5rem;
    border: none;
    height: 4rem;
    border-radius: 0.25rem;
    border: 1px solid #e7e9ee;
    background: #e7e9ee;
    font-weight: 400;
    font-size: 1rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    & + input {
    margin: 1rem;
};

}

button[type="submit"]{
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    background-color: #914CC8;
    font-size: 1rem;
    margin-top: 1.5rem;
    border-radius: 10px;

    transition: filter 0.5s;

    &:hover{
        filter: brightness(0.5);
    }
}



`

